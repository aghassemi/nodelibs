var require=function(e,t){var r=require.resolve(e,t||"/"),n=require.modules[r];if(!n)throw new Error("Failed to resolve module "+e+", tried "+r);var i=n._cached?n._cached:n();return i};require.paths=[],require.modules={},require.extensions=[".js",".coffee"],require._core={assert:!0,events:!0,fs:!0,path:!0,vm:!0},require.resolve=function(){return function(e,t){function r(e){if(require.modules[e])return e;for(var t=0;t<require.extensions.length;t++){var r=require.extensions[t];if(require.modules[e+r])return e+r}}function n(e){e=e.replace(/\/+$/,"");var t=e+"/package.json";if(require.modules[t]){var n=require.modules[t](),i=n.browserify;if("object"==typeof i&&i.main){var s=r(o.resolve(e,i.main));if(s)return s}else if("string"==typeof i){var s=r(o.resolve(e,i));if(s)return s}else if(n.main){var s=r(o.resolve(e,n.main));if(s)return s}}return r(e+"/index")}function i(e,t){for(var i=s(t),o=0;o<i.length;o++){var a=i[o],u=r(a+"/"+e);if(u)return u;var f=n(a+"/"+e);if(f)return f}var u=r(e);return u?u:void 0}function s(e){var t;t="/"===e?[""]:o.normalize(e).split("/");for(var r=[],n=t.length-1;n>=0;n--)if("node_modules"!==t[n]){var i=t.slice(0,n+1).join("/")+"/node_modules";r.push(i)}return r}if(t||(t="/"),require._core[e])return e;var o=require.modules.path();t=o.resolve("/",t);var a=t||"/";if(e.match(/^(?:\.\.?\/|\/)/)){var u=r(o.resolve(a,e))||n(o.resolve(a,e));if(u)return u}var f=i(e,a);if(f)return f;throw new Error("Cannot find module '"+e+"'")}}(),require.alias=function(e,t){var r=require.modules.path(),n=null;try{n=require.resolve(e+"/package.json","/")}catch(i){n=require.resolve(e,"/")}for(var s=r.dirname(n),o=(Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t})(require.modules),a=0;a<o.length;a++){var u=o[a];if(u.slice(0,s.length+1)===s+"/"){var f=u.slice(s.length);require.modules[t+f]=require.modules[s+f]}else u===s&&(require.modules[t]=require.modules[s])}},require.define=function(e,t){var r=require._core[e]?"":require.modules.path().dirname(e),n=function(e){return require(e,r)};n.resolve=function(e){return require.resolve(e,r)},n.modules=require.modules,n.define=require.define;var i={exports:{}};require.modules[e]=function(){return require.modules[e]._cached=i.exports,t.call(i.exports,n,i,i.exports,r,e),require.modules[e]._cached=i.exports,i.exports}},"undefined"==typeof process&&(process={}),process.nextTick||(process.nextTick=function(){var e=[],t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;return t&&window.addEventListener("message",function(t){if(t.source===window&&"browserify-tick"===t.data&&(t.stopPropagation(),e.length>0)){var r=e.shift();r()}},!0),function(r){t?(e.push(r),window.postMessage("browserify-tick","*")):setTimeout(r,0)}}()),process.title||(process.title="browser"),process.binding||(process.binding=function(e){if("evals"===e)return require("vm");throw new Error("No such module")}),process.cwd||(process.cwd=function(){return"."}),process.env||(process.env={}),process.argv||(process.argv=[]),require.define("path",function(e,t,r){function n(e,t){for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}function i(e,t){for(var r=0,n=e.length;n>=0;n--){var i=e[n];"."==i?e.splice(n,1):".."===i?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}var s=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;r.resolve=function(){for(var e="",t=!1,r=arguments.length;r>=-1&&!t;r--){var s=r>=0?arguments[r]:process.cwd();"string"==typeof s&&s&&(e=s+"/"+e,t="/"===s.charAt(0))}return e=i(n(e.split("/"),function(e){return!!e}),!t).join("/"),(t?"/":"")+e||"."},r.normalize=function(e){var t="/"===e.charAt(0),r="/"===e.slice(-1);return e=i(n(e.split("/"),function(e){return!!e}),!t).join("/"),e||t||(e="."),e&&r&&(e+="/"),(t?"/":"")+e},r.join=function(){var e=Array.prototype.slice.call(arguments,0);return r.normalize(n(e,function(e){return e&&"string"==typeof e}).join("/"))},r.dirname=function(e){var t=s.exec(e)[1]||"",r=!1;return t?1===t.length||r&&t.length<=3&&":"===t.charAt(1)?t:t.substring(0,t.length-1):"."},r.basename=function(e,t){var r=s.exec(e)[2]||"";return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},r.extname=function(e){return s.exec(e)[3]||""}}),require.define("crypto",function(e,t){t.exports=e("crypto-browserify")}),require.define("/node_modules/crypto-browserify/package.json",function(e,t){t.exports={}}),require.define("/node_modules/crypto-browserify/index.js",function(e,t,r){function n(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}var i=e("./sha"),s={sha1:{hex:i.hex_sha1,binary:i.b64_sha1,ascii:i.str_sha1}};r.createHash=function(e){e=e||"sha1",s[e]||n("algorithm:",e,"is not yet supported");var t="";return _alg=s[e],{update:function(e){return t+=e,this},digest:function(r){r=r||"binary";var i;(i=_alg[r])||n("encoding:",r,"is not yet supported for algorithm",e);var s=i(t);return t=null,s}}},["createCredentials","createHmac","createCypher","createCypheriv","createDecipher","createDecipheriv","createSign","createVerify","createDeffieHellman",,"pbkdf2",,"randomBytes"].forEach(function(e){r[e]=function(){n("sorry,",e,"is not implemented yet")}})}),require.define("/node_modules/crypto-browserify/sha.js",function(e,t,r){function n(e){return m(f(g(e),e.length*b))}function i(e){return y(f(g(e),e.length*b))}function s(e){return v(f(g(e),e.length*b))}function o(e,t){return m(h(e,t))}function a(e,t){return y(h(e,t))}function u(e,t){return v(h(e,t))}function f(e,t){e[t>>5]|=128<<24-t%32,e[(t+64>>9<<4)+15]=t;for(var r=Array(80),n=1732584193,i=-271733879,s=-1732584194,o=271733878,a=-1009589776,u=0;u<e.length;u+=16){for(var f=n,h=i,g=s,v=o,m=a,y=0;80>y;y++){r[y]=16>y?e[u+y]:p(r[y-3]^r[y-8]^r[y-14]^r[y-16],1);var _=d(d(p(n,5),c(y,i,s,o)),d(d(a,r[y]),l(y)));a=o,o=s,s=p(i,30),i=n,n=_}n=d(n,f),i=d(i,h),s=d(s,g),o=d(o,v),a=d(a,m)}return Array(n,i,s,o,a)}function c(e,t,r,n){return 20>e?t&r|~t&n:40>e?t^r^n:60>e?t&r|t&n|r&n:t^r^n}function l(e){return 20>e?1518500249:40>e?1859775393:60>e?-1894007588:-899497514}function h(e,t){var r=g(e);r.length>16&&(r=f(r,e.length*b));for(var n=Array(16),i=Array(16),s=0;16>s;s++)n[s]=909522486^r[s],i[s]=1549556828^r[s];var o=f(n.concat(g(t)),512+t.length*b);return f(i.concat(o),672)}function d(e,t){var r=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(r>>16);return n<<16|65535&r}function p(e,t){return e<<t|e>>>32-t}function g(e){for(var t=Array(),r=(1<<b)-1,n=0;n<e.length*b;n+=b)t[n>>5]|=(e.charCodeAt(n/b)&r)<<32-b-n%32;return t}function v(e){for(var t="",r=(1<<b)-1,n=0;n<32*e.length;n+=b)t+=String.fromCharCode(e[n>>5]>>>32-b-n%32&r);return t}function m(e){for(var t=_?"0123456789ABCDEF":"0123456789abcdef",r="",n=0;n<4*e.length;n++)r+=t.charAt(e[n>>2]>>8*(3-n%4)+4&15)+t.charAt(e[n>>2]>>8*(3-n%4)&15);return r}function y(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r="",n=0;n<4*e.length;n+=3)for(var i=(e[n>>2]>>8*(3-n%4)&255)<<16|(e[n+1>>2]>>8*(3-(n+1)%4)&255)<<8|e[n+2>>2]>>8*(3-(n+2)%4)&255,s=0;4>s;s++)r+=8*n+6*s>32*e.length?E:t.charAt(i>>6*(3-s)&63);return r}r.hex_sha1=n,r.b64_sha1=i,r.str_sha1=s,r.hex_hmac_sha1=o,r.b64_hmac_sha1=a,r.str_hmac_sha1=u;var _=0,E="",b=8}),require.define("/test.js",function(e){var t=e("../../crypto"),r=t.createHash("sha1").update("abc").digest("hex");console.log(r)}),require("/test.js");