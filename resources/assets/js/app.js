
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;
require('bootstrap-material-design');
(function($) {
    $('body').bootstrapMaterialDesign();
    $(window).on('load', function() {
        setTimeout(function () {
            $('[data-loading]').fadeOut(300, function() {
                $(this).remove();
            });
        }, 500)
    })
})(jQuery);