/*jshint strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true eqeqeq:true immed:true latedef:true*/
!function(){"use strict";function e(e,r,n){if(e&&"object"==typeof e&&e.href)return e;if("string"!=typeof e)throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var a={},f=e;f=f.trim();var u=s.exec(f);if(u){u=u[0];var w=u.toLowerCase();a.protocol=w,f=f.substr(u.length)}if(n||u||f.match(/^\/\/[^@\/]+@[^@\/]+/)){var E="//"===f.substr(0,2);!E||u&&b[u]||(f=f.substr(2),a.slashes=!0)}if(!b[u]&&(E||u&&!v[u])){var _=f.indexOf("@");if(-1!==_){for(var S=f.slice(0,_),A=!0,x=0,I=c.length;I>x;x++)if(-1!==S.indexOf(c[x])){A=!1;break}A&&(a.auth=decodeURIComponent(S),f=f.substr(_+1))}for(var L=-1,x=0,I=l.length;I>x;x++){var B=f.indexOf(l[x]);-1!==B&&(0>L||L>B)&&(L=B)}-1!==L?(a.host=f.substr(0,L),f=f.substr(L)):(a.host=f,f="");for(var O=i(a.host),T=Object.keys(O),x=0,I=T.length;I>x;x++){var R=T[x];a[R]=O[R]}a.hostname=a.hostname||"";var U="["===a.hostname[0]&&"]"===a.hostname[a.hostname.length-1];if(a.hostname.length>d)a.hostname="";else if(!U)for(var C=a.hostname.split(/\./),x=0,I=C.length;I>x;x++){var k=C[x];if(k&&!k.match(p)){for(var j="",q=0,N=k.length;N>q;q++)j+=k.charCodeAt(q)>127?"x":k[q];if(!j.match(p)){var P=C.slice(0,x),M=C.slice(x+1),D=k.match(g);D&&(P.push(D[1]),M.unshift(D[2])),M.length&&(f="/"+M.join(".")+f),a.hostname=P.join(".");break}}}if(a.hostname=a.hostname.toLowerCase(),!U){for(var W=a.hostname.split("."),z=[],x=0;x<W.length;++x){var F=W[x];z.push(F.match(/[^A-Za-z0-9_-]/)?"xn--"+o.encode(F):F)}a.hostname=z.join(".")}a.host=(a.hostname||"")+(a.port?":"+a.port:""),a.href+=a.host,U&&(a.hostname=a.hostname.substr(1,a.hostname.length-2),"/"!==f[0]&&(f="/"+f))}if(!y[w])for(var x=0,I=h.length;I>x;x++){var H=h[x],G=encodeURIComponent(H);G===H&&(G=escape(H)),f=f.split(H).join(G)}var Y=f.indexOf("#");-1!==Y&&(a.hash=f.substr(Y),f=f.slice(0,Y));var X=f.indexOf("?");return-1!==X?(a.search=f.substr(X),a.query=f.substr(X+1),r&&(a.query=m.parse(a.query)),f=f.slice(0,X)):r&&(a.search="",a.query={}),f&&(a.pathname=f),v[u]&&a.hostname&&!a.pathname&&(a.pathname="/"),(a.pathname||a.search)&&(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.href=t(a),a}function t(t){"string"==typeof t&&(t=e(t));var r=t.auth||"";r&&(r=encodeURIComponent(r),r=r.replace(/%3A/i,":"),r+="@");var n=t.protocol||"",i=t.pathname||"",o=t.hash||"",s=!1,a="";void 0!==t.host?s=r+t.host:void 0!==t.hostname&&(s=r+(-1===t.hostname.indexOf(":")?t.hostname:"["+t.hostname+"]"),t.port&&(s+=":"+t.port)),t.query&&"object"==typeof t.query&&Object.keys(t.query).length&&(a=m.stringify(t.query));var f=t.search||a&&"?"+a||"";return n&&":"!==n.substr(-1)&&(n+=":"),t.slashes||(!n||v[n])&&s!==!1?(s="//"+(s||""),i&&"/"!==i.charAt(0)&&(i="/"+i)):s||(s=""),o&&"#"!==o.charAt(0)&&(o="#"+o),f&&"?"!==f.charAt(0)&&(f="?"+f),n+s+i+f+o}function r(e,r){return t(n(e,r))}function n(r,n){if(!r)return n;if(r=e(t(r),!1,!0),n=e(t(n),!1,!0),r.hash=n.hash,""===n.href)return r.href=t(r),r;if(n.slashes&&!n.protocol)return n.protocol=r.protocol,v[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=t(n),n;if(n.protocol&&n.protocol!==r.protocol){if(!v[n.protocol])return n.href=t(n),n;if(r.protocol=n.protocol,!n.host&&!b[n.protocol]){for(var i=(n.pathname||"").split("/");i.length&&!(n.host=i.shift()););n.host||(n.host=""),n.hostname||(n.hostname=""),""!==i[0]&&i.unshift(""),i.length<2&&i.unshift(""),n.pathname=i.join("/")}return r.pathname=n.pathname,r.search=n.search,r.query=n.query,r.host=n.host||"",r.auth=n.auth,r.hostname=n.hostname||n.host,r.port=n.port,(void 0!==r.pathname||void 0!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.slashes=r.slashes||n.slashes,r.href=t(r),r}var o=r.pathname&&"/"===r.pathname.charAt(0),s=void 0!==n.host||n.pathname&&"/"===n.pathname.charAt(0),a=s||o||r.host&&n.pathname,f=a,u=r.pathname&&r.pathname.split("/")||[],i=n.pathname&&n.pathname.split("/")||[],h=r.protocol&&!v[r.protocol];if(h&&(delete r.hostname,delete r.port,r.host&&(""===u[0]?u[0]=r.host:u.unshift(r.host)),delete r.host,n.protocol&&(delete n.hostname,delete n.port,n.host&&(""===i[0]?i[0]=n.host:i.unshift(n.host)),delete n.host),a=a&&(""===i[0]||""===u[0])),s)r.host=n.host||""===n.host?n.host:r.host,r.hostname=n.hostname||""===n.hostname?n.hostname:r.hostname,r.search=n.search,r.query=n.query,u=i;else if(i.length)u||(u=[]),u.pop(),u=u.concat(i),r.search=n.search,r.query=n.query;else if("search"in n){if(h){r.hostname=r.host=u.shift();var l=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;l&&(r.auth=l.shift(),r.host=r.hostname=l.shift())}return r.search=n.search,r.query=n.query,(void 0!==r.pathname||void 0!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=t(r),r}if(!u.length)return delete r.pathname,r.search?delete r.path:r.path="/"+r.search,r.href=t(r),r;for(var c=u.slice(-1)[0],d=(r.host||n.host)&&("."===c||".."===c)||""===c,p=0,g=u.length;g>=0;g--)c=u[g],"."==c?u.splice(g,1):".."===c?(u.splice(g,1),p++):p&&(u.splice(g,1),p--);if(!a&&!f)for(;p--;p)u.unshift("..");!a||""===u[0]||u[0]&&"/"===u[0].charAt(0)||u.unshift(""),d&&"/"!==u.join("/").substr(-1)&&u.push("");var y=""===u[0]||u[0]&&"/"===u[0].charAt(0);if(h){r.hostname=r.host=y?"":u.length?u.shift():"";var l=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;l&&(r.auth=l.shift(),r.host=r.hostname=l.shift())}return a=a||r.host&&u.length,a&&!y&&u.unshift(""),r.pathname=u.join("/"),(void 0!==r.pathname||void 0!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=n.auth||r.auth,r.slashes=r.slashes||n.slashes,r.href=t(r),r}function i(e){var t={},r=a.exec(e);return r&&(r=r[0],":"!==r&&(t.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(t.hostname=e),t}var o=require("./punycode");exports.parse=e,exports.resolve=r,exports.resolveObject=n,exports.format=t;var s=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,f=["<",">",'"',"`"," ","\r","\n","	"],u=["{","}","|","\\","^","~","`"].concat(f),h=["'"].concat(f),l=["%","/","?",";","#"].concat(u).concat(h),c=["/","@","?","#"].concat(f),d=255,p=/^[a-zA-Z0-9][a-z0-9A-Z_-]{0,62}$/,g=/^([a-zA-Z0-9][a-z0-9A-Z_-]{0,62})(.*)$/,y={javascript:!0,"javascript:":!0},b={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},m=require("./querystring")}();