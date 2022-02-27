<template>
  <div class="dashboard my-4">
    <div class="container">
      <app-header class="mb-3" />
      <div class="row justify-content-between">
        <div class="col-md mb-2">
          <div class="card">
            <div class="card-body d-flex justify-content-center" v-if="isLoading">
              <atom-spinner :animation-duration="1000" :size="60" color="#7289da" />
            </div>
            <div class="card-body d-flex justify-content-start align-items-center" v-else>
              <view-icon style="width: 32px; height: 32px" :size="32" />
              <div class="flex-fill"></div>
              <div class="d-flex flex-column justify-content-center align-items-end">
                <h4 class="my-0">-</h4>
                <span class="my-0 text-muted text-small">Views</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md mb-2">
          <a href="/files" class="text-decoration-none text-default">
            <div class="card">
              <div class="card-badge card-badge-xl bg-primary text-white">
                <link-icon style="width: 22px; height: 22px" :size="22" />
              </div>
              <div class="card-body d-flex justify-content-center" v-if="isLoading">
                <atom-spinner :animation-duration="1000" :size="60" color="#7289da" />
              </div>
              <div class="card-body d-flex justify-content-start align-items-center" v-else>
                <upload-icon style="width: 32px; height: 32px" :size="32" />
                <div class="flex-fill"></div>
                <div class="d-flex flex-column justify-content-center align-items-end">
                  <h4 class="my-0">{{ stats && stats.uploads || 0 }}</h4>
                  <span class="my-0 text-muted text-small">Uploads</span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md mb-2">
          <a href="/links" class="text-decoration-none text-default">
            <div class="card">
              <div class="card-badge card-badge-xl bg-primary text-white">
                <link-icon style="width: 22px; height: 22px" :size="22" />
              </div>
              <div class="card-body d-flex justify-content-center" v-if="isLoading">
                <atom-spinner :animation-duration="1000" :size="60" color="#7289da" />
              </div>
              <div class="card-body d-flex justify-content-start align-items-center" v-else>
                <link-icon style="width: 32px; height: 32px" :size="32" />
                <div class="flex-fill"></div>
                <div class="d-flex flex-column justify-content-center align-items-end">
                  <h4 class="my-0">{{ stats && stats.links || 0 }}</h4>
                  <span class="my-0 text-muted text-small">Links</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col d-flex">
          <div class="card flex-fill d-flex flex-column">
            <div class="card-body d-flex flex-fill justify-content-center" v-if="isLoading">
              <atom-spinner :animation-duration="1000" :size="60" color="#7289da" />
            </div>
            <div class="card-body d-flex flex-column" v-else>
              <h6>Filetype Statistics</h6>
              <div class="d-flex flex-row justify-content-start align-items-center">
                <image-icon style="width: 32px; height: 32px" class="flex-fill" :size="32" />
                <div class="d-flex flex-column justify-content-center align-items-end">
                  <h4 class="my-0">{{ stats.uploadedTypes.image || 0 }}</h4>
                  <span class="my-0 text-muted text-small">Images</span>
                </div>
              </div>
              <hr class="fill-card" />
              <div class="d-flex flex-row justify-content-start align-items-center">
                <video-icon style="width: 32px; height: 32px" class="flex-fill" :size="32" />
                <div class="d-flex flex-column justify-content-center align-items-end">
                  <h4 class="my-0">{{ stats.uploadedTypes.video || 0 }}</h4>
                  <span class="my-0 text-muted text-small">Video</span>
                </div>
              </div>
              <hr class="fill-card" />
              <div class="d-flex flex-row justify-content-start align-items-center">
                <audio-icon style="width: 32px; height: 32px" class="flex-fill" :size="32" />
                <div class="d-flex flex-column justify-content-center align-items-end">
                  <h4 class="my-0">{{ stats.uploadedTypes.audio || 0 }}</h4>
                  <span class="my-0 text-muted text-small">Audio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col d-flex">
          <div class="card flex-fill flex-col">
            <div class="card-body flex-column" v-if="user">
              <b-form-group id="apikey-1" label="API Key" label-for="apikey-i1">
                <b-form-input id="apikey-i1" :value="user.apikey" type="password" :disabled="true" trim></b-form-input>
              </b-form-group>
              <div class="d-flex flex-row">
                <b-button class="d-flex flex-row mr-2" variant="primary" @click.prevent="generateNew" :disabled="isGenerateLoading">
                  <span>Reset</span>
                  <app-spinner v-if="isGenerateLoading" class="ml-2" :size="8" sizeUnit="px" color="#ffffff" />
                </b-button>
                <b-button variant="dark" @click.prevent="() => copySecret(user.apikey)">Copy</b-button>
              </div>
            </div>
            <div class="card-body d-flex flex-fill justify-content-center" v-else>
              <atom-spinner :animation-duration="1000" :size="60" color="#7289da" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from "../../app";
import { user } from "../../api";
import { ErrorBag } from "../../helpers";
import { AtomSpinner } from "epic-spinners";
import { PulseLoader } from "@saeris/vue-spinners";

import DownloadIcon from "vue-material-design-icons/Download";
import UploadIcon from "vue-material-design-icons/Upload";
import ViewIcon from "vue-material-design-icons/EyePlus";
import LinkIcon from "vue-material-design-icons/Link";
import ImageIcon from "vue-material-design-icons/Image";
import VideoIcon from "vue-material-design-icons/Video";
import AudioIcon from "vue-material-design-icons/Music";

const defaultData = () => {
  return {
    user: null,
    stats: null,
    isLoading: true,
    isGenerateLoading: false,
    log: {
      error: null,
      success: null,
    },
  };
};
export default {
  components: {
    "atom-spinner": AtomSpinner,
    "app-spinner": PulseLoader,
    "app-header": () => import("./HeaderComponent"),
    DownloadIcon,
    UploadIcon,
    ViewIcon,
    LinkIcon,
    ImageIcon,
    VideoIcon,
    AudioIcon,
  },
  data() {
    return defaultData();
  },
  computed: {
    appName() {
      return window.appName;
    },
  },
  methods: {
    setSuccess(str) {
      this.log.error = null;
      this.log.success = str;
    },
    setError(str) {
      this.log.success = null;
      this.log.error = str;
    },
    copySecret(key) {
      this.$clipboard(key);
      this.$bvToast.toast(`API Key has been copied to clipboard`, {
        title: "API Key",
        autoHideDelay: 5000,
        appendToast: true,
      });
    },
    generateNew() {
      this.isGenerateLoading = true;
      user
        .generateNew()
        .then((x) => {
          if (!x.data?.key) {
            this.isGenerateLoading = false;
            return;
          }
          if (!this.user.apikey) {
            this.user = { apikey: x.data?.key };
          } else {
            this.user.apikey = x.data?.key;
          }
          this.isGenerateLoading = false;
          this.copySecret(x.data?.key);
        })
        .catch((err) => {
          console.error(err);
          this.isGenerateLoading = false;
        });
    },
  },
  mounted() {
    user.currentUser().then((x) => {
      this.user = x.data?.user;
    });
    user.statistics().then(
      (x) => {
        this.isLoading = false;
        this.stats = x.data.statistics;
      },
      ({ error, data }) => {
        if (data?.errors) {
          this.setError(ErrorBag.getFirstError(data.errors));
        } else {
          this.setError(ErrorBag.getResponseErrorString(error));
        }
      }
    );
  },
};
</script>

<style lang="scss" scoped>
hr.fill-card {
  margin: 4px -8px;
}
</style>