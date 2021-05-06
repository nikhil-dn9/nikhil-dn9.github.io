$('.js-scroll-trigger').click(function(){
    $('.navbar-collapse').collapse('hide');
    $('nav button i').attr('class', 'fas fa-grip-lines navi-lines');
});

var but_ham = $('nav button');
but_ham.click(function() {
    var value = $(this).attr('aria-expanded');
    if(value === 'false') {
        $('nav button i').attr('class', 'fas fa-times navi-lines');
    } else {
        $('nav button i').attr('class', 'fas fa-grip-lines navi-lines');
    }
});


// send message function.

function showSnakbox() {
    const snakbar = document.querySelector(".snakbar");
    snakbar.classList.add('show');
    setTimeout(
        () => snakbar.classList.remove('show'),
        3000
    );
};

function showSnakbox1() {
    const snakbar1 = document.querySelector(".snakbar1");
    snakbar1.classList.add('show');
    setTimeout(
        () => snakbar1.classList.remove('show'),
        3000
    );
};
