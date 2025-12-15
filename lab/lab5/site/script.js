$(function () {
    let $activeSection = null;

    $('.jquery-menu > li').hover(
        function () {
            $(this).children('ul').stop(true, true).slideDown(10);
        },
        function () {
            $(this).children('ul').stop(true, true).delay(150).slideUp(250);
        }
    );

    $('.jquery-menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        const $target = $(target);
        if ($target.length === 0) return;

        if ($activeSection) $activeSection.css('background-color', '');
        $activeSection = $target;
        $target.css('background-color', '#adeaf2');

        $('html, body').animate({
            scrollTop: $target.offset().top - 120
        }, 10);
    });

    let activeCol = null;

    $('#pandaTable thead th').css('cursor', 'pointer').on('click', function () {
        const col = $(this).data('col');
        const $cells = $(`#pandaTable td:nth-child(${+col + 1})`);

        if (activeCol === col) {
            $cells.removeClass('column-highlight');
            activeCol = null;
        } else {
            if (activeCol !== null) {
                $(`#pandaTable td:nth-child(${+activeCol + 1})`).removeClass('column-highlight');
            }
            $cells.addClass('column-highlight');
            activeCol = col;
        }
    });

    $.fn.centeredPopup = function () {
        return this.each(function () {
            const $el = $(this);
            let isOpen = false;

            const origfontSize = $el.css('font-size')
			
            $el.css('cursor', 'pointer').off('click.popup').on('click.popup', function (e) {
                e.stopPropagation();

                if (isOpen) {
                    $el.stop(true, true)
                       .animate({ fontSize: origfontSize }, 400)
                       .queue(function (next) {
                           $el.removeClass('aside-popup')
                              .removeAttr('style');
                           next();
                       });
                    isOpen = false;
                } else {
                    $el.stop(true, true)
                       .addClass('aside-popup')
                       .css({ fontSize: '1.2rem' })
                       .animate({ fontSize: '2.4rem' }, 400);
                    isOpen = true;
                }
            });
        });
    };
    $('.aside-box').centeredPopup();

    $(document).off('click.aside').on('click.aside', function (e) {
        if ($('.aside-popup').length && !$(e.target).closest('.aside-popup').length) {
            $('.aside-popup').trigger('click.popup');
        }
    });

    $('.logo')
    .on('mouseenter', function () {
        $(this).addClass('logo-blink');
    })
    .on('mouseleave', function () {
        $(this).removeClass('logo-blink');
    });


    const $form = $('#surveyForm');
    const $inputs = $form.find('input, textarea');
    const $rangeValue = $('#rangeValue');

    $('#range').on('input', function () {
        $rangeValue.text(this.value);
    });

    $form.find('button[type="reset"]').on('click', function (e) {
        e.preventDefault();
        if (confirm('Вы уверены, что хотите сбросить форму?')) {
            $form[0].reset();
            $rangeValue.text('50');
            $inputs.css('background-color', '#ff0000');
            setTimeout(() => $inputs.css('background-color', ''), 1000);
        } else {
            $inputs.css('background-color', '#00ff00');
            setTimeout(() => $inputs.css('background-color', ''), 1000);
        }
    });

    $form.on('submit', function (e) {
        e.preventDefault();
        $inputs.css('background-color', '#0000ff');
        setTimeout(() => {
            $inputs.css('background-color', '');
            alert('Данные успешно отправлены!');
        }, 1000);
    });
});