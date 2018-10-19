
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;
import Plyr from 'plyr';
var tippy = require('tippy.js');

require('bootstrap-material-design');
(function($) {
    new Plyr('._plyr');
    $('body').bootstrapMaterialDesign({
        select: {
            selector: ['.select']
        },
        textarea: {
            selector: ['.textarea']
        },
        text: {
            // omit inputs we have specialized components to handle - we need to match text, email, etc.  The easiest way to do this appears to be just omit the ones we don't want to match and let the rest fall through to this.
            selector: [
                `input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=file]):not([type=button]):not([type=submit]):not([type=reset]):not([data-plyr])`
            ]
        },
    });
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