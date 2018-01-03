module.exports = {
  "source": {
    "config": "config/default.json",
    "html": {
      "index": "shell/index.ejs",
      "404": "shell/index.ejs"
    },
    "js": {
      "main": "shell/index.js",
      "es5": "system/core/polyfills/es5.js",
      "es6": "system/core/polyfills/es6.js",
      "promise": "system/core/polyfills/promise.js",
      "shady": "system/core/polyfills/shadycss.js"
    }
  }
}