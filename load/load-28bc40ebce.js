!function(n,e){"use strict";function t(n){return"complete"===n.readyState||"loaded"===n.readyState;
}function a(n,t,a){var o=e.createElement("link");o.rel="stylesheet",r(o,a,"css"),
o.async=!0,o.href=n,u.appendChild(o)}function o(n,t,a){var o=e.createElement("script");
o.charset="utf-8",r(o,a,"js"),o.async=!t.sync,o.src=n,u.appendChild(o)}function c(n,e){
var t;n.sheet&&(t=!0),setTimeout(function(){t?e():c(n,e)},20)}function r(e,a,o){function r(){
e.onload=e.onreadystatechange=null,e=null,a()}var i="onload"in e,d="css"===o;return!d||!f&&i?void(i?(e.onload=r,
e.onerror=function(){e.onerror=null,n._cdnFallback(e)}):e.onreadystatechange=function(){
t(e)&&r()}):void setTimeout(function(){c(e,a)},1)}function i(n,e,t,c){function r(){
var t=e.indexOf(n);t>-1&&e.splice(t,1),0===e.length&&c()}l.test(n)?a(n,t,r):o(n,t,r);
}function d(n,e,t){var a=function(){t&&t()};if(n=Array.prototype.slice.call(n||[]),
0===n.length)return void a();for(var o=0,c=n.length;o<c;o++)i(n[o],n,e,a)}function s(e,a){
t(e)?a():n.addEventListener("load",a)}var l=new RegExp("\\.css"),u=e.head||e.getElementsByTagName("head")[0],f=+navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i,"$1")<536,h={
async:function(n,t){s(e,function(){d(n,{},t)})},sync:function(n,t){s(e,function(){
d(n,{sync:!0},t)})}};return n.head=n.head||{},n.head.load=h.sync,n.head.load.async=h.async,
h}(window,document);