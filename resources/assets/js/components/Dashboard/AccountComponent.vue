<template>
  <div class="container">
      <app-header class="my-3" />

    <div class="row mb-3">
      <div class="col d-flex flex-column">
        <div class="card">
          <div class="card-body d-flex flex-column">
            <h6>Account Settings</h6>
            <hr class="divider mb-4 w-100">
            <form action=""
                  method="post"
                  @submit.prevent="onSaveAccount">

              <b-form-group id="mail-1"
                            label="Email"
                            label-for="mail-input-1"
                            :invalid-feedback="(!email || !emailState) ? `Invalid Email` : null"
                            :disabled="isSaving"
                            :state="email && emailState">
                <b-form-input id="mail-input-1"
                              v-model="email"
                              :state="email && emailState"
                              :disabled="isSaving"
                              trim></b-form-input>
              </b-form-group>

              <b-form-group id="pw-1"
                            label="New Password"
                            label-for="pw-input-1"
                            :invalid-feedback="(!password || !passwordState) ? `Invalid Password` : null"
                            :disabled="isSaving"
                            :state="password && passwordState">
                <b-form-input id="pw-input-1"
                              v-model="password"
                              :state="password && passwordState"
                              :disabled="isSaving"
                              trim></b-form-input>
              </b-form-group>

              <b-form-group id="cpw-1"
                            label="Confirm new password"
                            label-for="cpw-input-1"
                            :invalid-feedback="(!confirm_password || !passwordState) ? `Invalid Password` : null"
                            :disabled="isSaving"
                            :state="confirm_password && passwordState">
                <b-form-input id="cpw-input-1"
                              v-model="confirm_password"
                              :state="confirm_password && passwordState"
                              :disabled="isSaving"
                              trim></b-form-input>
              </b-form-group>
              <div class="d-flex flex-row justify-content-end">
                <b-button variant="dark"
                          class="d-flex flex-row"
                          :disabled="isSaving"
                          type="submit">
                  <span>Save</span>

                  <app-spinner v-if="isSaving"
                               class="ml-2"
                               :size="8"
                               sizeUnit="px"
                               color="#ffffff" />
                </b-button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emailRegex } from "../../helpers/email-validator";
import { PulseLoader } from "@saeris/vue-spinners";
import { user } from "../../api";
import { ErrorBag } from "../../helpers";
const defaultData = () => {
  return {
    email: null,
    password: null,
    confirm_password: null,
    log: {
      error: null,
      success: null
    },
    isSaving: false
  };
};
export default {
  components: {
    "app-spinner": PulseLoader,
    "app-header": () => import('./HeaderComponent'),
  },
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  computed: {
    appName() {
      return window.appName;
    },
    emailState() {
      const email = this.email;
      return email && (email.trim().length > 3 && emailRegex.test(email));
    },
    passwordState() {
      const pw = this.password;
      const cpw = this.confirm_password;
      if (!pw && !cpw) {
        return true;
      }
      return pw && cpw && pw.length > 5 && cpw.length > 5 && pw === cpw;
    }
  },
  data() {
    return defaultData();
  },
  methods: {
    showToast(title, msg, type = "danger") {
      this.$bvToast.toast(msg, {
        title: title,
        variant: type || "default",
        autoHideDelay: 5000,
        appendToast: true
      });
    },
    setSuccess(str) {
      this.log.error = null;
      this.log.success = str;
    },
    setError(str) {
      this.log.success = null;
      this.log.error = str;
    },
    onSaveAccount() {
      this.isSaving = true;
      const pw = this.password;
      const cpw = this.confirm_password;
      let data = {
        email: this.email
      };
      if (pw && cpw) {
        data["password"] = pw;
        data["confirm_password"] = cpw;
      }
      user
        .updateAccount(data)
        .then(x => {
          this.isSaving = false;
          this.showToast(
            `Account Updated`,
            `Successfully updated Account`,
            "success"
          );
        })
        .catch(({ error, data }) => {
          if (data?.errors) {
            this.showToast(
              "Error",
              ErrorBag.getFirstError(data.errors),
              "danger"
            );
          } else {
            this.showToast(
              "Error",
              ErrorBag.getResponseErrorString(error),
              "danger"
            );
          }
          this.isSaving = false;
        });
    }
  },
  mounted() {
    this.email = this.user.email;
  }
};
</script>

<style>
</style>