// var buttonSelector = $('.tab-button')

// for (let i = 0; i < 3; i++) {
//     buttonSelector.eq(i).on('click', function() {
//         buttonSelector.removeClass('orange');
//         buttonSelector.eq(i).addClass('orange');
//         buttonSelector.removeClass("show");
//         buttonSelector.eq(i).addClass('show');
//     });
// }

// $('.list').click(function(e) {
//     if (e.target == document.querySelectorAll('.tab-button')[0]) {
//         openTab(0);
//     } else if (e.target == document.querySelectorAll('.tab-button')[1]) {
//         openTab(1);
//     } else {
//         openTab(2);
//     }

// })

$('.list').click(function(e) {
    openTab(parseInt(e.target.dataset.id));
});

var buttonSelector = $('.tab-button')

function openTab(index){
    buttonSelector.removeClass('orange');
    buttonSelector.eq(index).addClass('orange');
    buttonSelector.removeClass("show");
    buttonSelector.eq(index).addClass('show');
}