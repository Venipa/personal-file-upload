import Axios from 'axios';

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

export const getCSRFToken = () => document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
export const bootstrap = () => {
    Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    Axios.defaults.headers.common['X-CSRF-TOKEN'] = getCSRFToken();
    Axios.defaults.baseURL = `${window.location.origin}/api/v1`;
    return Axios;
};
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
