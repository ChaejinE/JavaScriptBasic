var buttonSelector = $('.tab-button')

for (let i = 0; i < 3; i++) {
    buttonSelector.eq(i).on('click', function() {
        openTab(i);
    });
}

function openTab(index){
    buttonSelector.removeClass('orange');
    buttonSelector.eq(index).addClass('orange');
    buttonSelector.removeClass("show");
    buttonSelector.eq(index).addClass('show');
}