//tealium universal tag - utag.125 ut4.0.201806041710, Copyright 2018 Tealium.com Inc. All Rights Reserved.
var _qevents=_qevents||[];try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map={"quantcast_labels":"labels"};u.extend=[];u.loader_cb=function(a,b,c){utag.DB("send:125:CALLBACK");u.initialized=true;_qevents.push(u.data.g);utag.DB("send:125:CALLBACK:COMPLETE");};u.callBack=function(){var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb(data.a,data.b,data.c);}};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g;u.data={"base_url":(document.location.protocol=="https:"?"https://secure":"http://edge")+".quantserve.com/quant.js","qacct":"p-5NBLDGB8f6wFa","source":"TLM","orderid":"","revenue":"","event":"","g":{},"order_id":"","order_subtotal":""};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(u.data[e[f]]!==undefined){u.data[e[f]]=b[d];}else if(u.typeOf(b[d])=="array"){for(g=0;g<b[d].length;g++){c.push(e[f]+"."+b[d][g]);}}else if(e[f].indexOf("_fp.")===0){c.push(e[f]+"."+b[d]);if(e[f]==="_fp.event"){u.data.event=b[d];}}else{c.push(b[d]);}}}}
u.data.order_id=u.data.orderid||u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.revenue||u.data.order_subtotal||b._csubtotal||"";if(u.data.qacct.indexOf("p-")){utag.DB(u.id+": Tag not fired: Account Code (P-Code) in incorrect format.");return;}
if(_qevents.hasOwnProperty('push')){u.data.event="refresh";}
if(u.data.event){u.data.g.event=u.data.event;}
u.data.g.qacct=u.data.qacct;u.data.g.source=u.data.source;if(c.length>0){u.data.labels=c.join(",");u.data.g.labels=u.data.labels;}
if(u.data.order_id){u.data.g.orderid=u.data.order_id;}
if(u.data.order_subtotal){u.data.g.revenue=u.data.order_subtotal;}
if(u.initialized){u.loader_cb(a,b,c);}else{u.queue.push({"data":u.data,"a":a,"b":b,"c":c});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_125","attrs":{}});}}
}};utag.o[loader].loader.LOAD(id);}("125","wsjdn.marketwatch"));}catch(error){utag.DB(error);}
