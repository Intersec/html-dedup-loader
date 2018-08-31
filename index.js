var htmlLoader = require('html-loader');

module.exports = function(content) {
    this.cacheable && this.cacheable();
    if (content.startsWith('module.exports = "')) {
        return content;
    } else {
        return htmlLoader(content);
    }
};
