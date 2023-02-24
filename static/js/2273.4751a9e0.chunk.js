"use strict";(self.webpackChunkhomecoming_map=self.webpackChunkhomecoming_map||[]).push([[2273],{29616:function(e,t,n){n.d(t,{Qc:function(){return f},WU:function(){return l},lt:function(){return p}});var r=n(1413),i=n(29439),a=n(643),s=n(36257),u={ar:[".",","],bg:[",","\xa0"],bs:[",","."],ca:[",","."],cs:[",","\xa0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xa0"],fi:[",","\xa0"],fr:[",","\u202f"],"fr-ch":[",","\u202f"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xa0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xa0"],lv:[",","\xa0"],mk:[",","."],nb:[",","\xa0"],nl:[",","."],pl:[",","\xa0"],pt:[",","."],"pt-pt":[",","\xa0"],ro:[",","."],ru:[",","\xa0"],sk:[",","\xa0"],sl:[",","."],sr:[",","."],sv:[",","\xa0"],th:[".",","],tr:[",","."],uk:[",","\xa0"],vi:[",","."],zh:[".",","]};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,s.Kd)(),t=(e=e.toLowerCase())in u;if(!t){var n=e.split("-");n.length>1&&n[0]in u&&(e=n[0],t=!0),t||(e="en")}var r=(0,i.Z)(u[e],3),a=r[0],o=r[1],l=r[2];return{decimal:a,group:o,pattern:void 0===l?"#,##0.###":l}}function l(e,t){var n=o((t=(0,r.Z)({},t)).locale);t.customs=n;var i=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,n){var r=(n=n||{}).customs.group,i=n.customs.decimal,a=t.split(";"),s=a[0];if((t=a[e<0?1:0]||"-"+s).includes("%"))e*=100;else if(t.includes("\u2030"))e*=1e3;else{if(t.includes("\xa4"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}var u=c,o=s.match(u);if(!o)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(u,function(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);var r=t.split("."),i="string"==typeof n.places&&n.places.indexOf(","),a=n.places;i?a=n.places.substring(i+1):a>=0||(a=(r[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(a))));var s=String(Math.abs(e)).split("."),u=s[1]||"";if(r[1]||n.places){i&&(n.places=n.places.substring(0,i));var o=void 0!==n.places?n.places:r[1]&&r[1].lastIndexOf("0")+1;o>u.length&&(s[1]=u.padEnd(Number(o),"0")),a<u.length&&(s[1]=u.substr(0,Number(a)))}else s[1]&&s.pop();var l=r[0].replace(",",""),c=l.indexOf("0");-1!==c&&(c=l.length-c,c>s[0].length&&(s[0]=s[0].padStart(c,"0")),l.includes("#")||(s[0]=s[0].substr(s[0].length-c)));var p,f,d=r[0].lastIndexOf(",");if(-1!==d){p=r[0].length-d-1;var h=r[0].substr(0,d);-1!==(d=h.lastIndexOf(","))&&(f=h.length-d-1)}for(var v=[],m=s[0];m;){var g=m.length-p;v.push(g>0?m.substr(g):m),m=g>0?m.slice(0,g):"",f&&(p=f,f=void 0)}return s[0]=v.reverse().join(n.group||","),s.join(n.decimal||".")}(e,o[0],{decimal:i,group:r,places:n.places,round:n.round}))}(e,i,t)}var c=/[#0,]*[#0](?:\.0*#*)?/;function p(e){var t=o((e=e||{}).locale),n=e.pattern||t.pattern,r=t.group,i=t.decimal,s=1;if(n.includes("%"))s/=100;else if(n.includes("\u2030"))s/=1e3;else if(n.includes("\xa4"))throw new Error("currency notation not supported");var u=n.split(";");1===u.length&&u.push("-"+u[0]);var l=h(u,(function(t){return(t="(?:"+(0,a.Qs)(t,".")+")").replace(c,(function(t){var n={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:i,exponent:!1},a=t.split("."),u=e.places;1===a.length&&1!==s&&(a[1]="###"),1===a.length||0===u?n.fractional=!1:(void 0===u&&(u=e.pattern?a[1].lastIndexOf("0")+1:1/0),u&&null==e.fractional&&(n.fractional=!0),!e.places&&u<a[1].length&&(u+=","+a[1].length),n.places=u);var o=a[0].split(",");return o.length>1&&(n.groupSize=o.pop().length,o.length>1&&(n.groupSize2=o.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);var t=d(e),n=h(e.fractional,(function(t){var n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0),r=t+n;return n&&(r="(?:(?:"+r+")|(?:"+n+"))"),r+h(e.exponent,(function(t){return t?"([eE]"+d({signed:e.eSigned})+")":""}))}(n)+")"}))}),!0);return{regexp:l.replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:i,factor:s}}function f(e,t){var n=p(t),r=new RegExp("^"+n.regexp+"$").exec(e);if(!r)return NaN;var i=r[1];if(!r[1]){if(!r[2])return NaN;i=r[2],n.factor*=-1}return i=i.replace(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(i)*n.factor}function d(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",h(e.signed,(function(e){return e?"[-+]":""}),!0)+h(e.separator,(function(t){if(!t)return"(?:\\d+)";" "===(t=(0,a.Qs)(t))?t="\\s":"\xa0"===t&&(t="\\s\\xa0");var n=e.groupSize,r=e.groupSize2;if(r){var i="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*["+t+"]\\d{"+n+"})";return n-r>0?"(?:"+i+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":i}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"}),!0)}var h=function(e,t,n){if(!(e instanceof Array))return t(e);for(var r=[],i=0;i<e.length;i++)r.push(t(e[i]));return v(r.join("|"),Boolean(n))},v=function(e,t){return"("+(t?"?:":"")+e+")"}},62273:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var r=n(37762),i=n(1413),a=n(29439),s=n(74165),u=n(15861),o=n(43144),l=n(15671),c=(n(59486),n(76200)),p=n(14921),f=n(10064),d=n(32718),h=n(66978),v=n(35995),m=n(52587),g=n(40237),y=n(92975),x=n(81753),b=n(3182),w=n(80457),Z=n(97114),k=n(19995),F=n(14e3),_=n(29616),I=n(80031),N=(0,s.Z)().mark(C),E=/^\s*"([\S\s]*)"\s*$/,S=/""/g,T="\n",O=[","," ",";","|","\t"];function C(e,t,n){var r,i,a;return(0,s.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:r=0;case 1:if(!(r<=e.length)){s.next=10;break}if(i=e.indexOf(t,r),a=e.substring(r,i>-1?i:void 0),r+=a.length+t.length,s.t0=n&&!a.trim(),s.t0){s.next=8;break}return s.next=8,a;case 8:s.next=1;break;case 10:case"end":return s.stop()}}),N)}function q(e){var t=e.includes("\r\n")?"\r\n":T;return C(e,t,!0)}function D(e,t){return C(e,t,!1)}function j(e,t,n){var i;e=e.trim(),t=null===(i=t)||void 0===i?void 0:i.trim();var a,s=[],u=Array.from(new Set([null===n||void 0===n?void 0:n.delimiter].concat(O))).filter((function(e){return null!=e})),o=(0,r.Z)(u);try{for(o.s();!(a=o.n()).done;){var l,c=a.value,p=P(e,c).length,f=null!==(l=P(t,c).length)&&void 0!==l?l:p;p>1&&s.push({weight:Math.min(p,f),delimiter:c})}}catch(y){o.e(y)}finally{o.f()}var d,h=s.sort((function(e,t){var n=e.weight;return t.weight-n})).map((function(e){return e.delimiter})),v=(0,r.Z)(h);try{for(v.s();!(d=v.n()).done;){var m=d.value,g=G(R(e,m).names,null===n||void 0===n?void 0:n.longitudeField,null===n||void 0===n?void 0:n.latitudeField);if(g.longitudeFieldName&&g.latitudeFieldName)return{delimiter:m,locationInfo:g}}}catch(y){v.e(y)}finally{v.f()}return{delimiter:h[0],locationInfo:null}}function A(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return Object.create(null)};return(0,s.Z)().mark((function a(){var u,o,l,c,p,f,d,h,v,m,g,y,x,b;return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:(u=q(e)).next(),o="",l="",c=0,p=i(),f=0,d=(0,r.Z)(u),a.prev=4,d.s();case 6:if((h=d.n()).done){a.next=48;break}v=h.value,m=D(v,n),g=(0,r.Z)(m),a.prev=10,g.s();case 12:if((y=g.n()).done){a.next=30;break}if(x=y.value,o+=l+x,l="",(c+=Q(x))%2!=0){a.next=27;break}if(!(c>0)){a.next=23;break}if(b=E.exec(o)){a.next=20;break}return p=i(),f=0,o="",c=0,a.abrupt("continue",46);case 20:p[t[f]]=b[1].replace(S,'"'),f++,a.next=24;break;case 23:p[t[f]]=o,f++;case 24:o="",c=0,a.next=28;break;case 27:l=n;case 28:a.next=12;break;case 30:a.next=35;break;case 32:a.prev=32,a.t0=a.catch(10),g.e(a.t0);case 35:return a.prev=35,g.f(),a.finish(35);case 38:if(0!==c){a.next=45;break}return a.next=41,p;case 41:p=i(),f=0,a.next=46;break;case 45:l=T;case 46:a.next=6;break;case 48:a.next=53;break;case 50:a.prev=50,a.t1=a.catch(4),d.e(a.t1);case 53:return a.prev=53,d.f(),a.finish(53);case 56:case"end":return a.stop()}}),a,null,[[4,50,53,56],[10,32,35,38]])}))()}function R(e,t){for(var n=P(e,t).filter((function(e){return null!=e})),r=n.map((function(e){return(0,I.q6)(e)})),i=r.length-1;i>=0;i--)r[i]||(r.splice(i,1),n.splice(i,1));return{names:r,aliases:n}}function P(e,t){if(null===e||void 0===e||!e.length)return[];var n,i=[],a="",s="",u=0,o=D(e,t),l=(0,r.Z)(o);try{for(l.s();!(n=l.n()).done;){var c=n.value;if(a+=s+c,s="",(u+=Q(c))%2==0){if(u>0){var p=E.exec(a);p&&i.push(p[1].replace(S,'"'))}else i.push(a);a="",u=0}else s=t}}catch(f){l.e(f)}finally{l.f()}return i}function Q(e){var t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}function G(e,t,n){var r,i;t=null===(r=(0,I.q6)(t))||void 0===r?void 0:r.toLowerCase(),n=null===(i=(0,I.q6)(n))||void 0===i?void 0:i.toLowerCase();var a=e.map((function(e){return e.toLowerCase()})),s=t?e[a.indexOf(t)]:null,u=n?e[a.indexOf(n)]:null;return{longitudeFieldName:s||e[a.indexOf(B.find((function(e){return a.includes(e)})))],latitudeFieldName:u||e[a.indexOf($.find((function(e){return a.includes(e)})))]}}function V(e,t,n,i,a){var s,u=[],o=A(e,n,t),l=[],c=(0,r.Z)(o);try{for(c.s();!(s=c.n()).done;){var p=s.value;if(10===l.length)break;l.push(p)}}catch(h){c.e(h)}finally{c.f()}for(var f=function(){var e=n[d],t=i[d];if(e===a.longitudeFieldName||e===a.latitudeFieldName)u.push({name:e,type:"esriFieldTypeDouble",alias:t});else{var r,s;switch(function(e){if(!e.length)return"string";var t=/[^+-.,0-9]/;return e.map((function(e){var n=!1;if(""!==e){if(t.test(e))n=!0;else{var r=M(e);if(!isNaN(r))return/[.,]/.test(e)||!Number.isInteger(r)||r>214783647||r<-214783648?"double":"integer";if(e.includes("E")){if(r=Number(e),!isNaN(r))return"double";if(e.includes(",")){if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";n=!0}else n=!0}else n=!0}return n?/^[-]?\d*[.,]?\d*$/.test(e)?"string":L(new Date(e),e)?"date":"string":"string"}})).reduce((function(e,t){return void 0===e?t:void 0===t?e:e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0}))}(l.map((function(t){return t[e]})))){case"integer":r="esriFieldTypeInteger";break;case"double":r="esriFieldTypeDouble";break;case"date":r="esriFieldTypeDate",s=36;break;default:r="esriFieldTypeString",s=255}u.push({name:e,type:r,alias:t,length:s})}},d=0;d<n.length;d++)f();return u}function L(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var n=!0;if(!U&&/\d+\W*$/.test(t)){var r=t.match(/[a-zA-Z]{2,}/);if(r){for(var i=!1,a=0;!i&&a<=r.length;)i=!z.test(r[a]),a++;n=!i}}return n}var M=function(){var e=(0,_.lt)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),r=e.factor;return function(i){var a=t.exec(i);if(e.factor=r,!a)return NaN;var s=a[1];if(!a[1]){if(!a[2])return NaN;s=a[2],e.factor*=-1}return+(s=s.replace(n,"").replace(e.decimal,"."))*e.factor}}(),z=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,U=Number.isNaN(new Date("technology 10").getTime()),$=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],B=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],W=n(63543),H=n(52410),Y=n(78952),J=(0,W.bU)("esriGeometryPoint"),K=["csv"],X=[0,0],ee=(0,o.Z)((function e(t,n){(0,l.Z)(this,e),this.x=t,this.y=n})),te=function(){function e(){var t=this;(0,l.Z)(this,e),this._queryEngine=null,this._snapshotFeatures=function(){var e=(0,u.Z)((0,s.Z)().mark((function e(n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._fetch(n);case 2:return r=e.sent,e.abrupt("return",t._createFeatures(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,o.Z)(e,[{key:"destroy",value:function(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=null}},{key:"load",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,r,i,u,o,l,c,p,f,d,h,v,m=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.length>1&&void 0!==m[1]?m[1]:{},this._loadOptions=t,e.next=4,Promise.all([this._fetch(r.signal),this._checkProjection(null===t||void 0===t||null===(n=t.parsingOptions)||void 0===n?void 0:n.spatialReference)]);case 4:return i=e.sent,u=(0,a.Z)(i,1),o=u[0],l=ne(o,t),this._locationInfo=l.locationInfo,this._delimiter=l.delimiter,this._queryEngine=this._createQueryEngine(l),e.next=11,this._createFeatures(o);case 11:return c=e.sent,this._queryEngine.featureStore.addMany(c),e.next=15,this._queryEngine.fetchRecomputedExtents();case 15:return p=e.sent,f=p.fullExtent,d=p.timeExtent,l.layerDefinition.extent=f,d&&(h=d.start,v=d.end,l.layerDefinition.timeInfo.timeExtent=[h,v]),e.abrupt("return",l);case 20:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new f.Z("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,n.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,r,i,a,u=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._loadOptions.customParameters=t,null!==(n=this._snapshotTask)&&void 0!==n&&n.abort(),this._snapshotTask=(0,p.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){u._queryEngine.featureStore.clear(),e&&u._queryEngine.featureStore.addMany(e)}),(function(e){u._queryEngine.featureStore.clear(),(0,h.D_)(e)||d.Z.getLogger("esri.layers.CSVLayer").error(new f.Z("csv-layer:refresh","An error occurred during refresh",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.next=8,this._queryEngine.fetchRecomputedExtents();case 8:return r=e.sent,i=r.fullExtent,a=r.timeExtent,e.abrupt("return",{extent:i,timeExtent:a});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_fetch",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,r,a,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this._loadOptions,r=n.url,a=n.customParameters,r){e.next=3;break}throw new f.Z("csv-layer:invalid-source","url not defined");case 3:return u=(0,v.mN)(r),e.next=6,(0,c.default)(u.path,{query:(0,i.Z)((0,i.Z)({},u.query),a),responseType:"text",signal:t});case 6:return e.abrupt("return",e.sent.data);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createQueryEngine",value:function(e){var t=e.layerDefinition,n=t.objectIdField,r=t.fields,i=t.extent,a=t.timeInfo,s=new Z.Z({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new F.q({fields:r,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:a,objectIdField:n,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:s})}},{key:"_createFeatures",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,i,u,o,l,c,p,f,d,h,v,Z,k,F,_,N,E,S,T,O,C,q,D,j,R,P,Q,G,V,z,U,$,B,H,J,K;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this._locationInfo,i=n.latitudeFieldName,u=n.longitudeFieldName,o=this._queryEngine,l=o.objectIdField,c=o.fieldsIndex,p=o.spatialReference,f=[],d=[],h=c.fields.filter((function(e){return e.name!==l})).map((function(e){return e.name})),v=0,Z={},k=(0,r.Z)(c.fields);try{for(k.s();!(F=k.n()).done;)"esriFieldTypeOID"!==(_=F.value).type&&"esriFieldTypeGlobalID"!==_.type&&void 0!==(N=(0,I.os)(_))&&(Z[_.name]=N)}catch(s){k.e(s)}finally{k.f()}E=A(t,h,this._delimiter,(0,W.Dm)(Z,l)),S=(0,r.Z)(E);try{for(S.s();!(T=S.n()).done;)if(O=T.value,C=this._parseCoordinateValue(O[i]),null!=(q=this._parseCoordinateValue(O[u]))&&null!=C&&!isNaN(C)&&!isNaN(q)){for(D in O[i]=C,O[u]=q,O)D!==i&&D!==u&&(c.isDateField(D)?(j=new Date(O[D]),O[D]=L(j,O[D])?j.getTime():null):c.isNumericField(D)&&(R=M(O[D]),isNaN(R)?O[D]=null:O[D]=R));O[l]=v,v++,f.push(new ee(q,C)),d.push(O)}}catch(s){S.e(s)}finally{S.f()}if(!(0,y.fS)({wkid:4326},p))if((0,y.sS)(p)){P=(0,r.Z)(f);try{for(P.s();!(Q=P.n()).done;)G=Q.value,V=(0,x.hG)(G.x,G.y,X),z=(0,a.Z)(V,2),G.x=z[0],G.y=z[1]}catch(s){P.e(s)}finally{P.f()}}else f=(0,m.oj)(g.N,f,Y.Z.WGS84,p,null,null);for(U=[],$=0;$<f.length;$++)B=f[$],H=B.x,J=B.y,(K=d[$])[l]=$+1,U.push(new b.u_(new w.Z([],[H,J]),K,null,K[l]));return e.abrupt("return",U);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_parseCoordinateValue",value:function(e){if(null==e||""===e)return null;var t=M(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}},{key:"_checkProjection",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,k._W)(y.Zn,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new f.Z("csv-layer:projection-not-supported","Projection not supported");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();function ne(e,t){var n,i,a,s=t.parsingOptions||{},u={delimiter:s.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:s.latitudeField,longitudeFieldName:s.longitudeField}},o=u.layerDefinition={name:(0,v.vt)(t.url,K)||"csv",drawingInfo:J,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:s.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:s.spatialReference||{wkid:4326}}},l=q(e),c=null===(n=l.next().value)||void 0===n?void 0:n.trim(),p=null===(i=l.next().value)||void 0===i?void 0:i.trim();if(!c)throw new f.Z("csv-layer:empty-csv","CSV is empty",{csv:e});var d=j(c,p,s),h=d.delimiter,m=d.locationInfo;if(!h)throw new f.Z("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:c,secondLine:p,parsingOptions:s});if(!m)throw new f.Z("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:c,secondLine:p,parsingOptions:s});u.locationInfo=m,u.delimiter=h;var g=R(c,h),y=g.names,x=g.aliases,b=V(e,u.delimiter,y,x,u.locationInfo);if(null!==(a=s.fields)&&void 0!==a&&a.length){var w,Z=new H.Z(s.fields),k=(0,r.Z)(b);try{for(k.s();!(w=k.n()).done;){var F=w.value,_=Z.get(F.name);_&&Object.assign(F,_)}}catch(C){k.e(C)}finally{k.f()}}if(!b.some((function(e){return"esriFieldTypeOID"===e.type&&(o.objectIdField=e.name,!0)}))){var I={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};o.objectIdField=I.name,b.unshift(I)}o.fields=b;var N=new H.Z(o.fields);if(u.locationInfo&&(u.locationInfo.latitudeFieldName=N.get(u.locationInfo.latitudeFieldName).name,u.locationInfo.longitudeFieldName=N.get(u.locationInfo.longitudeFieldName).name),o.timeInfo){var E=o.timeInfo;if(E.startTimeField){var S=N.get(E.startTimeField);S?(E.startTimeField=S.name,S.type="esriFieldTypeDate"):E.startTimeField=null}if(E.endTimeField){var T=N.get(E.endTimeField);T?(E.endTimeField=T.name,T.type="esriFieldTypeDate"):E.endTimeField=null}if(E.trackIdField){var O=N.get(E.trackIdField);E.trackIdField=O?O.name:null}E.startTimeField||E.endTimeField||(o.timeInfo=null)}return u}},63543:function(e,t,n){n.d(t,{Dm:function(){return f},Hq:function(){return d},MS:function(){return h},bU:function(){return l}});var r=n(4942),i=n(1413),a=n(93169),s=n(84652),u=n(60480),o=n(76115);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}var c=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,p=1;function f(e,t){if((0,a.Z)("esri-csp-restrictions"))return function(){return(0,i.Z)((0,r.Z)({},t,null),e)};try{var n="this.".concat(t," = null;");for(var s in e)n+="this".concat(c.test(s)?".".concat(s):'["'.concat(s,'"]')," = ").concat(JSON.stringify(e[s]),";");var u=new Function("\n      return class AttributesClass$".concat(p++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return function(){return new u}}catch(o){return function(){return(0,i.Z)((0,r.Z)({},t,null),e)}}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:u.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=2273.4751a9e0.chunk.js.map