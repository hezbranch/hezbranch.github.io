(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(8510)}])},1474:function(n,e,t){"use strict";t.d(e,{LV:function(){return o},B:function(){return u}});var r=t(4155).env.NEXT_PUBLIC_GA_ID,o=function(n){window.gtag("config",r,{page_path:n})},u=function(n){var e=n.action,t=n.category,r=n.label,o=n.value;window.gtag("event",e,{event_category:t,event_label:r,value:o})}},8510:function(n,e,t){"use strict";t.r(e);var r=t(5893),o=(t(7284),t(7294)),u=t(1163),i=t(1474);t(2162);function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default=function(n){var e=n.Component,t=n.pageProps,f=(0,u.useRouter)();return(0,o.useEffect)((function(){var n=function(n){i.LV(n)};return f.events.on("routeChangeComplete",n),function(){f.events.off("routeChangeComplete",n)}}),[f.events]),(0,r.jsx)(e,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){c(n,e,t[e])}))}return n}({},t))}},2162:function(){},7284:function(){},1163:function(n,e,t){n.exports=t(387)},4155:function(n){var e,t,r=n.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function i(n){if(e===setTimeout)return setTimeout(n,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(n){e=o}try{t="function"===typeof clearTimeout?clearTimeout:u}catch(n){t=u}}();var c,f=[],a=!1,s=-1;function l(){a&&c&&(a=!1,c.length?f=c.concat(f):s=-1,f.length&&h())}function h(){if(!a){var n=i(l);a=!0;for(var e=f.length;e;){for(c=f,f=[];++s<e;)c&&c[s].run();s=-1,e=f.length}c=null,a=!1,function(n){if(t===clearTimeout)return clearTimeout(n);if((t===u||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(n);try{t(n)}catch(e){try{return t.call(null,n)}catch(e){return t.call(this,n)}}}(n)}}function p(n,e){this.fun=n,this.array=e}function v(){}r.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];f.push(new p(n,e)),1!==f.length||a||i(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(n){return[]},r.binding=function(n){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(n){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(n){var e=function(e){return n(n.s=e)};n.O(0,[774,179],(function(){return e(1780),e(387)}));var t=n.O();_N_E=t}]);