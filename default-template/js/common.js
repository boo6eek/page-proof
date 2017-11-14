$(window).on('load', function() {
    setTimeout(function () {
        $(".loader_inner").fadeOut();
        $(".loader").fadeOut("slow");
    }, 1000);
});

$(document).ready(function () {

    function send(a) {
        var form = $(a).parents('form')[0];

        var error = false;
        $(form).find('input[required="required"]').each(function () { // прoбeжим пo кaждoму пoлю в фoрмe
            $(this).removeClass('false');
            if ($(this).val() == '') { // eсли нaхoдим пустoe
                $(this).addClass('false');
                error = true; // oшибкa
            }
        });

        if (!error) {
            // var ser = form.serialize();
            var ser = fd = new FormData(form);
            $.ajax({
                method: 'POST',
                url: '/obr/mainform.php',
                data: ser,
                contentType: false,
                processData: false,
                success: function (data) {
                    $(form).find('.status').show().html(data);
                    alert(data);
                    $(form)[0].reset();
                }
            })
        } else {
            alert("Вы не ввели обязательное поле!");
        }


    };

    $('.submit').click(function (e) {
        e.preventDefault();
        //alert('asd');
        send(this);
    });

    $('.owlCarousel').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 10, //Отступ от картино если выводите больше 1
        nav: true, //Отключил навигацию
        dots: false,
        autoplay: true, //Автозапуск слайдера
        autoplayHoverPause: true, //Пауза при навидении мыши
        smartSpeed: 2000, //Время движения слайда
        autoplayTimeout: 2500, //Время смены слайда
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true">', '<i class="fa fa-chevron-right" aria-hidden="true">'],
        responsive: { //Адаптация в зависимости от разрешения экрана
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    });



});
