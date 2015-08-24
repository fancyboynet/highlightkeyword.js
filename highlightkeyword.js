(function(w, factory){
    if(typeof w.define === 'function'){
        w.define(factory);
    }
    else if(typeof module === 'object'){
        module.exports = factory();
    }
    else{
        w['highlightkeyword'] = factory();
    }
})(this, function(){
    function isArray(o){
        return Object.prototype.toString.call(o) === '[object Array]';
    }
    function extend(to, from){
        for(var key in from){
            if(from.hasOwnProperty(key)){
                to[key] = from[key];
            }
        }
        return to;
    }
    function wrap(key, opt){
        if(opt.className){
            return '<span class="' + opt.className + '">' + key + '</span>';
        }
        return '<span style="color:' + opt.color + '">' + key + '</span>';
    }
    var highlightkeyword = function(html, key, opt){
        var el;
        if(!key){
            return html;
        }
        if(html instanceof Node && html.nodeType === 1){
            el = html;
            html = el.innerHTML;
        }
        opt = extend({
            className : '',
            color : 'red'
        }, opt);
        html = [html, '<>'].join('');
        if(isArray(key)){
            key = '[' + key.join(',') + ']';
        }
        key = key.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/^\s+|\s+$/, '');

        var regText = /([^<>]*)(<[^<>]*>)/gi;
        var regKey = new RegExp(["(", key, ")"].join(''), "gi");

        html = html.replace(regText, function (sMath, sSub, sSub2) {
            var sSub = sSub.replace(regKey, function(s, s1){
                return wrap(s1, opt);
            });
            return [sSub, sSub2].join('');
        });
        html = html.slice(0, -2);
        if(el){
            el.innerHTML = html;
        }
        return html;
    };
    return highlightkeyword;
});