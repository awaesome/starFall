!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(6)},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\ncanvas {\r\n  position: absolute;\r\n}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r={},i=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),s=null,a=0,u=[],c=n(5);function f(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(y(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(y(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function l(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(t.insertAt.before,n);n.insertBefore(e,i)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function p(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return v(e,t.attrs),h(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var u=a++;n=s||(s=p(e)),r=w.bind(null,n,u,!1),i=w.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=c(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=l(t,e);return f(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}t&&f(l(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete r[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function w(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){"use strict";n.r(e);n(1);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var f=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"red";a(this,t),this.canvasSize=e,this.radius=n,this.friction=r,this.color=o,this.pos=i,this.shatterRadius=3,this.vel=p5.Vector.random2D().mult(2),this.acc=new p5.Vector,this.particles=[]}return c(t,[{key:"shrink",value:function(){this.radius/=1.5}},{key:"shatter",value:function(){for(var t=0;t<5;t++)this.particles.push(new l(this.canvasSize,this.radius,this.friction,this.pos,this.color));this.shrink()}},{key:"update",value:function(){this.pos.y+this.radius/2+this.vel.y>=this.canvasSize.height?(this.vel.x*=1.2*this.friction,this.vel.y=-this.vel.y*this.friction,this.radius>this.shatterRadius?this.shatter():this.shrink()):this.vel.y+=t.gravity,(this.pos.x+this.radius/2+this.vel.x>=this.canvasSize.width||this.pos.x-this.radius/2+this.vel.x<=0)&&(this.radius>this.shatterRadius?this.shatter():this.shrink(),this.vel.x=-this.vel.x),this.pos.add(this.vel)}},{key:"show",value:function(t){for(var e in t.noStroke(),t.drawingContext.fillStyle="#ddd",t.ellipse(this.pos.x,this.pos.y,this.radius),this.particles)this.particles[e].update(),this.particles[e].show(t)}}]),t}();f.gravity=.3;var l=function(t){function e(t,n,r,s,u){var c;return a(this,e),(c=i(this,o(e).call(this,t,n,r,s,u))).pos=s.copy(),c.vel=p5.Vector.random2D().mult(4),c.vel.y*=6,c}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,f),c(e,[{key:"update",value:function(){this.pos.y+this.radius/2+this.vel.y>=this.canvasSize.height?this.vel.y=-this.vel.y:this.vel.y+=1.5*f.gravity,(this.pos.x+this.radius/2+this.vel.x>=this.CanvasWidth||this.pos.x-this.radius/2+this.vel.x<=0)&&(this.vel.x=-this.vel.x),this.radius>4?this.radius*=.95:this.radius*=.9,this.pos.add(this.vel)}},{key:"show",value:function(t){t.noStroke(),t.fill("white"),t.ellipse(this.pos.x,this.pos.y,this.radius)}}]),e}(),h=["#E84855","#FF9B71","#E2B33B","#168AFE"];new p5(function(t){var e,n,r=[],i=[];function o(n){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:35,s=t.floor(t.random(i,o)),a=t.random(.5,.7);r=n||t.createVector(t.random(t.width),-40);var u=t.random(h),c={mainColor:u,secondary:t.random(h.filter(function(t){return t!=u}))};return new f(e,s,a,r,c)}t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight),(n=t.drawingContext.createLinearGradient(0,0,0,t.height)).addColorStop(0,"#222"),n.addColorStop(1,"#134"),e={width:t.width,height:.8*t.height};for(var s=0;s<150;s++){var a=t.createVector(t.random(t.width),t.random(.75*t.height));i.push(o(a,2,5))}for(var u=0;u<4;u++)r.push(o())},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)},t.draw=function(){for(var e in t.drawingContext.fillStyle=n,t.drawingContext.fillRect(0,0,t.width,t.height),t.drawingContext.fillStyle="rgba(30,50,50,0.6)",t.drawingContext.shadowColor="rgb(50,150,200)",t.drawingContext.shadowBlur=100,t.rect(0,.8*t.height,t.width,t.height),t.drawingContext.shadowColor="white",t.drawingContext.shadowBlur=10,i)i[e].show(t);var s=function(e){r[e].radius>2?(t.drawingContext.shadowColor="white",t.drawingContext.shadowBlur=15,r[e].update(),r[e].show(t)):(r=r.filter(function(t){return t!=r[e]})).push(o())};for(var a in r)s(a)}})}]);