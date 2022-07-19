var buttonSelector = $('.tab-button')

for (let i = 0; i < 3; i++) {
    buttonSelector.eq(i).on('click', function() {
        buttonSelector.removeClass('orange');
        buttonSelector.eq(i).addClass('orange');
        buttonSelector.removeClass("show");
        buttonSelector.eq(i).addClass('show');
    });
}