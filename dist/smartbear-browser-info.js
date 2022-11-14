/* @smartbear/browser-info v1.5.0 | Copyright 2022 (c) SmartBear Software and contributors | https://github.com/SmartBear/browser-info/blob/master/LICENSE */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self)["@smartbear/browser-info"]=n()}(this,(function(){"use strict";class e{constructor(e,n){this.name=e,this.pattern=n}match(e){const n=/^\d+/,r=e.match(this.pattern);if(null===r)return null;const t={name:this.name,version:null,release:null};return void 0!==r[1]&&(t.version=r[1].replace("_","."),t.release=parseInt(t.version.match(n)[0],10)),t}}const n=new e("Windows",/Windows NT ([0-9.]+)/),r=new e("Windows Phone",/Windows Phone ([0-9.]+)/),t=new e("MacOS",/OS X ([0-9._]+)/),i=new e("iOS",/iPhone OS ([0-9_.]+)/),o=new e("iPadOS",/iPad.+?OS ([0-9_,]+)/),s=new e("ChromeOS",/CrOS [^ ]+ ([0-9.]+)/),a=new e("Android",/(?:Android|Adr) ([0-9.]+)/),l=new e("BlackBerry",/BlackBerry|BB10/),u=new e("webOS",/webOS\/([0-9.]+)/),w=new e("Linux",/Linux/),d=[n,r,t,i,o,s,a,l,u,w],h=new e("Firefox",/Firefox\/([0-9.]+)/),f=new e("Edge",/Edg[AeiOS]{0,3}\/([0-9.]+)/),c=new e("Opera",/OPR\/([0-9.]+)/),m=new e("SamsungInternet",/SamsungBrowser\/([0-9.]+)/),S=new e("UCBrowser",/UCBrowser\/([0-9.]+)/),p=[h,f,c,m,S,m,S,new e("Chrome",/Chrome\/([0-9.]+)/),new e("Safari",/Version\/([0-9.]+)(?: .*)? Safari\//),new e("InternetExplorer",/(?:MSIE |IEMobile\/|Trident\/.*rv:)([0-9.]+)/)];return{os:"?",name:"?",release:"?",version:"?",detect:function(e){let n,r,t="string"==typeof e?e:window.navigator.userAgent,i=!1;for(r=0;r<p.length;r++)if(n=p[r].match(t),null!==n){this.name=n.name,this.release=n.release,this.version=n.version,i=!0;break}for(r=0;r<d.length;r++)if(n=d[r].match(t),null!==n){this.os=n.name;break}return i},toString:function(){return this.name+" "+this.version},isMac:function(){return this.os===t.name},get versionAsNumber(){return parseInt(this.version.replace(/\./g,""))}}}));
//# sourceMappingURL=smartbear-browser-info.js.map
