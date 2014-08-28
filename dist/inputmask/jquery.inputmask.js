/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.1.8
*/
(function(f){"function"===typeof define&&define.amd?define(["jquery"],f):f(jQuery)})(function(f){if(void 0===f.fn.inputmask){var U=function(f){var e=document.createElement("input");f="on"+f;var d=f in e;d||(e.setAttribute(f,"return;"),d="function"==typeof e[f]);return d},E=function(c,e,d){return(c=d.aliases[c])?(c.alias&&E(c.alias,void 0,d),f.extend(!0,d,c),f.extend(!0,d,e),!0):!1},R=function(c,e){function d(d){function f(d,e,c,h){this.matches=[];this.isGroup=d||!1;this.isOptional=e||!1;this.isQuantifier=
c||!1;this.isAlternator=h||!1;this.quantifier={min:1,max:1}}function e(d,f,h){var k=c.definitions[f],l=0==d.matches.length;h=void 0!=h?h:d.matches.length;if(k&&!p){for(var I=k.prevalidator,t=I?I.length:0,s=1;s<k.cardinality;s++){var u=t>=s?I[s-1]:[],r=u.validator,u=u.cardinality;d.matches.splice(h++,0,{fn:r?"string"==typeof r?RegExp(r):new function(){this.test=r}:/./,cardinality:u?u:1,optionality:d.isOptional,newBlockMarker:l,casing:k.casing,def:k.definitionSymbol||f,placeholder:k.placeholder,mask:f})}d.matches.splice(h++,
0,{fn:k.validator?"string"==typeof k.validator?RegExp(k.validator):new function(){this.test=k.validator}:/./,cardinality:k.cardinality,optionality:d.isOptional,newBlockMarker:l,casing:k.casing,def:k.definitionSymbol||f,placeholder:k.placeholder,mask:f})}else d.matches.splice(h++,0,{fn:null,cardinality:0,optionality:d.isOptional,newBlockMarker:l,casing:null,def:f,placeholder:void 0,mask:f}),p=!1}for(var l=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,p=!1,s=new f,h,u=[],x=[],
t,k;h=l.exec(d);)switch(h=h[0],h.charAt(0)){case c.optionalmarker.end:case c.groupmarker.end:h=u.pop();if(0<u.length){if(t=u[u.length-1],t.matches.push(h),t.isAlternator){h=u.pop();for(t=0;t<h.matches.length;t++)h.matches[t].isGroup=!1;0<u.length?(t=u[u.length-1],t.matches.push(h)):s.matches.push(h)}}else s.matches.push(h);break;case c.optionalmarker.start:u.push(new f(!1,!0));break;case c.groupmarker.start:u.push(new f(!0));break;case c.quantifiermarker.start:t=new f(!1,!1,!0);h=h.replace(/[{}]/g,
"");k=h.split(",");h=isNaN(k[0])?k[0]:parseInt(k[0]);k=1==k.length?h:isNaN(k[1])?k[1]:parseInt(k[1]);if("*"==k||"+"==k)h="*"==k?0:1;t.quantifier={min:h,max:k};if(0<u.length){k=u[u.length-1].matches;h=k.pop();if(!h.isGroup){var y=new f(!0);y.matches.push(h);h=y}k.push(h);k.push(t)}else h=s.matches.pop(),h.isGroup||(y=new f(!0),y.matches.push(h),h=y),s.matches.push(h),s.matches.push(t);break;case c.escapeChar:p=!0;break;case c.alternatormarker:0<u.length?(t=u[u.length-1],k=t.matches.pop()):k=s.matches.pop();
k.isAlternator?u.push(k):(h=new f(!1,!1,!1,!0),h.matches.push(k),u.push(h));break;default:if(0<u.length){if(t=u[u.length-1],0<t.matches.length&&(k=t.matches[t.matches.length-1],k.isGroup&&(k.isGroup=!1,e(k,c.groupmarker.start,0),e(k,c.groupmarker.end))),e(t,h),t.isAlternator){h=u.pop();for(t=0;t<h.matches.length;t++)h.matches[t].isGroup=!1;0<u.length?(t=u[u.length-1],t.matches.push(h)):s.matches.push(h)}}else 0<s.matches.length&&(k=s.matches[s.matches.length-1],k.isGroup&&(k.isGroup=!1,e(k,c.groupmarker.start,
0),e(k,c.groupmarker.end))),e(s,h)}0<s.matches.length&&(k=s.matches[s.matches.length-1],k.isGroup&&(k.isGroup=!1,e(k,c.groupmarker.start,0),e(k,c.groupmarker.end)),x.push(s));return x}function x(e,l){if(c.numericInput&&!0!==c.multi){e=e.split("").reverse();for(var p=0;p<e.length;p++)e[p]==c.optionalmarker.start?e[p]=c.optionalmarker.end:e[p]==c.optionalmarker.end?e[p]=c.optionalmarker.start:e[p]==c.groupmarker.start?e[p]=c.groupmarker.end:e[p]==c.groupmarker.end&&(e[p]=c.groupmarker.start);e=e.join("")}if(void 0!=
e&&""!=e){if(0<c.repeat||"*"==c.repeat||"+"==c.repeat)e=c.groupmarker.start+e+c.groupmarker.end+c.quantifiermarker.start+("*"==c.repeat?0:"+"==c.repeat?1:c.repeat)+","+c.repeat+c.quantifiermarker.end;void 0==f.inputmask.masksCache[e]&&(f.inputmask.masksCache[e]={mask:e,maskToken:d(e),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:l});return f.extend(!0,{},f.inputmask.masksCache[e])}}var y=[];f.isFunction(c.mask)&&(c.mask=c.mask.call(this,c));if(f.isArray(c.mask))if(e)f.each(c.mask,
function(d,e){void 0==e.mask||f.isFunction(e.mask)?y.push(x(e.toString())):y.push(x(e.mask.toString(),e))});else{c.keepStatic=void 0==c.keepStatic?!0:c.keepStatic;var p=!1,l="(";f.each(c.mask,function(d,e){1<l.length&&(l+=")|(");void 0==e.mask||f.isFunction(e.mask)?l+=e.toString():(p=!0,l+=e.mask.toString())});l+=")";y=x(l,p?c.mask:void 0)}else 1==c.mask.length&&!1==c.greedy&&0!=c.repeat&&(c.placeholder=""),y=void 0==c.mask.mask||f.isFunction(c.mask.mask)?x(c.mask.toString()):x(c.mask.mask.toString(),
c.mask);return y},ga="function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),v=navigator.userAgent,la=null!==v.match(/iphone/i),ma=null!==v.match(/android.*safari.*/i),na=null!==v.match(/android.*chrome.*/i),oa=null!==v.match(/android.*firefox.*/i),pa=/Kindle/i.test(v)||/Silk/i.test(v)||/KFTT/i.test(v)||/KFOT/i.test(v)||/KFJWA/i.test(v)||/KFJWI/i.test(v)||/KFSOWI/i.test(v)||/KFTHWA/i.test(v)||/KFTHWI/i.test(v)||/KFAPWA/i.test(v)||
/KFAPWI/i.test(v),Z=U("paste")?"paste":U("input")?"input":"propertychange",K=function(c,e,d){function x(a,b,g){b=b||0;var f=[],c,h=0,q;do{if(!0===a&&e.validPositions[h]){var m=e.validPositions[h];q=m.match;c=m.locator.slice();f.push(null==q.fn?q.def:!0===g?m.input:q.placeholder||d.placeholder.charAt(h%d.placeholder.length))}else c=b>h?L(h,c,h-1)[0]:v(h,c,h-1),q=c.match,c=c.locator.slice(),f.push(null==q.fn?q.def:void 0!=q.placeholder?q.placeholder:d.placeholder.charAt(h%d.placeholder.length));h++}while((void 0==
M||h-1<M)&&null!=q.fn||null==q.fn&&""!=q.def||b>=h);f.pop();return f}function y(a){var b=e;b.buffer=void 0;b.tests={};!0!==a&&(b._buffer=void 0,b.validPositions={},b.p=0)}function p(a){var b=-1,g=e.validPositions;void 0==a&&(a=-1);var d=b,f;for(f in g){var h=parseInt(f);if(-1==a||null!=g[h].match.fn)h<a&&(d=h),h>=a&&(b=h)}return 1<a-d||b<a?d:b}function l(a,b,g){if(d.insertMode&&void 0!=e.validPositions[a]&&void 0==g){g=f.extend(!0,{},e.validPositions);var B=p(),h;for(h=a;h<=B;h++)delete e.validPositions[h];
e.validPositions[a]=b;b=!0;for(h=a;h<=B;h++){a=g[h];if(void 0!=a){var c=null==a.match.fn?h+1:D(h);b=K(c,a.match.def)?b&&!1!==t(c,a.input,!0,!0):!1}if(!b)break}if(!b)return e.validPositions=f.extend(!0,{},g),!1}else e.validPositions[a]=b;return!0}function I(a,b){var g,d=a;for(g=a;g<b;g++)delete e.validPositions[g];for(g=b;g<=p();){var f=e.validPositions[g],h=e.validPositions[d];void 0!=f&&void 0==h?(K(d,f.match.def)&&!1!==t(d,f.input,!0)&&(delete e.validPositions[g],g++),d++):g++}for(g=p();0<g&&(void 0==
e.validPositions[g]||null==e.validPositions[g].match.fn);)delete e.validPositions[g],g--;y(!0)}function v(a,b,g){a=L(a,b,g);var h;b=p();b=e.validPositions[b]||L(0)[0];g=void 0!=b.alternation?b.locator[b.alternation].split(","):[];for(var c=0;c<a.length&&(h=a[c],!d.greedy&&(!h.match||!1!==h.match.optionality&&!1!==h.match.newBlockMarker||!0===h.match.optionalQuantifier||void 0!=b.alternation&&(void 0==h.locator[b.alternation]||-1!=f.inArray(h.locator[b.alternation].toString(),g))));c++);return h}function E(a){return e.validPositions[a]?
e.validPositions[a].match:L(a)[0].match}function K(a,b){for(var d=!1,e=L(a),f=0;f<e.length;f++)if(e[f].match&&e[f].match.def==b){d=!0;break}return d}function L(a,b,g){function h(b,g,c,k){function w(c,k,l){if(1E4<z)return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+e.mask),!0;if(z==a&&void 0==c.matches)return q.push({match:c,locator:k.reverse()}),!0;if(void 0!=c.matches)if(c.isGroup&&
!0!==l){if(c=w(b.matches[n+1],k))return!0}else if(c.isOptional){var p=c;if(c=h(c,g,k,l))c=q[q.length-1].match,(c=0==f.inArray(c,p.matches))&&(m=!0),z=a}else if(c.isAlternator){var p=c,t=[],s,u=q.slice(),r=k.length,N=0<g.length?g.shift():-1;if(-1==N||"string"==typeof N){var y=z,x=g.slice(),ca;"string"==typeof N&&(ca=N.split(","));for(var v=0;v<p.matches.length;v++){q=[];c=w(p.matches[v],[v].concat(k),l)||c;s=q.slice();z=y;q=[];for(var A=0;A<x.length;A++)g[A]=x[A];for(A=0;A<s.length;A++)for(var C=s[A],
I=0;I<t.length;I++){var D=t[I];if(C.match.mask==D.match.mask&&("string"!=typeof N||-1!=f.inArray(C.locator[r].toString(),ca))){s.splice(A,1);D.locator[r]=D.locator[r]+","+C.locator[r];D.alternation=r;break}}t=t.concat(s)}"string"==typeof N&&(t=f.map(t,function(a,b){if(isFinite(b)){var g=a.locator[r].toString().split(","),d;a.locator[r]=void 0;a.alternation=void 0;for(var e=0;e<g.length;e++)if(d=-1!=f.inArray(g[e],ca))void 0!=a.locator[r]?(a.locator[r]+=",",a.alternation=r,a.locator[r]+=g[e]):a.locator[r]=
parseInt(g[e]);if(void 0!=a.locator[r])return a}}));q=u.concat(t);m=!0}else c=w(p.matches[N],[N].concat(k),l);if(c)return!0}else if(c.isQuantifier&&!0!==l)for(p=c,d.greedy=d.greedy&&isFinite(p.quantifier.max),l=0<g.length&&!0!==l?g.shift():0;l<(isNaN(p.quantifier.max)?l+1:p.quantifier.max)&&z<=a;l++){if(t=b.matches[f.inArray(p,b.matches)-1],c=w(t,[l].concat(k),!0))if(c=q[q.length-1].match,c.optionalQuantifier=l>p.quantifier.min-1,c=0==f.inArray(c,t.matches))if(l>p.quantifier.min-1){m=!0;z=a;break}else return!0;
else return!0}else{if(c=h(c,g,k,l))return!0}else z++}for(var n=0<g.length?g.shift():0;n<b.matches.length;n++)if(!0!==b.matches[n].isQuantifier){var l=w(b.matches[n],[n].concat(c),k);if(l&&z==a)return l;if(z>a)break}}var c=e.maskToken,z=b?g:0;g=b||[0];var q=[],m=!1;if(void 0==b){b=a-1;for(var k;void 0==(k=e.validPositions[b])&&-1<b;)b--;if(void 0!=k&&-1<b)z=b,g=k.locator.slice();else{for(b=a-1;void 0==(k=e.tests[b])&&-1<b;)b--;void 0!=k&&-1<b&&(z=b,g=k[0].locator.slice())}}for(b=g.shift();b<c.length&&
!(h(c[b],g,[b])&&z==a||z>a);b++);(0==q.length||m)&&q.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]});e.tests[a]=f.extend(!0,[],q);return e.tests[a]}function s(){void 0==e._buffer&&(e._buffer=x(!1,1));return e._buffer}function h(){void 0==e.buffer&&(e.buffer=x(!0,p(),!0));return e.buffer}function u(a,b){var g=h().slice();if(!0===a)y(),a=0,b=g.length;else for(var f=a;f<b;f++)delete e.validPositions[f],delete e.tests[f];for(f=a;f<b;f++)g[f]!=d.skipOptionalPartCharacter&&
t(f,g[f],!0,!0)}function R(a,b){switch(b.casing){case "upper":a=a.toUpperCase();break;case "lower":a=a.toLowerCase()}return a}function t(a,b,g,c){function w(a,b,g,c){var m=!1;f.each(L(a),function(q,k){var B=k.match,z=b?1:0,w="";h();for(var n=B.cardinality;n>z;n--)w+=void 0==e.validPositions[a-(n-1)]?W(a-(n-1)):e.validPositions[a-(n-1)].input;b&&(w+=b);m=null!=B.fn?B.fn.test(w,e,a,g,d):b!=B.def&&b!=d.skipOptionalPartCharacter||""==B.def?!1:{c:B.def,pos:a};if(!1!==m){z=void 0!=m.c?m.c:b;z=z==d.skipOptionalPartCharacter&&
null===B.fn?B.def:z;w=a;void 0!=m.remove&&I(m.remove,m.remove+1);if(m.refreshFromBuffer){w=m.refreshFromBuffer;g=!0;u(!0===w?w:w.start,w.end);if(void 0==m.pos&&void 0==m.c)return m.pos=p(),!1;w=void 0!=m.pos?m.pos:a;if(w!=a)return m=f.extend(m,t(w,z,!0)),!1}else if(!0!==m&&void 0!=m.pos&&m.pos!=a&&(w=m.pos,u(a,w),w!=a))return m=f.extend(m,t(w,z,!0)),!1;if(!0!=m&&void 0==m.pos&&void 0==m.c)return!1;0<q&&y(!0);l(w,f.extend({},k,{input:R(z,B)}),c)||(m=!1);return!1}});return m}function z(a,b,g,c){if(d.keepStatic){var m=
f.extend(!0,{},e.validPositions),B,q;for(B=p();0<=B;B--)if(e.validPositions[B]&&void 0!=e.validPositions[B].alternation){q=e.validPositions[B].alternation;break}if(void 0!=q)for(var k in e.validPositions)if(parseInt(k)>parseInt(B)&&void 0===e.validPositions[k].alternation){var w=e.validPositions[k].locator[q];B=e.validPositions[B].locator[q].split(",");for(var z=0;z<B.length;z++)if(w<B[z]){for(var l,n,r=k-1;0<=r;r--)if(l=e.validPositions[r],void 0!=l){n=l.locator[q];l.locator[q]=B[z];break}if(w!=
l.locator[q]){for(var r=h().slice(),s=k;s<p()+1;s++)delete e.validPositions[s],delete e.tests[s];y(!0);d.keepStatic=!d.keepStatic;for(s=k;s<r.length;s++)r[s]!=d.skipOptionalPartCharacter&&t(p()+1,r[s],!1,!0);l.locator[q]=n;r=p()+1==a&&t(a,b,g,c);d.keepStatic=!d.keepStatic;if(r)return r;y();e.validPositions=f.extend(!0,{},m)}}break}}return!1}g=!0===g;for(var q=h(),m=a-1;-1<m&&(!e.validPositions[m]||null!=e.validPositions[m].match.fn);m--)void 0==e.validPositions[m]&&(!k(m)||q[m]!=W(m))&&1<L(m).length&&
w(m,q[m],!0);q=a;if(q>=Q())if(c){if(y(!0),q>=Q())return z(a,b,g,c)}else return z(a,b,g,c);a=w(q,b,g,c);if(!g&&!1===a)if((m=e.validPositions[q])&&null==m.match.fn&&(m.match.def==b||b==d.skipOptionalPartCharacter))a={caret:D(q)};else if((d.insertMode||void 0==e.validPositions[D(q)])&&!k(q))for(var m=q+1,n=D(q);m<=n;m++)if(a=w(m,b,g,c),!1!==a){q=m;break}!0===a&&(a={pos:q});return a}function k(a){a=E(a);return null!=a.fn?a.fn:!1}function Q(){var a;M=n.prop("maxLength");-1==M&&(M=void 0);if(!1==d.greedy){var b;
b=p();a=e.validPositions[b];var g=void 0!=a?a.locator.slice():void 0;for(b+=1;void 0==a||null!=a.match.fn||null==a.match.fn&&""!=a.match.def;b++)a=v(b,g,b-1),g=a.locator.slice();a=b}else a=h().length;return void 0==M||a<M?a:M}function D(a){var b=Q();if(a>=b)return b;for(;++a<b&&!k(a)&&(!0!==d.nojumps||d.nojumpsThreshold>a););return a}function V(a){if(0>=a)return 0;for(;0<--a&&!k(a););return a}function F(a,b,g){a._valueSet(b.join(""));void 0!=g&&r(a,g)}function W(a,b){b=b||E(a);return b.placeholder||
(null==b.fn?b.def:d.placeholder.charAt(a%d.placeholder.length))}function S(a,b,g,c,k){c=void 0!=c?c.slice():ka(a._valueGet()).split("");y();b&&a._valueSet("");f.each(c,function(b,d){if(!0===k){var c=p(),h=-1==c?b:D(c);-1==f.inArray(d,s().slice(c+1,h))&&X.call(a,void 0,!0,d.charCodeAt(0),!1,g,b)}else X.call(a,void 0,!0,d.charCodeAt(0),!1,g,b),g=g||0<b&&b>e.p});b&&(b=d.onKeyPress.call(this,void 0,h(),0,d),$(a,b),F(a,h(),f(a).is(":focus")?D(p(0)):void 0))}function U(a){return f.inputmask.escapeRegex.call(this,
a)}function ka(a){return a.replace(RegExp("("+U(s().join(""))+")*$"),"")}function fa(a){if(a.data("_inputmask")&&!a.hasClass("hasDatepicker")){var b=[],g=e.validPositions,c;for(c in g)g[c].match&&null!=g[c].match.fn&&b.push(g[c].input);b=(A?b.reverse():b).join("");g=(A?h().slice().reverse():h()).join("");f.isFunction(d.onUnMask)&&(b=d.onUnMask.call(a,g,b,d));return b}return a[0]._valueGet()}function P(a){!A||"number"!=typeof a||d.greedy&&""==d.placeholder||(a=h().length-a);return a}function r(a,b,
g){a=a.jquery&&0<a.length?a[0]:a;if("number"==typeof b){b=P(b);g=P(g);g="number"==typeof g?g:b;var c=f(a).data("_inputmask")||{};c.caret={begin:b,end:g};f(a).data("_inputmask",c);f(a).is(":visible")&&(a.scrollLeft=a.scrollWidth,!1==d.insertMode&&b==g&&g++,a.setSelectionRange?(a.selectionStart=b,a.selectionEnd=g):a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",g),a.moveStart("character",b),a.select()))}else return c=f(a).data("_inputmask"),!f(a).is(":visible")&&c&&void 0!=
c.caret?(b=c.caret.begin,g=c.caret.end):a.setSelectionRange?(b=a.selectionStart,g=a.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),b=0-a.duplicate().moveStart("character",-1E5),g=b+a.text.length),b=P(b),g=P(g),{begin:b,end:g}}function da(a){var b=h(),g=b.length,d,c=p(),k={},q=e.validPositions[c],m=void 0!=q?q.locator.slice():void 0,l;for(d=c+1;d<b.length;d++)l=v(d,m,d-1),m=l.locator.slice(),k[d]=f.extend(!0,{},l);m=q&&void 0!=q.alternation?q.locator[q.alternation].split(","):
[];for(d=g-1;d>c;d--)if(l=k[d].match,(l.optionality||l.optionalQuantifier||q&&void 0!=q.alternation&&void 0!=k[d].locator[q.alternation]&&-1!=f.inArray(k[d].locator[q.alternation].toString(),m))&&b[d]==W(d,l))g--;else break;return a?{l:g,def:k[g]?k[g].match:void 0}:g}function ea(a){for(var b=h().slice(),d=da(),c=b.length-1;c>d&&!k(c);c--);b.splice(d,c+1-d);F(a,b)}function T(a){if(f.isFunction(d.isComplete))return d.isComplete.call(n,a,d);if("*"!=d.repeat){var b=!1,g=da(!0),c=V(g.l);if(p()==c&&(void 0==
g.def||g.def.newBlockMarker||g.def.optionalQuantifier))for(b=!0,g=0;g<=c;g++){var e=k(g);if(e&&(void 0==a[g]||a[g]==W(g))||!e&&a[g]!=W(g)){b=!1;break}}return b}}function qa(a){a=f._data(a).events;f.each(a,function(a,d){f.each(d,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var d=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return d.apply(this,arguments)}}})})}function ra(a){function b(a){if(void 0==f.valHooks[a]||!0!=f.valHooks[a].inputmaskpatch){var b=
f.valHooks[a]&&f.valHooks[a].get?f.valHooks[a].get:function(a){return a.value},d=f.valHooks[a]&&f.valHooks[a].set?f.valHooks[a].set:function(a,b){a.value=b;return a};f.valHooks[a]={get:function(a){var d=f(a);if(d.data("_inputmask")){if(d.data("_inputmask").opts.autoUnmask)return d.inputmask("unmaskedvalue");a=b(a);d=(d=d.data("_inputmask").maskset._buffer)?d.join(""):"";return a!=d?a:""}return b(a)},set:function(a,b){var c=f(a),g=c.data("_inputmask");g?(g=d(a,f.isFunction(g.opts.onBeforeMask)?g.opts.onBeforeMask.call(C,
b,g.opts):b),c.triggerHandler("setvalue.inputmask")):g=d(a,b);return g},inputmaskpatch:!0}}}function d(){var a=f(this),b=f(this).data("_inputmask");return b?b.opts.autoUnmask?a.inputmask("unmaskedvalue"):k.call(this)!=s().join("")?k.call(this):"":k.call(this)}function c(a){var b=f(this).data("_inputmask");b?(q.call(this,f.isFunction(b.opts.onBeforeMask)?b.opts.onBeforeMask.call(C,a,b.opts):a),f(this).triggerHandler("setvalue.inputmask")):q.call(this,a)}function e(a){f(a).bind("mouseenter.inputmask",
function(a){a=f(this);var b=this._valueGet();""!=b&&b!=h().join("")&&a.trigger("setvalue")});if(a=f._data(a).events.mouseover){for(var b=a[a.length-1],d=a.length-1;0<d;d--)a[d]=a[d-1];a[0]=b}}var k,q;a._valueGet||(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(a,"value"),document.__lookupGetter__&&a.__lookupGetter__("value")?(k=a.__lookupGetter__("value"),q=a.__lookupSetter__("value"),a.__defineGetter__("value",d),a.__defineSetter__("value",c)):(k=function(){return a.value},q=function(b){a.value=
b},b(a.type),e(a)),a._valueGet=function(){return A?k.call(this).split("").reverse().join(""):k.call(this)},a._valueSet=function(a){q.call(this,A?a.split("").reverse().join(""):a)})}function ha(a,b,g){if(d.numericInput||A)b==d.keyCode.BACKSPACE?b=d.keyCode.DELETE:b==d.keyCode.DELETE&&(b=d.keyCode.BACKSPACE),A&&(a=g.end,g.end=g.begin,g.begin=a);b==d.keyCode.BACKSPACE&&1>=g.end-g.begin?g.begin=V(g.begin):b==d.keyCode.DELETE&&g.begin==g.end&&g.end++;I(g.begin,g.end);b=p(g.begin);e.p=b<g.begin?D(b):g.begin}
function $(a,b,d){if(b&&b.refreshFromBuffer){var c=b.refreshFromBuffer;u(!0===c?c:c.start,c.end);y(!0);void 0!=d&&(F(a,h()),r(a,b.caret||d.begin,b.caret||d.end))}}function ia(a){Y=!1;var b=this,c=f(b),k=a.keyCode,l=r(b);k==d.keyCode.BACKSPACE||k==d.keyCode.DELETE||la&&127==k||a.ctrlKey&&88==k?(a.preventDefault(),88==k&&(J=h().join("")),ha(b,k,l),F(b,h(),e.p),b._valueGet()==s().join("")&&c.trigger("cleared"),d.showTooltip&&c.prop("title",e.mask)):k==d.keyCode.END||k==d.keyCode.PAGE_DOWN?setTimeout(function(){var c=
D(p());d.insertMode||c!=Q()||a.shiftKey||c--;r(b,a.shiftKey?l.begin:c,c)},0):k==d.keyCode.HOME&&!a.shiftKey||k==d.keyCode.PAGE_UP?r(b,0,a.shiftKey?l.begin:0):k==d.keyCode.ESCAPE||90==k&&a.ctrlKey?(S(b,!0,!1,J.split("")),c.click()):k!=d.keyCode.INSERT||a.shiftKey||a.ctrlKey?!1!=d.insertMode||a.shiftKey||(k==d.keyCode.RIGHT?setTimeout(function(){var a=r(b);r(b,a.begin)},0):k==d.keyCode.LEFT&&setTimeout(function(){var a=r(b);r(b,A?a.begin+1:a.begin-1)},0)):(d.insertMode=!d.insertMode,r(b,d.insertMode||
l.begin!=Q()?l.begin:l.begin-1));var c=r(b),n=d.onKeyDown.call(this,a,h(),c.begin,d);$(b,n,c);aa=-1!=f.inArray(k,d.ignorables)}function X(a,b,c,k,n,p){if(void 0==c&&Y)return!1;Y=!0;var q=f(this);a=a||window.event;c=b?c:a.which||a.charCode||a.keyCode;if(!(!0===b||a.ctrlKey&&a.altKey)&&(a.ctrlKey||a.metaKey||aa))return!0;if(c){!0!==b&&46==c&&!1==a.shiftKey&&","==d.radixPoint&&(c=44);var m,s;c=String.fromCharCode(c);b?(p=n?p:e.p,m={begin:p,end:p}):m=r(this);if(p=A?1<m.begin-m.end||1==m.begin-m.end&&
d.insertMode:1<m.end-m.begin||1==m.end-m.begin&&d.insertMode)e.undoPositions=f.extend(!0,{},e.validPositions),ha(this,d.keyCode.DELETE,m),d.insertMode||(d.insertMode=!d.insertMode,l(m.begin,n),d.insertMode=!d.insertMode),p=!d.multi;e.writeOutBuffer=!0;m=A&&!p?m.end:m.begin;var u=t(m,c,n);!1!==u&&(!0!==u&&(m=void 0!=u.pos?u.pos:m,c=void 0!=u.c?u.c:c),y(!0),void 0!=u.caret?s=u.caret:(n=e.validPositions,s=!d.keepStatic&&(void 0!=n[m+1]&&1<L(m+1,n[m].locator.slice(),m).length||void 0!=n[m].alternation)?
m+1:D(m)),e.p=s);if(!1!==k){var x=this;setTimeout(function(){d.onKeyValidation.call(x,u,d)},0);if(e.writeOutBuffer&&!1!==u){var v=h();F(this,v,b?void 0:d.numericInput?V(s):s);!0!==b&&setTimeout(function(){!0===T(v)&&q.trigger("complete");O=!0;q.trigger("input")},0)}else p&&(e.buffer=void 0,e.validPositions=e.undoPositions)}else p&&(e.buffer=void 0,e.validPositions=e.undoPositions);d.showTooltip&&q.prop("title",e.mask);a&&!0!=b&&(a.preventDefault?a.preventDefault():a.returnValue=!1,b=r(this),a=d.onKeyPress.call(this,
a,h(),b.begin,d),$(this,a,b))}}function sa(a){var b=f(this),c=a.keyCode,e=h(),k=r(this);a=d.onKeyUp.call(this,a,e,k.begin,d);$(this,a,k);c==d.keyCode.TAB&&d.showMaskOnFocus&&(b.hasClass("focus-inputmask")&&0==this._valueGet().length?(y(),e=h(),F(this,e),r(this,0),J=h().join("")):(F(this,e),r(this,P(0),P(Q()))))}function ja(a){if(!0===O&&"input"==a.type)return O=!1,!0;var b=f(this),c=this._valueGet();if("propertychange"==a.type&&this._valueGet().length<=Q())return!0;"paste"==a.type&&(window.clipboardData&&
window.clipboardData.getData?c=window.clipboardData.getData("Text"):a.originalEvent&&a.originalEvent.clipboardData&&a.originalEvent.clipboardData.getData&&(c=a.originalEvent.clipboardData.getData("text/plain")));a=f.isFunction(d.onBeforePaste)?d.onBeforePaste.call(this,c,d):c;S(this,!0,!1,a.split(""),!0);b.click();!0===T(h())&&b.trigger("complete");return!1}function ta(a){if(!0===O&&"input"==a.type)return O=!1,!0;var b=r(this),c=this._valueGet(),c=c.replace(RegExp("("+U(s().join(""))+")*"),"");b.begin>
c.length&&(r(this,c.length),b=r(this));1!=h().length-c.length||c.charAt(b.begin)==h()[b.begin]||c.charAt(b.begin+1)==h()[b.begin]||k(b.begin)||(a.keyCode=d.keyCode.BACKSPACE,ia.call(this,a));a.preventDefault()}function ua(a){if(!0===O&&"input"==a.type)return O=!1,!0;var b=r(this),c=this._valueGet();r(this,b.begin-1);var k=f.Event("keypress");k.which=c.charCodeAt(b.begin-1);aa=Y=!1;X.call(this,k,void 0,void 0,!1);b=e.p;F(this,h(),d.numericInput?V(b):b);a.preventDefault()}function va(a){O=!0;var b=
this;setTimeout(function(){r(b,r(b).begin-1);var c=f.Event("keypress");c.which=a.originalEvent.data.charCodeAt(0);aa=Y=!1;X.call(b,c,void 0,void 0,!1);c=e.p;F(b,h(),d.numericInput?V(c):c)},0);return!1}function wa(a){n=f(a);if(n.is(":input")&&"number"!=n.attr("type")){n.data("_inputmask",{maskset:e,opts:d,isRTL:!1});d.showTooltip&&n.prop("title",e.mask);("rtl"==a.dir||d.rightAlign)&&n.css("text-align","right");if("rtl"==a.dir||d.numericInput){a.dir="ltr";n.removeAttr("dir");var b=n.data("_inputmask");
b.isRTL=!0;n.data("_inputmask",b);A=!0}n.unbind(".inputmask");n.removeClass("focus-inputmask");n.closest("form").bind("submit",function(a){J!=h().join("")&&n.change();n[0]._valueGet&&n[0]._valueGet()==s().join("")&&n[0]._valueSet("");d.autoUnmask&&d.removeMaskOnSubmit&&n.inputmask("remove")}).bind("reset",function(){setTimeout(function(){n.trigger("setvalue")},0)});n.bind("mouseenter.inputmask",function(){!f(this).hasClass("focus-inputmask")&&d.showMaskOnHover&&this._valueGet()!=h().join("")&&F(this,
h())}).bind("blur.inputmask",function(){var a=f(this);if(a.data("_inputmask")){var b=this._valueGet(),c=h();a.removeClass("focus-inputmask");J!=h().join("")&&a.change();d.clearMaskOnLostFocus&&""!=b&&(b==s().join("")?this._valueSet(""):ea(this));!1===T(c)&&(a.trigger("incomplete"),d.clearIncomplete&&(y(),d.clearMaskOnLostFocus?this._valueSet(""):(c=s().slice(),F(this,c))))}}).bind("focus.inputmask",function(){var a=f(this),b=this._valueGet();d.showMaskOnFocus&&!a.hasClass("focus-inputmask")&&(!d.showMaskOnHover||
d.showMaskOnHover&&""==b)&&this._valueGet()!=h().join("")&&F(this,h(),D(p()));a.addClass("focus-inputmask");J=h().join("")}).bind("mouseleave.inputmask",function(){var a=f(this);d.clearMaskOnLostFocus&&(a.hasClass("focus-inputmask")||this._valueGet()==a.attr("placeholder")||(this._valueGet()==s().join("")||""==this._valueGet()?this._valueSet(""):ea(this)))}).bind("click.inputmask",function(){var a=this;f(a).is(":focus")&&setTimeout(function(){var b=r(a);if(b.begin==b.end){var b=A?P(b.begin):b.begin,
c=p(b),c=D(c);b<c?k(b)?r(a,b):r(a,D(b)):r(a,c)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){r(a,0,D(p()))},0)}).bind(Z+".inputmask dragdrop.inputmask drop.inputmask",ja).bind("setvalue.inputmask",function(){S(this,!0,!1,void 0,!0);J=h().join("")}).bind("complete.inputmask",d.oncomplete).bind("incomplete.inputmask",d.onincomplete).bind("cleared.inputmask",d.oncleared);n.bind("keydown.inputmask",ia).bind("keypress.inputmask",X).bind("keyup.inputmask",sa).bind("compositionupdate.inputmask",
va);"paste"!==Z||ga||n.bind("input.inputmask",ua);ga&&n.bind("input.inputmask",ja);if(ma||oa||na||pa)"input"==Z&&n.unbind(Z+".inputmask"),n.bind("input.inputmask",ta);ra(a);b=f.isFunction(d.onBeforeMask)?d.onBeforeMask.call(a,a._valueGet(),d):a._valueGet();S(a,!0,!1,b.split(""),!0);J=h().join("");var c;try{c=document.activeElement}catch(l){}!1===T(h())&&d.clearIncomplete&&y();d.clearMaskOnLostFocus?h().join("")==s().join("")?a._valueSet(""):ea(a):F(a,h());c===a&&(n.addClass("focus-inputmask"),r(a,
D(p())));qa(a)}}var A=!1,J,n,Y=!1,O=!1,aa=!1,M;if(void 0!=c)switch(c.action){case "isComplete":return n=f(c.el),e=n.data("_inputmask").maskset,d=n.data("_inputmask").opts,T(c.buffer);case "unmaskedvalue":return n=c.$input,e=n.data("_inputmask").maskset,d=n.data("_inputmask").opts,A=c.$input.data("_inputmask").isRTL,fa(c.$input);case "mask":J=h().join("");wa(c.el);break;case "format":n=f({});n.data("_inputmask",{maskset:e,opts:d,isRTL:d.numericInput});d.numericInput&&(A=!0);var G=(f.isFunction(d.onBeforeMask)?
d.onBeforeMask.call(n,c.value,d):c.value).split("");S(n,!1,!1,A?G.reverse():G,!0);d.onKeyPress.call(this,void 0,h(),0,d);return c.metadata?{value:A?h().slice().reverse().join(""):h().join(""),metadata:n.inputmask("getmetadata")}:A?h().slice().reverse().join(""):h().join("");case "isValid":n=f({});n.data("_inputmask",{maskset:e,opts:d,isRTL:d.numericInput});d.numericInput&&(A=!0);G=c.value.split("");S(n,!1,!0,A?G.reverse():G);for(var G=h(),H=da(),ba=G.length-1;ba>H&&!k(ba);ba--);G.splice(H,ba+1-H);
return T(G)&&c.value==G.join("");case "getemptymask":return n=f(c.el),e=n.data("_inputmask").maskset,d=n.data("_inputmask").opts,s();case "remove":var C=c.el;n=f(C);e=n.data("_inputmask").maskset;d=n.data("_inputmask").opts;C._valueSet(fa(n));n.unbind(".inputmask");n.removeClass("focus-inputmask");n.removeData("_inputmask");Object.getOwnPropertyDescriptor&&(H=Object.getOwnPropertyDescriptor(C,"value"));H&&H.get?C._valueGet&&Object.defineProperty(C,"value",{get:C._valueGet,set:C._valueSet}):document.__lookupGetter__&&
C.__lookupGetter__("value")&&C._valueGet&&(C.__defineGetter__("value",C._valueGet),C.__defineSetter__("value",C._valueSet));try{delete C._valueGet,delete C._valueSet}catch(xa){C._valueGet=void 0,C._valueSet=void 0}break;case "getmetadata":n=f(c.el);e=n.data("_inputmask").maskset;d=n.data("_inputmask").opts;if(f.isArray(e.metadata)){for(H=c=p();0<=H;H--)if(e.validPositions[H]&&void 0!=e.validPositions[H].alternation){G=e.validPositions[H].alternation;break}return void 0!=G?e.metadata[e.validPositions[c].locator[G]]:
e.metadata[0]}return e.metadata}};f.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:f.noop,onincomplete:f.noop,oncleared:f.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!0,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyUp:f.noop,onKeyPress:f.noop,onKeyDown:f.noop,onBeforeMask:void 0,onBeforePaste:void 0,
onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:f.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,radixPoint:"",nojumps:!1,nojumpsThreshold:0,keepStatic:void 0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\u00c0-\u00ff\u00b5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\u00c0-\u00ff\u00b5]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,
CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0},masksCache:{},escapeRegex:function(c){return c.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)",
"gim"),"\\$1")},format:function(c,e,d){var x=f.extend(!0,{},f.inputmask.defaults,e);E(x.alias,e,x);return K({action:"format",value:c,metadata:d},R(x),x)},isValid:function(c,e){var d=f.extend(!0,{},f.inputmask.defaults,e);E(d.alias,e,d);return K({action:"isValid",value:c},R(d),d)}};f.fn.inputmask=function(c,e,d,x,y){function p(c,d){var e=f(c),l;for(l in d){var p=e.data("inputmask-"+l.toLowerCase());void 0!=p&&(d[l]=p)}return d}d=d||K;x=x||"_inputmask";var l=f.extend(!0,{},f.inputmask.defaults,e),v;
if("string"===typeof c)switch(c){case "mask":return E(l.alias,e,l),v=R(l,d!==K),0==v.length?this:this.each(function(){d({action:"mask",el:this},f.extend(!0,{},v),p(this,l))});case "unmaskedvalue":return c=f(this),c.data(x)?d({action:"unmaskedvalue",$input:c}):c.val();case "remove":return this.each(function(){f(this).data(x)&&d({action:"remove",el:this})});case "getemptymask":return this.data(x)?d({action:"getemptymask",el:this}):"";case "hasMaskedValue":return this.data(x)?!this.data(x).opts.autoUnmask:
!1;case "isComplete":return this.data(x)?d({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this}):!0;case "getmetadata":if(this.data(x))return d({action:"getmetadata",el:this});break;case "_detectScope":return E(l.alias,e,l),void 0==y||E(y,e,l)||-1!=f.inArray(y,"mask unmaskedvalue remove getemptymask hasMaskedValue isComplete getmetadata _detectScope".split(" "))||(l.mask=y),f.isFunction(l.mask)&&(l.mask=l.mask.call(this,l)),f.isArray(l.mask);default:return E(l.alias,e,l),E(c,e,l)||(l.mask=
c),v=R(l,d!==K),void 0==v?this:this.each(function(){d({action:"mask",el:this},f.extend(!0,{},v),p(this,l))})}else{if("object"==typeof c)return l=f.extend(!0,{},f.inputmask.defaults,c),E(l.alias,c,l),v=R(l,d!==K),void 0==v?this:this.each(function(){d({action:"mask",el:this},f.extend(!0,{},v),p(this,l))});if(void 0==c)return this.each(function(){var c=f(this).attr("data-inputmask");if(c&&""!=c)try{var c=c.replace(RegExp("'","g"),'"'),p=f.parseJSON("{"+c+"}");f.extend(!0,p,e);l=f.extend(!0,{},f.inputmask.defaults,
p);E(l.alias,p,l);l.alias=void 0;f(this).inputmask("mask",l,d)}catch(v){}})}}}return f.fn.inputmask});