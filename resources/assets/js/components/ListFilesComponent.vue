<template>
  <div class="list-file-wrapper">
    <div class="container d-flex flex-column my-3">
      <app-header class="mb-3" />
      <div class="row mb-3" v-if="message">
        <div class="col d-flex flex-column">
          <div :class="`card alert alert-${message.type}`">
            {{ message.content }}
          </div>
        </div>
      </div>
      <div class="d-flex flex-column table table-sm" v-if="files">
        <div class="card">
          <div
            class="card-header d-flex flex-row justify-content-start align-items-center"
          >
            <button class="btn btn-sl mr-3" @click="openUploadDialog">
              Upload
            </button>
            <div class="flex-fill">Files</div>
            <div
              class="d-flex flex-row justify-content-start align-items-center"
              v-if="sizeUsed && sizeMax && maxUploadSize"
            >
              <span
                v-if="maxUploadSize != -1"
                v-b-tooltip.hover
                title="Max Filesize"
                class="badge badge-success mr-2"
                >{{ humanStorageParse(maxUploadSize) }}</span
              >
              <b-progress
                v-if="sizeMax != -1"
                :max="sizeMax"
                show-progress
                animated
                v-b-tooltip.hover
                :title="humanStorageStat"
                style="width: 100px; height: 1.5em"
              >
                <b-progress-bar :value="sizeUsed">
                  <strong
                    >{{ ((sizeUsed / sizeMax) * 100).toFixed(2) }}%</strong
                  >
                </b-progress-bar>
              </b-progress>
              <span v-else class="badge"
                >{{ humanStorageParse(sizeUsed) }} / Unlimited</span
              >
            </div>
          </div>
          <div class="card-body py-1 mb-1 px-0 position-relative">
            <div class="fill-spinner" v-if="isLoading">
              <atom-spinner
                :animation-duration="1000"
                :size="60"
                color="#7289da"
              />
            </div>
            <div class="flex-column">
              <div class="d-flex flex-column col mb-3 mt-2">
                <b-form-input
                  @keypress.prevent.enter="onSearch"
                  v-model="search"
                  placeholder="Search..."
                  type="search"
                ></b-form-input>
              </div>
              <div
                class="item-row d-flex flex-row justify-content-start align-items-center"
                v-for="item in files.data"
                :key="item.id"
              >
                <div class="mr-3 text-right" style="width: 50px">
                  {{ item.id }}
                </div>
                <div class="flex-fill mr-2">
                  <div class="open-item-direct">{{ item.filename }}</div>
                </div>
                <div class="mr-3 badge text-right" style="flex: 0 0 100px">
                  {{ humanStorageParse(item.filesize) }}
                </div>
                <div
                  class="mr-1 btn-showFile"
                  style="flex: 0 0 100px"
                  @click="openShowFile(item)"
                >
                  {{ item.share_token }}
                </div>
                <div
                  class="d-flex flex-row justify-content-center align-items-center"
                >
                  <b-dropdown
                    variant="link"
                    toggle-class="btn-icon text-dark"
                    no-caret
                    right
                  >
                    <template v-slot:button-content>
                      <vert-more-icon :size="20"></vert-more-icon>
                    </template>
                    <b-dropdown-item @click="copyLink(item)"
                      >Copy Link</b-dropdown-item
                    >
                    <b-dropdown-item @click="download(item)"
                      >Download</b-dropdown-item
                    >
                    <b-dropdown-item @click="deleteItem(item)" variant="danger"
                      >Delete</b-dropdown-item
                    >
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <b-pagination
          v-if="files"
          v-model="files.current_page"
          :total-rows="files.total"
          :per-page="files.per_page"
          @change="onPageChange"
          :disabled="isLoading"
        ></b-pagination>
      </div>
    </div>
    <b-modal ref="showFile" @hidden="onShowFileClose" :hide-footer="true" size="xl">
      <div class="d-flex flex-column" v-if="selectedFile">
        <template v-if="selectedFile.url">
          <iframe
            v-if="selectedFile.type === 'playback'"
            :src="selectedFile.url"
            height="300"
            frameborder="0"
          ></iframe>
          <img
            class="img-fluid" style="margin: 0 auto"
            v-else-if="selectedFile.type === 'image'"
            :src="selectedFile.url"
            :alt="selectedFile.filename"
          />
          <span class="text-muted" v-else>Unable to display file</span>
        </template>
        <span class="text-muted" v-else>Unable to display file</span>
        <div class="mt-3 d-flex justify-content-end">
          <b-button variant="primary" @click="closeShowFile">Close</b-button>
        </div>
      </div>
    </b-modal>
    <upload-dialog-component
      ref="uploadDialog"
      @on-upload-complete="reloadFileList"
    ></upload-dialog-component>
  </div>
</template>

<script>
import { axios } from "../app";
import { openLink, ErrorBag } from "../helpers";
import filesize from "filesize";
import VertMoreIcon from "vue-material-design-icons/DotsVertical";
import { AtomSpinner } from "epic-spinners";
import { user } from "../api";
import UploadDialogComponent from "./Dialogs/UploadDialogComponent.vue";
import Url from "url-parse";

const defaultData = () => {
  return {
    files: null,
    user: null,
    sizeUsed: null,
    sizeMax: null,
    maxUploadSize: null,
    selectedFile: null,
    isLoading: true,
    prevPage: null,
    message: null,
    search: null,
    prevSearch: null,
  };
};
export default {
  components: {
    "atom-spinner": AtomSpinner,
    "app-header": () => import("./Dashboard/HeaderComponent"),
    UploadDialogComponent,
    VertMoreIcon,
  },
  data() {
    return defaultData();
  },
  computed: {
    appName() {
      return window.appName;
    },
    humanStorageStat() {
      return `${filesize(this.sizeUsed)} / ${filesize(this.sizeMax)}`;
    },
    showFileTitle() {
      return this.selectedFile?.title;
    },
  },
  methods: {
    openUploadDialog() {
      this.$refs["uploadDialog"].open();
    },
    setSuccess(str) {
      this.message = {
        content: str,
        type: "success",
      };
    },
    setError(str) {
      this.message = {
        content: str,
        type: "danger",
      };
    },
    /**
     * @param {string} path
     */
    route(path) {
      return `${this.$root.$el.ownerDocument.location.origin}/${
        path.indexOf("/") === 0 ? path.substring(1) : path
      }`;
    },
    showToast(title, msg, type = "danger") {
      this.$bvToast.toast(msg, {
        title: title,
        variant: type || "default",
        autoHideDelay: 5000,
        appendToast: true,
      });
    },
    copyLink(item) {
      this.$clipboard(this.route(`/f/${item.share_token}`));
    },
    download(item) {
      openLink(this.route(`/i/${item.share_token}`), {
        target: "_self",
      });
    },
    reloadFileList() {
      this._onPageChange(this.prevPage);
    },
    deletePrecheck(item) {
      return this.$bvModal.msgBoxConfirm(`Deleting ${item.filename}`, {
        title: "Are you sure?",
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: "YES",
        cancelTitle: "NO",
        footerClass: "p-2",
        hideHeaderClose: false,
        centered: true,
      });
    },
    deleteItem(item) {
      this.deletePrecheck(item).then((isFine) => {
        if (isFine) {
          this.isLoading = true;
          user
            .deleteFile(item.share_token)
            .then((x) => {
              if (x.data?.message) {
                this.setSuccess(x.data?.message);
                this._onPageChange(this.prevPage || 1).then((x) => {
                  this.isLoading = false;
                });
              }
            })
            .catch(({ error, data }) => {
              if (data?.errors) {
                this.setError(ErrorBag.getFirstError(data.errors));
              } else {
                this.setError(ErrorBag.getResponseErrorString(error));
              }
              this.isLoading = false;
            });
        }
      });
    },
    closeShowFile() {
      this.$refs["showFile"].hide();
    },
    humanStorageParse(str) {
      return filesize(str);
    },
    openShowFile(file) {
      const isImage = () =>
        /^(image\/(jp(e)g|png|gif|webp))/.test(file.filemime);
      const isPlaybackMedia = () => /^(video|audio)/.test(file.filemime);
      this.selectedFile = {
        ...file,
        type: isPlaybackMedia() ? "playback" : isImage() ? "image" : null,
        url: isPlaybackMedia()
          ? `/embed/${file.share_token}`
          : isImage()
          ? `/f/${file.share_token}`
          : null,
      };
      if (!this.selectedFile.url) {
        return openLink(`/f/${file.share_token}`, { target: "_blank" });
      }
      this.$refs["showFile"].title = `Viewing: ${file.filename}`;
      this.$refs["showFile"].show();
    },
    onShowFileClose() {
      this.$refs["showFile"].title = null;
      this.selectedFile = null;
    },
    onPageChange(page = 1) {
      if (this.prevPage === page) {
        return;
      } else if (this.prevPage !== null) {
        const mUrl = new Url(window.location.href, true);
        mUrl.query.page = page;
        history.pushState(null, window.document.title, mUrl.toString());
      }
      this.prevPage = page;
      return this._onPageChange(page);
    },
    onSearch() {
      if (this.prevSearch === this.search) {
        return;
      }
      this.prevSearch = this.search;
      this.isLoading = true;
      return user
        .getFiles(
          this.search && this.search.trim().length >= 2 ? this.search : null,
          1
        )
        .then((x) => {
          return x.data;
        })
        .then((x) => {
          if (x) {
            Object.assign(this.$data, x);
          }
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
        });
    },
    _onPageChange(page = 1) {
      this.isLoading = true;
      return user
        .getFiles(
          this.search && this.search.trim().length >= 2 ? this.search : null,
          page < 1 ? 1 : page
        )
        .then((x) => {
          return x.data;
        })
        .then((x) => {
          if (x) {
            Object.assign(this.$data, x);
          }
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    const startPage = new Url(window.location.href, true).query.page;
    this.onPageChange(startPage && startPage > 0 ? startPage : 1);
  },
};
</script>
<style lang="scss">
.item-row {
  padding: 0 1.25em;
  line-height: 40px;
  height: 40px;
  vertical-align: middle;
  &:hover {
    background-color: #f4f4f4;
  }
  .btn-showFile {
    cursor: pointer;
  }
  .open-item-direct {
    white-space: pre;
    text-overflow: ellipsis;
    max-width: 100%;
    width: 300px;
    display: block;
    overflow: hidden;
    @media (max-width: 768) {
      width: 100px;
    }
  }
}
</style>
