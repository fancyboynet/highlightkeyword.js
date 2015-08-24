# highlightkeyword.js
Highlight some keyword in an html partial

## usage
```javascript
highlightkeyword(el, keyword[, options]);
```
## params
- *el* Element or String

## options
- *className*
- *color*

## demo
```javascript
highlightkeyword(document.getElementById('test'), 'f');
```
## demo2
```javascript
document.getElementById('test2').innerHTML = highlightkeyword(oldHTML, ['t', 'b'], {
    className : 'highlight'
});
```
