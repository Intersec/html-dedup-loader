# html-dedup-loader

A loader for webpack that allows importing files with [html-loader](https://github.com/webpack-contrib/html-loader), but avoids applying it twice.

This is useful when using webpack with a heterogeneous codebase, that can include both:
* imports of html assets with requireJS and the text plugin:

```js
require('text!file.html');
```

* imports of html assets directly

```js
require('file.html');
```

# Configuration

Use both a rule for all html imports, and a resolveLoader alias for the text plugin:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [{
      test: /\.html$/,
      use: 'html-loader'
    }]
  },
  resolveLoader: {
    alias: {
      text: 'html-dedup-loader'
    }
  }
}
```

Without the loader alias, the `text!` prefix would make webpack fail. And without
the html loader rule, the require without the `text!` prefix would not work.
