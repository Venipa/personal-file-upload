import { axios, onAxiosError } from '../app';

export const user = {
  /**
   *
   * @param {string} username
   * @param {string} password
   */
  login(username, password, remember = false) {
    return new Promise((resolve, reject) => {
      return axios
        .post('auth/login', {
          email: username,
          password,
          remember
        })
        .then(
          x => resolve(x),
          (err, x) => reject({ error: err, data: err?.response?.data })
        );
    });
  },
  getFiles(search = null, page = 1) {
    let data = {
      page
    };
    if (search) {
      data.q = search;
    }
    return new Promise((resolve, reject) => {
      return axios.get('user/files', {
        params: data
      }).then(
        x => resolve(x),
        err => reject({ error: err, data: err?.response?.data })
      );
    });
  },
  currentUser() {
    return new Promise((resolve, reject) => {
      return axios.get('user').then(
        x => resolve(x),
        err => reject({ error: err, data: err?.response?.data })
      );
    });
  },
  generateNew() {
    return new Promise((resolve, reject) => {
      return axios.post('user/gen-secret').then(
        x => resolve(x),
        err => reject({ error: err, data: err?.response?.data })
      );
    });
  },
  statistics() {
    return new Promise((resolve, reject) => {
      return axios.get('user/statistics').then(
        x => resolve(x),
        err => reject({ error: err, data: err?.response?.data })
      );
    });
  },
  deleteFile(token) {
    return new Promise((resolve, reject) => {
      return axios.post('user/file/delete', {
        token
      }).then(
        x => resolve(x),
        err => reject({ error: err, data: err?.response?.data })
      );
    });
  },
  uploadFile(file) {
    const fd = new FormData();
    fd.append('file', file);
    return new Promise((resolve, reject) => {
      return axios.post('upload', fd).then(
        x => resolve(x),
        err => reject({ error: err, data: err?.response?.data })
      );
    });
  },
  /**
   * 
   * @param {{email: string, password: string, confirm_password: string}} user 
   */
  updateAccount(user) {
    return new Promise((resolve, reject) => {
      return axios.post('user/update/account', {
        email: user.email,
        password: user.password || undefined,
        password_confirmation: user.confirm_password || undefined
      }).then(
        x => resolve(x),
        err => reject({ error: err, data: err?.response?.data })
      );
    })
  },
  remoteDownload(url) {
    return new Promise((resolve, reject) => {
      return axios.post('remote', {
        url
      }).then(
        x => resolve(x),
        err => reject({ error: err, data: err?.response?.data })
      );
    });
  },
  remoteStatus(jobId) {
    return new Promise((resolve, reject) => {
      return axios.get('remote/status', {
        params: {
          jobId
        }
      }).then(
        x => resolve(x),
        err => reject({ error: err, data: err?.response?.data })
      );
    });
  }
};
