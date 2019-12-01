export const ErrorBag = {
    getFirstError: function (data) {
        return data[Object.keys(data)[0]][0];
    },
    getResponseErrorString: function (err) {
        return `${err?.response?.status || '403'}: ${err?.response?.statusText || 'Something went wrong'}`;
    }
}