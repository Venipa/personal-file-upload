
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;
var tippy = require('tippy.js');

require('bootstrap-material-design');
(function($) {
    $('body').bootstrapMaterialDesign();
    $('[data-tooltip]').each(function (v) {
        $(this).attr('title', $(this).attr('data-tooltip'));
    });
    tippy('[data-tooltip]', {
        theme: "light"
    });
    $(window).on('load', function() {
        setTimeout(function () {
            $('[data-loading]').fadeOut(300, function() {
                $(this).remove();
            });
        }, 500)
    });
    $(document).keydown(function(event) {
        if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
            event.preventDefault();
        }
        // 107 Num Key  +
        // 109 Num Key  -
        // 173 Min Key  hyphen/underscor Hey
        // 61 Plus key  +/= key
    });

    $(window).bind('mousewheel DOMMouseScroll', function (event) {
        if (event.ctrlKey == true) {
            event.preventDefault();
        }
    });
})(jQuery);