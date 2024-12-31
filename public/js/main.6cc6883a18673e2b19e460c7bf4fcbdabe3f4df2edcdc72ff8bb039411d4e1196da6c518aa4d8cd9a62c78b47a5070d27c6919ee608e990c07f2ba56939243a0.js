(()=>{var ae=Object.create;var U=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,se=Object.prototype.hasOwnProperty;var W=(c,g)=>()=>(g||c((g={exports:{}}).exports,g),g.exports);var ue=(c,g,h,A)=>{if(g&&typeof g=="object"||typeof g=="function")for(let s of ne(g))!se.call(c,s)&&s!==h&&U(c,s,{get:()=>g[s],enumerable:!(A=re(g,s))||A.enumerable});return c};var Y=(c,g,h)=>(h=c!=null?ae(ie(c)):{},ue(g||!c||!c.__esModule?U(h,"default",{value:c,enumerable:!0}):h,c));var X=W((ce,R)=>{var oe=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};var l=function(c){var g=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,h=0,A={},s={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof a?new a(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++h}),t.__id},clone:function t(e,n){n=n||{};var i,u;switch(s.util.type(e)){case"Object":if(u=s.util.objId(e),n[u])return n[u];i={},n[u]=i;for(var f in e)e.hasOwnProperty(f)&&(i[f]=t(e[f],n));return i;case"Array":return u=s.util.objId(e),n[u]?n[u]:(i=[],n[u]=i,e.forEach(function(b,p){i[p]=t(b,n)}),i);default:return e}},getLanguage:function(t){for(;t;){var e=g.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(g,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var i="no-"+e;t;){var u=t.classList;if(u.contains(e))return!0;if(u.contains(i))return!1;t=t.parentElement}return!!n}},languages:{plain:A,plaintext:A,text:A,txt:A,extend:function(t,e){var n=s.util.clone(s.languages[t]);for(var i in e)n[i]=e[i];return n},insertBefore:function(t,e,n,i){i=i||s.languages;var u=i[t],f={};for(var b in u)if(u.hasOwnProperty(b)){if(b==e)for(var p in n)n.hasOwnProperty(p)&&(f[p]=n[p]);n.hasOwnProperty(b)||(f[b]=u[b])}var k=i[t];return i[t]=f,s.languages.DFS(s.languages,function($,C){C===k&&$!=t&&(this[$]=f)}),f},DFS:function t(e,n,i,u){u=u||{};var f=s.util.objId;for(var b in e)if(e.hasOwnProperty(b)){n.call(e,b,e[b],i||b);var p=e[b],k=s.util.type(p);k==="Object"&&!u[f(p)]?(u[f(p)]=!0,t(p,n,null,u)):k==="Array"&&!u[f(p)]&&(u[f(p)]=!0,t(p,n,b,u))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var i={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),s.hooks.run("before-all-elements-highlight",i);for(var u=0,f;f=i.elements[u++];)s.highlightElement(f,e===!0,i.callback)},highlightElement:function(t,e,n){var i=s.util.getLanguage(t),u=s.languages[i];s.util.setLanguage(t,i);var f=t.parentElement;f&&f.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(f,i);var b=t.textContent,p={element:t,language:i,grammar:u,code:b};function k(C){p.highlightedCode=C,s.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,s.hooks.run("after-highlight",p),s.hooks.run("complete",p),n&&n.call(p.element)}if(s.hooks.run("before-sanity-check",p),f=p.element.parentElement,f&&f.nodeName.toLowerCase()==="pre"&&!f.hasAttribute("tabindex")&&f.setAttribute("tabindex","0"),!p.code){s.hooks.run("complete",p),n&&n.call(p.element);return}if(s.hooks.run("before-highlight",p),!p.grammar){k(s.util.encode(p.code));return}if(e&&c.Worker){var $=new Worker(s.filename);$.onmessage=function(C){k(C.data)},$.postMessage(JSON.stringify({language:p.language,code:p.code,immediateClose:!0}))}else k(s.highlight(p.code,p.grammar,p.language))},highlight:function(t,e,n){var i={code:t,grammar:e,language:n};if(s.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=s.tokenize(i.code,i.grammar),s.hooks.run("after-tokenize",i),a.stringify(s.util.encode(i.tokens),i.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var i in n)e[i]=n[i];delete e.rest}var u=new d;return y(u,u.head,t),o(t,u,e,u.head,0),w(u)},hooks:{all:{},add:function(t,e){var n=s.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=s.hooks.all[t];if(!(!n||!n.length))for(var i=0,u;u=n[i++];)u(e)}},Token:a};c.Prism=s;function a(t,e,n,i){this.type=t,this.content=e,this.alias=n,this.length=(i||"").length|0}a.stringify=function t(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var i="";return e.forEach(function(k){i+=t(k,n)}),i}var u={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},f=e.alias;f&&(Array.isArray(f)?Array.prototype.push.apply(u.classes,f):u.classes.push(f)),s.hooks.run("wrap",u);var b="";for(var p in u.attributes)b+=" "+p+'="'+(u.attributes[p]||"").replace(/"/g,"&quot;")+'"';return"<"+u.tag+' class="'+u.classes.join(" ")+'"'+b+">"+u.content+"</"+u.tag+">"};function r(t,e,n,i){t.lastIndex=e;var u=t.exec(n);if(u&&i&&u[1]){var f=u[1].length;u.index+=f,u[0]=u[0].slice(f)}return u}function o(t,e,n,i,u,f){for(var b in n)if(!(!n.hasOwnProperty(b)||!n[b])){var p=n[b];p=Array.isArray(p)?p:[p];for(var k=0;k<p.length;++k){if(f&&f.cause==b+","+k)return;var $=p[k],C=$.inside,Z=!!$.lookbehind,H=!!$.greedy,K=$.alias;if(H&&!$.pattern.global){var Q=$.pattern.toString().match(/[imsuy]*$/)[0];$.pattern=RegExp($.pattern.source,Q+"g")}for(var q=$.pattern||$,S=i.next,E=u;S!==e.tail&&!(f&&E>=f.reach);E+=S.value.length,S=S.next){var _=S.value;if(e.length>t.length)return;if(!(_ instanceof a)){var L=1,P;if(H){if(P=r(q,E,t,Z),!P||P.index>=t.length)break;var j=P.index,ee=P.index+P[0].length,T=E;for(T+=S.value.length;j>=T;)S=S.next,T+=S.value.length;if(T-=S.value.length,E=T,S.value instanceof a)continue;for(var z=S;z!==e.tail&&(T<ee||typeof z.value=="string");z=z.next)L++,T+=z.value.length;L--,_=t.slice(E,T),P.index-=E}else if(P=r(q,0,_,Z),!P)continue;var j=P.index,D=P[0],M=_.slice(0,j),G=_.slice(j+D.length),B=E+_.length;f&&B>f.reach&&(f.reach=B);var O=S.prev;M&&(O=y(e,O,M),E+=M.length),m(e,O,L);var te=new a(b,C?s.tokenize(D,C):D,K,D);if(S=y(e,O,te),G&&y(e,S,G),L>1){var N={cause:b+","+k,reach:B};o(t,e,n,S.prev,E,N),f&&N.reach>f.reach&&(f.reach=N.reach)}}}}}}function d(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function y(t,e,n){var i=e.next,u={value:n,prev:e,next:i};return e.next=u,i.prev=u,t.length++,u}function m(t,e,n){for(var i=e.next,u=0;u<n&&i!==t.tail;u++)i=i.next;e.next=i,i.prev=e,t.length-=u}function w(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}if(!c.document)return c.addEventListener&&(s.disableWorkerMessageHandler||c.addEventListener("message",function(t){var e=JSON.parse(t.data),n=e.language,i=e.code,u=e.immediateClose;c.postMessage(s.highlight(i,s.languages[n],n)),u&&c.close()},!1)),s;var v=s.util.currentScript();v&&(s.filename=v.src,v.hasAttribute("data-manual")&&(s.manual=!0));function F(){s.manual||s.highlightAll()}if(!s.manual){var x=document.readyState;x==="loading"||x==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",F):window.requestAnimationFrame?window.requestAnimationFrame(F):window.setTimeout(F,16)}return s}(oe);typeof R!="undefined"&&R.exports&&(R.exports=l);typeof global!="undefined"&&(global.Prism=l);l.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity;l.languages.markup.doctype.inside["internal-subset"].inside=l.languages.markup;l.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))});Object.defineProperty(l.languages.markup.tag,"addInlined",{value:function(g,h){var A={};A["language-"+h]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:l.languages[h]},A.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:A}};s["language-"+h]={pattern:/[\s\S]+/,inside:l.languages[h]};var a={};a[g]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return g}),"i"),lookbehind:!0,greedy:!0,inside:s},l.languages.insertBefore("markup","cdata",a)}});Object.defineProperty(l.languages.markup.tag,"addAttribute",{value:function(c,g){l.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[g,"language-"+g],inside:l.languages[g]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});l.languages.html=l.languages.markup;l.languages.mathml=l.languages.markup;l.languages.svg=l.languages.markup;l.languages.xml=l.languages.extend("markup",{});l.languages.ssml=l.languages.xml;l.languages.atom=l.languages.xml;l.languages.rss=l.languages.xml;(function(c){var g=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+g.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+g.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+g.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+g.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:g,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var h=c.languages.markup;h&&(h.tag.addInlined("style","css"),h.tag.addAttribute("style","css"))})(l);l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};l.languages.javascript=l.languages.extend("clike",{"class-name":[l.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});l.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;l.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:l.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:l.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:l.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:l.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:l.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});l.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});l.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});l.languages.markup&&(l.languages.markup.tag.addInlined("script","javascript"),l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));l.languages.js=l.languages.javascript;(function(){if(typeof l=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var c="Loading\u2026",g=function(v,F){return"\u2716 Error "+v+" while fetching file: "+F},h="\u2716 Error: File does not exist or is empty",A={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",a="loading",r="loaded",o="failed",d="pre[data-src]:not(["+s+'="'+r+'"]):not(['+s+'="'+a+'"])';function y(v,F,x){var t=new XMLHttpRequest;t.open("GET",v,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?F(t.responseText):t.status>=400?x(g(t.status,t.statusText)):x(h))},t.send(null)}function m(v){var F=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(F){var x=Number(F[1]),t=F[2],e=F[3];return t?e?[x,Number(e)]:[x,void 0]:[x,x]}}l.hooks.add("before-highlightall",function(v){v.selector+=", "+d}),l.hooks.add("before-sanity-check",function(v){var F=v.element;if(F.matches(d)){v.code="",F.setAttribute(s,a);var x=F.appendChild(document.createElement("CODE"));x.textContent=c;var t=F.getAttribute("data-src"),e=v.language;if(e==="none"){var n=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=A[n]||n}l.util.setLanguage(x,e),l.util.setLanguage(F,e);var i=l.plugins.autoloader;i&&i.loadLanguages(e),y(t,function(u){F.setAttribute(s,r);var f=m(F.getAttribute("data-range"));if(f){var b=u.split(/\r\n?|\n/g),p=f[0],k=f[1]==null?b.length:f[1];p<0&&(p+=b.length),p=Math.max(0,Math.min(p-1,b.length)),k<0&&(k+=b.length),k=Math.max(0,Math.min(k,b.length)),u=b.slice(p,k).join(`
`),F.hasAttribute("data-start")||F.setAttribute("data-start",String(p+1))}x.textContent=u,l.highlightElement(x)},function(u){F.setAttribute(s,o),x.textContent=u})}}),l.plugins.fileHighlight={highlight:function(F){for(var x=(F||document).querySelectorAll(d),t=0,e;e=x[t++];)l.highlightElement(e)}};var w=!1;l.fileHighlight=function(){w||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),w=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var J=W((ge,I)=>{(function(){if(typeof Prism=="undefined")return;var c=Object.assign||function(a,r){for(var o in r)r.hasOwnProperty(o)&&(a[o]=r[o]);return a};function g(a){this.defaults=c({},a)}function h(a){return a.replace(/-(\w)/g,function(r,o){return o.toUpperCase()})}function A(a){for(var r=0,o=0;o<a.length;++o)a.charCodeAt(o)==9&&(r+=3);return a.length+r}var s={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};g.prototype={setDefaults:function(a){this.defaults=c(this.defaults,a)},normalize:function(a,r){r=c(this.defaults,r);for(var o in r){var d=h(o);o!=="normalize"&&d!=="setDefaults"&&r[o]&&this[d]&&(a=this[d].call(this,a,r[o]))}return a},leftTrim:function(a){return a.replace(/^\s+/,"")},rightTrim:function(a){return a.replace(/\s+$/,"")},tabsToSpaces:function(a,r){return r=r|0||4,a.replace(/\t/g,new Array(++r).join(" "))},spacesToTabs:function(a,r){return r=r|0||4,a.replace(RegExp(" {"+r+"}","g"),"	")},removeTrailing:function(a){return a.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(a){return a.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(a){var r=a.match(/^[^\S\n\r]*(?=\S)/gm);return!r||!r[0].length||(r.sort(function(o,d){return o.length-d.length}),!r[0].length)?a:a.replace(RegExp("^"+r[0],"gm"),"")},indent:function(a,r){return a.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++r).join("	")+"$&")},breakLines:function(a,r){r=r===!0?80:r|0||80;for(var o=a.split(`
`),d=0;d<o.length;++d)if(!(A(o[d])<=r)){for(var y=o[d].split(/(\s+)/g),m=0,w=0;w<y.length;++w){var v=A(y[w]);m+=v,m>r&&(y[w]=`
`+y[w],m=v)}o[d]=y.join("")}return o.join(`
`)}},typeof I!="undefined"&&I.exports&&(I.exports=g),Prism.plugins.NormalizeWhitespace=new g({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(a){var r=Prism.plugins.NormalizeWhitespace;if(!(a.settings&&a.settings["whitespace-normalization"]===!1)&&Prism.util.isActive(a.element,"whitespace-normalization",!0)){if((!a.element||!a.element.parentNode)&&a.code){a.code=r.normalize(a.code,a.settings);return}var o=a.element.parentNode;if(!(!a.code||!o||o.nodeName.toLowerCase()!=="pre")){a.settings==null&&(a.settings={});for(var d in s)if(Object.hasOwnProperty.call(s,d)){var y=s[d];if(o.hasAttribute("data-"+d))try{var m=JSON.parse(o.getAttribute("data-"+d)||"true");typeof m===y&&(a.settings[d]=m)}catch(i){}}for(var w=o.childNodes,v="",F="",x=!1,t=0;t<w.length;++t){var e=w[t];e==a.element?x=!0:e.nodeName==="#text"&&(x?F+=e.nodeValue:v+=e.nodeValue,o.removeChild(e),--t)}if(!a.element.children.length||!Prism.plugins.KeepMarkup)a.code=v+a.code+F,a.code=r.normalize(a.code,a.settings);else{var n=v+a.element.innerHTML+F;a.element.innerHTML=r.normalize(n,a.settings),a.code=a.element.textContent}}}})})()});var V=Y(X());Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(g,h){var A={};A["language-"+h]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[h]},A.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:A}};s["language-"+h]={pattern:/[\s\S]+/,inside:Prism.languages[h]};var a={};a[g]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return g}),"i"),lookbehind:!0,greedy:!0,inside:s},Prism.languages.insertBefore("markup","cdata",a)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(c,g){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[g,"language-"+g],inside:Prism.languages[g]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(c){var g=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+g.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+g.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+g.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+g.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:g,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var h=c.languages.markup;h&&(h.tag.addInlined("style","css"),h.tag.addAttribute("style","css"))})(Prism);Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var he=Y(J());(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;var c=[],g={},h=function(){};Prism.plugins.toolbar={};var A=Prism.plugins.toolbar.registerButton=function(r,o){var d;if(typeof o=="function"?d=o:d=function(y){var m;return typeof o.onClick=="function"?(m=document.createElement("button"),m.type="button",m.addEventListener("click",function(){o.onClick.call(this,y)})):typeof o.url=="string"?(m=document.createElement("a"),m.href=o.url):m=document.createElement("span"),o.className&&m.classList.add(o.className),m.textContent=o.text,m},r in g){console.warn('There is a button with the key "'+r+'" registered already.');return}c.push(g[r]=d)};function s(r){for(;r;){var o=r.getAttribute("data-toolbar-order");if(o!=null)return o=o.trim(),o.length?o.split(/\s*,\s*/g):[];r=r.parentElement}}var a=Prism.plugins.toolbar.hook=function(r){var o=r.element.parentNode;if(!(!o||!/pre/i.test(o.nodeName))&&!o.parentNode.classList.contains("code-toolbar")){var d=document.createElement("div");d.classList.add("code-toolbar"),o.parentNode.insertBefore(d,o),d.appendChild(o);var y=document.createElement("div");y.classList.add("toolbar");var m=c,w=s(r.element);w&&(m=w.map(function(v){return g[v]||h})),m.forEach(function(v){var F=v(r);if(F){var x=document.createElement("div");x.classList.add("toolbar-item"),x.appendChild(F),y.appendChild(x)}}),d.appendChild(y)}};A("label",function(r){var o=r.element.parentNode;if(!(!o||!/pre/i.test(o.nodeName))&&o.hasAttribute("data-label")){var d,y,m=o.getAttribute("data-label");try{y=document.querySelector("template#"+m)}catch(w){}return y?d=y.content:(o.hasAttribute("data-url")?(d=document.createElement("a"),d.href=o.getAttribute("data-url")):d=document.createElement("span"),d.textContent=m),d}}),Prism.hooks.add("complete",a)})();(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;if(!Prism.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}function c(a,r){a.addEventListener("click",function(){h(r)})}function g(a){var r=document.createElement("textarea");r.value=a.getText(),r.style.top="0",r.style.left="0",r.style.position="fixed",document.body.appendChild(r),r.focus(),r.select();try{var o=document.execCommand("copy");setTimeout(function(){o?a.success():a.error()},1)}catch(d){setTimeout(function(){a.error(d)},1)}document.body.removeChild(r)}function h(a){navigator.clipboard?navigator.clipboard.writeText(a.getText()).then(a.success,function(){g(a)}):g(a)}function A(a){window.getSelection().selectAllChildren(a)}function s(a){var r={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3},o="data-prismjs-";for(var d in r){for(var y=o+d,m=a;m&&!m.hasAttribute(y);)m=m.parentElement;m&&(r[d]=m.getAttribute(y))}return r}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(a){var r=a.element,o=s(r),d=document.createElement("button");d.className="copy-to-clipboard-button",d.setAttribute("type","button");var y=document.createElement("span");return d.appendChild(y),w("copy"),c(d,{getText:function(){return r.textContent},success:function(){w("copy-success"),m()},error:function(){w("copy-error"),setTimeout(function(){A(r)},1),m()}}),d;function m(){setTimeout(function(){w("copy")},o["copy-timeout"])}function w(v){y.textContent=o[v],d.setAttribute("data-copy-state",v)}})})();V.default.highlightAll();})();
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
