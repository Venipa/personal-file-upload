
export const openLink = (href, options = {
    download: null,
    target: null
}) => {
    const a = document.createElement('a');
    a.style = "width: 0; height: 0; opacity: 0; visibility: hidden;";
    a.href = href;
    if (options.target) {
        a.target = options.target;
    }
    if (options.download) {
        a.setAttribute('download', options.download);
        a.removeAttribute('target');
    }
    console.log(a);
    a.click();
    a.remove();

};