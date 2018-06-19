require.define(['jquery', 'handlebars'], function($, handlebars){
    function render(data, source, target){
        var sourceTpl = source.html();
        var template = handlebars.compile(sourceTpl);
        var html = template(data);
        target.append(html)
    }
    return render;
});