<template>
  <b-modal centered
           ref="showUpload"
           title="Upload"
           size="xl"
           @hide="onReloadAll"
           :no-close-on-esc="isLoading"
           :no-close-on-backdrop="isLoading">
    <template v-slot:modal-footer>
      <div class="d-flex flex-column">
        <b-button class="d-flex flex-row"
                  variant="dark"
                  @click.prevent="onUpload"
                  :disabled="isLoading">
          <span>Upload</span>
          <app-spinner v-if="isLoading"
                       class="ml-2"
                       :size="8"
                       sizeUnit="px"
                       color="#ffffff" />
        </b-button>
      </div>
    </template>
    <b-tabs nav-class="mb-3">
      <b-tab title="Upload"
             active>
        <div class="d-flex flex-column drop-wrapper">
          <file-drop name="file"
                     ref="uploadDrop"
                     label-idle="Drop files here..."
                     allow-multiple="true"
                     :server="`/api/v1/upload`"
                     :instantUpload="false"
                     method="post"
                     :max-files="25"
                     :allowRevert="false"
                     v-bind:files="pond.files"
                     @init="handleFilePondInit" />
        </div>
      </b-tab>
      <b-tab v-if="pond.createdFiles && pond.createdFiles.length > 0"
             title="Uploaded Files">
        <div class="mb-4 mx-2 d-flex flex-row justify-content-end">
          <b-checkbox v-model="showRaw"
                      :unchecked-value="false"
                      :checked="true">
            Raw Links
          </b-checkbox>
        </div>
        <pre v-if="showRaw"
             class="pre-links pre-scrollable border p-2"><template v-for="file in pond.createdFiles">{{file.server.url}}
</template></pre>
        <template v-else v-for="file in pond.createdFiles" class="d-flex flex-column justify-content-center">
  <div class="card p-2 d-flex flex-row align-items-center justify-content-start mb-3"
       :key="file.info.id"
       no-body>
    <div class="flex-grow-1">
      <strong class="border-right pr-2 mr-2">{{filesize(file.info.fileSize || 0)}}</strong>
      <span>{{file.info.filename}}</span>
    </div>
    <b-button @click="copyLink(file.server.url)"
              v-b-tooltip.hover
              title="Copy Link"
              variant="link"
              class="btn-icon text-primary">
      <copy-icon :size="20"></copy-icon>
    </b-button>
  </div>
</template>
      </b-tab>
    </b-tabs>
  </b-modal>
</template>

<script>
import vueFilePond, { FileStatus } from "vue-filepond";
import { PulseLoader } from "@saeris/vue-spinners";
import { axios } from "../../app";
import { user } from "../../api";
import fileSize from "filesize";
const FilePond = vueFilePond();

const defaultOptions = () => {
  return {
    showRaw: false,
    dropzoneOptions: {
      url: window.location.origin + `/api/v1/upload`,
      headers: axios.defaults.headers,
      method: "post",
      thumbnailWidth: 150,
      maxFilesize: 150,
      createImageThumbnails: false,
      maxFiles: 20,
      autoProcessQueue: false,
      parallelUploads: 1,
      addRemoveLinks: true
    },
    pond: {
      files: [],
      createdFiles: [],
      options: {
        instantUpload: false
      }
    },
    isLoading: false
  };
};
export default {
  components: {
    "app-spinner": PulseLoader,
    "file-drop": FilePond,
    "menu-icon": () => import("vue-material-design-icons/DotsVertical"),
    "copy-icon": () => import("vue-material-design-icons/ContentCopy")
  },
  data() {
    return defaultOptions();
  },
  created() {},
  methods: {
    filesize(arg) {
      return fileSize(arg);
    },
    open() {
      this.$refs["showUpload"].show();
    },
    close() {
      this.$refs["showUpload"].hide();
    },
    showToast(title, msg, type = "danger") {
      this.$bvToast.toast(msg, {
        title: title,
        variant: type || "default",
        autoHideDelay: 5000,
        appendToast: true
      });
    },
    onUpload(ev) {
      const drop = this.$refs.uploadDrop;
      const files = drop.getFiles().filter(x => [2].includes(x.status));
      if (!files?.length) {
        drop.browse();
        return;
      }
      this.isLoading = true;
      drop.processFiles().then(files => {
        this.isLoading = false;
        if (files && files.length > 0) {
          this.pond.createdFiles.push(
            ...files.map(x => {
              return { info: x, server: JSON.parse(x.serverId) };
            })
          );
        }
      });
    },
    copyLink(url) {
      this.$clipboard(url);
      this.showToast(
        "Copy Link",
        `Link has been copied to clipboard`,
        "success"
      );
    },
    handleFilePondInit(ev) {
      console.log(ev);
    },
    onReloadAll() {
      if (
        this.$refs.uploadDrop.getFiles().filter(x => [5].includes(x.status))
          .length > 0
      ) {
        this.$emit("on-upload-complete", this.$refs.uploadDrop);
      }
    },
    onComplete() {
      this.isLoading = false;
      this.$emit("on-upload-complete", this.$refs["uploadDrop"]);
    }
  }
};
</script>

<style lang="scss">
.drop-wrapper {
  .filepond--file {
    .filepond--action-process-item.filepond--file-action-button {
      display: none;
    }
  }
  .filepond--root {
    margin-bottom: 0;
  }
  .filepond--item {
    margin: 0 -12px;
  }
  .filepond--wrapper {
    margin: -16px;
  }
  .filepond--panel-top,
  .filepond--panel-bottom {
    border-radius: 0 !important;
  }
}
.pre-links {
  background-color: #fafafa;
}
</style>