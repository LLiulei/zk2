require(['jquery', 'render'], function($, render) {
    $.ajax({
        url: '/api/list',
        dataType: 'json',
        success: function(res) {
            console.log(res);
            render('#list-tpl','.list',res)
            // var source = $('#list-tpl').html();
            // var template = handlebars.compile(source);
            // var html = template(res);
            // $('.list').append(html);
        },
        error: function(err) {
            console.error(err);
        }
    })

    $('.list').on('click', 'span', function() {
        var flag,
            id = $(this)[0].id;
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            flag = false
        } else {
            $(this).addClass('active');
            $(this).attr('id', $(this).html());
            flag = true;
        }
        if (flag) {
            $('.choose').append($(this).clone())
        } else {
            $('.choose')[0].removeChild(document.getElementById(id))
        }
    });
    $('.choose').on('click', 'span', function() {
        var id = $(this)[0].id;
        $('.choose')[0].removeChild(document.getElementById(id));
        $('.list').find('#' + id).removeClass('active');
    });
});