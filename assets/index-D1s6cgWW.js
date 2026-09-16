(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const xe="/B1-factory/";function B1(){const i=document.getElementById("factory-title"),t="FACTORY ARCHIVE".split(""),e=[],n="cubic-bezier(.34, 1.56, .64, 1)",r=(s,a)=>s+Math.random()*(a-s);t.forEach(s=>{if(s===" "){const h=document.createElement("span");h.className="glyph g-space",i.appendChild(h),e.push(h);return}const a=new Image;a.src=`${xe}letters/${s}.png`;const o=document.createElement("span");o.className="glyph",o.innerHTML=`<span class="g-text">${s}</span><span class="g-img" style="background-image:url('${xe}letters/${s}.png')"></span>`,i.appendChild(o),e.push(o);const c=o.querySelectorAll(".g-text, .g-img");let l=[];const L=()=>{l.forEach(([h,u])=>{h.style.transition=`transform ${r(500,700)}ms ${n}`,h.style.transform="translateX(0) scale(1)"}),l=[]};o.addEventListener("mouseenter",()=>{const h=r(0,130),u=r(480,760);c.forEach(f=>{f.style.transitionDelay=h+"ms",f.style.transitionDuration=u+"ms"}),o.classList.add("on");const d=r(520,780);o.animate([{transform:"scale(1) translateY(0)"},{transform:"scale(1.3) translateY(-0.02em)",offset:.32},{transform:"scale(1.08) translateY(0)",offset:.62},{transform:"scale(1.16) translateY(0)"}],{duration:d,easing:"ease-out",fill:"forwards"});const m=e.indexOf(o);[[m-1,-1],[m+1,1],[m-2,-1],[m+2,1]].forEach(([f,p])=>{const b=e[f];if(!b)return;const x=Math.abs(f-m),S=(x===1?r(10,14):r(4,6))*p;b.style.transition=`transform ${r(480,720)}ms ${n}`,b.style.transform=`translateX(${S}px) scale(${x===1?.95:.98})`,l.push([b,p])})}),o.addEventListener("mouseleave",()=>{c.forEach(h=>{h.style.transitionDelay="0ms",h.style.transitionDuration="420ms"}),o.classList.remove("on"),o.animate([{transform:"scale(1.16)"},{transform:"scale(0.94)",offset:.4},{transform:"scale(1.03)",offset:.72},{transform:"scale(1)"}],{duration:r(480,640),easing:"ease-out",fill:"forwards"}),L()})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eo="169",z1=0,Io=1,k1=2,Gc=1,Vc=2,xn=3,On=0,ke=1,cn=2,Nn=0,wi=1,Do=2,Uo=3,No=4,H1=5,Yn=100,G1=101,V1=102,W1=103,X1=104,Z1=200,$1=201,q1=202,Y1=203,oa=204,ca=205,K1=206,J1=207,j1=208,Q1=209,t2=210,e2=211,n2=212,i2=213,r2=214,la=0,La=1,ha=2,Ri=3,ua=4,da=5,fa=6,pa=7,Wc=0,s2=1,a2=2,Fn=0,o2=1,c2=2,l2=3,L2=4,h2=5,u2=6,d2=7,Xc=300,Ci=301,Pi=302,ma=303,ga=304,us=306,is=1e3,Jn=1001,_a=1002,qe=1003,f2=1004,mr=1005,Qe=1006,ys=1007,jn=1008,En=1009,Zc=1010,$c=1011,ir=1012,no=1013,Qn=1014,Mn=1015,lr=1016,io=1017,ro=1018,Ii=1020,qc=35902,Yc=1021,Kc=1022,tn=1023,Jc=1024,jc=1025,bi=1026,Di=1027,Qc=1028,so=1029,t1=1030,ao=1031,oo=1033,Yr=33776,Kr=33777,Jr=33778,jr=33779,va=35840,xa=35841,Ma=35842,ya=35843,Sa=36196,Ea=37492,wa=37496,ba=37808,Ta=37809,Aa=37810,Ra=37811,Ca=37812,Pa=37813,Ia=37814,Da=37815,Ua=37816,Na=37817,Fa=37818,Oa=37819,Ba=37820,za=37821,Qr=36492,ka=36494,Ha=36495,e1=36283,Ga=36284,Va=36285,Wa=36286,p2=3200,m2=3201,n1=0,g2=1,Un="",an="srgb",zn="srgb-linear",co="display-p3",ds="display-p3-linear",rs="linear",le="srgb",ss="rec709",as="p3",ri=7680,Fo=519,_2=512,v2=513,x2=514,i1=515,M2=516,y2=517,S2=518,E2=519,Xa=35044,Oo="300 es",yn=2e3,os=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ts=Math.PI/180,Za=180/Math.PI;function Sn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function w2(i,t){return(i%t+t)%t}function Ss(i,t,e){return(1-e)*i+e*t}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,r,s,a,o,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const L=this.elements;return L[0]=t,L[1]=r,L[2]=o,L[3]=e,L[4]=s,L[5]=c,L[6]=n,L[7]=a,L[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],L=n[4],h=n[7],u=n[2],d=n[5],m=n[8],_=r[0],f=r[3],p=r[6],b=r[1],x=r[4],S=r[7],D=r[2],R=r[5],T=r[8];return s[0]=a*_+o*b+c*D,s[3]=a*f+o*x+c*R,s[6]=a*p+o*S+c*T,s[1]=l*_+L*b+h*D,s[4]=l*f+L*x+h*R,s[7]=l*p+L*S+h*T,s[2]=u*_+d*b+m*D,s[5]=u*f+d*x+m*R,s[8]=u*p+d*S+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],L=t[8];return e*a*L-e*o*l-n*s*L+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],L=t[8],h=L*a-o*l,u=o*c-L*s,d=l*s-a*c,m=e*h+n*u+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(r*l-L*n)*_,t[2]=(o*n-r*a)*_,t[3]=u*_,t[4]=(L*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Es.makeScale(t,e)),this}rotate(t){return this.premultiply(Es.makeRotation(-t)),this}translate(t,e){return this.premultiply(Es.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new qt;function r1(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function b2(){const i=cs("canvas");return i.style.display="block",i}const Bo={};function es(i){i in Bo||(Bo[i]=!0,console.warn(i))}function T2(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function A2(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function R2(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zo=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ko=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ki={[zn]:{transfer:rs,primaries:ss,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[an]:{transfer:le,primaries:ss,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ds]:{transfer:rs,primaries:as,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ko),fromReference:i=>i.applyMatrix3(zo)},[co]:{transfer:le,primaries:as,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ko),fromReference:i=>i.applyMatrix3(zo).convertLinearToSRGB()}},C2=new Set([zn,ds]),ne={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!C2.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ki[t].toReference,r=ki[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ki[i].primaries},getTransfer:function(i){return i===Un?rs:ki[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ki[t].luminanceCoefficients)}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let si;class P2{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{si===void 0&&(si=cs("canvas")),si.width=t.width,si.height=t.height;const n=si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ti(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let I2=0;class s1{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I2++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bs(r[a].image)):s.push(bs(r[a]))}else s=bs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function bs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?P2.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D2=0;class Ne extends Ni{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Jn,r=Jn,s=Qe,a=jn,o=tn,c=En,l=Ne.DEFAULT_ANISOTROPY,L=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D2++}),this.uuid=Sn(),this.name="",this.source=new s1(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=L,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case is:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case is:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Xc;Ne.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,r=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],L=c[4],h=c[8],u=c[1],d=c[5],m=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(L-u)<.01&&Math.abs(h-_)<.01&&Math.abs(m-f)<.01){if(Math.abs(L+u)<.1&&Math.abs(h+_)<.1&&Math.abs(m+f)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,S=(d+1)/2,D=(p+1)/2,R=(L+u)/4,T=(h+_)/4,P=(m+f)/4;return x>S&&x>D?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=R/n,s=T/n):S>D?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=R/r,s=P/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=T/s,r=P/s),this.set(n,r,s,e),this}let b=Math.sqrt((f-m)*(f-m)+(h-_)*(h-_)+(u-L)*(u-L));return Math.abs(b)<.001&&(b=1),this.x=(f-m)/b,this.y=(h-_)/b,this.z=(u-L)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U2 extends Ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ne(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new s1(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends U2{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class a1 extends Ne{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class N2 extends Ne{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],L=n[r+2],h=n[r+3];const u=s[a+0],d=s[a+1],m=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=L,t[e+3]=h;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(h!==_||c!==u||l!==d||L!==m){let f=1-o;const p=c*u+l*d+L*m+h*_,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const D=Math.sqrt(x),R=Math.atan2(D,p*b);f=Math.sin(f*R)/D,o=Math.sin(o*R)/D}const S=o*b;if(c=c*f+u*S,l=l*f+d*S,L=L*f+m*S,h=h*f+_*S,f===1-o){const D=1/Math.sqrt(c*c+l*l+L*L+h*h);c*=D,l*=D,L*=D,h*=D}}t[e]=c,t[e+1]=l,t[e+2]=L,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],L=n[r+3],h=s[a],u=s[a+1],d=s[a+2],m=s[a+3];return t[e]=o*m+L*h+c*d-l*u,t[e+1]=c*m+L*u+l*h-o*d,t[e+2]=l*m+L*d+o*u-c*h,t[e+3]=L*m-o*h-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),L=o(r/2),h=o(s/2),u=c(n/2),d=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=u*L*h+l*d*m,this._y=l*d*h-u*L*m,this._z=l*L*m+u*d*h,this._w=l*L*h-u*d*m;break;case"YXZ":this._x=u*L*h+l*d*m,this._y=l*d*h-u*L*m,this._z=l*L*m-u*d*h,this._w=l*L*h+u*d*m;break;case"ZXY":this._x=u*L*h-l*d*m,this._y=l*d*h+u*L*m,this._z=l*L*m+u*d*h,this._w=l*L*h-u*d*m;break;case"ZYX":this._x=u*L*h-l*d*m,this._y=l*d*h+u*L*m,this._z=l*L*m-u*d*h,this._w=l*L*h+u*d*m;break;case"YZX":this._x=u*L*h+l*d*m,this._y=l*d*h+u*L*m,this._z=l*L*m-u*d*h,this._w=l*L*h-u*d*m;break;case"XZY":this._x=u*L*h-l*d*m,this._y=l*d*h-u*L*m,this._z=l*L*m+u*d*h,this._w=l*L*h+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],L=e[6],h=e[10],u=n+o+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(L-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(L-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+L)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+L)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,L=e._w;return this._x=n*L+a*o+r*l-s*c,this._y=r*L+a*c+s*o-n*l,this._z=s*L+a*l+n*c-r*o,this._w=a*L-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),L=Math.atan2(l,o),h=Math.sin((1-e)*L)/l,u=Math.sin(e*L)/l;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=r*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ho.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ho.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),L=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+c*l+a*h-o*L,this.y=n+c*L+o*l-s*h,this.z=r+c*h+s*L-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ts.copy(this).projectOnVector(t),this.sub(Ts)}reflect(t){return this.sub(Ts.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new C,Ho=new Lr;class hr{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(s,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),_r.subVectors(this.max,Hi),ai.subVectors(t.a,Hi),oi.subVectors(t.b,Hi),ci.subVectors(t.c,Hi),bn.subVectors(oi,ai),Tn.subVectors(ci,oi),Hn.subVectors(ai,ci);let e=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-Hn.z,Hn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,Hn.z,0,-Hn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-Hn.y,Hn.x,0];return!As(e,ai,oi,ci,_r)||(e=[1,0,0,0,1,0,0,0,1],!As(e,ai,oi,ci,_r))?!1:(vr.crossVectors(bn,Tn),e=[vr.x,vr.y,vr.z],As(e,ai,oi,ci,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new C,new C,new C,new C,new C,new C,new C,new C],Ke=new C,gr=new hr,ai=new C,oi=new C,ci=new C,bn=new C,Tn=new C,Hn=new C,Hi=new C,_r=new C,vr=new C,Gn=new C;function As(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Gn.fromArray(i,s);const o=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),c=t.dot(Gn),l=e.dot(Gn),L=n.dot(Gn);if(Math.max(-Math.max(c,l,L),Math.min(c,l,L))>o)return!1}return!0}const F2=new hr,Gi=new C,Rs=new C;class fs{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):F2.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gi.subVectors(t,this.center);const e=Gi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Gi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gi.copy(t.center).add(Rs)),this.expandByPoint(Gi.copy(t.center).sub(Rs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new C,Cs=new C,xr=new C,An=new C,Ps=new C,Mr=new C,Is=new C;class lo{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Cs.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Cs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(xr),o=An.dot(this.direction),c=-An.dot(xr),l=An.lengthSq(),L=Math.abs(1-a*a);let h,u,d,m;if(L>0)if(h=a*c-o,u=a*o-c,m=s*L,h>=0)if(u>=-m)if(u<=m){const _=1/L;h*=_,u*=_,d=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=s,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*c)+l;else u=-s,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*c)+l;else u<=-m?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+u*(u+2*c)+l):u<=m?(h=0,u=Math.min(Math.max(-s,-c),s),d=u*(u+2*c)+l):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+u*(u+2*c)+l);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Cs).addScaledVector(xr,u),d}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,L=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),L>=0?(s=(t.min.y-u.y)*L,a=(t.max.y-u.y)*L):(s=(t.max.y-u.y)*L,a=(t.min.y-u.y)*L),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-u.z)*h,c=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,c=(t.min.z-u.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,r,s){Ps.subVectors(e,t),Mr.subVectors(n,t),Is.crossVectors(Ps,Mr);let a=this.direction.dot(Is),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,t);const c=o*this.direction.dot(Mr.crossVectors(An,Mr));if(c<0)return null;const l=o*this.direction.dot(Ps.cross(An));if(l<0||c+l>a)return null;const L=-o*An.dot(Is);return L<0?null:this.at(L/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,r,s,a,o,c,l,L,h,u,d,m,_,f){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,L,h,u,d,m,_,f)}set(t,e,n,r,s,a,o,c,l,L,h,u,d,m,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=L,p[10]=h,p[14]=u,p[3]=d,p[7]=m,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/li.setFromMatrixColumn(t,0).length(),s=1/li.setFromMatrixColumn(t,1).length(),a=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),L=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=a*L,d=a*h,m=o*L,_=o*h;e[0]=c*L,e[4]=-c*h,e[8]=l,e[1]=d+m*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=m+d*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*L,d=c*h,m=l*L,_=l*h;e[0]=u+_*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*h,e[5]=a*L,e[9]=-o,e[2]=d*o-m,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*L,d=c*h,m=l*L,_=l*h;e[0]=u-_*o,e[4]=-a*h,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*L,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*L,d=a*h,m=o*L,_=o*h;e[0]=c*L,e[4]=m*l-d,e[8]=u*l+_,e[1]=c*h,e[5]=_*l+u,e[9]=d*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,d=a*l,m=o*c,_=o*l;e[0]=c*L,e[4]=_-u*h,e[8]=m*h+d,e[1]=h,e[5]=a*L,e[9]=-o*L,e[2]=-l*L,e[6]=d*h+m,e[10]=u-_*h}else if(t.order==="XZY"){const u=a*c,d=a*l,m=o*c,_=o*l;e[0]=c*L,e[4]=-h,e[8]=l*L,e[1]=u*h+_,e[5]=a*L,e[9]=d*h-m,e[2]=m*h-d,e[6]=o*L,e[10]=_*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(O2,t,B2)}lookAt(t,e,n){const r=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Rn.crossVectors(n,Ve),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Rn.crossVectors(n,Ve)),Rn.normalize(),yr.crossVectors(Ve,Rn),r[0]=Rn.x,r[4]=yr.x,r[8]=Ve.x,r[1]=Rn.y,r[5]=yr.y,r[9]=Ve.y,r[2]=Rn.z,r[6]=yr.z,r[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],L=n[1],h=n[5],u=n[9],d=n[13],m=n[2],_=n[6],f=n[10],p=n[14],b=n[3],x=n[7],S=n[11],D=n[15],R=r[0],T=r[4],P=r[8],K=r[12],g=r[1],M=r[5],k=r[9],A=r[13],z=r[2],X=r[6],U=r[10],Y=r[14],I=r[3],et=r[7],ot=r[11],ct=r[15];return s[0]=a*R+o*g+c*z+l*I,s[4]=a*T+o*M+c*X+l*et,s[8]=a*P+o*k+c*U+l*ot,s[12]=a*K+o*A+c*Y+l*ct,s[1]=L*R+h*g+u*z+d*I,s[5]=L*T+h*M+u*X+d*et,s[9]=L*P+h*k+u*U+d*ot,s[13]=L*K+h*A+u*Y+d*ct,s[2]=m*R+_*g+f*z+p*I,s[6]=m*T+_*M+f*X+p*et,s[10]=m*P+_*k+f*U+p*ot,s[14]=m*K+_*A+f*Y+p*ct,s[3]=b*R+x*g+S*z+D*I,s[7]=b*T+x*M+S*X+D*et,s[11]=b*P+x*k+S*U+D*ot,s[15]=b*K+x*A+S*Y+D*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],L=t[2],h=t[6],u=t[10],d=t[14],m=t[3],_=t[7],f=t[11],p=t[15];return m*(+s*c*h-r*l*h-s*o*u+n*l*u+r*o*d-n*c*d)+_*(+e*c*d-e*l*u+s*a*u-r*a*d+r*l*L-s*c*L)+f*(+e*l*h-e*o*d-s*a*h+n*a*d+s*o*L-n*l*L)+p*(-r*o*L-e*c*h+e*o*u+r*a*h-n*a*u+n*c*L)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],L=t[8],h=t[9],u=t[10],d=t[11],m=t[12],_=t[13],f=t[14],p=t[15],b=h*f*l-_*u*l+_*c*d-o*f*d-h*c*p+o*u*p,x=m*u*l-L*f*l-m*c*d+a*f*d+L*c*p-a*u*p,S=L*_*l-m*h*l+m*o*d-a*_*d-L*o*p+a*h*p,D=m*h*c-L*_*c-m*o*u+a*_*u+L*o*f-a*h*f,R=e*b+n*x+r*S+s*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=b*T,t[1]=(_*u*s-h*f*s-_*r*d+n*f*d+h*r*p-n*u*p)*T,t[2]=(o*f*s-_*c*s+_*r*l-n*f*l-o*r*p+n*c*p)*T,t[3]=(h*c*s-o*u*s-h*r*l+n*u*l+o*r*d-n*c*d)*T,t[4]=x*T,t[5]=(L*f*s-m*u*s+m*r*d-e*f*d-L*r*p+e*u*p)*T,t[6]=(m*c*s-a*f*s-m*r*l+e*f*l+a*r*p-e*c*p)*T,t[7]=(a*u*s-L*c*s+L*r*l-e*u*l-a*r*d+e*c*d)*T,t[8]=S*T,t[9]=(m*h*s-L*_*s-m*n*d+e*_*d+L*n*p-e*h*p)*T,t[10]=(a*_*s-m*o*s+m*n*l-e*_*l-a*n*p+e*o*p)*T,t[11]=(L*o*s-a*h*s-L*n*l+e*h*l+a*n*d-e*o*d)*T,t[12]=D*T,t[13]=(L*_*r-m*h*r+m*n*u-e*_*u-L*n*f+e*h*f)*T,t[14]=(m*o*r-a*_*r-m*n*c+e*_*c+a*n*f-e*o*f)*T,t[15]=(a*h*r-L*o*r+L*n*c-e*h*c-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,L=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,L*o+n,L*c-r*a,0,l*c-r*o,L*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,L=a+a,h=o+o,u=s*l,d=s*L,m=s*h,_=a*L,f=a*h,p=o*h,b=c*l,x=c*L,S=c*h,D=n.x,R=n.y,T=n.z;return r[0]=(1-(_+p))*D,r[1]=(d+S)*D,r[2]=(m-x)*D,r[3]=0,r[4]=(d-S)*R,r[5]=(1-(u+p))*R,r[6]=(f+b)*R,r[7]=0,r[8]=(m+x)*T,r[9]=(f-b)*T,r[10]=(1-(u+_))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=li.set(r[0],r[1],r[2]).length();const a=li.set(r[4],r[5],r[6]).length(),o=li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Je.copy(this);const l=1/s,L=1/a,h=1/o;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=L,Je.elements[5]*=L,Je.elements[6]*=L,Je.elements[8]*=h,Je.elements[9]*=h,Je.elements[10]*=h,e.setFromRotationMatrix(Je),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=yn){const c=this.elements,l=2*s/(e-t),L=2*s/(n-r),h=(e+t)/(e-t),u=(n+r)/(n-r);let d,m;if(o===yn)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===os)d=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=L,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=yn){const c=this.elements,l=1/(e-t),L=1/(n-r),h=1/(a-s),u=(e+t)*l,d=(n+r)*L;let m,_;if(o===yn)m=(a+s)*h,_=-2*h;else if(o===os)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*L,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new C,Je=new oe,O2=new C(0,0,0),B2=new C(1,1,1),Rn=new C,yr=new C,Ve=new C,Go=new oe,Vo=new Lr;class un{constructor(t=0,e=0,n=0,r=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],L=r[9],h=r[2],u=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-L,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(L,-1,1)),Math.abs(L)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-L,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-L,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Go,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Lo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let z2=0;const Wo=new C,Li=new Lr,gn=new oe,Sr=new C,Vi=new C,k2=new C,H2=new Lr,Xo=new C(1,0,0),Zo=new C(0,1,0),$o=new C(0,0,1),qo={type:"added"},G2={type:"removed"},hi={type:"childadded",child:null},Ds={type:"childremoved",child:null};class Se extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z2++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new C,e=new un,n=new Lr,r=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new oe},normalMatrix:{value:new qt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Xo,t)}rotateY(t){return this.rotateOnAxis(Zo,t)}rotateZ(t){return this.rotateOnAxis($o,t)}translateOnAxis(t,e){return Wo.copy(t).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xo,t)}translateY(t){return this.translateOnAxis(Zo,t)}translateZ(t){return this.translateOnAxis($o,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Vi,Sr,this.up):gn.lookAt(Sr,Vi,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),Li.setFromRotationMatrix(gn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qo),hi.child=t,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(G2),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qo),hi.child=t,this.dispatchEvent(hi),hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,t,k2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,H2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,L=c.length;l<L;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),L=a(t.images),h=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),L.length>0&&(n.images=L),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const c=[];for(const l in o){const L=o[l];delete L.metadata,c.push(L)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Se.DEFAULT_UP=new C(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new C,_n=new C,Us=new C,vn=new C,ui=new C,di=new C,Yo=new C,Ns=new C,Fs=new C,Os=new C,Bs=new ge,zs=new ge,ks=new ge;class Xe{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),je.subVectors(t,e),r.cross(je);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){je.subVectors(r,e),_n.subVectors(n,e),Us.subVectors(t,e);const a=je.dot(je),o=je.dot(_n),c=je.dot(Us),l=_n.dot(_n),L=_n.dot(Us),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,d=(l*c-o*L)*u,m=(a*L-o*c)*u;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,vn.x),c.addScaledVector(a,vn.y),c.addScaledVector(o,vn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Bs.setScalar(0),zs.setScalar(0),ks.setScalar(0),Bs.fromBufferAttribute(t,e),zs.fromBufferAttribute(t,n),ks.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Bs,s.x),a.addScaledVector(zs,s.y),a.addScaledVector(ks,s.z),a}static isFrontFacing(t,e,n,r){return je.subVectors(n,e),_n.subVectors(t,e),je.cross(_n).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),je.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;ui.subVectors(r,n),di.subVectors(s,n),Ns.subVectors(t,n);const c=ui.dot(Ns),l=di.dot(Ns);if(c<=0&&l<=0)return e.copy(n);Fs.subVectors(t,r);const L=ui.dot(Fs),h=di.dot(Fs);if(L>=0&&h<=L)return e.copy(r);const u=c*h-L*l;if(u<=0&&c>=0&&L<=0)return a=c/(c-L),e.copy(n).addScaledVector(ui,a);Os.subVectors(t,s);const d=ui.dot(Os),m=di.dot(Os);if(m>=0&&d<=m)return e.copy(s);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(di,o);const f=L*m-d*h;if(f<=0&&h-L>=0&&d-m>=0)return Yo.subVectors(s,r),o=(h-L)/(h-L+(d-m)),e.copy(r).addScaledVector(Yo,o);const p=1/(f+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(ui,a).addScaledVector(di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const o1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Hs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ne.workingColorSpace){if(t=w2(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Hs(a,s,t+1/3),this.g=Hs(a,s,t),this.b=Hs(a,s,t-1/3)}return ne.toWorkingColorSpace(this,r),this}setStyle(t,e=an){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){const n=o1[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return ne.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Ce(Ie.r*255,0,255))*65536+Math.round(Ce(Ie.g*255,0,255))*256+Math.round(Ce(Ie.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,r=Ie.g,s=Ie.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const L=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=L<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=L,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=an){ne.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,r=Ie.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(Er);const n=Ss(Cn.h,Er.h,e),r=Ss(Cn.s,Er.s,e),s=Ss(Cn.l,Er.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Zt;Zt.NAMES=o1;let V2=0;class ni extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V2++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=wi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=ca,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ln extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new C,wr=new lt;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xa&&(t.usage=this.usage),t}}class c1 extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class l1 extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let W2=0;const $e=new oe,Gs=new Se,fi=new C,We=new hr,Wi=new hr,Te=new C;class be extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W2++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r1(t)?l1:c1)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Gs.lookAt(t),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];We.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(We.min,Wi.min),We.expandByPoint(Te),Te.addVectors(We.max,Wi.max),We.expandByPoint(Te)):(We.expandByPoint(Wi.min),We.expandByPoint(Wi.max))}We.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Te.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Te));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,L=o.count;l<L;l++)Te.fromBufferAttribute(o,l),c&&(fi.fromBufferAttribute(t,l),Te.add(fi)),r=Math.max(r,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new C,c[P]=new C;const l=new C,L=new C,h=new C,u=new lt,d=new lt,m=new lt,_=new C,f=new C;function p(P,K,g){l.fromBufferAttribute(n,P),L.fromBufferAttribute(n,K),h.fromBufferAttribute(n,g),u.fromBufferAttribute(s,P),d.fromBufferAttribute(s,K),m.fromBufferAttribute(s,g),L.sub(l),h.sub(l),d.sub(u),m.sub(u);const M=1/(d.x*m.y-m.x*d.y);isFinite(M)&&(_.copy(L).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(M),f.copy(h).multiplyScalar(d.x).addScaledVector(L,-m.x).multiplyScalar(M),o[P].add(_),o[K].add(_),o[g].add(_),c[P].add(f),c[K].add(f),c[g].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,K=b.length;P<K;++P){const g=b[P],M=g.start,k=g.count;for(let A=M,z=M+k;A<z;A+=3)p(t.getX(A+0),t.getX(A+1),t.getX(A+2))}const x=new C,S=new C,D=new C,R=new C;function T(P){D.fromBufferAttribute(r,P),R.copy(D);const K=o[P];x.copy(K),x.sub(D.multiplyScalar(D.dot(K))).normalize(),S.crossVectors(R,K);const M=S.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,M)}for(let P=0,K=b.length;P<K;++P){const g=b[P],M=g.start,k=g.count;for(let A=M,z=M+k;A<z;A+=3)T(t.getX(A+0)),T(t.getX(A+1)),T(t.getX(A+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const r=new C,s=new C,a=new C,o=new C,c=new C,l=new C,L=new C,h=new C;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),_=t.getX(u+1),f=t.getX(u+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,f),L.subVectors(a,s),h.subVectors(r,s),L.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),o.add(L),c.add(L),l.add(L),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),L.subVectors(a,s),h.subVectors(r,s),L.cross(h),n.setXYZ(u+0,L.x,L.y,L.z),n.setXYZ(u+1,L.x,L.y,L.z),n.setXYZ(u+2,L.x,L.y,L.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){const l=o.array,L=o.itemSize,h=o.normalized,u=new l.constructor(c.length*L);let d=0,m=0;for(let _=0,f=c.length;_<f;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*L;for(let p=0;p<L;p++)u[m++]=l[d++]}return new en(u,L,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let L=0,h=l.length;L<h;L++){const u=l[L],d=t(u,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],L=[];for(let h=0,u=l.length;h<u;h++){const d=l[h];L.push(d.toJSON(t.data))}L.length>0&&(r[c]=L,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const L=r[l];this.setAttribute(l,L.clone(e))}const s=t.morphAttributes;for(const l in s){const L=[],h=s[l];for(let u=0,d=h.length;u<d;u++)L.push(h[u].clone(e));this.morphAttributes[l]=L}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,L=a.length;l<L;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ko=new oe,Vn=new lo,br=new fs,Jo=new C,Tr=new C,Ar=new C,Rr=new C,Vs=new C,Cr=new C,jo=new C,Pr=new C;class kt extends Se{constructor(t=new be,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Cr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const L=o[c],h=s[c];L!==0&&(Vs.fromBufferAttribute(h,t),a?Cr.addScaledVector(Vs,L):Cr.addScaledVector(Vs.sub(e),L))}e.add(Cr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),Vn.copy(t.ray).recast(t.near),!(br.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(br,Jo)===null||Vn.origin.distanceToSquared(Jo)>(t.far-t.near)**2))&&(Ko.copy(s).invert(),Vn.copy(t.ray).applyMatrix4(Ko),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,L=s.attributes.uv1,h=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const f=u[m],p=a[f.materialIndex],b=Math.max(f.start,d.start),x=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));for(let S=b,D=x;S<D;S+=3){const R=o.getX(S),T=o.getX(S+1),P=o.getX(S+2);r=Ir(this,p,t,n,l,L,h,R,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let f=m,p=_;f<p;f+=3){const b=o.getX(f),x=o.getX(f+1),S=o.getX(f+2);r=Ir(this,a,t,n,l,L,h,b,x,S),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const f=u[m],p=a[f.materialIndex],b=Math.max(f.start,d.start),x=Math.min(c.count,Math.min(f.start+f.count,d.start+d.count));for(let S=b,D=x;S<D;S+=3){const R=S,T=S+1,P=S+2;r=Ir(this,p,t,n,l,L,h,R,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let f=m,p=_;f<p;f+=3){const b=f,x=f+1,S=f+2;r=Ir(this,a,t,n,l,L,h,b,x,S),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function X2(i,t,e,n,r,s,a,o){let c;if(t.side===ke?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===On,o),c===null)return null;Pr.copy(o),Pr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Pr);return l<e.near||l>e.far?null:{distance:l,point:Pr.clone(),object:i}}function Ir(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Tr),i.getVertexPosition(c,Ar),i.getVertexPosition(l,Rr);const L=X2(i,t,e,n,Tr,Ar,Rr,jo);if(L){const h=new C;Xe.getBarycoord(jo,Tr,Ar,Rr,h),r&&(L.uv=Xe.getInterpolatedAttribute(r,o,c,l,h,new lt)),s&&(L.uv1=Xe.getInterpolatedAttribute(s,o,c,l,h,new lt)),a&&(L.normal=Xe.getInterpolatedAttribute(a,o,c,l,h,new C),L.normal.dot(n.direction)>0&&L.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new C,materialIndex:0};Xe.getNormal(Tr,Ar,Rr,u.normal),L.face=u,L.barycoord=h}return L}class he extends be{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],L=[],h=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,a,s,0),m("z","y","x",1,-1,n,e,-t,a,s,1),m("x","z","y",1,1,t,n,e,r,a,2),m("x","z","y",1,-1,t,n,-e,r,a,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(L,3)),this.setAttribute("uv",new ie(h,2));function m(_,f,p,b,x,S,D,R,T,P,K){const g=S/T,M=D/P,k=S/2,A=D/2,z=R/2,X=T+1,U=P+1;let Y=0,I=0;const et=new C;for(let ot=0;ot<U;ot++){const ct=ot*M-A;for(let _t=0;_t<X;_t++){const Wt=_t*g-k;et[_]=Wt*b,et[f]=ct*x,et[p]=z,l.push(et.x,et.y,et.z),et[_]=0,et[f]=0,et[p]=R>0?1:-1,L.push(et.x,et.y,et.z),h.push(_t/T),h.push(1-ot/P),Y+=1}}for(let ot=0;ot<P;ot++)for(let ct=0;ct<T;ct++){const _t=u+ct+X*ot,Wt=u+ct+X*(ot+1),J=u+(ct+1)+X*(ot+1),O=u+(ct+1)+X*ot;c.push(_t,Wt,O),c.push(Wt,J,O),I+=6}o.addGroup(d,I,K),d+=I,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Ui(i[e]);for(const r in n)t[r]=n[r]}return t}function Z2(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function L1(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const $2={clone:Ui,merge:Ue};var q2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q2,this.fragmentShader=Y2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=Z2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class h1 extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new C,Qo=new lt,tc=new lt;class Be extends h1{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,Qo,tc),e.subVectors(tc,Qo)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ts*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const pi=-90,mi=1;class K2 extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Be(pi,mi,t,e);r.layers=this.layers,this.add(r);const s=new Be(pi,mi,t,e);s.layers=this.layers,this.add(s);const a=new Be(pi,mi,t,e);a.layers=this.layers,this.add(a);const o=new Be(pi,mi,t,e);o.layers=this.layers,this.add(o);const c=new Be(pi,mi,t,e);c.layers=this.layers,this.add(c);const l=new Be(pi,mi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===os)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,L]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,L),t.setRenderTarget(h,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class u1 extends Ne{constructor(t,e,n,r,s,a,o,c,l,L){t=t!==void 0?t:[],e=e!==void 0?e:Ci,super(t,e,n,r,s,a,o,c,l,L),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class J2 extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new u1(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new he(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Nn});s.uniforms.tEquirect.value=e;const a=new kt(r,s),o=e.minFilter;return e.minFilter===jn&&(e.minFilter=Qe),new K2(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Ws=new C,j2=new C,Q2=new qt;class $n{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ws.subVectors(n,e).cross(j2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ws),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Q2.getNormalMatrix(t),r=this.coplanarPoint(Ws).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new fs,Dr=new C;class ho{constructor(t=new $n,e=new $n,n=new $n,r=new $n,s=new $n,a=new $n){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],L=r[5],h=r[6],u=r[7],d=r[8],m=r[9],_=r[10],f=r[11],p=r[12],b=r[13],x=r[14],S=r[15];if(n[0].setComponents(c-s,u-l,f-d,S-p).normalize(),n[1].setComponents(c+s,u+l,f+d,S+p).normalize(),n[2].setComponents(c+a,u+L,f+m,S+b).normalize(),n[3].setComponents(c-a,u-L,f-m,S-b).normalize(),n[4].setComponents(c-o,u-h,f-_,S-x).normalize(),e===yn)n[5].setComponents(c+o,u+h,f+_,S+x).normalize();else if(e===os)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Dr.x=r.normal.x>0?t.max.x:t.min.x,Dr.y=r.normal.y>0?t.max.y:t.min.y,Dr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function d1(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function tl(i){const t=new WeakMap;function e(o,c){const l=o.array,L=o.usage,h=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,L),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const L=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,L);else{h.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<h.length;d++){const m=h[u],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,h[u]=_)}h.length=u+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];i.bufferSubData(l,_.start*L.BYTES_PER_ELEMENT,L,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const L=t.get(o);(!L||L.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Fi extends be{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,L=c+1,h=t/o,u=e/c,d=[],m=[],_=[],f=[];for(let p=0;p<L;p++){const b=p*u-a;for(let x=0;x<l;x++){const S=x*h-s;m.push(S,-b,0),_.push(0,0,1),f.push(x/o),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const x=b+l*p,S=b+l*(p+1),D=b+1+l*(p+1),R=b+1+l*p;d.push(x,S,R),d.push(S,D,R)}this.setIndex(d),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.width,t.height,t.widthSegments,t.heightSegments)}}var el=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,il=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,al=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ol=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ll=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ll=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ul=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ml=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_l=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ml=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,El=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Al=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Il=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ul=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ol=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$l=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ql=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ql=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,C0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,B0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_L=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ML=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:el,alphahash_pars_fragment:nl,alphamap_fragment:il,alphamap_pars_fragment:rl,alphatest_fragment:sl,alphatest_pars_fragment:al,aomap_fragment:ol,aomap_pars_fragment:cl,batching_pars_vertex:ll,batching_vertex:Ll,begin_vertex:hl,beginnormal_vertex:ul,bsdfs:dl,iridescence_fragment:fl,bumpmap_pars_fragment:pl,clipping_planes_fragment:ml,clipping_planes_pars_fragment:gl,clipping_planes_pars_vertex:_l,clipping_planes_vertex:vl,color_fragment:xl,color_pars_fragment:Ml,color_pars_vertex:yl,color_vertex:Sl,common:El,cube_uv_reflection_fragment:wl,defaultnormal_vertex:bl,displacementmap_pars_vertex:Tl,displacementmap_vertex:Al,emissivemap_fragment:Rl,emissivemap_pars_fragment:Cl,colorspace_fragment:Pl,colorspace_pars_fragment:Il,envmap_fragment:Dl,envmap_common_pars_fragment:Ul,envmap_pars_fragment:Nl,envmap_pars_vertex:Fl,envmap_physical_pars_fragment:$l,envmap_vertex:Ol,fog_vertex:Bl,fog_pars_vertex:zl,fog_fragment:kl,fog_pars_fragment:Hl,gradientmap_pars_fragment:Gl,lightmap_pars_fragment:Vl,lights_lambert_fragment:Wl,lights_lambert_pars_fragment:Xl,lights_pars_begin:Zl,lights_toon_fragment:ql,lights_toon_pars_fragment:Yl,lights_phong_fragment:Kl,lights_phong_pars_fragment:Jl,lights_physical_fragment:jl,lights_physical_pars_fragment:Ql,lights_fragment_begin:t0,lights_fragment_maps:e0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:a0,map_fragment:o0,map_pars_fragment:c0,map_particle_fragment:l0,map_particle_pars_fragment:L0,metalnessmap_fragment:h0,metalnessmap_pars_fragment:u0,morphinstance_vertex:d0,morphcolor_vertex:f0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:_0,normal_fragment_maps:v0,normal_pars_fragment:x0,normal_pars_vertex:M0,normal_vertex:y0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:T0,opaque_fragment:A0,packing:R0,premultiplied_alpha_fragment:C0,project_vertex:P0,dithering_fragment:I0,dithering_pars_fragment:D0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:N0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:O0,shadowmap_vertex:B0,shadowmask_pars_fragment:z0,skinbase_vertex:k0,skinning_pars_vertex:H0,skinning_vertex:G0,skinnormal_vertex:V0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:Z0,tonemapping_pars_fragment:$0,transmission_fragment:q0,transmission_pars_fragment:Y0,uv_pars_fragment:K0,uv_pars_vertex:J0,uv_vertex:j0,worldpos_vertex:Q0,background_vert:tL,background_frag:eL,backgroundCube_vert:nL,backgroundCube_frag:iL,cube_vert:rL,cube_frag:sL,depth_vert:aL,depth_frag:oL,distanceRGBA_vert:cL,distanceRGBA_frag:lL,equirect_vert:LL,equirect_frag:hL,linedashed_vert:uL,linedashed_frag:dL,meshbasic_vert:fL,meshbasic_frag:pL,meshlambert_vert:mL,meshlambert_frag:gL,meshmatcap_vert:_L,meshmatcap_frag:vL,meshnormal_vert:xL,meshnormal_frag:ML,meshphong_vert:yL,meshphong_frag:SL,meshphysical_vert:EL,meshphysical_frag:wL,meshtoon_vert:bL,meshtoon_frag:TL,points_vert:AL,points_frag:RL,shadow_vert:CL,shadow_frag:PL,sprite_vert:IL,sprite_frag:DL},Mt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},on={basic:{uniforms:Ue([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ue([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ue([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ue([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ue([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ue([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ue([Mt.points,Mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ue([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ue([Mt.common,Mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ue([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ue([Mt.sprite,Mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ue([Mt.common,Mt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ue([Mt.lights,Mt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};on.physical={uniforms:Ue([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Ur={r:0,b:0,g:0},Xn=new un,UL=new oe;function NL(i,t,e,n,r,s,a){const o=new Zt(0);let c=s===!0?0:1,l,L,h=null,u=0,d=null;function m(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function _(b){let x=!1;const S=m(b);S===null?p(o,c):S&&S.isColor&&(p(S,1),x=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(b,x){const S=m(x);S&&(S.isCubeTexture||S.mapping===us)?(L===void 0&&(L=new kt(new he(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ui(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),L.geometry.deleteAttribute("normal"),L.geometry.deleteAttribute("uv"),L.onBeforeRender=function(D,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(L.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(L)),Xn.copy(x.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),L.material.uniforms.envMap.value=S,L.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,L.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,L.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,L.material.uniforms.backgroundRotation.value.setFromMatrix4(UL.makeRotationFromEuler(Xn)),L.material.toneMapped=ne.getTransfer(S.colorSpace)!==le,(h!==S||u!==S.version||d!==i.toneMapping)&&(L.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),L.layers.enableAll(),b.unshift(L,L.geometry,L.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new kt(new Fi(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ui(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ne.getTransfer(S.colorSpace)!==le,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,x){b.getRGB(Ur,L1(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:_,addToRenderList:f}}function FL(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(g,M,k,A,z){let X=!1;const U=h(A,k,M);s!==U&&(s=U,l(s.object)),X=d(g,A,k,z),X&&m(g,A,k,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(g,M,k,A),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(g){return i.bindVertexArray(g)}function L(g){return i.deleteVertexArray(g)}function h(g,M,k){const A=k.wireframe===!0;let z=n[g.id];z===void 0&&(z={},n[g.id]=z);let X=z[M.id];X===void 0&&(X={},z[M.id]=X);let U=X[A];return U===void 0&&(U=u(c()),X[A]=U),U}function u(g){const M=[],k=[],A=[];for(let z=0;z<e;z++)M[z]=0,k[z]=0,A[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:k,attributeDivisors:A,object:g,attributes:{},index:null}}function d(g,M,k,A){const z=s.attributes,X=M.attributes;let U=0;const Y=k.getAttributes();for(const I in Y)if(Y[I].location>=0){const ot=z[I];let ct=X[I];if(ct===void 0&&(I==="instanceMatrix"&&g.instanceMatrix&&(ct=g.instanceMatrix),I==="instanceColor"&&g.instanceColor&&(ct=g.instanceColor)),ot===void 0||ot.attribute!==ct||ct&&ot.data!==ct.data)return!0;U++}return s.attributesNum!==U||s.index!==A}function m(g,M,k,A){const z={},X=M.attributes;let U=0;const Y=k.getAttributes();for(const I in Y)if(Y[I].location>=0){let ot=X[I];ot===void 0&&(I==="instanceMatrix"&&g.instanceMatrix&&(ot=g.instanceMatrix),I==="instanceColor"&&g.instanceColor&&(ot=g.instanceColor));const ct={};ct.attribute=ot,ot&&ot.data&&(ct.data=ot.data),z[I]=ct,U++}s.attributes=z,s.attributesNum=U,s.index=A}function _(){const g=s.newAttributes;for(let M=0,k=g.length;M<k;M++)g[M]=0}function f(g){p(g,0)}function p(g,M){const k=s.newAttributes,A=s.enabledAttributes,z=s.attributeDivisors;k[g]=1,A[g]===0&&(i.enableVertexAttribArray(g),A[g]=1),z[g]!==M&&(i.vertexAttribDivisor(g,M),z[g]=M)}function b(){const g=s.newAttributes,M=s.enabledAttributes;for(let k=0,A=M.length;k<A;k++)M[k]!==g[k]&&(i.disableVertexAttribArray(k),M[k]=0)}function x(g,M,k,A,z,X,U){U===!0?i.vertexAttribIPointer(g,M,k,z,X):i.vertexAttribPointer(g,M,k,A,z,X)}function S(g,M,k,A){_();const z=A.attributes,X=k.getAttributes(),U=M.defaultAttributeValues;for(const Y in X){const I=X[Y];if(I.location>=0){let et=z[Y];if(et===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(et=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(et=g.instanceColor)),et!==void 0){const ot=et.normalized,ct=et.itemSize,_t=t.get(et);if(_t===void 0)continue;const Wt=_t.buffer,J=_t.type,O=_t.bytesPerElement,tt=J===i.INT||J===i.UNSIGNED_INT||et.gpuType===no;if(et.isInterleavedBufferAttribute){const it=et.data,dt=it.stride,vt=et.offset;if(it.isInstancedInterleavedBuffer){for(let Ot=0;Ot<I.locationSize;Ot++)p(I.location+Ot,it.meshPerAttribute);g.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ot=0;Ot<I.locationSize;Ot++)f(I.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Ot=0;Ot<I.locationSize;Ot++)x(I.location+Ot,ct/I.locationSize,J,ot,dt*O,(vt+ct/I.locationSize*Ot)*O,tt)}else{if(et.isInstancedBufferAttribute){for(let it=0;it<I.locationSize;it++)p(I.location+it,et.meshPerAttribute);g.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let it=0;it<I.locationSize;it++)f(I.location+it);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let it=0;it<I.locationSize;it++)x(I.location+it,ct/I.locationSize,J,ot,ct*O,ct/I.locationSize*it*O,tt)}}else if(U!==void 0){const ot=U[Y];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(I.location,ot);break;case 3:i.vertexAttrib3fv(I.location,ot);break;case 4:i.vertexAttrib4fv(I.location,ot);break;default:i.vertexAttrib1fv(I.location,ot)}}}}b()}function D(){P();for(const g in n){const M=n[g];for(const k in M){const A=M[k];for(const z in A)L(A[z].object),delete A[z];delete M[k]}delete n[g]}}function R(g){if(n[g.id]===void 0)return;const M=n[g.id];for(const k in M){const A=M[k];for(const z in A)L(A[z].object),delete A[z];delete M[k]}delete n[g.id]}function T(g){for(const M in n){const k=n[M];if(k[g.id]===void 0)continue;const A=k[g.id];for(const z in A)L(A[z].object),delete A[z];delete k[g.id]}}function P(){K(),a=!0,s!==r&&(s=r,l(s.object))}function K(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:K,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:f,disableUnusedAttributes:b}}function OL(i,t,e){let n;function r(l){n=l}function s(l,L){i.drawArrays(n,l,L),e.update(L,n,1)}function a(l,L,h){h!==0&&(i.drawArraysInstanced(n,l,L,h),e.update(L,n,h))}function o(l,L,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,L,0,h);let d=0;for(let m=0;m<h;m++)d+=L[m];e.update(d,n,1)}function c(l,L,h,u){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)a(l[m],L[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,L,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=L[_];for(let _=0;_<u.length;_++)e.update(m,n,u[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function BL(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==tn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===lr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==En&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Mn&&!P)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const L=c(l);L!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",L,"instead."),l=L);const h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:D,maxSamples:R}}function zL(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new $n,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,L(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){e=L(h,u,0)},this.setState=function(h,u,d){const m=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!f)s?L(null):l();else{const b=s?0:n,x=b*4;let S=p.clippingState||null;c.value=S,S=L(m,u,x,d);for(let D=0;D!==x;++D)S[D]=e[D];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function L(h,u,d,m){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=c.value,m!==!0||f===null){const p=d+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,S=d;x!==_;++x,S+=4)a.copy(h[x]).applyMatrix4(b,o),a.normal.toArray(f,S),f[S+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function kL(i){let t=new WeakMap;function e(a,o){return o===ma?a.mapping=Ci:o===ga&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ma||o===ga)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new J2(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class f1 extends h1{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,L=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=L*this.view.offsetY,c=o-L*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Si=4,ec=[.125,.215,.35,.446,.526,.582],Kn=20,Xs=new f1,nc=new Zt;let Zs=null,$s=0,qs=0,Ys=!1;const qn=(1+Math.sqrt(5))/2,gi=1/qn,ic=[new C(-qn,gi,0),new C(qn,gi,0),new C(-gi,0,qn),new C(gi,0,qn),new C(0,qn,-gi),new C(0,qn,gi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class rc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Zs=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel(),Ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zs,$s,qs),this._renderer.xr.enabled=Ys,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zs=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel(),Ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:lr,format:tn,colorSpace:zn,depthBuffer:!1},r=sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HL(s)),this._blurMaterial=GL(s,t,e)}return r}_compileMaterial(t){const e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,Xs)}_sceneToCubeUV(t,e,n,r){const o=new Be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],L=this._renderer,h=L.autoClear,u=L.toneMapping;L.getClearColor(nc),L.toneMapping=Fn,L.autoClear=!1;const d=new Ln({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),m=new kt(new he,d);let _=!1;const f=t.background;f?f.isColor&&(d.color.copy(f),t.background=null,_=!0):(d.color.copy(nc),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):b===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;Nr(r,b*x,p>2?x:0,x,x),L.setRenderTarget(r),_&&L.render(m,o),L.render(t,o)}m.geometry.dispose(),m.material.dispose(),L.toneMapping=u,L.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ci||t.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Xs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ic[(r-s-1)%ic.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const L=3,h=new kt(this._lodPlanes[r],l),u=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Kn-1),_=s/m,f=isFinite(s)?1+Math.floor(L*_):Kn;f>Kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Kn}`);const p=[];let b=0;for(let T=0;T<Kn;++T){const P=T/_,K=Math.exp(-P*P/2);p.push(K),T===0?b+=K:T<f&&(b+=2*K)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=m,u.mipInt.value=x-n;const S=this._sizeLods[r],D=3*S*(r>x-Si?r-x+Si:0),R=4*(this._cubeSize-S);Nr(e,D,R,3*S,2*S),c.setRenderTarget(e),c.render(h,Xs)}}function HL(i){const t=[],e=[],n=[];let r=i;const s=i-Si+1+ec.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Si?c=ec[a-i+Si-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),L=-l,h=1+l,u=[L,L,h,L,h,h,L,L,h,h,L,h],d=6,m=6,_=3,f=2,p=1,b=new Float32Array(_*m*d),x=new Float32Array(f*m*d),S=new Float32Array(p*m*d);for(let R=0;R<d;R++){const T=R%3*2/3-1,P=R>2?0:-1,K=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];b.set(K,_*m*R),x.set(u,f*m*R);const g=[R,R,R,R,R,R];S.set(g,p*m*R)}const D=new be;D.setAttribute("position",new en(b,_)),D.setAttribute("uv",new en(x,f)),D.setAttribute("faceIndex",new en(S,p)),t.push(D),r>Si&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sc(i,t,e){const n=new ti(i,t,e);return n.texture.mapping=us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function GL(i,t,e){const n=new Float32Array(Kn),r=new C(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ac(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function oc(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function uo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VL(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ma||c===ga,L=c===Ci||c===Pi;if(l||L){let h=t.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new rc(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||L&&d&&r(d)?(e===null&&(e=new rc(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let L=0;L<l;L++)o[L]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function WL(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&es("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function XL(i,t,e,n){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}u.removeEventListener("dispose",a),delete r[u.id];const d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function c(h){const u=h.attributes;for(const m in u)t.update(u[m],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const m in d){const _=d[m];for(let f=0,p=_.length;f<p;f++)t.update(_[f],i.ARRAY_BUFFER)}}function l(h){const u=[],d=h.index,m=h.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let x=0,S=b.length;x<S;x+=3){const D=b[x+0],R=b[x+1],T=b[x+2];u.push(D,R,R,T,T,D)}}else if(m!==void 0){const b=m.array;_=m.version;for(let x=0,S=b.length/3-1;x<S;x+=3){const D=x+0,R=x+1,T=x+2;u.push(D,R,R,T,T,D)}}else return;const f=new(r1(u)?l1:c1)(u,1);f.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,f)}function L(h){const u=s.get(h);if(u){const d=h.index;d!==null&&u.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:L}}function ZL(i,t,e){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,s,u*a),e.update(d,n,1)}function l(u,d,m){m!==0&&(i.drawElementsInstanced(n,d,s,u*a,m),e.update(d,n,m))}function L(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,m);let f=0;for(let p=0;p<m;p++)f+=d[p];e.update(f,n,1)}function h(u,d,m,_){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u.length;p++)l(u[p]/a,d[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,d,0,s,u,0,_,0,m);let p=0;for(let b=0;b<m;b++)p+=d[b];for(let b=0;b<_.length;b++)e.update(p,n,_[b])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=L,this.renderMultiDrawInstances=h}function $L(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function qL(i,t,e){const n=new WeakMap,r=new ge;function s(a,o,c){const l=a.morphTargetInfluences,L=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=L!==void 0?L.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let g=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",g)};var d=g;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),f===!0&&(S=3);let D=o.attributes.position.count*S,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const T=new Float32Array(D*R*4*h),P=new a1(T,D,R,h);P.type=Mn,P.needsUpdate=!0;const K=S*4;for(let M=0;M<h;M++){const k=p[M],A=b[M],z=x[M],X=D*R*4*M;for(let U=0;U<k.count;U++){const Y=U*K;m===!0&&(r.fromBufferAttribute(k,U),T[X+Y+0]=r.x,T[X+Y+1]=r.y,T[X+Y+2]=r.z,T[X+Y+3]=0),_===!0&&(r.fromBufferAttribute(A,U),T[X+Y+4]=r.x,T[X+Y+5]=r.y,T[X+Y+6]=r.z,T[X+Y+7]=0),f===!0&&(r.fromBufferAttribute(z,U),T[X+Y+8]=r.x,T[X+Y+9]=r.y,T[X+Y+10]=r.z,T[X+Y+11]=z.itemSize===4?r.w:1)}}u={count:h,texture:P,size:new lt(D,R)},n.set(o,u),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let f=0;f<l.length;f++)m+=l[f];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function YL(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,L=c.geometry,h=t.get(c,L);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class p1 extends Ne{constructor(t,e,n,r,s,a,o,c,l,L=bi){if(L!==bi&&L!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&L===bi&&(n=Qn),n===void 0&&L===Di&&(n=Ii),super(null,r,s,a,o,c,L,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const m1=new Ne,cc=new p1(1,1),g1=new a1,_1=new N2,v1=new u1,lc=[],Lc=[],hc=new Float32Array(16),uc=new Float32Array(9),dc=new Float32Array(4);function Oi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=lc[r];if(s===void 0&&(s=new Float32Array(r),lc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ps(i,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function KL(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function JL(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function jL(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function QL(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function th(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),we(e,n)}}function eh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;uc.set(n),i.uniformMatrix3fv(this.addr,!1,uc),we(e,n)}}function nh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),we(e,n)}}function ih(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function sh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function ah(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function oh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ch(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function lh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function Lh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function hh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(cc.compareFunction=i1,s=cc):s=m1,e.setTexture2D(t||s,r)}function uh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||_1,r)}function dh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||v1,r)}function fh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||g1,r)}function ph(i){switch(i){case 5126:return KL;case 35664:return JL;case 35665:return jL;case 35666:return QL;case 35674:return th;case 35675:return eh;case 35676:return nh;case 5124:case 35670:return ih;case 35667:case 35671:return rh;case 35668:case 35672:return sh;case 35669:case 35673:return ah;case 5125:return oh;case 36294:return ch;case 36295:return lh;case 36296:return Lh;case 35678:case 36198:case 36298:case 36306:case 35682:return hh;case 35679:case 36299:case 36307:return uh;case 35680:case 36300:case 36308:case 36293:return dh;case 36289:case 36303:case 36311:case 36292:return fh}}function mh(i,t){i.uniform1fv(this.addr,t)}function gh(i,t){const e=Oi(t,this.size,2);i.uniform2fv(this.addr,e)}function _h(i,t){const e=Oi(t,this.size,3);i.uniform3fv(this.addr,e)}function vh(i,t){const e=Oi(t,this.size,4);i.uniform4fv(this.addr,e)}function xh(i,t){const e=Oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mh(i,t){const e=Oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yh(i,t){const e=Oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sh(i,t){i.uniform1iv(this.addr,t)}function Eh(i,t){i.uniform2iv(this.addr,t)}function wh(i,t){i.uniform3iv(this.addr,t)}function bh(i,t){i.uniform4iv(this.addr,t)}function Th(i,t){i.uniform1uiv(this.addr,t)}function Ah(i,t){i.uniform2uiv(this.addr,t)}function Rh(i,t){i.uniform3uiv(this.addr,t)}function Ch(i,t){i.uniform4uiv(this.addr,t)}function Ph(i,t,e){const n=this.cache,r=t.length,s=ps(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||m1,s[a])}function Ih(i,t,e){const n=this.cache,r=t.length,s=ps(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||_1,s[a])}function Dh(i,t,e){const n=this.cache,r=t.length,s=ps(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||v1,s[a])}function Uh(i,t,e){const n=this.cache,r=t.length,s=ps(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||g1,s[a])}function Nh(i){switch(i){case 5126:return mh;case 35664:return gh;case 35665:return _h;case 35666:return vh;case 35674:return xh;case 35675:return Mh;case 35676:return yh;case 5124:case 35670:return Sh;case 35667:case 35671:return Eh;case 35668:case 35672:return wh;case 35669:case 35673:return bh;case 5125:return Th;case 36294:return Ah;case 36295:return Rh;case 36296:return Ch;case 35678:case 36198:case 36298:case 36306:case 35682:return Ph;case 35679:case 36299:case 36307:return Ih;case 35680:case 36300:case 36308:case 36293:return Dh;case 36289:case 36303:case 36311:case 36292:return Uh}}class Fh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ph(e.type)}}class Oh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nh(e.type)}}class Bh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ks=/(\w+)(\])?(\[|\.)?/g;function fc(i,t){i.seq.push(t),i.map[t.id]=t}function zh(i,t,e){const n=i.name,r=n.length;for(Ks.lastIndex=0;;){const s=Ks.exec(n),a=Ks.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){fc(e,l===void 0?new Fh(o,i,t):new Oh(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Bh(o),fc(e,h)),e=h}}}class ns{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);zh(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function pc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const kh=37297;let Hh=0;function Gh(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Vh(i){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(i);let n;switch(t===e?n="":t===as&&e===ss?n="LinearDisplayP3ToLinearSRGB":t===ss&&e===as&&(n="LinearSRGBToLinearDisplayP3"),i){case zn:case ds:return[n,"LinearTransferOETF"];case an:case co:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Gh(i.getShaderSource(t),a)}else return r}function Wh(i,t){const e=Vh(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Xh(i,t){let e;switch(t){case o2:e="Linear";break;case c2:e="Reinhard";break;case l2:e="Cineon";break;case L2:e="ACESFilmic";break;case u2:e="AgX";break;case d2:e="Neutral";break;case h2:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fr=new C;function Zh(){ne.getLuminanceCoefficients(Fr);const i=Fr.x.toFixed(4),t=Fr.y.toFixed(4),e=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $h(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function qh(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yh(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ji(i){return i!==""}function gc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kh=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(i){return i.replace(Kh,jh)}const Jh=new Map;function jh(i,t){let e=$t[t];if(e===void 0){const n=Jh.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $a(e)}const Qh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(i){return i.replace(Qh,tu)}function tu(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function eu(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function nu(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ci:case Pi:t="ENVMAP_TYPE_CUBE";break;case us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iu(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function ru(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wc:t="ENVMAP_BLENDING_MULTIPLY";break;case s2:t="ENVMAP_BLENDING_MIX";break;case a2:t="ENVMAP_BLENDING_ADD";break}return t}function su(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function au(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=eu(e),l=nu(e),L=iu(e),h=ru(e),u=su(e),d=$h(e),m=qh(s),_=r.createProgram();let f,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ji).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ji).join(`
`),p.length>0&&(p+=`
`)):(f=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+L:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),p=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+L:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Fn?Xh("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Wh("linearToOutputTexel",e.outputColorSpace),Zh(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),a=$a(a),a=gc(a,e),a=_c(a,e),o=$a(o),o=gc(o,e),o=_c(o,e),a=vc(a),o=vc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=b+f+a,S=b+p+o,D=pc(r,r.VERTEX_SHADER,x),R=pc(r,r.FRAGMENT_SHADER,S);r.attachShader(_,D),r.attachShader(_,R),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(M){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),A=r.getShaderInfoLog(D).trim(),z=r.getShaderInfoLog(R).trim();let X=!0,U=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,D,R);else{const Y=mc(r,D,"vertex"),I=mc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+k+`
`+Y+`
`+I)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(A===""||z==="")&&(U=!1);U&&(M.diagnostics={runnable:X,programLog:k,vertexShader:{log:A,prefix:f},fragmentShader:{log:z,prefix:p}})}r.deleteShader(D),r.deleteShader(R),P=new ns(r,_),K=Yh(r,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let K;this.getAttributes=function(){return K===void 0&&T(this),K};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(_,kh)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hh++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=R,this}let ou=0;class cu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lu(t),e.set(t,n)),n}}class lu{constructor(t){this.id=ou++,this.code=t,this.usedTimes=0}}function Lu(i,t,e,n,r,s,a){const o=new Lo,c=new cu,l=new Set,L=[],h=r.logarithmicDepthBuffer,u=r.reverseDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,M,k,A,z){const X=A.fog,U=z.geometry,Y=g.isMeshStandardMaterial?A.environment:null,I=(g.isMeshStandardMaterial?e:t).get(g.envMap||Y),et=I&&I.mapping===us?I.image.height:null,ot=_[g.type];g.precision!==null&&(m=r.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const ct=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,_t=ct!==void 0?ct.length:0;let Wt=0;U.morphAttributes.position!==void 0&&(Wt=1),U.morphAttributes.normal!==void 0&&(Wt=2),U.morphAttributes.color!==void 0&&(Wt=3);let J,O,tt,it;if(ot){const Oe=on[ot];J=Oe.vertexShader,O=Oe.fragmentShader}else J=g.vertexShader,O=g.fragmentShader,c.update(g),tt=c.getVertexShaderID(g),it=c.getFragmentShaderID(g);const dt=i.getRenderTarget(),vt=z.isInstancedMesh===!0,Ot=z.isBatchedMesh===!0,Z=!!g.map,G=!!g.matcap,E=!!I,j=!!g.aoMap,at=!!g.lightMap,$=!!g.bumpMap,ft=!!g.normalMap,yt=!!g.displacementMap,mt=!!g.emissiveMap,w=!!g.metalnessMap,v=!!g.roughnessMap,H=g.anisotropy>0,Q=g.clearcoat>0,rt=g.dispersion>0,nt=g.iridescence>0,Dt=g.sheen>0,xt=g.transmission>0,At=H&&!!g.anisotropyMap,Kt=Q&&!!g.clearcoatMap,ht=Q&&!!g.clearcoatNormalMap,Rt=Q&&!!g.clearcoatRoughnessMap,Gt=nt&&!!g.iridescenceMap,Vt=nt&&!!g.iridescenceThicknessMap,Ct=Dt&&!!g.sheenColorMap,Jt=Dt&&!!g.sheenRoughnessMap,Xt=!!g.specularMap,ae=!!g.specularColorMap,N=!!g.specularIntensityMap,wt=xt&&!!g.transmissionMap,q=xt&&!!g.thicknessMap,st=!!g.gradientMap,St=!!g.alphaMap,bt=g.alphaTest>0,jt=!!g.alphaHash,Me=!!g.extensions;let Fe=Fn;g.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const Qt={shaderID:ot,shaderType:g.type,shaderName:g.name,vertexShader:J,fragmentShader:O,defines:g.defines,customVertexShaderID:tt,customFragmentShaderID:it,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&z._colorsTexture!==null,instancing:vt,instancingColor:vt&&z.instanceColor!==null,instancingMorph:vt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:zn,alphaToCoverage:!!g.alphaToCoverage,map:Z,matcap:G,envMap:E,envMapMode:E&&I.mapping,envMapCubeUVHeight:et,aoMap:j,lightMap:at,bumpMap:$,normalMap:ft,displacementMap:d&&yt,emissiveMap:mt,normalMapObjectSpace:ft&&g.normalMapType===g2,normalMapTangentSpace:ft&&g.normalMapType===n1,metalnessMap:w,roughnessMap:v,anisotropy:H,anisotropyMap:At,clearcoat:Q,clearcoatMap:Kt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Rt,dispersion:rt,iridescence:nt,iridescenceMap:Gt,iridescenceThicknessMap:Vt,sheen:Dt,sheenColorMap:Ct,sheenRoughnessMap:Jt,specularMap:Xt,specularColorMap:ae,specularIntensityMap:N,transmission:xt,transmissionMap:wt,thicknessMap:q,gradientMap:st,opaque:g.transparent===!1&&g.blending===wi&&g.alphaToCoverage===!1,alphaMap:St,alphaTest:bt,alphaHash:jt,combine:g.combine,mapUv:Z&&f(g.map.channel),aoMapUv:j&&f(g.aoMap.channel),lightMapUv:at&&f(g.lightMap.channel),bumpMapUv:$&&f(g.bumpMap.channel),normalMapUv:ft&&f(g.normalMap.channel),displacementMapUv:yt&&f(g.displacementMap.channel),emissiveMapUv:mt&&f(g.emissiveMap.channel),metalnessMapUv:w&&f(g.metalnessMap.channel),roughnessMapUv:v&&f(g.roughnessMap.channel),anisotropyMapUv:At&&f(g.anisotropyMap.channel),clearcoatMapUv:Kt&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:ht&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&f(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&f(g.sheenRoughnessMap.channel),specularMapUv:Xt&&f(g.specularMap.channel),specularColorMapUv:ae&&f(g.specularColorMap.channel),specularIntensityMapUv:N&&f(g.specularIntensityMap.channel),transmissionMapUv:wt&&f(g.transmissionMap.channel),thicknessMapUv:q&&f(g.thicknessMap.channel),alphaMapUv:St&&f(g.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ft||H),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!U.attributes.uv&&(Z||St),fog:!!X,useFog:g.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:u,skinning:z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Z&&g.map.isVideoTexture===!0&&ne.getTransfer(g.map.colorSpace)===le,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===cn,flipSided:g.side===ke,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Me&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&g.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function b(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const k in g.defines)M.push(k),M.push(g.defines[k]);return g.isRawShaderMaterial===!1&&(x(M,g),S(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function x(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function S(g,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),g.push(o.mask)}function D(g){const M=_[g.type];let k;if(M){const A=on[M];k=$2.clone(A.uniforms)}else k=g.uniforms;return k}function R(g,M){let k;for(let A=0,z=L.length;A<z;A++){const X=L[A];if(X.cacheKey===M){k=X,++k.usedTimes;break}}return k===void 0&&(k=new au(i,M,g,s),L.push(k)),k}function T(g){if(--g.usedTimes===0){const M=L.indexOf(g);L[M]=L[L.length-1],L.pop(),g.destroy()}}function P(g){c.remove(g)}function K(){c.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:D,acquireProgram:R,releaseProgram:T,releaseShaderCache:P,programs:L,dispose:K}}function hu(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function uu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Mc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,u,d,m,_,f){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:u,material:d,groupOrder:m,renderOrder:h.renderOrder,z:_,group:f},i[t]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=f),t++,p}function o(h,u,d,m,_,f){const p=a(h,u,d,m,_,f);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(h,u,d,m,_,f){const p=a(h,u,d,m,_,f);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(h,u){e.length>1&&e.sort(h||uu),n.length>1&&n.sort(u||Mc),r.length>1&&r.sort(u||Mc)}function L(){for(let h=t,u=i.length;h<u;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:L,sort:l}}function du(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new yc,i.set(n,[a])):r>=s.length?(a=new yc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function fu(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Zt};break;case"SpotLight":e={position:new C,direction:new C,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function pu(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let mu=0;function gu(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _u(i){const t=new fu,e=pu(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const r=new C,s=new oe,a=new oe;function o(l){let L=0,h=0,u=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let d=0,m=0,_=0,f=0,p=0,b=0,x=0,S=0,D=0,R=0,T=0;l.sort(gu);for(let K=0,g=l.length;K<g;K++){const M=l[K],k=M.color,A=M.intensity,z=M.distance,X=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)L+=k.r*A,h+=k.g*A,u+=k.b*A;else if(M.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(M.sh.coefficients[U],A);T++}else if(M.isDirectionalLight){const U=t.get(M);if(U.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Y=M.shadow,I=e.get(M);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,n.directionalShadow[d]=I,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=M.shadow.matrix,b++}n.directional[d]=U,d++}else if(M.isSpotLight){const U=t.get(M);U.position.setFromMatrixPosition(M.matrixWorld),U.color.copy(k).multiplyScalar(A),U.distance=z,U.coneCos=Math.cos(M.angle),U.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),U.decay=M.decay,n.spot[_]=U;const Y=M.shadow;if(M.map&&(n.spotLightMap[D]=M.map,D++,Y.updateMatrices(M),M.castShadow&&R++),n.spotLightMatrix[_]=Y.matrix,M.castShadow){const I=e.get(M);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=X,S++}_++}else if(M.isRectAreaLight){const U=t.get(M);U.color.copy(k).multiplyScalar(A),U.halfWidth.set(M.width*.5,0,0),U.halfHeight.set(0,M.height*.5,0),n.rectArea[f]=U,f++}else if(M.isPointLight){const U=t.get(M);if(U.color.copy(M.color).multiplyScalar(M.intensity),U.distance=M.distance,U.decay=M.decay,M.castShadow){const Y=M.shadow,I=e.get(M);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,I.shadowCameraNear=Y.camera.near,I.shadowCameraFar=Y.camera.far,n.pointShadow[m]=I,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=M.shadow.matrix,x++}n.point[m]=U,m++}else if(M.isHemisphereLight){const U=t.get(M);U.skyColor.copy(M.color).multiplyScalar(A),U.groundColor.copy(M.groundColor).multiplyScalar(A),n.hemi[p]=U,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=L,n.ambient[1]=h,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==f||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==D||P.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=f,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,P.directionalLength=d,P.pointLength=m,P.spotLength=_,P.rectAreaLength=f,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=D,P.numLightProbes=T,n.version=mu++)}function c(l,L){let h=0,u=0,d=0,m=0,_=0;const f=L.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const x=l[p];if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),h++}else if(x.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),d++}else if(x.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),u++}else if(x.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),_++}}}return{setup:o,setupView:c,state:n}}function Sc(i){const t=new _u(i),e=[],n=[];function r(L){l.camera=L,e.length=0,n.length=0}function s(L){e.push(L)}function a(L){n.push(L)}function o(){t.setup(e)}function c(L){t.setupView(e,L)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function vu(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Sc(i),t.set(r,[o])):s>=a.length?(o=new Sc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class xu extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=p2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mu extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Su=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Eu(i,t,e){let n=new ho;const r=new lt,s=new lt,a=new ge,o=new xu({depthPacking:m2}),c=new Mu,l={},L=e.maxTextureSize,h={[On]:ke,[ke]:On,[cn]:cn},u=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:yu,fragmentShader:Su}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new be;m.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(m,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let p=this.type;this.render=function(R,T,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const K=i.getRenderTarget(),g=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Nn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const A=p!==xn&&this.type===xn,z=p===xn&&this.type!==xn;for(let X=0,U=R.length;X<U;X++){const Y=R[X],I=Y.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const et=I.getFrameExtents();if(r.multiply(et),s.copy(I.mapSize),(r.x>L||r.y>L)&&(r.x>L&&(s.x=Math.floor(L/et.x),r.x=s.x*et.x,I.mapSize.x=s.x),r.y>L&&(s.y=Math.floor(L/et.y),r.y=s.y*et.y,I.mapSize.y=s.y)),I.map===null||A===!0||z===!0){const ct=this.type!==xn?{minFilter:qe,magFilter:qe}:{};I.map!==null&&I.map.dispose(),I.map=new ti(r.x,r.y,ct),I.map.texture.name=Y.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const ot=I.getViewportCount();for(let ct=0;ct<ot;ct++){const _t=I.getViewport(ct);a.set(s.x*_t.x,s.y*_t.y,s.x*_t.z,s.y*_t.w),k.viewport(a),I.updateMatrices(Y,ct),n=I.getFrustum(),S(T,P,I.camera,Y,this.type)}I.isPointLightShadow!==!0&&this.type===xn&&b(I,P),I.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(K,g,M)};function b(R,T){const P=t.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ti(r.x,r.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,P,u,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,P,d,_,null)}function x(R,T,P,K){let g=null;const M=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)g=M;else if(g=P.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=g.uuid,A=T.uuid;let z=l[k];z===void 0&&(z={},l[k]=z);let X=z[A];X===void 0&&(X=g.clone(),z[A]=X,T.addEventListener("dispose",D)),g=X}if(g.visible=T.visible,g.wireframe=T.wireframe,K===xn?g.side=T.shadowSide!==null?T.shadowSide:T.side:g.side=T.shadowSide!==null?T.shadowSide:h[T.side],g.alphaMap=T.alphaMap,g.alphaTest=T.alphaTest,g.map=T.map,g.clipShadows=T.clipShadows,g.clippingPlanes=T.clippingPlanes,g.clipIntersection=T.clipIntersection,g.displacementMap=T.displacementMap,g.displacementScale=T.displacementScale,g.displacementBias=T.displacementBias,g.wireframeLinewidth=T.wireframeLinewidth,g.linewidth=T.linewidth,P.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const k=i.properties.get(g);k.light=P}return g}function S(R,T,P,K,g){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&g===xn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const A=t.update(R),z=R.material;if(Array.isArray(z)){const X=A.groups;for(let U=0,Y=X.length;U<Y;U++){const I=X[U],et=z[I.materialIndex];if(et&&et.visible){const ot=x(R,et,K,g);R.onBeforeShadow(i,R,T,P,A,ot,I),i.renderBufferDirect(P,null,A,ot,R,I),R.onAfterShadow(i,R,T,P,A,ot,I)}}}else if(z.visible){const X=x(R,z,K,g);R.onBeforeShadow(i,R,T,P,A,X,null),i.renderBufferDirect(P,null,A,X,R,null),R.onAfterShadow(i,R,T,P,A,X,null)}}const k=R.children;for(let A=0,z=k.length;A<z;A++)S(k[A],T,P,K,g)}function D(R){R.target.removeEventListener("dispose",D);for(const P in l){const K=l[P],g=R.target.uuid;g in K&&(K[g].dispose(),delete K[g])}}}const wu={[la]:La,[ha]:fa,[ua]:pa,[Ri]:da,[La]:la,[fa]:ha,[pa]:ua,[da]:Ri};function bu(i){function t(){let N=!1;const wt=new ge;let q=null;const st=new ge(0,0,0,0);return{setMask:function(St){q!==St&&!N&&(i.colorMask(St,St,St,St),q=St)},setLocked:function(St){N=St},setClear:function(St,bt,jt,Me,Fe){Fe===!0&&(St*=Me,bt*=Me,jt*=Me),wt.set(St,bt,jt,Me),st.equals(wt)===!1&&(i.clearColor(St,bt,jt,Me),st.copy(wt))},reset:function(){N=!1,q=null,st.set(-1,0,0,0)}}}function e(){let N=!1,wt=!1,q=null,st=null,St=null;return{setReversed:function(bt){wt=bt},setTest:function(bt){bt?tt(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(bt){q!==bt&&!N&&(i.depthMask(bt),q=bt)},setFunc:function(bt){if(wt&&(bt=wu[bt]),st!==bt){switch(bt){case la:i.depthFunc(i.NEVER);break;case La:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=bt}},setLocked:function(bt){N=bt},setClear:function(bt){St!==bt&&(i.clearDepth(bt),St=bt)},reset:function(){N=!1,q=null,st=null,St=null}}}function n(){let N=!1,wt=null,q=null,st=null,St=null,bt=null,jt=null,Me=null,Fe=null;return{setTest:function(Qt){N||(Qt?tt(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(Qt){wt!==Qt&&!N&&(i.stencilMask(Qt),wt=Qt)},setFunc:function(Qt,Oe,fn){(q!==Qt||st!==Oe||St!==fn)&&(i.stencilFunc(Qt,Oe,fn),q=Qt,st=Oe,St=fn)},setOp:function(Qt,Oe,fn){(bt!==Qt||jt!==Oe||Me!==fn)&&(i.stencilOp(Qt,Oe,fn),bt=Qt,jt=Oe,Me=fn)},setLocked:function(Qt){N=Qt},setClear:function(Qt){Fe!==Qt&&(i.clearStencil(Qt),Fe=Qt)},reset:function(){N=!1,wt=null,q=null,st=null,St=null,bt=null,jt=null,Me=null,Fe=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},L={},h=new WeakMap,u=[],d=null,m=!1,_=null,f=null,p=null,b=null,x=null,S=null,D=null,R=new Zt(0,0,0),T=0,P=!1,K=null,g=null,M=null,k=null,A=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,U=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=U>=1):Y.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=U>=2);let I=null,et={};const ot=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),_t=new ge().fromArray(ot),Wt=new ge().fromArray(ct);function J(N,wt,q,st){const St=new Uint8Array(4),bt=i.createTexture();i.bindTexture(N,bt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<q;jt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(wt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return bt}const O={};O[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),s.setFunc(Ri),at(!1),$(Io),tt(i.CULL_FACE),E(Nn);function tt(N){l[N]!==!0&&(i.enable(N),l[N]=!0)}function it(N){l[N]!==!1&&(i.disable(N),l[N]=!1)}function dt(N,wt){return L[N]!==wt?(i.bindFramebuffer(N,wt),L[N]=wt,N===i.DRAW_FRAMEBUFFER&&(L[i.FRAMEBUFFER]=wt),N===i.FRAMEBUFFER&&(L[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function vt(N,wt){let q=u,st=!1;if(N){q=h.get(wt),q===void 0&&(q=[],h.set(wt,q));const St=N.textures;if(q.length!==St.length||q[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,jt=St.length;bt<jt;bt++)q[bt]=i.COLOR_ATTACHMENT0+bt;q.length=St.length,st=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,st=!0);st&&i.drawBuffers(q)}function Ot(N){return d!==N?(i.useProgram(N),d=N,!0):!1}const Z={[Yn]:i.FUNC_ADD,[G1]:i.FUNC_SUBTRACT,[V1]:i.FUNC_REVERSE_SUBTRACT};Z[W1]=i.MIN,Z[X1]=i.MAX;const G={[Z1]:i.ZERO,[$1]:i.ONE,[q1]:i.SRC_COLOR,[oa]:i.SRC_ALPHA,[t2]:i.SRC_ALPHA_SATURATE,[j1]:i.DST_COLOR,[K1]:i.DST_ALPHA,[Y1]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[Q1]:i.ONE_MINUS_DST_COLOR,[J1]:i.ONE_MINUS_DST_ALPHA,[e2]:i.CONSTANT_COLOR,[n2]:i.ONE_MINUS_CONSTANT_COLOR,[i2]:i.CONSTANT_ALPHA,[r2]:i.ONE_MINUS_CONSTANT_ALPHA};function E(N,wt,q,st,St,bt,jt,Me,Fe,Qt){if(N===Nn){m===!0&&(it(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),N!==H1){if(N!==_||Qt!==P){if((f!==Yn||x!==Yn)&&(i.blendEquation(i.FUNC_ADD),f=Yn,x=Yn),Qt)switch(N){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case No:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,b=null,S=null,D=null,R.set(0,0,0),T=0,_=N,P=Qt}return}St=St||wt,bt=bt||q,jt=jt||st,(wt!==f||St!==x)&&(i.blendEquationSeparate(Z[wt],Z[St]),f=wt,x=St),(q!==p||st!==b||bt!==S||jt!==D)&&(i.blendFuncSeparate(G[q],G[st],G[bt],G[jt]),p=q,b=st,S=bt,D=jt),(Me.equals(R)===!1||Fe!==T)&&(i.blendColor(Me.r,Me.g,Me.b,Fe),R.copy(Me),T=Fe),_=N,P=!1}function j(N,wt){N.side===cn?it(i.CULL_FACE):tt(i.CULL_FACE);let q=N.side===ke;wt&&(q=!q),at(q),N.blending===wi&&N.transparent===!1?E(Nn):E(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const st=N.stencilWrite;a.setTest(st),st&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),yt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(N){K!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),K=N)}function $(N){N!==z1?(tt(i.CULL_FACE),N!==g&&(N===Io?i.cullFace(i.BACK):N===k1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),g=N}function ft(N){N!==M&&(X&&i.lineWidth(N),M=N)}function yt(N,wt,q){N?(tt(i.POLYGON_OFFSET_FILL),(k!==wt||A!==q)&&(i.polygonOffset(wt,q),k=wt,A=q)):it(i.POLYGON_OFFSET_FILL)}function mt(N){N?tt(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function w(N){N===void 0&&(N=i.TEXTURE0+z-1),I!==N&&(i.activeTexture(N),I=N)}function v(N,wt,q){q===void 0&&(I===null?q=i.TEXTURE0+z-1:q=I);let st=et[q];st===void 0&&(st={type:void 0,texture:void 0},et[q]=st),(st.type!==N||st.texture!==wt)&&(I!==q&&(i.activeTexture(q),I=q),i.bindTexture(N,wt||O[N]),st.type=N,st.texture=wt)}function H(){const N=et[I];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(N){_t.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),_t.copy(N))}function Ct(N){Wt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Wt.copy(N))}function Jt(N,wt){let q=c.get(wt);q===void 0&&(q=new WeakMap,c.set(wt,q));let st=q.get(N);st===void 0&&(st=i.getUniformBlockIndex(wt,N.name),q.set(N,st))}function Xt(N,wt){const st=c.get(wt).get(N);o.get(wt)!==st&&(i.uniformBlockBinding(wt,st,N.__bindingPointIndex),o.set(wt,st))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},I=null,et={},L={},h=new WeakMap,u=[],d=null,m=!1,_=null,f=null,p=null,b=null,x=null,S=null,D=null,R=new Zt(0,0,0),T=0,P=!1,K=null,g=null,M=null,k=null,A=null,_t.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:tt,disable:it,bindFramebuffer:dt,drawBuffers:vt,useProgram:Ot,setBlending:E,setMaterial:j,setFlipSided:at,setCullFace:$,setLineWidth:ft,setPolygonOffset:yt,setScissorTest:mt,activeTexture:w,bindTexture:v,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:rt,texImage2D:Rt,texImage3D:Gt,updateUBOMapping:Jt,uniformBlockBinding:Xt,texStorage2D:Kt,texStorage3D:ht,texSubImage2D:nt,texSubImage3D:Dt,compressedTexSubImage2D:xt,compressedTexSubImage3D:At,scissor:Vt,viewport:Ct,reset:ae}}function Ec(i,t,e,n){const r=Tu(n);switch(e){case Yc:return i*t;case Jc:return i*t;case jc:return i*t*2;case Qc:return i*t/r.components*r.byteLength;case so:return i*t/r.components*r.byteLength;case t1:return i*t*2/r.components*r.byteLength;case ao:return i*t*2/r.components*r.byteLength;case Kc:return i*t*3/r.components*r.byteLength;case tn:return i*t*4/r.components*r.byteLength;case oo:return i*t*4/r.components*r.byteLength;case Yr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case ya:return Math.max(i,16)*Math.max(t,8)/4;case va:case Ma:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qr:case ka:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case e1:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Va:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tu(i){switch(i){case En:case Zc:return{byteLength:1,components:1};case ir:case $c:case lr:return{byteLength:2,components:1};case io:case ro:return{byteLength:2,components:4};case Qn:case no:case Mn:return{byteLength:4,components:1};case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Au(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,L=new WeakMap;let h;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,v){return d?new OffscreenCanvas(w,v):cs("canvas")}function _(w,v,H){let Q=1;const rt=mt(w);if((rt.width>H||rt.height>H)&&(Q=H/Math.max(rt.width,rt.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const nt=Math.floor(Q*rt.width),Dt=Math.floor(Q*rt.height);h===void 0&&(h=m(nt,Dt));const xt=v?m(nt,Dt):h;return xt.width=nt,xt.height=Dt,xt.getContext("2d").drawImage(w,0,0,nt,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+nt+"x"+Dt+")."),xt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),w;return w}function f(w){return w.generateMipmaps&&w.minFilter!==qe&&w.minFilter!==Qe}function p(w){i.generateMipmap(w)}function b(w,v,H,Q,rt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let nt=v;if(v===i.RED&&(H===i.FLOAT&&(nt=i.R32F),H===i.HALF_FLOAT&&(nt=i.R16F),H===i.UNSIGNED_BYTE&&(nt=i.R8)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(nt=i.R8UI),H===i.UNSIGNED_SHORT&&(nt=i.R16UI),H===i.UNSIGNED_INT&&(nt=i.R32UI),H===i.BYTE&&(nt=i.R8I),H===i.SHORT&&(nt=i.R16I),H===i.INT&&(nt=i.R32I)),v===i.RG&&(H===i.FLOAT&&(nt=i.RG32F),H===i.HALF_FLOAT&&(nt=i.RG16F),H===i.UNSIGNED_BYTE&&(nt=i.RG8)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(nt=i.RG8UI),H===i.UNSIGNED_SHORT&&(nt=i.RG16UI),H===i.UNSIGNED_INT&&(nt=i.RG32UI),H===i.BYTE&&(nt=i.RG8I),H===i.SHORT&&(nt=i.RG16I),H===i.INT&&(nt=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),H===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),H===i.UNSIGNED_INT&&(nt=i.RGB32UI),H===i.BYTE&&(nt=i.RGB8I),H===i.SHORT&&(nt=i.RGB16I),H===i.INT&&(nt=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),H===i.UNSIGNED_INT&&(nt=i.RGBA32UI),H===i.BYTE&&(nt=i.RGBA8I),H===i.SHORT&&(nt=i.RGBA16I),H===i.INT&&(nt=i.RGBA32I)),v===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),v===i.RGBA){const Dt=rt?rs:ne.getTransfer(Q);H===i.FLOAT&&(nt=i.RGBA32F),H===i.HALF_FLOAT&&(nt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(nt=Dt===le?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function x(w,v){let H;return w?v===null||v===Qn||v===Ii?H=i.DEPTH24_STENCIL8:v===Mn?H=i.DEPTH32F_STENCIL8:v===ir&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Qn||v===Ii?H=i.DEPTH_COMPONENT24:v===Mn?H=i.DEPTH_COMPONENT32F:v===ir&&(H=i.DEPTH_COMPONENT16),H}function S(w,v){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==qe&&w.minFilter!==Qe?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function D(w){const v=w.target;v.removeEventListener("dispose",D),T(v),v.isVideoTexture&&L.delete(v)}function R(w){const v=w.target;v.removeEventListener("dispose",R),K(v)}function T(w){const v=n.get(w);if(v.__webglInit===void 0)return;const H=w.source,Q=u.get(H);if(Q){const rt=Q[v.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&P(w),Object.keys(Q).length===0&&u.delete(H)}n.remove(w)}function P(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const H=w.source,Q=u.get(H);delete Q[v.__cacheKey],a.memory.textures--}function K(w){const v=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let rt=0;rt<v.__webglFramebuffer[Q].length;rt++)i.deleteFramebuffer(v.__webglFramebuffer[Q][rt]);else i.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=w.textures;for(let Q=0,rt=H.length;Q<rt;Q++){const nt=n.get(H[Q]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove(H[Q])}n.remove(w)}let g=0;function M(){g=0}function k(){const w=g;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),g+=1,w}function A(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function z(w,v){const H=n.get(w);if(w.isVideoTexture&&ft(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(H,w,v);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function X(w,v){const H=n.get(w);if(w.version>0&&H.__version!==w.version){Wt(H,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function U(w,v){const H=n.get(w);if(w.version>0&&H.__version!==w.version){Wt(H,w,v);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function Y(w,v){const H=n.get(w);if(w.version>0&&H.__version!==w.version){J(H,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}const I={[is]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},et={[qe]:i.NEAREST,[f2]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[ys]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},ot={[_2]:i.NEVER,[E2]:i.ALWAYS,[v2]:i.LESS,[i1]:i.LEQUAL,[x2]:i.EQUAL,[S2]:i.GEQUAL,[M2]:i.GREATER,[y2]:i.NOTEQUAL};function ct(w,v){if(v.type===Mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Qe||v.magFilter===ys||v.magFilter===mr||v.magFilter===jn||v.minFilter===Qe||v.minFilter===ys||v.minFilter===mr||v.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,I[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,I[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,I[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,et[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,et[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ot[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qe||v.minFilter!==mr&&v.minFilter!==jn||v.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function _t(w,v){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",D));const Q=v.source;let rt=u.get(Q);rt===void 0&&(rt={},u.set(Q,rt));const nt=A(v);if(nt!==w.__cacheKey){rt[nt]===void 0&&(rt[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),rt[nt].usedTimes++;const Dt=rt[w.__cacheKey];Dt!==void 0&&(rt[w.__cacheKey].usedTimes--,Dt.usedTimes===0&&P(v)),w.__cacheKey=nt,w.__webglTexture=rt[nt].texture}return H}function Wt(w,v,H){let Q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=i.TEXTURE_3D);const rt=_t(w,v),nt=v.source;e.bindTexture(Q,w.__webglTexture,i.TEXTURE0+H);const Dt=n.get(nt);if(nt.version!==Dt.__version||rt===!0){e.activeTexture(i.TEXTURE0+H);const xt=ne.getPrimaries(ne.workingColorSpace),At=v.colorSpace===Un?null:ne.getPrimaries(v.colorSpace),Kt=v.colorSpace===Un||xt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let ht=_(v.image,!1,r.maxTextureSize);ht=yt(v,ht);const Rt=s.convert(v.format,v.colorSpace),Gt=s.convert(v.type);let Vt=b(v.internalFormat,Rt,Gt,v.colorSpace,v.isVideoTexture);ct(Q,v);let Ct;const Jt=v.mipmaps,Xt=v.isVideoTexture!==!0,ae=Dt.__version===void 0||rt===!0,N=nt.dataReady,wt=S(v,ht);if(v.isDepthTexture)Vt=x(v.format===Di,v.type),ae&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Vt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Vt,ht.width,ht.height,0,Rt,Gt,null));else if(v.isDataTexture)if(Jt.length>0){Xt&&ae&&e.texStorage2D(i.TEXTURE_2D,wt,Vt,Jt[0].width,Jt[0].height);for(let q=0,st=Jt.length;q<st;q++)Ct=Jt[q],Xt?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Ct.width,Ct.height,Rt,Gt,Ct.data):e.texImage2D(i.TEXTURE_2D,q,Vt,Ct.width,Ct.height,0,Rt,Gt,Ct.data);v.generateMipmaps=!1}else Xt?(ae&&e.texStorage2D(i.TEXTURE_2D,wt,Vt,ht.width,ht.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Rt,Gt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,ht.width,ht.height,0,Rt,Gt,ht.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Vt,Jt[0].width,Jt[0].height,ht.depth);for(let q=0,st=Jt.length;q<st;q++)if(Ct=Jt[q],v.format!==tn)if(Rt!==null)if(Xt){if(N)if(v.layerUpdates.size>0){const St=Ec(Ct.width,Ct.height,v.format,v.type);for(const bt of v.layerUpdates){const jt=Ct.data.subarray(bt*St/Ct.data.BYTES_PER_ELEMENT,(bt+1)*St/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,bt,Ct.width,Ct.height,1,Rt,jt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Ct.width,Ct.height,ht.depth,Rt,Ct.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Vt,Ct.width,Ct.height,ht.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Ct.width,Ct.height,ht.depth,Rt,Gt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Vt,Ct.width,Ct.height,ht.depth,0,Rt,Gt,Ct.data)}else{Xt&&ae&&e.texStorage2D(i.TEXTURE_2D,wt,Vt,Jt[0].width,Jt[0].height);for(let q=0,st=Jt.length;q<st;q++)Ct=Jt[q],v.format!==tn?Rt!==null?Xt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Vt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Ct.width,Ct.height,Rt,Gt,Ct.data):e.texImage2D(i.TEXTURE_2D,q,Vt,Ct.width,Ct.height,0,Rt,Gt,Ct.data)}else if(v.isDataArrayTexture)if(Xt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Vt,ht.width,ht.height,ht.depth),N)if(v.layerUpdates.size>0){const q=Ec(ht.width,ht.height,v.format,v.type);for(const st of v.layerUpdates){const St=ht.data.subarray(st*q/ht.data.BYTES_PER_ELEMENT,(st+1)*q/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ht.width,ht.height,1,Rt,Gt,St)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Gt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,ht.width,ht.height,ht.depth,0,Rt,Gt,ht.data);else if(v.isData3DTexture)Xt?(ae&&e.texStorage3D(i.TEXTURE_3D,wt,Vt,ht.width,ht.height,ht.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Gt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,ht.width,ht.height,ht.depth,0,Rt,Gt,ht.data);else if(v.isFramebufferTexture){if(ae)if(Xt)e.texStorage2D(i.TEXTURE_2D,wt,Vt,ht.width,ht.height);else{let q=ht.width,st=ht.height;for(let St=0;St<wt;St++)e.texImage2D(i.TEXTURE_2D,St,Vt,q,st,0,Rt,Gt,null),q>>=1,st>>=1}}else if(Jt.length>0){if(Xt&&ae){const q=mt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Vt,q.width,q.height)}for(let q=0,st=Jt.length;q<st;q++)Ct=Jt[q],Xt?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Rt,Gt,Ct):e.texImage2D(i.TEXTURE_2D,q,Vt,Rt,Gt,Ct);v.generateMipmaps=!1}else if(Xt){if(ae){const q=mt(ht);e.texStorage2D(i.TEXTURE_2D,wt,Vt,q.width,q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Gt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Vt,Rt,Gt,ht);f(v)&&p(Q),Dt.__version=nt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function J(w,v,H){if(v.image.length!==6)return;const Q=_t(w,v),rt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);const nt=n.get(rt);if(rt.version!==nt.__version||Q===!0){e.activeTexture(i.TEXTURE0+H);const Dt=ne.getPrimaries(ne.workingColorSpace),xt=v.colorSpace===Un?null:ne.getPrimaries(v.colorSpace),At=v.colorSpace===Un||Dt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Kt=v.isCompressedTexture||v.image[0].isCompressedTexture,ht=v.image[0]&&v.image[0].isDataTexture,Rt=[];for(let st=0;st<6;st++)!Kt&&!ht?Rt[st]=_(v.image[st],!0,r.maxCubemapSize):Rt[st]=ht?v.image[st].image:v.image[st],Rt[st]=yt(v,Rt[st]);const Gt=Rt[0],Vt=s.convert(v.format,v.colorSpace),Ct=s.convert(v.type),Jt=b(v.internalFormat,Vt,Ct,v.colorSpace),Xt=v.isVideoTexture!==!0,ae=nt.__version===void 0||Q===!0,N=rt.dataReady;let wt=S(v,Gt);ct(i.TEXTURE_CUBE_MAP,v);let q;if(Kt){Xt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Jt,Gt.width,Gt.height);for(let st=0;st<6;st++){q=Rt[st].mipmaps;for(let St=0;St<q.length;St++){const bt=q[St];v.format!==tn?Vt!==null?Xt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,bt.width,bt.height,Vt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,Jt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,bt.width,bt.height,Vt,Ct,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,Jt,bt.width,bt.height,0,Vt,Ct,bt.data)}}}else{if(q=v.mipmaps,Xt&&ae){q.length>0&&wt++;const st=mt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Jt,st.width,st.height)}for(let st=0;st<6;st++)if(ht){Xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Rt[st].width,Rt[st].height,Vt,Ct,Rt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Jt,Rt[st].width,Rt[st].height,0,Vt,Ct,Rt[st].data);for(let St=0;St<q.length;St++){const jt=q[St].image[st].image;Xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,jt.width,jt.height,Vt,Ct,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,Jt,jt.width,jt.height,0,Vt,Ct,jt.data)}}else{Xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Vt,Ct,Rt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Jt,Vt,Ct,Rt[st]);for(let St=0;St<q.length;St++){const bt=q[St];Xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,Vt,Ct,bt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,Jt,Vt,Ct,bt.image[st])}}}f(v)&&p(i.TEXTURE_CUBE_MAP),nt.__version=rt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function O(w,v,H,Q,rt,nt){const Dt=s.convert(H.format,H.colorSpace),xt=s.convert(H.type),At=b(H.internalFormat,Dt,xt,H.colorSpace);if(!n.get(v).__hasExternalTextures){const ht=Math.max(1,v.width>>nt),Rt=Math.max(1,v.height>>nt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,nt,At,ht,Rt,v.depth,0,Dt,xt,null):e.texImage2D(rt,nt,At,ht,Rt,0,Dt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),$(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,rt,n.get(H).__webglTexture,0,at(v)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,rt,n.get(H).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(w,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const Q=v.depthTexture,rt=Q&&Q.isDepthTexture?Q.type:null,nt=x(v.stencilBuffer,rt),Dt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=at(v);$(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,nt,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,nt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,nt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,w)}else{const Q=v.textures;for(let rt=0;rt<Q.length;rt++){const nt=Q[rt],Dt=s.convert(nt.format,nt.colorSpace),xt=s.convert(nt.type),At=b(nt.internalFormat,Dt,xt,nt.colorSpace),Kt=at(v);H&&$(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,At,v.width,v.height):$(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,At,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,At,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);const Q=n.get(v.depthTexture).__webglTexture,rt=at(v);if(v.depthTexture.format===bi)$(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Di)$(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function dt(w){const v=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Q){const rt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Q.removeEventListener("dispose",rt)};Q.addEventListener("dispose",rt),v.__depthDisposeCallback=rt}v.__boundDepthTexture=Q}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");it(v.__webglFramebuffer,w)}else if(H){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]===void 0)v.__webglDepthbuffer[Q]=i.createRenderbuffer(),tt(v.__webglDepthbuffer[Q],w,!1);else{const rt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=v.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),tt(v.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(w,v,H){const Q=n.get(w);v!==void 0&&O(Q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&dt(w)}function Ot(w){const v=w.texture,H=n.get(w),Q=n.get(v);w.addEventListener("dispose",R);const rt=w.textures,nt=w.isWebGLCubeRenderTarget===!0,Dt=rt.length>1;if(Dt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=v.version,a.memory.textures++),nt){H.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[xt]=[];for(let At=0;At<v.mipmaps.length;At++)H.__webglFramebuffer[xt][At]=i.createFramebuffer()}else H.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let xt=0;xt<v.mipmaps.length;xt++)H.__webglFramebuffer[xt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let xt=0,At=rt.length;xt<At;xt++){const Kt=n.get(rt[xt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&$(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xt=0;xt<rt.length;xt++){const At=rt[xt];H.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[xt]);const Kt=s.convert(At.format,At.colorSpace),ht=s.convert(At.type),Rt=b(At.internalFormat,Kt,ht,At.colorSpace,w.isXRRenderTarget===!0),Gt=at(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Rt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,H.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ct(i.TEXTURE_CUBE_MAP,v);for(let xt=0;xt<6;xt++)if(v.mipmaps&&v.mipmaps.length>0)for(let At=0;At<v.mipmaps.length;At++)O(H.__webglFramebuffer[xt][At],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,At);else O(H.__webglFramebuffer[xt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);f(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let xt=0,At=rt.length;xt<At;xt++){const Kt=rt[xt],ht=n.get(Kt);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),ct(i.TEXTURE_2D,Kt),O(H.__webglFramebuffer,w,Kt,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),f(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(xt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Q.__webglTexture),ct(xt,v),v.mipmaps&&v.mipmaps.length>0)for(let At=0;At<v.mipmaps.length;At++)O(H.__webglFramebuffer[At],w,v,i.COLOR_ATTACHMENT0,xt,At);else O(H.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,xt,0);f(v)&&p(xt),e.unbindTexture()}w.depthBuffer&&dt(w)}function Z(w){const v=w.textures;for(let H=0,Q=v.length;H<Q;H++){const rt=v[H];if(f(rt)){const nt=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Dt=n.get(rt).__webglTexture;e.bindTexture(nt,Dt),p(nt),e.unbindTexture()}}}const G=[],E=[];function j(w){if(w.samples>0){if($(w)===!1){const v=w.textures,H=w.width,Q=w.height;let rt=i.COLOR_BUFFER_BIT;const nt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(w),xt=v.length>1;if(xt)for(let At=0;At<v.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let At=0;At<v.length;At++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[At]);const Kt=n.get(v[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,rt,i.NEAREST),c===!0&&(G.length=0,E.length=0,G.push(i.COLOR_ATTACHMENT0+At),w.depthBuffer&&w.resolveDepthBuffer===!1&&(G.push(nt),E.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,G))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let At=0;At<v.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[At]);const Kt=n.get(v[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function at(w){return Math.min(r.maxSamples,w.samples)}function $(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ft(w){const v=a.render.frame;L.get(w)!==v&&(L.set(w,v),w.update())}function yt(w,v){const H=w.colorSpace,Q=w.format,rt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==zn&&H!==Un&&(ne.getTransfer(H)===le?(Q!==tn||rt!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=M,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=U,this.setTextureCube=Y,this.rebindTextures=vt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=O,this.useMultisampledRTT=$}function Ru(i,t){function e(n,r=Un){let s;const a=ne.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return i.BYTE;if(n===$c)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===no)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===Kc)return i.RGB;if(n===tn)return i.RGBA;if(n===Jc)return i.LUMINANCE;if(n===jc)return i.LUMINANCE_ALPHA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===so)return i.RED_INTEGER;if(n===t1)return i.RG;if(n===ao)return i.RG_INTEGER;if(n===oo)return i.RGBA_INTEGER;if(n===Yr||n===Kr||n===Jr||n===jr)if(a===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===xa||n===Ma||n===ya)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===va)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===Ea||n===wa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sa||n===Ea)return a===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wa)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ba||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ba)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Na)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===ka||n===Ha)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Qr)return a===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===e1||n===Ga||n===Va||n===Wa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Cu extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pu={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const L=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=L.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&u>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pu)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Iu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Du=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Uu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ne,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Bn({vertexShader:Iu,fragmentShader:Du,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nu extends Ni{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,L=null,h=null,u=null,d=null,m=null;const _=new Uu,f=e.getContextAttributes();let p=null,b=null;const x=[],S=[],D=new lt;let R=null;const T=new Be;T.layers.enable(1),T.viewport=new ge;const P=new Be;P.layers.enable(2),P.viewport=new ge;const K=[T,P],g=new Cu;g.layers.enable(1),g.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let O=x[J];return O===void 0&&(O=new Js,x[J]=O),O.getTargetRaySpace()},this.getControllerGrip=function(J){let O=x[J];return O===void 0&&(O=new Js,x[J]=O),O.getGripSpace()},this.getHand=function(J){let O=x[J];return O===void 0&&(O=new Js,x[J]=O),O.getHandSpace()};function A(J){const O=S.indexOf(J.inputSource);if(O===-1)return;const tt=x[O];tt!==void 0&&(tt.update(J.inputSource,J.frame,l||a),tt.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",X);for(let J=0;J<x.length;J++){const O=S[J];O!==null&&(S[J]=null,x[J].disconnect(O))}M=null,k=null,_.reset(),t.setRenderTarget(p),d=null,u=null,h=null,r=null,b=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",z),r.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),r.renderState.layers===void 0){const O={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,O),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new ti(d.framebufferWidth,d.framebufferHeight,{format:tn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let O=null,tt=null,it=null;f.depth&&(it=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=f.stencil?Di:bi,tt=f.stencil?Ii:Qn);const dt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};h=new XRWebGLBinding(r,e),u=h.createProjectionLayer(dt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new ti(u.textureWidth,u.textureHeight,{format:tn,type:En,depthTexture:new p1(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Wt.setContext(r),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(J){for(let O=0;O<J.removed.length;O++){const tt=J.removed[O],it=S.indexOf(tt);it>=0&&(S[it]=null,x[it].disconnect(tt))}for(let O=0;O<J.added.length;O++){const tt=J.added[O];let it=S.indexOf(tt);if(it===-1){for(let vt=0;vt<x.length;vt++)if(vt>=S.length){S.push(tt),it=vt;break}else if(S[vt]===null){S[vt]=tt,it=vt;break}if(it===-1)break}const dt=x[it];dt&&dt.connect(tt)}}const U=new C,Y=new C;function I(J,O,tt){U.setFromMatrixPosition(O.matrixWorld),Y.setFromMatrixPosition(tt.matrixWorld);const it=U.distanceTo(Y),dt=O.projectionMatrix.elements,vt=tt.projectionMatrix.elements,Ot=dt[14]/(dt[10]-1),Z=dt[14]/(dt[10]+1),G=(dt[9]+1)/dt[5],E=(dt[9]-1)/dt[5],j=(dt[8]-1)/dt[0],at=(vt[8]+1)/vt[0],$=Ot*j,ft=Ot*at,yt=it/(-j+at),mt=yt*-j;if(O.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(mt),J.translateZ(yt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),dt[10]===-1)J.projectionMatrix.copy(O.projectionMatrix),J.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const w=Ot+yt,v=Z+yt,H=$-mt,Q=ft+(it-mt),rt=G*Z/v*w,nt=E*Z/v*w;J.projectionMatrix.makePerspective(H,Q,rt,nt,w,v),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function et(J,O){O===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(O.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let O=J.near,tt=J.far;_.texture!==null&&(_.depthNear>0&&(O=_.depthNear),_.depthFar>0&&(tt=_.depthFar)),g.near=P.near=T.near=O,g.far=P.far=T.far=tt,(M!==g.near||k!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),M=g.near,k=g.far);const it=J.parent,dt=g.cameras;et(g,it);for(let vt=0;vt<dt.length;vt++)et(dt[vt],it);dt.length===2?I(g,T,P):g.projectionMatrix.copy(T.projectionMatrix),ot(J,g,it)};function ot(J,O,tt){tt===null?J.matrix.copy(O.matrixWorld):(J.matrix.copy(tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(O.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(O.projectionMatrix),J.projectionMatrixInverse.copy(O.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Za*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(g)};let ct=null;function _t(J,O){if(L=O.getViewerPose(l||a),m=O,L!==null){const tt=L.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let it=!1;tt.length!==g.cameras.length&&(g.cameras.length=0,it=!0);for(let vt=0;vt<tt.length;vt++){const Ot=tt[vt];let Z=null;if(d!==null)Z=d.getViewport(Ot);else{const E=h.getViewSubImage(u,Ot);Z=E.viewport,vt===0&&(t.setRenderTargetTextures(b,E.colorTexture,u.ignoreDepthValues?void 0:E.depthStencilTexture),t.setRenderTarget(b))}let G=K[vt];G===void 0&&(G=new Be,G.layers.enable(vt),G.viewport=new ge,K[vt]=G),G.matrix.fromArray(Ot.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(Ot.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Z.x,Z.y,Z.width,Z.height),vt===0&&(g.matrix.copy(G.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),it===!0&&g.cameras.push(G)}const dt=r.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const vt=h.getDepthInformation(tt[0]);vt&&vt.isValid&&vt.texture&&_.init(t,vt,r.renderState)}}for(let tt=0;tt<x.length;tt++){const it=S[tt],dt=x[tt];it!==null&&dt!==void 0&&dt.update(it,O,l||a)}ct&&ct(J,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),m=null}const Wt=new d1;Wt.setAnimationLoop(_t),this.setAnimationLoop=function(J){ct=J},this.dispose=function(){}}}const Zn=new un,Fu=new oe;function Ou(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,L1(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,b,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),h(f,p)):p.isMeshPhongMaterial?(s(f,p),L(f,p)):p.isMeshStandardMaterial?(s(f,p),u(f,p),p.isMeshPhysicalMaterial&&d(f,p,S)):p.isMeshMatcapMaterial?(s(f,p),m(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?c(f,p,b,x):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===ke&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===ke&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const b=t.get(p),x=b.envMap,S=b.envMapRotation;x&&(f.envMap.value=x,Zn.copy(S),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),f.envMapRotation.value.setFromMatrix4(Fu.makeRotationFromEuler(Zn)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,b,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*b,f.scale.value=x*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function L(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,b){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const b=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Bu(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,x){const S=x.program;n.uniformBlockBinding(b,S)}function l(b,x){let S=r[b.id];S===void 0&&(m(b),S=L(b),r[b.id]=S,b.addEventListener("dispose",f));const D=x.program;n.updateUBOMapping(b,D);const R=t.render.frame;s[b.id]!==R&&(u(b),s[b.id]=R)}function L(b){const x=h();b.__bindingPointIndex=x;const S=i.createBuffer(),D=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const x=r[b.id],S=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,T=S.length;R<T;R++){const P=Array.isArray(S[R])?S[R]:[S[R]];for(let K=0,g=P.length;K<g;K++){const M=P[K];if(d(M,R,K,D)===!0){const k=M.__offset,A=Array.isArray(M.value)?M.value:[M.value];let z=0;for(let X=0;X<A.length;X++){const U=A[X],Y=_(U);typeof U=="number"||typeof U=="boolean"?(M.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,k+z,M.__data)):U.isMatrix3?(M.__data[0]=U.elements[0],M.__data[1]=U.elements[1],M.__data[2]=U.elements[2],M.__data[3]=0,M.__data[4]=U.elements[3],M.__data[5]=U.elements[4],M.__data[6]=U.elements[5],M.__data[7]=0,M.__data[8]=U.elements[6],M.__data[9]=U.elements[7],M.__data[10]=U.elements[8],M.__data[11]=0):(U.toArray(M.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,x,S,D){const R=b.value,T=x+"_"+S;if(D[T]===void 0)return typeof R=="number"||typeof R=="boolean"?D[T]=R:D[T]=R.clone(),!0;{const P=D[T];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return D[T]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function m(b){const x=b.uniforms;let S=0;const D=16;for(let T=0,P=x.length;T<P;T++){const K=Array.isArray(x[T])?x[T]:[x[T]];for(let g=0,M=K.length;g<M;g++){const k=K[g],A=Array.isArray(k.value)?k.value:[k.value];for(let z=0,X=A.length;z<X;z++){const U=A[z],Y=_(U),I=S%D,et=I%Y.boundary,ot=I+et;S+=et,ot!==0&&D-ot<Y.storage&&(S+=D-ot),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Y.storage}}}const R=S%D;return R>0&&(S+=D-R),b.__size=S,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function f(b){const x=b.target;x.removeEventListener("dispose",f);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class fo{constructor(t={}){const{canvas:e=b2(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:L="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,f=null;const p=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=Fn,this.toneMappingExposure=1;const x=this;let S=!1,D=0,R=0,T=null,P=-1,K=null;const g=new ge,M=new ge;let k=null;const A=new Zt(0);let z=0,X=e.width,U=e.height,Y=1,I=null,et=null;const ot=new ge(0,0,X,U),ct=new ge(0,0,X,U);let _t=!1;const Wt=new ho;let J=!1,O=!1;const tt=new oe,it=new oe,dt=new C,vt=new ge,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function G(){return T===null?Y:1}let E=n;function j(y,F){return e.getContext(y,F)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:L,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${eo}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",bt,!1),E===null){const F="webgl2";if(E=j(F,y),E===null)throw j(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let at,$,ft,yt,mt,w,v,H,Q,rt,nt,Dt,xt,At,Kt,ht,Rt,Gt,Vt,Ct,Jt,Xt,ae,N;function wt(){at=new WL(E),at.init(),Xt=new Ru(E,at),$=new BL(E,at,t,Xt),ft=new bu(E),$.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),yt=new $L(E),mt=new hu,w=new Au(E,at,ft,mt,$,Xt,yt),v=new kL(x),H=new VL(x),Q=new tl(E),ae=new FL(E,Q),rt=new XL(E,Q,yt,ae),nt=new YL(E,rt,Q,yt),Vt=new qL(E,$,w),ht=new zL(mt),Dt=new Lu(x,v,H,at,$,ae,ht),xt=new Ou(x,mt),At=new du,Kt=new vu(at),Gt=new NL(x,v,H,ft,nt,u,c),Rt=new Eu(x,nt,$),N=new Bu(E,yt,$,ft),Ct=new OL(E,at,yt),Jt=new ZL(E,at,yt),yt.programs=Dt.programs,x.capabilities=$,x.extensions=at,x.properties=mt,x.renderLists=At,x.shadowMap=Rt,x.state=ft,x.info=yt}wt();const q=new Nu(x,E);this.xr=q,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const y=at.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=at.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(X,U,!1))},this.getSize=function(y){return y.set(X,U)},this.setSize=function(y,F,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,U=F,e.width=Math.floor(y*Y),e.height=Math.floor(F*Y),V===!0&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(X*Y,U*Y).floor()},this.setDrawingBufferSize=function(y,F,V){X=y,U=F,Y=V,e.width=Math.floor(y*V),e.height=Math.floor(F*V),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(g)},this.getViewport=function(y){return y.copy(ot)},this.setViewport=function(y,F,V,W){y.isVector4?ot.set(y.x,y.y,y.z,y.w):ot.set(y,F,V,W),ft.viewport(g.copy(ot).multiplyScalar(Y).round())},this.getScissor=function(y){return y.copy(ct)},this.setScissor=function(y,F,V,W){y.isVector4?ct.set(y.x,y.y,y.z,y.w):ct.set(y,F,V,W),ft.scissor(M.copy(ct).multiplyScalar(Y).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(y){ft.setScissorTest(_t=y)},this.setOpaqueSort=function(y){I=y},this.setTransparentSort=function(y){et=y},this.getClearColor=function(y){return y.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(y=!0,F=!0,V=!0){let W=0;if(y){let B=!1;if(T!==null){const pt=T.texture.format;B=pt===oo||pt===ao||pt===so}if(B){const pt=T.texture.type,Et=pt===En||pt===Qn||pt===ir||pt===Ii||pt===io||pt===ro,It=Gt.getClearColor(),Ut=Gt.getClearAlpha(),zt=It.r,Ht=It.g,Nt=It.b;Et?(d[0]=zt,d[1]=Ht,d[2]=Nt,d[3]=Ut,E.clearBufferuiv(E.COLOR,0,d)):(m[0]=zt,m[1]=Ht,m[2]=Nt,m[3]=Ut,E.clearBufferiv(E.COLOR,0,m))}else W|=E.COLOR_BUFFER_BIT}F&&(W|=E.DEPTH_BUFFER_BIT,E.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),At.dispose(),Kt.dispose(),mt.dispose(),v.dispose(),H.dispose(),nt.dispose(),ae.dispose(),N.dispose(),Dt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Eo),q.removeEventListener("sessionend",wo),kn.stop()};function st(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const y=yt.autoReset,F=Rt.enabled,V=Rt.autoUpdate,W=Rt.needsUpdate,B=Rt.type;wt(),yt.autoReset=y,Rt.enabled=F,Rt.autoUpdate=V,Rt.needsUpdate=W,Rt.type=B}function bt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function jt(y){const F=y.target;F.removeEventListener("dispose",jt),Me(F)}function Me(y){Fe(y),mt.remove(y)}function Fe(y){const F=mt.get(y).programs;F!==void 0&&(F.forEach(function(V){Dt.releaseProgram(V)}),y.isShaderMaterial&&Dt.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,V,W,B,pt){F===null&&(F=Ot);const Et=B.isMesh&&B.matrixWorld.determinant()<0,It=U1(y,F,V,W,B);ft.setMaterial(W,Et);let Ut=V.index,zt=1;if(W.wireframe===!0){if(Ut=rt.getWireframeAttribute(V),Ut===void 0)return;zt=2}const Ht=V.drawRange,Nt=V.attributes.position;let re=Ht.start*zt,ce=(Ht.start+Ht.count)*zt;pt!==null&&(re=Math.max(re,pt.start*zt),ce=Math.min(ce,(pt.start+pt.count)*zt)),Ut!==null?(re=Math.max(re,0),ce=Math.min(ce,Ut.count)):Nt!=null&&(re=Math.max(re,0),ce=Math.min(ce,Nt.count));const me=ce-re;if(me<0||me===1/0)return;ae.setup(B,W,It,V,Ut);let He,te=Ct;if(Ut!==null&&(He=Q.get(Ut),te=Jt,te.setIndex(He)),B.isMesh)W.wireframe===!0?(ft.setLineWidth(W.wireframeLinewidth*G()),te.setMode(E.LINES)):te.setMode(E.TRIANGLES);else if(B.isLine){let Ft=W.linewidth;Ft===void 0&&(Ft=1),ft.setLineWidth(Ft*G()),B.isLineSegments?te.setMode(E.LINES):B.isLineLoop?te.setMode(E.LINE_LOOP):te.setMode(E.LINE_STRIP)}else B.isPoints?te.setMode(E.POINTS):B.isSprite&&te.setMode(E.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)te.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))te.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ft=B._multiDrawStarts,Ae=B._multiDrawCounts,ee=B._multiDrawCount,Ye=Ut?Q.get(Ut).bytesPerElement:1,ii=mt.get(W).currentProgram.getUniforms();for(let Ge=0;Ge<ee;Ge++)ii.setValue(E,"_gl_DrawID",Ge),te.render(Ft[Ge]/Ye,Ae[Ge])}else if(B.isInstancedMesh)te.renderInstances(re,me,B.count);else if(V.isInstancedBufferGeometry){const Ft=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ae=Math.min(V.instanceCount,Ft);te.renderInstances(re,me,Ae)}else te.render(re,me)};function Qt(y,F,V){y.transparent===!0&&y.side===cn&&y.forceSinglePass===!1?(y.side=ke,y.needsUpdate=!0,pr(y,F,V),y.side=On,y.needsUpdate=!0,pr(y,F,V),y.side=cn):pr(y,F,V)}this.compile=function(y,F,V=null){V===null&&(V=y),f=Kt.get(V),f.init(F),b.push(f),V.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),y!==V&&y.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const W=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pt=B.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){const It=pt[Et];Qt(It,V,B),W.add(It)}else Qt(pt,V,B),W.add(pt)}),b.pop(),f=null,W},this.compileAsync=function(y,F,V=null){const W=this.compile(y,F,V);return new Promise(B=>{function pt(){if(W.forEach(function(Et){mt.get(Et).currentProgram.isReady()&&W.delete(Et)}),W.size===0){B(y);return}setTimeout(pt,10)}at.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Oe=null;function fn(y){Oe&&Oe(y)}function Eo(){kn.stop()}function wo(){kn.start()}const kn=new d1;kn.setAnimationLoop(fn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(y){Oe=y,q.setAnimationLoop(y),y===null?kn.stop():kn.start()},q.addEventListener("sessionstart",Eo),q.addEventListener("sessionend",wo),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,F,T),f=Kt.get(y,b.length),f.init(F),b.push(f),it.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Wt.setFromProjectionMatrix(it),O=this.localClippingEnabled,J=ht.init(this.clippingPlanes,O),_=At.get(y,p.length),_.init(),p.push(_),q.enabled===!0&&q.isPresenting===!0){const pt=x.xr.getDepthSensingMesh();pt!==null&&_s(pt,F,-1/0,x.sortObjects)}_s(y,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(I,et),Z=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Z&&Gt.addToRenderList(_,y),this.info.render.frame++,J===!0&&ht.beginShadows();const V=f.state.shadowsArray;Rt.render(V,y,F),J===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,B=_.transmissive;if(f.setupLights(),F.isArrayCamera){const pt=F.cameras;if(B.length>0)for(let Et=0,It=pt.length;Et<It;Et++){const Ut=pt[Et];To(W,B,y,Ut)}Z&&Gt.render(y);for(let Et=0,It=pt.length;Et<It;Et++){const Ut=pt[Et];bo(_,y,Ut,Ut.viewport)}}else B.length>0&&To(W,B,y,F),Z&&Gt.render(y),bo(_,y,F);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(x,y,F),ae.resetDefaultState(),P=-1,K=null,b.pop(),b.length>0?(f=b[b.length-1],J===!0&&ht.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function _s(y,F,V,W){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Wt.intersectsSprite(y)){W&&vt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(it);const Et=nt.update(y),It=y.material;It.visible&&_.push(y,Et,It,V,vt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Wt.intersectsObject(y))){const Et=nt.update(y),It=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),vt.copy(y.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),vt.copy(Et.boundingSphere.center)),vt.applyMatrix4(y.matrixWorld).applyMatrix4(it)),Array.isArray(It)){const Ut=Et.groups;for(let zt=0,Ht=Ut.length;zt<Ht;zt++){const Nt=Ut[zt],re=It[Nt.materialIndex];re&&re.visible&&_.push(y,Et,re,V,vt.z,Nt)}}else It.visible&&_.push(y,Et,It,V,vt.z,null)}}const pt=y.children;for(let Et=0,It=pt.length;Et<It;Et++)_s(pt[Et],F,V,W)}function bo(y,F,V,W){const B=y.opaque,pt=y.transmissive,Et=y.transparent;f.setupLightsView(V),J===!0&&ht.setGlobalState(x.clippingPlanes,V),W&&ft.viewport(g.copy(W)),B.length>0&&fr(B,F,V),pt.length>0&&fr(pt,F,V),Et.length>0&&fr(Et,F,V),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function To(y,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new ti(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?lr:En,minFilter:jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const pt=f.state.transmissionRenderTarget[W.id],Et=W.viewport||g;pt.setSize(Et.z,Et.w);const It=x.getRenderTarget();x.setRenderTarget(pt),x.getClearColor(A),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),Z&&Gt.render(V);const Ut=x.toneMapping;x.toneMapping=Fn;const zt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),J===!0&&ht.setGlobalState(x.clippingPlanes,W),fr(y,V,W),w.updateMultisampleRenderTarget(pt),w.updateRenderTargetMipmap(pt),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Nt=0,re=F.length;Nt<re;Nt++){const ce=F[Nt],me=ce.object,He=ce.geometry,te=ce.material,Ft=ce.group;if(te.side===cn&&me.layers.test(W.layers)){const Ae=te.side;te.side=ke,te.needsUpdate=!0,Ao(me,V,W,He,te,Ft),te.side=Ae,te.needsUpdate=!0,Ht=!0}}Ht===!0&&(w.updateMultisampleRenderTarget(pt),w.updateRenderTargetMipmap(pt))}x.setRenderTarget(It),x.setClearColor(A,z),zt!==void 0&&(W.viewport=zt),x.toneMapping=Ut}function fr(y,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,pt=y.length;B<pt;B++){const Et=y[B],It=Et.object,Ut=Et.geometry,zt=W===null?Et.material:W,Ht=Et.group;It.layers.test(V.layers)&&Ao(It,F,V,Ut,zt,Ht)}}function Ao(y,F,V,W,B,pt){y.onBeforeRender(x,F,V,W,B,pt),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(x,F,V,W,y,pt),B.transparent===!0&&B.side===cn&&B.forceSinglePass===!1?(B.side=ke,B.needsUpdate=!0,x.renderBufferDirect(V,F,W,B,y,pt),B.side=On,B.needsUpdate=!0,x.renderBufferDirect(V,F,W,B,y,pt),B.side=cn):x.renderBufferDirect(V,F,W,B,y,pt),y.onAfterRender(x,F,V,W,B,pt)}function pr(y,F,V){F.isScene!==!0&&(F=Ot);const W=mt.get(y),B=f.state.lights,pt=f.state.shadowsArray,Et=B.state.version,It=Dt.getParameters(y,B.state,pt,F,V),Ut=Dt.getProgramCacheKey(It);let zt=W.programs;W.environment=y.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(y.isMeshStandardMaterial?H:v).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,zt===void 0&&(y.addEventListener("dispose",jt),zt=new Map,W.programs=zt);let Ht=zt.get(Ut);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===Et)return Co(y,It),Ht}else It.uniforms=Dt.getUniforms(y),y.onBeforeCompile(It,x),Ht=Dt.acquireProgram(It,Ut),zt.set(Ut,Ht),W.uniforms=It.uniforms;const Nt=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Nt.clippingPlanes=ht.uniform),Co(y,It),W.needsLights=F1(y),W.lightsStateVersion=Et,W.needsLights&&(Nt.ambientLightColor.value=B.state.ambient,Nt.lightProbe.value=B.state.probe,Nt.directionalLights.value=B.state.directional,Nt.directionalLightShadows.value=B.state.directionalShadow,Nt.spotLights.value=B.state.spot,Nt.spotLightShadows.value=B.state.spotShadow,Nt.rectAreaLights.value=B.state.rectArea,Nt.ltc_1.value=B.state.rectAreaLTC1,Nt.ltc_2.value=B.state.rectAreaLTC2,Nt.pointLights.value=B.state.point,Nt.pointLightShadows.value=B.state.pointShadow,Nt.hemisphereLights.value=B.state.hemi,Nt.directionalShadowMap.value=B.state.directionalShadowMap,Nt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Nt.spotShadowMap.value=B.state.spotShadowMap,Nt.spotLightMatrix.value=B.state.spotLightMatrix,Nt.spotLightMap.value=B.state.spotLightMap,Nt.pointShadowMap.value=B.state.pointShadowMap,Nt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ht,W.uniformsList=null,Ht}function Ro(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=ns.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Co(y,F){const V=mt.get(y);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function U1(y,F,V,W,B){F.isScene!==!0&&(F=Ot),w.resetTextureUnits();const pt=F.fog,Et=W.isMeshStandardMaterial?F.environment:null,It=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:zn,Ut=(W.isMeshStandardMaterial?H:v).get(W.envMap||Et),zt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ht=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Nt=!!V.morphAttributes.position,re=!!V.morphAttributes.normal,ce=!!V.morphAttributes.color;let me=Fn;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(me=x.toneMapping);const He=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=He!==void 0?He.length:0,Ft=mt.get(W),Ae=f.state.lights;if(J===!0&&(O===!0||y!==K)){const Ze=y===K&&W.id===P;ht.setState(W,y,Ze)}let ee=!1;W.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ae.state.version||Ft.outputColorSpace!==It||B.isBatchedMesh&&Ft.batching===!1||!B.isBatchedMesh&&Ft.batching===!0||B.isBatchedMesh&&Ft.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ft.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ft.instancing===!1||!B.isInstancedMesh&&Ft.instancing===!0||B.isSkinnedMesh&&Ft.skinning===!1||!B.isSkinnedMesh&&Ft.skinning===!0||B.isInstancedMesh&&Ft.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ft.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ft.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ft.instancingMorph===!1&&B.morphTexture!==null||Ft.envMap!==Ut||W.fog===!0&&Ft.fog!==pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ht.numPlanes||Ft.numIntersection!==ht.numIntersection)||Ft.vertexAlphas!==zt||Ft.vertexTangents!==Ht||Ft.morphTargets!==Nt||Ft.morphNormals!==re||Ft.morphColors!==ce||Ft.toneMapping!==me||Ft.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Ft.__version=W.version);let Ye=Ft.currentProgram;ee===!0&&(Ye=pr(W,F,B));let ii=!1,Ge=!1,vs=!1;const _e=Ye.getUniforms(),wn=Ft.uniforms;if(ft.useProgram(Ye.program)&&(ii=!0,Ge=!0,vs=!0),W.id!==P&&(P=W.id,Ge=!0),ii||K!==y){$.reverseDepthBuffer?(tt.copy(y.projectionMatrix),A2(tt),R2(tt),_e.setValue(E,"projectionMatrix",tt)):_e.setValue(E,"projectionMatrix",y.projectionMatrix),_e.setValue(E,"viewMatrix",y.matrixWorldInverse);const Ze=_e.map.cameraPosition;Ze!==void 0&&Ze.setValue(E,dt.setFromMatrixPosition(y.matrixWorld)),$.logarithmicDepthBuffer&&_e.setValue(E,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_e.setValue(E,"isOrthographic",y.isOrthographicCamera===!0),K!==y&&(K=y,Ge=!0,vs=!0)}if(B.isSkinnedMesh){_e.setOptional(E,B,"bindMatrix"),_e.setOptional(E,B,"bindMatrixInverse");const Ze=B.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),_e.setValue(E,"boneTexture",Ze.boneTexture,w))}B.isBatchedMesh&&(_e.setOptional(E,B,"batchingTexture"),_e.setValue(E,"batchingTexture",B._matricesTexture,w),_e.setOptional(E,B,"batchingIdTexture"),_e.setValue(E,"batchingIdTexture",B._indirectTexture,w),_e.setOptional(E,B,"batchingColorTexture"),B._colorsTexture!==null&&_e.setValue(E,"batchingColorTexture",B._colorsTexture,w));const xs=V.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&Vt.update(B,V,Ye),(Ge||Ft.receiveShadow!==B.receiveShadow)&&(Ft.receiveShadow=B.receiveShadow,_e.setValue(E,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(wn.envMap.value=Ut,wn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(wn.envMapIntensity.value=F.environmentIntensity),Ge&&(_e.setValue(E,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&N1(wn,vs),pt&&W.fog===!0&&xt.refreshFogUniforms(wn,pt),xt.refreshMaterialUniforms(wn,W,Y,U,f.state.transmissionRenderTarget[y.id]),ns.upload(E,Ro(Ft),wn,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ns.upload(E,Ro(Ft),wn,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_e.setValue(E,"center",B.center),_e.setValue(E,"modelViewMatrix",B.modelViewMatrix),_e.setValue(E,"normalMatrix",B.normalMatrix),_e.setValue(E,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ze=W.uniformsGroups;for(let Ms=0,O1=Ze.length;Ms<O1;Ms++){const Po=Ze[Ms];N.update(Po,Ye),N.bind(Po,Ye)}}return Ye}function N1(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function F1(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,F,V){mt.get(y.texture).__webglTexture=F,mt.get(y.depthTexture).__webglTexture=V;const W=mt.get(y);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const V=mt.get(y);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,V=0){T=y,D=F,R=V;let W=!0,B=null,pt=!1,Et=!1;if(y){const Ut=mt.get(y);if(Ut.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(E.FRAMEBUFFER,null),W=!1;else if(Ut.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(Ut.__hasExternalTextures)w.rebindTextures(y,mt.get(y.texture).__webglTexture,mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Nt=y.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&mt.has(Nt)&&(y.width!==Nt.image.width||y.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const zt=y.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Et=!0);const Ht=mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ht[F])?B=Ht[F][V]:B=Ht[F],pt=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?B=mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ht)?B=Ht[V]:B=Ht,g.copy(y.viewport),M.copy(y.scissor),k=y.scissorTest}else g.copy(ot).multiplyScalar(Y).floor(),M.copy(ct).multiplyScalar(Y).floor(),k=_t;if(ft.bindFramebuffer(E.FRAMEBUFFER,B)&&W&&ft.drawBuffers(y,B),ft.viewport(g),ft.scissor(M),ft.setScissorTest(k),pt){const Ut=mt.get(y.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ut.__webglTexture,V)}else if(Et){const Ut=mt.get(y.texture),zt=F||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ut.__webglTexture,V||0,zt)}P=-1},this.readRenderTargetPixels=function(y,F,V,W,B,pt,Et){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Et!==void 0&&(It=It[Et]),It){ft.bindFramebuffer(E.FRAMEBUFFER,It);try{const Ut=y.texture,zt=Ut.format,Ht=Ut.type;if(!$.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-W&&V>=0&&V<=y.height-B&&E.readPixels(F,V,W,B,Xt.convert(zt),Xt.convert(Ht),pt)}finally{const Ut=T!==null?mt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(E.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(y,F,V,W,B,pt,Et){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Et!==void 0&&(It=It[Et]),It){const Ut=y.texture,zt=Ut.format,Ht=Ut.type;if(!$.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-W&&V>=0&&V<=y.height-B){ft.bindFramebuffer(E.FRAMEBUFFER,It);const Nt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Nt),E.bufferData(E.PIXEL_PACK_BUFFER,pt.byteLength,E.STREAM_READ),E.readPixels(F,V,W,B,Xt.convert(zt),Xt.convert(Ht),0);const re=T!==null?mt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(E.FRAMEBUFFER,re);const ce=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await T2(E,ce,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Nt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,pt),E.deleteBuffer(Nt),E.deleteSync(ce),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,V=0){y.isTexture!==!0&&(es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);const W=Math.pow(2,-V),B=Math.floor(y.image.width*W),pt=Math.floor(y.image.height*W),Et=F!==null?F.x:0,It=F!==null?F.y:0;w.setTexture2D(y,0),E.copyTexSubImage2D(E.TEXTURE_2D,V,0,0,Et,It,B,pt),ft.unbindTexture()},this.copyTextureToTexture=function(y,F,V=null,W=null,B=0){y.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,y=arguments[1],F=arguments[2],B=arguments[3]||0,V=null);let pt,Et,It,Ut,zt,Ht;V!==null?(pt=V.max.x-V.min.x,Et=V.max.y-V.min.y,It=V.min.x,Ut=V.min.y):(pt=y.image.width,Et=y.image.height,It=0,Ut=0),W!==null?(zt=W.x,Ht=W.y):(zt=0,Ht=0);const Nt=Xt.convert(F.format),re=Xt.convert(F.type);w.setTexture2D(F,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,F.unpackAlignment);const ce=E.getParameter(E.UNPACK_ROW_LENGTH),me=E.getParameter(E.UNPACK_IMAGE_HEIGHT),He=E.getParameter(E.UNPACK_SKIP_PIXELS),te=E.getParameter(E.UNPACK_SKIP_ROWS),Ft=E.getParameter(E.UNPACK_SKIP_IMAGES),Ae=y.isCompressedTexture?y.mipmaps[B]:y.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,Ae.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ae.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,It),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ut),y.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,B,zt,Ht,pt,Et,Nt,re,Ae.data):y.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,B,zt,Ht,Ae.width,Ae.height,Nt,Ae.data):E.texSubImage2D(E.TEXTURE_2D,B,zt,Ht,pt,Et,Nt,re,Ae),E.pixelStorei(E.UNPACK_ROW_LENGTH,ce),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,me),E.pixelStorei(E.UNPACK_SKIP_PIXELS,He),E.pixelStorei(E.UNPACK_SKIP_ROWS,te),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ft),B===0&&F.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(y,F,V=null,W=null,B=0){y.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,y=arguments[2],F=arguments[3],B=arguments[4]||0);let pt,Et,It,Ut,zt,Ht,Nt,re,ce;const me=y.isCompressedTexture?y.mipmaps[B]:y.image;V!==null?(pt=V.max.x-V.min.x,Et=V.max.y-V.min.y,It=V.max.z-V.min.z,Ut=V.min.x,zt=V.min.y,Ht=V.min.z):(pt=me.width,Et=me.height,It=me.depth,Ut=0,zt=0,Ht=0),W!==null?(Nt=W.x,re=W.y,ce=W.z):(Nt=0,re=0,ce=0);const He=Xt.convert(F.format),te=Xt.convert(F.type);let Ft;if(F.isData3DTexture)w.setTexture3D(F,0),Ft=E.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)w.setTexture2DArray(F,0),Ft=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,F.unpackAlignment);const Ae=E.getParameter(E.UNPACK_ROW_LENGTH),ee=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ye=E.getParameter(E.UNPACK_SKIP_PIXELS),ii=E.getParameter(E.UNPACK_SKIP_ROWS),Ge=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,me.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,me.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ut),E.pixelStorei(E.UNPACK_SKIP_ROWS,zt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ht),y.isDataTexture||y.isData3DTexture?E.texSubImage3D(Ft,B,Nt,re,ce,pt,Et,It,He,te,me.data):F.isCompressedArrayTexture?E.compressedTexSubImage3D(Ft,B,Nt,re,ce,pt,Et,It,He,me.data):E.texSubImage3D(Ft,B,Nt,re,ce,pt,Et,It,He,te,me),E.pixelStorei(E.UNPACK_ROW_LENGTH,Ae),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ee),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ye),E.pixelStorei(E.UNPACK_SKIP_ROWS,ii),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ge),B===0&&F.generateMipmaps&&E.generateMipmap(Ft),ft.unbindTexture()},this.initRenderTarget=function(y){mt.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),ft.unbindTexture()},this.resetState=function(){D=0,R=0,T=null,ft.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===co?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===ds?"display-p3":"srgb"}}class ur{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new ur(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class po extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xa,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new C;class ls{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ls(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mo extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _i;const Xi=new C,vi=new C,xi=new C,Mi=new lt,Zi=new lt,x1=new oe,Or=new C,$i=new C,Br=new C,wc=new lt,js=new lt,bc=new lt;class M1 extends Se{constructor(t=new mo){if(super(),this.isSprite=!0,this.type="Sprite",_i===void 0){_i=new be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zu(e,5);_i.setIndex([0,1,2,0,2,3]),_i.setAttribute("position",new ls(n,3,0,!1)),_i.setAttribute("uv",new ls(n,2,3,!1))}this.geometry=_i,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vi.setFromMatrixScale(this.matrixWorld),x1.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vi.multiplyScalar(-xi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;zr(Or.set(-.5,-.5,0),xi,a,vi,r,s),zr($i.set(.5,-.5,0),xi,a,vi,r,s),zr(Br.set(.5,.5,0),xi,a,vi,r,s),wc.set(0,0),js.set(1,0),bc.set(1,1);let o=t.ray.intersectTriangle(Or,$i,Br,!1,Xi);if(o===null&&(zr($i.set(-.5,.5,0),xi,a,vi,r,s),js.set(0,1),o=t.ray.intersectTriangle(Or,Br,$i,!1,Xi),o===null))return;const c=t.ray.origin.distanceTo(Xi);c<t.near||c>t.far||e.push({distance:c,point:Xi.clone(),uv:Xe.getInterpolation(Xi,Or,$i,Br,wc,js,bc,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zr(i,t,e,n,r,s){Mi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Zi.x=s*Mi.x-r*Mi.y,Zi.y=r*Mi.x+s*Mi.y):Zi.copy(Mi),i.copy(t),i.x+=Zi.x,i.y+=Zi.y,i.applyMatrix4(x1)}class Bi extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ls=new C,hs=new C,Tc=new oe,qi=new lo,kr=new fs,Qs=new C,Ac=new C;class y1 extends Se{constructor(t=new be,e=new Bi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ls.fromBufferAttribute(e,r-1),hs.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ls.distanceTo(hs);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),kr.radius+=s,t.ray.intersectsSphere(kr)===!1)return;Tc.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Tc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,L=n.index,u=n.attributes.position;if(L!==null){const d=Math.max(0,a.start),m=Math.min(L.count,a.start+a.count);for(let _=d,f=m-1;_<f;_+=l){const p=L.getX(_),b=L.getX(_+1),x=Hr(this,t,qi,c,p,b);x&&e.push(x)}if(this.isLineLoop){const _=L.getX(m-1),f=L.getX(d),p=Hr(this,t,qi,c,_,f);p&&e.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,f=m-1;_<f;_+=l){const p=Hr(this,t,qi,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Hr(this,t,qi,c,m-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Hr(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(Ls.fromBufferAttribute(a,r),hs.fromBufferAttribute(a,s),e.distanceSqToSegment(Ls,hs,Qs,Ac)>n)return;Qs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qs);if(!(c<t.near||c>t.far))return{distance:c,point:Ac.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Rc=new C,Cc=new C;class go extends y1{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Rc.fromBufferAttribute(e,r),Cc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Rc.distanceTo(Cc);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dr extends Ne{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const L=n[r],u=n[r+1]-L,d=(a-L)/u;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new lt:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,r=[],s=[],a=[],o=new C,c=new oe;for(let d=0;d<=t;d++){const m=d/t;r[d]=this.getTangentAt(m,new C)}s[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const L=Math.abs(r[0].x),h=Math.abs(r[0].y),u=Math.abs(r[0].z);L<=l&&(l=L,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ce(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Ce(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],d*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _o extends dn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new lt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const L=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*L-d*h+this.aX,l=u*h+d*L+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ku extends _o{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vo(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,L,h){let u=(a-s)/l-(o-s)/(l+L)+(o-a)/L,d=(o-a)/L-(c-a)/(L+h)+(c-o)/h;u*=L,d*=L,r(a,o,u,d)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Gr=new C,ta=new vo,ea=new vo,na=new vo;class Hu extends dn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new C){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,L;this.closed||o>0?l=r[(o-1)%s]:(Gr.subVectors(r[0],r[1]).add(r[0]),l=Gr);const h=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?L=r[(o+2)%s]:(Gr.subVectors(r[s-1],r[s-2]).add(r[s-1]),L=Gr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(u),d),f=Math.pow(u.distanceToSquared(L),d);_<1e-4&&(_=1),m<1e-4&&(m=_),f<1e-4&&(f=_),ta.initNonuniformCatmullRom(l.x,h.x,u.x,L.x,m,_,f),ea.initNonuniformCatmullRom(l.y,h.y,u.y,L.y,m,_,f),na.initNonuniformCatmullRom(l.z,h.z,u.z,L.z,m,_,f)}else this.curveType==="catmullrom"&&(ta.initCatmullRom(l.x,h.x,u.x,L.x,this.tension),ea.initCatmullRom(l.y,h.y,u.y,L.y,this.tension),na.initCatmullRom(l.z,h.z,u.z,L.z,this.tension));return n.set(ta.calc(c),ea.calc(c),na.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new C().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Pc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function Gu(i,t){const e=1-i;return e*e*t}function Vu(i,t){return 2*(1-i)*i*t}function Wu(i,t){return i*i*t}function ji(i,t,e,n){return Gu(i,t)+Vu(i,e)+Wu(i,n)}function Xu(i,t){const e=1-i;return e*e*e*t}function Zu(i,t){const e=1-i;return 3*e*e*i*t}function $u(i,t){return 3*(1-i)*i*i*t}function qu(i,t){return i*i*i*t}function Qi(i,t,e,n,r){return Xu(i,t)+Zu(i,e)+$u(i,n)+qu(i,r)}class S1 extends dn{constructor(t=new lt,e=new lt,n=new lt,r=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new lt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Qi(t,r.x,s.x,a.x,o.x),Qi(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yu extends dn{constructor(t=new C,e=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new C){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Qi(t,r.x,s.x,a.x,o.x),Qi(t,r.y,s.y,a.y,o.y),Qi(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class E1 extends dn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ku extends dn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class w1 extends dn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(ji(t,r.x,s.x,a.x),ji(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ju extends dn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(ji(t,r.x,s.x,a.x),ji(t,r.y,s.y,a.y),ji(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class b1 extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],L=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Pc(o,c.x,l.x,L.x,h.x),Pc(o,c.y,l.y,L.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new lt().fromArray(r))}return this}}var qa=Object.freeze({__proto__:null,ArcCurve:ku,CatmullRomCurve3:Hu,CubicBezierCurve:S1,CubicBezierCurve3:Yu,EllipseCurve:_o,LineCurve:E1,LineCurve3:Ku,QuadraticBezierCurve:w1,QuadraticBezierCurve3:Ju,SplineCurve:b1});class ju extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const L=c[l];n&&n.equals(L)||(e.push(L),n=L)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new qa[r.type]().fromJSON(r))}return this}}class Ya extends ju{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new E1(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new w1(this.currentPoint.clone(),new lt(t,e),new lt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new S1(this.currentPoint.clone(),new lt(t,e),new lt(n,r),new lt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new b1(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,L=this.currentPoint.y;return this.absellipse(t+l,e+L,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new _o(t,e,n,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const L=l.getPoint(1);return this.currentPoint.copy(L),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class rr extends be{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Ce(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],L=1/e,h=new C,u=new lt,d=new C,m=new C,_=new C;let f=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:f=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-f,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:f=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-f,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(m)}for(let b=0;b<=e;b++){const x=n+b*L*r,S=Math.sin(x),D=Math.cos(x);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*S,h.y=t[R].y,h.z=t[R].x*D,a.push(h.x,h.y,h.z),u.x=b/e,u.y=R/(t.length-1),o.push(u.x,u.y);const T=c[3*R+0]*S,P=c[3*R+1],K=c[3*R+0]*D;l.push(T,P,K)}}for(let b=0;b<e;b++)for(let x=0;x<t.length-1;x++){const S=x+b*t.length,D=S,R=S+t.length,T=S+t.length+1,P=S+1;s.push(D,R,P),s.push(T,P,R)}this.setIndex(s),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.points,t.segments,t.phiStart,t.phiLength)}}class sr extends be{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new C,L=new lt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){const d=n+h/e*r;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),L.x=(a[u]/t+1)/2,L.y=(a[u+1]/t+1)/2,c.push(L.x,L.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Pt extends be{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const L=[],h=[],u=[],d=[];let m=0;const _=[],f=n/2;let p=0;b(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(L),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function b(){const S=new C,D=new C;let R=0;const T=(e-t)/n;for(let P=0;P<=s;P++){const K=[],g=P/s,M=g*(e-t)+t;for(let k=0;k<=r;k++){const A=k/r,z=A*c+o,X=Math.sin(z),U=Math.cos(z);D.x=M*X,D.y=-g*n+f,D.z=M*U,h.push(D.x,D.y,D.z),S.set(X,T,U).normalize(),u.push(S.x,S.y,S.z),d.push(A,1-g),K.push(m++)}_.push(K)}for(let P=0;P<r;P++)for(let K=0;K<s;K++){const g=_[K][P],M=_[K+1][P],k=_[K+1][P+1],A=_[K][P+1];t>0&&(L.push(g,M,A),R+=3),e>0&&(L.push(M,k,A),R+=3)}l.addGroup(p,R,0),p+=R}function x(S){const D=m,R=new lt,T=new C;let P=0;const K=S===!0?t:e,g=S===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,f*g,0),u.push(0,g,0),d.push(.5,.5),m++;const M=m;for(let k=0;k<=r;k++){const z=k/r*c+o,X=Math.cos(z),U=Math.sin(z);T.x=K*U,T.y=f*g,T.z=K*X,h.push(T.x,T.y,T.z),u.push(0,g,0),R.x=X*.5+.5,R.y=U*.5*g+.5,d.push(R.x,R.y),m++}for(let k=0;k<r;k++){const A=D+k,z=M+k;S===!0?L.push(z,z+1,A):L.push(z+1,z,A),P+=3}l.addGroup(p,P,S===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zi extends Pt{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new zi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Vr=new C,Wr=new C,ia=new C,Xr=new Xe;class Qu extends be{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(ts*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],L=["a","b","c"],h=new Array(3),u={},d=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:_,b:f,c:p}=Xr;if(_.fromBufferAttribute(o,l[0]),f.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Xr.getNormal(ia),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const x=(b+1)%3,S=h[b],D=h[x],R=Xr[L[b]],T=Xr[L[x]],P=`${S}_${D}`,K=`${D}_${S}`;K in u&&u[K]?(ia.dot(u[K].normal)<=s&&(d.push(R.x,R.y,R.z),d.push(T.x,T.y,T.z)),u[K]=null):P in u||(u[P]={index0:l[b],index1:l[x],normal:ia.clone()})}}for(const m in u)if(u[m]){const{index0:_,index1:f}=u[m];Vr.fromBufferAttribute(o,_),Wr.fromBufferAttribute(o,f),d.push(Vr.x,Vr.y,Vr.z),d.push(Wr.x,Wr.y,Wr.z)}this.setAttribute("position",new ie(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class T1 extends Ya{constructor(t){super(t),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Ya().fromJSON(r))}return this}}const t3={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=A1(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,L,h,u,d;if(n&&(s=s3(i,t,s,e)),i.length>80*e){o=l=i[0],c=L=i[1];for(let m=e;m<r;m+=e)h=i[m],u=i[m+1],h<o&&(o=h),u<c&&(c=u),h>l&&(l=h),u>L&&(L=u);d=Math.max(l-o,L-c),d=d!==0?32767/d:0}return ar(s,a,e,o,c,d,0),a}};function A1(i,t,e,n,r){let s,a;if(r===m3(i,t,e,n)>0)for(s=t;s<e;s+=n)a=Ic(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=Ic(s,i[s],i[s+1],a);return a&&ms(a,a.next)&&(cr(a),a=a.next),a}function ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ms(e,e.next)||fe(e.prev,e,e.next)===0)){if(cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ar(i,t,e,n,r,s,a){if(!i)return;!a&&s&&L3(i,n,r,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?n3(i,n,r,s):e3(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),cr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=i3(ei(i),t,e),ar(i,t,e,n,r,s,2)):a===2&&r3(i,t,e,n,r,s):ar(ei(i),t,e,n,r,s,1);break}}}function e3(i){const t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,c=e.y,l=n.y,L=r<s?r<a?r:a:s<a?s:a,h=o<c?o<l?o:l:c<l?c:l,u=r>s?r>a?r:a:s>a?s:a,d=o>c?o>l?o:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=L&&m.x<=u&&m.y>=h&&m.y<=d&&Ei(r,o,s,c,a,l,m.x,m.y)&&fe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function n3(i,t,e,n){const r=i.prev,s=i,a=i.next;if(fe(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,L=r.y,h=s.y,u=a.y,d=o<c?o<l?o:l:c<l?c:l,m=L<h?L<u?L:u:h<u?h:u,_=o>c?o>l?o:l:c>l?c:l,f=L>h?L>u?L:u:h>u?h:u,p=Ka(d,m,t,e,n),b=Ka(_,f,t,e,n);let x=i.prevZ,S=i.nextZ;for(;x&&x.z>=p&&S&&S.z<=b;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=f&&x!==r&&x!==a&&Ei(o,L,c,h,l,u,x.x,x.y)&&fe(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=d&&S.x<=_&&S.y>=m&&S.y<=f&&S!==r&&S!==a&&Ei(o,L,c,h,l,u,S.x,S.y)&&fe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=f&&x!==r&&x!==a&&Ei(o,L,c,h,l,u,x.x,x.y)&&fe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=b;){if(S.x>=d&&S.x<=_&&S.y>=m&&S.y<=f&&S!==r&&S!==a&&Ei(o,L,c,h,l,u,S.x,S.y)&&fe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function i3(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!ms(r,s)&&R1(r,n,n.next,s)&&or(r,s)&&or(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),cr(n),cr(n.next),n=i=s),n=n.next}while(n!==i);return ei(n)}function r3(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&d3(a,o)){let c=C1(a,o);a=ei(a,a.next),c=ei(c,c.next),ar(a,t,e,n,r,s,0),ar(c,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function s3(i,t,e,n){const r=[];let s,a,o,c,l;for(s=0,a=t.length;s<a;s++)o=t[s]*n,c=s<a-1?t[s+1]*n:i.length,l=A1(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(u3(l));for(r.sort(a3),s=0;s<r.length;s++)e=o3(r[s],e);return e}function a3(i,t){return i.x-t.x}function o3(i,t){const e=c3(i,t);if(!e)return t;const n=C1(e,i);return ei(n,n.next),ei(e,e.next)}function c3(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,r=e.x<e.next.x?e:e.next,u===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,c=r.x,l=r.y;let L=1/0,h;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Ei(a<l?s:n,a,c,l,a<l?n:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),or(e,i)&&(h<L||h===L&&(e.x>r.x||e.x===r.x&&l3(r,e)))&&(r=e,L=h)),e=e.next;while(e!==o);return r}function l3(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function L3(i,t,e,n){let r=i;do r.z===0&&(r.z=Ka(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,h3(r)}function h3(i){let t,e,n,r,s,a,o,c,l=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(a>1);return i}function Ka(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function u3(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ei(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function d3(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!f3(i,t)&&(or(i,t)&&or(t,i)&&p3(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||ms(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ms(i,t){return i.x===t.x&&i.y===t.y}function R1(i,t,e,n){const r=$r(fe(i,t,e)),s=$r(fe(i,t,n)),a=$r(fe(e,n,i)),o=$r(fe(e,n,t));return!!(r!==s&&a!==o||r===0&&Zr(i,e,t)||s===0&&Zr(i,n,t)||a===0&&Zr(e,i,n)||o===0&&Zr(e,t,n))}function Zr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $r(i){return i>0?1:i<0?-1:0}function f3(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&R1(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function or(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function p3(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function C1(i,t){const e=new Ja(i.i,i.x,i.y),n=new Ja(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Ic(i,t,e,n){const r=new Ja(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ja(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function m3(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class tr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return tr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Dc(t),Uc(n,t);let a=t.length;e.forEach(Dc);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,Uc(n,e[c]);const o=t3.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Dc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class xo extends be{constructor(t=new T1([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ie(r,3)),this.setAttribute("uv",new ie(s,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,L=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:g3;let x,S=!1,D,R,T,P;p&&(x=p.getSpacedPoints(L),S=!0,u=!1,D=p.computeFrenetFrames(L,!1),R=new C,T=new C,P=new C),u||(f=0,d=0,m=0,_=0);const K=o.extractPoints(l);let g=K.shape;const M=K.holes;if(!tr.isClockWise(g)){g=g.reverse();for(let G=0,E=M.length;G<E;G++){const j=M[G];tr.isClockWise(j)&&(M[G]=j.reverse())}}const A=tr.triangulateShape(g,M),z=g;for(let G=0,E=M.length;G<E;G++){const j=M[G];g=g.concat(j)}function X(G,E,j){return E||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(E,j)}const U=g.length,Y=A.length;function I(G,E,j){let at,$,ft;const yt=G.x-E.x,mt=G.y-E.y,w=j.x-G.x,v=j.y-G.y,H=yt*yt+mt*mt,Q=yt*v-mt*w;if(Math.abs(Q)>Number.EPSILON){const rt=Math.sqrt(H),nt=Math.sqrt(w*w+v*v),Dt=E.x-mt/rt,xt=E.y+yt/rt,At=j.x-v/nt,Kt=j.y+w/nt,ht=((At-Dt)*v-(Kt-xt)*w)/(yt*v-mt*w);at=Dt+yt*ht-G.x,$=xt+mt*ht-G.y;const Rt=at*at+$*$;if(Rt<=2)return new lt(at,$);ft=Math.sqrt(Rt/2)}else{let rt=!1;yt>Number.EPSILON?w>Number.EPSILON&&(rt=!0):yt<-Number.EPSILON?w<-Number.EPSILON&&(rt=!0):Math.sign(mt)===Math.sign(v)&&(rt=!0),rt?(at=-mt,$=yt,ft=Math.sqrt(H)):(at=yt,$=mt,ft=Math.sqrt(H/2))}return new lt(at/ft,$/ft)}const et=[];for(let G=0,E=z.length,j=E-1,at=G+1;G<E;G++,j++,at++)j===E&&(j=0),at===E&&(at=0),et[G]=I(z[G],z[j],z[at]);const ot=[];let ct,_t=et.concat();for(let G=0,E=M.length;G<E;G++){const j=M[G];ct=[];for(let at=0,$=j.length,ft=$-1,yt=at+1;at<$;at++,ft++,yt++)ft===$&&(ft=0),yt===$&&(yt=0),ct[at]=I(j[at],j[ft],j[yt]);ot.push(ct),_t=_t.concat(ct)}for(let G=0;G<f;G++){const E=G/f,j=d*Math.cos(E*Math.PI/2),at=m*Math.sin(E*Math.PI/2)+_;for(let $=0,ft=z.length;$<ft;$++){const yt=X(z[$],et[$],at);it(yt.x,yt.y,-j)}for(let $=0,ft=M.length;$<ft;$++){const yt=M[$];ct=ot[$];for(let mt=0,w=yt.length;mt<w;mt++){const v=X(yt[mt],ct[mt],at);it(v.x,v.y,-j)}}}const Wt=m+_;for(let G=0;G<U;G++){const E=u?X(g[G],_t[G],Wt):g[G];S?(T.copy(D.normals[0]).multiplyScalar(E.x),R.copy(D.binormals[0]).multiplyScalar(E.y),P.copy(x[0]).add(T).add(R),it(P.x,P.y,P.z)):it(E.x,E.y,0)}for(let G=1;G<=L;G++)for(let E=0;E<U;E++){const j=u?X(g[E],_t[E],Wt):g[E];S?(T.copy(D.normals[G]).multiplyScalar(j.x),R.copy(D.binormals[G]).multiplyScalar(j.y),P.copy(x[G]).add(T).add(R),it(P.x,P.y,P.z)):it(j.x,j.y,h/L*G)}for(let G=f-1;G>=0;G--){const E=G/f,j=d*Math.cos(E*Math.PI/2),at=m*Math.sin(E*Math.PI/2)+_;for(let $=0,ft=z.length;$<ft;$++){const yt=X(z[$],et[$],at);it(yt.x,yt.y,h+j)}for(let $=0,ft=M.length;$<ft;$++){const yt=M[$];ct=ot[$];for(let mt=0,w=yt.length;mt<w;mt++){const v=X(yt[mt],ct[mt],at);S?it(v.x,v.y+x[L-1].y,x[L-1].x+j):it(v.x,v.y,h+j)}}}J(),O();function J(){const G=r.length/3;if(u){let E=0,j=U*E;for(let at=0;at<Y;at++){const $=A[at];dt($[2]+j,$[1]+j,$[0]+j)}E=L+f*2,j=U*E;for(let at=0;at<Y;at++){const $=A[at];dt($[0]+j,$[1]+j,$[2]+j)}}else{for(let E=0;E<Y;E++){const j=A[E];dt(j[2],j[1],j[0])}for(let E=0;E<Y;E++){const j=A[E];dt(j[0]+U*L,j[1]+U*L,j[2]+U*L)}}n.addGroup(G,r.length/3-G,0)}function O(){const G=r.length/3;let E=0;tt(z,E),E+=z.length;for(let j=0,at=M.length;j<at;j++){const $=M[j];tt($,E),E+=$.length}n.addGroup(G,r.length/3-G,1)}function tt(G,E){let j=G.length;for(;--j>=0;){const at=j;let $=j-1;$<0&&($=G.length-1);for(let ft=0,yt=L+f*2;ft<yt;ft++){const mt=U*ft,w=U*(ft+1),v=E+at+mt,H=E+$+mt,Q=E+$+w,rt=E+at+w;vt(v,H,Q,rt)}}}function it(G,E,j){c.push(G),c.push(E),c.push(j)}function dt(G,E,j){Ot(G),Ot(E),Ot(j);const at=r.length/3,$=b.generateTopUV(n,r,at-3,at-2,at-1);Z($[0]),Z($[1]),Z($[2])}function vt(G,E,j,at){Ot(G),Ot(E),Ot(at),Ot(E),Ot(j),Ot(at);const $=r.length/3,ft=b.generateSideWallUV(n,r,$-6,$-3,$-2,$-1);Z(ft[0]),Z(ft[1]),Z(ft[3]),Z(ft[1]),Z(ft[2]),Z(ft[3])}function Ot(G){r.push(c[G*3+0]),r.push(c[G*3+1]),r.push(c[G*3+2])}function Z(G){s.push(G.x),s.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _3(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new qa[r.type]().fromJSON(r)),new xo(n,t.options)}}const g3={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[r*3],L=t[r*3+1];return[new lt(s,a),new lt(o,c),new lt(l,L)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],L=t[n*3+1],h=t[n*3+2],u=t[r*3],d=t[r*3+1],m=t[r*3+2],_=t[s*3],f=t[s*3+1],p=t[s*3+2];return Math.abs(o-L)<Math.abs(a-l)?[new lt(a,1-c),new lt(l,1-h),new lt(u,1-m),new lt(_,1-p)]:[new lt(o,1-c),new lt(L,1-h),new lt(d,1-m),new lt(f,1-p)]}};function _3(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class hn extends be{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const L=[],h=new C,u=new C,d=[],m=[],_=[],f=[];for(let p=0;p<=n;p++){const b=[],x=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let D=0;D<=e;D++){const R=D/e;h.x=-t*Math.cos(r+R*s)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(r+R*s)*Math.sin(a+x*o),m.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),f.push(R+S,1-x),b.push(l++)}L.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const x=L[p][b+1],S=L[p][b],D=L[p+1][b],R=L[p+1][b+1];(p!==0||a>0)&&d.push(x,S,R),(p!==n-1||c<Math.PI)&&d.push(S,D,R)}this.setIndex(d),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Le extends be{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],L=new C,h=new C,u=new C;for(let d=0;d<=n;d++)for(let m=0;m<=r;m++){const _=m/r*s,f=d/n*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(_),h.y=(t+e*Math.cos(f))*Math.sin(_),h.z=e*Math.sin(f),o.push(h.x,h.y,h.z),L.x=t*Math.cos(_),L.y=t*Math.sin(_),u.subVectors(h,L).normalize(),c.push(u.x,u.y,u.z),l.push(m/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=r;m++){const _=(r+1)*d+m-1,f=(r+1)*(d-1)+m-1,p=(r+1)*(d-1)+m,b=(r+1)*d+m;a.push(_,f,b),a.push(f,p,b)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ue extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=n1,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mo extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class P1 extends Mo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ra=new oe,Nc=new C,Fc=new C;class v3{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nc),Fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fc),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class x3 extends v3{constructor(){super(new f1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ai extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new x3}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class I1 extends Mo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class yo{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Oc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Oc(){return performance.now()}const Bc=new oe;class So{constructor(t,e,n=0,r=1/0){this.ray=new lo(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bc),this}intersectObject(t,e=!0,n=[]){return ja(t,this,n,e),n.sort(zc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)ja(t[r],this,n,e);return n.sort(zc),n}}function zc(i,t){return i.distance-t.distance}function ja(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)ja(s[a],t,e,!0)}}class M3 extends go{constructor(t=10,e=10,n=4473924,r=8947848){n=new Zt(n),r=new Zt(r);const s=e/2,a=t/e,o=t/2,c=[],l=[];for(let u=0,d=0,m=-o;u<=e;u++,m+=a){c.push(-o,0,m,o,0,m),c.push(m,0,-o,m,0,o);const _=u===s?n:r;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const L=new be;L.setAttribute("position",new ie(c,3)),L.setAttribute("color",new ie(l,3));const h=new Bi({vertexColors:!0,toneMapped:!1});super(L,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);const y3={吞噬:"#e0e0da",造梦:"#c6c6bf",呼吸:"#adada6",景观:"#94948d",黑灯:"#7b7b74"},Yi='Outfit, "Microsoft YaHei", SimHei, sans-serif',S3="#e0483a";function E3(i,t){const e=document.getElementById("stage"),n=document.getElementById("overview"),r=new fo({canvas:e,antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new po;s.fog=new ur(1052691,34,92);const a=new Be(50,1,.1,200),o=new pe;s.add(o);function c(){return Promise.all(i.map(Z=>new Promise(G=>{if(!Z.img)return G(null);const E=new Image;E.onload=()=>G(E),E.onerror=()=>G(null),E.src=Z.img})))}function l(Z,G){Z.fillStyle=y3[G.cat]||"#888",Z.fillRect(14,14,50,20),Z.fillStyle="#111",Z.font=`900 13px ${Yi}`,Z.textAlign="center",Z.textBaseline="middle",Z.fillRect(20,20,8,8)}function L(Z,G,E,j,at,$,ft){Z.fillStyle="#e8e6df",Z.font=`900 ${j}px ${Yi}`,Z.textAlign="left",Z.textBaseline="alphabetic";const yt=[];let mt="";for(const w of G.title)if((w===`
`||Z.measureText(mt+w).width>ft)&&(yt.push(mt),mt=""),mt+=w,yt.length>=E)break;return mt&&yt.length<E&&yt.push(mt),yt.forEach((w,v)=>Z.fillText(w,16,$+v*at)),$+yt.length*at}function h(Z,G){const at=document.createElement("canvas");at.width=256,at.height=320;const $=at.getContext("2d");if(G){const yt=Math.max(256/G.width,320/G.height),mt=G.width*yt,w=G.height*yt;$.drawImage(G,(256-mt)/2,(320-w)/2,mt,w),$.fillStyle="rgba(20,20,18,.82)",$.fillRect(0,236,256,84),l($,Z),L($,Z,2,17,22,264,224),$.fillStyle="#9a9890",$.font=`600 11px ${Yi}`,$.fillText(`${Z.year||"——"} · ${Z.src}`,16,306)}else{$.fillStyle="#1e1e1c",$.fillRect(0,0,256,320);for(let H=0;H<400;H++)$.fillStyle=`rgba(255,255,255,${Math.random()*.02})`,$.fillRect(Math.random()*256,Math.random()*320,1,1);$.strokeStyle="#33332f",$.lineWidth=2,$.strokeRect(6,6,244,308),l($,Z);const yt=L($,Z,2,18,24,58,224),mt=(Z.excerpt||Z.content).replace(/\n/g," ").slice(0,120);$.fillStyle=S3,$.font=`600 14px ${Yi}`,$.textAlign="left";const w=[];let v="";for(const H of mt)if($.measureText(v+H).width>220&&(w.push(v),v=""),v+=H,w.length>=7)break;v&&w.length<7&&w.push(v),w.forEach((H,Q)=>$.fillText(H,18,yt+14+Q*22)),$.fillStyle="#6f6f67",$.font=`600 11px ${Yi}`,$.fillText(`${Z.year||"——"} · ${Z.src}`,16,306)}const ft=new dr(at);return ft.anisotropy=4,ft}const u=i.length;function d(Z){if(Z==="grid"){const $=Math.ceil(u/44);return i.map((ft,yt)=>{const mt=Math.floor(yt/44),w=yt%44,v=Math.min(44,u-mt*44),H=w/v*Math.PI*2+mt*.5,Q=(mt-($-1)/2)*3.35;return{pos:new C(Math.cos(H)*24,Q,Math.sin(H)*24),ry:Math.PI/2-H}})}const G=24;return i.map((E,j)=>{const at=j/(u-1),$=at*Math.PI*2*4;return{pos:new C(Math.cos($)*G,(at-.5)*38,Math.sin($)*G),ry:Math.PI/2-$}})}const m=new Fi(1.72,2.15),_=[];let f="grid",p=[];function b(Z,G){f=Z,p=d(Z),_.forEach((E,j)=>{E.userData.target=p[j].pos,E.userData.ryTarget=p[j].ry,G&&(E.position.copy(p[j].pos),E.rotation.set(0,p[j].ry,0))})}function x(Z){i.forEach((G,E)=>{const j=new Ln({map:h(G,Z[E]),transparent:!0,side:cn}),at=new kt(m,j);at.userData={item:G,sTarget:1,opacityTarget:1,dimmed:!1},o.add(at),_.push(at)}),b("grid",!0)}const S=document.querySelector(".mode-slider");document.querySelectorAll(".mode-btn").forEach(Z=>{Z.addEventListener("click",()=>{Z.dataset.mode!==f&&(document.querySelectorAll(".mode-btn").forEach(G=>G.classList.toggle("active",G===Z)),S.style.transform=Z.dataset.mode==="spiral"?"translateX(96px)":"translateX(0)",I&&ct(),b(Z.dataset.mode,!1),it=Z.dataset.mode==="spiral"?42:38)})});let D=0;function R(){const Z=n.getBoundingClientRect(),G=n.offsetHeight-window.innerHeight;D=G>0?Math.min(1,Math.max(0,-Z.top/G)):0}window.addEventListener("scroll",R,{passive:!0});const T=new So,P=new lt(-10,-10);let K=null;const g={x:0,y:0,tx:0,ty:0};e.addEventListener("pointermove",Z=>{const G=e.getBoundingClientRect();P.x=(Z.clientX-G.left)/G.width*2-1,P.y=-((Z.clientY-G.top)/G.height)*2+1,g.tx=(Z.clientX/window.innerWidth-.5)*2,g.ty=(Z.clientY/window.innerHeight-.5)*2}),e.addEventListener("pointerleave",()=>{P.set(-10,-10)});let M=0,k=0,A=null;e.addEventListener("pointerdown",Z=>{Z.button===1&&(Z.preventDefault(),A={x:Z.clientX},e.setPointerCapture(Z.pointerId))}),e.addEventListener("pointermove",Z=>{A&&Z.buttons&4&&(k+=(Z.clientX-A.x)*.005,A={x:Z.clientX})}),e.addEventListener("pointerup",Z=>{Z.button===1&&(A=null)}),e.addEventListener("auxclick",Z=>{Z.button===1&&Z.preventDefault()});const z=30,X=60;e.addEventListener("wheel",Z=>{Z.preventDefault(),Z.stopPropagation(),it=Math.min(X,Math.max(z,it+Z.deltaY*.028))},{passive:!1});const U={on:!1,px:0,py:0,pz:0,lx:0,ly:0,lz:0},Y=new C(0,0,0);let I=null;const et=Z=>{const G=Z.userData.target,E=new C(G.x,0,G.z);return E.lengthSq()>.001?E.normalize():new C(1,0,0)};function ot(Z){I=Z,U.on=!0,o.updateMatrixWorld(!0);const G=new C;Z.getWorldPosition(G);const E=new C(G.x,0,G.z).normalize();U.px=G.x+E.x*6.2,U.py=G.y,U.pz=G.z+E.z*6.2,U.lx=G.x,U.ly=G.y,U.lz=G.z,Z.userData.sTarget=1.9,_.forEach(j=>{j!==Z&&(j.userData.dimmed=!0,j.userData.opacityTarget=.55,j.userData.sTarget=1)}),t.open(Z.userData.item)}function ct(){I&&(I.userData.sTarget=1,_.forEach(Z=>{Z.userData.dimmed=!1,Z.userData.opacityTarget=1,Z.userData.sTarget=1,Z.material.color.setRGB(1,1,1)}),U.on=!1,I=null,t.close())}e.addEventListener("click",Z=>{K&&!I?(Z.stopPropagation(),ot(K)):I&&(Z.stopPropagation(),ct())}),window.addEventListener("keydown",Z=>{Z.key==="Escape"&&ct()}),t.onClose=ct;function _t(){const Z=e.clientWidth,G=e.clientHeight;r.setSize(Z,G,!1),a.aspect=Z/G,a.updateProjectionMatrix()}window.addEventListener("resize",_t),_t();const Wt=new yo;let J=0,O=.6,tt=38,it=38;const dt=new C,vt=new Zt(.42,.42,.44);function Ot(){requestAnimationFrame(Ot);const Z=Math.min(Wt.getDelta(),.05);if(g.x+=(g.tx-g.x)*.05,g.y+=(g.ty-g.y)*.05,U.on)a.position.x+=(U.px-a.position.x)*.08,a.position.y+=(U.py-a.position.y)*.08,a.position.z+=(U.pz-a.position.z)*.08,Y.lerp(new C(U.lx,U.ly,U.lz),.1),a.lookAt(Y);else{J+=Z*.12,o.rotation.y=J+D*Math.PI*2*1.6,o.position.y=(D-.5)*7,tt+=(it-tt)*.06,M+=(k-M)*.07;const j=O+M+g.x*.05;a.position.set(Math.sin(j)*tt+g.x*1.1,-g.y*.8,Math.cos(j)*tt),Y.lerp(new C(0,0,0),.08),a.lookAt(Y)}T.setFromCamera(P,a);const G=T.intersectObjects(_,!1)[0],E=G&&!I?G.object:null;E!==K&&(K=E,document.body.style.cursor=K?"pointer":"default"),_.forEach(j=>{const at=j.userData;dt.copy(at.target);const $=et(j);j===I?dt.addScaledVector($,3.2):j===K?dt.addScaledVector($,1.5):at.dimmed&&dt.addScaledVector($,-1.6),j.position.lerp(dt,.09),j.rotation.y+=(at.ryTarget-j.rotation.y)*.09,j.rotation.x+=(0-j.rotation.x)*.09;const ft=j.scale.x+(at.sTarget-j.scale.x)*.1;j.scale.setScalar(ft),j.material.opacity+=(at.opacityTarget-j.material.opacity)*.1,at.dimmed?j.material.color.lerp(vt,.1):j.material.color.lerp(new Zt(1,1,1),.1)}),r.render(s,a)}return c().then(Z=>{x(Z),window.__factory={project(G){const E=new C;_[G].getWorldPosition(E),E.project(a);const j=e.getBoundingClientRect();return{x:j.left+(E.x+1)/2*j.width,y:j.top+(1-E.y)/2*j.height}},hoverId:()=>K?K.userData.item.id:null,openedId:()=>I?I.userData.item.id:null},R(),Ot()}),{closeCard:ct}}function w3(){const i=document.getElementById("panel"),t=document.getElementById("panel-mask"),e=document.getElementById("panel-media"),n=document.getElementById("panel-tags"),r=document.getElementById("panel-title"),s=document.getElementById("panel-subquote"),a=document.getElementById("panel-content"),o=document.getElementById("panel-note"),c={onClose:null,open(L){e.className="panel-media",L.img?e.innerHTML=`<img class="pm-img" src="${L.img}" alt="" />`:L.excerpt?(e.classList.add("excerpt-on"),e.innerHTML='<div class="quote"></div>',e.querySelector(".quote").textContent=L.excerpt):(e.classList.add("excerpt-on"),e.innerHTML='<div class="quote red"></div>',e.querySelector(".quote").textContent=L.content.replace(/\n/g," ").slice(0,180)),n.innerHTML=`<span class="ptag">${L.src}</span>`+(L.year?`<span class="ptag">${L.year}</span>`:"")+`<span class="ptag">${L.media}</span>`,r.textContent=L.title,L.img&&L.excerpt?(s.textContent=L.excerpt,s.classList.add("show")):(s.textContent="",s.classList.remove("show")),a.textContent=L.content,o.textContent=L.note?"出处 / 备注："+L.note:"",i.classList.add("open"),t.classList.add("show")},close(){i.classList.remove("open"),t.classList.remove("show")}},l=()=>{c.close(),c.onClose&&c.onClose()};return document.getElementById("panel-close").addEventListener("click",l),t.addEventListener("click",l),c}function b3(i){if(!i)return;let t=0,e=0,n=null;i.addEventListener("pointerdown",s=>{s.button===1&&(s.preventDefault(),s.stopPropagation(),n={x:s.clientX,y:s.clientY,rx:t,ry:e},i.setPointerCapture(s.pointerId),i.style.cursor="grabbing")}),i.addEventListener("pointermove",s=>{!n||!(s.buttons&4)||(e=n.ry+(s.clientX-n.x)*.35,t=Math.max(-70,Math.min(70,n.rx-(s.clientY-n.y)*.25)),i.style.transform=`rotateX(${t}deg) rotateY(${e}deg)`)});const r=()=>{n=null,i.style.cursor="grab"};i.addEventListener("pointerup",s=>{s.button===1&&r()}),i.addEventListener("pointercancel",r),i.addEventListener("auxclick",s=>{s.button===1&&s.preventDefault()})}function T3(i){const t=document.getElementById("works-pop"),e=document.getElementById("wp-grid"),n={isOpen:()=>t.classList.contains("open"),open({num:r="",title:s="",sub:a="",desc:o="",items:c=[],hero:l="",heroFallback:L=""}){document.getElementById("wp-num").textContent=r,document.getElementById("wp-title").textContent=s,document.getElementById("wp-sub").textContent=a,document.getElementById("wp-desc").textContent=o;const h=document.getElementById("wp-hero");l?(h.innerHTML=`<div class="wp-hero-box"><img src="${l}" alt="" draggable="false"
            onerror="this.onerror=null;this.src='${L}';this.onerror=function(){this.closest('#wp-hero').classList.remove('show')}" /></div>
          <p class="wp-hero-hint">按住鼠标中键拖动 · 旋转轴测图</p>`,h.classList.add("show"),b3(h.querySelector("img"))):(h.innerHTML="",h.classList.remove("show")),e.innerHTML="",c.forEach(u=>{const d=document.createElement("div");d.className="bcard",d.innerHTML=(u.img?`<div class="bc-img"><img src="${u.img}" loading="lazy" alt="" /></div>`:"")+`<div class="bc-title"></div>
           <div class="bc-foot"><span>${u.year||"——"}</span><span>${u.src}</span></div>`,d.querySelector(".bc-title").textContent=u.title,d.addEventListener("click",()=>{i.open(u),document.getElementById("panel").scrollTop=0}),e.appendChild(d)}),t.classList.add("open")},close(){t.classList.remove("open")}};return document.getElementById("wp-close").addEventListener("click",()=>n.close()),t.addEventListener("click",r=>{r.target===t&&n.close()}),n}const In=[{num:"01",name:"烟囱与天际线",en:"CHIMNEY & SKYLINE",desc:"工厂最先被看见的部分——烟囱、冷却塔与轮廓线，是工业写在天空上的署名。",ids:[4,5,63,69,88,40,15,17,96,74,81,126,142,145],kw:/烟囱|冷却塔|天际线|剪影|轮廓|拂晓|风力|风车/},{num:"02",name:"屋顶之上",en:"ON THE ROOF",desc:"屋顶跑道、滑雪大跳台与筒仓——厂房之顶，是工厂最意想不到的再利用空间。",ids:[45,40,39,44,34,20,140,50],kw:/屋顶|跑道|大跳台|筒仓|天窗|谷仓|跳台|俯瞰/},{num:"03",name:"厂房与车间",en:"THE HALL",desc:"容纳生产的主体空间——车间、厂房与无尘盒子：人从这里被组织进生产。",ids:[51,12,99,60,65,72,76,90,85,89,54,25,43,29,42,23],kw:/车间|厂房|厂区|无尘|大楼|工坊|校舍|艺术中心/},{num:"04",name:"骨架与结构",en:"THE FRAME",desc:"钢骨、桁架与等轴测图解——支撑一切的、通常看不见的秩序。",ids:[7,46,50,6,8,10,14,16,67,98,78,49,48],kw:/钢构|钢架|骨架|框架|脚手架|速写|构成|等轴测|数据可视化|重建/},{num:"05",name:"地面与流水线",en:"THE FLOOR LINE",desc:"传送带、熔炉与机械韵律——地面的节拍器，定义了现代劳动的速度。",ids:[9,41,18,2,11,52,53,61,66,83,33,152,162,163],kw:/流水线|生产线|传送带|机器人|黑灯|自动化|装配|熔炉|钢水|轧|锻|铸造|活塞/},{num:"06",name:"地下与基础",en:"THE FOUNDATION",desc:"基坑、矿井与培养舱——工厂向地下的延伸，和它对“基础”的重新定义。",ids:[127,116,37,82,79,49,48,121],kw:/基坑|地基|矿井|煤矿|矿山|培养舱|墓|埋葬|下水道|地下机房/}],Lt={plate:new ue({color:16185596,roughness:.92,metalness:.04}),dark:new ue({color:9148073,roughness:.85,metalness:.12}),silver:new ue({color:14278633,roughness:.38,metalness:.55}),frame:new ue({color:11450827,roughness:.5,metalness:.4}),iron:new ue({color:6121596,roughness:.6,metalness:.35}),glow:new ue({color:12900846,roughness:.6,emissive:8365e3,emissiveIntensity:.55}),smoke:new ue({color:16777215,roughness:1,transparent:!0,opacity:.5}),belt:new ue({color:6714250,roughness:.95})},Tt=(i,t,e,n)=>new kt(new he(i,t,e),n),A3=new Bi({color:6122885,transparent:!0,opacity:.5});function de(i,t){const e=new go(new Qu(i.geometry,24),t==null?A3:new Bi({color:9408393,transparent:!0,opacity:t}));return e.position.copy(i.position),e.rotation.copy(i.rotation),e.scale.copy(i.scale),[i,e]}function Qa(i,t,e,n,r,s,a=.34){const o=n-t,c=r-e,l=Math.hypot(o,c),L=Math.max(2,Math.round(l/.55)),h=Tt(l,.05,.05,Lt.silver);h.position.set((t+n)/2,s+a,(e+r)/2),h.rotation.y=-Math.atan2(c,o),i.add(h);for(let u=0;u<=L;u++){const d=Tt(.04,a,.04,Lt.silver);d.position.set(t+o*(u/L),s+a/2,e+c*(u/L)),i.add(d)}}const R3=new Bi({color:10334406,transparent:!0,opacity:.4});function gs(i,t,e,n){const r=[];for(let o=-t/2+1;o<t/2;o+=1)r.push(o,0,-e/2,o,0,e/2);for(let o=-e/2+1;o<e/2;o+=1)r.push(-t/2,0,o,t/2,0,o);const s=new be;s.setAttribute("position",new ie(r,3));const a=new go(s,R3);a.position.y=n,i.add(a)}function C3(i,t,e,n,r,s=1){for(let c=0;c<9;c++){const l=Tt(.5,.05,.24,Lt.dark);l.position.set(t,n+(c+.5)*(r/9),e+s*(c*.22)),i.add(l)}const o=Math.hypot(r,9*.22);[-.24,.24].forEach(c=>{const l=Tt(.06,o,.08,Lt.frame);l.position.set(t+c,n+r/2,e+s*9*.11),l.rotation.x=s*Math.atan2(9*.22,r),i.add(l)})}function er(i,t,e,n=.36){const r=new kt(new Pt(.09,.11,.42,8),Lt.iron);r.position.set(t,n+.21,e);const s=new kt(new hn(.09,10,8),Lt.iron);s.position.set(t,n+.52,e),i.add(r,s)}const Yt=9,Bt=7;function P3(){const i=new pe;de(Tt(Yt,.3,Bt,Lt.plate)).forEach(a=>i.add(a)),gs(i,Yt,Bt,.151);const t=new kt(new Pt(.32,.4,2.8,20),Lt.dark);t.position.set(2.4,1.55,-1.2),de(t).forEach(a=>i.add(a)),[.7,1.4,2.1].forEach(a=>{const o=new kt(new Le(.345+(2.8-a)*.012,.022,8,22),Lt.silver);o.rotation.x=Math.PI/2,o.position.set(2.4,a,-1.2),i.add(o)});for(let a=0;a<7;a++){const o=Tt(.2,.03,.03,Lt.silver);o.position.set(2.4,.5+a*.34,-.82),i.add(o)}de(Tt(.9,.22,.9,Lt.silver)).forEach(a=>{a.position.set(2.4,3,-1.2),i.add(a)}),[.5,.9,.65,1.2,.75,.55,1].forEach((a,o)=>{const c=Tt(.7+o%3*.25,a,.8,Lt.dark);c.position.set(-3.6+o*1.1,.15+a/2,1.6+o%2*.7),de(c,.4).forEach(l=>i.add(l));for(let l=0;l<3;l++){const L=Tt(.12,.1,.02,Lt.glow);L.position.set(c.position.x-.2+l*.2,.3+a*.5,c.position.z+.41),i.add(L)}});const n=[];for(let a=0;a<=8;a++){const o=a/8;n.push(new lt(.28+Math.sin(o*Math.PI)*.24,o*1.1))}const r=new kt(new rr(n,18),Lt.dark);r.position.set(-3.2,.15,-1.8),de(r,.35).forEach(a=>i.add(a)),de(Tt(2.4,.16,.5,Lt.frame)).forEach(a=>{a.position.set(-.6,.5,-1.6),i.add(a)}),Qa(i,-Yt/2+.1,-Bt/2+.1,Yt/2-.1,-Bt/2+.1,.15),[-3.6,-.4].forEach(a=>{const o=new kt(new Pt(.035,.045,2.2,8),Lt.dark);o.position.set(a,1.25,2.6),i.add(o);const c=Tt(.5,.04,.04,Lt.dark);c.position.set(a,2.15,2.6),i.add(c)});const s=new kt(new Pt(.012,.012,3.2,6),Lt.silver);return s.rotation.z=Math.PI/2,s.position.set(-2,2.08,2.6),i.add(s),[[0,0,0,.34],[.3,.5,-.15,.44],[.7,1.05,-.3,.55]].forEach(([a,o,c,l])=>{const L=new kt(new hn(l,14,12),Lt.smoke);L.position.set(2.4+a,3.3+o,-1.2+c),i.add(L)}),i}function I3(){const i=new pe;de(Tt(Yt,.28,Bt,Lt.plate)).forEach(a=>i.add(a)),gs(i,Yt,Bt,.141),[-2.2,0,2.2].forEach(a=>{const o=Tt(1.5,.14,2.2,Lt.glow);o.position.set(a,.2,-.6),de(o,.7).forEach(c=>i.add(c)),[-.5,0,.5].forEach(c=>{const l=Tt(.05,.18,2.2,Lt.frame);l.position.set(a+c,.22,-.6),i.add(l)})}),[[0,-Bt/2+.08,Yt,.1],[0,Bt/2-.08,Yt,.1]].forEach(([a,o,c])=>{const l=Tt(c,.3,.08,Lt.silver);l.position.set(a,.28,o),i.add(l),Qa(i,a-c/2,o,a+c/2,o,.42,.26)}),[-Yt/2+.08,Yt/2-.08].forEach(a=>{const o=Tt(.08,.3,Bt,Lt.silver);o.position.set(a,.28,0),i.add(o),Qa(i,a,-Bt/2,a,Bt/2,.42,.26)});const t=new kt(new Le(1.7,.045,8,60),Lt.frame);t.rotation.x=-Math.PI/2,t.position.set(0,.18,.4),t.scale.set(1.5,1,1),i.add(t),[[-3.4,2.2],[-2.8,2.5]].forEach(([a,o])=>{const c=new kt(new Pt(.16,.2,.5,14),Lt.dark);c.position.set(a,.5,o),de(c,.4).forEach(L=>i.add(L));const l=new kt(new zi(.24,.18,14),Lt.silver);l.position.set(a,.83,o),i.add(l)});const e=Tt(.9,.7,.8,Lt.dark);e.position.set(3.4,.5,-2.4),de(e,.45).forEach(a=>i.add(a));const n=Tt(.4,.5,.04,Lt.glow);n.position.set(3.4,.45,-1.98),i.add(n);const r=new kt(new Pt(.13,.13,5.4,12),Lt.dark);r.rotation.z=Math.PI/2,r.position.set(.4,.42,2.5),de(r,.3).forEach(a=>i.add(a));const s=new kt(new Le(.2,.13,8,12,Math.PI/2),Lt.dark);return s.position.set(3.05,.55,2.5),s.rotation.z=Math.PI/2,i.add(s),[-1.9,-1.3,-.7,.7,1.3,1.9].forEach(a=>{const o=Tt(Yt-.6,.04,.06,Lt.frame);o.position.set(0,.16,a),i.add(o)}),i}function D3(){const i=new pe;de(Tt(Yt,.3,Bt,Lt.plate)).forEach(L=>i.add(L)),gs(i,Yt,Bt,.151);const t=1.9,e=.12;[[Yt,t,e,0,-Bt/2+e/2],[Yt,t,e,0,Bt/2-e/2],[e,t,Bt,-Yt/2+e/2,0],[e,t,Bt,Yt/2-e/2,0]].forEach(([L,h,u,d,m])=>{const _=Tt(L,h,u,Lt.dark);_.position.set(d,h/2,m),de(_,.45).forEach(f=>i.add(f))});for(let L=0;L<5;L++){const h=-Yt/2+.9+L*(Yt-1.8)/4;[-1.5,1.5].forEach(u=>{const d=Tt(.13,t,.13,Lt.frame);d.position.set(h,t/2,u),de(d,.35).forEach(m=>i.add(m))})}[-2.6,-.9,.9,2.6].forEach(L=>{const h=Tt(1,.55,.04,Lt.glow);h.position.set(L,1.15,-Bt/2+e+.02);const u=h.clone();u.position.z=Bt/2-e-.02,i.add(h,u),[-.33,0,.33].forEach(d=>{const m=Tt(.04,.55,.05,Lt.frame);m.position.set(L+d,1.15,-Bt/2+e+.03);const _=m.clone();_.position.z=Bt/2-e-.03,i.add(m,_)})});const r=Tt(.58,1.35,.06,Lt.glow);r.position.set(-.3,.82,Bt/2-e-.03);const s=r.clone();s.position.x=.3;const a=Tt(1.3,.08,.1,Lt.silver);a.position.set(0,1.53,Bt/2-e-.03),i.add(r,s,a);const o=Tt(Yt,.14,.3,Lt.frame);o.position.set(0,t+.05,0),i.add(o);for(let L=-3.85;L<=3.85;L+=1.1){const h=Tt(.03,t-.1,.02,Lt.frame);h.position.set(L,t/2,-Bt/2+e+.01);const u=h.clone();u.position.z=Bt/2-e-.01,i.add(h,u)}[-2.2,-1.1,0,1.1,2.2].forEach(L=>{const h=Tt(Yt-.3,.05,.07,Lt.frame);h.position.set(0,t+.16,L),i.add(h)}),[-2.4,-.8,.8,2.4].forEach(L=>{const h=new kt(new Le(Bt/2-.15,.05,6,24,Math.PI),Lt.frame);h.rotation.y=Math.PI/2,h.position.set(L,t+.12,0),i.add(h)});const c=.07,l=1.35;return[[-2.9,-Bt/2+e,-2.9,-.6],[-1.3,-Bt/2+e,-1.3,-1.4],[2.2,1.2,2.2,Bt/2-e],[-3.4,1.6,-1.6,1.6]].forEach(([L,h,u,d])=>{const m=u-L,_=d-h,f=Tt(Math.max(Math.abs(m),c),l,Math.max(Math.abs(_),c),Lt.plate);f.position.set((L+u)/2,l/2,(h+d)/2),de(f,.5).forEach(p=>i.add(p))}),C3(i,-3.9,-2.6,.15,t,1),er(i,1.4,.6),er(i,-1.8,-.8),i}function U3(){const i=new pe,t=1.9;for(let e=0;e<5;e++){const n=-Yt/2+.6+e*(Yt-1.2)/4;[-Bt/2+.5,Bt/2-.5].forEach(s=>{const a=Tt(.14,t,.14,Lt.frame);a.position.set(n,t/2,s),de(a,.4).forEach(c=>i.add(c));const o=Tt(.3,.08,.3,Lt.dark);o.position.set(n,.04,s),i.add(o)});const r=Tt(.08,Math.hypot(Bt-1,2.2),.08,Lt.frame);if(r.position.set(n,t+.55,0),r.rotation.x=Math.atan2(2.2,Bt-1)*(e%2?1:-1),i.add(r),e<4){const s=-Yt/2+.6+(e+1)*(Yt-1.2)/4;[Math.PI/5.2,-Math.PI/5.2].forEach(a=>{const o=Tt(s-n,.06,.06,Lt.silver);o.position.set((n+s)/2,t*.5,-Bt/2+.5),o.rotation.z=a,i.add(o)})}}return[-Bt/2+.5,Bt/2-.5].forEach(e=>{const n=Tt(Yt,.16,.16,Lt.frame);n.position.set(0,t,e),i.add(n);const r=Tt(Yt,.12,.12,Lt.silver);r.position.set(0,t+1.1,0),i.add(r)}),[-2.6,-1.3,0,1.3,2.6].forEach(e=>{const n=Tt(.07,.07,Bt-.6,Lt.dark);n.position.set(e,t+.62,0),i.add(n)}),[.5,-.5].forEach(e=>{const n=Tt(.06,.06,Bt-.8,Lt.silver);n.position.set(0,t+.62,0),n.rotation.x=e,i.add(n)}),[-3.4,0,3.4].forEach(e=>[-2,2].forEach(n=>{const r=Tt(.5,.3,.5,Lt.dark);r.position.set(e,-.15,n),de(r,.35).forEach(s=>i.add(s))})),i}function N3(){const i=new pe;de(Tt(Yt,.3,Bt,Lt.plate)).forEach(x=>i.add(x)),gs(i,Yt,Bt,.151);const t=Tt(6.2,.16,1.3,Lt.belt);t.position.set(-.4,.24,0),i.add(t),[-.7,.7].forEach(x=>{const S=Tt(6.2,.1,.06,Lt.frame);S.position.set(-.4,.36,x),i.add(S)});for(let x=0;x<12;x++){const S=new kt(new Pt(.09,.09,1.34,10),Lt.frame);S.rotation.x=Math.PI/2,S.position.set(-3.3+x*.53,.36,0),i.add(S)}const e=Tt(1.5,.35,.55,Lt.dark);e.position.set(2.6,.48,-2),de(e,.4).forEach(x=>i.add(x));const n=Tt(.4,.5,.55,Lt.frame);n.position.set(1.95,.62,-2),i.add(n);const r=new kt(new Pt(.16,.16,.22,16),Lt.silver);r.rotation.z=Math.PI/2,r.position.set(2.25,.6,-2),i.add(r);const s=Tt(.7,.25,.6,Lt.dark);s.position.set(2.6,.42,1.4),i.add(s),[-.25,.25].forEach(x=>{const S=Tt(.09,1,.09,Lt.frame);S.position.set(2.6+x,.95,1.4),i.add(S)});const a=Tt(.7,.16,.24,Lt.frame);a.position.set(2.6,1.5,1.4),i.add(a);const o=new kt(new Pt(.09,.09,.4,12),Lt.silver);o.position.set(2.6,1.2,1.4),i.add(o);const c=Tt(.7,.6,.7,Lt.dark);c.position.set(3.8,.6,-.4),de(c,.35).forEach(x=>i.add(x));const l=Tt(.55,.42,.55,Lt.dark);l.position.set(4,.5,.6),i.add(l);const L=Tt(.9,.08,.9,Lt.frame);L.position.set(-3.6,.38,2.3),i.add(L),[[-3.75,2.15],[-3.45,2.45],[-3.6,2.3]].forEach(([x,S],D)=>{const R=Tt(.34,.3,.34,Lt.dark);R.position.set(x,.57+(D===2?.31:0),S),i.add(R)}),[[-3,2.9,6,.05],[.5,-2.9,5,.05]].forEach(([x,S,D,R])=>{const T=Tt(D,.012,R,Lt.silver);T.position.set(x,.36,S),i.add(T)});const h=Tt(.5,.5,.5,Lt.dark);h.position.set(-4,.55,-2.2),i.add(h);const u=Tt(.16,1.3,.16,Lt.silver);u.position.set(-4,1.4,-2.2),u.rotation.z=.4,i.add(u);const d=Tt(.12,1,.12,Lt.silver);d.position.set(-3.55,2.15,-2.2),d.rotation.z=-.9,i.add(d);const m=Tt(.2,.12,.2,Lt.frame);m.position.set(-3,2.2,-2.2),i.add(m),[-3.2,3.2].forEach(x=>[-2.6,2.6].forEach(S=>{const D=Tt(.12,2,.12,Lt.frame);D.position.set(x,1.36,S),i.add(D)})),[-2.6,2.6].forEach(x=>{const S=Tt(6.6,.08,.12,Lt.silver);S.position.set(0,2.4,x),i.add(S)});const _=Tt(.3,.18,5.4,Lt.dark);_.position.set(.8,2.52,0),de(_,.35).forEach(x=>i.add(x));const f=Tt(.24,.2,.24,Lt.frame);f.position.set(.8,2.36,-1.2),i.add(f);const p=new kt(new Pt(.012,.012,.8,6),Lt.silver);p.position.set(.8,1.9,-1.2),i.add(p);const b=new kt(new Le(.07,.02,6,12,Math.PI*1.4),Lt.silver);return b.position.set(.8,1.48,-1.2),b.rotation.z=Math.PI*.8,i.add(b),er(i,-1.2,1.8),er(i,3.2,.4),er(i,.4,-1.9),i}function F3(){const i=new pe,t=Tt(Yt,.34,Bt,Lt.plate),e=Tt(Yt-1.2,.3,Bt-1.2,Lt.dark);e.position.y=-.34;const n=Tt(Yt+.8,.5,Bt+.8,new ue({color:11049606,roughness:1}));n.position.y=-.72,de(t,.4).forEach(o=>i.add(o)),de(e,.35).forEach(o=>i.add(o)),i.add(n);for(let o=0;o<4;o++)for(let c=0;c<3;c++){const l=new kt(new Pt(.11,.09,1.1,10),Lt.frame);l.position.set(-3+o*2,-1.45,-2+c*2),i.add(l);const L=Tt(.26,.1,.26,Lt.dark);L.position.set(-3+o*2,-.98,-2+c*2),i.add(L)}const r=Tt(6.5,.5,1.1,Lt.belt);r.position.set(0,-.85,.8),i.add(r),[-2.2,0,2.2].forEach(o=>{const c=new kt(new Le(.55,.07,8,20,Math.PI),Lt.frame);c.position.set(o,-.6,.8),i.add(c)}),[-.5,-.9].forEach((o,c)=>{const l=new kt(new Pt(.09,.09,8,10),Lt.silver);l.rotation.z=Math.PI/2,l.position.set(0,o,-1.6-c*.35),i.add(l)}),[1.8,-1.2].forEach(o=>{const c=new kt(new Le(.16,.03,8,18),Lt.frame);c.rotation.x=Math.PI/2,c.position.set(o,-.42,-1.6),i.add(c);const l=new kt(new Pt(.03,.03,.2,8),Lt.silver);l.position.set(o,-.52,-1.6),i.add(l)});const s=Tt(5.5,.06,.3,Lt.dark);s.position.set(0,-1.15,-2.6),i.add(s);for(let o=0;o<4;o++){const c=new kt(new Pt(.025,.025,5.5,6),Lt.glow);c.rotation.z=Math.PI/2,c.position.set(0,-1.1,-2.7+o*.07),i.add(c)}const a=new kt(new Pt(.3,.3,.06,18),Lt.dark);a.position.set(3.2,-.68,2.4),i.add(a);for(let o=0;o<4;o++){const c=Tt(.26,.03,.03,Lt.silver);c.position.set(-3.9,-.9-o*.22,2.9),i.add(c)}return i}const O3=[P3,I3,D3,U3,N3,F3];function B3(i,t){const e=document.getElementById("bones"),n=document.getElementById("bones-canvas"),r=document.getElementById("bones-tip"),s=document.getElementById("bones-list");if(!e||!n)return;const a=new Map(i.map(O=>[O.id,O])),o=In.map(O=>{const tt=[],it=new Set;return O.ids.forEach(dt=>{const vt=a.get(dt);vt&&!it.has(vt.id)&&(it.add(vt.id),tt.push(vt))}),i.forEach(dt=>{!it.has(dt.id)&&O.kw.test(dt.title)&&(it.add(dt.id),tt.push(dt))}),tt}),c=o.map(O=>(O.find(tt=>tt.img)||{}).img||""),l=new fo({canvas:n,antialias:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.shadowMap.enabled=!0,l.shadowMap.type=Vc;const L=new po;L.background=new Zt(724500),L.fog=new ur(724500,46,105);const h=new Be(45,1,.1,200);h.position.set(12.5,9.5,12.5),h.lookAt(0,0,0),L.add(new I1(16777215,.4)),L.add(new P1(11452376,1843758,.8));const u=new Ai(16777215,1.2);u.position.set(10,20,8),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),u.shadow.camera.left=-14,u.shadow.camera.right=14,u.shadow.camera.top=14,u.shadow.camera.bottom=-14,u.shadow.camera.far=60,u.shadow.bias=-4e-4,L.add(u);const d=new Ai(9417949,.55);d.position.set(-10,8,-12),L.add(d);const m=new Ai(7505571,.4);m.position.set(-12,9,12),L.add(m);const _=new pe;L.add(_);const f=new kt(new sr(46,64),new ue({color:1053983,roughness:1}));f.rotation.x=-Math.PI/2,f.position.y=-9.35,f.receiveShadow=!0,L.add(f);const p=new M3(90,90,2766928,1712948);p.position.y=-9.33,p.material.transparent=!0,p.material.opacity=.6,L.add(p);const b=[6.9,4.2,1.5,-1.2,-3.9,-6.6],x=[],S=[];O3.forEach((O,tt)=>{const it=O();it.position.y=b[tt],it.userData={i:tt,yBase:b[tt],lift:0,liftT:0},it.traverse(vt=>{vt.isMesh&&vt.material&&vt.material.transparent!==!0&&(vt.castShadow=!0,vt.receiveShadow=!0)}),_.add(it),x.push(it);const dt=new kt(new he(Yt+.8,2.6,Bt+.8),new Ln({transparent:!0,opacity:0,depthWrite:!1}));dt.position.y=b[tt]+.9,dt.userData.i=tt,_.add(dt),S.push(dt)}),[[-Yt/2-.4,-Bt/2-.4],[Yt/2+.4,-Bt/2-.4],[-Yt/2-.4,Bt/2+.4],[Yt/2+.4,Bt/2+.4]].forEach(([O,tt])=>{const it=new kt(new Pt(.02,.02,19,6),new Ln({color:2898514}));it.position.set(O,0,tt),_.add(it)});function D(O,tt){const it=document.createElement("canvas");it.width=512,it.height=128;const dt=it.getContext("2d");dt.fillStyle="rgba(255,255,255,.96)",dt.fillRect(6,24,500,76),dt.strokeStyle="#c3cfdd",dt.lineWidth=3,dt.strokeRect(7.5,25.5,497,73),dt.fillStyle="#6f9fd8",dt.fillRect(7.5,25.5,10,73),dt.fillStyle="#33415c",dt.font='600 38px Outfit, "Microsoft YaHei", SimHei, sans-serif',dt.textAlign="center",dt.textBaseline="middle",dt.fillText(O,266,62),dt.fillStyle="#8496ad",dt.font="500 21px Outfit, sans-serif",dt.fillText(tt,256,116);const vt=new dr(it),Ot=new M1(new mo({map:vt,transparent:!0,depthTest:!1}));return Ot.scale.set(4.6,1.15,1),Ot.renderOrder=10,Ot}x.forEach((O,tt)=>{const it=D(`${In[tt].num} ${In[tt].name}`,In[tt].en);it.position.set(-4.5-3.3,.25,0),it.userData.i=tt,O.add(it);const dt=new be().setFromPoints([new C(-4.5-1.05,.25,0),new C(-4.5-.15,.25,0)]),vt=new y1(dt,new Bi({color:9347770}));vt.renderOrder=9,O.add(vt);const Ot=new kt(new hn(.05,10,8),new Ln({color:7315416}));Ot.position.set(-4.5-.15,.25,0),Ot.renderOrder=9,O.add(Ot)}),s.innerHTML=In.map((O,tt)=>`<button class="bl-item" data-i="${tt}">
      <span class="bli-num">${O.num}</span>
      <span class="bli-name">${O.name}</span>
      <span class="bli-en">${O.en}</span>
    </button>`).join("");const R=new So,T=new lt(-10,-10),P={x:0,y:0,tx:0,ty:0};let K=-1,g=0,M=0;const k={azim:0,azimT:0,elev:.4,elevT:.4,radius:25,radiusT:25},A=16,z=38,X=.08,U=1.1;let Y=null;n.addEventListener("pointerdown",O=>{O.button===1&&(O.preventDefault(),Y={x:O.clientX,y:O.clientY},n.setPointerCapture(O.pointerId))}),n.addEventListener("pointermove",O=>{Y&&O.buttons&4&&(k.azimT+=(O.clientX-Y.x)*.006,k.elevT=Math.min(U,Math.max(X,k.elevT+(Y.y-O.clientY)*.004)),Y={x:O.clientX,y:O.clientY})}),n.addEventListener("pointerup",O=>{O.button===1&&(Y=null)}),n.addEventListener("auxclick",O=>{O.button===1&&O.preventDefault()}),n.addEventListener("wheel",O=>{O.preventDefault(),O.stopPropagation(),k.radiusT=Math.min(z,Math.max(A,k.radiusT+O.deltaY*.02))},{passive:!1});function I(O){O!==K&&(K=O,x.forEach(tt=>{tt.userData.liftT=tt.userData.i===O?.5:0}),s.querySelectorAll(".bl-item").forEach(tt=>tt.classList.toggle("hot",+tt.dataset.i===O)),document.body.style.cursor=O>=0?"pointer":"default",O>=0&&c[O]?(r.innerHTML=`<img src="${xe}images/bones/axo-${O+1}.png" onerror="this.onerror=null;this.src='${c[O]}'" alt="" /><div class="bt-text"><b>${In[O].num} ${In[O].name}</b><span>悬停查看 · 点击调出 ${o[O].length} 条相关作品</span></div>`,r.classList.add("show")):r.classList.remove("show"))}n.addEventListener("pointermove",O=>{const tt=n.getBoundingClientRect();T.x=(O.clientX-tt.left)/tt.width*2-1,T.y=-((O.clientY-tt.top)/tt.height)*2+1,P.tx=(O.clientX/window.innerWidth-.5)*2,P.ty=(O.clientY/window.innerHeight-.5)*2,g=O.clientX,M=O.clientY}),n.addEventListener("pointerleave",()=>{T.set(-10,-10),I(-1)});function et(O){const tt=In[O];t.open({num:tt.num,title:tt.name,sub:`${tt.en} · ${o[O].length} 条相关档案`,desc:tt.desc,items:o[O],hero:`${xe}images/bones/axo-${O+1}.png`,heroFallback:c[O]})}n.addEventListener("click",O=>{K>=0&&(O.stopPropagation(),et(K))}),s.querySelectorAll(".bl-item").forEach(O=>{const tt=+O.dataset.i;O.addEventListener("mouseenter",()=>I(tt)),O.addEventListener("click",it=>{it.stopPropagation(),et(tt)})}),s.addEventListener("mouseleave",()=>I(-1));function ot(){const O=e.clientWidth,tt=e.clientHeight;l.setSize(O,tt,!1),h.aspect=O/tt,h.updateProjectionMatrix()}window.addEventListener("resize",ot),ot();let ct=!0;new IntersectionObserver(O=>{ct=O[0].isIntersecting},{threshold:.05}).observe(e);const _t=new yo;let Wt=Math.PI/4;function J(){if(requestAnimationFrame(J),!ct)return;const O=Math.min(_t.getDelta(),.05);Wt+=O*.1,P.x+=(P.tx-P.x)*.05,P.y+=(P.ty-P.y)*.05,_.rotation.y=Wt,k.azim+=(k.azimT-k.azim)*.08,k.elev+=(k.elevT-k.elev)*.08,k.radius+=(k.radiusT-k.radius)*.08;const tt=k.azim+P.x*.12,it=Math.cos(k.elev);h.position.set(Math.sin(tt)*it*k.radius,Math.sin(k.elev)*k.radius-P.y*.9,Math.cos(tt)*it*k.radius),h.lookAt(0,-.3,0),R.setFromCamera(T,h);const dt=R.intersectObjects(S,!1)[0];I(dt?dt.object.userData.i:-1),x.forEach(vt=>{vt.userData.lift+=(vt.userData.liftT-vt.userData.lift)*.1,vt.position.y=vt.userData.yBase+vt.userData.lift}),S.forEach(vt=>{vt.position.y=x[vt.userData.i].position.y+.9}),K>=0&&(r.style.left=Math.min(g+22,window.innerWidth-330)+"px",r.style.top=Math.min(Math.max(M-60,76),window.innerHeight-180)+"px"),l.render(L,h)}J()}const kc='Outfit, "Microsoft YaHei", SimHei, sans-serif',Hc=[{name:"齿轮",en:"GEAR",model:"gear",ids:[9,135,123,152],kw:/流水线|韵律|节拍|自动钢琴|机器与狼|泰勒/,desc:"传动的原点——节拍、韵律与不可停止的循环。"},{name:"活塞",en:"PISTON",model:"piston",ids:[18,2,3],kw:/活塞|金属|往复|冲程/,desc:"往复运动的心脏——把爆炸翻译成直线。"},{name:"钢水包",en:"LADLE",model:"ladle",ids:[11,52,66,71,83],kw:/钢水|熔化|熔炉|出钢|锻铁|炉/,desc:"盛装一千两百度——炉光是一间车间唯一的太阳。"},{name:"焊枪",en:"WELDER",model:"torch",ids:[64,11],kw:/电焊|焊接|弧光|火花|钢水/,desc:"工人自制的小太阳——弧光是车间里的手造星辰。"},{name:"滚筒",en:"ROLLER",model:"roller",ids:[9,41,162],kw:/传送带|流水线|生产线|拣货|滚筒|黑灯/,desc:"不停转的表面——东西在上面移动，人在旁边重复。"},{name:"烟囱管",en:"STACK",model:"stack",ids:[4,17,15],kw:/烟囱|发电厂|废气|烟雾/,desc:"伸向天空的排气管——工厂对天空的署名。"},{name:"阀门",en:"VALVE",model:"valve",ids:[116,138,148],kw:/管道|阀门|下水道|地下|咽喉/,desc:"控制流动的开关——工业区看不见的手。"},{name:"仪表",en:"GAUGE",model:"gauge",ids:[10,8,178,196],kw:/数据可视化|仪表盘|NeRF|算法|数字|监控/,desc:"车间的眼睛——把轰鸣翻译成数字。"},{name:"螺栓",en:"BOLT",model:"bolt",ids:[3,24,75],kw:/锈蚀|腐蚀|碎片|肌理|表皮|丰碑/,desc:"最小的连接件——锈蚀之后，它成了时间的铭文。"},{name:"锈板",en:"RUST",model:"plate",ids:[3,75,87,125],kw:/锈蚀|锈|腐蚀|夕阳工业|废墟|遗迹/,desc:"氧化的表面——铁皮用自己的化学反应作画。"}],nn={width:10.6,zNear:16,zFar:-80},qr=[-3.9,-2,0,2,3.9],gt={steel:new ue({color:11053232,metalness:.72,roughness:.3}),polished:new ue({color:13948894,metalness:.9,roughness:.16}),darkSteel:new ue({color:6052964,metalness:.62,roughness:.42}),iron:new ue({color:4013380,metalness:.45,roughness:.58}),brass:new ue({color:11768400,metalness:.7,roughness:.32}),copper:new ue({color:11103042,metalness:.75,roughness:.35}),rust:new ue({color:9065014,metalness:.2,roughness:.92}),rustDark:new ue({color:6044196,metalness:.15,roughness:1})},ut=(i,t,e=0,n=0,r=0)=>{const s=new kt(i,t);return s.position.set(e,n,r),s};function z3(){const i=new pe,t=16,e=.78,n=.62,r=.18,s=new T1;for(let u=0;u<=t*2;u++){const d=u/(t*2)*Math.PI*2,m=u%2===0?e:n,_=Math.cos(d)*m,f=Math.sin(d)*m;u===0?s.moveTo(_,f):s.lineTo(_,f)}const a=new Ya;a.absarc(0,0,r,0,Math.PI*2,!0),s.holes.push(a);const o=new xo(s,{depth:.24,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2});o.center();const c=ut(o,gt.steel);c.rotation.y=.4,i.add(c),i.add(ut(new Pt(.2,.2,.4,20),gt.darkSteel,0,0,.1));for(let u=0;u<4;u++){const d=ut(new he(.68,.09,.1),gt.darkSteel,0,0,.12);d.rotation.z=u/4*Math.PI,i.add(d)}const l=ut(new Pt(.11,.11,.56,14),gt.polished,0,0,.28);l.rotation.x=Math.PI/2,i.add(l);const L=new Pt(.3,.3,.14,24),h=ut(L,gt.brass,.02,-.02,-.28);h.rotation.x=Math.PI/2,i.add(h);for(let u=0;u<10;u++){const d=u/10*Math.PI*2,m=ut(new he(.07,.07,.14),gt.brass,Math.cos(d)*.32,Math.sin(d)*.32-.02,-.28);m.rotation.z=d,i.add(m)}return i.userData.spinAxis="z",i}function k3(){const i=new pe;i.add(ut(new Pt(.4,.4,.52,32),gt.polished,0,.1,0)),i.add(ut(new Pt(.42,.42,.1,32),gt.darkSteel,0,.4,0));const t=ut(new Pt(.3,.3,.03,24),gt.iron,0,.46,0);i.add(t);for(let s=0;s<3;s++)i.add(ut(new Le(.402,.022,8,36),gt.steel,0,.02+s*.09,0)).children[i.children.length-1].rotation.x=Math.PI/2;const e=ut(new Pt(.08,.08,.9,16),gt.polished,0,-.18,0);e.rotation.z=Math.PI/2,i.add(e),[-.42,.42].forEach(s=>{const a=ut(new Le(.085,.014,6,18),gt.darkSteel,s,-.18,0);a.rotation.y=Math.PI/2,i.add(a)});const n=ut(new Pt(.09,.13,.85,14),gt.steel,0,-.72,0);n.rotation.z=.12,i.add(n);const r=ut(new Pt(.17,.17,.16,20),gt.darkSteel,-.1,-1.1,0);return r.rotation.z=Math.PI/2,i.add(r),[-.2,.06].forEach(s=>{const a=ut(new Pt(.175,.175,.05,20),gt.iron,s-.03,-1.1,0);a.rotation.z=Math.PI/2,i.add(a)}),i.add(ut(new Pt(.14,.17,.6,18),gt.iron,0,-.62,0)),i}function H3(){const i=new pe,t=[new lt(.03,0),new lt(.42,.05),new lt(.58,.22),new lt(.62,.45),new lt(.56,.62)],e=new rr(t,32),n=ut(e,gt.iron,0,.18,0),r=ut(new rr(t.map(o=>new lt(o.x*.92,o.y)),32),new ue({color:11557408,metalness:.4,roughness:.5,emissive:4398085,emissiveIntensity:.9}),0,.2,0);i.add(n,r),[.32,.52].forEach(o=>{const c=ut(new Le(.6-o*.06,.025,8,36),gt.darkSteel,0,o,0);c.rotation.x=Math.PI/2,i.add(c)});const s=ut(new Le(.55,.035,8,36),gt.darkSteel,0,.79,0);s.rotation.x=Math.PI/2,i.add(s),[-.68,.68].forEach(o=>{const c=ut(new Pt(.07,.07,.2,14),gt.polished,o,.55,0);c.rotation.z=Math.PI/2,i.add(c)});const a=ut(new Le(.14,.035,8,24),gt.brass,.74,.55,0);a.rotation.y=Math.PI/2,i.add(a);for(let o=0;o<8;o++){const c=o/8*Math.PI*2,l=ut(new he(.04,.04,.06),gt.brass,.74,.55+Math.sin(c)*.17,Math.cos(c)*.17);i.add(l)}return[-.45,.45].forEach(o=>i.add(ut(new he(.12,.3,.12),gt.iron,o,.06,0))),[-.45,.45].forEach(o=>{const c=ut(new he(.05,.26,.18),gt.darkSteel,o,.28,0);c.rotation.z=o>0?-.3:.3,i.add(c)}),i}function G3(){const i=new pe,t=ut(new Pt(.09,.11,.6,18),gt.brass,0,.55,0);t.rotation.z=-.5;const e=ut(new zi(.07,.3,14),gt.darkSteel,.22,.9,0);e.rotation.z=-.5;const n=ut(new Pt(.035,.05,.1,12),gt.polished,.3,.98,0);n.rotation.z=-.5;const r=ut(new Pt(.075,.075,.5,14),gt.iron,-.16,.25,0);r.rotation.z=.35;const s=ut(new he(.04,.16,.05),gt.polished,-.02,.42,0);s.rotation.z=.4;const a=ut(new Pt(.055,.055,.06,12),gt.brass,.08,.72,0);a.rotation.x=Math.PI/2,i.add(a),[-.04,.04].forEach(L=>{const h=ut(new he(.16,.03,.03),gt.brass,.08,.72,L);i.add(h)});const o=ut(new Pt(.09,.09,.1,6),gt.polished,-.3,.12,0);o.rotation.z=.35,i.add(t,e,n,r,s,o);const c=ut(new Le(.32,.035,8,26,Math.PI),gt.rustDark,-.34,.16,0);c.rotation.z=Math.PI*.6,i.add(c);const l=ut(new Pt(.05,.05,.12,10),gt.darkSteel,-.42,.1,0);return l.rotation.z=Math.PI*.35,i.add(l),i}function V3(){const i=new pe,t=ut(new Pt(.3,.3,1.3,28),gt.polished,0,.35,0);t.rotation.z=Math.PI/2,i.add(t),[-.68,.68].forEach(e=>{const n=ut(new Pt(.36,.36,.07,28),gt.darkSteel,e,.35,0);n.rotation.z=Math.PI/2,i.add(n);const r=ut(new Pt(.06,.06,.28,12),gt.iron,e+(e>0?.12:-.12),.35,0);r.rotation.z=Math.PI/2,i.add(r);const s=ut(new he(.2,.3,.24),gt.iron,e+(e>0?.3:-.3),.3,0);i.add(s);const a=ut(new Pt(.11,.11,.22,16),gt.darkSteel,e+(e>0?.24:-.24),.35,0);a.rotation.z=Math.PI/2,i.add(a);const o=ut(new he(.3,.06,.34),gt.darkSteel,e+(e>0?.3:-.3),.12,0);i.add(o)});for(let e=0;e<7;e++){const n=ut(new Le(.302,.012,6,30),gt.darkSteel,-.54+e*.18,.35,0);n.rotation.y=Math.PI/2,i.add(n)}return i.userData.spinAxis="x",i}function W3(){const i=new pe;i.add(ut(new Pt(.26,.31,1.9,28),gt.iron,0,.95,0));const t=ut(new Pt(.2,.2,.06,22),new ue({color:1314828,roughness:1}),0,1.93,0);i.add(t);const e=ut(new zi(.34,.18,24),gt.darkSteel,0,2.1,0);i.add(e),[-.12,.12].forEach(s=>{const a=ut(new Pt(.02,.02,.16,8),gt.darkSteel,s,2,0);i.add(a)});const n=ut(new Pt(.015,.015,.3,8),gt.polished,0,2.3,0);i.add(n);const r=ut(new Le(.27,.04,8,28),gt.darkSteel,0,1.9,0);r.rotation.x=Math.PI/2,i.add(r,ut(new Pt(.44,.48,.16,26),gt.darkSteel,0,.08,0)),[.55,1.15].forEach(s=>{const a=ut(new Le(.29,.022,8,28),gt.rust,0,s,0);a.rotation.x=Math.PI/2,i.add(a);for(let o=0;o<6;o++){const c=o/6*Math.PI*2;i.add(ut(new hn(.028,8,6),gt.darkSteel,Math.cos(c)*.29,s,Math.sin(c)*.29))}});for(let s=0;s<5;s++){const a=ut(new he(.16,.025,.025),gt.darkSteel,0,.4+s*.3,.28);i.add(a)}return i}function X3(){const i=new pe;i.add(ut(new Pt(.14,.14,1,20),gt.polished,0,.5,0)),[.18,.82].forEach(e=>{const n=ut(new Pt(.19,.19,.05,20),gt.darkSteel,0,e,0);i.add(n);for(let r=0;r<6;r++){const s=r/6*Math.PI*2;i.add(ut(new Pt(.018,.018,.08,6),gt.steel,Math.cos(s)*.155,e,Math.sin(s)*.155))}}),i.add(ut(new hn(.17,18,14),gt.darkSteel,0,.5,0)),i.add(ut(new Pt(.09,.11,.12,14),gt.brass,0,.94,0)),i.add(ut(new Pt(.05,.05,.3,12),gt.polished,0,1.12,0));const t=ut(new Le(.3,.045,10,30),gt.rust,0,1.3,0);t.rotation.x=Math.PI/2,i.add(t);for(let e=0;e<3;e++){const n=ut(new Pt(.022,.022,.58,8),gt.rust,0,1.3,0);n.rotation.z=Math.PI/2,n.rotation.y=e/3*Math.PI,i.add(n)}for(let e=0;e<3;e++){const n=e/3*Math.PI*2;i.add(ut(new hn(.035,10,8),gt.rust,Math.cos(n)*.3,1.3,Math.sin(n)*.3))}return i.add(ut(new hn(.06,14,10),gt.brass,0,1.3,0)),i}function Z3(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#e9e4d4",t.beginPath(),t.arc(128,128,126,0,Math.PI*2),t.fill(),t.strokeStyle="#2a2a2e",t.lineWidth=5,t.beginPath(),t.arc(128,128,118,0,Math.PI*2),t.stroke();for(let r=0;r<=12;r++){const s=Math.PI*.75+r/12*Math.PI*1.5,a=118,o=r%3===0?88:100;t.lineWidth=r%3===0?6:3,t.beginPath(),t.moveTo(128+Math.cos(s)*a,128+Math.sin(s)*a),t.lineTo(128+Math.cos(s)*o,128+Math.sin(s)*o),t.stroke()}const e=Math.PI*.75+.62*Math.PI*1.5;return t.strokeStyle="#b5432e",t.lineWidth=7,t.beginPath(),t.moveTo(128,128),t.lineTo(128+Math.cos(e)*84,128+Math.sin(e)*84),t.stroke(),t.fillStyle="#2a2a2e",t.beginPath(),t.arc(128,128,12,0,Math.PI*2),t.fill(),new dr(i)}function $3(){const i=new pe,t=ut(new Pt(.42,.42,.2,32),gt.darkSteel,0,.75,0);t.rotation.x=Math.PI/2,i.add(t);const e=ut(new sr(.37,32),new Ln({map:Z3()}),0,.75,.105);i.add(e);const n=ut(new sr(.36,32),new ue({color:14674677,transparent:!0,opacity:.22,roughness:.05,metalness:.1}),0,.75,.118);i.add(n);const r=ut(new Le(.42,.045,10,34),gt.polished,0,.75,.1);i.add(r);for(let o=0;o<6;o++){const c=o/6*Math.PI*2;i.add(ut(new hn(.025,8,6),gt.darkSteel,Math.cos(c)*.42,.75+Math.sin(c)*.42,.12))}const s=ut(new Pt(.05,.05,.24,12),gt.steel,.42,.75,0);s.rotation.z=Math.PI/2,i.add(s),i.add(ut(new Pt(.07,.07,.1,12),gt.darkSteel,.55,.75,0)),i.add(ut(new Pt(.06,.09,.45,14),gt.steel,0,.28,0)),i.add(ut(new Pt(.14,.17,.1,16),gt.darkSteel,0,.05,0));const a=ut(new Le(.12,.05,8,16,Math.PI),gt.brass,0,.02,0);return a.rotation.z=Math.PI,i.add(a),i}function q3(){const i=new pe;i.add(ut(new Pt(.3,.3,.26,6),gt.polished,0,.68,0));const t=ut(new he(.4,.02,.06),gt.darkSteel,0,.82,0);i.add(t);const e=ut(new Le(.24,.05,8,26),gt.darkSteel,0,.53,0);e.rotation.x=Math.PI/2,i.add(e),i.add(ut(new Pt(.15,.15,.62,18),gt.polished,0,.2,0));for(let a=0;a<7;a++){const o=ut(new Le(.152,.016,6,24),gt.darkSteel,0,.42-a*.06,0);o.rotation.x=Math.PI/2,i.add(o)}const n=ut(new zi(.13,.14,14),gt.darkSteel,0,-.16,0);n.rotation.x=Math.PI,i.add(n);const r=ut(new Pt(.24,.24,.18,6),gt.steel,.5,.12,.3);r.rotation.x=Math.PI/2,i.add(r);const s=ut(new Le(.16,.035,6,6),gt.darkSteel,.5,.03,.3);return s.rotation.x=Math.PI/2,i.add(s),i}function Y3(){const i=new pe,t=ut(new he(1.35,.07,.95),gt.rust,0,.05,0);t.rotation.y=.12,i.add(t),[-.3,-.1,.1,.3].forEach(a=>{const o=ut(new he(1.3,.025,.05),gt.rustDark,0,.095,a);o.rotation.y=.12,i.add(o)});const e=ut(new he(.5,.05,.4),gt.rustDark,-.3,.11,.15);e.rotation.y=-.2,i.add(e);const n=ut(new he(.3,.045,.26),gt.rustDark,.42,.105,-.2);n.rotation.y=.4,i.add(n);const r=new Pt(.045,.05,.06,10);[[-.48,.02],[-.12,.28],[-.12,.02],[.3,-.28],[.3,-.12],[.54,-.28]].forEach(([a,o])=>i.add(ut(r,gt.darkSteel,a,.13,o))),[[-.58,-.38],[-.58,.38],[.58,-.38],[.58,.38]].forEach(([a,o])=>i.add(ut(r,gt.darkSteel,a,.1,o)));const s=ut(new Pt(.05,.05,.9,10),gt.rustDark,-.68,.09,0);return i.add(s),i}const K3={gear:z3,piston:k3,ladle:H3,torch:G3,roller:V3,stack:W3,valve:X3,gauge:$3,bolt:q3,plate:Y3};function J3(i){const t=document.createElement("canvas");t.width=320,t.height=84;const e=t.getContext("2d");e.fillStyle="rgba(12,12,14,.82)",e.fillRect(24,8,272,52),e.strokeStyle="#6d6d66",e.lineWidth=2.5,e.strokeRect(25,9,270,50),e.fillStyle="#eceae4",e.font=`600 30px ${kc}`,e.textAlign="center",e.textBaseline="middle",e.fillText(i.name,160,35),e.fillStyle="#7b7b74",e.font=`500 17px ${kc}`,e.fillText(i.en,160,74);const n=new M1(new mo({map:new dr(t),transparent:!0,depthTest:!1}));return n.scale.set(1.7,.45,1),n.renderOrder=10,n}function j3(i,t){const e=document.getElementById("parts-belt"),n=document.getElementById("parts");if(!e||!n)return;const r=new Map(i.map(I=>[I.id,I])),s=new fo({canvas:e,antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2));const a=new po;a.background=new Zt(789518),a.fog=new ur(789518,26,72);const o=new Be(50,1,.1,200),c=new C(0,6.6,13.2);o.position.copy(c),o.lookAt(0,.3,-12),a.add(new I1(16777215,.7)),a.add(new P1(13488864,3355448,.85));const l=new Ai(16777215,1.35);l.position.set(6,14,8),a.add(l);const L=new Ai(10132136,.7);L.position.set(-8,8,-12),a.add(L);const h=new Ai(12106952,.6);h.position.set(-9,6,10),a.add(h);function u(){const I=document.createElement("canvas");I.width=128,I.height=512;const et=I.getContext("2d");et.fillStyle="#131316",et.fillRect(0,0,128,512);for(let _t=0;_t<512;_t+=64)et.fillStyle="#191920",et.fillRect(0,_t,128,3),et.fillStyle="#0d0d10",et.fillRect(0,_t+3,128,1);et.fillStyle="#202027";for(let _t=0;_t<512;_t+=32)et.fillRect(62,_t,4,16);const ot=et.createLinearGradient(0,0,128,0);ot.addColorStop(0,"rgba(0,0,0,.55)"),ot.addColorStop(.12,"rgba(0,0,0,0)"),ot.addColorStop(.88,"rgba(0,0,0,0)"),ot.addColorStop(1,"rgba(0,0,0,.55)"),et.fillStyle=ot,et.fillRect(0,0,128,512);const ct=new dr(I);return ct.wrapT=is,ct.repeat.set(1,5),ct.anisotropy=4,ct}const d=nn.zNear-nn.zFar,m=u(),_=new kt(new Fi(nn.width,d),new Ln({map:m}));_.rotation.x=-Math.PI/2,_.position.set(0,0,(nn.zNear+nn.zFar)/2),a.add(_);const f=new kt(new he(nn.width+1.2,.5,d),new ue({color:657932,roughness:.9}));f.position.set(0,-.26,_.position.z),a.add(f);const p=new ue({color:7631994,metalness:.9,roughness:.42});[-1,1].forEach(I=>{const et=new kt(new he(.5,.5,d),p);et.position.set(I*(nn.width/2+.25),.26,_.position.z),a.add(et)});function b(I){const et=[],ot=new Set;return I.ids.forEach(ct=>{const _t=r.get(ct);_t&&!ot.has(_t.id)&&(ot.add(_t.id),et.push(_t))}),i.forEach(ct=>{!ot.has(ct.id)&&I.kw.test(ct.title)&&(ot.add(ct.id),et.push(ct))}),et}const x=[];Hc.forEach((I,et)=>{I.matched=b(I);const ot=new pe,ct=K3[I.model]();ot.add(ct);const _t=new Le(.85,.028,8,40),Wt=new kt(_t,new Ln({color:13948110,transparent:!0,opacity:0,depthWrite:!1}));Wt.rotation.x=-Math.PI/2,Wt.position.y=.03,ot.add(Wt);const J=new kt(new Pt(.85,.85,1.9,8),new Ln({transparent:!0,opacity:0,depthWrite:!1}));J.position.y=.85,ot.add(J);const O=J3(I);O.position.y=2,ot.add(O),ot.rotation.y=(Math.random()-.5)*.5,ot.position.set(qr[et%qr.length]+(Math.random()-.5)*.4,.32,nn.zFar+et/Hc.length*(d-12)+5),a.add(ot),x.push({group:ot,model:ct,hit:J,ring:Wt,part:I,speed:3.6+Math.random()*1.5,phase:Math.random()*Math.PI*2,sTarget:1,yBase:.32,spinAxis:ct.userData.spinAxis||"y"})});let S=!0;new IntersectionObserver(I=>{S=I[0].isIntersecting},{threshold:.05}).observe(n);const D=new So,R=new lt(-10,-10),T={x:0,y:0,tx:0,ty:0};let P=null;e.addEventListener("pointermove",I=>{const et=e.getBoundingClientRect();R.x=(I.clientX-et.left)/et.width*2-1,R.y=-((I.clientY-et.top)/et.height)*2+1,T.tx=(I.clientX/window.innerWidth-.5)*2,T.ty=(I.clientY/window.innerHeight-.5)*2}),e.addEventListener("pointerleave",()=>R.set(-10,-10));const K=new C(0,.3,-12);let g=0,M=0,k=null;e.addEventListener("pointerdown",I=>{I.button===1&&(I.preventDefault(),k={x:I.clientX},e.setPointerCapture(I.pointerId))}),e.addEventListener("pointermove",I=>{k&&I.buttons&4&&(M=Math.min(.55,Math.max(-.55,M+(I.clientX-k.x)*.0022)),k={x:I.clientX})}),e.addEventListener("pointerup",I=>{I.button===1&&(k=null)}),e.addEventListener("auxclick",I=>{I.button===1&&I.preventDefault()});let A=0,z=0;e.addEventListener("wheel",I=>{I.preventDefault(),I.stopPropagation(),z=Math.min(9,Math.max(-9,z+I.deltaY*.006))},{passive:!1}),e.addEventListener("click",I=>{P&&(I.stopPropagation(),t.open({num:"",title:`机器碎片 · ${P.part.name}`,sub:`${P.part.en} · ${P.matched.length} 条相关档案`,desc:P.part.desc,items:P.matched}))});function X(){const I=n.clientWidth,et=n.clientHeight;s.setSize(I,et,!1),o.aspect=I/et,o.updateProjectionMatrix()}window.addEventListener("resize",X),X();const U=new yo;function Y(){if(requestAnimationFrame(Y),!S)return;const I=Math.min(U.getDelta(),.05),et=U.elapsedTime;A+=(z-A)*.08,m.offset.y-=I*Math.max(-1.6,.45+A*.09),x.forEach(_t=>{_t.group.position.z+=(_t.speed+A)*I,_t.group.position.z>nn.zNear&&(_t.group.position.z=nn.zFar-Math.random()*6,_t.group.position.x=qr[Math.floor(Math.random()*qr.length)]+(Math.random()-.5)*.4),_t.model.rotation[_t.spinAxis]+=I*.6,_t.group.rotation.y+=Math.sin(et*1.2+_t.phase)*4e-4;const Wt=_t.group.scale.x+(_t.sTarget-_t.group.scale.x)*.12;_t.group.scale.setScalar(Wt),_t.group.position.y+=(_t.yBase+(_t===P?.22:0)-_t.group.position.y)*.12,_t.ring.material.opacity+=((_t===P?.95:0)-_t.ring.material.opacity)*.14}),T.x+=(T.tx-T.x)*.05,T.y+=(T.ty-T.y)*.05,g+=(M-g)*.07,o.position.set(K.x+Math.sin(g)*25.2+T.x*1.1,c.y-T.y*.5,K.z+Math.cos(g)*25.2),o.lookAt(T.x*1.6+K.x*.4,.3,-12),D.setFromCamera(R,o);const ot=D.intersectObjects(x.map(_t=>_t.hit),!1)[0],ct=ot?x.find(_t=>_t.hit===ot.object):null;ct!==P&&(P&&(P.sTarget=1),P=ct,P&&(P.sTarget=1.16),document.body.style.cursor=P?"pointer":"default"),s.render(a,o)}Y()}const to=[{num:"A1",key:"gate",name:"大门 · 门房",en:"GATEHOUSE",cx:210,cy:610,desc:"每天进出厂房的关卡——打卡、点名、搜身，工厂权力的第一道闸门。",ids:[151,179,183,146],kw:/工厂法|打卡|门房|进出|包身工|铁丝网/},{num:"B1",key:"rolling",name:"轧钢车间",en:"STEEL ROLLING MILL",cx:840,cy:300,desc:"火光与轧辊之间——钢铁与乳液在这里被压成形状，车间是工厂的心脏。",ids:[51,12,58,72,99,2],kw:/轧钢|轧铁|轧|炼钢车间|车间/},{num:"B2",key:"textile",name:"纺织车间",en:"WEAVING SHED",cx:430,cy:160,desc:"织机围出牢笼般的工位——织物越鲜亮，围困越明显。",ids:[85,89,13,36],kw:/纺织|织工|纱厂|纱|织机/},{num:"C1",key:"warehouse",name:"原料检收室",en:"RAW MATERIAL INTAKE",cx:640,cy:140,desc:"原料第一道关——检收、过磅、登记，生产从验收开始。",ids:[41,108,193,134],kw:/仓库|仓储|库房|罐头|堆积|原料/},{num:"C2",key:"boiler",name:"锅炉房 · 烟囱",en:"BOILER HOUSE",cx:1170,cy:320,desc:"厂房的心脏与肺——蒸汽从这里送往每一台机器。",ids:[83,66,4,17,15],kw:/锅炉|熔炉|烟囱|发电厂|锻铁|熔化/},{num:"D1",key:"office",name:"办公楼",en:"OFFICE BLOCK",cx:190,cy:140,desc:"表格、批文与盖章——比车间更慢的那台机器，叫“程序”。",ids:[107,193,129,108],kw:/城堡|官僚|程序|办公室|文员/},{num:"D2",key:"archive",name:"图纸档案室",en:"DRAFTING ROOM",cx:190,cy:250,desc:"画图纸与写档案的房间——纸上的工厂先于真实的工厂存在。",ids:[109,137,140,8,10],kw:/印刷|1984|白噪音|图纸|档案|数据|监控/},{num:"E1",key:"canteen",name:"食堂",en:"CANTEEN",cx:430,cy:640,desc:"轮班吃饭的半小时——胃也是流水线的一环。",ids:[110,130,31,106],kw:/屠场|酒馆|食堂|厨房|巧克力/},{num:"E2",key:"dorm",name:"宿舍区",en:"DORMITORY",cx:190,cy:610,desc:"鸽子笼般的工房——休息只是下一次上班的预备。",ids:[146,132,120,115],kw:/包身工|女工|宿舍|鸽子笼|工房|生死场/}],rn="#4a9e5c";function ve(i,t,e,n,r=5){const s=e-i,a=n-t,o=Math.hypot(s,a),c=-a/o*r,l=s/o*r;return`<path class="bp-w" d="M${i+c} ${t+l} L${e+c} ${n+l} M${i-c} ${t-l} L${e-c} ${n-l}"/>`}function Dn(i,t,e,n,r){const s=n==="E"?`M${i} ${t} A${e} ${e} 0 0 1 ${i+e} ${t-e}`:`M${i} ${t} A${e} ${e} 0 0 1 ${i-e} ${t+e}`,a=n==="E"?`M${i} ${t} L${i+e} ${t-e}`:`M${i} ${t} L${i-e} ${t+e}`;return`<g class="bp-door">
    <path d="${s}"/><path d="${a}"/>
    <text x="${n==="E"?i+e+4:i-e-4}" y="${n==="E"?t-e-2:t+e+10}" text-anchor="middle">${r}</text>
  </g>`}function sa(i,t,e,n,r,s=0,a=!0){const o=a?(i+e)/2:i+s,c=a?t+s:(t+n)/2,l=a?`M${i} ${t+s-5} l0 10 M${e} ${t+s-5} l0 10`:`M${i+s-5} ${t} l10 0 M${i+s-5} ${n} l10 0`;return`<g class="bp-dim">
    <path d="M${i} ${t+s} L${e} ${n+s} ${l}"/>
    <text x="${o}" y="${c-5}" text-anchor="middle">${r}</text>
  </g>`}function Re(i,t,e,n="bp-rname"){const r=[...e].map((s,a)=>`<tspan x="${i}" y="${t+a*15}">${s}</tspan>`).join("");return`<text class="${n}">${r}</text>`}function Q3(i,t){return`<rect class="bp-col" x="${i-5}" y="${t-5}" width="10" height="10"/>`}function Ki(i,t,e,n){return`<g class="bp-eq">
    <circle cx="${i}" cy="${t}" r="${e}"/>
    <path d="M${i-e/2} ${t} h${e} M${i} ${t-e/2} v${e}"/>
    <text x="${i}" y="${t+e+13}" text-anchor="middle">${n}</text>
  </g>`}function yi(i,t,e,n,r){return`<g class="bp-eq">
    <rect x="${i}" y="${t}" width="${e}" height="${n}"/>
    <path d="M${i+4} ${t+4} h${e-8} v${n-8} h${-(e-8)} Z"/>
    <text x="${i+e/2}" y="${t+n+13}" text-anchor="middle">${r}</text>
  </g>`}function sn(i,t,e,n,r){const s=Math.atan2(n-t,e-i),a=e-9*Math.cos(s-.42),o=n-9*Math.sin(s-.42),c=e-9*Math.cos(s+.42),l=n-9*Math.sin(s+.42);return`<path class="bp-arrow" style="stroke:${r}" d="M${i} ${t} L${e} ${n} M${a} ${o} L${e} ${n} L${c} ${l}"/>`}function td(){const i=[80,300,560,720,880,1120],t=[80,190,300,430,560,700];let e="";i.forEach((n,r)=>{e+=`<line class="bp-axis" x1="${n}" y1="30" x2="${n}" y2="750"/>
      <g class="bp-bubble"><circle cx="${n}" cy="46" r="13"/><text x="${n}" y="50" text-anchor="middle">${r+1}</text></g>`}),t.forEach((n,r)=>{e+=`<line class="bp-axis" x1="40" y1="${n}" x2="1250" y2="${n}"/>
      <g class="bp-bubble"><circle cx="58" cy="${n}" r="13"/><text x="58" y="${n+4}" text-anchor="middle">${"ABCDE"[r]}</text></g>`});for(let n=0;n<i.length-1;n++)e+=sa(i[n],0,i[n+1],0,"19000",66+n%2*0);e+=sa(i[0],0,i[i.length-1],0,"95000",20);for(let n=0;n<t.length-1;n++)e+=sa(0,t[n],0,t[n+1],["11000","11000","13000","13000","14000"][n],-34,!1);return e+=ve(80,80,1120,80),e+=ve(80,80,80,700),e+=ve(1120,80,1120,700),e+=ve(80,700,150,700),e+=ve(240,700,1120,700),e+=ve(300,80,300,300),e+=ve(300,560,300,700),e+=ve(560,80,560,560),e+=ve(880,80,880,190),e+=ve(300,190,560,190),e+=ve(300,300,560,300),e+=ve(300,560,560,560),e+=ve(560,190,1120,190),e+=ve(560,430,1120,430),e+=ve(880,430,880,560),e+=ve(560,560,1120,560),e+=ve(190,80,190,300),e+=ve(80,520,300,520),i.forEach(n=>t.forEach(r=>{n===80&&r===700||(e+=Q3(n,r))})),e+=Dn(150,700,45,"E","M-1"),e+=Dn(300,330,40,"E","M-2"),e+=Dn(300,140,38,"E","M-2"),e+=Dn(560,140,38,"E","M-2"),e+=Dn(560,360,40,"E","M-3"),e+=Dn(720,430,38,"S","M-2"),e+=Dn(990,430,38,"S","M-2"),e+=Dn(840,560,38,"S","M-3"),e+=Re(140,112,"厂部办公室"),e+=Re(245,220,"生产调度室"),e+=Re(140,380,"门厅 · 光荣榜"),e+=Re(140,580,"宿舍"),e+=Re(245,580,"门房 · 打卡"),e+=Re(345,110,"女工更衣间"),e+=Re(345,215,"男工更衣间"),e+=Re(345,320,"女工盥洗室"),e+=Re(345,430,"男工盥洗室"),e+=Re(500,110,"澡堂"),e+=Re(500,320,"医务室"),e+=Re(500,580,"托儿所"),e+=Re(430,120,"纺织车间"),e+=Re(620,112,"原料库房"),e+=Re(780,120,"过磅间"),e+=Re(960,112,"配料车间"),e+='<text class="bp-rname-h" x="840" y="215" text-anchor="middle">轧 钢 车 间</text>',e+='<text class="bp-rname-h" x="700" y="470" text-anchor="middle">精 整 车 间</text>',e+='<text class="bp-rname-h" x="990" y="470" text-anchor="middle">包 装 车 间</text>',e+='<text class="bp-rname-h" x="840" y="640" text-anchor="middle">成 品 仓 库</text>',e+=Ki(660,280,30,"L-1 均热炉"),e+=Ki(790,280,30,"L-2 均热炉"),e+=Ki(920,280,30,"L-3 均热炉"),e+=Ki(660,370,26,"L-4 轧机机架"),e+=Ki(790,370,26,"L-5 轧机机架"),e+=yi(960,250,110,55,"万能轧钢机组"),e+=yi(960,335,110,45,"冷却泵站"),e+=yi(620,490,70,40,"剪切机 A"),e+=yi(710,490,70,40,"剪切机 B"),e+=yi(930,490,90,40,"捆扎机"),e+=yi(1040,490,60,40,"地磅"),[[620,600],[760,600],[900,600],[1040,600]].forEach(([n,r])=>{e+=`<g class="bp-rack"><rect x="${n}" y="${r}" width="90" height="26"/><path d="M${n} ${r+9} h90 M${n} ${r+18} h90"/></g>`}),e+=sn(700,190,700,240,rn),e+=sn(700,240,660,246,rn),e+=sn(920,190,920,240,rn),e+=sn(1015,250,1015,190,rn),e+=sn(760,400,740,430,rn),e+=sn(940,400,960,430,rn),e+=sn(700,532,700,565,rn),e+=sn(990,532,990,565,rn),e+=sn(260,330,296,330,rn),e+=sn(840,30,840,74,rn),e+='<text class="bp-flow" x="856" y="24">原料入口</text>',e+='<path class="bp-pipe" d="M1150 380 H1128 M1128 380 V250 H1015" />',e+='<path class="bp-pipe" d="M1128 380 V520 H990"/>',e+=ve(1120,260,1220,260),e+=ve(1220,260,1220,380),e+=ve(1120,380,1220,380),e+=Re(1160,290,"锅炉房"),e+='<g class="bp-eq"><circle cx="1170" cy="345" r="16"/><path d="M1170 329 v-14 M1163 322 h14"/></g>',e+='<g class="bp-gate2"><path d="M150 700 v-26 M240 700 v-26 M150 682 h90"/></g>',e+='<g class="bp-north"><circle cx="1190" cy="640" r="20"/><path d="M1190 622 L1196 646 L1190 640 L1184 646 Z"/><text x="1190" y="682" text-anchor="middle">N</text></g>',to.forEach((n,r)=>{e+=`<g class="bp-marker" data-i="${r}">
      <circle cx="${n.cx}" cy="${n.cy}" r="17"/>
      <text x="${n.cx}" y="${n.cy+4}" text-anchor="middle">${n.num}</text>
    </g>`}),e+=`<rect class="bp-border" x="20" y="16" width="1260" height="788"/>
    <rect class="bp-border2" x="28" y="24" width="1244" height="772"/>
    <g class="bp-titleblock">
      <rect x="1000" y="716" width="264" height="72"/>
      <path d="M1000 740 h264 M1088 716 v72 M1176 716 v72 M1000 716 v72 h264 v-72"/>
      <text class="tb1" x="1010" y="734">FACTORY GENERAL PLAN</text>
      <text class="tb2" x="1010" y="762">工厂总平面布置图</text>
      <text class="tb3" x="1096" y="734">图号 F-2026</text>
      <text class="tb3" x="1096" y="762">比例 1:300</text>
      <text class="tb3" x="1184" y="734">2026-09</text>
      <text class="tb3" x="1184" y="762">共 1 张</text>
    </g>`,`<svg id="bp-svg" viewBox="0 0 1300 820" xmlns="http://www.w3.org/2000/svg" aria-label="工厂车间平面图纸">
    <rect x="0" y="0" width="1300" height="820" fill="#0c0c0e"/>
    ${e}
  </svg>`}function ed(i,t){const e=document.getElementById("bp-sheet");if(!e)return;e.innerHTML=td();const n=new Map(i.map(s=>[s.id,s])),r=to.map(s=>{const a=[],o=new Set;return s.ids.forEach(c=>{const l=n.get(c);l&&!o.has(l.id)&&(o.add(l.id),a.push(l))}),i.forEach(c=>{!o.has(c.id)&&s.kw.test(c.title)&&(o.add(c.id),a.push(c))}),a});e.querySelectorAll(".bp-marker").forEach(s=>{const a=+s.dataset.i,o=to[a];s.addEventListener("mouseenter",()=>{const c=document.getElementById("bp-tip");c&&(c.innerHTML=`<img src="${xe}images/zones/bp-${o.key}.png" onerror="this.closest('#bp-tip').classList.remove('show')" alt="" />
        <div class="bt-text"><b>${o.num} ${o.name}</b><span>${o.en} · 悬停查看 · 点击调出 ${r[a].length} 条相关作品</span></div>`,c.classList.add("show"))}),s.addEventListener("mousemove",c=>{const l=document.getElementById("bp-tip");l&&(l.style.left=Math.min(c.clientX+22,window.innerWidth-330)+"px",l.style.top=Math.min(Math.max(c.clientY-60,76),window.innerHeight-220)+"px")}),s.addEventListener("mouseleave",()=>{var c;(c=document.getElementById("bp-tip"))==null||c.classList.remove("show")}),s.addEventListener("click",c=>{c.stopPropagation(),e.querySelectorAll(".bp-marker").forEach(l=>l.classList.toggle("on",l===s)),t.open({num:o.num,title:`纸上工厂 · ${o.name}`,sub:`${o.en} · ${r[a].length} 条相关档案`,desc:o.desc,items:r[a]})}),s.setAttribute("tabindex","0"),s.setAttribute("role","button"),s.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),c.stopPropagation(),s.dispatchEvent(new MouseEvent("click",{bubbles:!0})))})})}const aa=[{name:"安全帽",en:"HELMET",img:xe+"images/objects-t/helmet.png",x:12,y:26,w:150,ids:[77,67,53,28],kw:/建设|工地|安全帽|脚手架|会战/,desc:"戴在头上的屋顶——建设者的第一道防线。"},{name:"扳手",en:"WRENCH",img:xe+"images/objects-t/wrench.png",x:30,y:58,w:130,ids:[57,84,65],kw:/检修|维修|换机|锻工|锅炉/,desc:"拧松紧掉的零件，也拧紧时间的缝隙。"},{name:"焊工面罩",en:"MASK",img:xe+"images/objects-t/weldermask.png",x:47,y:22,w:140,ids:[64,11],kw:/电焊|弧光|炉光|钢水|火花/,desc:"面罩降下的瞬间，工人拥有自己的小太阳。"},{name:"搪瓷缸",en:"MUG",img:xe+"images/objects-t/mug.png",x:63,y:60,w:120,ids:[80,95,31],kw:/师徒|耐心|虚心|学先进|教|课堂/,desc:"车间一角的水——师徒之间传递的温度。"},{name:"工牌",en:"BADGE",img:xe+"images/objects-t/badge.png",x:79,y:24,w:125,ids:[151,179,180],kw:/工厂法|打卡|工牌|996|规训/,desc:"号码先于名字——人被登记为劳动力的那一刻。"},{name:"考勤表",en:"TIMESHEET",img:xe+"images/objects-t/timesheet.png",x:88,y:55,w:135,ids:[152,61,12],kw:/泰勒|计时|争分夺秒|考勤|秒表/,desc:"每一个动作都被计时——科学管理从一张表开始。"},{name:"毛巾",en:"TOWEL",img:xe+"images/objects-t/towel.png",x:20,y:74,w:135,ids:[52,22,86],kw:/汗水|汗|彩虹|飞花|擦洗/,desc:"擦去钢水的亮度，也擦去一天的重量。"},{name:"工装",en:"OVERALLS",img:xe+"images/objects-t/overalls.png",x:41,y:76,w:150,ids:[93,76,85],kw:/工人形象|工装|车间里|纺纱|上岗/,desc:"统一的蓝色——穿上它，你就是“咱们工人”。"},{name:"手套",en:"GLOVES",img:xe+"images/objects-t/gloves.png",x:58,y:40,w:125,ids:[91,90,68],kw:/搬运|铸造|炉间|重体力|农具/,desc:"手掌的铠甲——直接接触高温与重物的地方。"},{name:"离职纸箱",en:"BOX",img:xe+"images/objects-t/box.png",x:70,y:78,w:155,ids:[183,184,157,158],kw:/裁员|关闭|停产|跑路|福报|失业/,desc:"一只装走全部家当的纸箱——流水线不再需要人时。"},{name:"手机",en:"PHONE",img:xe+"images/objects-t/phone.png",x:8,y:52,w:105,ids:[21,32,189],kw:/手机|网红|MCN|内容工厂|造星/,desc:"新流水线上的工具——人也开始在屏幕里被加工。"},{name:"老花镜",en:"GLASSES",img:xe+"images/objects-t/glasses.png",x:90,y:38,w:115,ids:[125,170,26,39],kw:/废墟|遗产|记忆|改造|筒仓|美术馆/,desc:"回望厂房的眼神——废墟成为档案，档案成为纪念。"}];function nd(i,t){const e=document.getElementById("traces-field");if(!e)return;const n=new Map(i.map(a=>[a.id,a])),r=aa.map(a=>{const o=[],c=new Set;return a.ids.forEach(l=>{const L=n.get(l);L&&!c.has(L.id)&&(c.add(L.id),o.push(L))}),i.forEach(l=>{!c.has(l.id)&&a.kw.test(l.title)&&(c.add(l.id),o.push(l))}),o});aa.forEach((a,o)=>{const c=document.createElement("div");c.className="tobj",c.dataset.i=o,c.style.left=a.x+"%",c.style.top=a.y+"%",c.style.width=a.w+"px";const l=xe+"videos/objects/"+a.img.split("/").pop().replace(".png",".mp4");c.innerHTML=`<div class="tobj-media">
        <div class="tobj-3d">
          <img class="t3d-layer t3d-back2" src="${a.img}" alt="" draggable="false" />
          <img class="t3d-layer t3d-back1" src="${a.img}" alt="" draggable="false" />
          <img class="t3d-face" src="${a.img}" alt="${a.name}" draggable="false" />
        </div>
        <video src="${l}" muted loop playsinline preload="auto"></video>
      </div>
      <div class="tobj-tag"><b>${a.name}</b><span>${a.en}</span></div>`,e.appendChild(c);const L=c.querySelector("video");L.addEventListener("error",()=>{c.dataset.novid="1"},{once:!0}),c.addEventListener("pointerenter",()=>{c.dataset.novid||(c.classList.add("vid-on"),L.play().catch(()=>{}))}),c.addEventListener("pointerleave",()=>{c.classList.remove("vid-on"),L.pause();try{L.currentTime=0}catch{}})});let s=null;e.addEventListener("pointerdown",a=>{const o=a.target.closest(".tobj");if(!o)return;a.preventDefault(),o.setPointerCapture(a.pointerId),s={el:o,i:+o.dataset.i,startX:a.clientX,startY:a.clientY,baseX:0,baseY:0,moved:!1};const c=/translate\((-?[\d.]+)px,\s*(-?[\d.]+)px\)/.exec(o.style.transform||"");c&&(s.baseX=+c[1],s.baseY=+c[2]),o.classList.add("dragging")}),e.addEventListener("pointermove",a=>{if(!s)return;const o=a.clientX-s.startX,c=a.clientY-s.startY;Math.abs(o)+Math.abs(c)>6&&(s.moved=!0),s.moved&&(s.el.style.transform=`translate(${s.baseX+o}px, ${s.baseY+c}px)`)}),e.addEventListener("pointerup",a=>{if(!s)return;const o=s;if(s=null,o.el.classList.remove("dragging"),!o.moved){const c=aa[o.i];e.querySelectorAll(".tobj").forEach(l=>l.classList.toggle("on",l===o.el)),t.open({num:String(o.i+1).padStart(2,"0"),title:`人的痕迹 · ${c.name}`,sub:`${c.en} · ${r[o.i].length} 条相关档案`,desc:c.desc,items:r[o.i]})}}),e.addEventListener("pointercancel",()=>{s&&(s.el.classList.remove("dragging"),s=null)})}const id=[{name:"Afghanistan",cn:"阿富汗",d:"M670.0,151.0L672.9,152.0L675.0,151.7L675.5,150.4L677.7,150.0L679.3,149.1L679.9,146.9L682.2,146.4L682.6,145.4L683.9,146.1L684.8,146.2L686.3,146.2L688.4,146.8L689.3,147.2L691.3,146.3L692.2,146.8L693.1,145.5L694.8,145.6L695.2,145.2L695.5,144.1L696.7,143.1L698.2,143.7L697.9,144.6L698.7,144.7L698.5,147.0L699.6,147.9L700.5,147.4L701.8,147.1L703.5,145.8L705.4,146.1L708.3,146.1L708.8,146.9L707.2,147.2L705.7,147.7L702.6,148.0L699.6,148.6L698.0,149.8L698.6,151.0L698.9,152.4L697.5,153.5L697.7,154.6L696.9,155.6L694.3,155.5L695.3,157.3L693.6,158.0L692.4,159.7L692.5,161.4L691.5,162.2L690.4,161.9L688.3,162.3L688.0,163.0L685.9,163.0L684.4,164.6L684.3,167.0L680.7,168.1L678.8,167.9L678.2,168.5L676.5,168.1L673.7,168.6L669.1,167.1L671.6,164.6L671.4,162.8L669.3,162.4L669.1,160.6L668.2,158.4L669.3,156.9L668.1,156.5L668.9,154.4L670.0,151.0Z",cx:688,cy:153.3},{name:"Angola",cn:"安哥拉",d:"M545.4,266.3L546.0,268.4L546.8,270.1L547.5,271.0L548.5,272.4L550.4,272.2L551.3,271.8L552.8,272.2L553.2,271.5L553.9,269.9L555.7,269.8L555.8,269.3L557.2,269.3L557.0,270.3L560.4,270.3L560.4,272.0L561.0,273.1L560.6,274.7L560.8,276.5L561.7,277.5L561.5,280.8L562.2,280.5L563.4,280.6L565.2,280.2L566.4,280.4L566.7,281.2L566.4,282.6L566.9,283.9L566.5,284.9L566.7,285.9L560.9,285.8L560.8,294.7L562.7,296.9L564.5,298.7L559.4,299.8L552.7,299.4L550.7,298.1L539.5,298.2L539.1,298.4L537.4,297.1L535.6,297.1L533.9,297.5L532.6,298.1L532.3,296.3L532.7,293.9L533.7,291.3L533.8,290.1L534.7,287.6L535.4,286.5L537.0,284.7L537.9,283.4L538.2,281.4L538.0,279.8L537.2,278.8L536.4,277.1L535.8,275.5L535.9,274.9L536.8,273.8L535.9,271.1L535.4,269.2L534.0,267.5L534.2,266.9L535.4,266.6L536.2,266.6L537.2,266.3L545.4,266.3ZM534.5,265.8L533.8,266.1L533.1,264.0L534.2,262.8L535.1,262.3L536.1,263.3L535.1,263.9L534.6,264.6L534.5,265.8Z",cx:548.4,cy:280.4},{name:"Albania",cn:"阿尔巴尼亚",d:"M557.2,133.7L556.8,134.7L557.2,135.9L558.4,136.5L558.3,137.3L557.4,137.7L557.3,138.6L556.0,139.9L555.5,139.7L555.4,139.1L553.9,138.2L553.7,136.9L553.9,135.0L554.3,134.1L553.8,133.7L553.6,132.8L554.8,131.4L555.0,131.9L555.8,131.7L556.3,132.4L557.0,132.7L557.2,133.7Z",cx:555.9,cy:135.4},{name:"United Arab Emirates",cn:"阿联酋",d:"M643.3,182.7L643.8,182.5L643.9,183.3L646.0,182.8L648.3,182.9L650.0,183.0L651.9,181.1L654.0,179.3L655.8,177.6L656.3,178.6L656.7,180.8L655.2,180.8L655.0,182.6L655.5,183.0L654.2,183.5L654.2,184.7L653.4,185.8L653.4,186.9L652.8,187.5L644.4,186.1L643.4,183.3L643.3,182.7Z",cx:650.7,cy:182.8},{name:"Argentina",cn:"阿根廷",d:"M318.1,403.3L315.4,403.5L314.0,402.5L312.3,402.4L309.4,402.4L309.3,396.2L310.4,397.5L311.8,399.6L315.4,401.2L319.3,401.9L318.1,403.3ZM319.5,311.3L321.2,313.3L322.3,311.1L325.4,311.2L325.9,311.8L331.0,316.3L333.3,316.8L336.6,318.8L339.5,319.9L339.9,321.1L337.2,325.3L340.0,326.1L343.1,326.5L345.3,326.1L347.8,323.9L348.3,321.5L349.6,321.0L351.0,322.6L351.0,324.8L348.6,326.3L346.8,327.4L343.6,330.1L339.9,333.9L339.2,336.2L338.5,339.0L338.5,341.8L337.9,342.4L337.7,344.2L337.5,345.6L341.0,348.0L340.7,349.9L342.4,351.1L342.3,352.5L339.6,356.1L335.5,357.6L329.9,358.1L326.8,357.9L327.4,359.5L326.9,361.6L327.4,363.0L325.7,364.0L322.9,364.4L320.2,363.3L319.1,364.1L319.5,366.8L321.4,367.7L322.9,366.8L323.7,368.2L321.2,369.1L318.9,370.8L318.5,373.6L317.9,375.1L315.3,375.1L313.1,376.5L312.3,378.6L315.0,380.6L317.7,381.2L316.7,383.7L313.4,385.3L311.6,388.5L309.1,389.6L307.9,390.9L308.8,393.8L310.7,395.4L309.5,395.3L306.9,394.8L300.2,394.5L299.1,392.8L299.1,390.8L297.3,390.9L296.3,389.9L296.1,387.0L298.2,385.8L299.1,384.0L298.8,382.6L300.2,380.2L301.2,376.6L300.9,374.9L302.2,374.4L301.9,373.4L300.6,372.8L301.5,371.6L300.2,370.6L299.6,367.4L300.7,366.8L300.2,363.4L300.9,360.6L301.6,358.1L303.3,357.1L302.4,354.4L302.4,351.8L304.5,350.0L304.5,347.7L306.1,345.0L306.1,342.4L305.3,341.9L304.1,337.1L305.8,334.3L305.5,331.6L306.5,329.1L308.3,326.4L310.3,324.7L309.5,323.6L310.0,322.7L310.0,318.1L313.0,316.7L313.9,313.9L313.6,313.2L315.9,310.6L319.5,311.3Z",cx:319,cy:352.6},{name:"Armenia",cn:"亚美尼亚",d:"M621.1,135.9L624.9,135.4L625.5,136.2L626.6,136.6L626.0,137.3L627.5,138.3L626.7,139.2L627.9,139.9L629.1,140.4L629.2,142.3L628.2,142.4L627.0,140.8L627.1,140.4L625.8,140.4L625.0,139.6L624.4,139.7L623.3,138.9L621.3,138.2L621.5,136.8L621.1,135.9Z",cx:625.5,cy:138.7},{name:"Antarctica",cn:"Antarctica",d:"M334.5,472.3L333.7,473.7L332.9,475.0L327.1,474.6L320.9,474.8L317.4,473.9L317.4,473.7L315.9,472.9L322.1,473.0L328.1,473.3L330.2,472.2L331.6,471.2L334.5,472.3ZM57.8,470.8L52.4,471.2L48.8,470.2L47.1,469.2L47.0,469.1L45.2,468.3L46.9,467.3L52.1,467.7L54.9,468.6L57.0,469.6L57.8,470.8ZM374.6,466.8L378.0,468.0L379.2,469.7L379.5,470.9L379.6,472.3L375.3,473.2L370.8,473.9L365.6,474.5L359.8,475.1L353.2,474.9L349.5,474.0L350.0,472.8L356.0,472.1L358.4,471.2L360.1,470.0L361.3,468.9L363.0,467.9L364.8,466.8L364.8,466.8L366.2,466.8L370.4,466.2L374.6,466.8ZM163.3,454.2L166.9,454.6L170.2,454.1L168.6,455.1L166.0,455.8L162.2,455.6L159.4,454.6L159.4,454.6L160.0,453.7L163.3,454.2ZM151.2,454.1L155.5,455.2L153.8,455.1L150.2,454.8L146.4,454.1L146.4,454.1L148.4,453.5L151.2,454.1ZM225.1,449.8L228.1,450.2L231.1,449.9L232.8,451.4L230.6,451.2L227.2,451.3L223.8,451.2L220.0,451.4L217.2,450.8L215.7,449.7L217.5,449.2L221.0,449.6L225.1,449.8ZM309.9,447.1L310.2,448.4L309.7,449.4L308.9,450.5L305.7,450.9L302.6,451.4L298.9,451.3L300.3,450.3L297.0,450.6L293.9,451.0L291.8,450.2L291.6,449.1L294.7,448.0L294.7,448.0L296.6,447.6L299.8,447.8L300.6,446.3L300.8,445.3L300.7,443.1L302.3,441.8L304.9,441.3L306.3,442.4L307.0,443.4L308.2,444.7L309.1,445.8L309.9,447.1ZM337.2,428.2L336.0,428.8L333.9,428.4L331.6,428.6L329.7,429.3L327.7,430.0L326.4,430.8L326.0,431.9L326.1,432.9L327.4,433.9L325.5,434.5L322.9,434.7L321.4,435.7L319.8,436.5L318.0,437.7L317.6,438.8L318.6,439.9L320.0,440.8L322.3,441.4L324.5,442.3L325.6,443.4L326.2,444.4L327.0,445.5L328.3,446.4L329.1,447.5L329.5,450.0L330.3,451.1L330.5,452.2L331.4,453.2L331.0,454.7L329.5,455.9L327.9,456.8L324.2,457.2L322.9,458.1L321.2,459.1L317.1,460.1L313.4,460.5L309.9,461.1L306.1,461.7L303.9,462.9L299.4,463.0L294.5,462.9L290.1,463.1L285.4,463.1L286.3,464.2L290.6,464.7L293.7,465.4L295.4,466.4L292.3,467.3L287.5,467.0L283.5,467.7L283.4,468.9L283.3,469.9L286.5,470.9L287.1,471.9L290.7,472.9L296.5,473.4L301.5,474.1L305.5,475.0L310.6,475.9L317.5,476.3L324.3,477.1L329.0,477.9L334.2,478.8L336.9,480.1L338.3,481.2L341.6,480.2L346.2,479.4L351.1,478.5L356.8,477.8L361.8,477.0L368.7,477.0L375.5,477.4L381.1,478.0L382.9,476.8L386.7,476.0L393.8,475.9L399.3,475.3L404.5,474.7L410.2,474.4L416.4,473.9L420.7,473.2L418.7,472.2L417.5,471.2L417.5,470.2L412.2,470.3L406.4,470.7L401.0,470.7L400.2,469.7L400.6,467.6L401.9,467.0L405.8,466.4L410.5,465.7L413.9,464.9L417.3,464.1L419.8,463.0L423.6,462.5L427.3,462.1L429.2,461.9L433.5,461.8L437.6,461.4L441.0,460.9L444.4,460.2L447.5,459.6L451.3,458.7L453.8,457.8L456.4,456.9L457.2,455.9L454.3,455.2L455.2,454.1L457.1,453.2L460.0,452.6L463.0,452.0L465.9,451.1L468.0,450.0L469.4,448.7L471.4,448.0L474.7,448.1L476.1,449.0L479.4,449.2L479.5,448.1L480.9,447.0L483.9,447.3L484.6,448.3L487.9,448.5L491.5,448.0L495.0,447.7L498.2,447.9L499.4,449.0L502.4,448.1L505.2,447.6L508.4,447.2L511.5,446.8L514.3,446.2L517.4,445.7L519.8,445.1L521.5,444.1L523.6,444.9L526.5,444.5L528.5,445.8L530.0,446.8L533.2,446.2L534.5,445.1L537.3,444.4L540.9,444.5L542.0,445.6L544.3,444.5L547.3,444.2L550.6,444.1L553.5,444.1L556.6,444.5L559.6,444.6L560.9,445.6L562.7,446.4L565.7,445.9L569.0,445.8L572.2,445.8L575.3,445.7L578.0,445.3L581.0,445.0L583.4,444.3L586.0,443.8L588.9,443.5L591.0,442.7L592.5,441.2L594.1,440.3L597.0,440.7L598.1,441.7L600.5,442.4L603.3,442.1L605.3,443.1L607.4,443.8L610.2,443.2L611.2,442.0L613.7,441.5L616.6,440.6L619.3,440.2L622.5,439.6L624.7,439.0L627.0,438.4L629.2,437.8L631.8,438.1L634.3,437.1L636.1,436.4L638.7,436.4L641.0,435.8L641.5,434.8L643.9,434.0L646.2,433.5L648.9,433.0L651.5,432.8L653.9,433.0L656.5,433.3L658.8,434.0L659.0,435.2L661.5,436.1L663.2,436.9L666.5,437.2L668.3,438.0L670.6,438.8L673.3,438.9L675.5,438.4L677.9,437.2L680.5,437.8L683.3,438.2L685.9,438.5L688.6,438.7L691.4,438.7L693.6,441.6L693.5,442.3L693.2,443.6L690.5,444.3L688.4,445.3L688.7,446.4L691.9,446.3L691.5,447.4L690.1,448.4L688.7,449.6L690.9,450.5L694.1,450.7L697.3,450.2L698.8,449.2L699.7,448.1L701.3,447.3L703.0,446.4L703.7,445.5L705.2,444.1L706.9,443.8L710.1,443.7L712.9,443.4L715.7,443.0L717.0,441.9L717.9,440.8L719.8,439.8L722.5,439.1L724.8,438.5L726.3,437.6L727.9,437.1L729.9,436.7L732.7,437.0L735.2,436.7L737.9,436.4L741.0,436.5L743.0,435.8L744.4,433.9L745.4,434.7L746.7,436.0L749.1,436.5L751.8,436.7L754.4,436.4L757.2,436.6L759.9,436.7L761.6,436.4L763.9,436.6L766.1,437.2L768.6,436.8L771.6,436.8L774.1,436.4L777.0,436.8L778.8,435.9L780.3,435.0L782.2,434.2L785.6,432.1L787.4,432.5L789.6,433.3L791.4,434.2L794.9,435.9L797.7,436.0L800.2,436.0L803.2,435.7L806.2,435.3L808.5,434.5L810.4,433.7L813.5,433.6L815.6,433.0L817.7,433.5L819.2,434.4L821.1,435.3L824.2,435.2L826.1,435.9L829.4,436.6L832.9,436.9L835.8,436.6L837.9,435.8L839.8,434.9L842.3,434.7L844.8,435.1L847.7,435.3L850.3,434.9L852.8,434.9L855.2,435.2L857.8,435.4L860.3,435.0L863.3,434.5L866.1,434.4L869.3,434.4L871.8,434.1L874.3,433.9L875.1,432.6L875.2,431.4L876.9,432.2L877.4,433.4L878.4,434.6L879.5,435.5L881.8,436.0L885.0,435.8L888.6,435.8L891.1,435.6L894.8,435.6L897.4,435.5L901.0,435.7L904.1,435.9L906.1,436.7L905.6,437.8L907.4,438.6L910.3,439.3L913.4,440.0L917.0,440.4L920.8,440.9L923.6,441.3L926.8,441.4L928.6,440.4L931.0,441.2L933.1,442.1L935.6,442.7L939.0,443.0L942.2,443.3L943.5,444.4L946.7,445.1L948.8,446.1L951.9,446.5L955.1,446.4L958.1,446.6L961.4,446.5L964.7,446.8L967.8,447.1L970.7,447.8L973.6,448.3L975.6,449.2L975.2,450.2L973.8,451.2L972.5,452.5L971.5,453.5L970.2,454.6L966.6,455.0L965.0,456.0L961.4,456.6L960.1,457.7L958.2,458.7L956.2,459.6L955.1,460.8L954.4,461.8L954.1,463.0L954.1,464.1L955.7,465.2L956.3,466.2L957.6,467.2L962.8,467.6L963.9,468.8L958.9,469.2L954.6,469.8L949.4,469.9L947.0,471.5L946.5,472.8L945.3,473.8L943.9,474.8L947.6,475.8L949.0,476.9L951.4,478.0L954.7,478.9L958.6,479.7L962.8,480.6L969.2,481.5L970.6,482.8L978.6,483.4L979.1,483.7L981.2,484.5L988.8,483.8L995.2,484.6L1000.0,485.3L0.2,485.3L2.6,483.7L7.6,484.6L7.9,484.5L10.9,483.6L11.3,483.6L11.6,483.7L15.6,484.8L19.1,483.7L19.8,483.5L27.9,483.0L30.6,483.7L31.9,484.0L36.0,484.9L43.9,485.6L50.2,486.5L60.9,487.1L68.9,486.4L80.7,486.9L87.4,487.8L94.8,487.0L102.5,486.2L103.1,484.9L92.1,484.8L83.2,484.2L80.8,483.1L73.4,482.5L73.9,481.2L74.9,480.1L75.9,479.0L75.4,477.9L70.8,477.1L68.6,476.2L64.3,475.3L71.1,475.4L77.5,475.0L81.5,475.9L86.5,475.1L91.1,474.1L93.3,473.2L92.3,472.0L88.7,471.3L84.6,470.4L78.9,470.3L73.9,469.9L68.5,469.6L66.7,468.6L63.1,467.7L61.0,466.7L60.1,463.6L61.5,463.9L64.0,464.7L68.5,464.5L72.9,464.1L75.2,465.3L79.6,465.0L83.3,464.4L86.8,463.6L90.0,462.7L94.2,462.4L94.0,461.4L93.1,460.4L93.9,459.4L97.5,458.9L99.1,459.8L103.3,459.3L106.6,458.6L110.5,458.5L114.3,458.2L118.0,457.6L121.0,457.0L124.4,456.4L126.6,456.6L128.5,456.8L132.6,456.4L136.3,456.9L140.1,456.8L143.8,456.5L147.5,456.7L151.7,457.0L155.5,456.9L159.5,456.9L163.7,457.0L167.5,456.9L170.3,456.1L173.7,455.6L177.2,456.2L180.5,455.7L183.5,454.8L185.3,455.6L186.3,456.6L188.1,457.5L190.9,456.7L194.3,457.8L198.0,458.1L201.2,458.8L205.1,458.7L208.7,458.2L212.9,458.3L216.6,458.7L220.4,459.2L221.9,458.0L220.1,457.0L218.7,456.1L215.2,455.9L213.6,454.8L213.0,453.8L212.0,451.7L214.1,452.1L217.8,452.3L221.4,452.1L224.6,452.5L227.4,453.3L228.6,454.3L232.4,454.5L236.0,454.1L239.8,453.6L243.2,453.2L246.1,453.9L249.8,453.7L252.1,451.6L254.4,452.8L257.6,453.3L261.1,453.0L263.4,454.1L267.0,454.2L270.4,454.5L273.7,455.1L275.9,454.1L277.0,453.1L279.7,454.2L283.5,453.9L286.4,454.5L288.3,455.5L292.0,455.2L294.9,454.6L297.7,453.9L301.1,453.5L305.0,453.2L308.5,452.8L311.2,452.2L312.9,451.3L313.5,450.1L313.2,449.0L312.3,447.9L311.3,446.8L310.5,445.7L309.8,444.7L309.6,443.7L309.9,442.6L311.2,441.5L312.3,440.4L312.7,439.3L312.2,438.1L311.8,437.0L313.2,435.8L314.7,435.0L316.5,433.9L318.4,433.0L320.6,432.2L321.7,431.0L323.3,430.3L325.0,429.6L327.7,429.4L329.4,428.5L331.4,428.0L333.6,427.7L335.7,426.9L337.2,426.1L339.4,425.8L341.0,426.5L340.0,427.4L337.2,428.2Z",cx:492.2,cy:452.5},{name:"French Southern and Antarctic Lands",cn:"French Southern and Antarctic Lands",d:"M691.5,385.1L693.3,385.9L695.9,386.3L696.0,386.8L695.2,388.1L691.0,388.3L690.9,386.8L691.3,385.6L691.5,385.1Z",cx:692.9,cy:386.4},{name:"Australia",cn:"澳大利亚",d:"M903.9,363.3L906.6,364.3L908.1,363.9L910.2,363.4L911.9,363.5L912.1,366.8L911.2,367.8L910.9,370.0L909.9,369.3L908.0,371.2L907.4,371.1L905.7,371.0L904.0,368.6L903.6,366.8L902.0,364.3L902.1,363.1L903.9,363.3ZM898.8,288.2L899.8,290.4L901.6,289.4L902.5,290.5L903.8,291.6L903.5,292.9L904.1,295.2L904.5,296.6L905.2,297.0L906.0,299.3L905.7,300.8L906.6,302.7L909.6,304.1L911.6,305.4L913.5,306.6L913.1,307.3L914.7,309.1L915.8,312.1L916.9,311.5L918.0,312.7L918.7,312.2L919.2,315.2L921.1,316.9L922.4,317.9L924.6,320.2L925.4,322.4L925.4,324.0L925.3,325.7L926.6,328.1L926.4,330.5L925.9,331.8L925.2,334.3L925.2,335.9L924.7,337.9L923.5,340.4L921.4,341.8L920.4,343.9L919.5,345.3L918.7,347.7L917.6,349.1L916.9,351.2L916.5,353.1L916.7,354.0L915.1,354.9L912.0,355.0L909.4,356.2L908.1,357.2L906.4,358.4L904.1,357.2L902.4,356.7L902.9,355.3L901.3,355.8L898.9,357.8L896.5,357.1L894.9,356.6L893.4,356.4L890.7,355.6L888.9,353.9L888.4,351.8L887.7,350.4L886.3,349.3L883.7,348.9L884.6,347.6L883.9,345.5L882.6,347.4L880.1,347.9L881.5,346.4L882.0,344.8L883.0,343.4L882.8,341.4L880.5,343.8L878.8,344.7L877.7,346.9L875.6,345.8L875.7,344.3L873.9,342.3L872.5,341.2L873.0,340.6L869.4,338.9L867.5,338.8L864.8,337.5L859.8,337.8L856.2,338.7L853.1,339.7L850.4,339.5L847.5,340.9L845.1,341.6L844.5,343.0L843.5,344.1L841.1,344.2L839.4,344.5L836.9,343.9L834.9,344.3L833.0,344.4L831.4,345.9L830.6,345.7L829.2,346.5L827.8,347.4L825.8,347.3L824.0,347.3L821.0,345.5L819.5,345.0L819.6,343.4L821.0,343.0L821.4,342.4L821.3,341.4L821.7,339.5L821.4,337.8L819.9,335.0L819.4,333.4L819.6,331.8L818.4,330.0L818.4,329.2L817.1,328.1L816.8,325.9L815.2,323.7L814.8,322.5L816.1,323.7L815.1,321.2L816.5,322.0L817.3,323.1L817.3,321.6L815.9,319.4L815.6,318.6L815.0,317.7L815.3,316.1L815.9,315.4L816.2,314.1L815.9,312.4L817.1,310.4L817.3,312.5L818.5,310.6L820.7,309.7L822.1,308.5L824.2,307.5L825.5,307.3L826.2,307.6L828.4,306.6L830.1,306.3L830.5,305.7L831.3,305.4L832.8,305.5L835.7,304.7L837.2,303.4L837.9,302.0L839.6,300.5L839.7,299.4L839.8,297.9L841.7,295.6L842.9,298.0L844.1,297.4L843.1,296.1L843.9,294.8L845.2,295.4L845.5,293.2L847.0,291.9L847.7,290.8L849.1,290.3L849.1,289.5L850.3,289.9L850.4,289.2L851.6,288.8L853.0,288.4L855.0,289.7L856.6,291.3L858.3,291.3L860.1,291.6L859.5,290.1L860.8,287.8L862.1,287.1L861.6,286.4L862.8,284.8L864.5,283.8L865.9,284.2L868.3,283.7L868.2,282.2L866.2,281.3L867.7,280.9L869.5,281.6L871.0,282.7L873.3,283.5L874.1,283.2L875.8,284.0L877.5,283.2L878.5,283.5L879.1,282.9L880.4,284.3L879.7,285.8L878.6,286.9L877.7,287.0L878.0,288.1L877.2,289.5L876.2,290.9L876.4,291.7L878.6,293.2L880.7,294.1L882.2,295.0L884.2,296.7L885.0,296.7L886.4,297.4L886.8,298.3L889.5,299.2L891.3,298.2L891.9,296.8L892.4,295.5L892.8,294.0L893.6,291.8L893.2,290.4L893.4,289.6L893.1,288.1L893.5,286.0L894.0,285.4L893.6,284.5L894.2,283.0L894.8,281.5L894.8,280.7L895.9,279.6L896.7,281.0L896.9,282.7L897.5,283.1L897.7,284.2L898.7,285.7L898.9,287.2L898.8,288.2Z",cx:870.3,cy:315.9},{name:"Austria",cn:"奥地利",d:"M547.2,116.3L547.0,117.5L545.4,117.5L545.9,118.1L545.0,119.9L544.5,120.3L542.0,120.4L540.6,121.0L538.4,120.8L534.4,120.1L533.8,119.1L531.0,119.6L530.7,120.1L529.0,119.7L527.6,119.7L526.3,119.2L526.8,118.5L526.7,118.0L527.5,117.8L528.9,118.6L529.3,117.9L531.7,118.0L533.7,117.5L535.1,117.6L535.9,118.1L536.2,117.7L535.8,115.9L536.8,115.5L537.8,114.2L539.8,115.1L541.4,114.0L542.4,113.8L544.5,114.6L545.8,114.5L547.1,115.0L546.9,115.4L547.2,116.3Z",cx:537.5,cy:117.7},{name:"Azerbaijan",cn:"阿塞拜疆",d:"M625.0,139.6L625.8,140.4L627.1,140.4L627.0,140.8L628.2,142.4L626.3,142.0L624.9,140.7L624.4,139.7L625.0,139.6ZM631.6,135.5L632.8,135.7L633.3,135.0L635.0,133.9L636.4,135.3L637.8,137.3L639.1,137.4L640.0,138.2L637.7,138.4L637.2,140.6L636.7,141.5L635.7,142.2L635.8,143.6L635.1,143.7L633.4,142.2L634.3,140.9L633.5,140.0L632.5,140.3L629.2,142.3L629.1,140.4L627.9,139.9L626.7,139.2L627.5,138.3L626.0,137.3L626.6,136.6L625.5,136.2L624.9,135.4L625.6,135.0L627.7,135.8L629.2,135.9L629.5,135.6L628.2,134.1L628.9,133.7L629.7,133.8L631.6,135.5Z",cx:631.8,cy:137.9},{name:"Burundi",cn:"Burundi",d:"M581.5,262.5L581.3,259.1L580.6,257.9L582.3,258.1L583.2,256.5L584.6,256.7L584.8,257.8L585.4,258.4L585.4,259.3L584.7,259.9L583.7,261.4L582.6,262.4L581.5,262.5Z",cx:583.2,cy:259.4},{name:"Belgium",cn:"比利时",d:"M509.2,107.4L511.2,107.6L513.8,107.0L515.6,108.2L517.1,108.9L516.8,110.8L516.1,110.9L515.8,112.4L513.3,111.2L511.9,111.4L510.0,110.1L508.7,108.9L507.4,108.9L507.0,107.9L509.2,107.4Z",cx:512.2,cy:109.3},{name:"Benin",cn:"Benin",d:"M507.5,232.6L505.2,232.9L504.5,231.0L504.6,224.6L504.1,224.1L504.0,222.7L503.0,221.7L502.1,220.9L502.5,219.5L503.5,219.1L504.0,217.9L505.4,217.7L506.0,216.8L506.9,216.0L507.9,216.0L510.0,217.6L509.9,218.5L510.5,220.2L510.0,221.3L510.3,222.0L508.9,223.8L508.1,224.6L507.6,226.4L507.6,228.1L507.5,232.6Z",cx:506.5,cy:222.8},{name:"Burkina Faso",cn:"Burkina Faso",d:"M492.1,223.2L490.2,222.5L488.9,222.6L488.0,223.3L486.7,222.7L486.2,221.8L485.0,221.2L484.8,219.6L485.6,218.4L485.5,217.5L487.7,215.2L488.1,213.3L488.9,212.6L490.2,213.0L491.4,212.4L491.8,211.7L493.9,210.4L494.4,209.6L497.0,208.4L498.6,208.0L499.3,208.5L501.0,208.5L500.8,209.9L501.2,211.1L502.8,213.0L502.8,214.3L506.0,214.9L506.0,216.8L505.4,217.7L504.0,217.9L503.5,219.1L502.5,219.5L500.1,219.4L498.8,219.2L497.9,219.6L496.7,219.4L491.8,219.5L491.8,221.1L492.1,223.2Z",cx:494.9,cy:216.4},{name:"Bangladesh",cn:"孟加拉国",d:"M757.4,188.8L757.4,190.8L756.4,190.3L756.6,192.6L755.8,191.1L755.6,189.7L755.1,188.4L753.9,186.8L751.4,186.7L751.6,187.8L750.8,189.3L749.6,188.8L749.2,189.3L748.4,189.0L747.3,188.7L746.9,186.4L745.9,184.4L746.4,182.7L744.7,181.9L745.3,180.9L747.0,179.9L745.0,178.4L746.0,176.5L748.2,177.7L749.5,177.9L749.8,179.8L752.4,180.2L755.0,180.1L756.6,180.6L755.3,183.0L754.1,183.1L753.2,184.7L754.7,186.2L755.2,184.4L756.0,184.4L757.4,188.8Z",cx:751.7,cy:185},{name:"Bulgaria",cn:"保加利亚",d:"M562.9,127.1L563.7,128.3L564.8,128.1L566.9,128.5L571.0,128.6L572.4,127.9L575.7,127.3L577.7,128.3L579.3,128.6L577.9,129.7L576.9,131.7L577.8,133.3L575.4,132.9L572.5,133.8L572.5,135.2L570.0,135.5L568.0,134.5L565.8,135.3L563.8,135.2L563.6,133.3L562.2,132.4L562.6,132.1L562.3,131.7L562.8,130.8L563.9,130.0L562.5,128.8L562.3,127.8L562.9,127.1Z",cx:568.6,cy:130.9},{name:"The Bahamas",cn:"The Bahamas",d:"M284.6,184.0L283.9,184.1L283.2,182.5L282.2,181.7L282.8,180.0L283.6,180.1L284.6,182.4L284.6,184.0ZM283.8,176.2L280.8,176.6L280.6,175.6L281.9,175.4L283.8,175.4L283.8,176.2ZM286.1,176.1L285.6,178.1L285.1,177.8L285.2,176.3L283.9,175.2L283.9,174.9L286.1,176.1Z",cx:283.7,cy:182.4},{name:"Bosnia and Herzegovina",cn:"波黑",d:"M552.8,125.4L553.8,125.4L553.1,126.6L554.4,127.7L554.0,129.0L553.4,129.1L552.9,129.4L552.0,130.0L551.6,131.5L549.1,130.5L548.0,129.3L547.0,128.7L545.7,127.7L545.1,126.8L543.8,125.5L544.3,124.4L545.3,125.0L545.9,124.4L547.2,124.4L549.6,124.8L551.5,124.8L552.8,125.4Z",cx:549.7,cy:127.1},{name:"Belarus",cn:"白俄罗斯",d:"M565.2,100.2L567.9,100.3L570.9,99.2L571.6,97.6L573.9,96.8L573.6,95.5L575.3,95.0L578.3,94.0L581.2,94.7L581.6,95.4L583.0,95.0L585.8,95.7L586.0,97.0L585.4,97.7L587.2,99.6L588.3,100.1L588.1,100.6L590.0,101.1L590.8,101.8L589.7,102.4L587.5,102.3L587.0,102.6L587.6,103.5L588.3,105.3L585.9,105.4L585.1,106.0L584.9,107.4L583.8,107.2L581.3,107.3L580.5,106.7L579.5,107.1L578.4,106.7L576.3,106.7L573.2,106.0L570.4,105.8L568.2,105.9L566.7,106.6L565.4,106.7L565.3,105.5L564.4,104.2L566.1,103.6L566.1,102.5L565.4,101.5L565.2,100.2Z",cx:578.1,cy:101.9},{name:"Belize",cn:"伯利兹",d:"M252.4,200.5L252.4,200.1L252.7,200.0L253.2,200.3L254.2,198.6L254.7,198.6L254.7,199.0L255.3,199.0L255.2,199.8L254.8,201.0L255.0,201.4L254.7,202.4L254.9,202.7L254.6,204.1L254.0,204.8L253.5,204.9L253.0,205.9L252.1,205.9L252.4,202.7L252.4,200.5Z",cx:253.8,cy:201.6},{name:"Bermuda",cn:"Bermuda",d:"M320.1,160.3L320.0,160.3L320.0,160.3L320.0,160.3L320.0,160.3L320.0,160.3L320.0,160.3L320.1,160.3L320.0,160.3L320.0,160.3L319.9,160.4L319.9,160.4L319.9,160.4L319.9,160.4L319.8,160.4L319.8,160.4L319.8,160.4L319.8,160.3L319.8,160.3L319.8,160.3L319.8,160.3L319.8,160.3L319.9,160.2L319.9,160.2L319.9,160.2L319.9,160.2L319.8,160.3L319.8,160.3L319.8,160.3L319.8,160.3L319.8,160.3L319.8,160.3L319.8,160.4L319.8,160.4L319.9,160.4L319.9,160.4L319.9,160.4L319.9,160.4L319.9,160.4L319.9,160.4L320.0,160.4L320.0,160.4L320.1,160.4L320.1,160.3L320.1,160.3L320.2,160.3L320.2,160.2L320.2,160.2L320.3,160.2L320.3,160.2L320.4,160.2L320.4,160.1L320.4,160.1L320.4,160.1L320.4,160.1L320.4,160.1L320.4,160.0L320.3,160.0L320.3,160.1L320.3,160.1L320.2,160.1L320.3,160.1L320.3,160.1L320.3,160.1L320.3,160.1L320.3,160.1L320.3,160.1L320.3,160.1L320.3,160.1L320.4,160.1L320.4,160.1L320.4,160.2L320.3,160.2L320.3,160.2L320.2,160.1L320.2,160.1L320.2,160.1L320.2,160.1L320.2,160.2L320.2,160.2L320.2,160.2L320.2,160.2L320.1,160.2L320.1,160.2L320.1,160.3L320.1,160.3Z",cx:320.1,cy:160.2},{name:"Bolivia",cn:"玻利维亚",d:"M325.4,311.2L322.3,311.1L321.2,313.3L319.5,311.3L315.9,310.6L313.6,313.2L311.6,313.5L310.5,309.7L309.0,306.6L309.9,303.9L308.4,302.7L308.1,300.7L306.7,298.8L308.4,295.8L307.3,293.5L307.9,292.6L307.4,291.5L308.5,290.1L308.5,287.8L308.7,285.8L309.3,284.9L306.9,280.4L308.9,280.7L310.4,280.6L311.0,279.8L313.4,278.6L314.9,277.6L318.5,277.1L318.2,279.2L318.6,280.3L318.3,282.1L321.3,284.6L324.5,285.1L325.5,286.1L327.4,286.7L328.6,287.5L330.3,287.4L331.9,288.3L332.1,289.9L332.6,290.7L332.6,291.9L331.8,291.9L332.9,295.2L338.2,295.3L337.8,296.9L338.1,298.0L339.6,298.8L340.3,300.5L339.8,302.7L339.0,303.9L339.3,305.5L338.4,306.0L338.4,305.2L335.8,303.8L333.2,303.7L328.4,304.5L327.0,307.0L327.0,308.5L325.9,311.8L325.4,311.2Z",cx:322.2,cy:295.9},{name:"Brazil",cn:"巴西",d:"M339.9,333.9L343.6,330.1L346.8,327.4L348.6,326.3L351.0,324.8L351.0,322.6L349.6,321.0L348.3,321.5L348.8,319.9L349.2,318.3L349.2,316.7L348.2,316.2L347.1,316.7L346.1,316.5L345.8,315.5L345.5,312.9L345.0,312.1L343.1,311.4L342.0,311.9L339.1,311.4L339.2,307.6L338.4,306.0L339.3,305.5L339.0,303.9L339.8,302.7L340.3,300.5L339.6,298.8L338.1,298.0L337.8,296.9L338.2,295.3L332.9,295.2L331.8,291.9L332.6,291.9L332.6,290.7L332.1,289.9L331.9,288.3L330.3,287.4L328.6,287.5L327.4,286.7L325.5,286.1L324.5,285.1L321.3,284.6L318.3,282.1L318.6,280.3L318.2,279.2L318.5,277.1L314.9,277.6L313.4,278.6L311.0,279.8L310.4,280.6L308.9,280.7L306.9,280.4L305.3,280.9L304.0,280.6L304.2,276.4L301.9,278.0L299.5,277.9L298.4,276.4L296.6,276.3L297.2,275.1L295.6,273.4L294.5,270.9L295.2,270.4L295.2,269.2L296.9,268.4L296.6,266.9L297.3,265.9L297.5,264.7L300.7,262.8L303.0,262.2L303.3,261.8L305.9,261.9L307.1,254.3L307.2,253.1L306.7,251.5L305.5,250.5L305.5,248.5L307.1,248.0L307.6,248.3L307.7,247.3L306.1,247.0L306.1,245.2L311.5,245.3L312.4,244.3L313.2,245.2L313.7,246.9L314.2,246.5L315.8,248.0L317.9,247.8L318.5,247.0L320.5,246.3L321.7,245.9L322.0,244.7L324.0,243.9L323.8,243.3L321.5,243.1L321.1,241.3L321.2,239.5L320.0,238.7L320.5,238.5L322.5,238.8L324.7,239.5L325.5,238.9L327.5,238.4L330.6,237.4L331.7,236.3L331.3,235.6L332.7,235.4L333.4,236.1L333.0,237.3L334.0,237.7L334.6,239.0L333.8,240.0L333.4,242.3L334.1,243.8L334.3,245.0L336.0,246.3L337.4,246.5L337.7,245.9L338.6,245.8L339.8,245.3L340.7,244.6L342.3,244.8L342.9,244.7L344.5,245.0L344.7,244.4L344.2,243.8L344.5,243.0L345.6,243.3L347.0,243.0L348.5,243.6L349.8,244.2L350.6,243.4L351.2,243.5L351.6,244.3L352.9,244.1L354.0,243.0L354.9,241.0L356.5,238.5L357.5,238.3L358.1,239.9L359.7,244.7L361.2,245.2L361.3,247.1L359.2,249.4L360.0,250.2L364.9,250.7L365.0,253.4L367.2,251.6L370.6,252.6L375.3,254.3L376.6,255.9L376.2,257.5L379.4,256.6L384.8,258.1L388.9,258.0L393.1,260.3L396.6,263.4L398.7,264.2L401.1,264.3L402.1,265.2L403.1,268.7L403.5,270.4L402.4,275.0L401.0,276.8L397.1,280.7L395.3,283.8L393.3,286.2L392.6,286.3L391.8,288.3L392.0,293.5L391.2,297.8L390.9,299.6L390.0,300.7L389.6,304.4L386.7,308.1L386.3,310.9L384.0,312.1L383.4,313.8L380.3,313.8L376.0,314.9L374.0,316.1L370.9,316.9L367.6,319.1L365.3,321.9L364.9,324.0L365.3,325.5L364.8,328.3L364.2,329.7L362.3,331.2L359.2,336.1L356.7,338.3L354.8,339.6L353.6,342.2L351.7,343.8L351.0,342.2L352.2,340.9L350.6,339.0L348.4,337.5L345.6,335.7L344.5,335.8L341.7,333.6L339.9,333.9Z",cx:341.8,cy:276.8},{name:"Brunei",cn:"Brunei",d:"M817.2,237.4L818.3,236.4L820.7,234.9L820.6,236.2L820.4,238.0L819.1,237.9L818.5,238.9L817.2,237.4Z",cx:819,cy:237.1},{name:"Bhutan",cn:"Bhutan",d:"M754.7,172.9L755.8,173.7L755.6,175.4L753.4,175.5L751.0,175.3L749.3,175.8L746.8,174.7L746.7,174.2L748.5,172.1L750.0,171.4L752.0,172.0L753.5,172.1L754.7,172.9Z",cx:751.7,cy:173.7},{name:"Botswana",cn:"博茨瓦纳",d:"M571.2,301.5L571.8,302.0L572.7,303.6L575.8,306.6L577.0,306.9L577.0,307.9L577.8,309.7L580.0,310.1L581.8,311.4L577.8,313.4L575.3,315.5L574.4,317.3L573.6,318.4L572.1,318.6L571.6,319.9L571.3,320.8L569.5,321.4L567.3,321.3L565.9,320.5L564.8,320.2L563.4,320.8L562.7,322.2L561.4,323.0L560.0,324.2L558.0,324.5L557.4,323.5L557.7,321.9L556.0,319.2L555.3,318.8L555.3,310.7L558.0,310.6L558.1,300.7L560.2,300.6L564.4,299.6L565.5,300.8L567.3,299.7L568.1,299.7L569.7,299.1L570.2,299.3L571.2,301.5Z",cx:567.7,cy:312.2},{name:"Central African Republic",cn:"Central African Republic",d:"M542.4,229.4L544.7,229.2L545.3,228.5L545.7,228.5L546.4,229.1L549.9,228.1L551.1,227.0L552.5,226.0L552.3,225.0L553.0,224.8L555.7,225.0L558.3,223.7L560.3,220.6L561.8,219.5L563.5,219.0L563.8,220.2L565.4,222.0L565.4,223.1L565.0,224.3L565.2,225.1L566.1,225.9L568.2,227.1L569.8,228.3L569.8,229.2L571.7,230.6L572.8,231.8L573.5,233.5L575.6,234.6L576.0,235.5L575.1,235.8L573.3,235.7L571.3,235.4L570.2,235.6L569.8,236.3L568.9,236.4L567.8,235.8L564.7,237.2L563.4,236.9L563.1,237.1L562.2,238.8L560.2,238.3L558.1,238.0L556.4,237.0L554.1,236.0L552.6,236.9L551.5,238.3L551.3,240.3L549.5,240.1L547.6,239.6L545.9,241.1L544.5,243.7L544.2,242.9L544.1,241.6L542.8,240.7L541.8,239.3L541.5,238.3L540.2,236.9L540.4,236.0L540.2,234.9L540.4,232.7L541.0,232.2L542.4,229.4Z",cx:557,cy:232.4},{name:"Canada",cn:"加拿大",d:"M323.2,120.7L325.2,121.1L327.7,121.0L326.4,122.1L325.3,122.3L321.8,121.1L321.1,120.2L322.2,119.3L323.2,120.7ZM328.3,113.6L327.0,113.6L323.4,112.8L320.8,111.5L321.7,111.2L325.4,111.9L328.2,113.1L328.3,113.6ZM156.9,115.2L155.5,115.6L151.0,114.4L150.1,113.4L147.6,112.4L147.1,111.6L144.3,111.1L143.2,109.6L143.4,109.0L146.4,109.6L148.1,110.0L150.7,110.3L151.6,111.2L153.0,112.6L155.8,113.7L156.9,115.2ZM344.1,109.2L342.2,111.6L344.0,110.7L345.9,111.3L344.9,112.3L347.4,113.0L348.7,112.3L351.5,113.2L350.6,115.2L352.5,114.8L352.9,116.2L353.8,118.0L352.6,120.4L351.3,120.5L349.5,120.0L350.1,117.7L349.3,117.4L346.1,119.8L344.5,119.7L346.4,118.4L343.7,117.7L340.8,117.9L335.4,117.8L334.9,116.9L336.7,116.0L335.5,115.2L337.8,113.5L340.7,109.1L342.4,107.5L344.8,106.6L346.1,106.7L345.6,107.5L344.1,109.2ZM131.4,99.9L134.0,99.7L133.2,102.8L135.6,105.1L134.5,105.0L132.8,103.8L131.8,102.5L130.4,101.6L129.9,100.4L130.1,99.5L131.4,99.9ZM279.8,77.3L278.7,78.8L277.5,78.6L276.8,77.7L276.9,77.5L278.0,76.7L279.1,76.8L279.8,77.3ZM272.5,75.8L269.3,77.3L267.3,77.3L266.7,76.5L268.7,75.2L272.6,75.3L272.5,75.8ZM263.4,67.6L264.0,68.8L265.4,68.4L267.0,69.1L270.0,70.1L273.2,71.0L273.5,72.3L275.5,72.1L277.5,73.0L275.0,73.9L270.7,73.2L269.1,71.9L266.4,73.4L262.4,74.9L261.5,73.2L257.7,73.5L260.1,72.1L260.5,69.9L261.4,67.4L263.4,67.6ZM289.3,63.5L286.1,63.6L285.5,62.3L286.6,60.7L289.2,60.3L291.3,61.1L291.4,62.3L291.1,62.7L289.3,63.5ZM234.3,58.0L232.6,59.0L228.8,58.2L226.6,58.5L222.8,57.2L225.2,56.4L227.2,55.2L230.1,55.9L231.8,56.4L232.6,57.0L234.3,58.0ZM248.5,57.0L248.5,59.8L252.2,57.6L255.5,59.4L254.7,61.5L257.4,63.3L260.3,61.3L262.3,58.9L262.4,55.9L266.4,56.1L270.5,56.5L274.2,57.9L274.4,59.3L272.3,60.7L274.3,62.2L273.9,63.6L268.5,65.5L264.6,66.0L261.8,65.1L260.9,66.5L258.2,68.9L257.4,70.1L254.2,71.9L250.2,72.1L248.0,73.3L247.9,75.1L244.6,75.5L241.2,77.7L238.2,80.8L237.1,83.0L237.0,86.3L241.1,86.7L242.3,89.3L243.6,91.4L247.5,90.9L252.7,92.1L255.4,93.1L257.4,94.4L260.9,95.2L263.9,96.4L268.4,96.5L271.5,96.8L271.0,99.2L271.9,102.0L273.9,105.1L278.0,107.8L280.2,106.9L281.7,104.0L280.2,99.6L278.3,98.1L282.7,96.8L285.8,94.9L287.4,93.0L287.2,91.1L285.3,88.7L281.9,86.7L285.2,83.7L284.0,81.2L283.0,76.9L285.0,76.2L289.7,77.0L292.6,77.3L294.9,76.5L297.5,77.5L300.9,79.1L301.7,80.2L306.7,80.4L306.6,82.7L307.5,86.2L310.1,86.7L312.1,88.3L316.1,86.8L318.8,83.7L320.6,82.4L322.8,84.9L326.4,88.4L329.5,91.8L328.3,93.5L332.0,95.1L334.5,96.7L339.0,97.4L340.7,98.3L341.8,100.6L344.0,101.0L345.1,102.0L345.3,105.1L343.3,106.2L341.3,107.2L336.7,108.2L333.2,110.4L328.5,110.9L322.6,110.3L318.4,110.3L315.6,110.5L313.2,112.5L309.7,113.7L305.7,117.4L302.5,119.9L304.8,119.5L309.3,115.8L315.1,113.5L319.3,113.2L321.7,114.6L319.1,116.5L320.0,119.5L320.9,121.6L324.5,122.9L329.1,122.5L331.9,119.4L332.1,121.4L333.9,122.4L330.4,124.3L324.3,125.9L321.5,127.0L318.4,129.0L316.3,128.8L316.2,126.5L321.0,124.2L316.6,124.3L313.5,124.6L311.7,123.0L311.7,119.3L310.5,118.5L308.6,118.9L307.7,118.2L305.6,120.3L304.7,122.5L303.7,123.7L302.5,124.2L301.7,124.3L301.4,125.0L296.3,125.0L292.0,125.0L290.8,125.5L287.8,127.5L287.5,127.7L286.6,128.8L284.1,128.8L281.3,128.8L280.1,129.3L280.5,129.8L280.8,130.7L280.7,130.9L277.1,132.3L274.2,132.8L271.0,134.2L270.3,134.2L269.4,133.8L269.1,133.4L269.1,133.1L269.7,132.1L271.0,130.6L271.8,129.0L271.3,126.6L270.7,124.0L267.8,122.7L268.1,122.2L267.7,121.9L267.0,121.9L266.4,121.5L266.3,120.8L265.7,121.1L265.0,121.0L265.2,120.7L264.5,120.5L264.2,119.7L262.1,118.8L259.8,117.9L257.1,116.8L254.5,115.8L252.0,116.6L251.1,116.6L247.7,115.9L245.4,116.3L242.8,115.4L239.9,115.0L238.0,114.8L237.1,114.3L236.6,112.8L235.7,112.8L235.7,113.9L229.9,113.9L220.4,113.9L211.0,113.9L202.6,113.9L194.3,113.9L186.1,113.9L177.6,113.9L174.9,113.9L166.7,113.9L158.8,113.9L158.4,113.9L153.0,111.2L151.0,110.0L146.0,108.8L144.5,106.3L144.9,104.6L141.3,103.5L140.8,101.2L137.5,99.2L137.4,97.8L138.9,96.4L138.9,94.7L134.1,92.9L131.3,89.7L129.6,87.7L127.0,86.5L125.2,85.4L123.7,83.9L120.9,84.8L118.2,86.4L115.7,84.5L113.8,83.3L111.1,82.6L108.3,82.5L108.4,66.7L108.4,56.4L113.6,57.0L117.9,58.4L120.8,58.6L123.3,57.5L126.6,56.6L130.8,56.9L134.9,55.7L139.5,55.0L141.4,56.2L143.4,55.5L144.1,54.2L146.0,54.5L150.7,57.0L154.4,55.1L154.8,57.2L158.2,56.8L159.2,56.0L162.6,56.1L166.8,57.3L173.3,58.3L177.1,58.8L179.9,58.6L183.6,60.0L179.7,61.4L184.7,62.0L192.2,61.6L194.6,61.2L197.6,62.8L200.6,61.4L197.7,60.2L199.5,59.3L202.9,59.2L205.1,58.9L207.4,59.6L210.2,61.1L213.3,60.8L218.2,62.1L222.5,61.7L226.5,61.7L226.2,60.0L228.7,59.5L233.0,60.4L233.0,63.1L234.8,60.9L237.0,60.9L238.2,58.1L235.3,56.4L232.0,55.3L232.2,52.2L235.5,50.2L239.2,50.7L242.0,51.9L245.8,55.0L243.3,56.4L248.5,57.0ZM182.9,46.9L181.5,48.2L187.7,47.3L191.5,48.7L194.7,47.3L197.2,48.2L199.5,51.0L200.9,49.8L198.9,47.0L201.3,46.6L204.1,47.0L207.2,48.1L209.0,50.8L209.8,52.8L214.5,54.2L219.5,55.5L219.2,56.7L214.6,56.9L216.4,58.0L215.5,59.0L210.4,58.6L205.7,57.8L202.4,58.0L197.2,58.9L190.2,59.4L185.2,59.6L183.7,58.3L179.9,57.6L177.5,57.9L174.1,55.7L175.9,55.4L180.2,54.9L184.1,55.0L187.7,54.5L182.4,53.9L176.4,54.1L172.5,54.1L171.0,53.0L177.5,51.9L173.2,52.0L168.3,51.2L170.7,49.1L172.6,48.0L180.0,46.3L182.9,46.9ZM209.7,46.1L207.3,47.9L202.9,45.9L203.9,45.6L207.6,45.4L209.7,46.1ZM287.9,46.9L288.2,47.7L285.2,47.6L282.2,47.6L279.2,47.9L278.4,47.8L275.3,46.3L275.5,45.3L276.8,45.1L283.2,45.4L287.9,46.9ZM259.5,46.8L261.7,48.5L264.3,46.3L271.3,45.1L276.1,48.0L275.7,49.8L281.2,49.0L283.8,47.9L290.0,49.3L293.8,50.6L294.2,51.9L299.3,51.2L302.2,53.0L308.9,54.1L311.3,55.2L314.0,57.8L308.9,59.1L315.4,60.9L319.8,61.5L323.8,64.1L328.2,64.3L327.3,66.2L322.4,69.4L319.0,68.3L314.7,65.6L311.1,65.9L310.7,67.5L313.6,69.1L317.4,70.4L318.6,71.2L320.4,73.9L319.4,75.9L315.9,75.2L308.9,72.9L312.9,75.3L315.8,77.0L316.2,78.0L308.7,76.9L302.7,75.2L299.3,73.9L300.3,73.1L296.2,71.7L292.1,70.3L292.2,71.1L284.1,71.6L281.8,70.6L283.6,68.6L288.8,68.5L294.6,68.2L293.6,67.2L294.6,65.8L298.2,63.1L297.4,61.9L296.4,60.9L292.1,59.6L286.5,58.6L288.3,57.9L285.3,56.2L282.9,56.0L280.7,55.1L279.2,55.9L274.2,56.3L264.0,55.6L258.2,54.8L253.7,54.4L251.4,53.4L254.3,52.2L250.3,52.2L249.4,49.3L251.6,46.9L254.4,45.7L261.6,45.0L259.5,46.8ZM221.2,44.9L224.5,45.5L229.5,45.1L230.2,45.9L227.6,47.2L231.8,48.4L231.3,50.9L226.8,52.0L224.1,51.8L222.2,50.7L215.3,48.6L215.3,47.7L221.0,48.0L217.9,46.2L221.2,44.9ZM241.1,47.9L238.1,49.9L235.0,49.8L233.2,47.4L233.3,46.0L234.7,44.8L237.5,44.1L243.3,44.2L248.6,44.8L244.4,47.3L241.1,47.9ZM165.4,51.7L158.1,53.1L156.6,51.8L150.2,50.4L151.4,49.2L153.3,47.2L155.7,45.3L153.0,43.6L162.4,43.2L166.4,43.8L173.5,43.9L176.2,44.7L179.1,45.9L175.6,46.6L168.8,48.6L165.4,50.5L165.4,51.7ZM240.0,41.7L238.5,42.8L234.4,42.6L231.1,41.9L232.5,40.6L236.5,39.9L239.0,40.8L240.0,41.7ZM226.4,36.9L228.5,38.2L228.6,39.6L227.3,41.7L222.8,42.0L219.8,41.5L219.8,39.9L215.3,40.1L215.1,38.0L218.1,38.0L222.3,37.1L226.2,37.3L226.4,36.9ZM199.4,38.3L200.5,39.3L203.0,38.9L205.9,39.0L206.4,40.3L204.7,41.7L195.3,42.1L188.3,43.3L184.0,43.3L183.7,42.4L189.5,41.2L176.9,41.5L173.0,41.0L176.8,38.3L179.4,37.6L187.2,38.5L192.2,40.1L197.0,40.4L193.1,37.7L195.6,36.7L198.5,37.0L199.4,38.3ZM237.0,35.8L240.1,36.7L245.5,36.7L247.9,37.6L247.3,38.7L250.5,39.3L252.3,40.0L256.0,40.1L260.1,40.3L264.5,39.7L270.1,39.5L274.6,39.7L277.6,40.7L278.2,41.9L276.5,42.6L272.4,43.2L268.8,42.9L260.8,43.3L255.1,43.4L250.7,43.0L243.3,42.1L242.3,40.6L242.0,39.2L239.2,38.0L233.4,37.7L230.2,36.8L231.3,35.7L237.0,35.8ZM177.2,34.3L176.8,36.5L174.7,37.4L172.1,37.6L166.9,38.7L162.5,39.2L158.7,38.6L158.7,38.6L163.5,36.5L169.2,34.7L173.4,34.7L177.2,34.3ZM239.3,34.7L238.1,34.7L232.9,34.6L232.1,33.8L237.7,33.8L239.7,34.3L239.3,34.7ZM193.9,34.2L188.7,35.0L184.6,34.1L186.9,33.2L190.9,32.9L194.8,33.3L193.9,34.2ZM195.4,31.7L192.0,32.2L187.4,32.2L187.4,31.8L190.3,31.0L191.8,31.1L195.4,31.7ZM233.8,33.2L229.7,33.7L227.4,33.1L226.2,32.1L226.0,30.9L229.6,31.0L231.2,31.2L234.6,32.2L233.8,33.2ZM222.1,32.4L223.1,33.6L218.6,33.3L214.0,32.4L207.8,32.3L210.5,31.5L207.2,30.8L207.0,29.7L212.4,30.1L219.9,31.1L222.1,32.4ZM258.3,28.7L261.6,29.6L257.8,30.4L252.7,32.5L247.8,32.7L242.0,32.4L239.0,31.2L239.1,30.2L241.3,29.5L236.2,29.5L233.1,28.6L231.4,27.3L233.3,26.1L235.2,25.3L238.1,25.1L236.8,24.4L243.3,24.3L246.9,25.8L251.5,26.4L256.1,26.9L258.3,28.7ZM309.7,19.1L317.1,19.4L323.1,19.7L328.2,20.5L328.1,21.2L321.3,22.4L314.6,23.0L312.1,23.6L318.1,23.6L311.6,25.3L307.0,26.1L302.3,28.3L296.5,28.8L294.8,29.4L286.4,29.7L290.2,30.0L288.3,30.5L290.6,31.9L287.9,32.8L283.6,33.6L282.3,34.7L278.4,35.5L278.8,36.2L283.6,36.0L283.6,36.7L276.2,38.4L269.0,37.6L260.8,38.1L256.7,37.7L251.4,37.6L251.1,36.2L256.2,35.6L254.8,33.6L256.5,33.4L264.0,34.6L260.2,32.8L255.7,32.3L257.9,31.2L262.8,30.6L263.6,29.6L259.7,28.5L258.5,27.1L266.1,27.2L268.3,27.5L272.6,26.5L266.4,26.2L256.7,26.3L251.8,25.4L249.4,24.3L246.2,23.5L245.6,22.5L249.7,22.0L253.0,21.9L258.4,21.4L262.5,20.4L265.9,20.6L268.9,21.3L271.1,19.8L274.7,19.4L279.7,19.1L288.2,19.0L289.7,19.3L297.7,18.8L303.7,19.0L309.7,19.1Z",cx:248.3,cy:93.1},{name:"Switzerland",cn:"瑞士",d:"M526.7,118.0L526.8,118.5L526.3,119.2L527.6,119.7L529.0,119.7L528.8,120.9L527.6,121.3L525.5,121.0L524.9,122.1L523.6,122.2L523.1,121.8L521.5,122.7L520.2,122.8L519.0,122.2L518.1,121.0L516.7,121.5L516.8,120.2L518.8,118.6L518.7,117.9L520.0,118.2L520.7,117.7L523.1,117.7L523.7,117.1L526.7,118.0Z",cx:523.1,cy:120},{name:"Chile",cn:"智利",d:"M309.3,396.2L309.4,402.4L312.3,402.4L314.0,402.5L313.1,403.6L310.7,404.5L309.3,404.4L307.7,404.2L305.7,403.3L302.8,402.9L299.3,401.4L296.4,399.9L292.6,396.8L294.9,397.4L298.8,399.2L302.5,400.2L303.9,398.9L304.8,397.0L307.4,395.9L309.3,396.2ZM310.5,309.7L311.6,313.5L313.6,313.2L313.9,313.9L313.0,316.7L310.0,318.1L310.0,322.7L309.5,323.6L310.3,324.7L308.3,326.4L306.5,329.1L305.5,331.6L305.8,334.3L304.1,337.1L305.3,341.9L306.1,342.4L306.1,345.0L304.5,347.7L304.5,350.0L302.4,351.8L302.4,354.4L303.3,357.1L301.6,358.1L300.9,360.6L300.2,363.4L300.7,366.8L299.6,367.4L300.2,370.6L301.5,371.6L300.6,372.8L301.9,373.4L302.2,374.4L300.9,374.9L301.2,376.6L300.2,380.2L298.8,382.6L299.1,384.0L298.2,385.8L296.1,387.0L296.3,389.9L297.3,390.9L299.1,390.8L299.1,392.8L300.2,394.5L306.9,394.8L309.5,395.3L307.1,395.3L305.7,395.9L303.2,396.9L302.8,399.5L301.6,399.6L298.5,398.7L295.3,396.8L295.3,396.8L291.8,395.2L290.9,393.4L291.7,391.8L290.3,389.9L290.0,385.2L291.2,382.5L294.1,380.4L289.9,379.6L292.5,377.1L293.5,372.5L296.6,373.5L298.0,367.7L296.1,367.0L295.3,370.5L293.5,370.1L294.4,366.1L295.3,361.0L296.6,359.1L295.8,356.3L295.6,353.2L296.8,353.1L298.5,348.6L300.4,344.2L301.6,340.1L300.9,335.9L301.7,333.6L301.4,330.2L303.0,326.8L303.5,321.4L304.4,315.6L305.3,309.4L305.1,304.9L304.5,301.0L305.9,300.3L306.7,298.8L308.1,300.7L308.4,302.7L309.9,303.9L309.0,306.6L310.5,309.7Z",cx:301.6,cy:356},{name:"China",cn:"中国",d:"M806.5,198.1L804.1,199.5L801.8,198.6L801.7,196.2L803.1,194.9L806.1,194.2L807.7,194.2L808.4,195.3L807.1,196.5L806.5,198.1ZM854.6,111.8L859.4,112.7L862.7,114.6L863.9,117.2L868.1,117.3L870.5,116.2L875.1,115.3L873.6,117.8L872.5,118.9L871.6,121.9L869.7,124.6L866.3,124.1L864.0,125.1L864.7,127.5L864.3,130.8L862.9,130.8L862.9,132.2L861.1,130.6L860.0,132.2L855.7,133.3L856.1,134.8L853.7,134.7L852.4,133.8L850.5,135.8L847.4,137.3L845.2,139.1L841.3,139.9L839.3,141.2L836.3,142.0L837.7,140.7L837.2,139.6L839.4,137.7L837.9,136.3L835.5,137.2L832.3,139.2L830.6,141.0L827.9,141.1L826.5,142.4L827.9,144.3L830.2,144.7L830.3,146.0L832.5,146.8L835.6,144.8L838.1,145.9L839.9,146.0L840.3,147.4L836.4,148.2L835.1,149.7L832.4,151.1L831.0,153.0L834.0,154.6L835.1,157.3L836.7,159.8L838.6,162.0L838.6,164.0L836.8,164.8L837.5,166.3L839.1,167.1L838.7,169.4L838.0,171.6L836.5,171.8L834.4,174.9L832.2,178.5L829.6,181.8L825.8,184.4L821.9,186.7L818.8,187.0L817.1,188.3L816.1,187.4L814.6,188.7L810.7,190.1L807.7,190.6L806.8,193.5L805.2,193.7L804.5,191.6L805.2,190.6L801.5,189.7L800.1,190.1L797.3,189.4L796.0,188.3L796.5,186.7L793.9,186.2L792.6,185.1L790.2,186.6L787.5,186.9L785.3,186.9L783.8,187.6L782.4,188.0L782.8,191.2L781.3,191.1L781.1,190.5L781.0,189.3L778.9,190.1L777.7,189.6L775.7,188.6L776.5,186.3L774.7,185.7L774.1,183.2L771.1,183.6L771.5,180.3L774.1,178.0L774.2,175.7L774.1,173.6L772.9,172.9L772.0,171.3L770.4,171.5L767.4,171.1L768.3,169.9L767.0,168.2L765.0,169.4L762.7,168.7L759.5,170.4L757.0,172.5L754.7,172.9L753.5,172.1L752.0,172.0L750.0,171.4L748.5,172.1L746.7,174.2L746.5,172.0L744.8,172.6L741.5,172.3L738.4,171.7L736.1,170.4L734.0,169.9L733.1,168.6L731.5,168.2L728.7,166.3L726.5,165.5L725.3,166.2L721.4,164.2L718.7,162.5L717.9,159.4L719.9,159.8L720.0,158.3L718.9,156.9L719.2,154.7L716.2,151.4L711.6,150.3L710.8,148.1L708.8,146.9L708.3,146.1L707.9,144.5L708.0,143.4L706.3,142.8L705.4,143.0L704.7,140.5L705.4,139.8L705.1,139.2L707.7,137.9L709.6,137.3L712.6,137.7L713.6,135.9L717.2,135.6L718.2,134.5L722.6,133.0L722.9,132.4L722.7,130.8L724.6,130.1L722.1,125.2L727.6,124.1L729.1,123.5L731.1,118.5L736.6,119.4L738.1,118.2L738.2,115.4L740.6,115.1L742.7,113.3L743.8,113.1L744.5,115.0L746.8,116.5L750.8,117.5L752.7,119.8L751.6,123.0L752.6,124.2L755.9,124.7L759.7,125.1L763.0,126.8L764.7,127.1L766.0,129.7L767.6,131.3L770.7,131.3L776.4,131.9L780.1,131.5L782.9,131.9L787.0,133.6L790.3,133.6L791.6,134.5L794.8,133.0L799.3,132.0L803.5,131.9L806.7,130.9L808.7,129.4L810.6,128.5L810.2,127.6L809.3,126.5L810.8,124.7L812.3,125.0L815.2,125.5L817.9,124.1L822.2,123.0L824.2,121.1L826.2,120.4L830.2,120.0L832.4,120.3L832.7,119.3L830.2,117.4L828.0,116.5L825.8,117.5L823.1,117.1L821.5,117.4L820.8,116.3L822.8,113.5L824.1,111.4L827.4,112.5L831.4,110.7L831.3,109.5L833.8,106.5L835.4,105.7L835.3,104.1L833.8,103.5L836.1,102.1L839.6,101.6L843.3,101.5L847.4,102.3L849.9,103.4L851.6,106.2L852.6,107.4L853.6,109.1L854.6,111.8Z",cx:794.1,cy:146.3},{name:"Ivory Coast",cn:"Ivory Coast",d:"M492.1,236.1L490.8,236.2L488.9,235.6L487.1,235.6L483.8,236.1L481.9,236.9L479.1,237.9L478.6,237.9L478.8,235.6L479.1,235.2L479.0,234.1L477.8,233.0L476.9,232.8L476.1,232.0L476.7,230.8L476.4,229.5L476.6,228.6L477.0,228.6L477.2,227.4L476.9,226.9L477.2,226.5L478.2,226.2L477.6,224.0L476.9,222.8L477.1,221.9L477.7,221.6L478.1,221.4L478.8,221.8L481.0,221.8L481.5,221.0L482.0,221.1L482.8,220.8L483.2,222.0L483.8,221.6L485.0,221.2L486.2,221.8L486.7,222.7L488.0,223.3L488.9,222.6L490.2,222.5L492.1,223.2L492.9,227.2L491.7,229.5L491.0,232.6L492.2,235.0L492.1,236.1Z",cx:482.7,cy:228.2},{name:"Cameroon",cn:"喀麦隆",d:"M536.3,243.7L536.0,243.6L534.3,243.9L532.6,243.5L531.3,243.7L526.8,243.7L527.2,241.5L526.1,239.6L524.9,239.2L524.3,237.9L523.6,237.5L523.6,236.7L524.3,234.8L525.6,232.1L526.5,232.1L528.1,230.4L529.2,230.4L530.7,231.5L532.6,230.6L532.9,229.5L533.5,228.3L533.9,226.9L535.4,225.8L536.0,223.8L536.6,223.2L537.0,221.8L537.7,220.0L540.0,217.9L540.2,216.9L540.5,216.4L539.4,215.3L539.5,214.4L540.3,214.3L541.4,216.1L541.6,217.9L541.5,219.7L543.0,222.3L541.4,222.2L540.6,222.4L539.4,222.2L538.8,223.5L540.4,225.1L541.6,225.6L542.0,226.7L542.9,228.6L542.4,229.4L541.0,232.2L540.4,232.7L540.2,234.9L540.4,236.0L540.2,236.9L541.5,238.3L541.8,239.3L542.8,240.7L544.1,241.6L544.2,242.9L544.5,243.7L544.3,245.2L542.1,244.5L539.8,243.8L536.3,243.7Z",cx:536.5,cy:231.3},{name:"Democratic Republic of the Congo",cn:"刚果(金)",d:"M585.6,240.3L585.5,243.5L586.6,243.9L585.7,244.9L584.6,245.6L583.6,247.0L583.0,248.3L582.8,250.6L582.2,251.6L582.2,253.7L581.4,254.5L581.3,256.2L580.9,256.4L580.6,257.9L581.3,259.1L581.5,262.5L582.0,265.1L581.7,266.5L582.3,268.1L583.9,269.7L585.4,273.2L584.3,272.9L580.6,273.4L579.8,273.7L579.0,275.5L579.6,276.7L579.2,280.0L578.8,282.8L579.6,283.3L581.5,284.3L582.3,283.8L582.5,286.8L580.4,286.8L579.2,285.3L578.2,284.1L576.1,283.7L575.5,282.2L573.8,283.1L571.5,282.7L570.6,281.5L568.8,281.2L567.5,281.3L567.4,280.4L566.4,280.4L565.2,280.2L563.4,280.6L562.2,280.5L561.5,280.8L561.7,277.5L560.8,276.5L560.6,274.7L561.0,273.1L560.4,272.0L560.4,270.3L557.0,270.3L557.2,269.3L555.8,269.3L555.7,269.8L553.9,269.9L553.2,271.5L552.8,272.2L551.3,271.8L550.4,272.2L548.5,272.4L547.5,271.0L546.8,270.1L546.0,268.4L545.4,266.3L537.2,266.3L536.2,266.6L535.4,266.6L534.2,266.9L533.8,266.1L534.5,265.8L534.6,264.6L535.1,263.9L536.1,263.3L536.8,263.6L537.8,262.5L539.3,262.5L539.5,263.3L540.5,263.8L542.1,262.1L543.8,260.7L544.5,259.8L544.4,257.5L545.6,254.8L546.8,253.4L548.7,252.1L549.0,251.2L549.1,250.2L549.5,249.2L549.4,247.6L549.7,245.2L550.3,243.4L551.1,241.9L551.3,240.3L551.5,238.3L552.6,236.9L554.1,236.0L556.4,237.0L558.1,238.0L560.2,238.3L562.2,238.8L563.1,237.1L563.4,236.9L564.7,237.2L567.8,235.8L568.9,236.4L569.8,236.3L570.2,235.6L571.3,235.4L573.3,235.7L575.1,235.8L576.0,235.5L577.7,237.8L579.0,238.1L579.7,237.6L581.0,237.8L582.5,237.2L583.2,238.4L585.6,240.3Z",cx:563.9,cy:260.5},{name:"Republic of the Congo",cn:"刚果(布)",d:"M536.1,263.3L535.1,262.3L534.2,262.8L533.1,264.0L530.8,261.1L532.9,259.5L531.9,257.7L532.8,257.0L534.7,256.6L534.9,255.4L536.4,256.7L538.9,256.9L539.7,255.6L540.1,253.7L539.8,251.5L538.5,249.9L539.7,246.7L539.0,246.1L536.9,246.3L536.1,244.9L536.3,243.7L539.8,243.8L542.1,244.5L544.3,245.2L544.5,243.7L545.9,241.1L547.6,239.6L549.5,240.1L551.3,240.3L551.1,241.9L550.3,243.4L549.7,245.2L549.4,247.6L549.5,249.2L549.1,250.2L549.0,251.2L548.7,252.1L546.8,253.4L545.6,254.8L544.4,257.5L544.5,259.8L543.8,260.7L542.1,262.1L540.5,263.8L539.5,263.3L539.3,262.5L537.8,262.5L536.8,263.6L536.1,263.3Z",cx:541.2,cy:253},{name:"Colombia",cn:"哥伦比亚",d:"M290.6,250.4L289.4,249.8L288.1,248.8L287.3,249.3L284.9,248.9L284.3,247.7L283.7,247.8L281.0,246.2L280.6,245.3L281.6,245.1L281.5,243.7L282.1,242.7L283.5,242.5L284.7,240.8L285.8,239.3L284.7,238.6L285.3,237.0L284.6,234.5L285.2,233.8L284.8,231.4L283.7,229.9L284.0,228.6L284.9,228.8L285.4,228.0L284.8,226.3L285.1,225.9L286.6,226.0L288.6,224.1L289.8,223.8L289.8,222.8L290.3,220.5L291.9,219.2L293.7,219.2L293.9,218.6L296.1,218.8L298.3,217.4L299.3,216.8L300.7,215.5L301.7,215.6L302.4,216.4L301.9,217.3L300.1,217.8L299.4,219.1L298.3,219.9L297.5,221.0L297.1,223.0L296.4,224.6L297.8,224.8L298.2,226.0L298.8,226.7L299.0,227.8L298.7,228.8L298.8,229.4L299.4,229.6L300.1,230.6L303.7,230.3L305.3,230.7L307.3,233.1L308.4,232.8L310.4,232.9L312.0,232.6L312.9,233.1L312.4,234.6L311.8,235.5L311.6,237.5L312.2,239.3L313.0,240.2L313.0,240.8L311.6,242.2L312.6,242.8L313.4,243.7L314.2,246.5L313.7,246.9L313.2,245.2L312.4,244.3L311.5,245.3L306.1,245.2L306.1,247.0L307.7,247.3L307.6,248.3L307.1,248.0L305.5,248.5L305.5,250.5L306.7,251.5L307.2,253.1L307.1,254.3L305.9,261.9L304.5,260.5L303.6,260.4L305.4,257.6L303.3,256.3L301.6,256.5L300.6,256.0L299.1,256.8L297.0,256.4L295.4,253.5L294.1,252.8L293.2,251.5L291.4,250.2L290.6,250.4Z",cx:298,cy:237.6},{name:"Costa Rica",cn:"哥斯达黎加",d:"M269.5,227.2L268.0,226.5L267.5,226.0L267.8,225.5L267.7,224.9L266.9,224.2L265.8,223.6L264.9,223.3L264.7,222.5L264.0,222.0L264.1,222.8L263.6,223.5L262.9,222.7L262.1,222.4L261.7,221.8L261.7,221.0L262.1,220.1L261.3,219.7L261.9,219.2L262.3,218.8L264.2,219.6L264.8,219.2L265.7,219.4L266.1,220.0L267.0,220.2L267.6,219.6L268.3,221.1L269.4,222.2L270.7,223.4L269.6,223.7L269.6,224.8L270.2,225.2L269.8,225.5L269.9,226.0L269.7,226.6L269.5,227.2Z",cx:266.2,cy:222.8},{name:"Cuba",cn:"古巴",d:"M271.5,185.6L273.9,185.8L276.1,185.8L278.7,186.8L279.8,187.8L282.4,187.5L283.4,188.1L285.7,189.8L287.4,191.1L288.3,191.1L290.0,191.6L289.8,192.4L291.9,192.5L293.9,193.7L293.6,194.3L291.8,194.7L289.9,194.8L288.0,194.6L284.0,194.8L285.9,193.3L284.7,192.6L283.0,192.4L282.0,191.6L281.3,190.0L279.8,190.1L277.2,189.4L276.3,188.8L272.7,188.4L271.8,187.8L272.8,187.1L270.1,187.0L268.1,188.4L266.9,188.5L266.5,189.1L265.1,189.4L264.0,189.2L265.4,188.3L266.0,187.3L267.3,186.7L268.7,186.2L270.8,185.9L271.5,185.6Z",cx:278.5,cy:189.7},{name:"Northern Cyprus",cn:"Northern Cyprus",d:"M590.9,152.4L591.1,152.4L591.5,151.7L593.5,151.7L596.0,150.9L594.2,152.1L594.4,152.6L594.1,152.5L593.5,152.7L593.1,152.7L593.0,152.8L592.9,152.5L592.7,152.3L592.2,152.3L591.4,152.5L590.9,152.4Z",cx:592.9,cy:152.3},{name:"Cyprus",cn:"Cyprus",d:"M594.4,152.6L594.5,152.8L591.6,154.0L590.3,153.6L589.6,152.5L590.9,152.4L591.4,152.5L592.2,152.3L592.7,152.3L592.9,152.5L593.0,152.8L593.1,152.7L593.5,152.7L594.1,152.5L594.4,152.6Z",cx:592.6,cy:152.7},{name:"Czech Republic",cn:"捷克",d:"M547.1,115.0L545.8,114.5L544.5,114.6L542.4,113.8L541.4,114.0L539.8,115.1L537.8,114.2L536.2,113.0L534.8,112.4L534.5,111.2L534.0,110.4L536.0,109.8L537.1,109.1L539.0,108.5L539.7,108.0L540.5,108.3L541.7,108.0L543.0,108.9L545.1,109.2L544.9,109.9L546.4,110.5L546.9,109.8L548.8,110.1L549.0,111.0L551.1,111.1L552.4,112.5L551.5,112.5L551.1,113.0L550.5,113.1L550.3,113.8L549.8,113.9L549.7,114.2L548.7,114.4L547.5,114.4L547.1,115.0Z",cx:544.2,cy:111.9},{name:"Germany",cn:"德国",d:"M527.6,97.3L527.6,98.3L530.4,99.0L530.4,100.0L533.2,99.5L534.8,98.7L537.9,99.8L539.2,100.7L539.9,102.1L539.1,102.8L540.1,103.8L540.8,105.3L540.6,106.3L541.7,108.0L540.5,108.3L539.7,108.0L539.0,108.5L537.1,109.1L536.0,109.8L534.0,110.4L534.5,111.2L534.8,112.4L536.2,113.0L537.8,114.2L536.8,115.5L535.8,115.9L536.2,117.7L535.9,118.1L535.1,117.6L533.7,117.5L531.7,118.0L529.3,117.9L528.9,118.6L527.5,117.8L526.7,118.0L523.7,117.1L523.1,117.7L520.7,117.7L521.1,115.7L522.5,113.8L518.5,113.3L517.2,112.6L517.3,111.4L516.8,110.8L517.1,108.9L516.6,106.0L518.3,106.0L519.0,104.9L519.7,102.4L519.2,101.4L519.7,100.9L522.0,100.7L522.6,101.3L524.4,99.9L523.8,98.9L523.7,97.3L525.8,97.7L527.6,97.3Z",cx:529.5,cy:108.2},{name:"Djibouti",cn:"Djibouti",d:"M619.7,214.7L620.3,215.6L620.2,216.7L618.7,217.4L619.8,218.2L618.8,219.6L618.2,219.2L617.5,219.3L616.0,219.3L615.9,218.5L615.7,217.7L616.7,216.4L617.6,215.2L618.8,215.4L619.7,214.7Z",cx:618.3,cy:217.2},{name:"Denmark",cn:"丹麦",d:"M535.3,95.5L533.6,97.8L530.7,96.2L530.3,95.1L534.4,94.1L535.3,95.5ZM530.3,93.2L529.6,94.2L528.8,93.9L526.8,95.9L527.6,97.3L525.8,97.7L523.7,97.3L522.6,95.8L522.5,92.9L522.9,92.2L523.7,91.4L526.2,91.2L527.2,90.4L529.4,89.6L529.3,91.1L528.5,92.0L528.8,92.8L530.3,93.2Z",cx:526.9,cy:93.4},{name:"Dominican Republic",cn:"多米尼加",d:"M300.8,195.2L301.1,194.8L303.3,194.8L305.0,195.5L305.7,195.4L306.2,196.4L307.7,196.4L307.6,197.2L308.9,197.3L310.2,198.3L309.2,199.4L307.9,198.8L306.6,198.9L305.7,198.8L305.2,199.3L304.1,199.5L303.7,198.8L302.8,199.2L301.7,201.1L301.0,200.7L300.8,199.9L300.9,199.1L300.2,198.3L300.8,197.8L301.0,196.8L300.8,195.2Z",cx:304.2,cy:197.8},{name:"Algeria",cn:"阿尔及利亚",d:"M533.3,184.8L523.8,190.1L515.8,195.6L511.9,196.8L508.8,197.1L508.7,195.3L507.5,194.8L505.7,194.0L505.1,192.7L495.7,186.7L486.3,180.6L475.9,173.9L475.9,173.4L475.9,173.2L475.9,169.9L480.4,167.8L483.2,167.4L485.4,166.7L486.5,165.3L489.7,164.2L489.9,162.1L491.5,161.9L492.7,160.8L496.4,160.4L496.9,159.3L496.1,158.7L495.2,155.8L495.0,154.1L494.0,152.3L496.6,150.8L499.6,150.3L501.4,149.2L504.1,148.3L508.8,147.8L513.4,147.6L514.8,148.0L517.4,146.9L520.4,146.9L521.5,147.5L523.4,147.4L522.8,148.8L523.3,151.4L522.6,153.7L520.9,155.3L521.1,157.4L523.4,159.0L523.4,159.7L525.2,160.8L526.3,165.8L527.2,168.3L527.4,169.6L526.9,171.8L527.1,173.1L526.7,174.6L527.0,176.4L525.9,177.5L527.5,179.5L527.6,180.7L528.6,182.3L529.9,181.8L532.1,183.1L533.3,184.8Z",cx:509.3,cy:167.8},{name:"Ecuador",cn:"厄瓜多尔",d:"M276.9,259.5L278.4,257.4L277.8,256.2L276.8,257.5L275.1,256.2L275.7,255.5L275.2,252.9L276.2,252.5L276.7,250.8L277.7,249.0L277.5,247.9L279.0,247.3L281.0,246.2L283.7,247.8L284.3,247.7L284.9,248.9L287.3,249.3L288.1,248.8L289.4,249.8L290.6,250.4L291.0,252.5L290.2,254.3L287.1,257.2L283.8,258.3L282.1,260.8L281.6,262.6L280.0,263.8L278.8,262.4L277.7,262.1L276.5,262.3L276.5,261.3L277.3,260.6L276.9,259.5Z",cx:281,cy:254.8},{name:"Egypt",cn:"埃及",d:"M597.0,168.1L596.2,169.2L595.6,171.3L594.9,172.7L594.2,173.2L593.3,172.3L592.0,171.1L590.1,167.1L589.8,167.3L590.9,170.3L592.6,173.1L594.7,177.4L595.8,178.9L596.7,180.5L599.1,183.5L598.6,184.0L598.7,185.8L601.9,188.3L602.4,188.9L591.4,188.9L580.6,188.9L569.4,188.9L569.4,178.7L569.4,168.8L568.6,166.5L569.3,164.8L568.9,163.6L569.9,162.3L573.6,162.3L576.3,163.0L579.0,163.8L580.3,164.2L582.5,163.4L583.6,162.6L586.0,162.3L588.0,162.7L588.8,164.1L589.4,163.2L591.6,163.8L593.8,164.0L595.2,163.3L597.0,168.1Z",cx:587.5,cy:171.5},{name:"Eritrea",cn:"Eritrea",d:"M617.6,215.2L616.7,214.3L615.6,212.6L614.3,211.7L613.6,210.8L611.2,209.7L609.3,209.6L608.6,209.1L607.0,209.7L605.3,208.4L604.4,210.5L601.2,209.9L600.9,208.8L602.1,204.7L602.4,202.9L603.2,202.0L605.3,201.6L606.7,200.0L608.3,203.2L609.1,205.8L610.6,207.1L614.4,209.7L615.9,211.3L617.4,212.9L618.3,213.9L619.7,214.7L618.8,215.4L617.6,215.2Z",cx:610.6,cy:209.3},{name:"Spain",cn:"西班牙",d:"M474.9,133.7L475.0,131.7L473.9,130.5L477.8,128.5L481.2,129.0L485.0,129.0L487.9,129.4L490.2,129.3L494.7,129.4L495.8,130.5L500.9,131.7L501.9,131.1L505.1,132.4L508.3,132.0L508.4,133.6L505.8,135.5L502.3,136.1L502.0,137.0L500.3,138.5L499.2,140.8L500.3,142.4L498.7,143.6L498.1,145.4L496.0,146.0L494.0,148.1L490.5,148.2L487.9,148.1L486.1,149.1L485.1,150.1L483.7,149.9L482.7,149.0L481.9,147.4L479.3,147.0L479.1,146.0L480.1,145.0L480.5,144.2L479.5,143.4L480.3,141.6L479.2,139.9L480.4,139.7L480.5,138.4L480.9,138.0L481.0,135.8L482.3,135.1L481.5,133.7L479.9,133.6L479.4,133.9L477.7,133.9L477.0,132.6L475.9,133.0L474.9,133.7Z",cx:487.6,cy:138.1},{name:"Estonia",cn:"爱沙尼亚",d:"M567.5,89.5L567.9,87.8L566.8,88.2L565.1,87.2L564.8,85.6L568.3,84.8L571.8,84.4L574.9,84.9L577.7,84.8L578.1,85.3L576.2,86.9L577.0,89.5L575.8,90.3L573.5,90.3L571.1,89.3L569.9,89.0L567.5,89.5Z",cx:571.4,cy:87.5},{name:"Ethiopia",cn:"埃塞俄比亚",d:"M605.3,208.4L607.0,209.7L608.6,209.1L609.3,209.6L611.2,209.7L613.6,210.8L614.3,211.7L615.6,212.6L616.7,214.3L617.6,215.2L616.7,216.4L615.7,217.7L615.9,218.5L616.0,219.3L617.5,219.3L618.2,219.2L618.8,219.6L618.2,220.6L619.2,222.2L620.3,223.5L621.3,224.5L630.4,227.8L632.7,227.8L624.9,236.1L621.3,236.2L618.8,238.2L617.0,238.2L616.3,239.1L614.4,239.1L613.2,238.2L610.7,239.3L609.9,240.5L608.0,240.3L607.4,240.0L606.8,240.0L605.9,240.0L602.4,237.6L600.4,237.6L599.5,236.7L599.5,235.2L598.1,234.7L596.4,231.7L595.1,231.0L594.7,229.9L593.2,228.6L591.5,228.4L592.5,226.8L594.0,226.7L594.4,225.9L594.3,223.4L595.2,220.5L596.5,219.7L596.8,218.6L597.9,216.4L599.6,215.1L600.8,212.3L601.2,209.9L604.4,210.5L605.3,208.4Z",cx:608.4,cy:224.7},{name:"Finland",cn:"芬兰",d:"M579.4,58.2L579.0,60.1L583.3,61.9L580.7,64.0L583.9,67.2L582.1,69.6L584.6,71.7L583.4,73.5L587.5,75.4L586.5,76.8L583.9,78.4L578.0,81.9L572.9,82.2L568.0,83.2L563.5,83.8L561.9,82.2L559.2,81.3L559.8,78.6L558.5,76.1L559.8,74.5L562.3,72.7L568.7,69.7L570.6,69.1L570.3,68.0L566.4,66.6L565.5,65.6L565.4,61.3L561.1,59.4L557.3,58.0L559.0,57.3L562.1,58.8L565.7,58.6L568.7,59.3L571.4,58.1L572.7,56.0L577.0,55.1L580.6,56.2L579.4,58.2Z",cx:571.6,cy:68.1},{name:"Fiji",cn:"斐济",d:"M995.5,298.2L996.4,299.0L996.0,300.4L994.3,300.8L992.7,300.5L992.5,299.2L993.5,298.3L994.8,298.6L995.5,298.2ZM998.2,296.7L996.5,297.3L996.1,296.2L997.5,295.6L998.4,295.5L1000.0,294.6L1000.0,296.0L998.2,296.7ZM0.2,295.8L0.0,296.0L0.0,294.6L0.6,294.5L0.2,295.8Z",cx:994.6,cy:299.2},{name:"Falkland Islands",cn:"Falkland Islands",d:"M330.0,394.0L333.3,392.4L335.7,393.1L337.4,391.9L339.6,393.2L338.8,394.2L335.0,395.0L333.8,394.0L331.4,395.3L330.0,394.0Z",cx:334.5,cy:393.7},{name:"France",cn:"法国",d:"M526.6,132.9L525.6,135.1L524.4,134.5L523.7,132.6L524.3,131.6L526.1,130.5L526.6,132.9ZM510.0,110.1L511.9,111.4L513.3,111.2L515.8,112.4L516.4,112.7L517.2,112.6L518.5,113.3L522.5,113.8L521.1,115.7L520.7,117.7L520.0,118.2L518.7,117.9L518.8,118.6L516.8,120.2L516.7,121.5L518.1,121.0L519.0,122.2L518.9,123.0L519.7,124.1L518.7,124.9L519.5,127.1L521.0,127.4L520.7,128.6L518.1,130.2L512.7,129.4L508.6,130.3L508.3,132.0L505.1,132.4L501.9,131.1L500.9,131.7L495.8,130.5L494.7,129.4L496.2,127.7L496.7,122.2L493.8,119.3L491.8,117.9L487.5,116.8L487.2,114.8L490.8,114.2L495.5,114.9L494.6,111.7L497.3,112.9L503.7,110.8L504.6,108.5L507.0,107.9L507.4,108.9L508.7,108.9L510.0,110.1Z",cx:509,cy:119.4},{name:"Gabon",cn:"加蓬",d:"M530.8,261.1L528.0,258.2L526.1,256.0L524.4,253.1L524.5,252.2L525.1,251.3L525.8,249.3L526.4,247.2L527.3,247.0L531.3,247.1L531.3,243.7L532.6,243.5L534.3,243.9L536.0,243.6L536.3,243.7L536.1,244.9L536.9,246.3L539.0,246.1L539.7,246.7L538.5,249.9L539.8,251.5L540.1,253.7L539.7,255.6L538.9,256.9L536.4,256.7L534.9,255.4L534.7,256.6L532.8,257.0L531.9,257.7L532.9,259.5L530.8,261.1Z",cx:533,cy:251.5},{name:"United Kingdom",cn:"英国",d:"M484.3,98.5L482.8,100.4L480.7,99.8L479.0,99.8L479.5,98.3L479.0,96.9L481.3,96.7L484.3,98.5ZM491.7,87.1L488.7,90.1L491.5,89.7L494.6,89.8L493.8,92.0L491.3,94.5L494.2,94.7L494.4,95.0L496.9,98.3L498.8,98.7L500.5,101.9L501.3,103.0L504.7,103.5L504.3,105.3L502.9,106.1L504.0,107.5L501.5,109.0L497.8,109.0L493.1,109.7L491.8,109.2L490.0,110.5L487.4,110.2L485.4,111.2L484.0,110.7L488.0,107.7L490.5,107.1L490.5,107.1L486.2,106.7L485.4,105.6L488.3,104.7L486.7,103.2L487.3,101.4L491.4,101.7L491.4,101.7L491.8,100.0L490.0,98.3L489.9,98.3L486.5,97.8L485.9,97.1L486.9,95.8L486.0,95.0L484.5,96.4L484.3,93.7L482.9,92.3L483.9,89.4L486.1,87.1L488.3,87.4L491.7,87.1Z",cx:491.4,cy:100},{name:"Georgia",cn:"格鲁吉亚",d:"M615.4,134.6L615.8,133.4L615.1,131.5L613.5,130.5L612.0,130.2L611.0,129.3L611.3,129.0L613.7,129.5L617.8,129.9L621.5,131.3L622.0,131.8L623.7,131.4L626.3,131.9L627.2,133.1L628.9,133.7L628.2,134.1L629.5,135.6L629.2,135.9L627.7,135.8L625.6,135.0L624.9,135.4L621.1,135.9L618.4,134.5L615.4,134.6Z",cx:620.6,cy:132.8},{name:"Ghana",cn:"加纳",d:"M502.9,233.5L498.6,235.2L497.0,236.1L494.5,236.9L492.1,236.1L492.2,235.0L491.0,232.6L491.7,229.5L492.9,227.2L492.1,223.2L491.8,221.1L491.8,219.5L496.7,219.4L497.9,219.6L498.8,219.2L500.1,219.4L499.9,220.3L501.0,221.7L501.0,223.7L501.3,225.9L502.0,226.9L501.4,229.4L501.6,230.8L502.3,232.6L502.9,233.5Z",cx:497.4,cy:227.5},{name:"Guinea",cn:"Guinea",d:"M476.6,228.6L475.8,228.6L475.2,229.7L474.4,229.7L473.9,229.1L474.1,228.0L472.9,226.3L472.2,226.6L471.6,226.6L470.8,226.8L470.8,225.8L470.4,225.1L470.5,224.3L469.9,223.1L469.1,222.1L466.9,222.1L466.2,222.6L465.5,222.7L465.0,223.3L464.7,224.0L463.2,225.3L462.0,223.6L460.9,222.5L460.2,222.2L459.5,221.6L459.2,220.4L458.8,219.8L458.0,219.3L459.2,218.0L460.0,218.0L460.8,217.6L461.4,217.6L461.8,217.2L461.6,216.3L461.9,216.0L461.9,215.0L463.3,215.1L465.3,215.7L465.9,215.7L466.1,215.4L467.6,215.6L468.0,215.4L468.2,216.5L468.6,216.5L469.3,216.1L469.8,216.2L470.6,216.9L471.8,217.1L472.5,216.5L473.4,216.1L474.1,215.7L474.6,215.8L475.3,216.4L475.6,217.2L476.7,218.4L476.2,219.1L476.1,220.0L476.6,219.7L477.0,220.0L476.8,220.8L477.7,221.6L477.1,221.9L476.9,222.8L477.6,224.0L478.2,226.2L477.2,226.5L476.9,226.9L477.2,227.4L477.0,228.6L476.6,228.6Z",cx:469.7,cy:221.3},{name:"Gambia",cn:"Gambia",d:"M453.2,213.5L453.6,212.2L456.6,212.2L457.2,211.5L458.1,211.5L459.2,212.1L460.1,212.2L461.0,211.7L461.5,212.5L460.3,213.1L459.1,213.1L457.9,212.5L456.9,213.1L456.4,213.1L455.7,213.5L453.2,213.5Z",cx:457.5,cy:212.6},{name:"Guinea Bissau",cn:"Guinea Bissau",d:"M458.0,219.3L456.5,218.2L455.3,218.0L454.7,217.2L454.7,216.8L453.9,216.2L453.7,215.6L455.1,215.1L456.1,215.2L456.8,214.9L461.9,215.0L461.9,216.0L461.6,216.3L461.8,217.2L461.4,217.6L460.8,217.6L460.0,218.0L459.2,218.0L458.0,219.3Z",cx:458,cy:216.9},{name:"Equatorial Guinea",cn:"Equatorial Guinea",d:"M526.4,247.2L525.8,246.8L526.8,243.7L531.3,243.7L531.3,247.1L527.3,247.0L526.4,247.2Z",cx:527.9,cy:246.1},{name:"Greece",cn:"希腊",d:"M565.8,150.8L567.4,151.8L569.5,151.6L571.6,151.8L571.5,152.3L573.0,151.9L572.7,152.8L568.7,153.0L568.7,152.5L565.3,152.0L565.8,150.8ZM573.9,134.5L573.0,136.3L572.4,136.6L570.7,136.5L569.2,136.3L565.9,137.0L567.8,138.5L566.4,139.0L564.8,139.0L563.4,137.6L562.9,138.2L563.5,139.8L564.9,141.1L563.8,141.7L565.4,143.0L566.7,143.8L566.8,145.4L564.2,144.7L565.0,146.1L563.3,146.4L564.3,148.8L562.5,148.9L560.2,147.7L559.2,145.4L558.7,143.6L557.6,142.3L556.2,140.7L556.0,139.9L557.3,138.6L557.4,137.7L558.3,137.3L558.4,136.5L560.2,136.3L561.3,135.7L562.8,135.7L563.2,135.3L563.8,135.2L565.8,135.3L568.0,134.5L570.0,135.5L572.5,135.2L572.5,133.8L573.9,134.5Z",cx:564.5,cy:139.4},{name:"Greenland",cn:"格陵兰",d:"M370.1,20.5L379.4,18.8L389.2,18.9L392.7,17.9L402.5,17.7L424.7,18.0L442.1,20.2L437.0,21.3L426.3,21.4L411.4,21.7L412.8,22.2L422.6,21.9L431.0,22.8L436.4,22.0L438.7,23.0L435.6,24.6L442.7,23.5L456.2,22.5L464.5,23.0L466.1,24.2L454.8,26.2L453.2,26.8L444.3,27.3L450.7,27.4L447.5,29.4L445.3,31.2L445.4,34.3L448.7,36.2L444.3,36.3L439.8,37.1L444.9,38.6L445.6,41.0L442.6,41.2L446.2,43.6L440.0,43.8L443.2,45.0L442.3,45.9L438.4,46.4L434.5,46.4L438.0,48.3L438.1,49.5L432.6,48.3L431.1,49.1L434.9,49.8L438.5,51.5L439.6,53.7L434.6,54.2L432.5,53.2L429.0,51.6L430.0,53.5L426.8,54.9L434.1,55.0L437.9,55.2L430.5,57.6L422.9,59.8L414.8,60.8L411.7,60.8L408.9,61.8L405.0,64.8L399.0,66.7L397.1,66.8L393.4,67.5L389.4,68.2L387.0,69.9L387.0,71.8L385.6,73.7L381.1,75.9L382.2,78.1L380.9,80.3L379.5,83.1L375.6,83.2L371.5,81.0L365.9,80.9L363.2,79.4L361.4,76.7L356.6,73.3L355.2,71.4L354.8,69.0L350.9,66.4L351.9,64.3L350.1,63.4L352.8,60.1L357.0,59.1L358.1,57.9L358.7,55.8L355.5,56.7L354.0,57.1L351.5,57.5L348.1,56.6L347.9,54.8L349.0,53.3L351.6,53.2L357.2,54.0L352.5,52.2L350.0,51.3L347.2,51.6L344.9,51.0L348.0,48.4L346.3,47.3L344.1,45.4L340.8,42.5L337.2,41.4L337.3,40.2L329.8,38.6L323.9,38.4L316.5,38.5L309.7,38.7L306.5,37.8L301.7,36.1L309.0,35.2L314.5,35.1L302.7,34.3L296.4,33.2L296.8,32.1L307.3,30.8L317.5,29.5L318.5,28.4L311.0,27.5L313.5,26.3L323.1,24.4L327.1,24.1L326.0,22.9L332.5,22.1L341.1,21.7L349.6,21.7L352.7,22.5L360.0,21.0L366.7,22.0L370.6,22.3L376.3,23.2L369.7,21.7L370.1,20.5Z",cx:386,cy:44},{name:"Guatemala",cn:"危地马拉",d:"M249.7,211.8L248.3,211.4L246.6,211.3L245.3,210.8L243.8,209.6L243.9,208.8L244.2,208.2L243.8,207.6L245.1,205.4L248.7,205.4L248.8,204.4L248.3,204.2L248.0,203.6L247.0,203.0L246.0,202.1L247.2,202.1L247.2,200.5L249.8,200.5L252.4,200.5L252.4,202.7L252.1,205.9L253.0,205.9L253.9,206.4L254.1,206.0L254.9,206.3L253.7,207.4L252.3,208.1L252.2,208.7L252.4,209.2L251.8,209.9L251.1,210.1L251.3,210.4L250.8,210.7L249.8,211.4L249.7,211.8Z",cx:249.4,cy:206.9},{name:"French Guiana",cn:"法属圭亚那",d:"M354.0,243.0L352.9,244.1L351.6,244.3L351.2,243.5L350.6,243.4L349.8,244.2L348.5,243.6L349.2,242.4L349.5,241.1L350.0,239.9L348.9,238.3L348.7,236.4L350.1,234.0L351.1,234.3L353.1,235.0L356.0,237.3L356.5,238.5L354.9,241.0L354.0,243.0Z",cx:351.6,cy:240.4},{name:"Guyana",cn:"圭亚那",d:"M334.0,226.8L335.8,227.8L337.5,229.6L337.6,231.0L338.7,231.1L340.2,232.4L341.3,233.4L340.8,235.9L339.1,236.6L339.3,237.3L338.8,238.7L340.0,240.7L340.9,240.7L341.2,242.3L342.9,244.7L342.3,244.8L340.7,244.6L339.8,245.3L338.6,245.8L337.7,245.9L337.4,246.5L336.0,246.3L334.3,245.0L334.1,243.8L333.4,242.3L333.8,240.0L334.6,239.0L334.0,237.7L333.0,237.3L333.4,236.1L332.7,235.4L331.3,235.6L329.4,233.4L330.2,232.7L330.1,231.4L331.8,231.0L332.5,230.4L331.6,229.4L331.8,228.4L334.0,226.8Z",cx:336.2,cy:237.1},{name:"Honduras",cn:"洪都拉斯",d:"M257.5,213.9L257.0,213.1L256.1,212.8L256.3,211.7L255.9,211.4L255.4,211.2L254.2,211.5L254.1,211.2L253.2,210.7L252.6,210.2L251.8,209.9L252.4,209.2L252.2,208.7L252.3,208.1L253.7,207.4L254.9,206.3L255.2,206.4L255.8,205.9L256.6,205.9L256.9,206.1L257.3,206.0L258.6,206.2L259.9,206.2L260.8,205.9L261.1,205.5L262.0,205.7L262.7,205.9L263.4,205.8L263.9,205.6L265.2,206.0L265.6,206.0L266.5,206.5L267.3,207.2L268.3,207.6L269.0,208.3L268.1,208.3L267.7,208.7L266.7,209.0L266.0,209.0L265.4,209.4L264.9,209.3L264.4,208.8L264.1,208.9L263.7,209.6L263.5,209.6L263.4,210.1L262.5,210.9L261.9,211.2L261.7,211.6L260.8,211.0L260.2,211.7L259.7,211.7L259.0,211.8L259.1,213.2L258.7,213.2L258.3,213.8L257.5,213.9Z",cx:260.1,cy:209.1},{name:"Croatia",cn:"克罗地亚",d:"M552.3,122.5L553.0,123.6L553.9,124.3L552.8,125.4L551.5,124.8L549.6,124.8L547.2,124.4L545.9,124.4L545.3,125.0L544.3,124.4L543.8,125.5L545.1,126.8L545.7,127.7L547.0,128.7L548.0,129.3L549.1,130.5L551.6,131.5L551.3,132.0L548.6,131.0L547.0,130.0L544.5,129.1L542.2,127.1L542.7,126.9L541.4,125.7L541.4,124.8L539.6,124.4L538.8,125.5L537.9,124.6L538.0,123.7L538.1,123.6L540.0,123.7L540.5,123.2L541.5,123.7L542.6,123.7L542.6,123.0L543.5,122.7L543.8,121.6L546.0,120.8L546.9,121.2L549.0,122.4L551.3,122.9L552.3,122.5Z",cx:545.7,cy:125.3},{name:"Haiti",cn:"海地",d:"M296.7,194.7L298.4,194.8L300.8,195.2L301.0,196.8L300.8,197.8L300.2,198.3L300.9,199.1L300.8,199.9L299.0,199.4L297.7,199.6L296.0,199.4L294.7,199.9L293.2,199.0L293.4,198.2L296.0,198.5L298.1,198.8L299.1,198.1L297.8,196.9L297.8,195.9L296.1,195.4L296.7,194.7Z",cx:297.9,cy:197.6},{name:"Hungary",cn:"匈牙利",d:"M545.0,119.9L545.9,118.1L545.4,117.5L547.0,117.5L547.2,116.3L548.6,117.0L549.6,117.3L551.9,117.0L552.2,116.4L553.3,116.4L554.6,115.9L554.9,116.1L556.2,115.8L556.9,115.1L557.8,114.9L560.8,115.8L561.3,115.5L562.9,116.2L563.1,117.0L561.4,117.6L560.1,119.5L558.4,121.3L556.2,121.9L554.4,121.7L552.3,122.5L551.3,122.9L549.0,122.4L546.9,121.2L546.0,120.8L545.5,119.9L545.0,119.9Z",cx:552.9,cy:118.3},{name:"Indonesia",cn:"印度尼西亚",d:"M835.3,278.4L834.2,278.5L830.5,276.5L833.1,276.0L834.5,276.8L835.5,277.7L835.3,278.4ZM845.7,278.2L843.3,278.8L842.9,278.4L843.2,277.5L844.4,275.8L847.1,274.7L847.4,275.2L847.5,276.1L845.7,278.2ZM827.5,272.5L828.5,273.2L830.2,273.0L830.9,274.2L827.7,274.7L825.8,275.1L824.3,275.1L825.2,273.5L826.8,273.5L827.5,272.5ZM841.4,272.5L841.0,274.0L836.8,274.8L833.1,274.5L833.1,273.5L835.3,272.9L837.1,273.7L838.9,273.5L841.4,272.5ZM801.7,268.8L807.1,269.1L807.7,268.0L812.8,269.3L813.8,271.1L818.0,271.6L821.4,273.3L818.2,274.3L815.2,273.2L812.7,273.3L809.8,273.1L807.2,272.6L804.0,271.5L801.9,271.2L800.8,271.6L795.7,270.4L795.2,269.2L792.7,269.0L794.6,266.4L798.0,266.5L800.2,267.6L801.4,267.8L801.7,268.8ZM874.2,267.3L872.8,269.2L872.5,267.1L873.0,266.1L873.6,265.1L874.2,265.9L874.2,267.3ZM853.5,259.6L852.4,260.5L850.5,260.0L850.0,258.8L852.8,258.7L853.5,259.6ZM862.4,258.6L863.4,260.7L861.1,259.6L858.8,259.3L857.2,259.5L855.3,259.4L855.9,257.9L859.4,257.8L862.4,258.6ZM872.6,253.2L873.4,257.7L876.3,259.4L878.6,256.4L881.8,254.7L884.2,254.7L886.6,255.7L888.7,256.7L891.7,257.2L891.7,266.3L891.8,275.3L889.3,273.0L886.5,272.5L885.8,273.3L882.3,273.4L883.4,271.1L885.2,270.3L884.5,267.3L883.1,265.0L877.7,262.6L875.5,262.4L871.3,259.8L870.5,261.2L869.4,261.4L868.8,260.4L868.8,259.2L866.6,257.8L869.6,256.8L871.6,256.9L871.4,256.2L867.3,256.1L866.2,254.5L863.7,254.0L862.6,252.6L866.3,251.9L867.7,251.0L872.2,252.2L872.6,253.2ZM847.9,246.1L845.7,248.8L843.6,249.3L840.9,248.8L836.3,248.9L833.8,249.3L833.4,251.4L835.9,253.9L837.4,252.7L842.6,251.7L842.4,253.0L841.2,252.6L840.0,254.2L837.5,255.3L840.2,258.9L839.6,259.8L842.1,263.0L842.1,264.8L840.6,265.7L839.5,264.7L840.9,262.4L838.2,263.5L837.5,262.7L837.8,261.6L835.8,260.0L836.0,257.3L834.2,258.1L834.4,261.4L834.5,265.4L832.8,265.8L831.6,264.9L832.4,262.4L831.9,259.7L830.8,259.7L829.9,257.8L831.1,256.0L831.5,253.8L832.8,249.6L833.4,248.4L835.8,246.4L838.0,247.2L841.5,247.6L844.7,247.5L847.4,245.4L847.9,246.1ZM857.5,246.9L857.3,249.3L855.9,249.0L855.5,250.7L856.6,252.2L855.8,252.5L854.7,250.7L853.9,247.2L854.4,245.0L855.4,244.0L855.6,245.5L857.2,245.7L857.5,246.9ZM827.4,244.9L830.5,247.5L827.3,247.8L826.3,249.7L826.4,252.2L823.8,254.1L823.7,256.9L822.6,261.1L822.2,260.2L819.1,261.4L818.0,259.7L816.0,259.6L814.6,258.7L811.3,259.7L810.3,258.3L808.5,258.5L806.2,258.2L805.8,254.4L804.4,253.7L803.0,251.3L802.6,248.8L803.0,246.3L804.6,244.4L805.1,246.3L807.0,247.9L808.8,247.3L810.5,247.5L812.2,246.1L813.5,245.8L816.1,246.6L818.4,246.0L819.8,242.2L820.9,241.2L821.8,238.0L825.0,238.0L827.5,238.5L825.9,241.0L827.9,243.6L827.4,244.9ZM793.9,266.3L790.9,266.3L788.5,264.0L785.0,261.7L783.8,260.0L781.7,257.8L780.3,255.7L778.2,251.8L775.7,249.5L774.9,247.1L773.9,244.9L771.4,243.2L769.9,240.8L767.8,239.3L764.9,236.2L764.7,234.8L766.5,234.9L770.8,235.4L773.2,238.1L775.4,240.0L776.9,241.2L779.6,244.2L782.4,244.2L784.7,246.1L786.3,248.4L788.4,249.7L787.3,252.0L788.9,252.9L789.9,253.0L790.4,255.0L791.4,256.5L793.4,256.7L794.7,258.5L794.0,262.0L793.9,266.3Z",cx:837.9,cy:255.6},{name:"India",cn:"印度",d:"M716.2,151.4L719.2,154.7L718.9,156.9L720.0,158.3L719.9,159.8L717.9,159.4L718.7,162.5L721.4,164.2L725.3,166.2L723.5,167.4L722.5,170.0L725.2,171.1L727.8,172.4L731.4,174.0L735.2,174.3L736.8,175.8L739.0,176.0L742.3,176.7L744.6,176.6L744.9,175.5L744.6,173.8L744.8,172.6L746.5,172.0L746.7,174.2L746.8,174.7L749.3,175.8L751.0,175.3L753.4,175.5L755.6,175.4L755.8,173.7L754.7,172.9L757.0,172.5L759.5,170.4L762.7,168.7L765.0,169.4L767.0,168.2L768.3,169.9L767.4,171.1L770.4,171.5L770.6,172.5L769.6,173.1L769.8,174.8L767.8,174.3L764.2,176.2L764.3,177.8L762.8,180.1L762.6,181.5L761.4,183.7L759.2,183.1L759.1,186.0L758.5,186.9L758.8,188.1L757.4,188.8L756.0,184.4L755.2,184.4L754.7,186.2L753.2,184.7L754.1,183.1L755.3,183.0L756.6,180.6L755.0,180.1L752.4,180.2L749.8,179.8L749.5,177.9L748.2,177.7L746.0,176.5L745.0,178.4L747.0,179.9L745.3,180.9L744.7,181.9L746.4,182.7L745.9,184.4L746.9,186.4L747.3,188.7L746.9,189.7L745.0,189.7L741.6,190.3L741.8,192.4L740.3,194.0L736.3,195.9L733.2,199.2L731.1,200.9L728.3,202.7L728.3,204.0L726.9,204.7L724.4,205.7L723.1,205.8L722.3,208.0L722.9,211.6L723.0,213.9L721.8,216.5L721.8,221.2L720.4,221.4L719.1,223.5L720.0,224.4L717.4,225.2L716.5,227.1L715.4,227.9L712.8,225.3L711.5,221.4L710.4,218.6L709.4,217.3L708.0,214.6L707.3,211.1L706.8,209.4L704.3,205.6L703.1,200.2L702.3,196.6L702.3,193.3L701.8,190.7L697.7,192.3L695.8,192.0L692.1,188.6L693.5,187.6L692.6,186.5L689.4,184.2L691.2,182.3L697.3,182.3L696.8,180.0L695.2,178.5L694.9,176.4L693.1,175.2L696.2,172.3L699.4,172.5L702.3,169.6L704.0,166.7L706.7,163.9L706.7,162.0L709.1,160.4L706.8,159.0L705.8,157.1L704.9,154.7L706.2,153.5L710.4,154.2L713.5,153.7L716.2,151.4Z",cx:731.8,cy:183.3},{name:"Ireland",cn:"爱尔兰",d:"M482.8,100.4L483.2,102.4L481.1,104.8L476.2,106.5L472.3,106.1L474.5,103.2L473.1,100.3L476.9,98.2L479.0,96.9L479.5,98.3L479.0,99.8L480.7,99.8L482.8,100.4Z",cx:478.5,cy:101.3},{name:"Iran",cn:"伊朗",d:"M649.8,146.7L652.2,146.1L654.2,144.5L656.1,144.6L657.3,144.1L659.3,144.4L662.3,145.8L664.5,146.1L667.7,148.5L669.8,148.6L670.0,151.0L668.9,154.4L668.1,156.5L669.3,156.9L668.2,158.4L669.1,160.6L669.3,162.4L671.4,162.8L671.6,164.6L669.1,167.1L670.5,168.6L671.6,170.3L674.2,171.5L674.3,173.9L675.6,174.4L675.9,175.7L671.9,177.1L670.8,180.3L665.6,179.5L662.6,178.9L659.4,178.5L658.3,175.1L656.9,174.6L654.8,175.1L652.0,176.4L648.6,175.5L645.8,173.4L643.1,172.6L641.3,170.0L639.2,166.3L637.7,166.7L635.9,165.8L634.9,166.9L633.4,165.4L633.3,163.9L632.5,163.9L632.9,161.9L631.5,159.8L628.1,158.3L626.2,155.6L626.8,153.5L628.2,152.5L628.0,150.9L626.2,150.1L624.4,146.7L622.8,144.5L623.4,143.7L622.5,140.5L624.4,139.7L624.9,140.7L626.3,142.0L628.2,142.4L629.2,142.3L632.5,140.3L633.5,140.0L634.3,140.9L633.4,142.2L635.1,143.7L635.8,143.6L636.7,145.6L639.3,146.2L641.2,147.6L645.2,148.1L649.5,147.3L649.8,146.7Z",cx:648.4,cy:157.2},{name:"Iraq",cn:"伊拉克",d:"M626.2,150.1L628.0,150.9L628.2,152.5L626.8,153.5L626.2,155.6L628.1,158.3L631.5,159.8L632.9,161.9L632.5,163.9L633.3,163.9L633.4,165.4L634.9,166.9L633.3,166.7L631.4,166.5L629.4,169.2L624.2,168.9L616.4,163.4L612.2,161.4L608.9,160.7L607.8,157.3L613.9,154.4L615.0,151.0L614.7,149.0L616.2,148.3L617.6,146.6L618.8,146.2L622.1,146.5L623.0,147.2L624.4,146.7L626.2,150.1Z",cx:623.9,cy:156.8},{name:"Iceland",cn:"冰岛",d:"M459.7,65.4L459.1,67.2L462.2,69.1L458.6,71.2L450.6,73.1L448.2,73.6L444.5,73.2L436.8,72.3L439.5,71.1L433.5,69.7L438.4,69.2L438.3,68.4L432.4,67.7L434.3,65.9L438.5,65.5L442.8,67.4L447.1,65.9L450.6,66.7L455.1,65.2L459.7,65.4Z",cx:446.5,cy:68.7},{name:"Israel",cn:"以色列",d:"M599.2,159.1L598.7,160.0L597.7,159.6L597.2,161.5L597.8,161.8L597.1,162.2L597.0,162.9L598.3,162.5L598.4,163.6L597.0,168.1L595.2,163.3L596.0,162.4L595.8,162.2L596.5,160.9L597.1,158.8L597.5,158.1L597.6,158.1L598.5,158.1L598.8,157.6L599.5,157.6L599.5,158.7L599.2,159.1L599.2,159.1Z",cx:597.8,cy:160.7},{name:"Italy",cn:"意大利",d:"M543.1,143.8L542.1,146.0L542.5,146.8L541.9,148.3L539.8,147.2L538.4,146.9L534.5,145.5L534.9,144.1L538.2,144.3L541.0,144.0L543.1,143.8ZM525.6,135.5L527.2,137.5L526.9,141.2L525.6,141.0L524.5,141.9L523.4,141.2L523.3,137.8L522.7,136.2L524.2,136.4L525.6,135.5ZM534.4,120.1L538.4,120.8L538.1,122.2L538.7,123.4L536.5,123.0L534.2,123.9L534.4,125.3L534.1,126.1L535.0,127.5L537.6,128.9L539.0,131.2L542.1,133.5L544.2,133.4L544.9,134.1L544.1,134.6L546.6,135.6L548.7,136.5L551.0,137.9L551.3,138.4L550.8,139.4L549.3,138.1L546.9,137.7L545.7,139.5L547.7,140.5L547.4,141.9L546.2,142.1L544.7,144.5L543.6,144.7L543.6,143.8L544.1,142.4L544.7,141.8L543.7,140.2L542.8,138.8L541.7,138.4L540.8,137.2L539.1,136.7L537.9,135.6L535.8,135.4L533.6,134.2L531.1,132.3L529.2,130.7L528.3,128.0L527.0,127.7L524.7,126.8L523.4,127.1L521.8,128.4L520.7,128.6L521.0,127.4L519.5,127.1L518.7,124.9L519.7,124.1L518.9,123.0L519.0,122.2L520.2,122.8L521.5,122.7L523.1,121.8L523.6,122.2L524.9,122.1L525.5,121.0L527.6,121.3L528.8,120.9L529.0,119.7L530.7,120.1L531.0,119.6L533.8,119.1L534.4,120.1Z",cx:535.2,cy:130.3},{name:"Jamaica",cn:"牙买加",d:"M284.5,198.6L286.4,198.9L287.9,199.6L288.3,200.3L286.4,200.4L285.5,200.8L284.0,200.4L282.4,199.4L282.7,198.7L283.9,198.5L284.5,198.6Z",cx:285.1,cy:199.5},{name:"Jordan",cn:"约旦",d:"M598.7,160.0L599.2,159.1L602.3,160.2L607.8,157.3L608.9,160.7L608.3,161.1L602.8,162.5L605.6,165.3L604.6,165.7L604.2,166.7L602.1,167.0L601.4,168.0L600.2,168.9L597.1,168.5L597.0,168.1L598.4,163.6L598.3,162.5L598.7,161.7L598.7,160.0Z",cx:601.8,cy:163.5},{name:"Japan",cn:"日本",d:"M874.0,155.1L874.4,156.1L872.8,157.8L871.6,156.9L870.2,157.5L869.5,159.2L867.7,158.4L867.7,157.0L869.2,155.4L870.8,155.7L872.0,154.5L874.0,155.1ZM891.6,146.8L890.6,149.0L891.0,150.4L889.6,152.4L886.0,153.7L881.2,153.9L877.2,157.0L875.3,156.0L875.2,153.9L870.4,154.5L867.1,155.8L863.9,155.9L866.7,157.9L864.8,162.6L863.0,163.8L861.7,162.7L862.4,160.2L860.6,159.4L859.5,157.5L862.1,156.7L863.6,154.9L866.3,153.5L868.4,151.6L873.9,150.7L876.9,151.3L879.8,146.4L881.6,147.7L885.7,144.9L887.3,143.8L889.0,140.4L888.6,137.3L889.7,135.6L892.7,135.1L894.2,138.9L894.1,141.2L891.6,144.0L891.6,146.8ZM899.8,127.3L901.7,127.9L903.7,126.7L904.3,129.8L900.2,130.6L897.7,133.3L893.4,131.4L891.9,134.5L888.8,134.5L888.4,131.8L889.8,129.6L892.7,129.5L893.5,125.6L894.4,123.5L897.6,126.4L899.8,127.3Z",cx:877.7,cy:150.9},{name:"Kazakhstan",cn:"哈萨克斯坦",d:"M697.1,132.6L695.5,133.1L691.9,135.0L690.6,137.0L689.6,137.0L688.8,135.7L685.3,135.6L684.8,133.4L683.4,133.3L683.6,130.6L680.3,128.5L675.5,128.7L672.3,129.2L669.6,126.7L667.3,125.6L663.0,123.6L662.5,123.4L655.4,125.0L655.5,135.3L654.0,135.4L652.1,133.2L650.2,132.4L647.1,133.0L645.8,133.9L645.7,133.3L646.4,132.1L645.8,131.1L642.6,130.2L641.4,127.7L639.8,127.0L639.7,126.1L642.4,126.3L642.5,124.3L644.9,123.9L647.3,124.3L647.8,121.6L647.3,119.9L644.6,120.0L642.2,119.3L639.0,120.5L636.4,121.1L635.0,120.7L635.3,119.2L633.5,117.4L631.4,117.5L629.1,115.6L630.7,113.5L629.9,112.9L632.1,109.8L634.9,111.5L635.3,109.4L641.0,106.4L645.4,106.3L651.5,108.3L654.8,109.4L657.7,108.2L662.1,108.2L665.7,109.6L666.5,108.8L670.4,108.9L671.1,107.6L666.6,105.7L669.2,104.3L668.7,103.6L671.4,102.8L669.4,100.9L670.7,100.0L681.1,99.0L682.4,98.3L689.4,97.3L691.9,96.2L696.8,96.8L697.7,99.6L700.6,99.0L704.2,99.9L704.0,101.4L706.6,101.3L713.6,98.6L712.6,99.5L716.1,101.7L722.3,108.7L723.8,107.3L727.6,108.9L731.6,108.1L733.2,108.6L734.5,110.2L736.4,110.8L737.6,112.0L741.2,111.6L742.7,113.3L740.6,115.1L738.2,115.4L738.1,118.2L736.6,119.4L731.1,118.5L729.1,123.5L727.6,124.1L722.1,125.2L724.6,130.1L722.7,130.8L722.9,132.4L721.2,132.0L719.8,131.0L715.7,130.7L711.1,130.6L710.1,130.9L706.1,129.7L704.6,130.3L704.1,131.9L699.6,131.0L697.7,131.4L697.1,132.6Z",cx:680.8,cy:118.9},{name:"Kenya",cn:"肯尼亚",d:"M613.9,252.4L615.5,254.7L613.6,255.8L612.9,256.9L611.8,257.1L611.4,259.1L610.6,260.2L610.0,262.1L608.9,263.0L604.9,260.2L604.7,258.6L594.6,252.9L594.2,252.6L594.1,249.7L594.9,248.6L596.3,246.7L597.3,244.7L596.1,241.5L595.8,240.1L594.5,238.2L596.2,236.5L598.1,234.7L599.5,235.2L599.5,236.7L600.4,237.6L602.4,237.6L605.9,240.0L606.8,240.0L607.4,240.0L608.0,240.3L609.9,240.5L610.7,239.3L613.2,238.2L614.4,239.1L616.3,239.1L613.8,242.3L613.9,252.4Z",cx:605.2,cy:246.6},{name:"Kyrgyzstan",cn:"Kyrgyzstan",d:"M697.1,132.6L697.7,131.4L699.6,131.0L704.1,131.9L704.6,130.3L706.1,129.7L710.1,130.9L711.1,130.6L715.7,130.7L719.8,131.0L721.2,132.0L722.9,132.4L722.6,133.0L718.2,134.5L717.2,135.6L713.6,135.9L712.6,137.7L709.6,137.3L707.7,137.9L705.1,139.2L705.4,139.8L704.7,140.5L699.4,140.9L696.0,140.0L693.0,140.2L693.2,138.6L696.2,139.1L697.3,138.2L699.4,138.5L702.9,136.5L699.6,135.0L697.7,135.7L695.6,134.7L697.9,132.9L697.1,132.6Z",cx:705.5,cy:135.1},{name:"Cambodia",cn:"柬埔寨",d:"M787.5,220.5L786.4,219.0L785.0,216.1L784.3,212.8L786.1,210.5L789.7,210.0L792.3,210.4L794.6,211.4L795.8,209.5L798.3,210.5L798.9,212.4L798.6,215.7L793.9,217.9L795.1,219.6L792.2,219.8L789.8,220.9L787.5,220.5Z",cx:791.5,cy:215.1},{name:"South Korea",cn:"韩国",d:"M856.5,142.7L858.9,146.0L859.6,147.8L859.6,151.0L858.6,152.5L856.1,153.1L853.9,154.2L851.3,154.5L851.0,153.0L851.6,150.9L850.3,148.0L852.4,147.5L850.5,145.1L850.7,144.9L851.9,145.0L853.0,143.7L854.9,143.6L856.1,143.4L856.5,142.7Z",cx:854.4,cy:147.9},{name:"Kosovo",cn:"Kosovo",d:"M557.7,133.2L557.5,133.8L557.2,133.7L557.0,132.7L556.3,132.4L555.8,131.7L556.3,131.1L556.9,130.9L557.3,130.0L557.8,129.8L558.2,130.2L558.7,130.4L559.1,130.8L559.6,130.9L560.1,131.5L560.5,131.4L560.2,132.1L559.8,132.4L559.9,132.7L559.3,132.8L557.7,133.2Z",cx:558.2,cy:131.8},{name:"Kuwait",cn:"科威特",d:"M633.3,166.7L633.8,168.0L633.6,168.6L634.5,170.7L632.5,170.8L631.8,169.4L629.4,169.2L631.4,166.5L633.3,166.7Z",cx:632.6,cy:168.5},{name:"Laos",cn:"老挝",d:"M792.3,210.4L793.2,209.1L793.3,206.7L791.1,204.3L790.9,201.6L788.8,199.3L786.7,199.1L786.1,200.1L784.5,200.2L783.6,199.7L780.7,201.4L780.7,198.9L781.3,195.9L779.5,195.8L779.3,194.1L778.1,193.3L778.7,192.3L781.1,190.5L781.3,191.1L782.8,191.2L782.4,188.0L783.8,187.6L785.4,189.8L786.7,192.3L790.1,192.3L791.2,194.8L789.4,195.5L788.6,196.5L791.9,198.1L794.2,201.4L796.0,203.9L798.1,205.8L798.8,207.8L798.3,210.5L795.8,209.5L794.6,211.4L792.3,210.4Z",cx:787.9,cy:199.2},{name:"Lebanon",cn:"黎巴嫩",d:"M599.5,157.6L598.8,157.6L598.5,158.1L597.6,158.1L598.6,155.8L599.9,153.9L600.0,153.8L601.2,153.9L601.7,155.0L600.2,156.0L599.5,157.6Z",cx:599.6,cy:156.1},{name:"Liberia",cn:"Liberia",d:"M478.6,237.9L477.8,237.9L475.0,236.6L472.5,234.5L470.1,232.9L468.2,231.2L468.9,230.3L469.0,229.5L470.3,227.9L471.6,226.6L472.2,226.6L472.9,226.3L474.1,228.0L473.9,229.1L474.4,229.7L475.2,229.7L475.8,228.6L476.6,228.6L476.4,229.5L476.7,230.8L476.1,232.0L476.9,232.8L477.8,233.0L479.0,234.1L479.1,235.2L478.8,235.6L478.6,237.9Z",cx:474.7,cy:231.6},{name:"Libya",cn:"利比亚",d:"M541.3,186.5L539.3,187.5L537.7,186.0L533.3,184.8L532.1,183.1L529.9,181.8L528.6,182.3L527.6,180.7L527.5,179.5L525.9,177.5L527.0,176.4L526.7,174.6L527.1,173.1L526.9,171.8L527.4,169.6L527.2,168.3L526.3,165.8L527.7,165.2L527.9,164.0L527.6,162.8L529.5,161.8L530.4,160.9L531.8,160.1L531.9,158.0L535.2,158.9L536.3,158.7L538.7,159.1L542.3,160.4L543.6,162.8L546.1,163.4L550.1,164.5L553.0,165.9L554.4,165.2L555.7,163.9L555.1,161.8L555.9,160.4L557.9,159.1L559.8,158.8L563.6,159.3L564.5,160.6L565.6,160.6L566.5,161.1L569.2,161.4L569.9,162.3L568.9,163.6L569.3,164.8L568.6,166.5L569.4,168.8L569.4,178.7L569.4,188.9L569.4,194.4L566.2,194.4L566.2,195.6L555.1,190.3L544.1,185.0L541.3,186.5Z",cx:545.7,cy:170.9},{name:"Sri Lanka",cn:"斯里兰卡",d:"M727.2,229.1L726.8,232.0L725.6,232.8L723.2,233.4L721.9,231.2L721.4,227.2L722.6,222.7L724.6,224.3L725.8,226.2L727.2,229.1Z",cx:724.6,cy:228.8},{name:"Lesotho",cn:"Lesotho",d:"M580.5,330.4L581.5,331.3L580.6,332.6L580.1,333.5L578.6,334.0L578.1,334.8L577.1,335.1L575.0,333.0L576.5,331.2L578.0,330.1L579.3,329.6L580.5,330.4Z",cx:578.8,cy:332.2},{name:"Lithuania",cn:"立陶宛",d:"M563.1,99.1L562.9,98.4L563.2,97.6L562.0,97.2L559.1,96.7L558.5,94.4L561.7,93.5L566.3,93.7L569.1,93.4L569.4,94.0L570.9,94.2L573.6,95.5L573.9,96.8L571.6,97.6L570.9,99.2L567.9,100.3L565.2,100.2L564.6,99.4L563.1,99.1Z",cx:566.2,cy:96.9},{name:"Luxembourg",cn:"卢森堡",d:"M516.8,110.8L517.3,111.4L517.2,112.6L516.4,112.7L515.8,112.4L516.1,110.9L516.8,110.8Z",cx:516.6,cy:111.6},{name:"Latvia",cn:"拉脱维亚",d:"M558.5,94.4L558.6,92.3L559.9,90.5L562.6,89.6L564.8,91.6L567.0,91.6L567.5,89.5L569.9,89.0L571.1,89.3L573.5,90.3L575.8,90.3L577.1,91.0L577.4,92.3L578.3,94.0L575.3,95.0L573.6,95.5L570.9,94.2L569.4,94.0L569.1,93.4L566.3,93.7L561.7,93.5L558.5,94.4Z",cx:568.5,cy:92.2},{name:"Morocco",cn:"摩洛哥",d:"M485.6,150.7L487.2,151.9L489.9,151.7L492.8,152.3L494.0,152.3L495.0,154.1L495.2,155.8L496.1,158.7L496.9,159.3L496.4,160.4L492.7,160.8L491.5,161.9L489.9,162.1L489.7,164.2L486.5,165.3L485.4,166.7L483.2,167.4L480.4,167.8L475.9,169.9L475.9,173.2L475.5,173.2L475.5,173.2L475.6,174.7L473.9,174.8L473.0,175.4L471.7,175.4L470.7,175.0L468.4,175.3L467.4,177.5L466.6,177.7L465.3,181.2L461.4,184.2L460.5,188.0L459.4,189.3L459.0,190.3L452.8,190.5L452.7,190.5L452.9,189.2L453.9,188.4L454.8,187.0L454.6,186.1L455.6,184.1L457.1,182.3L458.1,181.9L458.8,180.3L458.9,178.8L459.9,177.1L461.7,176.1L463.5,173.2L463.6,173.2L464.9,172.1L467.5,171.8L469.7,169.9L471.1,169.2L473.4,166.9L472.7,163.4L473.8,161.0L474.2,159.5L476.0,157.7L478.7,156.4L480.8,155.2L482.7,152.4L483.5,150.7L485.6,150.7Z",cx:473.7,cy:170.1},{name:"Moldova",cn:"摩尔多瓦",d:"M573.9,116.1L574.6,115.6L576.5,115.4L578.5,116.2L579.6,116.3L580.9,117.1L580.7,118.0L581.7,118.5L582.1,119.6L583.1,120.3L582.9,120.8L583.4,121.0L582.7,121.3L581.0,121.2L580.8,120.8L580.2,121.0L580.4,121.5L579.6,122.4L579.1,123.3L578.4,123.6L577.9,122.4L578.2,121.2L578.1,120.0L576.5,118.3L575.6,117.1L574.8,116.3L573.9,116.1Z",cx:579.1,cy:119.3},{name:"Madagascar",cn:"Madagascar",d:"M637.6,284.6L638.4,285.8L639.0,287.7L639.5,291.0L640.2,292.3L639.9,293.6L639.4,294.4L638.5,292.8L638.0,293.6L638.5,295.7L638.3,296.9L637.5,297.5L637.3,299.9L636.2,303.1L634.9,306.9L633.1,312.2L632.1,316.1L630.8,319.3L628.6,319.9L626.1,321.1L624.5,320.4L622.3,319.4L621.6,317.9L621.4,315.5L620.4,313.3L620.2,311.3L620.6,309.3L621.9,308.8L621.9,307.9L623.3,305.8L623.5,304.0L622.9,302.7L622.3,300.9L622.1,298.4L623.1,296.8L623.5,295.0L624.8,294.9L626.4,294.4L627.4,293.9L628.6,293.8L630.2,292.3L632.5,290.5L633.3,289.1L633.0,288.0L634.1,288.3L635.7,286.4L635.7,284.7L636.7,283.4L637.6,284.6Z",cx:630.5,cy:299.9},{name:"Mexico",cn:"墨西哥",d:"M230.2,178.1L229.1,180.6L228.6,182.6L228.4,186.3L228.1,187.7L228.6,189.2L229.5,190.5L230.0,192.7L231.9,194.7L232.5,196.3L233.6,197.7L236.6,198.4L237.7,199.6L240.1,198.8L242.3,198.5L244.3,198.0L246.1,197.6L247.9,196.4L248.5,194.8L248.7,192.5L249.2,191.7L251.1,190.9L254.0,190.3L256.5,190.4L258.2,190.2L258.9,190.7L258.8,192.1L257.3,193.7L256.6,195.4L257.1,195.9L256.7,197.1L256.0,199.3L255.3,198.6L254.7,198.6L254.2,198.6L253.2,200.3L252.7,200.0L252.4,200.1L252.4,200.5L249.8,200.5L247.2,200.5L247.2,202.1L246.0,202.1L247.0,203.0L248.0,203.6L248.3,204.2L248.8,204.4L248.7,205.4L245.1,205.4L243.8,207.6L244.2,208.2L243.9,208.8L243.8,209.6L240.7,206.6L239.2,205.7L237.0,205.0L235.4,205.2L233.2,206.2L231.8,206.5L229.8,205.8L227.7,205.3L225.1,204.0L223.1,203.6L219.9,202.3L217.6,201.0L216.9,200.2L215.3,200.1L212.5,199.2L211.3,197.9L208.4,196.3L207.0,194.6L206.3,193.2L207.2,193.0L206.9,192.2L207.6,191.5L207.6,190.5L206.7,189.2L206.4,188.1L205.5,186.7L203.0,184.0L200.2,181.8L198.9,180.1L196.5,178.9L196.0,178.3L196.4,176.5L195.0,175.9L193.4,174.5L192.7,172.6L191.2,172.4L189.6,170.9L188.3,169.6L188.1,168.7L186.6,166.6L185.7,164.5L185.7,163.4L183.7,162.3L182.8,162.4L181.2,161.7L180.7,162.8L181.2,164.1L181.5,166.2L182.4,167.4L184.5,169.3L184.9,169.9L185.4,170.1L185.7,171.1L186.2,171.0L186.8,172.8L187.6,173.5L188.2,174.5L190.0,175.9L190.9,178.5L191.7,179.7L192.5,181.0L192.6,182.5L194.0,182.6L195.1,183.9L196.1,185.1L196.0,185.6L194.8,186.6L194.4,186.6L193.6,184.9L191.8,183.3L189.8,182.0L188.4,181.3L188.5,179.2L188.1,177.7L186.7,176.9L184.8,175.6L184.5,176.0L183.8,175.3L182.0,174.6L180.4,173.0L180.6,172.8L181.7,172.9L182.8,171.9L182.9,170.6L180.7,168.7L179.1,167.9L178.1,166.2L177.1,164.3L175.8,162.1L174.6,159.6L177.8,159.4L181.3,159.1L181.1,159.7L185.3,161.0L191.6,163.0L197.1,162.9L199.3,162.9L199.3,161.8L204.1,161.8L205.2,162.8L206.6,163.7L208.2,164.9L209.2,166.3L209.8,167.9L211.3,168.7L213.6,169.5L215.3,167.3L217.6,167.3L219.6,168.4L221.0,170.3L221.9,171.9L223.6,173.5L224.2,175.4L224.9,176.8L227.1,177.6L229.1,178.2L230.2,178.1Z",cx:213.9,cy:183.8},{name:"Macedonia",cn:"北马其顿",d:"M557.2,133.7L557.5,133.8L557.7,133.2L559.3,132.8L559.9,132.7L560.9,132.5L562.2,132.4L563.6,133.3L563.8,135.2L563.2,135.3L562.8,135.7L561.3,135.7L560.2,136.3L558.4,136.5L557.2,135.9L556.8,134.7L557.2,133.7Z",cx:560,cy:134.3},{name:"Mali",cn:"马里",d:"M466.2,209.4L467.1,208.9L467.6,207.3L468.5,207.2L470.4,208.0L472.0,207.4L473.1,207.6L473.5,207.0L484.6,206.9L485.2,205.0L484.8,204.7L483.4,192.7L482.1,180.7L486.3,180.6L495.7,186.7L505.1,192.7L505.7,194.0L507.5,194.8L508.7,195.3L508.8,197.1L511.9,196.8L511.9,203.2L510.3,205.0L510.1,206.8L507.6,207.2L503.8,207.4L502.8,208.4L501.0,208.5L499.3,208.5L498.6,208.0L497.0,208.4L494.4,209.6L493.9,210.4L491.8,211.7L491.4,212.4L490.2,213.0L488.9,212.6L488.1,213.3L487.7,215.2L485.5,217.5L485.6,218.4L484.8,219.6L485.0,221.2L483.8,221.6L483.2,222.0L482.8,220.8L482.0,221.1L481.5,221.0L481.0,221.8L478.8,221.8L478.1,221.4L477.7,221.6L476.8,220.8L477.0,220.0L476.6,219.7L476.1,220.0L476.2,219.1L476.7,218.4L475.6,217.2L475.3,216.4L474.6,215.8L474.1,215.7L473.4,216.1L472.5,216.5L471.8,217.1L470.6,216.9L469.8,216.2L469.3,216.1L468.6,216.5L468.2,216.5L468.0,215.4L468.1,214.6L467.9,213.5L466.9,212.7L466.3,211.1L466.2,209.4Z",cx:483.9,cy:210.8},{name:"Malta",cn:"Malta",d:"M540.5,150.4L540.4,150.5L540.1,150.5L539.9,150.4L539.9,150.1L540.1,150.1L540.4,150.3L540.5,150.4ZM539.8,149.9L539.6,150.0L539.4,149.9L539.4,149.8L539.6,149.8L539.7,149.8L539.8,149.9L539.8,149.9Z",cx:540.2,cy:150.3},{name:"Myanmar",cn:"缅甸",d:"M776.5,193.9L774.9,195.1L772.9,195.3L771.7,198.3L770.5,198.8L771.8,201.2L773.6,203.2L774.7,205.1L773.7,207.5L772.8,208.0L773.4,209.4L775.3,211.6L775.6,213.1L775.5,214.4L776.6,217.0L775.1,219.6L773.8,222.4L773.5,220.3L774.3,218.2L773.4,216.6L773.6,213.5L772.5,212.1L771.6,208.8L771.1,205.3L769.9,203.0L768.1,204.4L764.9,206.3L763.4,206.1L761.6,205.5L762.6,202.0L762.0,199.4L759.8,196.2L760.2,195.2L758.6,194.8L756.6,192.6L756.4,190.3L757.4,190.8L757.4,188.8L758.8,188.1L758.5,186.9L759.1,186.0L759.2,183.1L761.4,183.7L762.6,181.5L762.8,180.1L764.3,177.8L764.2,176.2L767.8,174.3L769.8,174.8L769.6,173.1L770.6,172.5L770.4,171.5L772.0,171.3L772.9,172.9L774.1,173.6L774.2,175.7L774.1,178.0L771.5,180.3L771.1,183.6L774.1,183.2L774.7,185.7L776.5,186.3L775.7,188.6L777.7,189.6L778.9,190.1L781.0,189.3L781.1,190.5L778.7,192.3L778.1,193.3L776.5,193.9Z",cx:769.8,cy:194.5},{name:"Montenegro",cn:"Montenegro",d:"M555.0,131.9L554.8,131.4L553.6,132.8L553.8,133.7L553.2,133.5L552.5,132.6L551.2,132.0L551.6,131.5L552.0,130.0L552.9,129.4L553.4,129.1L554.1,129.6L554.5,130.0L555.4,130.3L556.5,130.8L556.3,131.1L555.8,131.7L555.0,131.9Z",cx:554,cy:131.3},{name:"Mongolia",cn:"蒙古",d:"M743.8,113.1L746.7,112.6L752.0,110.2L756.2,108.9L758.6,109.7L761.5,109.8L763.4,111.1L766.2,111.2L770.2,111.9L772.9,109.9L771.7,108.3L774.6,105.4L777.7,106.6L780.2,106.9L783.5,107.6L784.0,109.7L788.0,110.9L790.6,110.3L794.1,110.0L796.9,110.3L799.6,111.7L801.3,113.1L803.9,113.1L807.4,113.5L809.9,112.8L813.6,112.4L817.7,110.4L819.3,110.7L820.8,111.7L824.1,111.4L822.8,113.5L820.8,116.3L821.5,117.4L823.1,117.1L825.8,117.5L828.0,116.5L830.2,117.4L832.7,119.3L832.4,120.3L830.2,120.0L826.2,120.4L824.2,121.1L822.2,123.0L817.9,124.1L815.2,125.5L812.3,125.0L810.8,124.7L809.3,126.5L810.2,127.6L810.6,128.5L808.7,129.4L806.7,130.9L803.5,131.9L799.3,132.0L794.8,133.0L791.6,134.5L790.3,133.6L787.0,133.6L782.9,131.9L780.1,131.5L776.4,131.9L770.7,131.3L767.6,131.3L766.0,129.7L764.7,127.1L763.0,126.8L759.7,125.1L755.9,124.7L752.6,124.2L751.6,123.0L752.7,119.8L750.8,117.5L746.8,116.5L744.5,115.0L743.8,113.1Z",cx:790.5,cy:118.9},{name:"Mozambique",cn:"莫桑比克",d:"M596.0,282.0L598.1,281.8L601.4,282.6L602.2,282.2L604.1,282.1L605.1,281.3L606.7,281.3L609.8,280.3L612.0,278.7L612.4,279.9L612.3,282.7L612.7,285.1L612.8,289.4L613.3,290.8L612.4,292.8L611.4,294.7L609.6,296.4L607.1,297.5L603.9,298.9L600.8,301.8L599.7,302.3L597.8,304.3L596.6,305.0L596.4,306.9L597.7,309.0L598.3,310.7L598.3,311.5L598.8,311.4L598.7,314.1L598.3,315.4L598.9,315.9L598.5,317.0L597.3,318.0L595.0,318.9L591.7,320.4L590.5,321.5L590.7,322.6L591.4,322.8L591.2,324.3L589.1,324.3L588.8,323.0L588.4,321.8L588.2,320.8L588.7,317.7L588.0,315.7L586.6,311.8L589.6,308.7L590.3,306.7L590.7,306.4L591.0,304.8L590.6,303.9L590.7,301.9L591.2,299.9L591.2,296.4L589.8,295.5L588.5,295.3L587.9,294.6L586.6,294.1L584.3,294.1L584.1,293.1L583.8,291.1L592.3,288.8L593.9,290.1L594.6,289.9L595.7,290.6L595.9,291.7L595.3,293.0L595.5,295.0L597.3,296.7L598.2,294.7L599.4,294.2L599.1,290.6L598.0,288.6L597.0,287.7L596.0,287.7L595.2,284.1L596.0,282.0Z",cx:596.8,cy:299.8},{name:"Mauritania",cn:"毛里塔尼亚",d:"M466.2,209.4L464.4,207.5L462.7,205.4L460.8,204.7L459.5,203.9L458.0,203.9L456.6,204.5L455.2,204.3L454.3,205.2L454.0,203.7L454.8,202.3L455.1,199.7L454.8,197.0L454.5,195.6L454.8,194.2L454.1,192.9L452.6,191.7L453.2,190.7L464.1,190.8L463.6,186.7L464.2,185.3L466.8,185.1L466.8,178.0L475.9,178.1L475.9,173.9L486.3,180.6L482.1,180.7L483.4,192.7L484.8,204.7L485.2,205.0L484.6,206.9L473.5,207.0L473.1,207.6L472.0,207.4L470.4,208.0L468.5,207.2L467.6,207.3L467.1,208.9L466.2,209.4Z",cx:465.8,cy:198.1},{name:"Malawi",cn:"Malawi",d:"M596.0,282.0L595.2,284.1L596.0,287.7L597.0,287.7L598.0,288.6L599.1,290.6L599.4,294.2L598.2,294.7L597.3,296.7L595.5,295.0L595.3,293.0L595.9,291.7L595.7,290.6L594.6,289.9L593.9,290.1L592.3,288.8L590.8,288.1L591.6,285.5L592.5,284.5L592.0,282.2L592.5,280.0L593.0,279.2L592.3,276.9L591.0,275.6L593.7,276.2L594.3,276.9L595.2,278.2L596.0,282.0Z",cx:594.8,cy:286.1},{name:"Malaysia",cn:"马来西亚",d:"M780.8,232.8L781.0,234.2L782.8,233.9L783.7,232.7L784.4,233.0L786.0,234.7L787.2,236.5L787.3,238.4L787.0,239.6L787.3,240.6L787.5,242.2L788.5,243.0L789.6,245.5L789.5,246.4L787.6,246.6L784.9,244.5L781.6,242.3L781.3,240.9L779.7,239.1L779.3,236.8L778.3,235.2L778.6,233.2L778.0,232.0L778.5,231.5L780.8,232.8ZM829.5,237.6L827.5,238.5L825.0,238.0L821.8,238.0L820.9,241.2L819.8,242.2L818.4,246.0L816.1,246.6L813.5,245.8L812.2,246.1L810.5,247.5L808.8,247.3L807.0,247.9L805.1,246.3L804.6,244.4L806.7,245.4L808.8,244.9L809.4,242.5L810.5,242.0L813.9,241.4L815.9,239.2L817.2,237.4L818.5,238.9L819.1,237.9L820.4,238.0L820.6,236.2L820.7,234.9L822.8,232.9L824.2,230.8L825.4,230.8L826.8,232.2L826.9,233.4L828.7,234.1L831.1,235.0L830.9,236.1L829.0,236.2L829.5,237.6Z",cx:818.9,cy:239.8},{name:"Namibia",cn:"纳米比亚",d:"M545.4,329.4L543.3,327.3L542.3,325.3L541.6,322.5L541.0,320.5L540.0,316.3L540.0,312.9L539.6,311.4L538.5,310.3L537.1,308.0L535.6,304.6L535.0,302.9L532.8,300.2L532.6,298.1L533.9,297.5L535.6,297.1L537.4,297.1L539.1,298.4L539.5,298.2L550.7,298.1L552.7,299.4L559.4,299.8L564.5,298.7L566.8,298.0L568.6,298.2L569.7,298.8L569.7,299.1L568.1,299.7L567.3,299.7L565.5,300.8L564.4,299.6L560.2,300.6L558.1,300.7L558.0,310.6L555.3,310.7L555.3,318.8L555.3,329.1L552.8,330.5L551.3,330.7L549.5,330.2L548.3,330.0L547.8,328.8L546.7,328.0L545.4,329.4Z",cx:549.6,cy:310.1},{name:"New Caledonia",cn:"New Caledonia",d:"M960.5,308.6L962.8,310.3L964.2,311.6L963.2,312.2L961.6,311.5L959.7,310.2L957.9,308.7L956.0,306.8L955.6,305.8L956.8,305.9L958.4,306.8L959.6,307.8L960.5,308.6Z",cx:959.8,cy:308.8},{name:"Niger",cn:"尼日尔",d:"M506.0,216.8L506.0,214.9L502.8,214.3L502.8,213.0L501.2,211.1L500.8,209.9L501.0,208.5L502.8,208.4L503.8,207.4L507.6,207.2L510.1,206.8L510.3,205.0L511.9,203.2L511.9,196.8L515.8,195.6L523.8,190.1L533.3,184.8L537.7,186.0L539.3,187.5L541.3,186.5L541.9,190.8L543.0,191.5L543.0,192.4L544.2,193.4L543.6,194.6L542.5,200.2L542.4,203.8L538.8,206.4L537.6,210.1L538.8,211.1L538.8,212.9L540.5,213.0L540.3,214.3L539.5,214.4L539.4,215.3L538.9,215.4L537.0,212.3L536.3,212.2L534.2,213.8L532.0,213.0L530.5,212.8L529.7,213.2L528.1,213.1L526.5,214.3L525.0,214.4L521.7,212.9L520.4,213.6L518.9,213.6L517.9,212.5L515.1,211.5L512.1,211.8L511.4,212.4L511.0,214.0L510.2,215.1L510.0,217.6L507.9,216.0L506.9,216.0L506.0,216.8Z",cx:523.7,cy:207.5},{name:"Nigeria",cn:"尼日利亚",d:"M523.6,236.7L520.7,237.7L519.7,237.6L518.6,238.2L516.4,238.2L514.9,236.4L514.0,234.4L512.0,232.6L509.9,232.6L507.5,232.6L507.6,228.1L507.6,226.4L508.1,224.6L508.9,223.8L510.3,222.0L510.0,221.3L510.5,220.2L509.9,218.5L510.0,217.6L510.2,215.1L511.0,214.0L511.4,212.4L512.1,211.8L515.1,211.5L517.9,212.5L518.9,213.6L520.4,213.6L521.7,212.9L525.0,214.4L526.5,214.3L528.1,213.1L529.7,213.2L530.5,212.8L532.0,213.0L534.2,213.8L536.3,212.2L537.0,212.3L538.9,215.4L539.4,215.3L540.5,216.4L540.2,216.9L540.0,217.9L537.7,220.0L537.0,221.8L536.6,223.2L536.0,223.8L535.4,225.8L533.9,226.9L533.5,228.3L532.9,229.5L532.6,230.6L530.7,231.5L529.2,230.4L528.1,230.4L526.5,232.1L525.6,232.1L524.3,234.8L523.6,236.7Z",cx:523.5,cy:223},{name:"Nicaragua",cn:"尼加拉瓜",d:"M261.9,219.2L260.9,218.3L259.7,217.2L259.0,216.3L257.9,215.4L256.5,214.1L256.8,213.7L257.2,214.1L257.5,213.9L258.3,213.8L258.7,213.2L259.1,213.2L259.0,211.8L259.7,211.7L260.2,211.7L260.8,211.0L261.7,211.6L261.9,211.2L262.5,210.9L263.4,210.1L263.5,209.6L263.7,209.6L264.1,208.9L264.4,208.8L264.9,209.3L265.4,209.4L266.0,209.0L266.7,209.0L267.7,208.7L268.1,208.3L269.0,208.3L268.8,208.6L268.7,209.2L268.9,210.2L268.3,211.2L268.0,212.3L267.9,213.5L268.1,214.3L268.1,215.5L267.7,215.8L267.4,217.0L267.6,217.7L267.1,218.4L267.2,219.2L267.6,219.6L267.0,220.2L266.1,220.0L265.7,219.4L264.8,219.2L264.2,219.6L262.3,218.8L261.9,219.2Z",cx:263.8,cy:213.7},{name:"Netherlands",cn:"荷兰",d:"M516.9,101.4L519.2,101.4L519.7,102.4L519.0,104.9L518.3,106.0L516.6,106.0L517.1,108.9L515.6,108.2L513.8,107.0L511.2,107.6L509.2,107.4L510.6,106.6L513.1,102.5L516.9,101.4Z",cx:515.5,cy:105.1},{name:"Norway",cn:"挪威",d:"M578.2,52.3L586.9,54.3L583.3,55.0L586.4,56.8L581.7,57.9L579.4,58.2L580.6,56.2L577.0,55.1L572.7,56.0L571.4,58.1L568.7,59.3L565.7,58.6L562.1,58.8L559.0,57.3L557.3,58.0L555.6,58.2L555.2,60.0L550.0,59.5L549.2,61.1L546.6,61.1L544.7,63.0L542.0,66.1L537.7,70.0L538.7,71.0L537.7,72.1L534.9,72.0L533.1,74.6L533.3,78.3L535.1,79.7L534.2,83.0L531.9,84.9L530.6,86.5L528.8,84.8L523.3,88.0L519.6,88.7L515.7,87.3L514.7,84.3L513.9,77.9L516.4,76.1L523.8,73.7L529.2,70.9L534.3,67.0L541.0,61.6L545.7,59.5L553.3,56.1L559.4,54.8L564.0,55.0L568.2,52.7L573.3,52.8L578.2,52.3ZM568.7,33.7L562.5,34.9L557.6,34.2L559.5,33.5L557.8,32.6L563.6,32.1L564.7,33.1L568.7,33.7ZM550.7,28.6L559.8,30.7L552.9,31.8L551.3,33.8L548.9,34.3L547.6,36.6L544.2,36.7L538.2,35.1L540.7,34.1L536.6,33.3L531.2,30.9L529.0,28.7L536.6,27.7L538.1,28.7L542.1,28.7L543.1,27.7L547.2,27.6L550.7,28.6ZM570.7,26.6L576.1,27.6L572.0,29.1L564.0,29.4L555.8,29.0L555.3,28.2L551.3,28.2L548.2,26.9L556.8,26.1L560.9,26.8L563.7,26.0L570.7,26.6Z",cx:550.1,cy:65.9},{name:"Nepal",cn:"尼泊尔",d:"M744.8,172.6L744.6,173.8L744.9,175.5L744.6,176.6L742.3,176.7L739.0,176.0L736.8,175.8L735.2,174.3L731.4,174.0L727.8,172.4L725.2,171.1L722.5,170.0L723.5,167.4L725.3,166.2L726.5,165.5L728.7,166.3L731.5,168.2L733.1,168.6L734.0,169.9L736.1,170.4L738.4,171.7L741.5,172.3L744.8,172.6Z",cx:734.9,cy:171.6},{name:"New Zealand",cn:"新西兰",d:"M980.6,363.7L981.2,364.8L983.2,363.7L984.0,364.9L984.0,366.0L983.0,367.3L981.2,369.4L979.8,370.5L980.8,371.8L978.6,371.8L976.3,372.9L975.5,374.7L973.9,377.5L971.8,378.8L970.4,379.6L967.8,379.5L966.0,378.6L963.0,378.4L962.5,377.4L964.0,375.3L967.5,372.6L969.3,372.0L971.3,371.0L973.7,369.5L975.3,368.1L976.6,366.0L977.6,365.3L978.0,363.8L980.0,362.5L980.6,363.7ZM985.0,350.4L987.0,353.4L987.1,351.5L988.4,352.2L988.8,354.3L991.0,355.2L992.9,355.4L994.5,354.4L995.9,354.7L995.2,357.2L994.4,358.8L992.2,358.7L991.5,359.6L991.8,360.8L991.3,361.3L990.3,362.8L988.9,364.7L986.8,365.8L986.3,365.1L985.1,364.7L986.7,362.4L985.8,360.9L982.8,359.7L982.9,358.7L984.9,357.8L985.4,355.6L985.3,353.8L984.1,352.0L984.2,351.5L982.9,350.3L980.7,347.9L979.5,345.9L980.6,345.7L982.1,347.2L984.2,348.0L985.0,350.4Z",cx:987.3,cy:355.8},{name:"Oman",cn:"阿曼",d:"M663.5,191.3L662.5,193.3L661.2,193.1L660.6,193.8L660.2,195.2L660.5,197.0L660.3,197.4L659.0,197.4L657.2,198.4L657.0,199.8L656.3,200.3L654.6,200.3L653.5,201.0L653.5,202.1L652.2,202.9L650.7,202.7L648.8,203.6L647.5,203.7L646.6,201.8L644.4,197.2L652.8,194.4L654.6,188.9L653.4,186.9L653.4,185.8L654.2,184.7L654.2,183.5L655.5,183.0L655.0,182.6L655.2,180.8L656.7,180.8L657.9,182.7L659.5,183.7L661.5,184.0L663.1,184.5L664.4,186.1L665.1,187.1L666.1,187.4L666.1,188.0L665.1,189.7L664.7,190.5L663.5,191.3ZM656.6,178.1L656.3,178.6L655.8,177.6L656.6,176.7L656.9,176.9L656.6,178.1Z",cx:657.4,cy:192.2},{name:"Pakistan",cn:"巴基斯坦",d:"M708.8,146.9L710.8,148.1L711.6,150.3L716.2,151.4L713.5,153.7L710.4,154.2L706.2,153.5L704.9,154.7L705.8,157.1L706.8,159.0L709.1,160.4L706.7,162.0L706.7,163.9L704.0,166.7L702.3,169.6L699.4,172.5L696.2,172.3L693.1,175.2L694.9,176.4L695.2,178.5L696.8,180.0L697.3,182.3L691.2,182.3L689.4,184.2L687.3,183.5L686.5,181.5L684.4,179.4L679.3,179.9L674.7,179.9L670.8,180.3L671.9,177.1L675.9,175.7L675.6,174.4L674.3,173.9L674.2,171.5L671.6,170.3L670.5,168.6L669.1,167.1L673.7,168.6L676.5,168.1L678.2,168.5L678.8,167.9L680.7,168.1L684.3,167.0L684.4,164.6L685.9,163.0L688.0,163.0L688.3,162.3L690.4,161.9L691.5,162.2L692.5,161.4L692.4,159.7L693.6,158.0L695.3,157.3L694.3,155.5L696.9,155.6L697.7,154.6L697.5,153.5L698.9,152.4L698.6,151.0L698.0,149.8L699.6,148.6L702.6,148.0L705.7,147.7L707.2,147.2L708.8,146.9Z",cx:692.8,cy:164.4},{name:"Panama",cn:"巴拿马",d:"M283.7,229.9L282.7,229.1L282.1,227.6L282.8,226.9L282.1,226.7L281.6,225.8L280.2,225.0L279.0,225.2L278.4,226.2L277.3,226.9L276.7,226.9L276.4,227.5L277.8,229.0L277.0,229.4L276.6,229.8L275.3,229.9L274.8,228.3L274.5,228.8L273.6,228.6L273.0,227.5L271.9,227.3L271.1,227.0L269.9,227.0L269.9,227.6L269.5,227.2L269.7,226.6L269.9,226.0L269.8,225.5L270.2,225.2L269.6,224.8L269.6,223.7L270.7,223.4L271.7,224.4L271.6,225.0L272.8,225.1L273.0,224.9L273.8,225.6L275.1,225.4L276.3,224.7L278.0,224.1L279.0,223.3L280.5,223.5L280.4,223.7L281.9,223.8L283.2,224.3L284.1,225.1L285.1,225.9L284.8,226.3L285.4,228.0L284.9,228.8L284.0,228.6L283.7,229.9Z",cx:276.9,cy:226.5},{name:"Peru",cn:"秘鲁",d:"M306.7,298.8L305.9,300.3L304.5,301.0L301.7,299.4L301.5,298.2L296.0,295.4L291.0,292.4L288.9,290.7L287.7,288.4L288.2,287.6L285.8,284.0L283.1,278.8L280.5,273.3L279.3,272.0L278.4,270.0L276.3,268.2L274.3,267.0L275.2,265.8L273.9,263.2L274.7,261.2L276.9,259.5L277.3,260.6L276.5,261.3L276.5,262.3L277.7,262.1L278.8,262.4L280.0,263.8L281.6,262.6L282.1,260.8L283.8,258.3L287.1,257.2L290.2,254.3L291.0,252.5L290.6,250.4L291.4,250.2L293.2,251.5L294.1,252.8L295.4,253.5L297.0,256.4L299.1,256.8L300.6,256.0L301.6,256.5L303.3,256.3L305.4,257.6L303.6,260.4L304.5,260.5L305.9,261.9L303.3,261.8L303.0,262.2L300.7,262.8L297.5,264.7L297.3,265.9L296.6,266.9L296.9,268.4L295.2,269.2L295.2,270.4L294.5,270.9L295.6,273.4L297.2,275.1L296.6,276.3L298.4,276.4L299.5,277.9L301.9,278.0L304.2,276.4L304.0,280.6L305.3,280.9L306.9,280.4L309.3,284.9L308.7,285.8L308.5,287.8L308.5,290.1L307.4,291.5L307.9,292.6L307.3,293.5L308.4,295.8L306.7,298.8Z",cx:294.2,cy:272},{name:"Philippines",cn:"菲律宾",d:"M851.0,226.6L851.3,228.5L851.5,230.0L850.5,232.6L849.5,229.7L848.2,231.1L849.1,233.2L848.3,234.5L845.1,232.9L844.3,230.9L845.1,229.6L843.4,228.2L842.5,229.4L841.2,229.3L839.1,230.8L838.7,230.0L839.8,227.7L841.5,226.9L843.0,225.9L844.0,227.1L846.1,226.3L846.6,225.1L848.5,225.0L848.4,222.9L850.6,224.2L850.9,225.6L851.0,226.6ZM844.4,221.4L843.4,222.4L842.5,224.1L841.7,224.9L839.9,223.0L840.5,222.3L841.2,221.5L841.5,219.8L843.1,219.6L842.6,221.5L844.7,218.8L844.4,221.4ZM829.2,224.1L825.5,226.8L826.8,224.8L828.9,223.1L830.5,221.2L832.0,218.4L832.5,220.7L830.6,222.2L829.2,224.1ZM838.6,217.0L840.2,217.8L842.0,217.8L841.9,219.0L840.7,220.2L838.9,221.0L838.8,219.7L839.0,218.3L838.6,217.0ZM848.6,216.2L849.4,219.3L847.3,218.6L847.3,219.5L848.0,221.2L846.7,221.8L846.6,219.9L845.7,219.8L845.3,218.1L846.9,218.3L846.9,217.2L845.2,215.1L847.9,215.2L848.6,216.2ZM837.6,213.7L836.8,216.1L835.6,214.7L834.2,212.6L836.6,212.7L837.6,213.7ZM837.0,198.6L838.7,199.4L839.6,198.7L839.8,199.4L839.4,200.5L840.3,202.5L839.6,204.8L838.0,205.7L837.5,208.0L838.1,210.2L839.6,210.5L840.8,210.2L844.3,211.7L844.0,213.2L844.9,213.9L844.7,215.2L842.5,213.8L841.5,212.4L840.8,213.4L839.0,211.7L836.5,212.1L835.1,211.5L835.2,210.4L836.1,209.7L835.3,209.0L834.9,210.0L833.5,208.4L833.1,207.2L833.0,204.5L834.1,205.5L834.4,201.1L835.3,198.6L837.0,198.6Z",cx:838.3,cy:207.3},{name:"Papua New Guinea",cn:"巴布亚新几内亚",d:"M933.0,268.9L932.2,269.2L931.0,268.2L929.8,266.4L929.2,264.3L929.6,264.0L929.9,264.8L930.7,265.5L932.1,267.2L933.4,268.2L933.0,268.9ZM922.2,265.2L920.7,265.4L920.3,266.2L918.8,266.9L917.3,267.5L915.9,267.5L913.6,266.7L912.0,266.0L912.2,265.1L914.7,265.5L916.2,265.3L916.7,264.0L917.1,263.9L917.3,265.4L918.9,265.2L919.7,264.2L921.2,263.2L920.9,261.6L922.6,261.5L923.2,262.0L923.1,263.5L922.2,265.2ZM908.9,270.5L911.3,272.3L913.2,275.3L914.7,275.2L914.6,276.4L916.8,276.9L915.9,277.4L918.9,278.6L918.6,279.4L916.7,279.6L916.1,278.9L913.7,278.6L910.9,278.1L908.7,276.4L907.1,274.8L905.7,272.4L902.1,271.2L899.7,272.0L898.0,272.9L898.4,275.0L896.2,275.9L894.6,275.4L891.8,275.3L891.7,266.3L891.7,257.2L896.5,259.1L901.6,260.7L903.5,262.1L905.1,263.5L905.5,265.2L910.1,266.9L910.8,268.4L908.3,268.7L908.9,270.5ZM925.4,262.5L924.5,263.2L924.0,261.6L923.4,260.5L922.1,259.6L920.5,258.4L918.5,257.6L919.3,256.9L920.8,257.7L921.7,258.3L922.9,259.0L924.0,260.2L925.1,261.1L925.4,262.5Z",cx:906.7,cy:272},{name:"Poland",cn:"波兰",d:"M541.7,108.0L540.6,106.3L540.8,105.3L540.1,103.8L539.1,102.8L539.9,102.1L539.2,100.7L541.1,99.9L545.5,98.6L549.0,97.6L551.7,98.1L551.9,98.8L554.6,98.8L558.0,99.1L563.1,99.1L564.6,99.4L565.2,100.2L565.4,101.5L566.1,102.5L566.1,103.6L564.4,104.2L565.3,105.5L565.4,106.7L566.7,109.2L566.5,109.9L565.1,110.3L562.6,112.6L563.3,113.8L562.7,113.7L560.0,112.6L558.0,113.0L556.7,112.7L555.1,113.3L553.7,112.3L552.5,112.7L552.4,112.5L551.1,111.1L549.0,111.0L548.8,110.1L546.9,109.8L546.4,110.5L544.9,109.9L545.1,109.2L543.0,108.9L541.7,108.0Z",cx:553.6,cy:106.4},{name:"Puerto Rico",cn:"波多黎各",d:"M315.9,198.6L317.3,198.8L317.8,199.4L317.1,200.1L315.0,200.1L313.4,200.1L313.2,199.0L313.6,198.6L315.9,198.6Z",cx:315.5,cy:199.2},{name:"North Korea",cn:"朝鲜",d:"M862.9,132.2L863.3,132.7L862.2,132.6L861.0,133.5L860.2,134.4L860.3,136.4L858.9,137.1L858.4,137.5L857.3,138.4L855.5,138.8L854.3,139.6L854.2,140.8L853.8,141.1L855.0,141.5L856.5,142.7L856.1,143.4L854.9,143.6L853.0,143.7L851.9,145.0L850.7,144.9L850.5,145.1L849.1,144.6L848.8,145.1L848.0,145.4L847.9,144.8L847.2,144.6L846.4,144.1L847.2,142.9L847.8,142.6L847.6,142.1L848.3,140.6L848.1,140.1L846.5,139.8L845.2,139.1L847.4,137.3L850.5,135.8L852.4,133.8L853.7,134.7L856.1,134.8L855.7,133.3L860.0,132.2L861.1,130.6L862.9,132.2Z",cx:853.7,cy:139.2},{name:"Portugal",cn:"葡萄牙",d:"M474.9,133.7L475.9,133.0L477.0,132.6L477.7,133.9L479.4,133.9L479.9,133.6L481.5,133.7L482.3,135.1L481.0,135.8L480.9,138.0L480.5,138.4L480.4,139.7L479.2,139.9L480.3,141.6L479.5,143.4L480.5,144.2L480.1,145.0L479.1,146.0L479.3,147.0L478.2,147.7L476.7,147.3L475.3,147.6L475.7,145.4L475.4,143.7L474.2,143.4L473.5,142.4L473.8,140.6L474.9,139.6L475.1,138.4L475.6,136.8L475.6,135.6L475.0,134.6L474.9,133.7Z",cx:477.7,cy:139.5},{name:"Paraguay",cn:"巴拉圭",d:"M325.9,311.8L327.0,308.5L327.0,307.0L328.4,304.5L333.2,303.7L335.8,303.8L338.4,305.2L338.4,306.0L339.2,307.6L339.1,311.4L342.0,311.9L343.1,311.4L345.0,312.1L345.5,312.9L345.8,315.5L346.1,316.5L347.1,316.7L348.2,316.2L349.2,316.7L349.2,318.3L348.8,319.9L348.3,321.5L347.8,323.9L345.3,326.1L343.1,326.5L340.0,326.1L337.2,325.3L339.9,321.1L339.5,319.9L336.6,318.8L333.3,316.8L331.0,316.3L325.9,311.8Z",cx:339.7,cy:314.9},{name:"Qatar",cn:"卡塔尔",d:"M641.1,181.2L641.0,179.2L641.7,177.8L642.5,177.5L643.3,178.3L643.4,180.0L642.7,181.6L642.0,181.8L641.1,181.2Z",cx:642.1,cy:179.8},{name:"Romania",cn:"罗马尼亚",d:"M563.1,117.0L564.3,116.4L566.0,116.7L567.8,116.7L569.1,117.4L570.0,117.0L572.1,116.7L572.8,116.1L573.9,116.1L574.8,116.3L575.6,117.1L576.5,118.3L578.1,120.0L578.2,121.2L577.9,122.4L578.4,123.6L579.7,124.2L581.0,123.7L582.2,124.2L582.3,124.9L580.9,125.5L580.1,125.2L579.3,128.6L577.7,128.3L575.7,127.3L572.4,127.9L571.0,128.6L566.9,128.5L564.8,128.1L563.7,128.3L562.9,127.1L562.4,126.6L563.1,126.2L562.4,125.8L561.5,126.4L559.9,125.6L559.7,124.5L558.0,123.8L557.7,123.0L556.2,121.9L558.4,121.3L560.1,119.5L561.4,117.6L563.1,117.0Z",cx:569.6,cy:122.5},{name:"Russia",cn:"俄罗斯",d:"M899.0,109.0L901.8,114.0L897.7,113.0L896.0,117.1L898.7,119.9L898.6,121.8L896.5,120.2L894.7,122.3L894.2,120.0L894.5,117.3L894.2,114.3L894.8,112.2L894.9,108.5L893.3,105.7L893.6,101.9L896.1,100.7L895.0,99.4L896.3,99.0L897.0,100.8L897.9,103.5L897.9,106.2L899.0,109.0ZM563.1,99.1L558.0,99.1L554.6,98.8L555.2,97.6L559.1,96.7L562.0,97.2L563.2,97.6L562.9,98.4L563.1,99.1ZM13.8,65.0L15.7,65.7L15.1,63.7L22.6,64.1L28.1,66.7L25.3,67.9L20.7,68.2L20.7,70.9L19.6,71.5L17.0,71.4L14.9,70.5L11.2,69.7L10.5,68.5L7.7,68.0L4.6,68.4L3.0,67.4L3.6,66.4L0.3,67.0L1.6,68.3L0.0,69.5L0.0,58.4L6.8,60.6L14.1,63.3L13.8,65.0ZM1000.0,53.2L997.0,53.4L996.5,52.5L1000.0,51.3L1000.0,53.2ZM3.6,53.1L0.0,53.2L0.0,51.3L0.4,51.2L2.7,51.2L6.7,52.0L6.5,52.4L3.6,53.1ZM898.9,46.6L894.7,46.7L889.0,46.3L888.5,46.2L891.1,45.1L894.6,44.8L898.6,45.9L898.9,46.6ZM918.7,41.4L915.5,42.5L911.0,42.3L905.9,41.2L906.6,40.3L911.7,40.7L918.7,41.4ZM903.0,40.1L900.8,42.2L890.6,42.1L886.0,42.7L880.5,40.9L882.0,39.0L885.6,38.5L893.0,38.6L903.0,40.1ZM659.8,53.6L658.2,53.8L649.1,53.4L648.4,52.2L643.3,51.5L642.9,50.0L645.8,49.4L645.7,47.8L651.2,45.5L648.6,45.1L655.3,42.7L654.5,41.4L660.7,40.0L669.9,38.2L679.2,37.7L683.9,36.6L689.3,36.3L691.3,37.4L689.4,38.2L679.5,39.6L671.1,40.9L662.4,43.6L658.3,46.3L653.9,49.0L654.5,51.3L659.8,53.6ZM797.1,36.2L797.9,37.6L800.4,36.9L808.5,36.9L814.8,38.3L817.0,39.3L816.3,40.8L813.3,41.6L806.0,43.1L803.9,43.9L807.3,44.3L811.4,45.0L813.9,44.5L815.4,46.3L816.6,45.6L821.0,45.1L829.9,45.6L830.6,46.9L842.2,47.3L842.4,45.2L848.3,45.7L852.7,45.7L857.2,47.1L858.5,48.9L856.8,50.1L860.3,52.2L864.7,53.4L867.4,50.5L871.8,51.7L876.6,51.0L881.9,51.8L884.0,51.0L888.5,51.4L886.5,48.8L890.2,47.6L915.3,49.4L917.6,51.1L924.9,53.2L936.1,52.7L941.7,53.1L944.0,54.3L943.6,56.3L947.1,57.1L950.8,56.5L955.7,56.5L960.9,57.0L966.2,56.7L971.0,59.2L974.5,58.3L972.2,56.5L973.5,55.3L982.3,56.1L988.1,55.9L996.1,57.2L1000.0,58.4L1000.0,69.5L1000.0,69.5L996.4,70.7L992.8,70.5L995.3,72.0L997.0,74.3L998.3,75.0L998.6,76.2L997.9,76.9L992.7,76.3L984.9,78.4L982.4,78.7L978.2,80.7L974.2,82.4L973.1,83.7L969.2,81.7L961.9,83.9L960.7,82.9L958.0,84.1L954.3,83.7L953.4,85.5L950.0,88.2L950.1,89.3L953.3,90.0L952.9,94.0L950.4,94.1L949.2,96.4L950.3,97.6L945.5,99.0L944.5,102.2L940.4,102.9L939.5,105.7L935.5,108.3L934.5,106.4L933.3,102.3L931.8,96.2L933.1,92.3L935.4,90.7L935.6,89.4L939.9,88.7L944.9,85.2L949.6,82.4L954.6,80.2L956.9,76.2L953.5,76.5L951.8,78.8L944.8,81.8L942.5,78.4L935.3,79.3L928.4,84.0L930.7,85.7L924.5,86.4L920.2,86.7L920.4,84.7L916.1,84.3L912.6,85.7L904.1,85.2L895.0,86.0L886.0,91.4L875.4,98.0L879.7,98.3L881.1,100.1L883.8,100.7L885.6,99.3L888.6,99.5L892.6,102.5L892.7,104.9L890.5,107.7L890.3,111.0L889.1,115.4L884.9,119.4L883.9,121.4L880.2,124.6L876.4,127.8L874.6,129.4L870.9,131.1L869.2,131.1L867.4,129.8L863.7,131.8L863.3,132.7L862.9,132.2L862.9,130.8L864.3,130.8L864.7,127.5L864.0,125.1L866.3,124.1L869.7,124.6L871.6,121.9L872.5,118.9L873.6,117.8L875.1,115.3L870.5,116.2L868.1,117.3L863.9,117.2L862.7,114.6L859.4,112.7L854.6,111.8L853.6,109.1L852.6,107.4L851.6,106.2L849.9,103.4L847.4,102.3L843.3,101.5L839.6,101.6L836.1,102.1L833.8,103.5L835.3,104.1L835.4,105.7L833.8,106.5L831.3,109.5L831.4,110.7L827.4,112.5L824.1,111.4L820.8,111.7L819.3,110.7L817.7,110.4L813.6,112.4L809.9,112.8L807.4,113.5L803.9,113.1L801.3,113.1L799.6,111.7L796.9,110.3L794.1,110.0L790.6,110.3L788.0,110.9L784.0,109.7L783.5,107.6L780.2,106.9L777.7,106.6L774.6,105.4L771.7,108.3L772.9,109.9L770.2,111.9L766.2,111.2L763.4,111.1L761.5,109.8L758.6,109.7L756.2,108.9L752.0,110.2L746.7,112.6L743.8,113.1L742.7,113.3L741.2,111.6L737.6,112.0L736.4,110.8L734.5,110.2L733.2,108.6L731.6,108.1L727.6,108.9L723.8,107.3L722.3,108.7L716.1,101.7L712.6,99.5L713.6,98.6L706.6,101.3L704.0,101.4L704.2,99.9L700.6,99.0L697.7,99.6L696.8,96.8L691.9,96.2L689.4,97.3L682.4,98.3L681.1,99.0L670.7,100.0L669.4,100.9L671.4,102.8L668.7,103.6L669.2,104.3L666.6,105.7L671.1,107.6L670.4,108.9L666.5,108.8L665.7,109.6L662.1,108.2L657.7,108.2L654.8,109.4L651.5,108.3L645.4,106.3L641.0,106.4L635.3,109.4L634.9,111.5L632.1,109.8L629.9,112.9L630.7,113.5L629.1,115.6L631.4,117.5L633.5,117.4L635.3,119.2L635.0,120.7L636.4,121.1L635.1,122.8L632.4,123.2L629.7,126.1L632.2,128.7L631.9,130.6L635.0,133.9L633.3,135.0L632.8,135.7L631.6,135.5L629.7,133.8L628.9,133.7L627.2,133.1L626.3,131.9L623.7,131.4L622.0,131.8L621.5,131.3L617.8,129.9L613.7,129.5L611.3,129.0L611.0,129.3L607.4,127.0L604.3,126.0L601.9,124.3L603.9,123.9L606.2,121.6L604.6,120.5L608.7,119.3L608.7,118.7L606.2,119.2L606.3,117.9L607.7,117.2L610.4,116.9L610.8,116.0L610.2,114.5L611.3,113.0L611.3,112.2L607.2,111.3L605.6,111.3L603.9,110.0L601.7,110.5L598.2,109.5L598.3,109.0L597.3,107.8L595.1,107.6L594.8,106.8L595.5,106.2L593.8,104.6L590.9,104.9L590.0,104.8L589.3,105.4L588.3,105.3L587.6,103.5L587.0,102.6L587.5,102.3L589.7,102.4L590.8,101.8L590.0,101.1L588.1,100.6L588.3,100.1L587.2,99.6L585.4,97.7L586.0,97.0L585.8,95.7L583.0,95.0L581.6,95.4L581.2,94.7L578.3,94.0L577.4,92.3L577.1,91.0L575.8,90.3L577.0,89.5L576.2,86.9L578.1,85.3L577.7,84.8L580.9,83.3L578.0,81.9L583.9,78.4L586.5,76.8L587.5,75.4L583.4,73.5L584.6,71.7L582.1,69.6L583.9,67.2L580.7,64.0L583.3,61.9L579.0,60.1L579.4,58.2L581.7,57.9L586.4,56.8L589.3,55.8L593.8,57.5L601.4,58.2L611.9,61.3L614.1,62.6L614.2,64.5L611.2,65.9L606.6,66.7L594.2,64.6L592.2,64.9L596.7,66.9L596.9,68.2L597.1,71.1L600.6,71.9L602.8,72.6L603.2,71.3L601.5,70.1L603.3,69.0L610.0,70.8L612.3,70.1L610.5,68.1L616.9,65.3L619.5,65.5L622.1,66.5L623.7,64.6L621.4,62.9L622.7,61.2L620.7,59.5L628.5,60.4L630.1,62.0L626.5,62.3L626.6,63.9L628.7,64.8L633.0,64.2L633.7,62.4L639.5,61.1L649.2,58.7L651.3,58.9L648.6,60.6L652.0,60.8L654.0,59.9L659.2,59.8L663.3,58.7L666.5,60.3L669.7,58.5L666.8,56.9L668.2,56.0L676.4,56.8L680.2,57.7L690.3,60.9L692.2,59.4L689.3,57.9L689.3,57.3L685.9,57.1L686.8,55.8L685.3,53.6L685.3,52.7L690.4,50.2L692.2,47.7L694.3,47.1L701.6,47.8L702.2,49.4L699.6,51.6L701.3,52.5L702.2,54.5L701.6,58.3L704.6,60.0L703.4,61.8L698.0,65.8L701.2,66.2L702.3,65.2L705.3,64.5L706.1,63.1L708.5,61.8L706.9,60.2L708.2,58.4L705.1,58.1L704.4,56.6L706.7,53.8L703.1,51.5L708.0,49.7L707.4,47.7L708.8,47.6L710.2,49.2L709.1,51.8L712.1,52.4L710.8,50.3L715.5,49.3L721.3,49.1L726.4,50.7L723.9,48.4L723.6,45.4L728.5,44.9L735.2,45.0L741.2,44.6L738.9,43.2L742.1,41.3L745.3,41.3L750.7,39.9L758.1,39.5L759.0,38.8L766.3,38.5L768.6,39.1L774.8,37.6L779.9,37.7L780.7,36.5L783.3,35.3L789.9,34.2L794.6,35.1L790.8,35.8L797.1,36.2ZM791.9,32.5L776.2,33.6L781.3,29.9L783.6,29.6L785.7,29.8L792.7,31.4L791.9,32.5ZM642.0,26.3L638.3,26.6L635.8,26.8L635.4,27.3L632.2,27.7L629.2,27.1L630.8,26.2L624.6,26.1L630.0,25.6L634.2,25.6L634.8,26.3L636.4,25.7L639.0,25.2L643.1,25.8L642.0,26.3ZM777.6,30.9L771.5,31.2L763.8,30.4L759.2,29.4L757.1,27.4L753.3,26.8L760.5,24.9L766.5,24.3L771.9,25.7L778.3,28.4L777.6,30.9Z",cx:753.6,cy:85.2},{name:"Rwanda",cn:"卢旺达",d:"M584.5,253.2L585.6,254.7L585.4,256.4L584.6,256.7L583.2,256.5L582.3,258.1L580.6,257.9L580.9,256.4L581.3,256.2L581.4,254.5L582.2,253.7L582.8,254.0L584.5,253.2Z",cx:583,cy:255.5},{name:"Western Sahara",cn:"Western Sahara",d:"M475.6,174.7L475.5,173.2L475.9,173.2L475.9,173.4L475.9,173.9L475.9,178.1L466.8,178.0L466.8,185.1L464.2,185.3L463.6,186.7L464.1,190.8L453.2,190.7L452.6,191.7L452.7,190.5L452.8,190.5L459.0,190.3L459.4,189.3L460.5,188.0L461.4,184.2L465.3,181.2L466.6,177.7L467.4,177.5L468.4,175.3L470.7,175.0L471.7,175.4L473.0,175.4L473.9,174.8L475.6,174.7Z",cx:466.6,cy:181.2},{name:"Saudi Arabia",cn:"沙特阿拉伯",d:"M618.8,204.6L618.5,203.4L617.6,202.6L617.4,201.5L616.0,200.5L614.5,198.1L613.7,195.9L611.8,194.0L610.6,193.5L608.7,190.9L608.4,188.9L608.5,187.3L606.9,184.2L605.6,183.1L604.1,182.5L603.2,180.9L603.4,180.3L602.6,178.9L601.8,178.3L600.7,176.2L599.0,174.0L597.6,172.0L596.2,172.1L596.6,170.5L596.8,169.6L597.1,168.5L600.2,168.9L601.4,168.0L602.1,167.0L604.2,166.7L604.6,165.7L605.6,165.3L602.8,162.5L608.3,161.1L608.9,160.7L612.2,161.4L616.4,163.4L624.2,168.9L629.4,169.2L631.8,169.4L632.5,170.8L634.5,170.7L635.6,173.1L636.9,173.7L637.4,174.7L639.3,175.9L639.5,177.0L639.2,177.9L639.6,178.9L640.4,179.6L640.7,180.6L641.1,181.2L642.0,181.8L642.7,181.6L643.3,182.7L643.4,183.3L644.4,186.1L652.8,187.5L653.4,186.9L654.6,188.9L652.8,194.4L644.4,197.2L636.4,198.3L633.8,199.5L631.9,202.5L630.6,202.9L629.9,202.0L628.8,202.1L626.1,201.9L625.6,201.6L622.4,201.6L621.6,201.9L620.5,201.2L619.8,202.5L620.1,203.7L618.8,204.6Z",cx:621.4,cy:183.7},{name:"Sudan",cn:"苏丹",d:"M594.3,223.7L594.0,223.7L594.0,222.3L593.7,221.3L592.2,220.2L591.9,218.2L592.2,216.2L591.0,216.0L590.8,216.6L589.1,216.7L589.8,217.6L590.0,219.2L588.5,220.7L587.1,222.7L585.7,223.0L583.3,221.4L582.3,222.0L582.0,222.8L580.6,223.3L580.5,223.9L577.7,223.9L577.3,223.3L575.3,223.2L574.3,223.7L573.5,223.5L572.1,221.8L571.6,221.1L569.6,221.5L568.9,222.7L568.2,225.2L567.2,225.8L566.4,226.1L566.1,225.9L565.2,225.1L565.0,224.3L565.4,223.1L565.4,222.0L563.8,220.2L563.5,219.0L563.5,218.4L562.5,217.6L562.5,215.9L561.9,214.9L560.9,215.0L561.2,214.0L561.9,212.9L561.6,211.7L562.5,210.9L562.0,210.2L562.7,208.5L564.0,206.4L566.4,206.6L566.2,195.6L566.2,194.4L569.4,194.4L569.4,188.9L580.6,188.9L591.4,188.9L602.4,188.9L603.3,191.6L602.7,192.1L603.1,195.0L604.1,198.3L605.2,199.0L606.7,200.0L605.3,201.6L603.2,202.0L602.4,202.9L602.1,204.7L600.9,208.8L601.2,209.9L600.8,212.3L599.6,215.1L597.9,216.4L596.8,218.6L596.5,219.7L595.2,220.5L594.3,223.4L594.3,223.7Z",cx:581.8,cy:214.1},{name:"South Sudan",cn:"South Sudan",d:"M594.3,223.7L594.4,225.9L594.0,226.7L592.5,226.8L591.5,228.4L593.2,228.6L594.7,229.9L595.1,231.0L596.4,231.7L598.1,234.7L596.2,236.5L594.5,238.2L592.8,239.5L590.8,239.5L588.6,240.1L586.8,239.5L585.6,240.3L583.2,238.4L582.5,237.2L581.0,237.8L579.7,237.6L579.0,238.1L577.7,237.8L576.0,235.5L575.6,234.6L573.5,233.5L572.8,231.8L571.7,230.6L569.8,229.2L569.8,228.3L568.2,227.1L566.4,226.1L567.2,225.8L568.2,225.2L568.9,222.7L569.6,221.5L571.6,221.1L572.1,221.8L573.5,223.5L574.3,223.7L575.3,223.2L577.3,223.3L577.7,223.9L580.5,223.9L580.6,223.3L582.0,222.8L582.3,222.0L583.3,221.4L585.7,223.0L587.1,222.7L588.5,220.7L590.0,219.2L589.8,217.6L589.1,216.7L590.8,216.6L591.0,216.0L592.2,216.2L591.9,218.2L592.2,220.2L593.7,221.3L594.0,222.3L594.0,223.7L594.3,223.7Z",cx:583.7,cy:227.5},{name:"Senegal",cn:"塞内加尔",d:"M453.6,212.2L452.4,210.1L451.0,209.1L452.3,208.6L453.6,206.6L454.3,205.2L455.2,204.3L456.6,204.5L458.0,203.9L459.5,203.9L460.8,204.7L462.7,205.4L464.4,207.5L466.2,209.4L466.3,211.1L466.9,212.7L467.9,213.5L468.1,214.6L468.0,215.4L467.6,215.6L466.1,215.4L465.9,215.7L465.3,215.7L463.3,215.1L461.9,215.0L456.8,214.9L456.1,215.2L455.1,215.1L453.7,215.6L453.2,213.5L455.7,213.5L456.4,213.1L456.9,213.1L457.9,212.5L459.1,213.1L460.3,213.1L461.5,212.5L461.0,211.7L460.1,212.2L459.2,212.1L458.1,211.5L457.2,211.5L456.6,212.2L453.6,212.2Z",cx:459.5,cy:211.5},{name:"Solomon Islands",cn:"Solomon Islands",d:"M950.3,279.1L951.1,280.1L949.2,280.1L948.1,278.3L949.8,279.0L950.3,279.1ZM946.8,277.4L945.7,277.5L944.0,277.2L943.4,276.8L943.6,275.7L945.5,276.1L946.4,276.7L946.8,277.4ZM949.1,276.7L948.7,277.2L946.6,274.8L946.1,273.1L947.0,273.1L948.0,275.3L949.1,276.7ZM944.1,273.2L944.2,273.7L942.0,272.5L940.5,271.5L939.5,270.6L939.9,270.3L941.2,271.0L943.4,272.3L944.1,273.2ZM937.6,270.4L937.1,270.6L935.8,269.9L934.7,268.8L934.8,268.3L936.5,269.5L937.6,270.4Z",cx:942.1,cy:272},{name:"Sierra Leone",cn:"Sierra Leone",d:"M468.2,231.2L467.5,230.9L465.5,229.8L464.0,228.3L463.5,227.3L463.2,225.3L464.7,224.0L465.0,223.3L465.5,222.7L466.2,222.6L466.9,222.1L469.1,222.1L469.9,223.1L470.5,224.3L470.4,225.1L470.8,225.8L470.8,226.8L471.6,226.6L470.3,227.9L469.0,229.5L468.9,230.3L468.2,231.2Z",cx:467.7,cy:226.4},{name:"El Salvador",cn:"萨尔瓦多",d:"M256.1,212.8L255.8,213.5L254.2,213.4L253.2,213.2L252.1,212.6L250.5,212.4L249.7,211.8L249.8,211.4L250.8,210.7L251.3,210.4L251.1,210.1L251.8,209.9L252.6,210.2L253.2,210.7L254.1,211.2L254.2,211.5L255.4,211.2L255.9,211.4L256.3,211.7L256.1,212.8Z",cx:253.2,cy:211.7},{name:"Somaliland",cn:"Somaliland",d:"M635.9,223.7L634.7,225.5L632.7,227.8L630.4,227.8L621.3,224.5L620.3,223.5L619.2,222.2L618.2,220.6L618.8,219.6L619.8,218.2L620.8,218.7L621.3,219.8L622.5,221.0L623.9,221.0L626.5,220.3L629.6,220.0L632.0,219.1L633.4,218.9L634.4,218.4L636.0,218.3L636.0,218.3L635.9,219.5L635.9,222.3L635.9,223.7Z",cx:628.2,cy:221.4},{name:"Somalia",cn:"索马里",d:"M638.1,217.8L639.6,217.6L640.9,216.6L642.0,216.6L642.0,217.4L641.8,219.0L641.8,220.4L641.2,221.4L640.4,224.4L639.1,227.6L637.4,231.1L635.0,235.2L632.6,238.3L629.3,242.1L626.6,244.3L622.4,247.1L619.8,249.2L616.8,252.6L616.1,254.0L615.5,254.7L613.9,252.4L613.8,242.3L616.3,239.1L617.0,238.2L618.8,238.2L621.3,236.2L624.9,236.1L632.7,227.8L634.7,225.5L635.9,223.7L635.9,222.3L635.9,219.5L636.0,218.3L636.0,218.3L636.9,218.2L638.1,217.8Z",cx:630.7,cy:231.1},{name:"Republic of Serbia",cn:"Republic of Serbia",d:"M558.0,123.8L559.7,124.5L559.9,125.6L561.5,126.4L562.4,125.8L563.1,126.2L562.4,126.6L562.9,127.1L562.3,127.8L562.5,128.8L563.9,130.0L562.8,130.8L562.3,131.7L562.6,132.1L562.2,132.4L560.9,132.5L559.9,132.7L559.8,132.4L560.2,132.1L560.5,131.4L560.1,131.5L559.6,130.9L559.1,130.8L558.7,130.4L558.2,130.2L557.8,129.8L557.3,130.0L556.9,130.9L556.3,131.1L556.5,130.8L555.4,130.3L554.5,130.0L554.1,129.6L553.4,129.1L554.0,129.0L554.4,127.7L553.1,126.6L553.8,125.4L552.8,125.4L553.9,124.3L553.0,123.6L552.3,122.5L554.4,121.7L556.2,121.9L557.7,123.0L558.0,123.8Z",cx:558.3,cy:128.3},{name:"Suriname",cn:"苏里南",d:"M341.3,233.4L344.6,234.0L344.9,233.5L347.1,233.3L350.1,234.0L348.7,236.4L348.9,238.3L350.0,239.9L349.5,241.1L349.3,242.4L348.5,243.6L347.0,243.0L345.6,243.3L344.5,243.0L344.2,243.8L344.7,244.4L344.5,245.0L342.9,244.7L341.2,242.3L340.9,240.7L340.0,240.7L338.8,238.7L339.3,237.3L339.1,236.6L340.8,235.9L341.3,233.4Z",cx:344.5,cy:239.3},{name:"Slovakia",cn:"斯洛伐克",d:"M552.4,112.5L552.5,112.7L553.7,112.3L555.1,113.3L556.7,112.7L558.0,113.0L560.0,112.6L562.7,113.7L561.9,114.4L561.3,115.5L560.8,115.8L557.8,114.9L556.9,115.1L556.2,115.8L554.9,116.1L554.6,115.9L553.3,116.4L552.2,116.4L551.9,117.0L549.6,117.3L548.6,117.0L547.2,116.3L546.9,115.4L547.1,115.0L547.5,114.4L548.7,114.4L549.7,114.2L549.8,113.9L550.3,113.8L550.5,113.1L551.1,113.0L551.5,112.5L552.4,112.5Z",cx:553.4,cy:114.5},{name:"Slovenia",cn:"斯洛文尼亚",d:"M538.4,120.8L540.6,121.0L542.0,120.4L544.5,120.3L545.0,119.9L545.5,119.9L546.0,120.8L543.8,121.6L543.5,122.7L542.6,123.0L542.6,123.7L541.5,123.7L540.5,123.2L540.0,123.7L538.1,123.6L538.7,123.4L538.1,122.2L538.4,120.8Z",cx:541.7,cy:121.9},{name:"Sweden",cn:"瑞典",d:"M561.6,67.4L558.9,69.4L559.4,71.1L554.9,73.3L549.6,75.7L547.6,79.6L549.5,81.6L552.2,83.1L549.6,86.2L546.7,86.9L545.7,91.6L544.1,94.2L540.7,93.9L539.2,96.1L536.0,96.2L535.1,93.6L532.7,90.4L530.6,86.5L531.9,84.9L534.2,83.0L535.1,79.7L533.3,78.3L533.1,74.6L534.9,72.0L537.7,72.1L538.7,71.0L537.7,70.0L542.0,66.1L544.7,63.0L546.6,61.1L549.2,61.1L550.0,59.5L555.2,60.0L555.6,58.2L557.3,58.0L561.1,59.4L565.4,61.3L565.5,65.6L566.4,66.6L561.6,67.4ZM547.4,90.6L547.8,90.8L545.6,93.9L545.5,92.9L547.4,90.6ZM553.8,89.0L552.2,89.9L552.3,90.4L552.8,90.4L552.6,90.6L551.9,90.8L552.0,91.1L551.3,91.3L550.9,91.9L550.3,92.0L550.5,91.4L550.2,90.9L550.4,90.6L550.3,90.2L551.8,89.1L552.9,89.1L553.1,88.9L553.8,88.9L553.8,89.0ZM557.9,72.7L558.5,72.7L558.3,73.0L557.8,73.4L557.5,73.4L557.8,73.0L557.8,72.8L557.9,72.7Z",cx:546.8,cy:75.2},{name:"Swaziland",cn:"Swaziland",d:"M589.1,324.3L588.5,325.5L586.9,325.8L585.2,324.3L585.2,323.3L586.0,322.3L586.2,321.5L587.0,321.3L588.4,321.8L588.8,323.0L589.1,324.3Z",cx:587.3,cy:323.4},{name:"Syria",cn:"叙利亚",d:"M607.8,157.3L602.3,160.2L599.2,159.1L599.2,159.1L599.5,158.7L599.5,157.6L600.2,156.0L601.7,155.0L601.2,153.9L600.0,153.8L599.7,151.6L600.4,150.5L601.2,149.9L601.9,149.3L602.1,147.7L603.0,148.3L606.0,147.5L607.5,148.0L609.8,148.0L613.0,147.0L614.5,147.0L617.6,146.6L616.2,148.3L614.7,149.0L615.0,151.0L613.9,154.4L607.8,157.3Z",cx:605.7,cy:152.3},{name:"Chad",cn:"乍得",d:"M540.3,214.3L540.5,213.0L538.8,212.9L538.8,211.1L537.6,210.1L538.8,206.4L542.4,203.8L542.5,200.2L543.6,194.6L544.2,193.4L543.0,192.4L543.0,191.5L541.9,190.8L541.3,186.5L544.1,185.0L555.1,190.3L566.2,195.6L566.4,206.6L564.0,206.4L562.7,208.5L562.0,210.2L562.5,210.9L561.6,211.7L561.9,212.9L561.2,214.0L560.9,215.0L561.9,214.9L562.5,215.9L562.5,217.6L563.5,218.4L563.5,219.0L561.8,219.5L560.3,220.6L558.3,223.7L555.7,225.0L553.0,224.8L552.3,225.0L552.5,226.0L551.1,227.0L549.9,228.1L546.4,229.1L545.7,228.5L545.3,228.5L544.7,229.2L542.4,229.4L542.9,228.6L542.0,226.7L541.6,225.6L540.4,225.1L538.8,223.5L539.4,222.2L540.6,222.4L541.4,222.2L543.0,222.3L541.5,219.7L541.6,217.9L541.4,216.1L540.3,214.3Z",cx:549.5,cy:214.2},{name:"Togo",cn:"Togo",d:"M505.2,232.9L502.9,233.5L502.3,232.6L501.6,230.8L501.4,229.4L502.0,226.9L501.3,225.9L501.0,223.7L501.0,221.7L499.9,220.3L500.1,219.4L502.5,219.5L502.1,220.9L503.0,221.7L504.0,222.7L504.1,224.1L504.6,224.6L504.5,231.0L505.2,232.9Z",cx:502.6,cy:226},{name:"Thailand",cn:"泰国",d:"M785.0,216.1L782.5,214.9L780.1,214.9L780.5,212.7L778.0,212.8L777.8,215.8L776.3,219.9L775.4,222.3L775.6,224.3L777.4,224.4L778.6,227.0L779.1,229.4L780.6,231.0L782.3,231.3L783.7,232.7L782.8,233.9L781.0,234.2L780.8,232.8L778.5,231.5L778.0,232.0L776.9,231.0L776.4,229.6L775.0,228.0L773.6,226.7L773.2,228.3L772.6,226.8L772.9,225.1L773.8,222.4L775.1,219.6L776.6,217.0L775.5,214.4L775.6,213.1L775.3,211.6L773.4,209.4L772.8,208.0L773.7,207.5L774.7,205.1L773.6,203.2L771.8,201.2L770.5,198.8L771.7,198.3L772.9,195.3L774.9,195.1L776.5,193.9L778.1,193.3L779.3,194.1L779.5,195.8L781.3,195.9L780.7,198.9L780.7,201.4L783.6,199.7L784.5,200.2L786.1,200.1L786.7,199.1L788.8,199.3L790.9,201.6L791.1,204.3L793.3,206.7L793.2,209.1L792.3,210.4L789.7,210.0L786.1,210.5L784.3,212.8L785.0,216.1Z",cx:779.5,cy:213.5},{name:"Tajikistan",cn:"Tajikistan",d:"M697.3,138.2L696.2,139.1L693.2,138.6L693.0,140.2L696.0,140.0L699.4,140.9L704.7,140.5L705.4,143.0L706.3,142.8L708.0,143.4L707.9,144.5L708.3,146.1L705.4,146.1L703.5,145.8L701.8,147.1L700.5,147.4L699.6,147.9L698.5,147.0L698.7,144.7L697.9,144.6L698.2,143.7L696.7,143.1L695.5,144.1L695.2,145.2L694.8,145.6L693.1,145.5L692.2,146.8L691.3,146.3L689.3,147.2L688.4,146.8L690.0,144.0L689.4,141.9L687.3,141.3L688.1,140.1L690.4,140.2L691.7,138.6L692.6,136.9L696.3,136.2L695.7,137.5L696.1,138.3L697.3,138.2Z",cx:696.8,cy:142.8},{name:"Turkmenistan",cn:"Turkmenistan",d:"M670.0,151.0L669.8,148.6L667.7,148.5L664.5,146.1L662.3,145.8L659.3,144.4L657.3,144.1L656.1,144.6L654.2,144.5L652.2,146.1L649.8,146.7L649.3,144.7L649.7,141.8L647.5,140.9L648.2,139.0L646.4,138.8L647.0,136.5L649.6,137.1L652.0,136.2L650.0,134.6L649.2,133.0L647.0,133.7L646.7,135.7L645.8,133.9L647.1,133.0L650.2,132.4L652.1,133.2L654.0,135.4L655.5,135.3L658.6,135.2L658.1,133.8L660.5,132.9L662.9,131.2L666.6,132.7L666.9,134.9L668.0,135.5L671.0,135.4L671.9,135.9L673.3,138.7L676.4,140.7L678.3,142.0L681.2,143.3L684.9,144.5L684.8,146.2L683.9,146.1L682.6,145.4L682.2,146.4L679.9,146.9L679.3,149.1L677.7,150.0L675.5,150.4L675.0,151.7L672.9,152.0L670.0,151.0Z",cx:662.8,cy:141.1},{name:"East Timor",cn:"East Timor",d:"M847.1,274.7L847.5,274.0L849.9,273.4L851.8,273.3L852.7,273.0L853.7,273.3L852.7,274.1L849.8,275.3L847.5,276.1L847.4,275.2L847.1,274.7Z",cx:849.7,cy:274.3},{name:"Trinidad and Tobago",cn:"特立尼达",d:"M328.7,220.1L330.3,219.8L330.8,219.8L330.7,221.9L328.4,222.2L327.9,222.0L328.7,221.2L328.7,220.1Z",cx:329.3,cy:220.9},{name:"Tunisia",cn:"突尼斯",d:"M526.3,165.8L525.2,160.8L523.4,159.7L523.4,159.0L521.1,157.4L520.9,155.3L522.6,153.7L523.3,151.4L522.8,148.8L523.4,147.4L526.4,146.3L528.4,146.6L528.3,148.0L530.6,147.0L530.8,147.5L529.4,148.9L529.4,150.1L530.4,150.8L530.0,153.2L528.2,154.6L528.7,156.2L530.2,156.2L530.9,157.5L531.9,158.0L531.8,160.1L530.4,160.9L529.5,161.8L527.6,162.8L527.9,164.0L527.7,165.2L526.3,165.8Z",cx:527.3,cy:155.5},{name:"Turkey",cn:"土耳其",d:"M602.5,135.2L606.5,136.3L609.8,135.8L612.1,136.1L615.4,134.6L618.4,134.5L621.1,135.9L621.5,136.8L621.3,138.2L623.3,138.9L624.4,139.7L622.5,140.5L623.4,143.7L622.8,144.5L624.4,146.7L623.0,147.2L622.1,146.5L618.8,146.2L617.6,146.6L614.5,147.0L613.0,147.0L609.8,148.0L607.5,148.0L606.0,147.5L603.0,148.3L602.1,147.7L601.9,149.3L601.2,149.9L600.4,150.5L599.4,149.2L600.4,148.2L598.8,148.4L596.4,147.8L594.5,149.4L590.3,149.7L588.1,148.2L585.1,148.1L584.4,149.3L582.5,149.6L579.8,148.1L576.8,148.2L575.1,145.4L573.1,143.9L574.5,141.7L572.7,140.4L575.8,137.7L580.1,137.6L581.2,135.5L586.5,135.9L589.9,134.1L593.1,133.3L597.7,133.2L602.5,135.2ZM575.5,137.0L573.2,138.5L572.3,137.2L572.4,136.6L573.0,136.3L573.9,134.5L572.5,133.8L575.4,132.9L577.8,133.3L578.1,134.4L580.5,135.3L580.0,136.0L576.7,136.1L575.5,137.0Z",cx:601.7,cy:143.1},{name:"Taiwan",cn:"中国台湾",d:"M838.3,182.2L836.6,186.7L835.4,189.0L833.9,186.6L833.6,184.6L835.3,181.8L837.5,179.7L838.8,180.6L838.3,182.2Z",cx:836.4,cy:183.7},{name:"United Republic of Tanzania",cn:"United Republic of Tanzania",d:"M594.2,252.6L594.6,252.9L604.7,258.6L604.9,260.2L608.9,263.0L607.6,266.4L607.8,268.0L609.6,269.0L609.6,269.7L608.9,271.4L609.0,272.2L608.9,273.6L609.8,275.3L611.0,278.1L612.0,278.7L609.8,280.3L606.7,281.3L605.1,281.3L604.1,282.1L602.2,282.2L601.4,282.6L598.1,281.8L596.0,282.0L595.2,278.2L594.3,276.9L593.7,276.2L591.0,275.6L589.4,274.8L587.7,274.3L586.5,273.9L585.4,273.2L583.9,269.7L582.3,268.1L581.7,266.5L582.0,265.1L581.5,262.5L582.6,262.4L583.7,261.4L584.7,259.9L585.4,259.3L585.4,258.4L584.8,257.8L584.6,256.7L585.4,256.4L585.6,254.7L584.5,253.2L585.5,252.8L588.5,252.9L594.2,252.6Z",cx:595.4,cy:268.1},{name:"Uganda",cn:"乌干达",d:"M588.5,252.9L585.5,252.8L584.5,253.2L582.8,254.0L582.2,253.7L582.2,251.6L582.8,250.6L583.0,248.3L583.6,247.0L584.6,245.6L585.7,244.9L586.6,243.9L585.5,243.5L585.6,240.3L586.8,239.5L588.6,240.1L590.8,239.5L592.8,239.5L594.5,238.2L595.8,240.1L596.1,241.5L597.3,244.7L596.3,246.7L594.9,248.6L594.1,249.7L594.2,252.6L588.5,252.9Z",cx:588.7,cy:246.5},{name:"Ukraine",cn:"乌克兰",d:"M588.3,105.3L589.3,105.4L590.0,104.8L590.9,104.9L593.8,104.6L595.5,106.2L594.8,106.8L595.1,107.6L597.3,107.8L598.3,109.0L598.2,109.5L601.7,110.5L603.9,110.0L605.6,111.3L607.2,111.3L611.3,112.2L611.3,113.0L610.2,114.5L610.8,116.0L610.4,116.9L607.7,117.2L606.3,117.9L606.2,119.2L604.0,119.4L602.1,120.3L599.5,120.4L597.1,121.5L597.3,123.2L598.6,123.9L601.5,123.7L600.9,124.7L597.9,125.2L594.1,126.8L592.6,126.2L593.2,124.9L590.2,124.1L590.6,123.6L593.3,122.6L592.5,122.0L588.2,121.3L588.0,120.3L585.4,120.6L584.4,122.1L582.2,124.2L581.0,123.7L579.7,124.2L578.4,123.6L579.1,123.3L579.6,122.4L580.4,121.5L580.2,121.0L580.8,120.8L581.0,121.2L582.7,121.3L583.4,121.0L582.9,120.8L583.1,120.3L582.1,119.6L581.7,118.5L580.7,118.0L580.9,117.1L579.6,116.3L578.5,116.2L576.5,115.4L574.6,115.6L573.9,116.1L572.8,116.1L572.1,116.7L570.0,117.0L569.1,117.4L567.8,116.7L566.0,116.7L564.3,116.4L563.1,117.0L562.9,116.2L561.3,115.5L561.9,114.4L562.7,113.7L563.3,113.8L562.6,112.6L565.1,110.3L566.5,109.9L566.7,109.2L565.4,106.7L566.7,106.6L568.2,105.9L570.4,105.8L573.2,106.0L576.3,106.7L578.4,106.7L579.5,107.1L580.5,106.7L581.3,107.3L583.8,107.2L584.9,107.4L585.1,106.0L585.9,105.4L588.3,105.3Z",cx:585.1,cy:115.4},{name:"Uruguay",cn:"乌拉圭",d:"M339.9,333.9L341.7,333.6L344.5,335.8L345.6,335.7L348.4,337.5L350.6,339.0L352.2,340.9L351.0,342.2L351.7,343.8L350.5,345.5L347.4,347.1L345.3,346.5L343.8,346.8L341.3,345.6L339.4,345.7L337.7,344.2L337.9,342.4L338.5,341.8L338.5,339.0L339.2,336.2L339.9,333.9Z",cx:344.1,cy:340.8},{name:"United States of America",cn:"美国",d:"M67.9,197.0L67.5,197.5L66.8,197.1L66.9,196.3L66.5,195.3L66.6,195.0L67.1,194.5L66.9,194.0L67.1,193.7L67.3,193.8L68.3,194.2L68.8,194.5L69.3,194.8L70.0,195.8L69.9,196.0L68.8,196.6L67.9,197.0ZM66.4,192.7L65.5,192.9L65.0,192.3L64.7,192.0L64.7,191.9L65.0,191.6L66.0,191.9L66.7,192.3L66.4,192.7ZM64.6,191.2L64.5,191.5L63.0,191.4L63.2,191.1L64.6,191.2ZM62.1,190.8L61.9,190.9L61.7,190.9L60.8,190.8L60.4,190.2L60.3,190.1L61.0,189.7L61.3,189.9L62.1,190.8ZM57.4,188.9L57.0,189.2L56.1,188.7L56.3,188.5L56.7,188.2L57.3,188.3L57.4,188.9ZM236.6,112.8L237.1,114.3L238.0,114.8L239.9,115.0L242.8,115.4L245.4,116.3L247.7,115.9L251.1,116.6L252.0,116.6L254.5,115.8L257.1,116.8L259.8,117.9L262.1,118.8L264.2,119.7L264.5,120.5L265.2,120.7L265.0,121.0L265.7,121.1L266.3,120.8L266.4,121.5L267.0,121.9L267.7,121.9L268.1,122.2L267.8,122.7L270.7,124.0L271.3,126.6L271.8,129.0L271.0,130.6L269.7,132.1L269.1,133.1L269.1,133.4L269.4,133.8L270.3,134.2L271.0,134.2L274.2,132.8L277.1,132.3L280.7,130.9L280.8,130.7L280.5,129.8L280.1,129.3L281.3,128.8L284.1,128.8L286.6,128.8L287.5,127.7L287.8,127.5L290.8,125.5L292.0,125.0L296.3,125.0L301.4,125.0L301.7,124.3L302.5,124.2L303.7,123.7L304.7,122.5L305.6,120.3L307.7,118.2L308.6,118.9L310.5,118.5L311.7,119.3L311.7,123.0L313.5,124.6L314.0,125.5L311.0,126.9L308.2,127.8L305.2,128.7L303.8,130.3L303.3,130.9L303.3,132.4L304.2,133.9L305.3,133.9L305.0,132.9L305.9,133.5L305.7,134.3L303.8,134.8L302.4,134.7L300.4,135.2L299.2,135.4L297.6,135.5L295.2,136.3L299.3,135.8L300.2,136.3L296.3,137.1L294.5,137.1L294.6,136.8L293.7,137.6L294.5,137.7L293.9,139.7L291.9,141.8L291.7,141.1L291.1,141.0L290.2,140.3L290.8,141.8L291.5,142.3L291.5,143.3L290.6,144.4L289.1,146.6L288.8,146.5L289.7,144.6L288.2,143.6L287.9,141.3L287.4,142.5L288.0,144.2L286.1,143.8L288.1,144.7L288.2,147.3L289.0,147.5L289.3,148.5L289.6,151.2L287.9,153.3L285.0,154.1L283.2,155.8L281.8,155.9L280.4,157.0L280.0,157.9L276.9,159.7L275.4,161.0L274.1,162.7L273.6,164.6L274.1,166.6L275.1,168.9L276.3,170.9L276.3,172.1L277.6,175.3L277.5,177.2L277.4,178.3L276.7,180.0L275.9,180.3L274.5,180.0L274.1,178.8L273.0,178.1L271.6,175.8L270.3,173.6L269.8,172.5L270.4,170.7L269.6,169.2L267.5,166.8L266.4,166.4L263.6,167.7L263.1,167.5L261.7,166.2L260.0,165.6L256.9,165.9L254.4,165.6L252.3,165.8L251.1,166.2L251.6,167.0L251.6,168.1L252.2,168.6L251.6,169.0L250.6,168.6L249.6,169.1L247.6,169.0L245.5,167.6L243.1,167.9L241.0,167.3L239.3,167.5L237.0,168.1L234.4,170.2L231.7,171.4L230.2,172.7L229.5,173.9L229.5,175.9L229.6,177.2L230.2,178.1L229.1,178.2L227.1,177.6L224.9,176.8L224.2,175.4L223.6,173.5L221.9,171.9L221.0,170.3L219.6,168.4L217.6,167.3L215.3,167.3L213.6,169.5L211.3,168.7L209.8,167.9L209.2,166.3L208.2,164.9L206.6,163.7L205.2,162.8L204.1,161.8L199.3,161.8L199.3,162.9L197.1,162.9L191.6,163.0L185.3,161.0L181.1,159.7L181.3,159.1L177.8,159.4L174.6,159.6L174.2,158.2L172.4,156.6L171.1,156.3L170.8,155.5L169.2,155.3L168.2,154.6L165.6,154.3L164.9,153.9L164.6,152.3L161.9,149.6L159.6,145.7L159.7,145.0L158.5,144.1L156.3,141.8L155.9,139.5L154.4,138.0L155.1,135.7L155.0,133.3L154.1,131.2L155.2,128.6L155.5,126.1L155.8,123.5L155.3,119.8L154.5,117.4L153.6,116.2L154.0,115.6L158.0,116.6L159.5,119.2L160.2,118.4L159.7,116.2L158.8,113.9L166.7,113.9L174.9,113.9L177.6,113.9L186.1,113.9L194.3,113.9L202.6,113.9L211.0,113.9L220.4,113.9L229.9,113.9L235.7,113.9L235.7,112.8L236.6,112.8ZM75.0,91.3L72.2,92.4L70.8,91.7L70.4,90.4L72.9,89.4L74.4,89.0L76.2,89.2L77.4,90.0L75.0,91.3ZM40.1,83.6L38.4,84.0L36.5,83.5L34.8,82.7L37.6,82.3L39.8,82.5L40.1,83.6ZM23.0,72.8L24.7,73.4L26.4,73.1L28.7,73.8L31.4,74.2L31.2,74.5L29.1,75.1L27.0,74.5L25.9,74.0L23.5,74.1L22.8,73.9L23.0,72.8ZM69.3,52.4L71.3,53.6L72.5,53.1L77.2,53.3L77.0,53.9L81.3,54.4L84.1,54.1L90.0,55.0L95.3,55.2L97.4,55.6L101.1,55.1L105.4,56.0L108.4,56.4L108.4,66.7L108.3,82.5L111.1,82.6L113.8,83.3L115.7,84.5L118.2,86.4L120.9,84.8L123.7,83.9L125.2,85.4L127.0,86.5L129.6,87.7L131.3,89.7L134.1,92.9L138.9,94.7L138.9,96.4L137.4,97.8L135.9,96.7L133.4,95.8L132.6,93.4L129.1,91.2L127.6,88.5L124.9,88.4L120.5,88.3L117.2,87.5L111.5,84.6L108.8,84.1L104.0,83.1L100.1,83.3L94.7,82.1L91.3,80.9L88.3,81.5L88.8,83.4L87.3,83.6L84.1,84.2L81.6,85.1L78.6,85.7L78.2,84.0L79.4,81.3L82.4,80.5L81.6,79.8L78.1,81.3L76.2,83.2L72.2,85.1L74.2,86.5L71.6,88.5L68.6,89.6L65.8,90.5L65.1,91.7L60.8,93.2L59.9,94.5L56.7,95.6L54.8,95.4L52.2,96.2L49.3,97.2L47.0,98.1L42.3,98.9L41.8,98.4L44.9,97.1L47.6,96.3L50.5,94.7L54.0,94.4L55.4,93.3L59.2,91.6L59.8,91.1L61.9,90.1L62.4,88.0L63.8,86.3L60.6,87.2L59.7,86.7L58.2,87.7L56.4,86.3L55.6,87.3L54.6,85.9L51.8,87.0L50.1,87.0L49.8,85.4L50.3,84.4L48.6,83.4L44.9,83.9L42.6,82.6L40.7,81.9L40.7,80.4L38.6,79.2L39.6,77.6L41.9,76.0L42.9,74.6L45.1,74.4L47.0,74.8L49.3,73.5L51.3,73.7L53.4,72.9L52.9,71.6L51.3,71.1L53.4,70.0L51.7,70.1L48.7,70.7L47.9,71.3L45.7,70.7L41.8,71.0L37.7,70.3L36.5,69.2L33.0,67.6L36.9,66.4L43.1,65.1L45.4,65.1L45.0,66.5L50.9,66.3L48.6,64.6L45.2,63.6L43.2,62.2L40.6,61.0L36.8,60.1L38.3,58.7L43.2,58.6L46.8,57.3L47.4,55.9L50.3,54.6L53.0,54.3L58.2,53.1L60.8,53.3L65.1,51.8L69.3,52.4Z",cx:249.3,cy:143.7},{name:"Uzbekistan",cn:"乌兹别克斯坦",d:"M684.8,146.2L684.9,144.5L681.2,143.3L678.3,142.0L676.4,140.7L673.3,138.7L671.9,135.9L671.0,135.4L668.0,135.5L666.9,134.9L666.6,132.7L662.9,131.2L660.5,132.9L658.1,133.8L658.6,135.2L655.5,135.3L655.4,125.0L662.5,123.4L663.0,123.6L667.3,125.6L669.6,126.7L672.3,129.2L675.5,128.7L680.3,128.5L683.6,130.6L683.4,133.3L684.8,133.4L685.3,135.6L688.8,135.7L689.6,137.0L690.6,137.0L691.9,135.0L695.5,133.1L697.1,132.6L697.9,132.9L695.6,134.7L697.7,135.7L699.6,135.0L702.9,136.5L699.4,138.5L697.3,138.2L696.1,138.3L695.7,137.5L696.3,136.2L692.6,136.9L691.7,138.6L690.4,140.2L688.1,140.1L687.3,141.3L689.4,141.9L690.0,144.0L688.4,146.8L686.3,146.2L684.8,146.2Z",cx:681.9,cy:135.9},{name:"Venezuela",cn:"委内瑞拉",d:"M301.9,217.3L301.8,217.9L300.1,218.3L301.1,219.5L301.0,221.0L299.8,222.6L300.8,224.8L302.0,224.6L302.7,222.6L301.8,221.6L301.7,219.5L305.1,218.4L304.7,217.1L305.7,216.2L306.7,218.2L308.7,218.2L310.5,219.8L310.6,220.7L313.1,220.7L316.0,220.4L317.6,221.7L319.7,222.0L321.3,221.1L321.3,220.4L324.8,220.3L328.1,220.2L325.7,221.1L326.7,222.4L328.9,222.6L331.0,223.9L331.5,226.2L332.9,226.1L334.0,226.8L331.8,228.4L331.6,229.4L332.5,230.4L331.8,231.0L330.1,231.4L330.2,232.7L329.4,233.4L331.3,235.6L331.7,236.3L330.6,237.4L327.5,238.4L325.5,238.9L324.7,239.5L322.5,238.8L320.5,238.5L320.0,238.7L321.2,239.5L321.1,241.3L321.5,243.1L323.8,243.3L324.0,243.9L322.0,244.7L321.7,245.9L320.5,246.3L318.5,247.0L317.9,247.8L315.8,248.0L314.2,246.5L313.4,243.7L312.6,242.8L311.6,242.2L313.0,240.8L313.0,240.2L312.2,239.3L311.6,237.5L311.8,235.5L312.4,234.6L312.9,233.1L312.0,232.6L310.4,232.9L308.4,232.8L307.3,233.1L305.3,230.7L303.7,230.3L300.1,230.6L299.4,229.6L298.8,229.4L298.7,228.8L299.0,227.8L298.8,226.7L298.2,226.0L297.8,224.8L296.4,224.6L297.1,223.0L297.5,221.0L298.3,219.9L299.4,219.1L300.1,217.8L301.9,217.3Z",cx:314,cy:229.8},{name:"Vietnam",cn:"越南",d:"M800.1,190.1L796.4,192.5L794.1,195.1L793.5,197.1L795.6,200.0L798.2,203.6L800.7,205.3L802.4,207.6L803.7,212.7L803.3,217.6L801.0,219.4L797.8,221.2L795.6,223.5L792.1,226.1L791.1,224.3L791.9,222.4L789.8,220.9L792.2,219.8L795.1,219.6L793.9,217.9L798.6,215.7L798.9,212.4L798.3,210.5L798.8,207.8L798.1,205.8L796.0,203.9L794.2,201.4L791.9,198.1L788.6,196.5L789.4,195.5L791.2,194.8L790.1,192.3L786.7,192.3L785.4,189.8L783.8,187.6L785.3,186.9L787.5,186.9L790.2,186.6L792.6,185.1L793.9,186.2L796.5,186.7L796.0,188.3L797.3,189.4L800.1,190.1Z",cx:794.5,cy:202.9},{name:"Vanuatu",cn:"Vanuatu",d:"M966.2,295.7L965.3,296.1L964.4,294.9L964.5,294.1L966.2,295.7ZM964.2,291.5L964.6,293.7L963.9,293.4L963.3,293.5L962.9,292.8L962.9,290.6L964.2,291.5Z",cx:963.7,cy:292.4},{name:"West Bank",cn:"West Bank",d:"M598.7,160.0L598.7,161.7L598.3,162.5L597.0,162.9L597.1,162.2L597.8,161.8L597.2,161.5L597.7,159.6L598.7,160.0Z",cx:597.9,cy:161.4},{name:"Yemen",cn:"也门",d:"M647.5,203.7L645.5,204.5L645.0,205.7L644.9,206.7L642.1,207.8L637.7,209.1L635.2,211.1L634.0,211.3L633.2,211.1L631.5,212.2L629.8,212.8L627.4,212.9L626.7,213.1L626.1,213.8L625.4,214.0L625.0,214.7L623.6,214.7L622.7,215.0L620.8,214.9L620.1,213.3L620.1,211.8L619.7,210.9L619.1,208.9L618.3,207.7L618.9,207.6L618.6,206.3L619.0,205.8L618.8,204.6L620.1,203.7L619.8,202.5L620.5,201.2L621.6,201.9L622.4,201.6L625.6,201.6L626.1,201.9L628.8,202.1L629.9,202.0L630.6,202.9L631.9,202.5L633.8,199.5L636.4,198.3L644.4,197.2L646.6,201.8L647.5,203.7Z",cx:629.2,cy:207.1},{name:"South Africa",cn:"南非",d:"M587.6,331.3L587.0,331.7L585.8,333.1L585.1,334.5L583.5,336.5L580.3,339.4L578.4,341.0L576.3,342.3L573.4,343.4L572.0,343.5L571.6,344.3L569.9,343.9L568.5,344.4L565.5,343.9L563.9,344.2L562.7,344.1L559.8,345.2L557.5,345.6L555.8,346.7L554.5,346.7L553.3,345.7L552.4,345.7L551.2,344.4L551.0,344.8L550.7,344.1L550.7,342.4L549.8,340.6L550.7,340.1L550.6,337.9L548.8,335.3L547.4,333.0L547.4,333.0L545.4,329.4L546.7,328.0L547.8,328.8L548.3,330.0L549.5,330.2L551.3,330.7L552.8,330.5L555.3,329.1L555.3,318.8L556.0,319.2L557.7,321.9L557.4,323.5L558.0,324.5L560.0,324.2L561.4,323.0L562.7,322.2L563.4,320.8L564.8,320.2L565.9,320.5L567.3,321.3L569.5,321.4L571.3,320.8L571.6,319.9L572.1,318.6L573.6,318.4L574.4,317.3L575.3,315.5L577.8,313.4L581.8,311.4L582.9,311.4L584.2,311.9L585.2,311.5L586.6,311.8L588.0,315.7L588.7,317.7L588.2,320.8L588.4,321.8L587.0,321.3L586.2,321.5L586.0,322.3L585.2,323.3L585.2,324.3L586.9,325.8L588.5,325.5L589.1,324.3L591.2,324.3L590.5,326.3L590.2,328.6L589.5,329.9L587.6,331.3ZM580.5,330.4L579.3,329.6L578.0,330.1L576.5,331.2L575.0,333.0L577.1,335.1L578.1,334.8L578.6,334.0L580.1,333.5L580.6,332.6L581.5,331.3L580.5,330.4Z",cx:569.2,cy:329.5},{name:"Zambia",cn:"赞比亚",d:"M591.0,275.6L592.3,276.9L593.0,279.2L592.5,280.0L592.0,282.2L592.5,284.5L591.6,285.5L590.8,288.1L592.3,288.8L583.8,291.1L584.1,293.1L582.0,293.5L580.4,294.6L580.1,295.5L579.1,295.7L576.7,298.0L575.1,299.8L574.2,299.9L573.3,299.6L570.2,299.3L569.7,299.1L569.7,298.8L568.6,298.2L566.8,298.0L564.5,298.7L562.7,296.9L560.8,294.7L560.9,285.8L566.7,285.9L566.5,284.9L566.9,283.9L566.4,282.6L566.7,281.2L566.4,280.4L567.4,280.4L567.5,281.3L568.8,281.2L570.6,281.5L571.5,282.7L573.8,283.1L575.5,282.2L576.1,283.7L578.2,284.1L579.2,285.3L580.4,286.8L582.5,286.8L582.3,283.8L581.5,284.3L579.6,283.3L578.8,282.8L579.2,280.0L579.6,276.7L579.0,275.5L579.8,273.7L580.6,273.4L584.3,272.9L585.4,273.2L586.5,273.9L587.7,274.3L589.4,274.8L591.0,275.6Z",cx:577.8,cy:285.7},{name:"Zimbabwe",cn:"津巴布韦",d:"M586.6,311.8L585.2,311.5L584.2,311.9L582.9,311.4L581.8,311.4L580.0,310.1L577.8,309.7L577.0,307.9L577.0,306.9L575.8,306.6L572.7,303.6L571.8,302.0L571.2,301.5L570.2,299.3L573.3,299.6L574.2,299.9L575.1,299.8L576.7,298.0L579.1,295.7L580.1,295.5L580.4,294.6L582.0,293.5L584.1,293.1L584.3,294.1L586.6,294.1L587.9,294.6L588.5,295.3L589.8,295.5L591.2,296.4L591.2,299.9L590.7,301.9L590.6,303.9L591.0,304.8L590.7,306.4L590.3,306.7L589.6,308.7L586.6,311.8Z",cx:582.4,cy:302.4}],rd=[{cn:"中国",kws:["上海","北京","武汉","天津","广州","沈阳","深圳","南京","郑州","鞍山","包头","东莞","济南","中山","大连","重庆","西安","青岛","苏州","无锡","杭州","宁波","厦门","佛山","唐山","太原","兰州","成都","哈尔滨","长春","香港","台湾","台北","高雄","澳门","中国"]},{cn:"美国",kws:["纽约","曼哈顿","芝加哥","克利夫兰","底特律","匹兹堡","硅谷","洛杉矶","旧金山","西雅图","波士顿","费城","亚特兰大","休斯顿","新奥尔良","新泽西","美国"]},{cn:"德国",kws:["柏林","德累斯顿","法兰克福","莱比锡","慕尼黑","汉堡","科隆","鲁尔","埃森","多特蒙德","斯图加特","德国"]},{cn:"法国",kws:["巴黎","里昂","马赛","法国"]},{cn:"英国",kws:["伦敦","曼彻斯特","利物浦","伯明翰","谢菲尔德","利兹","格拉斯哥","爱丁堡","英国","英格兰"]},{cn:"意大利",kws:["米兰","都灵","罗马","意大利"]},{cn:"苏联 / 俄罗斯",kws:["苏联","莫斯科","圣彼得堡","俄罗斯","西伯利亚"]},{cn:"日本",kws:["东京","大阪","京都","名古屋","横滨","日本"]},{cn:"荷兰",kws:["鹿特丹","阿姆斯特丹","荷兰"]},{cn:"西班牙",kws:["马德里","巴塞罗那","毕尔巴鄂","西班牙"]},{cn:"墨西哥",kws:["墨西哥"]},{cn:"韩国",kws:["首尔","釜山","韩国"]},{cn:"朝鲜",kws:["平壤","朝鲜"]},{cn:"印度",kws:["德里","孟买","加尔各答","班加罗尔","印度"]},{cn:"斯洛伐克",kws:["斯洛伐克","布拉迪斯拉发"]},{cn:"捷克",kws:["布拉格","捷克","斯柯达","波希米亚"]},{cn:"波兰",kws:["华沙","罗兹","克拉科夫","波兰","西里西亚"]},{cn:"巴西",kws:["圣保罗","里约","巴西"]},{cn:"加拿大",kws:["多伦多","蒙特利尔","温哥华","加拿大"]},{cn:"澳大利亚",kws:["悉尼","墨尔本","澳大利亚"]},{cn:"土耳其",kws:["伊斯坦布尔","土耳其"]},{cn:"埃及",kws:["开罗","埃及"]},{cn:"南非",kws:["约翰内斯堡","开普敦","南非"]},{cn:"瑞典",kws:["哥德堡","马尔默","斯德哥尔摩","瑞典"]},{cn:"比利时",kws:["布鲁塞尔","比利时"]},{cn:"奥地利",kws:["维也纳","奥地利"]},{cn:"瑞士",kws:["日内瓦","苏黎世","瑞士"]},{cn:"越南",kws:["河内","胡志明","越南"]},{cn:"泰国",kws:["曼谷","泰国"]},{cn:"新加坡",kws:["新加坡"]},{cn:"印尼",kws:["雅加达","印尼"]},{cn:"马来西亚",kws:["吉隆坡","马来西亚"]}],sd={中国:"plan-china",美国:"plan-usa",德国:"plan-germany",法国:"plan-france",英国:"plan-uk",意大利:"plan-italy","苏联 / 俄罗斯":"plan-russia",日本:"plan-japan",荷兰:"plan-netherlands",西班牙:"plan-spain",墨西哥:"plan-mexico",韩国:"plan-korea",印度:"plan-india",斯洛伐克:"plan-slovakia",朝鲜:"plan-nk"};function ad(i,t){if(i<=0)return"#232329";const e=Math.min(1,i/Math.max(1,t)),n=[[42,42,49],[122,42,30],[212,58,42]],r=e<.55?0:1,s=e<.55?e/.55:(e-.55)/.45,a=n[r],o=n[r+1],c=a.map((l,L)=>Math.round(l+(o[L]-l)*s));return`rgb(${c[0]},${c[1]},${c[2]})`}function od(i,t,e){const n=document.getElementById("world"),r=document.getElementById("world-map"),s=document.getElementById("world-tip");if(!n||!r)return;const a=rd.map(A=>{const z=[],X=new Set;return i.forEach(U=>{const Y=`${U.title||""} ${U.content||""} ${U.note||""} ${U.excerpt||""}`;!X.has(U.id)&&A.kws.some(I=>Y.includes(I))&&(X.add(U.id),z.push(U))}),{...A,items:z}}),o=new Map(a.map(A=>[A.cn,A])),c=new Map(i.map(A=>[A.id,A])),l=Math.max(...a.map(A=>A.items.length),1),L=a.filter(A=>A.items.length>0),h=id.map(A=>{const z=o.get(A.cn),X=z?z.items.length:0;return`<path class="wc" data-name="${A.cn}" d="${A.d}" fill="${ad(X,l)}"
      stroke="#3a3a40" stroke-width="0.6" data-cx="${A.cx}" data-cy="${A.cy}"/>`}).join("");r.innerHTML=`
    <svg id="world-svg" viewBox="0 0 1000 520" xmlns="http://www.w3.org/2000/svg" aria-label="世界地图">
      <rect x="0" y="0" width="1000" height="520" fill="#0a0a0d"/>
      <g id="wzoom">
      <g stroke="#18181c" stroke-width="0.5">
        ${[0,1,2,3,4,5,6].map(A=>`<line x1="0" y1="${A*86.7}" x2="1000" y2="${A*86.7}"/>`).join("")}
        ${[0,1,2,3,4,5,6,7,8,9,10].map(A=>`<line x1="${A*100}" y1="0" x2="${A*100}" y2="520"/>`).join("")}
      </g>
      ${h}
      </g>
    </svg>
    <div class="world-legend">
      <span>相关作品密度</span>
      <i style="background:#232329"></i><i style="background:#5c3327"></i><i style="background:#96402c"></i><i style="background:#d43a2a"></i>
      <b>${L.length} 个国家 / 地区 · ${L.reduce((A,z)=>A+z.items.length,0)} 条档案</b>
    </div>`;const u=document.getElementById("world-plan");let d=null;function m(A){const z=o.get(A),X=z?z.items.length:0,U=sd[A],Y=z?z.items.filter(et=>et.img).slice(0,3):[],I=z?z.items.slice(0,8):[];return`
      <div class="wp-head2"><b>${A}</b><span>行政规划 · ${X} 条相关档案</span></div>
      ${U?`<img class="wp-img" src="${xe}images/plans/${U}.png" alt="${A}行政规划图" />`:""}
      <div class="wp-works">
        ${Y.length?`<div class="wpw-reps">${Y.map(et=>`<img src="${et.img}" data-wid="${et.id}" alt="" title="《${et.title}》" />`).join("")}</div>`:""}
        <div class="wpw-list">${I.map(et=>`<p data-wid="${et.id}">《${et.title}》</p>`).join("")}</div>
      </div>
      <p class="wp-hint">${U?"悬停规划图查看相关作品 · ":""}点击作品查看介绍 · 点击版图固定 · 点击空白退出</p>`}function _(A,z){z&&(d=A),u.innerHTML=m(A),u.classList.add("show"),u.classList.toggle("pin",!!d),x(),u.querySelectorAll("[data-wid]").forEach(X=>{X.addEventListener("click",U=>{U.stopPropagation();const Y=c.get(+X.dataset.wid);Y&&e&&e.open(Y)})})}function f(){if(d){_(d,!0);return}u.classList.remove("show"),u.classList.remove("pin"),u.classList.remove("works-on")}let p=null;function b(){clearTimeout(p),p=setTimeout(()=>{u.matches(":hover")||f()},280)}u.addEventListener("pointerenter",()=>clearTimeout(p)),u.addEventListener("pointerleave",()=>{d||f()});function x(){const A=u.querySelector(".wp-img");if(!A){u.classList.add("works-on");return}u.classList.remove("works-on"),A.addEventListener("mouseenter",()=>u.classList.add("works-on"))}let S=null;r.querySelectorAll(".wc").forEach(A=>{const z=A.dataset.name,X=o.get(z);!X||X.items.length===0||(A.classList.add("has"),A.addEventListener("mouseenter",()=>{S=z,A.classList.add("hot"),_(z,!1),s.innerHTML=`
        <div class="wt-head"><b>${z}</b><span>${X.items.length} 条相关档案 · 点击查看规划图</span></div>
        <div class="wt-titles">${X.items.slice(0,3).map(U=>`<p>《${U.title}》</p>`).join("")}</div>`,s.classList.add("show")}),A.addEventListener("mouseleave",()=>{S=null,A.classList.remove("hot"),s.classList.remove("show"),b()}),A.addEventListener("click",U=>{document.getElementById("panel").classList.contains("open")||(U.stopPropagation(),d=d===z?null:z,d?_(z,!0):f())}))}),n.addEventListener("pointermove",A=>{S&&(s.style.left=Math.min(A.clientX+20,window.innerWidth-340)+"px",s.style.top=Math.min(Math.max(A.clientY-40,76),window.innerHeight-220)+"px")}),n.addEventListener("click",A=>{document.getElementById("panel").classList.contains("open")||A.target.closest(".wc")||A.target.closest("#world-plan")||d&&(d=null,f(),A.stopPropagation())});const D=r.querySelector("#world-svg"),R=r.querySelector("#wzoom"),T={s:1,tx:0,ty:0},P=1,K=9;let g=null;function M(){R.setAttribute("transform",`translate(${T.tx} ${T.ty}) scale(${T.s})`)}function k(A){const z=D.getBoundingClientRect();return{x:(A.clientX-z.left)/z.width*1e3,y:(A.clientY-z.top)/z.height*520}}D.addEventListener("wheel",A=>{A.preventDefault(),A.stopPropagation();const z=A.deltaY<0?1.18:1/1.18,X=Math.min(K,Math.max(P,T.s*z));if(X===T.s)return;const U=k(A);T.tx=U.x-(U.x-T.tx)*(X/T.s),T.ty=U.y-(U.y-T.ty)*(X/T.s),T.s=X,M()},{passive:!1}),D.addEventListener("pointerdown",A=>{A.button===1&&(A.preventDefault(),g={x:A.clientX,y:A.clientY},D.setPointerCapture(A.pointerId))}),D.addEventListener("pointermove",A=>{if(!g||!(A.buttons&4))return;const z=D.getBoundingClientRect();T.tx+=(A.clientX-g.x)/z.width*1e3,T.ty+=(A.clientY-g.y)/z.height*520,g={x:A.clientX,y:A.clientY},M()}),D.addEventListener("pointerup",A=>{A.button===1&&(g=null)}),D.addEventListener("auxclick",A=>{A.button===1&&A.preventDefault()})}const D1=["hero","overview","bones","parts","blueprint","traces","world"];let ze=null;function nr(i){D1.forEach(t=>{document.getElementById(t).classList.toggle("active",t===i)}),document.querySelectorAll("#topnav [data-view]").forEach(t=>{t.classList.toggle("active",t.dataset.view===i)}),ze&&ze.close()}function cd(){const i={hero:"overview",overview:"bones"},t=["bones","parts","blueprint","traces","world"],e="button, a, input, .mode-btn, #panel, #panel-mask, #works-pop, #factory-title, #bones-list, #bones-tip, #bones-gfa, .bone-layer, .bone-label, .bp-marker, .tcard, .tobj, .tobj-3d, .wc.has, #world-plan";D1.forEach(n=>{document.getElementById(n).addEventListener("click",s=>{if(s.target.closest(e))return;const a=document.getElementById("panel");if(a.classList.contains("open")){a.classList.remove("open"),document.getElementById("panel-mask").classList.remove("show");return}if(ze&&ze.isOpen()){ze.close();return}i[n]?nr(i[n]):t.includes(n)&&nr("overview")})}),window.addEventListener("keydown",n=>{if(n.key==="Escape"){if(document.getElementById("panel").classList.contains("open")){document.getElementById("panel-close").click();return}if(ze&&ze.isOpen()){ze.close();return}nr("overview")}})}async function ld(){B1();const t=await(await fetch(xe+"data/items.json")).json();t.forEach(n=>{n.img&&n.img.startsWith("/")&&(n.img=xe+n.img.slice(1))}),window.__items=t;const e=w3();ze=T3(e),e.onClose=()=>e.close();try{await Promise.race([Promise.all([document.fonts.load("900 24px Outfit"),document.fonts.load("600 14px Outfit"),document.fonts.ready]),new Promise(n=>setTimeout(n,3e3))])}catch{}E3(t,e),B3(t,ze),j3(t,ze),ed(t,ze),nd(t,ze),od(t,ze,e),cd(),document.querySelectorAll("#topnav [data-view]").forEach(n=>{n.addEventListener("click",()=>nr(n.dataset.view))}),nr("hero")}ld().catch(i=>{console.error("BOOT FAILED",i),document.body.innerHTML=`<pre style="color:#c2543a;padding:40px">加载失败：${i.message}</pre>`});
