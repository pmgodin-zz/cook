(function(e){function t(e){function t(e,t){function r(e){return n.modules[e]}var n=this;this.modules=[];return r.import=function(e,r){n.modules[e]=r,t[e]=r},r}function s(e){return e.replace(/{{/g,"❰").replace(/}}/g,"❱")}function o(e){return e.replace(/❰/g,"{").replace(/❱/g,"}")}var n={exports:{}},r=new t(this,e);(function(){function b(n,f){var p,d,v,m,g,y,b,w=e,E=f[0],S,x,T="",N=[[f[0]]],C="function",k="Illegal call : ",L="Syntax error : ";for(p=0;p<n.length;p++){v=N[0],m=n[p],g=m[0],S=m[1],T+=g;switch(S){case t:throw L+T;case r:y=[f[0]],y._=!0,y.c=w,y.cP=E,N.unshift(y),w=e,E=f[0];break;case i:y=N.shift(),x=y.c;if(!y._)throw L+k+T;if(x===f[0])throw L+k+T;if(typeof x!==C)throw"Type error: "+typeof x+" is not a "+C+" : "+T;N[0][0]=x.apply(y.cP,y.reverse()),w=N[0][0];break;case s:N.unshift([f[0]]),w=e,E=f[0];break;case o:w=N.shift(),v=N[0];if(v[0]===f[0])throw L+k+T;if(v[0]===e)throw"Cannot read property '"+g+"' of undefined : "+T;w=v[0][w[0]],v[0]=w;break;case u:E=w,w=e;break;case a:w=e,E=f[0];if(!v._)throw L+T;v[0]===f[0]&&(v[0]=e),v.unshift(f[0]);break;case l:v[0]=w=g;break;case c:v[0]=w=parseFloat(g);break;case h:if(v[0]===f[0]){w=e;for(d=0;d<f.length;d++)b=f[d],b!==e&&g in b&&(w=b[g]);v[0]=w}else{if(v[0]===e)throw"Cannot read property '"+g+"' of undefined : "+T;w=v[0][g],v[0]=w}}}return v=N[0],v===f[0]?e:v[0]}function w(n){var v,b,w=[],E,S="",x=t,T;for(v=0;v<n.length;v++){b=n[v],E=e,T=S.length==1;switch(x){case t:E=y[b];if(E!==e)break;if(p.indexOf(b)+1){E=c;break}m.indexOf(b)+1&&(E=h);break;case r:if(b!="("||T)E=t;break;case i:if(b!=")"||T)E=t;break;case s:if(b!="["||T)E=t;break;case o:if(b!="]"||T)E=t;break;case u:if(b!="."||T)E=t;break;case a:if(b!=","||T)E=t;break;case f:b!=" "&&(E=t);break;case l:b=="'"&&S.length>1&&(S=S.substring(1),b="",E=t);break;case c:d.indexOf(b)<0&&(E=t);break;case h:g.indexOf(b)<0&&(E=t)}E?(S.length&&w.push([S,x]),x=E,S="",b!=""&&v--):S+=b}return S.length&&w.push([S,x]),w}var e=void 0,t=99,r=3,i=4,s=5,o=6,u=7,a=8,f=9,l=10,c=11,h=12,p="1234567890-",d=p+".",v="abcdefghijklmnopqrstuvwxyz",m=v+v.toUpperCase()+"_$",g=m+p,y={"(":r,")":i,"[":s,"]":o,".":u,",":a," ":f,"'":l};n.exports=function(e){var t=w(e);return function(e){return typeof e=="undefined"&&(e=[{}]),e.constructor.name!=="Array"&&(e=[e]),b(t,e)}}})(),r.import("funex",n.exports),n.exports=function(e){var t=e.root;t.$removeWhitespaces=!1,t.$templates={},t["true"]=!0,t["false"]=!1,t["undefined"]=undefined,t["null"]=null},r.import("internals",n.exports),n.exports=function(e){var t=e.root;t.$encodeURI=encodeURI,t.$decodeURI=decodeURI,t.$encodeURIComponent=encodeURIComponent,t.$decodeURIComponent=decodeURIComponent,t.$log=function(e){return console.log.apply(console,arguments),e},t.$Array=function(){return Array.prototype.slice.call(arguments,0)}},r.import("helpers",n.exports),"use strict",n.exports=function(e){function n(e,t,n,r){var i=this;this.name=e,this.tags=t,this.bindHandler=function(t){return function(){var n=[t,this];return i.render.apply(n,arguments)}},this.render=function(){var t=this[0],s=this[1];for(var o=0;o<n.length;o++)o<arguments.length&&(t[n[o]]=arguments[o]);var u=r.slice(0);return u.push(t),u.push(s),i.tags.render(u,t)}}var t=e.tags;t.print=function(t,n,r){return r===undefined?n.$body():typeof r=="function"?r(n.$body()):r},t.trim=function(n,r){var i=n[0],s;return i.$removeWhitespaces=!i.$removeWhitespaces,s=t.print.apply(this,arguments),i.$removeWhitespaces=!i.$removeWhitespaces,s},t["void"]=function(t,n){this.tags&&n.$body()},t.elem=function(t,n,r,i){var s="",o=n.$body()||i||"";r||(r="span");if(n.$attrs){for(var u in n.$attrs)n.$attrs.hasOwnProperty(u)&&(s=s+" "+u+"='"+n.$attrs[u]+"'");n.$attrs={}}return"<"+r+s+">"+o+"</"+r+">"},t.set=function(t,n,r,i){i===undefined&&(i=n.$body()),n.$parent[r]=i},t.global=function(t,n,r,i){r&&(i=n.$body()||i||"",n.$root.$globals[r]=i)},t["with"]=function(t,n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i]);return n.$body()},t["if"]=function(t,n,r){n.$parent.$ifContinued=!0;if(this.tags&&r)return n.$parent.$ifContinued=!1,n.$body()},t["else"]=function(t,n,r){var i="";return n.$parent.$ifIsTrue=!1,this.tags&&n.$parent.$ifContinued&&(r||r===undefined)&&(i=n.$body(),n.$parent.$ifContinued=!1),i},t.each=function(t,n,r,i){function l(){return arguments.length?arguments[this.index%arguments.length]:""}var s,o,u=[],a=[],f="";if(this.tags&&r){if(!(r instanceof Array)){for(o in r)r.hasOwnProperty(o)&&(u.push(o),a.push(r[o]));r=a}for(s=0;s<r.length;s++){n.$loop={index:s,revindex:r.length-s-1,key:u[s],isFirst:s==0,isLast:s+1===a.length,isOdd:!!(s%2),length:r.length,value:r[s],alternate:l};if(i)n[i]=n.$loop.value;else if(typeof n.$loop.value=="object")for(var c in n.$loop.value)n.$loop.value.hasOwnProperty(c)&&(n[c]=n.$loop.value[c]);f+=n.$body()}}return f},t.template=function(t,r,i){var s,o,u=[].slice.call(arguments,3);return this.tags&&i&&(s=new n(i,this.tags,u,t),o=s.bindHandler(r),t[0].$templates[i]=o),""},t.render=function(t,r,i){var s,o,u,a,f="";s=[].slice.call(arguments,3),o=t[0].$templates[i],o||(a=t[0].$get(i),u=new n(i,a.source.rootTag.tags,[],t),o=u.bindHandler(r),t[0].$templates[i]=o),r.$templateBody=r.$body();if(r.$attrs){for(var l in r.$attrs)r.$attrs.hasOwnProperty(l)&&(r[l]=r.$attrs[l]);r.$attrs={}}return typeof o=="function"&&(f=o.apply(r,s||[])),f},t["import"]=function(n,r){t.render.apply(this,arguments)},t.include=function(t,n,r){var i=t[0];return i.$load(r)},t.attr=function(t,n,r,i){var s,o=n.$body();n.$parent.$attrs||(n.$parent.$attrs={});for(s in n.$attrs)n.$attrs.hasOwnProperty(s)&&(n.$parent.$attrs[s]=n.$attrs[s]);r&&(n.$parent.$attrs[r]=o||i||"")},t.auto=function(n,r,i){var s,o;return this.autoIsTag?n[0].$templates[this.name]?t.render.apply(this,arguments):t.elem.apply(this,arguments):(s=typeof i,s=="object"?(o=i.constructor.name,o=="Array"?t.each.apply(this,arguments):o=="Object"?t["with"].apply(this,arguments):t.print.apply(this,arguments)):s=="number"||s=="string"||s=="function"?t.print.apply(this,arguments):s=="boolean"||s=="undefined"?t["if"].apply(this,arguments):t.elem.apply(this,arguments))}},r.import("tags",n.exports),"use strict";var i=e.tag||r("./tag");n.exports=function(t,n){var r=t.slice(0),s,o,u,a,f,l,c=null,h=null,p,d,v,m,g;s=(new i("print","",n)).compile(),o=[s];while(r.length>0){l=r.shift(),p=l[0],d=l[1],v=l[2],m=l[3],g=!1,f=m,a="print";if(d){if(m[0]==="/"){o.shift();continue}m[0]==="!"&&(m=m.substring(1),g=!0),m[0]==="="?(m=m.substring(1),a="auto",f=m):(a=m.split(" ")[0].trim(),f=m.substring(a.length)),u=new i(a,f,n),u.isCommented=g,h&&(h.tags.unshift(u),h=u),p?(c||(c=u),h=u):h?(o[0].tags.unshift(c),v||o.unshift(h),h=c=null):(o[0].tags.unshift(u),v||o.unshift(u))}else u=new i(a,f,n),u.isRaw=!0,o[0].tags.unshift(u);u.compile()}return s},r.import("builder",n.exports),"use strict";n.exports=function(t,n){var r,i,u,a,f=[],l=[],c=[],h,p=!1;t=s(t);if(t){for(r=t.indexOf(n.start);r>=0;r=t.indexOf(n.start,r+1))l.push(r);l.push(t.length),f.push([p,!1,!1,o(t.substring(0,l[0]))]);for(r=0;r<l.length;r++){u=t.indexOf(n.end,l[r]);if(u>=0){a=t.substring(l[r]+n.start.length,u),c=a.split(n.chain);for(i=0;i<c.length;i++)p=c.length>1&&i!==c.length-1,a=c[i].trim(),h=a[a.length-1]===n.close&&a.length>1,h&&(a=a.substring(0,a.length-1)),f.push([p,!0,h,o(a)]);p=!1,a=t.substring(u+n.end.length,l[r+1]),f.push([p,!1,!1,o(a)])}}}return f},r.import("lexer",n.exports);var u=e.funex||r("funex");n.exports=function(t,n,r){function s(e,t){var n="";for(var r=this.length-1;r>=0;r--)n+=this[r].render(e,t);return n}var i;this.tags=[],this.tags.render=s,this.isRaw=!1,this.isCommented=!1,this.name=t,this.argString=n,this.autoIsTag=!1,this.handler=r[this.name],this.handler||(this.handler=r.auto,this.name[0]!=="="&&(this.autoIsTag=!0,i="'"+this.name+"'",this.argString=this.argString?i+", "+this.argString:i)),this.args=function(){return void 0},this.compile=function(){return this.isRaw?this.args=function(){return[this.argString]}:this.argString.trim()!==""?this.args=u("$Array("+this.argString+")"):this.args=function(){return[]},this},this.render=function(e,t){function a(){var e=n.tags.render(r,u);return r[0].$removeWhitespaces&&(e=e.trim()),e}var n=this,r=e.slice(0),i=r[0],s="",o=[],u={$parent:t,$root:i,$model:i.$model,$body:a};return r.push(u),this.isCommented||(o=this.args(r),o.unshift(u),o.unshift(r),s=this.handler.apply(this,o),r[0].$removeWhitespaces&&(s=s.trim()),s===undefined&&(s="")),s}},r.import("tag",n.exports);var a=e.middlewares||r("./middlewares"),f=e.context||r("./context"),l=e.lexer||r("./lexer"),c=e.builder||r("./builder");n.exports=function(t){var n=this;this.tags={},this.source={code:"",tokens:[],rootTag:null},this.output="",this.middlewares=new a(this),this.handler=function(){return""},this.compile=function(e){n.source.code=e;var t={start:"{",end:"}",close:"/",chain:">>"},r=l(e,t);n.source.tokens=r;var i=c(r,this.tags);return n.source.rootTag=i,n.handler=function(e){return i.render(e.stack)},n},this.render=function(r){var i=new f(r);return i.root.$get=function(e){return t.get(e)},i.root.$load=function(e){return t.load(e)},this.middlewares.run(i),n.output=this.handler(i),n.output}},r.import("template",n.exports),n.exports=function(t){this.stack=[],this.stack.push(this.root={}),this.stack.push(this.globals={}),this.stack.push(this.model=t),this.model.$root=this.root,this.root.$globals=this.globals,this.root.$model=this.model},r.import("context",n.exports);var h=e.cook||r("./cook");n.exports=h,r.import("cook",n.exports),e.Cook=r("cook")}var n=new t(e)})(this)