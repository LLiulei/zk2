define(['jquery','handlebars'],function($,handlebars){
    var render = function(tpl,target,data,isHtml){
        var source = $(tpl).html();
        var template = handlebars.compile(source);
        var html = template(data);
        if(isHtml){
            $(target).html(html)
        }else{
            $(target).append(html)
        }
    }
    return render;
})