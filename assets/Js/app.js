$( document ).ready(function() {
    $('.navItems').on('click',function (e) {
        console.log("salam");
        e.preventDefault();
        $('.navItems').removeClass('active')
        $(this).addClass('active');
    })
});