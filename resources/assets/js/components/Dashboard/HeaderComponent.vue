<template>
  <div class="row">
    <div class="col d-flex flex-row justify-content-start align-items-center">
      <img height="64"
           src="/images/logo.svg"
           alt="Logo" />
      <a href="/dashboard/"
         class="text-dark text-decoration-none">
        <h4 class="ml-2">{{ appName }}</h4>
      </a>
      <div class="flex-grow-1"></div>
      <b-dropdown variant="link"
                  toggle-class="btn-icon text-dark"
                  no-caret
                  right>
        <template v-slot:button-content>
          <menu-icon :size="20"></menu-icon>
        </template>
        <b-dropdown-item @click="showDialog">Upload</b-dropdown-item>
        <b-dropdown-item href="/account">Account</b-dropdown-item>
        <b-dropdown-item href="/files">My Files</b-dropdown-item>
        <b-dropdown-item href="/logout"
                         variant="danger">Logout</b-dropdown-item>
      </b-dropdown>
    </div>
    <header-upload ref="upload" />
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/DotsVertical";
export default {
  components: {
    MenuIcon,
    "header-upload": () => import("../Dialogs/UploadDialogComponent")
  },
  computed: {
    appName() {
      return window.appName;
    }
  },
  methods: {
    showDialog() {
      this.$refs.upload?.open();
    }
  }
};
</script>

<style>
</style>