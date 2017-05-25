!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),s=o(r),i=n(2),a=o(i),l=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof e){e={targetSelector:e}}return this.options={},this.options.onInit=function(){return t},this.options.onBeforeToggle=function(){return t},this.options.onToggle=function(){return t},a.default.merge(this.options,a.default.clone(s.default),e),this.targets={},this.targets.all=function(){return Array.from(document.querySelectorAll(t.options.targetSelector))},this.targets.get=function(t){return"true"===t.getAttribute("aria-expanded")},this.targets.set=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t.options.expandOnly&&null===n&&t.targets.get(e)||(null===n&&(n=!t.targets.get(e)),n?(t.options.single&&t.blur(),t.options.singleSibling&&t.blurSiblings(e),e.setAttribute("aria-expanded","true"),t.options.targetClassExpanded&&e.classList.add(t.options.targetClassExpanded),t.options.buttonClassExpanded&&t.buttons.fromTarget(e).forEach(function(e){return e.classList.add(t.options.buttonClassExpanded)}),t.options.parentClassExpanded&&e.parentNode.classList.add(t.options.parentClassExpanded)):(e.setAttribute("aria-expanded","false"),t.options.targetClassExpanded&&e.classList.remove(t.options.targetClassExpanded),t.options.buttonClassExpanded&&t.buttons.fromTarget(e).forEach(function(e){return e.classList.remove(t.options.buttonClassExpanded)}),t.options.parentClassExpanded&&e.parentNode.classList.remove(t.options.parentClassExpanded)))},this.targets.setAll=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t.targets.all().forEach(function(n){t.targets.set(n,e)})},this.targets.fromButton=function(e){if(!t.options.scoped)return t.targets.all();if("#{id}"===t.options.buttonSelector){var n=e.getAttribute("href");return n=n||e.getAttribute("data-href"),Array.from(document.querySelectorAll(n))}var o=e.nextElementSibling;return o&&a.default.matches(o,t.options.targetSelector)?[o]:[]},this.targets.init=function(){t.targets.all().forEach(function(e){if(t.options.createButtons){var n=document.createElement("button");n.innerHTML=t.options.buttonContent,e.parentNode.insertBefore(n,e)}t.options.targetClass&&e.classList.add(t.options.targetClass),t.options.parentClass&&e.parentNode.classList.add(t.options.parentClass),!0!==t.targets.get(e)?t.targets.set(e,!1):t.targets.set(e,!0)})},this.buttons={},this.buttons.all=function(){if(t.options.scoped){var e=[];return t.targets.all().forEach(function(n){t.buttons.fromTarget(n).forEach(function(t){return e.push(t)})}),e}return Array.from(document.querySelectorAll(t.options.buttonSelector))},this.buttons.fromTarget=function(e){if(!t.options.scoped)return t.buttons.all();if("#{id}"===t.options.buttonSelector)return Array.from(document.querySelectorAll('[href="#'+e.id+'"], [data-href="#'+e.id+'"]'));var n=e.previousElementSibling;return n&&a.default.matches(n,t.options.buttonSelector)?[n]:[]},this.buttons.fromClick=function(e){return("#{id}"===t.options.buttonSelector?a.default.matches(e.target,"[href], [data-href]")?e.target:a.default.closest(e.target,"[href], [data-href]"):a.default.matches(e.target,t.options.buttonSelector)?e.target:a.default.closest(e.target,t.options.buttonSelector))||null},this.buttons.click=function(e){e.preventDefault();var n=t.buttons.fromClick(e);if(n){t.targets.fromButton(n).forEach(function(e){t.targets.set(e)})}},this.buttons.init=function(){t.buttons.all().forEach(function(e){t.options.buttonClass&&e.classList.add(t.options.buttonClass),e.addEventListener("click",t.buttons.click)})},this.blur=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;(null===e||t.options.blur&&t.options.blurFilter&&!a.default.matches(e.target,t.options.blurFilter))&&t.targets.setAll(!1)},this.blurSiblings=function(e){Array.from(e.parentNode.parentNode.children).forEach(function(e){Array.from(e.children).forEach(function(e){a.default.matches(e,t.options.targetSelector)&&t.targets.set(e,!1)})})},document.addEventListener("click",this.blur),this.options.blur&&!this.options.blurFilter&&(this.options.blurFilter=this.options.targetSelector+", "+this.options.targetSelector+" *, "+this.options.buttonSelector+", "+this.options.buttonSelector+" *"),this.targets.init(),this.buttons.init(),this.options.onInit(),this};window.Toggle=l,e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={blur:!1,blurFilter:null,buttonClass:null,buttonClassExpanded:null,buttonContent:"Toggle",buttonSelector:"button",createButtons:!1,expandOnly:!1,parentClass:null,parentClassExpanded:null,scoped:!0,single:!1,singleSibling:!1,targetClass:null,targetClassExpanded:null,targetSelector:".toggle"};e.default=o},function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i={isObject:function(t){return t&&"object"===(void 0===t?"undefined":s(t))&&!Array.isArray(t)},clone:function(t){return JSON.parse(JSON.stringify(t))},merge:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];if(!n.length)return t;var a=n.shift();if(i.isObject(t)&&i.isObject(a))for(var l in a)i.isObject(a[l])?(t[l]||Object.assign(t,r({},l,{})),i.merge(t[l],a[l])):Object.assign(t,r({},l,a[l]));return i.merge.apply(i,[t].concat(o(n)))},matches:function(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)},closest:function(t,e){for(var n=void 0;t;){if((n=t.parentElement)&&i.matches(n,e))return n;t=n}return null}};e.default=i},function(t,e,n){t.exports=n(0)}]);