window.addEventListener('load', init, false);


function init() {
    bindDomEvents();

}

function bindDomEvents() {
    $('.first-selection-button').on('click', function () {
        hideAll();
        $('.first-selection-button').addClass('active');
        $('.first-selection-container').removeClass('hidden').addClass('visible');

        $('html, body').animate({
            scrollTop: $('.first-selection-container').offset().top
        }, 900);

    });

    $('.second-selection-button').on('click', function () {
        hideAll();

        $('.second-selection-button').addClass('active');
        $('.second-selection-container').removeClass('hidden').addClass('visible');

        $('html, body').animate({
            scrollTop: $('.second-selection-container').offset().top
        }, 900);

    });


}


function hideAll() {
    $('.landing-love__selection-container').removeClass('visible').addClass('hidden');
    $('.button__selection').removeClass('active');
}