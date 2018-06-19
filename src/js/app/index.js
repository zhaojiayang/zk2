require(['jquery', 'render'], function($, render){
    $.ajax({
        url: '/api/list',
        dataType: 'json',
        success: function(data){
            console.log(data);
            render(res.data, $("brand-tpl"), $("brand"));
        }
    })
});