(function(e){function t(e){function t(e,t){function r(e){return n.modules[e]}var n=this;this.modules=[];return r.import=function(e,r){n.modules[e]=r,t[e]=r},r}function s(e,t){var n=e.slice(0),r,i,s,u,a,f,l=null,c=null,h,p,d,v,m;r=(new o("print","",t)).compile(),i=[r];while(n.length>0){f=n.shift(),h=f[0],p=f[1],d=f[2],v=f[3],m=!1,a=v,u="print";if(p){if(v[0]==="/"){i.shift();continue}v[0]==="!"&&(v=v.substring(1),m=!0),v[0]==="="?(v=v.substring(1),u="auto",a=v):(u=v.split(" ")[0].trim(),a=v.substring(u.length)),s=new o(u,a,t),s.isCommented=m,c&&(c.tags.unshift(s),c=s),h?(l||(l=s),c=s):c?(i[0].tags.unshift(l),d||i.unshift(c),c=l=null):(i[0].tags.unshift(s),d||i.unshift(s))}else s=new o(u,a,t),s.isRaw=!0,i[0].tags.unshift(s);s.compile()}return r}function o(e,t,n){function s(e,t){var n="";for(var r=this.length-1;r>=0;r--)n+=this[r].render(e,t);return n}var r;this.tags=[],this.tags.render=s,this.isRaw=!1,this.isCommented=!1,this.name=e,this.argString=t,this.autoIsTag=!1,this.handler=n[this.name],this.handler||(this.handler=n.auto,this.name[0]!=="="&&(this.autoIsTag=!0,r="'"+this.name+"'",this.argString=this.argString?r+", "+this.argString:r)),this.args=function(){return void 0},this.compile=function(){return this.isRaw?this.args=function(){return[this.argString]}:this.argString.trim()!==""?this.args=i("$Array("+this.argString+")"):this.args=function(){return[]},this},this.render=function(e,t){function a(){var e=n.tags.render(r,u);return r[0].$removeWhitespaces&&(e=e.trim()),e}var n=this,r=e.slice(0),i=r[0],s="",o=[],u={$parent:t,$root:i,$model:i.$model,$body:a};return r.push(u),this.isCommented||(o=this.args(r),o.unshift(u),o.unshift(r),s=this.handler.apply(this,o),r[0].$removeWhitespaces&&(s=s.trim()),s===undefined&&(s="")),s}}function u(e){return e.replace(/{{/g,"❰").replace(/}}/g,"❱")}function a(e){return e.replace(/❰/g,"{").replace(/❱/g,"}")}function m(e){var t=this;this.options=e||{rootPath:""},this.resolve=function(e){return"./"+e+".cook"},this.load=function(e){var t="";if(f&&f){var n=f.resolve(this.options.rootPath,e),r=l.readFileSync(n);r&&(t=r+"")}return t},this.get=function(e){var n=this.resolve(e),r=this.load(n);return t.compile(r)},this.middlewares=new b(this),this.compile=function(n){var r=new g(t);return this.middlewares.run(r),r.compile(n),r.use(c).use(h),r},this.use(p)}function g(e){var t=this;this.tags={},this.source={code:"",tokens:[],rootTag:null},this.output="",this.middlewares=new b(this),this.handler=function(){return""},this.compile=function(e){t.source.code=e;var n={start:"{",end:"}",close:"/",chain:">>"},r=d(e,n);t.source.tokens=r;var i=v.build(r,this.tags);return t.source.rootTag=i,t.handler=function(e){return i.render(e.stack)},t},this.render=function(r){var i=new y(r);return i.root.$get=function(t){return e.get(t)},i.root.$load=function(t){return e.load(t)},this.middlewares.run(i),t.output=this.handler(i),t.output}}function y(e){this.stack=[],this.stack.push(this.root={}),this.stack.push(this.globals={}),this.stack.push(this.model=e),this.model.$root=this.root,this.root.$globals=this.globals,this.root.$model=this.model}function b(e){var t=this;this.items=[],this.use=function(t){return this.items.push(t),this},this.run=function(t){for(var n=0;n<this.items.length;n++)this.items[n](t);return this},e.use=function(e){return t.use(e)}}var n={exports:{}},r=new t(this,e);(function(){function b(n,f){var p,d,v,m,g,y,b,w=e,E=f[0],S,x,T="",N=[[f[0]]],C="function",k="Illegal call : ",L="Syntax error : ";for(p=0;p<n.length;p++){v=N[0],m=n[p],g=m[0],S=m[1],T+=g;switch(S){case t:throw L+T;case r:y=[f[0]],y._=!0,y.c=w,y.cP=E,N.unshift(y),w=e,E=f[0];break;case i:y=N.shift(),x=y.c;if(!y._)throw L+k+T;if(x===f[0])throw L+k+T;if(typeof x!==C)throw"Type error: "+typeof x+" is not a "+C+" : "+T;N[0][0]=x.apply(y.cP,y.reverse()),w=N[0][0];break;case s:N.unshift([f[0]]),w=e,E=f[0];break;case o:w=N.shift(),v=N[0];if(v[0]===f[0])throw L+k+T;if(v[0]===e)throw"Cannot read property '"+g+"' of undefined : "+T;w=v[0][w[0]],v[0]=w;break;case u:E=w,w=e;break;case a:w=e,E=f[0];if(!v._)throw L+T;v[0]===f[0]&&(v[0]=e),v.unshift(f[0]);break;case l:v[0]=w=g;break;case c:v[0]=w=parseFloat(g);break;case h:if(v[0]===f[0]){w=e;for(d=0;d<f.length;d++)b=f[d],b!==e&&g in b&&(w=b[g]);v[0]=w}else{if(v[0]===e)throw"Cannot read property '"+g+"' of undefined : "+T;w=v[0][g],v[0]=w}}}return v=N[0],v===f[0]?e:v[0]}function w(n){var v,b,w=[],E,S="",x=t,T;for(v=0;v<n.length;v++){b=n[v],E=e,T=S.length==1;switch(x){case t:E=y[b];if(E!==e)break;if(p.indexOf(b)+1){E=c;break}m.indexOf(b)+1&&(E=h);break;case r:if(b!="("||T)E=t;break;case i:if(b!=")"||T)E=t;break;case s:if(b!="["||T)E=t;break;case o:if(b!="]"||T)E=t;break;case u:if(b!="."||T)E=t;break;case a:if(b!=","||T)E=t;break;case f:b!=" "&&(E=t);break;case l:b=="'"&&S.length>1&&(S=S.substring(1),b="",E=t);break;case c:d.indexOf(b)<0&&(E=t);break;case h:g.indexOf(b)<0&&(E=t)}E?(S.length&&w.push([S,x]),x=E,S="",b!=""&&v--):S+=b}return S.length&&w.push([S,x]),w}var e=void 0,t=99,r=3,i=4,s=5,o=6,u=7,a=8,f=9,l=10,c=11,h=12,p="1234567890-",d=p+".",v="abcdefghijklmnopqrstuvwxyz",m=v+v.toUpperCase()+"_$",g=m+p,y={"(":r,")":i,"[":s,"]":o,".":u,",":a," ":f,"'":l};n.exports=function(e){var t=w(e);return function(e){return typeof e=="undefined"&&(e=[{}]),e.constructor.name!=="Array"&&(e=[e]),b(t,e)}}})(),r.import("funex",n.exports),n.exports=function(e){var t=e.root;t.$removeWhitespaces=!1,t.$templates={},t["true"]=!0,t["false"]=!1,t["undefined"]=undefined,t["null"]=null},r.import("internals",n.exports),n.exports=function(e){var t=e.root;t.$encodeURI=encodeURI,t.$decodeURI=decodeURI,t.$encodeURIComponent=encodeURIComponent,t.$decodeURIComponent=decodeURIComponent,t.$log=function(e){return console.log.apply(console,arguments),e},t.$Array=function(){return Array.prototype.slice.call(arguments,0)}},r.import("helpers",n.exports),"use strict",n.exports=function(e){function n(e,t,n,r){var i=this;this.name=e,this.tags=t,this.bindHandler=function(t){return function(){var n=[t,this];return i.render.apply(n,arguments)}},this.render=function(){var t=this[0],s=this[1];for(var o=0;o<n.length;o++)o<arguments.length&&(t[n[o]]=arguments[o]);var u=r.slice(0);return u.push(t),u.push(s),i.tags.render(u,t)}}var t=e.tags;t.print=function(t,n,r){return r!==undefined?r:n.$body()},t.trim=function(n,r){var i=n[0],s;return i.$removeWhitespaces=!i.$removeWhitespaces,s=t.print.apply(this,arguments),i.$removeWhitespaces=!i.$removeWhitespaces,s},t["void"]=function(t,n){this.tags&&n.$body()},t.apply=function(t,n,r){if(r!==undefined)return typeof r=="function"?r(n.$body()):r},t.elem=function(t,n,r,i){var s="",o=n.$body()||i||"";r||(r="span");if(n.$attrs){for(var u in n.$attrs)n.$attrs.hasOwnProperty(u)&&(s=s+" "+u+"='"+n.$attrs[u]+"'");n.$attrs={}}return"<"+r+s+">"+o+"</"+r+">"},t.set=function(t,n,r,i){i===undefined&&(i=n.$body()),n.$parent[r]=i},t.global=function(t,n,r,i){r&&(i=n.$body()||i||"",n.$root.$globals[r]=i)},t["with"]=function(t,n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i]);return n.$body()},t["if"]=function(t,n,r){n.$parent.$ifContinued=!0;if(this.tags&&r)return n.$parent.$ifContinued=!1,n.$body()},t["else"]=function(t,n,r){var i="";return n.$parent.$ifIsTrue=!1,this.tags&&n.$parent.$ifContinued&&(r||r===undefined)&&(i=n.$body(),n.$parent.$ifContinued=!1),i},t.each=function(t,n,r,i){function l(){return arguments.length?arguments[this.index%arguments.length]:""}var s,o,u=[],a=[],f="";if(this.tags&&r){if(!(r instanceof Array)){for(o in r)r.hasOwnProperty(o)&&(u.push(o),a.push(r[o]));r=a}for(s=0;s<r.length;s++){n.$loop={index:s,revindex:r.length-s-1,key:u[s],isFirst:s==0,isLast:s+1===a.length,isOdd:!!(s%2),length:r.length,value:r[s],alternate:l};if(i)n[i]=n.$loop.value;else if(typeof n.$loop.value=="object")for(var c in n.$loop.value)n.$loop.value.hasOwnProperty(c)&&(n[c]=n.$loop.value[c]);f+=n.$body()}}return f},t.template=function(t,r,i){var s,o,u=[].slice.call(arguments,3);return this.tags&&i&&(s=new n(i,this.tags,u,t),o=s.bindHandler(r),t[0].$templates[i]=o),""},t.render=function(t,r,i){var s,o,u,a,f="";s=[].slice.call(arguments,3),o=t[0].$templates[i],o||(a=t[0].$get(i),u=new n(i,a.source.rootTag.tags,[],t),o=u.bindHandler(r),t[0].$templates[i]=o),r.$templateBody=r.$body();if(r.$attrs){for(var l in r.$attrs)r.$attrs.hasOwnProperty(l)&&(r[l]=r.$attrs[l]);r.$attrs={}}return typeof o=="function"&&(f=o.apply(r,s||[])),f},t["import"]=function(n,r){t.render.apply(this,arguments)},t.include=function(t,n,r){var i=t[0];return i.$load(r)},t.attr=function(t,n,r,i){var s,o=n.$body();n.$parent.$attrs||(n.$parent.$attrs={});for(s in n.$attrs)n.$attrs.hasOwnProperty(s)&&(n.$parent.$attrs[s]=n.$attrs[s]);r&&(n.$parent.$attrs[r]=o||i||"")},t.auto=function(n,r,i){var s,o;return this.autoIsTag?n[0].$templates[this.name]?t.render.apply(this,arguments):t.elem.apply(this,arguments):(s=typeof i,s=="object"?(o=i.constructor.name,o=="Array"?t.each.apply(this,arguments):o=="Object"?t["with"].apply(this,arguments):t.print.apply(this,arguments)):s=="number"||s=="string"?t.print.apply(this,arguments):s=="boolean"||s=="undefined"?t["if"].apply(this,arguments):s=="function"?t.apply.apply(this,arguments):t.elem.apply(this,arguments))}},r.import("tags",n.exports),"use strict";var i=e.funex||r("funex");n.exports={Tag:o,build:s},r.import("builder",n.exports),"use strict";n.exports=function(t,n){var r,i,s,o,f=[],l=[],c=[],h,p=!1;t=u(t);if(t){for(r=t.indexOf(n.start);r>=0;r=t.indexOf(n.start,r+1))l.push(r);l.push(t.length),f.push([p,!1,!1,a(t.substring(0,l[0]))]);for(r=0;r<l.length;r++){s=t.indexOf(n.end,l[r]);if(s>=0){o=t.substring(l[r]+n.start.length,s),c=o.split(n.chain);for(i=0;i<c.length;i++)p=c.length>1&&i!==c.length-1,o=c[i].trim(),h=o[o.length-1]===n.close&&o.length>1,h&&(o=o.substring(0,o.length-1)),f.push([p,!0,h,a(o)]);p=!1,o=t.substring(s+n.end.length,l[r+1]),f.push([p,!1,!1,a(o)])}}}return f},r.import("lexer",n.exports),"use strict";var f=r("path"),l=r("fs"),c=e.funex||r("./middlewares/internals"),h=e.helpers||r("./middlewares/helpers"),p=e.tags||r("./middlewares/tags"),d=e.lexer||r("./lexer"),v=e.builder||r("./builder");n.exports=m,r.import("cook",n.exports),e.Cook=r("cook")}var n=new t(e)})(this)