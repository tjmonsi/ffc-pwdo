
// polyfill detector
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-es5array-es5date-es5function-es5object-es5string-es6array-es6collections-es6math-es6number-es6object-es6string-promises !
 * */
!function(t,e,r){function o(t,e){return typeof t===e}function n(){var t,e,r,n,i,p,y;for(var c in a)if(a.hasOwnProperty(c)){if(t=[],e=a[c],e.name&&(t.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(r=0;r<e.options.aliases.length;r++)t.push(e.options.aliases[r].toLowerCase());for(n=o(e.fn,"function")?e.fn():e.fn,i=0;i<t.length;i++)p=t[i],y=p.split("."),1===y.length?Modernizr[y[0]]=n:(!Modernizr[y[0]]||Modernizr[y[0]]instanceof Boolean||(Modernizr[y[0]]=new Boolean(Modernizr[y[0]])),Modernizr[y[0]][y[1]]=n),s.push((n?"":"no-")+y.join("-"))}}var a=[],i={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(t,e){var r=this;setTimeout(function(){e(r[t])},0)},addTest:function(t,e,r){a.push({name:t,fn:e,options:r})},addAsyncTest:function(t){a.push({name:null,fn:t})}},Modernizr=function(){};Modernizr.prototype=i,Modernizr=new Modernizr,Modernizr.addTest("es5array",function(){return!!(Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray)}),Modernizr.addTest("es5date",function(){var t="2013-04-12T06:06:37.307Z",e=!1;try{e=!!Date.parse(t)}catch(r){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&e)}),Modernizr.addTest("es5function",function(){return!(!Function.prototype||!Function.prototype.bind)}),Modernizr.addTest("es5object",function(){return!!(Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions)}),Modernizr.addTest("es5string",function(){return!(!String.prototype||!String.prototype.trim)}),Modernizr.addTest("es6array",!!(Array.prototype&&Array.prototype.copyWithin&&Array.prototype.fill&&Array.prototype.find&&Array.prototype.findIndex&&Array.prototype.keys&&Array.prototype.entries&&Array.prototype.values&&Array.from&&Array.of)),Modernizr.addTest("es6collections",!!(t.Map&&t.Set&&t.WeakMap&&t.WeakSet)),Modernizr.addTest("es6math",!!(Math&&Math.clz32&&Math.cbrt&&Math.imul&&Math.sign&&Math.log10&&Math.log2&&Math.log1p&&Math.expm1&&Math.cosh&&Math.sinh&&Math.tanh&&Math.acosh&&Math.asinh&&Math.atanh&&Math.hypot&&Math.trunc&&Math.fround)),Modernizr.addTest("es6number",!!(Number.isFinite&&Number.isInteger&&Number.isSafeInteger&&Number.isNaN&&Number.parseInt&&Number.parseFloat&&Number.isInteger(Number.MAX_SAFE_INTEGER)&&Number.isInteger(Number.MIN_SAFE_INTEGER)&&Number.isFinite(Number.EPSILON))),Modernizr.addTest("es6object",!!(Object.assign&&Object.is&&Object.setPrototypeOf)),Modernizr.addTest("promises",function(){return"Promise"in t&&"resolve"in t.Promise&&"reject"in t.Promise&&"all"in t.Promise&&"race"in t.Promise&&function(){var e;return new t.Promise(function(t){e=t}),"function"==typeof e}()}),Modernizr.addTest("es6string",!!(String.fromCodePoint&&String.raw&&String.prototype.codePointAt&&String.prototype.repeat&&String.prototype.startsWith&&String.prototype.endsWith&&String.prototype.includes));var s=[];n(),delete i.addTest,delete i.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();t.Modernizr=Modernizr}(window,document);
(function() {
  var refScript = document.body.getElementsByTagName('script')[0];
  // loads es5 polyfills if it doesn't have the following
  // es5 array, date, functions, object, and string methods
  if (!Modernizr.es5array || !Modernizr.es5date || !Modernizr.es5function || !Modernizr.es5object || !Modernizr.es5string) {
    var es5shim = document.createElement('script');
    es5shim.src = window.baseURL + 'vendor/es5-shim.js';
    var es5sham = document.createElement('script');
    es5sham.src = window.baseURL + 'vendor/es5-sham.js';
    refScript.parentNode.insertBefore(es5shim, refScript);
    refScript.parentNode.insertBefore(es5sham, refScript);
  }

  // loads es6 polyfils if it doesn't have the following
  // es6 set and collections, math, number, object, and string methods
  if (!Modernizr.es6collections || !Modernizr.es6math || !Modernizr.es6number || !Modernizr.es6object || !Modernizr.es6string) {
    var es6shim = document.createElement('script');
    es6shim.src = window.baseURL + 'vendor/es6-shim.js';
    var es6sham = document.createElement('script');
    es6sham.src = window.baseURL + 'vendor/es6-sham.js';
    refScript.parentNode.insertBefore(es6shim, refScript);
    refScript.parentNode.insertBefore(es6sham, refScript);
  }

  // loads promise polyfil if it doesn't have the native promise
  if (!Modernizr.promises) {
    var promise = document.createElement('script');
    promise.src = window.baseURL + 'vendor/es6-promise.js';
    refScript.parentNode.insertBefore(promise, refScript);
  }

  // loads intersection observer polyfil if it doesn't have the native intersection observer
  if (!window.IntersectionObserver) {
    var io = document.createElement('script');
    io.src = window.baseURL + 'vendor/intersection-observer.js';
    refScript.parentNode.insertBefore(io, refScript);
  }

  // loads shadydom polyfil if it doesn't have the native attachShadow method
  if (!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) ||
    (window.ShadyDOM && window.ShadyDOM.force)) {
    var shady = document.createElement('script');
    shady.src = window.baseURL + 'vendor/scoping-shim.js';
    refScript.parentNode.insertBefore(shady, refScript);
  }

  if (!window.fetch || !window.Headers) {
    var fetchPoly = document.createElement('script')
    fetchPoly.src = window.baseURL + 'vendor/fetch.js'
    refScript.parentNode.insertBefore(fetchPoly, refScript)
  }
  window.onerror = function(err, url, line) {
    try {
      if (window.ga) {
        ga('send', 'exception', {
          exDescription: err.message,
          exFatal: true
        })
      }
    } catch (e) {
      console.error(err)
      console.error(e)
    }
  }
})();

var refScript = document.body.getElementsByTagName('script')[0];
if (window.customElements) {
  var ce = document.createElement('script');
  ce.src = window.baseURL + 'vendor/custom-elements-es5-adapter.js';
  ce.setAttribute('nomodule', true);
  ce.setAttribute('async', true);
  refScript.parentNode.insertBefore(ce, refScript);
}

(function () {
  document.addEventListener('WebComponentsReady', function componentsReady() {
    document.removeEventListener('WebComponentsReady', componentsReady, false);
    var script = document.createElement('script');
    script.async = true
    script.src = window.baseURL + 'bundle.js';
    script.setAttribute('nomodule', true);
    var scriptModule = document.createElement('script');

    scriptModule.async = true
    scriptModule.src = window.baseURL + 'module.bundle.js';
    scriptModule.setAttribute('type', 'module');
    var refScript = document.body.getElementsByTagName('script')[0];
    refScript.parentNode.insertBefore(script, refScript);
    refScript.parentNode.insertBefore(scriptModule, refScript);
  }, false)
})();

(function() {
  'use strict';
  // global for (1) existence means `WebComponentsReady` will file,
  // (2) WebComponents.ready == true means event has fired.
  window.WebComponents = window.WebComponents || {};
  var name = 'webcomponents-loader.js';
  // Feature detect which polyfill needs to be imported.
  var polyfills = [];
  if (!('import' in document.createElement('link'))) polyfills.push('hi');
  if (!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) || (window.ShadyDOM && window.ShadyDOM.force)) polyfills.push('sd');
  if (!window.customElements || window.customElements.forcePolyfill) polyfills.push('ce');
  // NOTE: any browser that does not have template or ES6 features
  // must load the full suite (called `lite` for legacy reasons) of polyfills.
  if (!('content' in document.createElement('template')) || !window.Promise || !Array.from ||
    // Edge has broken fragment cloning which means you cannot clone template.content
    !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment)) {
    polyfills = ['lite'];
  }

  if (polyfills.length) {
    var script = document.createElement('script');
    script.src = window.baseURL + 'vendor/webcomponents-loader.js';
    var newScript = document.createElement('script');
    // Load it from the right place.
    var replacement = 'webcomponents-' + polyfills.join('-') + '.js';
    var url = script.src.replace(name, replacement);
    newScript.src = url;
    // NOTE: this is required to ensure the polyfills are loaded before
    // *native* html imports load on older Chrome versions. This *is* CSP
    // compliant since CSP rules must have allowed this script to run.
    // In all other cases, this can be async.
    if (document.readyState === 'loading' && ('import' in document.createElement('link'))) {
      document.write(newScript.outerHTML);
    } else {
      document.head.appendChild(newScript);
    }
  } else {
    // Ensure `WebComponentsReady` is fired also when there are no polyfills loaded.
    // however, we have to wait for the document to be in 'interactive' state,
    // otherwise a rAF may fire before scripts in <body>

    var fire = function() {
      requestAnimationFrame(function() {
        window.WebComponents.ready = true;
        document.dispatchEvent(new CustomEvent('WebComponentsReady', {bubbles: true}));
      });
    };

    if (document.readyState !== 'loading') {
      fire();
    } else {
      document.addEventListener('readystatechange', function wait() {
        fire();
        document.removeEventListener('readystatechange', wait);
      });
    }
  }
})();

var link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:700';
link.rel = 'stylesheet';
var refScript = document.body.getElementsByTagName('script')[0];
refScript.parentNode.insertBefore(link, refScript);