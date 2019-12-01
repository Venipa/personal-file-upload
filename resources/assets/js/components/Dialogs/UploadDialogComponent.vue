<template>
  <b-modal
    centered
    ref="showUpload"
    title="Upload"
    size="xl"
    @hide="onReloadAll"
    :no-close-on-esc="isLoading"
    :no-close-on-backdrop="isLoading"
  >
    <template v-slot:modal-footer>
      <div class="d-flex flex-column">
        <b-button
          class="d-flex flex-row"
          variant="dark"
          @click.prevent="onUpload"
          :disabled="isLoading"
        >
          <span>Upload</span>
          <app-spinner v-if="isLoading" class="ml-2" :size="8" sizeUnit="px" color="#ffffff" />
        </b-button>
      </div>
    </template>
    <div class="d-flex flex-column drop-wrapper">
      <file-drop
        name="file"
        ref="uploadDrop"
        label-idle="Drop files here..."
        allow-multiple="true"
        :server="`/api/v1/upload`"
        :instantUpload="false"
        method="post"
        :max-files="25"
        :allowRevert="false"
        v-bind:files="pond.files"
        @processfile="onFileComplete"
        @init="handleFilePondInit"
      />
    </div>
  </b-modal>
</template>

<script>
import vueFilePond, { FileStatus } from "vue-filepond";
import { PulseLoader } from "@saeris/vue-spinners";
import { axios } from "../../app";
import { user } from "../../api";
const FilePond = vueFilePond();

const defaultOptions = () => {
  return {
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
    "file-drop": FilePond
  },
  data() {
    return defaultOptions();
  },
  created() {},
  methods: {
    open() {
      this.$refs["showUpload"].show();
    },
    close() {
      this.$refs["showUpload"].hide();
    },
    onUpload(ev) {
      const drop = this.$refs.uploadDrop;
      const files = drop.getFiles().filter(x => [2].includes(x.status));
      if (!files?.length) {
        drop.browse();
        return;
      }
      this.isLoading = true;
      drop.processFiles();
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
    onFileComplete() {
      if (
        this.$refs.uploadDrop
          .getFiles()
          .filter(x => [2, 3, 9, 7].includes(x.status)).length === 0
      ) {
        this.isLoading = false;
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
</style>