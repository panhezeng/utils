!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("checkUpload",[],t):"object"==typeof exports?exports.checkUpload=t():e.checkUpload=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n={message:"",error:0,validate:!0};if("[object File]"===Object.prototype.toString.call(e)){void 0===r&&(r=1024e3);var o=!0,i="",a=e.name.lastIndexOf(".");-1!==a&&(i=e.name.substring(a));var u=i?i.substring(1):e.type&&e.type.split("/")[0];e.type&&t&&(o=t.split(",").some(function(t){return(t=t.trim())&&(new RegExp("^"+t).test(e.type)||new RegExp("^"+t).test(i))}),void 0===r&&(/^\.(png|jpe?g|gif|svg|webp)/.test(i)||/^image/.test(e.type)?r=10240:(/^\.(ogg|mp3|wav|flac|aac)/.test(i)||/^audio/.test(e.type))&&(r=102400)));var l=!0;if(r&&(l=e.size/1024<r),o||(n.message="只能上传"+u+"!",n.error=1,n.validate=!1),!l){var f=r>=1024?r/1024+"M":r+"KB";n.message="上传"+u+"大小不能超过"+f+"!",n.error=2,n.validate=!1}}else n.message="file参数必须为File数据类型",n.error=3,n.validate=!1;return n}}])});