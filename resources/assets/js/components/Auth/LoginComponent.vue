<template>
  <div class="d-flex flex-fill sidenav">
    <div class="d-flex sidenav-side">
      <div class="sidenav-bg"></div>
      <div class="sidenav-side-content">
        <h3>Login</h3>
      </div>
    </div>
    <div class="d-flex flex-fill sidenav-content">
      <div class="container my-2">
        <div class="mb-2" v-if="success">
          <div class="card alert alert-success">{{ success }}</div>
        </div>
        <div class="mb-2" v-if="error">
          <div class="card alert alert-danger">{{ error }}</div>
        </div>
        <div class="card">
          <div class="card-body">
            <form class="login-form" method="post" action="#" autocomplete="on" @submit.prevent="login">
              <b-form-group
                id="em-1"
                label="Email"
                label-for="input-1"
                :invalid-feedback="emailState ? '' : 'Invalid Email'"
                :valid-feedback="''"
                :state="emailState"
              >
                <b-form-input
                  id="input-1"
                  v-model="loginForm.email"
                  :state="emailState"
                  type="email"
                  autocomplete="email"
                  trim
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="pw-1"
                label="Password"
                label-for="input-2"
                :invalid-feedback="passwordState ? '' : 'Invalid Password'"
                :valid-feedback="''"
                :state="passwordState"
              >
                <b-form-input
                  id="input-2"
                  v-model="loginForm.password"
                  :state="passwordState"
                  type="password"
                  autocomplete="password"
                  trim
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="loginForm.remember"
                  :value="true"
                  :unchecked-value="false"
                >Remember Me</b-form-checkbox>
              </b-form-group>
              <b-form-group class="mb-0">
                <b-button class="d-flex align-items-center justify-content-center" variant="primary" type="submit"
                :disabled="loading || !passwordState || !emailState">
                  <span>Sign in</span>
                  <app-spinner
                  v-if="loading"
                  class="ml-2"
                  :size="8"
                  sizeUnit="px"
                  color="#ffffff"
                  />
                </b-button>
              </b-form-group>
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
import { user } from '../../api';
import { openLink } from '../../helpers';
const defaultData = () => {
  return {
    loginForm: {
      email: null,
      password: null,
      remember: false
    },
    loading: false,
    error: null,
    success: null
  };
};
export default {
  components: {
    'app-spinner': PulseLoader
  },
  computed: {
    emailState() {
      const { email } = this.loginForm;
      if (!email) {
        return true;
      }
      return email.length > 3 && emailRegex.test(email);
    },
    passwordState() {
      const { password } = this.loginForm;
      if (!password) {
        return true;
      }
      return password.length > 3;
    }
  },
  data: () => defaultData(),
  methods: {
    setSuccess: function(str) {
      this.success = str;
      this.error = null;
    },
    setError: function(str) {
      this.success = null;
      this.error = str;
    },
    login(ev) {
      const loginForm = this.loginForm;
      this.loading = true;
      user.login(loginForm.email, loginForm.password, loginForm.remember).then(x => {
        console.log('logged in', x.data)
        this.setSuccess(`Successfully logged in, redirecting...`);
        setTimeout(() => {
          if (x.data?.to) {
          openLink(x.data.to);
          }
        }, 1000);
      }).catch(({error, data}) => {
        console.log(error, data);
        if (data?.errors != null) {
          const d = data.errors;
          this.setError(d[Object.keys(d)[0]][0]);
        } else {
          this.setError(`${error.response.status}: ${error.response.statusText}`);
        }
        this.loading = false;
      } );
    }
  }
};
</script>

<style lang="scss" scoped>
.sidenav {
  $maxWidth: 920px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  align-self: stretch;
  @media (max-width: $maxWidth) {
    flex-direction: column;
  }
  .sidenav-side {
    @media (max-width: $maxWidth) {
      width: 100%;
      height: 180px;
    }
    height: inherit;
    flex-direction: column;
    position: relative;
    z-index: 0;
    width: 400px;
    justify-content: center;
    &-content {
      z-index: 1;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: inherit;
    }
    & > .sidenav-bg {
      @media (max-width: $maxWidth) {
        background-position: center -130px;
      }
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-image: url("../../../images/side.jpg");
      background-size: cover;
      background-position: top center;
      opacity: 0.45;
    }
    background-color: #000;
  }
  &-content {
    @media (max-width: $maxWidth) {
      justify-content: flex-start;
      width: 100%;
      padding: 24px 0;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: inherit;
    background-color: #eee;
  }
}
</style>