(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();function Rx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ph={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function KM(){if(mv)return al;mv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return al.Fragment=t,al.jsx=i,al.jsxs=i,al}var gv;function jM(){return gv||(gv=1,ph.exports=KM()),ph.exports}var V=jM(),mh={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function QM(){if(_v)return ot;_v=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),E=Symbol.iterator;function R(B){return B===null||typeof B!="object"?null:(B=E&&B[E]||B["@@iterator"],typeof B=="function"?B:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function N(B,ge,Re){this.props=B,this.context=ge,this.refs=S,this.updater=Re||w}N.prototype.isReactComponent={},N.prototype.setState=function(B,ge){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ge,"setState")},N.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function z(){}z.prototype=N.prototype;function C(B,ge,Re){this.props=B,this.context=ge,this.refs=S,this.updater=Re||w}var D=C.prototype=new z;D.constructor=C,y(D,N.prototype),D.isPureReactComponent=!0;var U=Array.isArray;function P(){}var b={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function F(B,ge,Re){var j=Re.ref;return{$$typeof:o,type:B,key:ge,ref:j!==void 0?j:null,props:Re}}function k(B,ge){return F(B.type,ge,B.props)}function ee(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function fe(B){var ge={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Re){return ge[Re]})}var J=/\/+/g;function ne(B,ge){return typeof B=="object"&&B!==null&&B.key!=null?fe(""+B.key):ge.toString(36)}function q(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(P,P):(B.status="pending",B.then(function(ge){B.status==="pending"&&(B.status="fulfilled",B.value=ge)},function(ge){B.status==="pending"&&(B.status="rejected",B.reason=ge)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function Y(B,ge,Re,j,pe){var Te=typeof B;(Te==="undefined"||Te==="boolean")&&(B=null);var Be=!1;if(B===null)Be=!0;else switch(Te){case"bigint":case"string":case"number":Be=!0;break;case"object":switch(B.$$typeof){case o:case t:Be=!0;break;case x:return Be=B._init,Y(Be(B._payload),ge,Re,j,pe)}}if(Be)return pe=pe(B),Be=j===""?"."+ne(B,0):j,U(pe)?(Re="",Be!=null&&(Re=Be.replace(J,"$&/")+"/"),Y(pe,ge,Re,"",function(Gt){return Gt})):pe!=null&&(ee(pe)&&(pe=k(pe,Re+(pe.key==null||B&&B.key===pe.key?"":(""+pe.key).replace(J,"$&/")+"/")+Be)),ge.push(pe)),1;Be=0;var ve=j===""?".":j+":";if(U(B))for(var we=0;we<B.length;we++)j=B[we],Te=ve+ne(j,we),Be+=Y(j,ge,Re,Te,pe);else if(we=R(B),typeof we=="function")for(B=we.call(B),we=0;!(j=B.next()).done;)j=j.value,Te=ve+ne(j,we++),Be+=Y(j,ge,Re,Te,pe);else if(Te==="object"){if(typeof B.then=="function")return Y(q(B),ge,Re,j,pe);throw ge=String(B),Error("Objects are not valid as a React child (found: "+(ge==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ge)+"). If you meant to render a collection of children, use an array instead.")}return Be}function he(B,ge,Re){if(B==null)return B;var j=[],pe=0;return Y(B,j,"","",function(Te){return ge.call(Re,Te,pe++)}),j}function K(B){if(B._status===-1){var ge=B._result,Re=ge();Re.then(function(j){(B._status===0||B._status===-1)&&(B._status=1,B._result=j,Re.status===void 0&&(Re.status="fulfilled",Re.value=j))},function(j){(B._status===0||B._status===-1)&&(B._status=2,B._result=j,Re.status===void 0&&(Re.status="rejected",Re.reason=j))}),B._status===-1&&(B._status=0,B._result=Re)}if(B._status===1)return B._result.default;throw B._result}var ue=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ge=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(ge))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function xe(B){var ge=b.T,Re={};Re.types=ge!==null?ge.types:null,b.T=Re;try{var j=B(),pe=b.S;pe!==null&&pe(Re,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(P,ue)}catch(Te){ue(Te)}finally{ge!==null&&Re.types!==null&&(ge.types=Re.types),b.T=ge}}function Ce(B){var ge=b.T;if(ge!==null){var Re=ge.types;Re===null?ge.types=[B]:Re.indexOf(B)===-1&&Re.push(B)}else xe(Ce.bind(null,B))}var Xe={map:he,forEach:function(B,ge,Re){he(B,function(){ge.apply(this,arguments)},Re)},count:function(B){var ge=0;return he(B,function(){ge++}),ge},toArray:function(B){return he(B,function(ge){return ge})||[]},only:function(B){if(!ee(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ot.Activity=v,ot.Children=Xe,ot.Component=N,ot.Fragment=i,ot.Profiler=u,ot.PureComponent=C,ot.StrictMode=s,ot.Suspense=m,ot.ViewTransition=_,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,ot.__COMPILER_RUNTIME={__proto__:null,c:function(B){return b.H.useMemoCache(B)}},ot.addTransitionType=Ce,ot.cache=function(B){return function(){return B.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(B,ge,Re){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var j=y({},B.props),pe=B.key;if(ge!=null)for(Te in ge.key!==void 0&&(pe=""+ge.key),ge)!L.call(ge,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&ge.ref===void 0||(j[Te]=ge[Te]);var Te=arguments.length-2;if(Te===1)j.children=Re;else if(1<Te){for(var Be=Array(Te),ve=0;ve<Te;ve++)Be[ve]=arguments[ve+2];j.children=Be}return F(B.type,pe,j)},ot.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:f,_context:B},B},ot.createElement=function(B,ge,Re){var j,pe={},Te=null;if(ge!=null)for(j in ge.key!==void 0&&(Te=""+ge.key),ge)L.call(ge,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(pe[j]=ge[j]);var Be=arguments.length-2;if(Be===1)pe.children=Re;else if(1<Be){for(var ve=Array(Be),we=0;we<Be;we++)ve[we]=arguments[we+2];pe.children=ve}if(B&&B.defaultProps)for(j in Be=B.defaultProps,Be)pe[j]===void 0&&(pe[j]=Be[j]);return F(B,Te,pe)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(B){return{$$typeof:h,render:B}},ot.isValidElement=ee,ot.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:K}},ot.memo=function(B,ge){return{$$typeof:p,type:B,compare:ge===void 0?null:ge}},ot.startTransition=xe,ot.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},ot.use=function(B){return b.H.use(B)},ot.useActionState=function(B,ge,Re){return b.H.useActionState(B,ge,Re)},ot.useCallback=function(B,ge){return b.H.useCallback(B,ge)},ot.useContext=function(B){return b.H.useContext(B)},ot.useDebugValue=function(){},ot.useDeferredValue=function(B,ge){return b.H.useDeferredValue(B,ge)},ot.useEffect=function(B,ge){return b.H.useEffect(B,ge)},ot.useEffectEvent=function(B){return b.H.useEffectEvent(B)},ot.useId=function(){return b.H.useId()},ot.useImperativeHandle=function(B,ge,Re){return b.H.useImperativeHandle(B,ge,Re)},ot.useInsertionEffect=function(B,ge){return b.H.useInsertionEffect(B,ge)},ot.useLayoutEffect=function(B,ge){return b.H.useLayoutEffect(B,ge)},ot.useMemo=function(B,ge){return b.H.useMemo(B,ge)},ot.useOptimistic=function(B,ge){return b.H.useOptimistic(B,ge)},ot.useReducer=function(B,ge,Re){return b.H.useReducer(B,ge,Re)},ot.useRef=function(B){return b.H.useRef(B)},ot.useState=function(B){return b.H.useState(B)},ot.useSyncExternalStore=function(B,ge,Re){return b.H.useSyncExternalStore(B,ge,Re)},ot.useTransition=function(){return b.H.useTransition()},ot.version="19.3.0",ot}var vv;function kp(){return vv||(vv=1,mh.exports=QM()),mh.exports}var ei=kp();const JM=Rx(ei);var gh={exports:{}},rl={},_h={exports:{}},vh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function $M(){return xv||(xv=1,(function(o){function t(q,Y){var he=q.length;q.push(Y);e:for(;0<he;){var K=he-1>>>1,ue=q[K];if(0<u(ue,Y))q[K]=Y,q[he]=ue,he=K;else break e}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var Y=q[0],he=q.pop();if(he!==Y){q[0]=he;e:for(var K=0,ue=q.length,xe=ue>>>1;K<xe;){var Ce=2*(K+1)-1,Xe=q[Ce],B=Ce+1,ge=q[B];if(0>u(Xe,he))B<ue&&0>u(ge,Xe)?(q[K]=ge,q[B]=he,K=B):(q[K]=Xe,q[Ce]=he,K=Ce);else if(B<ue&&0>u(ge,he))q[K]=ge,q[B]=he,K=B;else break e}}return Y}function u(q,Y){var he=q.sortIndex-Y.sortIndex;return he!==0?he:q.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,v=null,_=3,E=!1,R=!1,w=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function C(q){for(var Y=i(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=q)s(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function D(q){if(w=!1,C(q),!R)if(i(m)!==null)R=!0,U||(U=!0,ee());else{var Y=i(p);Y!==null&&ne(D,Y.startTime-q)}}var U=!1,P=-1,b=5,L=-1;function F(){return y?!0:!(o.unstable_now()-L<b)}function k(){if(y=!1,U){var q=o.unstable_now();L=q;var Y=!0;try{e:{R=!1,w&&(w=!1,N(P),P=-1),E=!0;var he=_;try{t:{for(C(q),v=i(m);v!==null&&!(v.expirationTime>q&&F());){var K=v.callback;if(typeof K=="function"){v.callback=null,_=v.priorityLevel;var ue=K(v.expirationTime<=q);if(q=o.unstable_now(),typeof ue=="function"){v.callback=ue,C(q),Y=!0;break t}v===i(m)&&s(m),C(q)}else s(m);v=i(m)}if(v!==null)Y=!0;else{var xe=i(p);xe!==null&&ne(D,xe.startTime-q),Y=!1}}break e}finally{v=null,_=he,E=!1}Y=void 0}}finally{Y?ee():U=!1}}}var ee;if(typeof z=="function")ee=function(){z(k)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,J=fe.port2;fe.port1.onmessage=k,ee=function(){J.postMessage(null)}}else ee=function(){S(k,0)};function ne(q,Y){P=S(function(){q(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(q){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var he=_;_=Y;try{return q()}finally{_=he}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(q,Y){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var he=_;_=q;try{return Y()}finally{_=he}},o.unstable_scheduleCallback=function(q,Y,he){var K=o.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?K+he:K):he=K,q){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=he+ue,q={id:x++,callback:Y,priorityLevel:q,startTime:he,expirationTime:ue,sortIndex:-1},he>K?(q.sortIndex=he,t(p,q),i(m)===null&&q===i(p)&&(w?(N(P),P=-1):w=!0,ne(D,he-K))):(q.sortIndex=ue,t(m,q),R||E||(R=!0,U||(U=!0,ee()))),q},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(q){var Y=_;return function(){var he=_;_=Y;try{return q.apply(this,arguments)}finally{_=he}}}})(vh)),vh}var Sv;function eE(){return Sv||(Sv=1,_h.exports=$M()),_h.exports}var xh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function tE(){if(yv)return Dn;yv=1;var o=kp();function t(x){var v="https://react.dev/errors/"+x;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+x+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(x,v,_){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:E==null?null:E===d?d:""+E,children:x,containerInfo:v,implementation:_}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(x,v){if(x==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(x){return{$$typeof:f,_reason:x}},Dn.createPortal=function(x,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return h(x,v,null,_)},Dn.flushSync=function(x){var v=m.T,_=s.p;try{if(m.T=null,s.p=2,x)return x()}finally{m.T=v,s.p=_,s.d.f()}},Dn.preconnect=function(x,v){typeof x=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(x,v))},Dn.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Dn.preinit=function(x,v){if(typeof x=="string"&&v&&typeof v.as=="string"){var _=v.as,E=p(_,v.crossOrigin),R=typeof v.integrity=="string"?v.integrity:void 0,w=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?s.d.S(x,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:E,integrity:R,fetchPriority:w}):_==="script"&&s.d.X(x,{crossOrigin:E,integrity:R,fetchPriority:w,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Dn.preinitModule=function(x,v){if(typeof x=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=p(v.as,v.crossOrigin);s.d.M(x,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(x)},Dn.preload=function(x,v){if(typeof x=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,E=p(_,v.crossOrigin);s.d.L(x,_,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Dn.preloadModule=function(x,v){if(typeof x=="string")if(v){var _=p(v.as,v.crossOrigin);s.d.m(x,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(x)},Dn.requestFormReset=function(x){s.d.r(x)},Dn.unstable_batchedUpdates=function(x,v){return x(v)},Dn.useFormState=function(x,v,_){return m.H.useFormState(x,v,_)},Dn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Dn.version="19.3.0",Dn}var Mv;function nE(){if(Mv)return xh.exports;Mv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),xh.exports=tE(),xh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function iE(){if(Ev)return rl;Ev=1;var o=eE(),t=kp(),i=nE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return m(l),e;if(c===r)return m(l),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var g=!1,A=l.child;A;){if(A===a){g=!0,a=l,r=c;break}if(A===r){g=!0,r=l,a=c;break}A=A.sibling}if(!g){for(A=c.child;A;){if(A===a){g=!0,a=c,r=l;break}if(A===r){g=!0,r=c,a=l;break}A=A.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}function v(e,n,a,r,l,c){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,l,c)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&v(e.child,n,a,r,l,c))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function E(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function R(e){var n=[null,null],a=_(e);return a===null||w(n,e,a.child,{foundSelf:!1}),n}function w(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(e,n,a.child,r))return!0;a=a.sibling}return!1}function y(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,N=null;function z(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function C(e,n,a){return e===a?(N=e,!1):e===n?(N!==null&&(S=e),!0):!1}function D(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function U(e,n,a){for(var r=0,l=e;l;l=a(l))r++;l=0;for(var c=n;c;c=a(c))l++;for(;0<r-l;)e=a(e),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,b=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),fe=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),Ce=Symbol.for("react.legacy_hidden"),Xe=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),ge=Symbol.for("react.recoverable"),Re=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=Re&&e[Re]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Symbol.for("react.client.reference");function Te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case fe:return"Profiler";case ee:return"StrictMode";case Y:return"Suspense";case he:return"SuspenseList";case xe:return"Activity";case B:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case ne:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case q:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:Te(e.type)||"Memo";case ue:n=e._payload,e=e._init;try{return Te(e(n))}catch{}}return null}var Be=Array.isArray,ve=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gt={pending:!1,data:null,method:null,action:null},pt=[],_t=-1;function yt(e){return{current:e}}function tt(e){0>_t||(e.current=pt[_t],pt[_t]=null,_t--)}function it(e,n){_t++,pt[_t]=e.current,e.current=n}var Vt=yt(null),dn=yt(null),Pt=yt(null),en=yt(null);function W(e,n){switch(it(Pt,n),it(dn,e),it(Vt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?b_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=b_(n),e=T_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(Vt),it(Vt,e)}function nn(){tt(Vt),tt(dn),tt(Pt)}function Ot(e){var n=e.memoizedState;n!==null&&(zs._currentValue=n.memoizedState,it(en,e)),n=Vt.current;var a=T_(n,e.type);n!==a&&(it(dn,e),it(Vt,a))}function O(e){dn.current===e&&(tt(Vt),tt(dn)),en.current===e&&(tt(en),zs._currentValue=Gt)}var M,te;function le(e){if(M===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+e+te}var me=!1;function Ae(e,n){if(!e||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(Pe){var Z=Pe}Reflect.construct(e,[],ye)}else{try{ye.call()}catch(Pe){Z=Pe}ye=!1;try{var oe=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ye=!0,new e}finally{ye&&(oe!==void 0?Object.defineProperty(e.prototype,"props",oe):delete e.prototype.props)}}}else{try{throw Error()}catch(Pe){Z=Pe}(ye=e())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(Pe){if(Pe&&Z&&typeof Pe.stack=="string")return[Pe.stack,Z.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],A=c[1];if(g&&A){var I=g.split(`
`),$=A.split(`
`);for(l=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;l<$.length&&!$[l].includes("DetermineComponentFrameRoot");)l++;if(r===I.length||l===$.length)for(r=I.length-1,l=$.length-1;1<=r&&0<=l&&I[r]!==$[l];)l--;for(;1<=r&&0<=l;r--,l--)if(I[r]!==$[l]){if(r!==1||l!==1)do if(r--,l--,0>l||I[r]!==$[l]){var ce=`
`+I[r].replace(" at new "," at ");return e.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",e.displayName)),ce}while(1<=r&&0<=l);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?le(a):""}function Ue(e,n){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le("Lazy");case 13:return e.child!==n&&n!==null?le("Suspense Fallback"):le("Suspense");case 19:return le("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return le("Activity");case 30:return le("ViewTransition");default:return""}}function _e(e){try{var n="",a=null;do n+=Ue(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ee=Object.prototype.hasOwnProperty,De=o.unstable_scheduleCallback,$e=o.unstable_cancelCallback,ze=o.unstable_shouldYield,Ie=o.unstable_requestPaint,We=o.unstable_now,nt=o.unstable_getCurrentPriorityLevel,lt=o.unstable_ImmediatePriority,X=o.unstable_UserBlockingPriority,Ne=o.unstable_NormalPriority,Me=o.unstable_LowPriority,Le=o.unstable_IdlePriority,ke=o.log,be=o.unstable_setDisableYieldValue,Je=null,Ve=null;function Ct(e){if(typeof ke=="function"&&be(e),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(Je,e)}catch{}}var ut=Math.clz32?Math.clz32:Vc,ni=Math.log,pi=Math.LN2;function Vc(e){return e>>>=0,e===0?32:31-(ni(e)/pi|0)|0}var $r=256,vr=262144,za=4194304;function da(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xr(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var l=0,c=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~c,r!==0?l=da(r):(g&=A,g!==0?l=da(g):a||(a=A&~e,a!==0&&(l=da(a))))):(A=r&~c,A!==0?l=da(A):g!==0?l=da(g):a||(a=r&~e,a!==0&&(l=da(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function Ba(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Vi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-ut(a),l=1<<r;n|=e[r],a&=~l}return n}function uo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function co(){var e=za;return za<<=1,(za&62914560)===0&&(za=4194304),e}function es(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ki(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rl(e,n,a,r,l,c){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(a=g&~a;0<a;){var ce=31-ut(a),ye=1<<ce;A[ce]=0,I[ce]=-1;var Z=$[ce];if(Z!==null)for($[ce]=null,ce=0;ce<Z.length;ce++){var oe=Z[ce];oe!==null&&(oe.lane&=-536870913)}a&=~ye}r!==0&&Sr(e,r,0),c!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=c&~(g&~n))}function Sr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ut(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function fo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ut(a),l=1<<r;l&n|e[r]&n&&(e[r]|=n),a&=~l}}function ho(e,n){var a=n&-n;return a=(a&42)!==0?1:po(a),(a&(e.suspendedLanes|n))!==0?0:a}function po(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cl(){var e=we.p;return e!==0?e:(e=window.event,e===void 0?32:lv(e.type))}function wl(e,n){var a=we.p;try{return we.p=e,n()}finally{we.p=a}}var mi=Math.random().toString(36).slice(2),T="__reactFiber$"+mi,H="__reactProps$"+mi,de="__reactContainer$"+mi,re="__reactEvents$"+mi,se="__reactListeners$"+mi,Fe="__reactHandles$"+mi,qe="__reactResources$"+mi,Oe="__reactMarker$"+mi,Ke="__reactLoad$"+mi;function je(e){delete e[T],delete e[H],delete e[se],delete e[Fe]}function st(e){var n;if(n=e[T])return n;for(var a=e.parentNode;a;){if(n=a[de]||a[T]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=V_(e);e!==null;){if(a=e[T])return a;e=V_(e)}return n}e=a,a=e.parentNode}return null}function ct(e){if(e=e[T]||e[de]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ye(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Mt(e){var n=e[qe];return n||(n=e[qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(e){e[Oe]=!0}function Yt(e){e[Ke]=void 0}var Ft=new Set,vn={};function He(e,n){rn(e,n),rn(e+"Capture",n)}function rn(e,n){for(vn[e]=n,e=0;e<n.length;e++)Ft.add(n[e])}var wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hn={},ii={};function Xi(e){return Ee.call(ii,e)?!0:Ee.call(Hn,e)?!1:wt.test(e)?ii[e]=!0:(Hn[e]=!0,!1)}var xt=!1;function zt(){var e=xt;return xt=!1,e}function jt(e,n,a){if(Xi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function ai(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Tt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ha(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Nl(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function kc(e){if(!e._valueTracker){var n=ha(e)?"checked":"value";e._valueTracker=Nl(e,n,""+e[n])}}function dm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=ha(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var gS=/[\n"\\]/g;function gi(e){return e.replace(gS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xc(e,n,a,r,l,c,g,A){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?g==="number"&&e.value==n?Wc(e,sn(e.value)):Wc(e,sn(n)):a!=null?Wc(e,sn(a)):r!=null&&e.removeAttribute("value"),l==null&&c!=null&&(e.defaultChecked=!!c),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+sn(A):e.removeAttribute("name")}function hm(e,n,a,r,l,c,g,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){kc(e);return}a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),kc(e)}function Wc(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function ts(e,n,a,r){if(e=e.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=n.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&r&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function pm(e,n,a){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+sn(a):""}function mm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Be(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=sn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),kc(e)}function ns(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var _S=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||_S.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function _m(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",xt=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(gm(e,l,r),xt=!0)}else for(var c in n)n.hasOwnProperty(c)&&gm(e,c,n[c])}function qc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(e){return xS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var Yc=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var is=null,as=null;function vm(e){var n=ct(e);if(n&&(e=n.stateNode)){var a=e[H]||null;e:switch(e=n.stateNode,n.type){case"input":if(Xc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var l=r[H]||null;if(!l)throw Error(s(90));Xc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&dm(r)}break e;case"textarea":pm(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ts(e,!!a.multiple,n,!1)}}}var Kc=!1;function xm(e,n,a){if(Kc)return e(n,a);Kc=!0;try{var r=e(n);return r}finally{if(Kc=!1,(is!==null||as!==null)&&(Du(),is&&(n=is,e=as,as=is=null,vm(n),e)))for(n=0;n<e.length;n++)vm(e[n])}}function go(e,n){var a=e.stateNode;if(a===null)return null;var r=a[H]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=!1;if(pa)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){jc=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{jc=!1}var Fa=null,Qc=null,Ul=null;function Sm(){if(Ul)return Ul;var e,n=Qc,a=n.length,r,l="value"in Fa?Fa.value:Fa.textContent,c=l.length;for(e=0;e<a&&n[e]===l[e];e++);var g=a-e;for(r=1;r<=g&&n[a-r]===l[c-r];r++);return Ul=l.slice(e,1<r?1-r:void 0)}function Ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ol(){return!0}function ym(){return!1}function Gn(e){function n(a,r,l,c,g){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ol:ym,this.isPropagationStopped=ym,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Gn(Ha),vo=P({},Ha,{view:0,detail:0}),SS=Gn(vo),Jc,$c,xo,Il=P({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(Jc=e.screenX-xo.screenX,$c=e.screenY-xo.screenY):$c=Jc=0,xo=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),Mm=Gn(Il),yS=P({},Il,{dataTransfer:0}),MS=Gn(yS),ES=P({},vo,{relatedTarget:0}),ef=Gn(ES),bS=P({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),TS=Gn(bS),AS=P({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),RS=Gn(AS),CS=P({},Ha,{data:0}),Em=Gn(CS),wS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function US(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=DS[e])?!!n[e]:!1}function tf(){return US}var LS=P({},vo,{key:function(e){if(e.key){var n=wS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?NS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(e){return e.type==="keypress"?Ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),OS=Gn(LS),PS=P({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=Gn(PS),IS=P({},Ha,{submitter:0}),zS=Gn(IS),BS=P({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),FS=Gn(BS),HS=P({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),GS=Gn(HS),VS=P({},Il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kS=Gn(VS),XS=P({},Ha,{newState:0,oldState:0,source:0}),WS=Gn(XS),qS=[9,13,27,32],nf=pa&&"CompositionEvent"in window,So=null;pa&&"documentMode"in document&&(So=document.documentMode);var YS=pa&&"TextEvent"in window&&!So,Tm=pa&&(!nf||So&&8<So&&11>=So),Am=" ",Rm=!1;function Cm(e,n){switch(e){case"keyup":return qS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rs=!1;function ZS(e,n){switch(e){case"compositionend":return wm(n);case"keypress":return n.which!==32?null:(Rm=!0,Am);case"textInput":return e=n.data,e===Am&&Rm?null:e;default:return null}}function KS(e,n){if(rs)return e==="compositionend"||!nf&&Cm(e,n)?(e=Sm(),Ul=Qc=Fa=null,rs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Tm&&n.locale!=="ko"?null:n.data;default:return null}}var jS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jS[e.type]:n==="textarea"}function Dm(e,n,a,r){is?as?as.push(r):as=[r]:is=r,n=zu(n,"onChange"),0<n.length&&(a=new Pl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var yo=null,Mo=null;function QS(e){v_(e,0)}function zl(e){var n=Ye(e);if(dm(n))return e}function Um(e,n){if(e==="change")return n}var Lm=!1;if(pa){var af;if(pa){var rf="oninput"in document;if(!rf){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),rf=typeof Om.oninput=="function"}af=rf}else af=!1;Lm=af&&(!document.documentMode||9<document.documentMode)}function Pm(){yo&&(yo.detachEvent("onpropertychange",Im),Mo=yo=null)}function Im(e){if(e.propertyName==="value"&&zl(Mo)){var n=[];Dm(n,Mo,e,Zc(e)),xm(QS,n)}}function JS(e,n,a){e==="focusin"?(Pm(),yo=n,Mo=a,yo.attachEvent("onpropertychange",Im)):e==="focusout"&&Pm()}function $S(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(Mo)}function ey(e,n){if(e==="click")return zl(n)}function ty(e,n){if(e==="input"||e==="change")return zl(n)}function ny(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ri=typeof Object.is=="function"?Object.is:ny;function Eo(e,n){if(ri(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!Ee.call(n,l)||!ri(e[l],n[l]))return!1}return!0}function sf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bm(e,n){var a=zm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zm(a)}}function Fm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=sf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=sf(e.document)}return n}function of(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var iy=pa&&"documentMode"in document&&11>=document.documentMode,ss=null,lf=null,bo=null,uf=!1;function Gm(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uf||ss==null||ss!==sf(r)||(r=ss,"selectionStart"in r&&of(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Eo(bo,r)||(bo=r,r=zu(lf,"onSelect"),0<r.length&&(n=new Pl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=ss)))}function yr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var os={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionrun:yr("Transition","TransitionRun"),transitionstart:yr("Transition","TransitionStart"),transitioncancel:yr("Transition","TransitionCancel"),transitionend:yr("Transition","TransitionEnd")},cf={},Vm={};pa&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Mr(e){if(cf[e])return cf[e];if(!os[e])return e;var n=os[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vm)return cf[e]=n[a];return e}var km=Mr("animationend"),Xm=Mr("animationiteration"),Wm=Mr("animationstart"),ay=Mr("transitionrun"),ry=Mr("transitionstart"),sy=Mr("transitioncancel"),qm=Mr("transitionend"),Ym=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function Ni(e,n){Ym.set(e,n),He(n,[e])}var oy=0;function ma(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Oi.identifierPrefix;var a=oy++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Zm(e){if(e==null||typeof e=="string")return e;var n=null,a=Rs;if(a!==null)for(var r=0;r<a.length;r++){var l=e[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??e.default}function ga(e,n){return e=Zm(e),n=Zm(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],ls=0,df=0;function Fl(){for(var e=ls,n=df=ls=0;n<e;){var a=_i[n];_i[n++]=null;var r=_i[n];_i[n++]=null;var l=_i[n];_i[n++]=null;var c=_i[n];if(_i[n++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}c!==0&&Km(a,l,c)}}function Hl(e,n,a,r){_i[ls++]=e,_i[ls++]=n,_i[ls++]=a,_i[ls++]=r,df|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function hf(e,n,a,r){return Hl(e,n,a,r),Gl(e)}function Er(e,n){return Hl(e,null,null,n),Gl(e)}function Km(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=e.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(l=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,l&&n!==null&&(l=31-ut(a),e=c.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=a|536870912),c):null}function Gl(e){if(50<qo)throw qo=0,Nu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var us={};function ly(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,r){return new ly(e,n,a,r)}function pf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _a(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jm(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Vl(e,n,a,r,l,c){var g=0;if(r=e,typeof r=="function")pf(r)&&(g=1);else if(typeof r=="string")g=IM(e,a,Vt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case xe:return e=Zn(31,a,n,l),e.elementType=xe,e.lanes=c,e;case k:return br(a.children,l,c,n);case ee:g=8,l|=24;break;case fe:return e=Zn(12,a,n,l|2),e.elementType=fe,e.lanes=c,e;case Y:return e=Zn(13,a,n,l),e.elementType=Y,e.lanes=c,e;case he:return e=Zn(19,a,n,l),e.elementType=he,e.lanes=c,e;case Ce:case B:return e=l|32,e=Zn(30,a,n,e),e.elementType=B,e.lanes=c,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ne:g=10;break e;case J:g=9;break e;case q:g=11;break e;case K:g=14;break e;case ue:g=16,r=null;break e}g=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Zn(g,a,n,l),n.elementType=e,n.type=r,n.lanes=c,n}function br(e,n,a,r){return e=Zn(7,e,r,n),e.lanes=a,e}function mf(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function Qm(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function gf(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Jm=new WeakMap;function vi(e,n){if(typeof e=="object"&&e!==null){var a=Jm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:_e(n)},Jm.set(e,n),n)}return{value:e,source:n,stack:_e(n)}}var cs=[],fs=0,kl=null,To=0,xi=[],Si=0,Ga=null,qi=1,Yi="";function va(e,n){cs[fs++]=To,cs[fs++]=kl,kl=e,To=n}function $m(e,n,a){xi[Si++]=qi,xi[Si++]=Yi,xi[Si++]=Ga,Ga=e;var r=qi;e=Yi;var l=32-ut(r)-1;r&=~(1<<l),a+=1;var c=32-ut(n)+l;if(30<c){var g=l-l%5;c=(r&(1<<g)-1).toString(32),r>>=g,l-=g,qi=1<<32-ut(n)+l|a<<l|r,Yi=c+e}else qi=1<<c|a<<l|r,Yi=e}function Xl(e){e.return!==null&&(va(e,1),$m(e,1,0))}function _f(e){for(;e===kl;)kl=cs[--fs],cs[fs]=null,To=cs[--fs],cs[fs]=null;for(;e===Ga;)Ga=xi[--Si],xi[Si]=null,Yi=xi[--Si],xi[Si]=null,qi=xi[--Si],xi[Si]=null}function e0(e,n){xi[Si++]=qi,xi[Si++]=Yi,xi[Si++]=Ga,qi=n.id,Yi=n.overflow,Ga=e}var Mn=null,Qt=null,St=!1,Va=null,yi=!1,vf=Error(s(519));function ka(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(vi(n,e)),vf}function t0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[T]=e,n[H]=r,a){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(a=0;a<Zo.length;a++)bt(Zo[a],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),hm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),mm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||M_(n.textContent,a)?(r.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),r.onScroll!=null&&bt("scroll",n),r.onScrollEnd!=null&&bt("scrollend",n),r.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||ka(e,!0)}function Wl(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Mn=Mn.return}}function ds(e){if(e!==Mn)return!1;if(!St)return Wl(e),St=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zd(e.type,e.memoizedProps)),a=!a),a&&Qt&&ka(e),Wl(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qt=G_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qt=G_(e)}else n===27?(n=Qt,rr(e.type)?(e=ih,ih=null,Qt=e):Qt=n):Qt=Mn?Ei(e.stateNode.nextSibling):null;return!0}function Tr(){Qt=Mn=null,St=!1}function xf(){var e=Va;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),Va=null),e}function Ao(e){Va===null?Va=[e]:Va.push(e)}var Sf=yt(null),Ar=null,xa=null;function Xa(e,n,a){it(Sf,n._currentValue),n._currentValue=a}function Sa(e){e._currentValue=Sf.current,tt(Sf)}function ql(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function yf(e,n,a,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var c=l.dependencies;if(c!==null){var g=l.child;c=c.firstContext;e:for(;c!==null;){var A=c;c=l;for(var I=0;I<n.length;I++)if(A.context===n[I]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),ql(c.return,a,e),r||(g=null);break e}c=A.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),ql(g,a,e),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,g=l.alternate,g!==null&&(g.lanes|=a),ql(l.return,a,e),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===e){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function Rr(e,n,a,r){e=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var A=l.type;ri(l.pendingProps.value,g.value)||(e!==null?e.push(A):e=[A])}}else if(l===en.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(zs):e=[zs])}l=l.return}return e!==null&&yf(n,e,a,r),n.flags|=262144,e!==null}function Yl(e){for(e=e.firstContext;e!==null;){if(!ri(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cr(e){Ar=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return n0(Ar,e)}function Zl(e,n){return Ar===null&&Cr(e),n0(e,n)}function n0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xa===null){if(e===null)throw Error(s(308));xa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else xa=xa.next=n;return a}var uy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},cy=o.unstable_scheduleCallback,fy=o.unstable_NormalPriority,hn={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mf(){return{controller:new uy,data:new Map,refCount:0}}function Ro(e){e.refCount--,e.refCount===0&&cy(fy,function(){e.controller.abort()})}function i0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Co=null;function dy(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var wo=null,Ef=0,wr=0,hs=null;function hy(e,n){if(wo===null){var a=wo=[];Ef=0,wr=Fd(),hs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ef++,n.then(a0,a0),n}function a0(){if(--Ef===0&&(Co=null,wo!==null)){hs!==null&&(hs.status="fulfilled");var e=wo;wo=null,wr=0,hs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function py(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var r0=ve.S;ve.S=function(e,n){if(Qg=We(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&hy(e,n),Co!==null)for(var a=Ds;a!==null;)i0(a,Co),a=a.next;if(a=e.types,a!==null){for(var r=Ds;r!==null;)i0(r,a),r=r.next;if(wr!==0){r=Co,r===null&&(r=Co=[]);for(var l=0;l<a.length;l++){var c=a[l];r.indexOf(c)===-1&&r.push(c)}}}r0!==null&&r0(e,n)};var Nr=yt(null);function bf(){var e=Nr.current;return e!==null?e:Kt.pooledCache}function Kl(e,n){n===null?it(Nr,Nr.current):it(Nr,n.pool)}function s0(){var e=bf();return e===null?null:{parent:hn._currentValue,pool:e}}var ps=Error(s(460)),Tf=Error(s(474)),jl=Error(s(542)),Ql={then:function(){}};function o0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function l0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,c0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=Kt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,c0(e),e}throw Ur=n,ps}}function Dr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ur=a,ps):a}}var Ur=null;function u0(){if(Ur===null)throw Error(s(459));var e=Ur;return Ur=null,e}function c0(e){if(e===ps||e===jl)throw Error(s(483))}var ms=null,No=0;function Jl(e){var n=No;return No+=1,ms===null&&(ms=[]),l0(ms,e,n)}function Wa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function $l(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function f0(e){function n(Q,G){if(e){var ie=Q.deletions;ie===null?(Q.deletions=[G],Q.flags|=16):ie.push(G)}}function a(Q,G){if(!e)return null;for(;G!==null;)n(Q,G),G=G.sibling;return null}function r(Q){for(var G=new Map;Q!==null;)Q.key===null?G.set(Q.index,Q):G.set(Q.key,Q),Q=Q.sibling;return G}function l(Q,G){return Q=_a(Q,G),Q.index=0,Q.sibling=null,Q}function c(Q,G,ie){return Q.index=ie,e?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<G?(Q.flags|=2,G):ie):(Q.flags|=134217730,G)):(Q.flags|=1048576,G)}function g(Q){return e&&Q.alternate===null&&(Q.flags|=134217730),Q}function A(Q,G,ie,Se){return G===null||G.tag!==6?(G=mf(ie,Q.mode,Se),G.return=Q,G):(G=l(G,ie),G.return=Q,G)}function I(Q,G,ie,Se){var Ze=ie.type;return Ze===k?(Q=ce(Q,G,ie.props.children,Se,ie.key),Wa(Q,ie),Q):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ue&&Dr(Ze)===G.type)?(G=l(G,ie.props),Wa(G,ie),G.return=Q,G):(G=Vl(ie.type,ie.key,ie.props,null,Q.mode,Se),Wa(G,ie),G.return=Q,G)}function $(Q,G,ie,Se){return G===null||G.tag!==4||G.stateNode.containerInfo!==ie.containerInfo||G.stateNode.implementation!==ie.implementation?(G=gf(ie,Q.mode,Se),G.return=Q,G):(G=l(G,ie.children||[]),G.return=Q,G)}function ce(Q,G,ie,Se,Ze){return G===null||G.tag!==7?(G=br(ie,Q.mode,Se,Ze),G.return=Q,G):(G=l(G,ie),G.return=Q,G)}function ye(Q,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=mf(""+G,Q.mode,ie),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case L:return ie=Vl(G.type,G.key,G.props,null,Q.mode,ie),Wa(ie,G),ie.return=Q,ie;case F:return G=gf(G,Q.mode,ie),G.return=Q,G;case ue:return G=Dr(G),ye(Q,G,ie)}if(Be(G)||j(G))return G=br(G,Q.mode,ie,null),G.return=Q,G;if(typeof G.then=="function")return ye(Q,Jl(G),ie);if(G.$$typeof===ne)return ye(Q,Zl(Q,G),ie);$l(Q,G)}return null}function Z(Q,G,ie,Se){var Ze=G!==null?G.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Ze!==null?null:A(Q,G,""+ie,Se);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case L:return ie.key===Ze?I(Q,G,ie,Se):null;case F:return ie.key===Ze?$(Q,G,ie,Se):null;case ue:return ie=Dr(ie),Z(Q,G,ie,Se)}if(Be(ie)||j(ie))return Ze!==null?null:ce(Q,G,ie,Se,null);if(typeof ie.then=="function")return Z(Q,G,Jl(ie),Se);if(ie.$$typeof===ne)return Z(Q,G,Zl(Q,ie),Se);$l(Q,ie)}return null}function oe(Q,G,ie,Se,Ze){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return Q=Q.get(ie)||null,A(G,Q,""+Se,Ze);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case L:return Q=Q.get(Se.key===null?ie:Se.key)||null,I(G,Q,Se,Ze);case F:return Q=Q.get(Se.key===null?ie:Se.key)||null,$(G,Q,Se,Ze);case ue:return Se=Dr(Se),oe(Q,G,ie,Se,Ze)}if(Be(Se)||j(Se))return Q=Q.get(ie)||null,ce(G,Q,Se,Ze,null);if(typeof Se.then=="function")return oe(Q,G,ie,Jl(Se),Ze);if(Se.$$typeof===ne)return oe(Q,G,ie,Zl(G,Se),Ze);$l(G,Se)}return null}function Pe(Q,G,ie,Se){for(var Ze=null,Rt=null,et=G,at=G=0,gn=null;et!==null&&at<ie.length;at++){et.index>at?(gn=et,et=null):gn=et.sibling;var Ut=Z(Q,et,ie[at],Se);if(Ut===null){et===null&&(et=gn);break}e&&et&&Ut.alternate===null&&n(Q,et),G=c(Ut,G,at),Rt===null?Ze=Ut:Rt.sibling=Ut,Rt=Ut,et=gn}if(at===ie.length)return a(Q,et),St&&va(Q,at),Ze;if(et===null){for(;at<ie.length;at++)et=ye(Q,ie[at],Se),et!==null&&(G=c(et,G,at),Rt===null?Ze=et:Rt.sibling=et,Rt=et);return St&&va(Q,at),Ze}for(et=r(et);at<ie.length;at++)gn=oe(et,Q,at,ie[at],Se),gn!==null&&(e&&(Ut=gn.alternate,Ut!==null&&et.delete(Ut.key===null?at:Ut.key)),G=c(gn,G,at),Rt===null?Ze=gn:Rt.sibling=gn,Rt=gn);return e&&et.forEach(function(cr){return n(Q,cr)}),St&&va(Q,at),Ze}function Qe(Q,G,ie,Se){if(ie==null)throw Error(s(151));for(var Ze=null,Rt=null,et=G,at=G=0,gn=null,Ut=ie.next();et!==null&&!Ut.done;at++,Ut=ie.next()){et.index>at?(gn=et,et=null):gn=et.sibling;var cr=Z(Q,et,Ut.value,Se);if(cr===null){et===null&&(et=gn);break}e&&et&&cr.alternate===null&&n(Q,et),G=c(cr,G,at),Rt===null?Ze=cr:Rt.sibling=cr,Rt=cr,et=gn}if(Ut.done)return a(Q,et),St&&va(Q,at),Ze;if(et===null){for(;!Ut.done;at++,Ut=ie.next())Ut=ye(Q,Ut.value,Se),Ut!==null&&(G=c(Ut,G,at),Rt===null?Ze=Ut:Rt.sibling=Ut,Rt=Ut);return St&&va(Q,at),Ze}for(et=r(et);!Ut.done;at++,Ut=ie.next())Ut=oe(et,Q,at,Ut.value,Se),Ut!==null&&(e&&(gn=Ut.alternate,gn!==null&&et.delete(gn.key===null?at:gn.key)),G=c(Ut,G,at),Rt===null?Ze=Ut:Rt.sibling=Ut,Rt=Ut);return e&&et.forEach(function(ZM){return n(Q,ZM)}),St&&va(Q,at),Ze}function ht(Q,G,ie,Se){if(typeof ie=="object"&&ie!==null&&ie.type===k&&ie.key===null&&ie.props.ref===void 0&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case L:e:{for(var Ze=ie.key;G!==null;){if(G.key===Ze){if(Ze=ie.type,Ze===k){if(G.tag===7){a(Q,G.sibling),Se=l(G,ie.props.children),Wa(Se,ie),Se.return=Q,Q=Se;break e}}else if(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ue&&Dr(Ze)===G.type){a(Q,G.sibling),Se=l(G,ie.props),Wa(Se,ie),Se.return=Q,Q=Se;break e}a(Q,G);break}else n(Q,G);G=G.sibling}ie.type===k?(Se=br(ie.props.children,Q.mode,Se,ie.key),Wa(Se,ie),Se.return=Q,Q=Se):(Se=Vl(ie.type,ie.key,ie.props,null,Q.mode,Se),Wa(Se,ie),Se.return=Q,Q=Se)}return g(Q);case F:e:{for(Ze=ie.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===ie.containerInfo&&G.stateNode.implementation===ie.implementation){a(Q,G.sibling),Se=l(G,ie.children||[]),Se.return=Q,Q=Se;break e}else{a(Q,G);break}else n(Q,G);G=G.sibling}Se=gf(ie,Q.mode,Se),Se.return=Q,Q=Se}return g(Q);case ue:return ie=Dr(ie),ht(Q,G,ie,Se)}if(Be(ie))return Pe(Q,G,ie,Se);if(j(ie)){if(Ze=j(ie),typeof Ze!="function")throw Error(s(150));return ie=Ze.call(ie),Qe(Q,G,ie,Se)}if(typeof ie.then=="function")return ht(Q,G,Jl(ie),Se);if(ie.$$typeof===ne)return ht(Q,G,Zl(Q,ie),Se);$l(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,G!==null&&G.tag===6?(a(Q,G.sibling),Se=l(G,ie),Se.return=Q,Q=Se):(a(Q,G),Se=mf(ie,Q.mode,Se),Se.return=Q,Q=Se),g(Q)):a(Q,G)}return function(Q,G,ie,Se){try{No=0;var Ze=ht(Q,G,ie,Se);return ms=null,Ze}catch(et){if(et===ps||et===jl)throw et;var Rt=Zn(29,et,null,Q.mode);return Rt.lanes=Se,Rt.return=Q,Rt}finally{}}}var Lr=f0(!0),d0=f0(!1),qa=!1;function Af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Bt&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Gl(e),Km(e,null,a),n}return Hl(e,r,n,a),Gl(e)}function Do(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,fo(e,a)}}function Cf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var wf=!1;function Uo(){if(wf){var e=hs;if(e!==null)throw e}}function Lo(e,n,a,r){wf=!1;var l=e.updateQueue;qa=!1;var c=l.firstBaseUpdate,g=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var I=A,$=I.next;I.next=null,g===null?c=$:g.next=$,g=I;var ce=e.alternate;ce!==null&&(ce=ce.updateQueue,A=ce.lastBaseUpdate,A!==g&&(A===null?ce.firstBaseUpdate=$:A.next=$,ce.lastBaseUpdate=I))}if(c!==null){var ye=l.baseState;g=0,ce=$=I=null,A=c;do{var Z=A.lane&-536870913,oe=Z!==A.lane;if(oe?(At&Z)===Z:(r&Z)===Z){Z!==0&&Z===wr&&(wf=!0),ce!==null&&(ce=ce.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Pe=e,Qe=A;Z=n;var ht=a;switch(Qe.tag){case 1:if(Pe=Qe.payload,typeof Pe=="function"){ye=Pe.call(ht,ye,Z);break e}ye=Pe;break e;case 3:Pe.flags=Pe.flags&-65537|128;case 0:if(Pe=Qe.payload,Z=typeof Pe=="function"?Pe.call(ht,ye,Z):Pe,Z==null)break e;ye=P({},ye,Z);break e;case 2:qa=!0}}Z=A.callback,Z!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=l.callbacks,oe===null?l.callbacks=[Z]:oe.push(Z))}else oe={lane:Z,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ce===null?($=ce=oe,I=ye):ce=ce.next=oe,g|=Z;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;oe=A,A=oe.next,oe.next=null,l.lastBaseUpdate=oe,l.shared.pending=null}}while(!0);ce===null&&(I=ye),l.baseState=I,l.firstBaseUpdate=$,l.lastBaseUpdate=ce,c===null&&(l.shared.lanes=0),tr|=g,e.lanes=g,e.memoizedState=ye}}function h0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function p0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)h0(a[e],n)}var Ka=yt(null),eu=yt(0);function m0(e,n){e=Ta,it(eu,e),it(Ka,n),Ta=e|n.baseLanes}function Nf(){it(eu,Ta),it(Ka,Ka.current)}function Df(){Ta=eu.current,tt(Ka),tt(eu)}var Rn=yt(null),On=null;function ja(e){var n=e.alternate;it(Cn,Cn.current&1),it(Rn,e),On===null&&(n===null||Ka.current!==null||n.memoizedState!==null)&&(On=e)}function Uf(e){it(Cn,Cn.current),it(Rn,e),On===null&&(On=e)}function g0(e){e.tag===22?(it(Cn,Cn.current),it(Rn,e),On===null&&(On=e)):Qa()}function Qa(){it(Cn,Cn.current),it(Rn,Rn.current)}function si(e){tt(Rn),On===e&&(On=null),tt(Cn)}var Cn=yt(0);function Oo(e,n){it(Rn,Rn.current),it(Cn,n)}function Lf(e){tt(Cn),tt(Rn),On===e&&(On=null)}function tu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||th(a)||nh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,dt=null,Zt=null,pn=null,nu=!1,gs=!1,Or=!1,iu=0,Po=0,_s=null,my=0;function on(){throw Error(s(321))}function Of(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ri(e[a],n[a]))return!1;return!0}function Pf(e,n,a,r,l,c){return ya=c,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ve.H=e===null||e.memoizedState===null?$0:eg,Or=!1,c=a(r,l),Or=!1,gs&&(c=v0(n,a,r,l)),_0(e),c}function _0(e){ve.H=cu;var n=Zt!==null&&Zt.next!==null;if(ya=0,pn=Zt=dt=null,nu=!1,Po=0,_s=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&Yl(e)&&(mn=!0))}function v0(e,n,a,r){dt=e;var l=0;do{if(gs&&(_s=null),Po=0,gs=!1,25<=l)throw Error(s(301));if(l+=1,pn=Zt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}ve.H=Ey,c=n(a,r)}while(gs);return c}function gy(){var e=ve.H,n=e.useState()[0];return n=typeof n.then=="function"?Io(n):n,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(dt.flags|=1024),n}function If(){var e=iu!==0;return iu=0,e}function zf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Bf(e){if(nu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}nu=!1}ya=0,pn=Zt=dt=null,gs=!1,Po=iu=0,_s=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?dt.memoizedState=pn=e:pn=pn.next=e,pn}function fn(){if(Zt===null){var e=dt.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var n=pn===null?dt.memoizedState:pn.next;if(n!==null)pn=n,Zt=e;else{if(e===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},pn===null?dt.memoizedState=pn=e:pn=pn.next=e}return pn}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var n=Po;return Po+=1,_s===null&&(_s=[]),e=l0(_s,e,n),n=dt,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,ve.H=n===null||n.memoizedState===null?$0:eg),e}function ru(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Io(e);if(e.$$typeof===ge)return;if(e.$$typeof===ne)return An(e)}throw Error(s(438,String(e)))}function Ff(e){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=dt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=au(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Xe;return n.index++,a}function Ma(e,n){return typeof n=="function"?n(e):n}function su(e){var n=fn();return Hf(n,Zt,e)}function Hf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=e.baseQueue,c=r.pending;if(c!==null){if(l!==null){var g=l.next;l.next=c.next,c.next=g}n.baseQueue=l=c,r.pending=null}if(c=e.baseState,l===null)e.memoizedState=c;else{n=l.next;var A=g=null,I=null,$=n,ce=!1;do{var ye=$.lane&-536870913;if(ye!==$.lane?(At&ye)===ye:(ya&ye)===ye){var Z=$.revertLane;if(Z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ye===wr&&(ce=!0);else if((ya&Z)===Z){$=$.next,Z===wr&&(ce=!0);continue}else ye={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=ye,g=c):I=I.next=ye,dt.lanes|=Z,tr|=Z;ye=$.action,Or&&a(c,ye),c=$.hasEagerState?$.eagerState:a(c,ye)}else Z={lane:ye,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=Z,g=c):I=I.next=Z,dt.lanes|=ye,tr|=ye;$=$.next}while($!==null&&$!==n);if(I===null?g=c:I.next=A,!ri(c,e.memoizedState)&&(mn=!0,ce&&(a=hs,a!==null)))throw a;e.memoizedState=c,e.baseState=g,e.baseQueue=I,r.lastRenderedState=c}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Gf(e){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do c=e(c,g.action),g=g.next;while(g!==l);ri(c,n.memoizedState)||(mn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function x0(e,n,a){var r=dt,l=fn(),c=St;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ri((Zt||l).memoizedState,a);if(g&&(l.memoizedState=a,mn=!0),l=l.queue,Xf(M0.bind(null,r,l,e),[e]),e=l.getSnapshot!==n||g||pn!==null&&(pn.memoizedState.tag&1)!==0,vs(e?9:8,{destroy:void 0},y0.bind(null,r,l,a,n),null),e){if(r.flags|=2048,Kt===null)throw Error(s(349));c||(ya&127)!==0||S0(r,n,a)}return a}function S0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=au(),dt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function y0(e,n,a,r){n.value=a,n.getSnapshot=r,E0(n)&&b0(e)}function M0(e,n,a){return a(function(){E0(n)&&b0(e)})}function E0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ri(e,a)}catch{return!0}}function b0(e){var n=Er(e,2);n!==null&&Jn(n,e,2)}function Vf(e){var n=Vn();if(typeof e=="function"){var a=e;if(e=a(),Or){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},n}function T0(e,n,a,r){return e.baseState=a,Hf(e,Zt,typeof r=="function"?r:Ma)}function _y(e,n,a,r,l){if(uu(e))throw Error(s(485));if(e=n.action,e!==null){var c={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};ve.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,A0(n,c)):(c.next=a.next,n.pending=a.next=c)}}function A0(e,n){var a=n.action,r=n.payload,l=e.state;if(n.isTransition){var c=ve.T,g={};g.types=c!==null?c.types:null,ve.T=g;try{var A=a(l,r),I=ve.S;I!==null&&I(g,A),R0(e,n,A)}catch($){kf(e,n,$)}finally{c!==null&&g.types!==null&&(c.types=g.types),ve.T=c}}else try{c=a(l,r),R0(e,n,c)}catch($){kf(e,n,$)}}function R0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){C0(e,n,r)},function(r){return kf(e,n,r)}):C0(e,n,a)}function C0(e,n,a){n.status="fulfilled",n.value=a,w0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,A0(e,a)))}function kf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,w0(n),n=n.next;while(n!==r)}e.action=null}function w0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function N0(e,n){return n}function D0(e,n){if(St){var a=Kt.formState;if(a!==null){e:{var r=dt;if(St){if(Qt){t:{for(var l=Qt,c=yi;l.nodeType!==8;){if(!c){l=null;break t}if(l=Ei(l.nextSibling),l===null){l=null;break t}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Qt=Ei(l.nextSibling),r=l.data==="F!";break e}}ka(r)}r=!1}r&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N0,lastRenderedState:n},a.queue=r,a=j0.bind(null,dt,r),r.dispatch=a,r=Vf(!1),c=Kf.bind(null,dt,!1,r.queue),r=Vn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,a=_y.bind(null,dt,l,c,a),l.dispatch=a,r.memoizedState=e,[n,a,!1]}function U0(e){var n=fn();return L0(n,Zt,e)}function L0(e,n,a){if(n=Hf(e,n,N0)[0],e=su(Ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Io(n)}catch(g){throw g===ps?jl:g}else r=n;n=fn();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,vs(9,{destroy:void 0},vy.bind(null,l,a),null)),[r,c,e]}function vy(e,n){e.action=n}function O0(e){var n=fn(),a=Zt;if(a!==null)return L0(n,a,e);fn(),n=n.memoizedState,a=fn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function vs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=dt.updateQueue,n===null&&(n=au(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function P0(){return fn().memoizedState}function ou(e,n,a,r){var l=Vn();dt.flags|=e,l.memoizedState=vs(1|n,{destroy:void 0},a,r===void 0?null:r)}function lu(e,n,a,r){var l=fn();r=r===void 0?null:r;var c=l.memoizedState.inst;Zt!==null&&r!==null&&Of(r,Zt.memoizedState.deps)?l.memoizedState=vs(n,c,a,r):(dt.flags|=e,l.memoizedState=vs(1|n,c,a,r))}function I0(e,n){ou(8390656,8,e,n)}function Xf(e,n){lu(2048,8,e,n)}function xy(e){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=au(),dt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function z0(e){var n=fn().memoizedState;return xy({ref:n,nextImpl:e}),function(){if((Bt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function B0(e,n){return lu(4,2,e,n)}function F0(e,n){return lu(4,4,e,n)}function H0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function G0(e,n,a){a=a!=null?a.concat([e]):null,lu(4,4,H0.bind(null,n,e),a)}function Wf(){}function V0(e,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Of(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function k0(e,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Of(n,r[1]))return r[0];if(r=e(),Or){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[r,n],r}function qf(e,n,a){return a===void 0||(ya&1073741824)!==0&&(At&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=$g(),dt.lanes|=e,tr|=e,a)}function X0(e,n,a,r){return ri(a,n)?a:Ka.current!==null?(e=qf(e,a,r),ri(e,n)||(mn=!0),e):(ya&106)===0||(ya&1073741824)!==0&&(At&261930)===0?(mn=!0,e.memoizedState=a):(e=$g(),dt.lanes|=e,tr|=e,n)}function W0(e,n,a,r,l){var c=we.p;we.p=c!==0&&8>c?c:8;var g=ve.T,A={};A.types=g!==null?g.types:null,ve.T=A,Kf(e,!1,n,a);try{var I=l(),$=ve.S;if($!==null&&$(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ce=py(I,r);zo(e,n,ce,ci(e))}else zo(e,n,r,ci(e))}catch(ye){zo(e,n,{then:function(){},status:"rejected",reason:ye},ci())}finally{we.p=c,g!==null&&A.types!==null&&(g.types=A.types),ve.T=g}}function Sy(){}function Yf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var l=q0(e).queue;W0(e,l,n,Gt,a===null?Sy:function(){return Y0(e),a(r)})}function q0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Gt,baseState:Gt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:Gt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Y0(e){var n=q0(e);n.next===null&&(n=e.alternate.memoizedState),zo(e,n.next.queue,{},ci())}function Zf(){return An(zs)}function Z0(){return fn().memoizedState}function K0(){return fn().memoizedState}function yy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();e=Ya(a);var r=Za(n,e,a);r!==null&&(Jn(r,n,a),Do(r,n,a)),n={cache:Mf()},e.payload=n;return}n=n.return}}function My(e,n,a){var r=ci();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uu(e)?Q0(n,a):(a=hf(e,n,a,r),a!==null&&(Jn(a,e,r),J0(a,n,r)))}function j0(e,n,a){var r=ci();zo(e,n,a,r)}function zo(e,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(uu(e))Q0(n,l);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,A=c(g,a);if(l.hasEagerState=!0,l.eagerState=A,ri(A,g))return Hl(e,n,l,0),Kt===null&&Fl(),!1}catch{}finally{}if(a=hf(e,n,l,r),a!==null)return Jn(a,e,r),J0(a,n,r),!0}return!1}function Kf(e,n,a,r){if(r={lane:2,revertLane:Fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},uu(e)){if(n)throw Error(s(479))}else n=hf(e,a,r,2),n!==null&&Jn(n,e,2)}function uu(e){var n=e.alternate;return e===dt||n!==null&&n===dt}function Q0(e,n){gs=nu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function J0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,fo(e,a)}}var cu={readContext:An,use:ru,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on,useEffectEvent:on},$0={readContext:An,use:ru,useCallback:function(e,n){return Vn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:I0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ou(4194308,4,H0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ou(4194308,4,e,n)},useInsertionEffect:function(e,n){ou(4,2,e,n)},useMemo:function(e,n){var a=Vn();n=n===void 0?null:n;var r=e();if(Or){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Vn();if(a!==void 0){var l=a(n);if(Or){Ct(!0);try{a(n)}finally{Ct(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=My.bind(null,dt,e),[r.memoizedState,e]},useRef:function(e){var n=Vn();return e={current:e},n.memoizedState=e},useState:function(e){e=Vf(e);var n=e.queue,a=j0.bind(null,dt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Wf,useDeferredValue:function(e,n){var a=Vn();return qf(a,e,n)},useTransition:function(){var e=Vf(!1);return e=W0.bind(null,dt,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=dt,l=Vn();if(St){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Kt===null)throw Error(s(349));(At&127)!==0||S0(r,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,I0(M0.bind(null,r,c,e),[e]),r.flags|=2048,vs(9,{destroy:void 0},y0.bind(null,r,c,a,n),null),a},useId:function(){var e=Vn(),n=Kt.identifierPrefix;if(St){var a=Yi,r=qi;a=(r&~(1<<32-ut(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=iu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=my++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Zf,useFormState:D0,useActionState:D0,useOptimistic:function(e){var n=Vn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Kf.bind(null,dt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ff,useCacheRefresh:function(){return Vn().memoizedState=yy.bind(null,dt)},useEffectEvent:function(e){var n=Vn(),a={impl:e};return n.memoizedState=a,function(){if((Bt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},eg={readContext:An,use:ru,useCallback:V0,useContext:An,useEffect:Xf,useImperativeHandle:G0,useInsertionEffect:B0,useLayoutEffect:F0,useMemo:k0,useReducer:su,useRef:P0,useState:function(){return su(Ma)},useDebugValue:Wf,useDeferredValue:function(e,n){var a=fn();return X0(a,Zt.memoizedState,e,n)},useTransition:function(){var e=su(Ma)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:Io(e),n]},useSyncExternalStore:x0,useId:Z0,useHostTransitionStatus:Zf,useFormState:U0,useActionState:U0,useOptimistic:function(e,n){var a=fn();return T0(a,Zt,e,n)},useMemoCache:Ff,useCacheRefresh:K0,useEffectEvent:z0},Ey={readContext:An,use:ru,useCallback:V0,useContext:An,useEffect:Xf,useImperativeHandle:G0,useInsertionEffect:B0,useLayoutEffect:F0,useMemo:k0,useReducer:Gf,useRef:P0,useState:function(){return Gf(Ma)},useDebugValue:Wf,useDeferredValue:function(e,n){var a=fn();return Zt===null?qf(a,e,n):X0(a,Zt.memoizedState,e,n)},useTransition:function(){var e=Gf(Ma)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:Io(e),n]},useSyncExternalStore:x0,useId:Z0,useHostTransitionStatus:Zf,useFormState:O0,useActionState:O0,useOptimistic:function(e,n){var a=fn();return Zt!==null?T0(a,Zt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ff,useCacheRefresh:K0,useEffectEvent:z0};function jf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ci(),l=Ya(r);l.payload=n,a!=null&&(l.callback=a),n=Za(e,l,r),n!==null&&(Jn(n,e,r),Do(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ci(),l=Ya(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Za(e,l,r),n!==null&&(Jn(n,e,r),Do(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ci(),r=Ya(a);r.tag=2,n!=null&&(r.callback=n),n=Za(e,r,a),n!==null&&(Jn(n,e,a),Do(n,e,a))}};function tg(e,n,a,r,l,c,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,g):n.prototype&&n.prototype.isPureReactComponent?!Eo(a,r)||!Eo(l,c):!0}function ng(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Qf.enqueueReplaceState(n,n.state,null)}function Pr(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function ig(e){Bl(e)}function ag(e){console.error(e)}function rg(e){Bl(e)}function fu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function sg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Jf(e,n,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){fu(e,n)},a}function og(e){return e=Ya(e),e.tag=3,e}function lg(e,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;e.payload=function(){return l(c)},e.callback=function(){sg(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){sg(n,a,r),typeof l!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function by(e,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Rr(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return On===null?Uu():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===Ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Id(e,r,l)),!1;case 22:return a.flags|=65536,r===Ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Id(e,r,l)),!1}throw Error(s(435,a.tag))}return Id(e,r,l),Uu(),!1}if(St)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==vf&&(e=Error(s(422),{cause:r}),Ao(vi(e,a)))):(r!==vf&&(n=Error(s(423),{cause:r}),Ao(vi(n,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=vi(r,a),l=Jf(e.stateNode,r,l),Cf(e,l),ln!==4&&(ln=2)),!1;var c=Error(s(520),{cause:r});if(c=vi(c,a),Wo===null?Wo=[c]:Wo.push(c),ln!==4&&(ln=2),n===null)return!0;r=vi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Jf(a.stateNode,r,e),Cf(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(nr===null||!nr.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=og(l),lg(l,e,a,r),Cf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var $f=Error(s(461)),mn=!1;function xn(e,n,a,r){n.child=e===null?d0(n,null,a,r):Lr(n,e.child,a,r)}function ug(e,n,a,r,l){a=a.render;var c=n.ref;if("ref"in r){var g={};for(var A in r)A!=="ref"&&(g[A]=r[A])}else g=r;return Cr(n),r=Pf(e,n,a,g,c,l),A=If(),e!==null&&!mn?(zf(e,n,l),Ea(e,n,l)):(St&&A&&Xl(n),n.flags|=1,xn(e,n,r,l),n.child)}function cg(e,n,a,r,l){if(e===null){var c=a.type;return typeof c=="function"&&!pf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,fg(e,n,c,r,l)):(e=Vl(a.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!od(e,l)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:Eo,a(g,r)&&e.ref===n.ref)return Ea(e,n,l)}return n.flags|=1,e=_a(c,r),e.ref=n.ref,e.return=n,n.child=e}function fg(e,n,a,r,l){if(e!==null){var c=e.memoizedProps;if(Eo(c,r)&&e.ref===n.ref)if(mn=!1,n.pendingProps=r=c,od(e,l))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,Ea(e,n,l)}return ed(e,n,a,r,l)}function dg(e,n,a,r){var l=r.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return hg(e,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kl(n,c!==null?c.cachePool:null),c!==null?m0(n,c):Nf(),g0(n);else return r=n.lanes=536870912,hg(e,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(Kl(n,c.cachePool),m0(n,c),Qa(),n.memoizedState=null):(e!==null&&Kl(n,null),Nf(),Qa());return xn(e,n,l,a),n.child}function Bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function hg(e,n,a,r,l){var c=bf();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Kl(n,null),Nf(),g0(n),e!==null&&Rr(e,n,r,!0),n.childLanes=l,null}function du(e,n){return n=hu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function pg(e,n,a){return Lr(n,e.child,null,a),e=du(n,n.pendingProps),e.flags|=2,si(n),n.memoizedState=null,e}function Ty(e,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(St){if(r.mode==="hidden")return e=du(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Bo(null,e);if(Uf(n),(e=Qt)?(e=H_(e,yi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=Qm(e),a.return=n,n.child=a,Mn=n,Qt=null)):e=null,e===null)throw ka(n);return n.lanes=536870912,null}return du(n,r)}var c=e.memoizedState;if(c!==null){var g=c.dehydrated;if(Uf(n),l)if(n.flags&256)n.flags&=-257,n=pg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||Rr(e,n,a,!1),l=(a&e.childLanes)!==0,mn||l){if(Ka.current===null){if(r=Kt,r!==null&&(g=ho(r,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,Er(e,g),Jn(r,e,g),$f;Uu()}n=pg(e,n,a)}else e=c.treeContext,Qt=Ei(g.nextSibling),Mn=n,St=!0,Va=null,yi=!1,e!==null&&e0(n,e),n=du(n,r),n.flags|=134221824;return n}return e=_a(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function xs(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ed(e,n,a,r,l){return Cr(n),a=Pf(e,n,a,r,void 0,l),r=If(),e!==null&&!mn?(zf(e,n,l),Ea(e,n,l)):(St&&r&&Xl(n),n.flags|=1,xn(e,n,a,l),n.child)}function mg(e,n,a,r,l,c){return Cr(n),n.updateQueue=null,a=v0(n,r,a,l),_0(e),r=If(),e!==null&&!mn?(zf(e,n,c),Ea(e,n,c)):(St&&r&&Xl(n),n.flags|=1,xn(e,n,a,c),n.child)}function gg(e,n,a,r,l){if(Cr(n),n.stateNode===null){var c=us,g=a.contextType;typeof g=="object"&&g!==null&&(c=An(g)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Qf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},Af(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?An(g):us,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(jf(n,a,g,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Qf.enqueueReplaceState(c,c.state,null),Lo(n,r,c,l),Uo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){c=n.stateNode;var A=n.memoizedProps,I=Pr(a,A);c.props=I;var $=c.context,ce=a.contextType;g=us,typeof ce=="object"&&ce!==null&&(g=An(ce));var ye=a.getDerivedStateFromProps;ce=typeof ye=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ce||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||$!==g)&&ng(n,c,r,g),qa=!1;var Z=n.memoizedState;c.state=Z,Lo(n,r,c,l),Uo(),$=n.memoizedState,A||Z!==$||qa?(typeof ye=="function"&&(jf(n,a,ye,r),$=n.memoizedState),(I=qa||tg(n,a,I,r,Z,$,g))?(ce||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),c.props=r,c.state=$,c.context=g,r=I):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Rf(e,n),g=n.memoizedProps,ce=Pr(a,g),c.props=ce,ye=n.pendingProps,Z=c.context,$=a.contextType,I=us,typeof $=="object"&&$!==null&&(I=An($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==ye||Z!==I)&&ng(n,c,r,I),qa=!1,Z=n.memoizedState,c.state=Z,Lo(n,r,c,l),Uo();var oe=n.memoizedState;g!==ye||Z!==oe||qa||e!==null&&e.dependencies!==null&&Yl(e.dependencies)?(typeof A=="function"&&(jf(n,a,A,r),oe=n.memoizedState),(ce=qa||tg(n,a,ce,r,Z,oe,I)||e!==null&&e.dependencies!==null&&Yl(e.dependencies))?($||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,oe,I),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,oe,I)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=oe),c.props=r,c.state=oe,c.context=I,r=ce):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),r=!1)}return c=r,xs(e,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&r?(n.child=Lr(n,e.child,null,l),n.child=Lr(n,null,a,l)):xn(e,n,a,l),n.memoizedState=c.state,e=n.child):e=Ea(e,n,l),e}function _g(e,n,a,r){return Tr(),n.flags|=256,xn(e,n,a,r),n.child}var td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nd(e){return{baseLanes:e,cachePool:s0()}}function id(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ui),e}function vg(e,n,a){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=e!==null&&e.memoizedState===null?!1:(Cn.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(St){if(l?ja(n):Qa(),(e=Qt)?(e=H_(e,yi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=Qm(e),a.return=n,n.child=a,Mn=n,Qt=null)):e=null,e===null)throw ka(n);return nh(e)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Qa(),l=n.mode,c=hu({mode:"hidden",children:c},l),r=br(r,l,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=nd(a),r.childLanes=id(e,g,a),n.memoizedState=td,Bo(null,r)):(ja(n),ad(n,c))}var A=e.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return Ay(e,n,c,g,r,I,A,a)}return l?(Qa(),l=r.fallback,c=n.mode,A=e.child,I=A.sibling,r=_a(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,I!==null?l=_a(I,l):(l=br(l,c,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Bo(null,r),r=n.child,l=e.child.memoizedState,l===null?l=nd(a):(c=l.cachePool,c!==null?(A=hn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=s0(),l={baseLanes:l.baseLanes|a,cachePool:c}),r.memoizedState=l,r.childLanes=id(e,g,a),n.memoizedState=td,Bo(e.child,r)):(ja(n),a=e.child,e=a.sibling,a=_a(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function ad(e,n){return n=hu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function hu(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function pu(e,n,a){return Lr(n,e.child,null,a),e=ad(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ay(e,n,a,r,l,c,g,A){if(a)return n.flags&256?(ja(n),n.flags&=-257,pu(e,n,A)):n.memoizedState!==null?(Qa(),n.child=e.child,n.flags|=128,null):(Qa(),c=l.fallback,g=n.mode,l=hu({mode:"visible",children:l.children},g),c=br(c,g,A,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Lr(n,e.child,null,A),l=n.child,l.memoizedState=nd(A),l.childLanes=id(e,r,A),n.memoizedState=td,Bo(null,l));if(ja(n),nh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Ao({value:l,source:null,stack:null})),pu(e,n,A)}if(mn||Rr(e,n,A,!1),r=(A&e.childLanes)!==0,mn||r){if(Ka.current!==null)return pu(e,n,A);if(r=Kt,r!==null&&(l=ho(r,A),l!==0&&l!==g.retryLane))throw g.retryLane=l,Er(e,l),Jn(r,e,l),$f;return th(c)||Uu(),pu(e,n,A)}return th(c)?(n.flags|=192,n.child=e.child,null):(e=g.treeContext,Qt=Ei(c.nextSibling),Mn=n,St=!0,Va=null,yi=!1,e!==null&&e0(n,e),n=ad(n,l.children),n.flags|=134221824,n)}function xg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ql(e.return,n,a)}function Sg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&tu(a)===null&&(n=e),e=e.sibling}return n}function mu(e,n,a,r,l,c){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=l,g.treeForkCount=c)}function rd(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function sd(e,n,a){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var g=Cn.current;if(n.flags&128)return Oo(n,g),null;var A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,Oo(n,g),l==="backwards"&&e!==null?(rd(e),xn(e,n,r,a),rd(e)):xn(e,n,r,a),r=St?To:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xg(e,a,n);else if(e.tag===19)xg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":a=Sg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,rd(n)),mu(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&tu(e)===null){n.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}mu(n,!0,a,null,c,r);break;case"together":mu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Sg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),mu(n,!1,l,a,c,r)}return n.child}function yg(e,n,a){var r=n.pendingProps;return Xa(n,n.type,r.value),xn(e,n,r.children,a),n.child}function Ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),tr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Rr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=_a(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=_a(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function od(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Yl(e)))}function Ry(e,n,a){switch(n.tag){case 3:W(n,n.stateNode.containerInfo),Xa(n,hn,e.memoizedState.cache),Tr();break;case 27:case 5:Ot(n);break;case 4:W(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ja(n),n.flags|=128,null;r=Rr(e,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?vg(e,n,a):(ja(n),e=Ea(e,n,a),e!==null?e.sibling:null)}ja(n);break;case 19:if(n.flags&128)return sd(e,n,a);if(l=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Rr(e,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return sd(e,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Oo(n,Cn.current),r)break;return null;case 22:return n.lanes=0,dg(e,n,a,n.pendingProps);case 24:Xa(n,hn,e.memoizedState.cache)}return Ea(e,n,a)}function Mg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!od(e,a)&&(n.flags&128)===0)return mn=!1,Ry(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,St&&(n.flags&1048576)!==0&&$m(n,To,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Dr(n.elementType),n.type=e,typeof e=="function")pf(e)?(r=Pr(e,r),n.tag=1,n=gg(null,n,e,r,a)):(n.tag=0,n=ed(null,n,e,r,a));else{if(e!=null){var l=e.$$typeof;if(l===q){n.tag=11,n=ug(null,n,e,r,a);break e}else if(l===K){n.tag=14,n=cg(null,n,e,r,a);break e}else if(l===ne){n.tag=10,n.type=e,n=yg(null,n,a);break e}}throw n=Te(e)||e,Error(s(306,n,""))}}return n;case 0:return ed(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Pr(r,n.pendingProps),gg(e,n,r,l,a);case 3:e:{if(W(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,Rf(e,n),Lo(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Xa(n,hn,r),r!==c.cache&&yf(n,[hn],a,!0),Uo(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=_g(e,n,r,a);break e}else if(r!==l){l=vi(Error(s(424)),n),Ao(l),n=_g(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qt=Ei(e.firstChild),Mn=n,St=!0,Va=null,yi=!0,a=d0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Tr(),r===l){n=Ea(e,n,a);break e}xn(e,n,r,a)}n=n.child}return n;case 26:return xs(e,n),e===null?(a=Y_(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(n.stateNode=A_(n.type,n.pendingProps,Pt.current,n)):n.memoizedState=Y_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ot(n),e===null&&St&&(r=n.stateNode=k_(n.type,n.pendingProps,Pt.current),Mn=n,yi=!0,l=Qt,rr(n.type)?(ih=l,Qt=Ei(r.firstChild)):Qt=l),xn(e,n,n.pendingProps.children,a),xs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&St&&((l=r=Qt)&&(r=yM(r,n.type,n.pendingProps,yi),r!==null?(n.stateNode=r,Mn=n,Qt=Ei(r.firstChild),yi=!1,l=!0):l=!1),l||ka(n)),Ot(n),l=n.type,c=n.pendingProps,g=e!==null?e.memoizedProps:null,r=c.children,Zd(l,c)?r=null:g!==null&&Zd(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=Pf(e,n,gy,null,null,a),zs._currentValue=l),xs(e,n),xn(e,n,r,a),n.child;case 6:return e===null&&St&&((e=a=Qt)&&(a=MM(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Mn=n,Qt=null,e=!0):e=!1),e||ka(n)),null;case 13:return vg(e,n,a);case 4:return W(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Lr(n,null,r,a):xn(e,n,r,a),n.child;case 11:return ug(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,xs(e,n),xn(e,n,r,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return yg(e,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Cr(n),l=An(l),r=r(l),n.flags|=1,xn(e,n,r,a),n.child;case 14:return cg(e,n,n.type,n.pendingProps,a);case 15:return fg(e,n,n.type,n.pendingProps,a);case 19:return sd(e,n,a);case 31:return Ty(e,n,a);case 22:return dg(e,n,a,n.pendingProps);case 24:return Cr(n),r=An(hn),e===null?(l=bf(),l===null&&(l=Kt,c=Mf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:r,cache:l},Af(n),Xa(n,hn,l)):((e.lanes&a)!==0&&(Rf(e,n),Lo(n,null,null,a),Uo()),l=e.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Xa(n,hn,r)):(r=c.cache,Xa(n,hn,r),r!==l.cache&&yf(n,[hn],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:St&&Xl(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:xs(e,n),xn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ba(e){e.flags|=4}function ld(e,n,a,r,l){var c;if((c=(e.mode&32)!==0)&&(c=a===null?Q_(n,r):Q_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(i_())e.flags|=8192;else throw Ur=Ql,Tf}else e.flags&=-16777217}function Eg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!J_(n))if(i_())e.flags|=8192;else throw Ur=Ql,Tf}function gu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?co():536870912,e.lanes|=n,bs|=n)}function Fo(e,n){if(!St)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function Jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Cy(e,n,a){var r=n.pendingProps;switch(_f(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Sa(hn),nn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ds(n)?ba(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xf())),Jt(n),null;case 26:var l=n.type,c=n.memoizedState;return e===null?(ba(n),c!==null?(Jt(n),Eg(n,c)):(Jt(n),ld(n,l,null,r,a))):c?c!==e.memoizedState?(ba(n),Jt(n),Eg(n,c)):(Jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ba(n),Jt(n),ld(n,l,e,r,a)),null;case 27:if(O(n),a=Pt.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ba(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Jt(n),n.subtreeFlags&=-33554433,null}e=Vt.current,ds(n)?t0(n):(e=k_(l,r,a),n.stateNode=e,ba(n))}return Jt(n),n.subtreeFlags&=-33554433,null;case 5:if(O(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ba(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Jt(n),n.subtreeFlags&=-33554433,null}if(c=Vt.current,ds(n))t0(n);else{var g=jo(Pt.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}c[T]=n,c[H]=r;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;e:switch(Nn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ba(n)}}return Jt(n),n.subtreeFlags&=-33554433,ld(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ba(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Pt.current,ds(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[T]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||M_(e.nodeValue,a)),e||ka(n,!0)}else e=jo(e).createTextNode(r),e[T]=n,n.stateNode=e}return Jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=ds(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[T]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),e=!1}else a=xf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Jt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ds(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[T]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),l=!1}else l=xf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),gu(n,n.updateQueue),Jt(n),null);case 4:return nn(),e===null&&kd(n.stateNode.containerInfo),n.flags|=67108864,Jt(n),null;case 10:return Sa(n.type),Jt(n),null;case 19:if(Lf(n),r=n.memoizedState,r===null)return Jt(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Fo(r,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=tu(e),c!==null){for(n.flags|=128,Fo(r,!1),e=c.updateQueue,n.updateQueue=e,gu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)jm(a,e),a=a.sibling;return Oo(n,Cn.current&1|2),St&&va(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&We()>Cu&&(n.flags|=128,l=!0,Fo(r,!1),n.lanes=4194304)}else{if(!l)if(e=tu(c),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,gu(n,e),Fo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!St)return Jt(n),null}else 2*We()-r.renderingStartTime>Cu&&a!==536870912&&(n.flags|=128,l=!0,Fo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(e=r.last,e!==null?e.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=We(),e.sibling=null,c=Cn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||St?Oo(n,c):(a=c,it(Rn,n),it(Cn,a),On===null&&(On=n)),St&&va(n,r.treeForkCount),e}return Jt(n),null;case 22:case 23:return si(n),Df(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&gu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&tt(Nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Sa(hn),Jt(n),null;case 25:return null;case 30:return n.flags|=33554432,Jt(n),null}throw Error(s(156,n.tag))}function wy(e,n){switch(_f(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Sa(hn),nn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return O(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(s(340));Tr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Tr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Lf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return nn(),null;case 10:return Sa(n.type),null;case 22:case 23:return si(n),Df(),e!==null&&tt(Nr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Sa(hn),null;case 25:return null;default:return null}}function bg(e,n){switch(_f(n),n.tag){case 3:Sa(hn),nn();break;case 26:case 27:case 5:O(n);break;case 4:nn();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:Lf(n);break;case 10:Sa(n.type);break;case 22:case 23:si(n),Df(),e!==null&&tt(Nr);break;case 24:Sa(hn)}}function Ho(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&e)===e){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==l)}}catch(A){Xt(n,n.return,A)}}function Ja(e,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&e)===e){var g=r.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,l=n;var I=a,$=A;try{$()}catch(ce){Xt(l,I,ce)}}}r=r.next}while(r!==c)}}catch(ce){Xt(n,n.return,ce)}}function Tg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{p0(n,a)}catch(r){Xt(e,e.return,r)}}}function Ag(e,n,a){a.props=Pr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Xt(e,n,r)}}function Zi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var l=e.stateNode,c=ma(e.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=L_(c)),r=l.ref;break;case 7:if(e.stateNode===null){var g=new fi(e);v(e.child,!1,xM,g,void 0,void 0),e.stateNode=g}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(A){Xt(e,n,A)}}function wn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){Xt(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Xt(e,n,l)}else a.current=null}function _u(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)F_(e.stateNode,n[a])}function Rg(e){for(var n=e.return;n!==null&&(cd(n)&&F_(e.stateNode,n.stateNode),!ud(n));)n=n.return}function Go(e){for(var n=e.return;n!==null&&(cd(n)&&SM(e.stateNode,n.stateNode),!ud(n));)n=n.return}function ud(e){return e.tag===5||e.tag===3||e.tag===27}function cd(e){return e&&e.tag===7&&e.stateNode!==null}function fd(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){Xt(e,e.return,l)}}function dd(e,n,a){try{var r=e.stateNode;tM(r,e.type,a,n),r[H]=n}catch(l){Xt(e,e.return,l)}}function Cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rr(e.type)||e.tag===4}function hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pd(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),_u(e,r),xt=!0;else if(l!==4&&(l===27&&(_u(e,r),r=null,rr(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(pd(e,n,a,r),e=e.sibling;e!==null;)pd(e,n,a,r),e=e.sibling}function vu(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?a.insertBefore(l,n):a.appendChild(l),_u(e,r),xt=!0;else if(l!==4&&(l===27&&(_u(e,r),r=null,rr(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(vu(e,n,a,r),e=e.sibling;e!==null;)vu(e,n,a,r),e=e.sibling}function wg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Nn(n,r,a),n[T]=e,n[H]=a}catch(c){Xt(e,e.return,c)}}var xu=!1,oi=null;function Ng(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(xu=!0)}var Ki=null;function Dg(){var e=Ki;return Ki=null,e}var Kn=0;function Ss(e,n,a,r,l){return Kn=0,Ug(e.child,n,a,r,l)}function Ug(e,n,a,r,l){for(var c=!1;e!==null;){if(e.tag===5){var g=e.stateNode;if(r!==null){var A=Qd(g);r.push(A),A.view&&(c=!0)}else c||Qd(g).view&&(c=!0);xu=!0,D_(g,Kn===0?n:n+"_"+Kn,a),Kn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Ug(e.child,n,a,r,l)&&(c=!0));e=e.sibling}return c}function ji(e,n){for(;e!==null;)e.tag===5?U_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ji(e.child,n)),e=e.sibling}function Su(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Su(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ga(n.default,n.share),n!=="none"&&(Ss(e,a,n,null,!1)||ji(e.child,!1))}e=e.sibling}}function md(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,l=ma(r,a),c=ga(r.default,a.paired?r.share:r.enter);c!=="none"?Ss(e,l,c,null,!1)?(Su(e),a.paired||n||Cs(e,r.onEnter)):ji(e.child,!1):Su(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)md(e,n),e=e.sibling;else Su(e)}function gd(e){if(oi!==null&&oi.size!==0){var n=oi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=ga(a.default,a.share);if(c!=="none"&&(Ss(e,r,c,null,!1)?(c=e.stateNode,l.paired=c,c.paired=l,Cs(e,a.onShare)):ji(e.child,!1)),n.delete(r),n.size===0)break}}}gd(e)}e=e.sibling}}}function _d(e){if(e.tag===30){var n=e.memoizedProps,a=ma(n,e.stateNode),r=oi!==null?oi.get(a):void 0,l=ga(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(Ss(e,a,l,null,!1)?r!==void 0?(l=e.stateNode,r.paired=l,l.paired=r,oi.delete(a),Cs(e,n.onShare)):Cs(e,n.onExit):ji(e.child,!1)),oi!==null&&gd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_d(e),e=e.sibling;else oi!==null&&gd(e)}function Lg(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ma(n,e.stateNode);n=ga(n.default,n.update),e.flags&=-5,n!=="none"&&Ss(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Lg(e);e=e.sibling}}function vd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ji(e.child,!1))}vd(e)}e=e.sibling}}function yu(e){if(e.tag===30)e.stateNode.paired=null,ji(e.child,!1),vd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)yu(e),e=e.sibling;else vd(e)}function Og(e){for(e=e.child;e!==null;)e.tag===30?ji(e.child,!1):(e.subtreeFlags&33554432)!==0&&Og(e),e=e.sibling}function xd(e,n,a,r,l,c,g){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(c!==null&&Kn<c.length){var $=c[Kn],ce=Qd(I);($.view||ce.view)&&(A=!0);var ye;if(ye=(e.flags&4)===0)if(ce.clip)ye=!0;else{ye=$.rect;var Z=ce.rect;ye=ye.y!==Z.y||ye.x!==Z.x||ye.height!==Z.height||ye.width!==Z.width}ye&&(e.flags|=4),ce.abs?ce=!$.abs:($=$.rect,ce=ce.rect,ce=$.height!==ce.height||$.width!==ce.width),ce&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&D_(I,Kn===0?a:a+"_"+Kn,l),A&&(e.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(I,Kn===0?r:r+"_"+Kn,n.memoizedProps)),Kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?e.flags|=n.flags&32:xd(e,n.child,a,r,l,c,g)&&(A=!0));n=n.sibling}return A}function Pg(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,l=ma(a,r),c=ga(a.default,a.update),g;g=e.memoizedState,e.memoizedState=null,r=e;var A=e.child;Kn=0,l=xd(r,A,l,l,c,g,!1),(e.flags&4)!==0&&l&&Cs(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Pg(e);e=e.sibling}}var En=!1,Ht=!1,Qi=!1,Sd=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,bn=null,Ji=!1,Vo=!1,Mu=!1,yd=!1;function Ny(e,n,a){if(e=e.containerInfo,qd=Bs,e=Hm(e),of(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break e}var A=0,I=-1,$=-1,ce=0,ye=0,Z=e,oe=null;t:for(;;){for(var Pe;Z!==r||c!==0&&Z.nodeType!==3||(I=A+c),Z!==g||l!==0&&Z.nodeType!==3||($=A+l),Z.nodeType===3&&(A+=Z.nodeValue.length),(Pe=Z.firstChild)!==null;)oe=Z,Z=Pe;for(;;){if(Z===e)break t;if(oe===r&&++ce===c&&(I=A),oe===g&&++ye===l&&($=A),(Pe=Z.nextSibling)!==null)break;Z=oe,oe=Z.parentNode}Z=Pe}r=I===-1||$===-1?null:{start:I,end:$}}else r=null}r=r||{start:0,end:0}}else r=null;for(Yd={focusedElem:e,selectionRange:r},Bs=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(e=bn,a&&(r=e.deletions,r!==null))for(c=0;c<r.length;c++)a&&_d(r[c]);if(e.alternate===null&&(e.flags&2)!==0)a&&Ng(e),Eu(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&_d(r),Eu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Ng(e),Eu(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,bn=r):(a&&Lg(e),Eu(a))}}oi=null}function Eu(e){for(;bn!==null;){var n=bn,a=e,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var g=Pr(n.type,l);a=c.getSnapshotBeforeUpdate(g,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){Xt(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)eh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":eh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ma(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=ga(l.default,l.update),l!=="none"&&Ss(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function zg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),r&4&&Ho(5,a);break;case 1:if($i(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Xt(a,a.return,g)}else{var l=Pr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Xt(a,a.return,g)}}r&64&&Tg(a),r&512&&Zi(a,a.return);break;case 3:if($i(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{p0(e,n)}catch(g){Xt(a,a.return,g)}}break;case 27:n===null&&r&4&&wg(a);case 26:case 5:$i(e,a),n===null&&r&4&&fd(a),r&512&&Zi(a,a.return);break;case 12:$i(e,a);break;case 31:$i(e,a),r&4&&Gg(e,a);break;case 13:$i(e,a),r&4&&Vg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vy.bind(null,a),EM(e,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var c=n!==null&&n.memoizedState!==null||Ht;n=En,l=Ht,En=r,(Ht=c)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Li(e,a,r)):$i(e,a),En=n,Ht=l}break;case 30:$i(e,a),r&512&&Zi(a,a.return);break;case 7:r&512&&Zi(a,a.return);default:$i(e,a)}}function Md(e,n){for(e=e.child;e!==null;)Bg(e,n),e=e.sibling}function Bg(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=e.stateNode,c=e.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(I){Xt(e,e.return,I)}Ed(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,xt=!0}catch(I){Xt(e,e.return,I)}break;case 18:try{var A=e.stateNode;n?N_(A,!0):N_(e.stateNode,!1)}catch(I){Xt(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&Md(e,n);break;default:Md(e,n)}}function Ed(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:Bg(a,r);break e;case 22:a.memoizedState===null&&Ed(a,r);break e;default:Ed(a,r)}}e=e.sibling}}function Fg(e){var n=e.alternate;n!==null&&(e.alternate=null,Fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&je(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,jn=!1;function Di(e,n,a){for(a=a.child;a!==null;)Hg(e,n,a),a=a.sibling}function Hg(e,n,a){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:Ht||wn(a,n),Di(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ht&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ht||wn(a,n),Go(a);var r=tn,l=jn;rr(a.type)&&(tn=a.stateNode,jn=!1),Di(e,n,a),X_(a.stateNode,a.type,a.memoizedProps),tn=r,jn=l;break;case 5:Ht||wn(a,n),Go(a);case 6:if(a.tag===6&&Go(a),r=tn,l=jn,tn=null,Di(e,n,a),tn=r,jn=l,tn!==null)if(jn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),xt=!0}catch(c){Xt(a,n,c)}else try{tn.removeChild(a.stateNode),xt=!0}catch(c){Xt(a,n,c)}break;case 18:tn!==null&&(jn?(e=tn,w_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fs(e)):w_(tn,a.stateNode));break;case 4:r=tn,l=jn,tn=a.stateNode.containerInfo,jn=!0,Di(e,n,a),tn=r,jn=l;break;case 0:case 11:case 14:case 15:Ja(2,a,n),Ht||Ja(4,a,n),Di(e,n,a);break;case 1:Ht||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Ag(a,n,r)),Di(e,n,a);break;case 21:Di(e,n,a);break;case 22:Ht=(r=Ht)||a.memoizedState!==null,Di(e,n,a),Ht=r;break;case 30:wn(a,n),Di(e,n,a);break;case 7:Ht||wn(a,n),Di(e,n,a);break;default:Di(e,n,a)}}function Gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fs(e)}catch(a){Xt(n,n.return,a)}}}function Vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fs(e)}catch(a){Xt(n,n.return,a)}}function Dy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ig),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ig),n;default:throw Error(s(435,e.tag))}}function bu(e,n){var a=Dy(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=ky.bind(null,e,r);r.then(l,l)}})}function kn(e,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],g=e,A=n,I=A;e:for(;I!==null;){switch(I.tag){case 27:if(rr(I.type)){tn=I.stateNode,jn=!1;break e}break;case 5:tn=I.stateNode,jn=!1;break e;case 3:case 4:tn=I.stateNode.containerInfo,jn=!0;break e}I=I.return}if(tn===null)throw Error(s(160));Hg(g,A,c),tn=null,jn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)kg(n,e,a),n=n.sibling}var Ui=null;function kg(e,n,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var g=r[c];g.ref.impl=g.nextImpl}kn(n,e,a),Xn(e),l&4&&(Ja(3,e,e.return),Ho(3,e),Ja(5,e,e.return));break;case 1:kn(n,e,a),Xn(e),l&512&&(Ht||r===null||wn(r,r.return)),l&64&&En&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ui,kn(n,e,a),Xn(e),l&512&&(Ht||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(En)e.stateNode=A_(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,l=c.ownerDocument||c;t:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Oe]||r[T]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Nn(r,n,a),r[T]=e,vt(r),n=r;break e;case"link":if(c=j_("link","href",l).get(n+(a.href||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(g,1);break t}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;case"meta":if(c=j_("meta","content",l).get(n+(a.content||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(g,1);break t}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[T]=e,vt(r),n=r}e.stateNode=n}else En||oh(c,e.type,e.stateNode);else e.stateNode=K_(c,a,e.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||Ht||n.parentNode.removeChild(n)):l.count--,a===null?En||oh(c,e.type,e.stateNode):K_(c,a,e.memoizedProps)):a===null&&e.stateNode!==null&&dd(e,e.memoizedProps,r.memoizedProps);break;case 27:kn(n,e,a),Xn(e),l&512&&(Ht||r===null||wn(r,r.return)),r!==null&&l&4&&dd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(c=Qi,Qi=!1,kn(n,e,a),Qi=c,Xn(e),l&512&&(Ht||r===null||wn(r,r.return)),e.flags&32){n=e.stateNode;try{ns(n,""),xt=!0}catch(ce){Xt(e,e.return,ce)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,dd(e,n,r!==null?r.memoizedProps:n)),l&1024&&(Sd=!0);break;case 6:if(kn(n,e,a),Xn(e),l&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,xt=!0}catch(ce){Xt(e,e.return,ce)}}break;case 3:if(xt=!1,Fu=null,c=Ui,Ui=Qo(n.containerInfo),kn(n,e,a),Ui=c,Xn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Fs(n.containerInfo)}catch(ce){Xt(e,e.return,ce)}Sd&&(Sd=!1,Xg(e)),xt=!1;break;case 4:l=Qi,Qi=En,r=zt(),c=Ui,Ui=Qo(e.stateNode.containerInfo),kn(n,e,a),Xn(e),Ui=c,xt&&Vo&&(Mu=!0),xt=r,Qi=l;break;case 12:kn(n,e,a),Xn(e);break;case 31:kn(n,e,a),Xn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,bu(e,n)));break;case 13:kn(n,e,a),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ru=We()),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,bu(e,n)));break;case 22:c=e.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var A=En,I=Ht,$=Qi;En=A||c,Qi=$||c,Ht=I||g,kn(n,e,a),Ht=I,Qi=$,En=A,Xn(e),l&8192&&(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||g||En||Ht||(n=g||Ht,a=En,r=Ht,En=c||En,Ht=n,$a(e,2),En=a,Ht=r),!c&&Qi||Md(e,c)),l&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,bu(e,a))));break;case 19:kn(n,e,a),Xn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,bu(e,n)));break;case 30:l&512&&(Ht||r===null||wn(r,r.return)),l=zt(),c=Vo,g=(a&335544064)===a,A=e.memoizedProps,Vo=g&&ga(A.default,A.update)!=="none",kn(n,e,a),Xn(e),g&&r!==null&&xt&&(e.flags|=4),Vo=c,xt=l;break;case 21:break;case 7:l&512&&(Ht||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:kn(n,e,a),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Cg(r)){a=r;break}r=r.return}r=null;for(var l=e.return;l!==null;){if(cd(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(ud(l))break;l=l.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,I=hd(e);vu(e,I,A,g);break;case 5:var $=a.stateNode;a.flags&32&&(ns($,""),a.flags&=-33);var ce=hd(e);vu(e,ce,$,g);break;case 3:case 4:var ye=a.stateNode.containerInfo,Z=hd(e);pd(e,Z,ye,g);break;default:throw Error(s(161))}}catch(oe){Xt(e,e.return,oe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Xg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Bs=!0,n.reset(),Bs=!1),e=e.sibling}}function ys(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Wg(n,e),n=n.sibling;else Pg(n)}function Wg(e,n){var a=e.alternate;if(a===null)md(e,!1);else switch(e.tag){case 3:if(yd=Ji=!1,Dg(),ys(n,e),!Ji&&!Mu){if(e=Ki,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var l=e[r+1];U_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),yd=!0}Ki=null;break;case 5:ys(n,e);break;case 4:r=Ji,Ji=!1,ys(n,e),Ji&&(Mu=!0),Ji=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?md(e,!1):ys(n,e));break;case 30:r=Ji,l=Dg(),Ji=!1,ys(n,e),Ji&&(e.flags|=4);var c=e.memoizedProps,g=e.stateNode;n=ma(c,g),g=ma(a.memoizedProps,g);var A=ga(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=e.child,Kn=0,n=xd(e,a,n,g,A,c,!0),Kn!==(c===null?0:c.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Cs(e,e.memoizedProps.onUpdate),Ki=l):l!==null&&(l.push.apply(l,Ki),Ki=l),Ji=(e.flags&32)!==0?!0:r;break;default:ys(n,e)}}function $i(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zg(e,n.alternate,n),n=n.sibling}function $a(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ja(4,a,a.return),$a(a,r);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Ag(a,a.return,l),$a(a,r);break;case 27:(r&2)!==0&&X_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Go(a),$a(a,r);break;case 6:Go(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Ht||l.parentNode.removeChild(l),$a(a,r);break;case 22:a.memoizedState===null&&$a(a,r);break;case 30:wn(a,a.return),$a(a,r);break;case 7:wn(a,a.return);default:$a(a,r)}e=e.sibling}}function Li(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=e,c=n,g=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Li(l,c,a),Ho(4,c);break;case 1:if(Li(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ce){Xt(r,r.return,ce)}if(r=c,l=r.updateQueue,l!==null){var I=r.stateNode;try{var $=l.shared.hiddenCallbacks;if($!==null)for(l.shared.hiddenCallbacks=null,l=0;l<$.length;l++)h0($[l],I)}catch(ce){Xt(r,r.return,ce)}}A&&g&64&&Tg(c),Zi(c,c.return);break;case 27:(a&2)!==0&&wg(c);case 5:c.tag!==5&&c.tag!==27||Rg(c),Li(l,c,a),A&&r===null&&g&4&&fd(c),Zi(c,c.return);break;case 6:Rg(c);break;case 26:I=c.stateNode,c.memoizedState!==null||I===null||En||oh(Qo(I.ownerDocument),c.type,I),Li(l,c,a),A&&r===null&&g&4&&fd(c),Zi(c,c.return);break;case 12:Li(l,c,a);break;case 31:Li(l,c,a),A&&g&4&&Gg(l,c);break;case 13:Li(l,c,a),A&&g&4&&Vg(l,c);break;case 22:c.memoizedState===null&&Li(l,c,a),Zi(c,c.return);break;case 30:Li(l,c,a),Zi(c,c.return);break;case 7:Zi(c,c.return);default:Li(l,c,a)}n=n.sibling}}function bd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ro(a))}function Td(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ro(e))}function Mi(e,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)qg(e,n,a,r),n=n.sibling;else l&&Og(n)}function qg(e,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&yu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,r),c&2048&&Ho(9,n);break;case 1:Mi(e,n,a,r);break;case 3:Mi(e,n,a,r),l&&yd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Ro(c)));break;case 12:if(c&2048){Mi(e,n,a,r),c=n.stateNode;try{var g=n.memoizedProps,A=g.id,I=g.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch($){Xt(n,n.return,$)}}else Mi(e,n,a,r);break;case 31:Mi(e,n,a,r);break;case 13:Mi(e,n,a,r);break;case 23:break;case 22:g=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&yu(A),g._visibility&2?Mi(e,n,a,r):ko(e,n)):(l&&A!==null&&A.memoizedState!==null&&yu(n),g._visibility&2?Mi(e,n,a,r):(g._visibility|=2,Ms(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&bd(A,n);break;case 24:Mi(e,n,a,r),c&2048&&Td(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(ji(c.child,!0),ji(n.child,!0))),Mi(e,n,a,r);break;default:Mi(e,n,a,r)}}function Ms(e,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,g=n,A=a,I=r,$=g.flags;switch(g.tag){case 0:case 11:case 15:Ms(c,g,A,I,l),Ho(8,g);break;case 23:break;case 22:var ce=g.stateNode;g.memoizedState!==null?ce._visibility&2?Ms(c,g,A,I,l):ko(c,g):(ce._visibility|=2,Ms(c,g,A,I,l)),l&&$&2048&&bd(g.alternate,g);break;case 24:Ms(c,g,A,I,l),l&&$&2048&&Td(g.alternate,g);break;default:Ms(c,g,A,I,l)}n=n.sibling}}function ko(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,l=r.flags;switch(r.tag){case 22:ko(a,r),l&2048&&bd(r.alternate,r);break;case 24:ko(a,r),l&2048&&Td(r.alternate,r);break;default:ko(a,r)}n=n.sibling}}var Ir=8192;function zr(e,n,a){if(e.subtreeFlags&Ir)for(e=e.child;e!==null;)Yg(e,n,a),e=e.sibling}function Yg(e,n,a){switch(e.tag){case 26:zr(e,n,a),e.flags&Ir&&(e.memoizedState!==null?zM(a,Ui,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&ev(a,e)));break;case 5:zr(e,n,a),e.flags&Ir&&(e=e.stateNode,(n&335544128)===n&&ev(a,e));break;case 3:case 4:var r=Ui;Ui=Qo(e.stateNode.containerInfo),zr(e,n,a),Ui=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ir,Ir=16777216,zr(e,n,a),Ir=r):zr(e,n,a));break;case 30:if((e.flags&Ir)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var l=e.stateNode;l.paired=null,oi===null&&(oi=new Map),oi.set(r,l)}zr(e,n,a);break;default:zr(e,n,a)}}function Zg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,jg(r,e)}Zg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kg(e),e=e.sibling}function Kg(e){switch(e.tag){case 0:case 11:case 15:Xo(e),e.flags&2048&&Ja(9,e,e.return);break;case 3:Xo(e);break;case 12:Xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Tu(e)):Xo(e);break;default:Xo(e)}}function Tu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,jg(r,e)}Zg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),Tu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tu(n));break;default:Tu(n)}e=e.sibling}}function jg(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ro(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else e:for(a=e;bn!==null;){r=bn;var l=r.sibling,c=r.return;if(Fg(r),r===a){bn=null;break e}if(l!==null){l.return=c,bn=l;break e}bn=c}}}var Uy={getCacheForType:function(e){var n=An(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(hn).controller.signal}},Ly=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Kt=null,Et=null,At=0,kt=0,li=null,er=!1,Es=!1,Ad=!1,Ta=0,ln=0,tr=0,Br=0,Au=0,ui=0,bs=0,Wo=null,Qn=null,Rd=!1,Ru=0,Qg=0,Cu=1/0,wu=null,nr=null,an=0,Oi=null,Fr=null,ea=0,Cd=0,wd=null,Jg=null,Ts=null,As=null,Rs=null,qo=0,Nu=null;function ci(){return(Bt&2)!==0&&At!==0?At&-At:ve.T!==null?Fd():Cl()}function $g(){if(ui===0)if((At&536870912)===0||St){var e=vr;vr<<=1,(vr&3932160)===0&&(vr=262144),ui=e}else ui=536870912;return e=Rn.current,e!==null&&(e.flags|=32),ui}function Cs(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=L_(ma(e.memoizedProps,a))),As===null&&(As=[]),As.push(n.bind(null,r))}}function Jn(e,n,a){(e===Kt&&(kt===2||kt===9)||e.cancelPendingCommit!==null)&&(ws(e,0),ir(e,At,ui,!1)),ki(e,a),((Bt&2)===0||e!==Kt)&&(e===Kt&&((Bt&2)===0&&(Br|=a),ln===4&&ir(e,At,ui,!1)),ta(e))}function e_(e,n,a){if((Bt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ba(e,n),l=r?Iy(e,n):Dd(e,n,!0),c=r;do{if(l===0){Es&&!r&&ir(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!Oy(a)){l=Dd(e,n,!1),c=!1;continue}if(l===2){if(c=n,e.errorRecoveryDisabledLanes&c)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var A=e;l=Wo;var I=A.current.memoizedState.isDehydrated;if(I&&(ws(A,g).flags|=256),g=Dd(A,g,!1),g!==2&&g!==6){if(Ad&&!I){A.errorRecoveryDisabledLanes|=c,Br|=c,l=4;break e}c=Qn,Qn=l,c!==null&&(Qn===null?Qn=c:Qn.push.apply(Qn,c))}l=g}if(c=!1,l!==2)continue}}if(l===1){ws(e,0),ir(e,n,0,!0);break}e:{switch(r=e,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ir(r,n,ui,!er);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Ru+300-We(),10<l)){if(ir(r,n,ui,!er),xr(r,0,!0)!==0)break e;ea=n,r.timeoutHandle=jd(t_.bind(null,r,a,Qn,wu,Rd,n,ui,Br,bs,er,c,"Throttled",-0,0),l);break e}t_(r,a,Qn,wu,Rd,n,ui,Br,bs,er,c,null,-0,0)}}break}while(!0);ta(e)}function t_(e,n,a,r,l,c,g,A,I,$,ce,ye,Z,oe){e.timeoutHandle=-1;var Pe=n.subtreeFlags,Qe=(c&335544064)===c;if(ye=null,(Qe||Pe&8192||(Pe&16785408)===16785408)&&(ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},oi=null,Yg(n,c,ye),Qe&&(Pe=ye,Qe=e.containerInfo,Qe=(Qe.nodeType===9?Qe:Qe.ownerDocument).__reactViewTransition,Qe!=null&&(Pe.count++,Pe.waitingForViewTransition=!0,Pe=el.bind(Pe),Qe.finished.then(Pe,Pe))),Pe=(c&62914560)===c?Ru-We():(c&4194048)===c?Qg-We():0,Pe=BM(ye,Pe),Pe!==null)){ea=c,e.cancelPendingCommit=Pe(u_.bind(null,e,n,c,a,r,l,g,A,I,$,ce,ye,null,Z,oe)),ir(e,c,g,!$);return}u_(e,n,c,a,r,l,g,A,I,$,ce,ye)}function Oy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!ri(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ir(e,n,a,r){n=Vi(e,n),n&=~Au,n&=~Br,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var c=31-ut(l),g=1<<c;r[c]=-1,l&=~g}a!==0&&Sr(e,a,n)}function Du(){return(Bt&6)===0?(Yo(0),!1):!0}function Nd(){if(Et!==null){if(kt===0)var e=Et.return;else e=Et,xa=Ar=null,Bf(e),ms=null,No=0,e=Et;for(;e!==null;)bg(e.alternate,e),e=e.return;Et=null}}function ws(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,aM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Nd(),Kt=e,Et=a=_a(e.current,null),At=n,kt=0,li=null,er=!1,Es=Ba(e,n),Ad=!1,bs=ui=Au=Br=tr=ln=0,Qn=Wo=null,Rd=!1,Ta=Vi(e,n),Fl(),a}function n_(e,n){dt=null,ve.H=cu,n===ps||n===jl?(n=u0(),kt=3):n===Tf?(n=u0(),kt=4):kt=n===$f?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,Et===null&&(ln=1,fu(e,vi(n,e.current)))}function i_(){var e=Rn.current;return e===null?!0:(At&4194048)===At?On===null:(At&62914560)===At||(At&536870912)!==0?e===On:!1}function a_(){var e=ve.H;return ve.H=cu,e===null?cu:e}function r_(){var e=ve.A;return ve.A=Uy,e}function Uu(){ln=4,er||(At&4194048)!==At&&Rn.current!==null||(Es=!0),(tr&134217727)===0&&(Br&134217727)===0||Kt===null||ir(Kt,At,ui,!1)}function Dd(e,n,a){var r=Bt;Bt|=2;var l=a_(),c=r_();(Kt!==e||At!==n)&&(wu=null,ws(e,n)),n=!1;var g=ln;e:do try{if(kt!==0&&Et!==null){var A=Et,I=li;switch(kt){case 8:Nd(),g=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var $=kt;if(kt=0,li=null,Ns(e,A,I,$),a&&Es){g=0;break e}break;default:$=kt,kt=0,li=null,Ns(e,A,I,$)}}Py(),g=ln;break}catch(ce){n_(e,ce)}while(!0);return n&&e.shellSuspendCounter++,xa=Ar=null,Bt=r,ve.H=l,ve.A=c,Et===null&&(Kt=null,At=0,Fl()),g}function Py(){for(;Et!==null;)s_(Et)}function Iy(e,n){var a=Bt;Bt|=2;var r=a_(),l=r_();Kt!==e||At!==n?(wu=null,Cu=We()+500,ws(e,n)):Es=Ba(e,n);e:do try{if(kt!==0&&Et!==null){n=Et;var c=li;t:switch(kt){case 1:kt=0,li=null,Ns(e,n,c,1);break;case 2:case 9:if(o0(c)){kt=0,li=null,o_(n);break}n=function(){kt!==2&&kt!==9||Kt!==e||(kt=7),ta(e)},c.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:o0(c)?(kt=0,li=null,o_(n)):(kt=0,li=null,Ns(e,n,c,7));break;case 5:var g=null;switch(Et.tag){case 26:g=Et.memoizedState;case 5:case 27:var A=Et;if(g?J_(g):A.stateNode.complete){kt=0,li=null;var I=A.sibling;if(I!==null)Et=I;else{var $=A.return;$!==null?(Et=$,Lu($)):Et=null}break t}}kt=0,li=null,Ns(e,n,c,5);break;case 6:kt=0,li=null,Ns(e,n,c,6);break;case 8:Nd(),ln=6;break e;default:throw Error(s(462))}}zy();break}catch(ce){n_(e,ce)}while(!0);return xa=Ar=null,ve.H=r,ve.A=l,Bt=a,Et!==null?0:(Kt=null,At=0,Fl(),ln)}function zy(){for(;Et!==null&&!ze();)s_(Et)}function s_(e){var n=Mg(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,n===null?Lu(e):Et=n}function o_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=mg(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=mg(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:Bf(n);var r=n;r===Mn&&(St?(Wl(r),r.tag===5&&r.stateNode!=null&&(Qt=r.stateNode)):(Wl(r),St=!0));default:bg(a,n),n=Et=jm(n,Ta),n=Mg(a,n,Ta)}e.memoizedProps=e.pendingProps,n===null?Lu(e):Et=n}function Ns(e,n,a,r){xa=Ar=null,Bf(n),ms=null,No=0;var l=n.return;try{if(by(e,l,n,a,At)){ln=1,fu(e,vi(a,e.current)),Et=null;return}}catch(c){if(l!==null)throw Et=l,c;ln=1,fu(e,vi(a,e.current)),Et=null;return}n.flags&32768?(St||r===1?e=!0:Es||(At&536870912)!==0?e=!1:(er=e=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),l_(n,e)):Lu(n)}function Lu(e){var n=e;do{if((n.flags&32768)!==0){l_(n,er);return}e=n.return;var a=Cy(n.alternate,n,Ta);if(a!==null){Et=a;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=e}while(n!==null);ln===0&&(ln=5)}function l_(e,n){do{var a=wy(e.alternate,e);if(a!==null){a.flags&=32767,Et=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Et=e;return}Et=e=a}while(e!==null);ln=6,Et=null}function u_(e,n,a,r,l,c,g,A,I,$,ce,ye){e.cancelPendingCommit=null;do Ou();while(an!==0);if((Bt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Kt&&(Et=Kt=null,At=0),Fr=n,Oi=e,ea=a,wd=l,Jg=r,By(e,n,a,g,A,I,ye)}}function By(e,n,a,r,l,c,g){var A=n.lanes|n.childLanes;if(Cd=A,A|=df,Rl(e,a,A,r,l,c),As=null,(a&335544064)===a?(Rs=dy(e),r=10262):(Rs=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Xy(Ne,function(){return Pd(),null})):(e.callbackNode=null,e.callbackPriority=0),xu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=ve.T,ve.T=null,l=we.p,we.p=2,c=Bt,Bt|=4;try{Ny(e,n,a)}finally{Bt=c,we.p=l,ve.T=r}}an=1,xu?Ts=cM(g,e.containerInfo,Rs,Ud,Ld,Hy,Od,Pd,Fy):(Ud(),Ld(),Od())}function Fy(e){if(an!==0){var n=Oi.onRecoverableError;n(e,{componentStack:null})}}function Hy(){an===3&&(an=0,Wg(Fr,Oi),an=4)}function Ud(){if(an===1){an=0;var e=Oi,n=Fr,a=ea,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=ve.T,ve.T=null;var l=we.p;we.p=2;var c=Bt;Bt|=4;try{Vo=Mu=!1,kg(n,e,a),a=Yd;var g=Hm(e.containerInfo),A=a.focusedElem,I=a.selectionRange;if(g!==A&&A&&A.ownerDocument&&Fm(A.ownerDocument.documentElement,A)){if(I!==null&&of(A)){var $=I.start,ce=I.end;if(ce===void 0&&(ce=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ce,A.value.length);else{var ye=A.ownerDocument||document,Z=ye&&ye.defaultView||window;if(Z.getSelection){var oe=Z.getSelection(),Pe=A.textContent.length,Qe=Math.min(I.start,Pe),ht=I.end===void 0?Qe:Math.min(I.end,Pe);!oe.extend&&Qe>ht&&(g=ht,ht=Qe,Qe=g);var Q=Bm(A,Qe),G=Bm(A,ht);if(Q&&G&&(oe.rangeCount!==1||oe.anchorNode!==Q.node||oe.anchorOffset!==Q.offset||oe.focusNode!==G.node||oe.focusOffset!==G.offset)){var ie=ye.createRange();ie.setStart(Q.node,Q.offset),oe.removeAllRanges(),Qe>ht?(oe.addRange(ie),oe.extend(G.node,G.offset)):(ie.setEnd(G.node,G.offset),oe.addRange(ie))}}}}for(ye=[],oe=A;oe=oe.parentNode;)oe.nodeType===1&&ye.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ye.length;A++){var Se=ye[A];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Bs=!!qd,Yd=qd=null}finally{Bt=c,we.p=l,ve.T=r}}e.current=n,an=2}}function Ld(){if(an===2){an=0;var e=Oi,n=Fr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=ve.T,ve.T=null;var r=we.p;we.p=2;var l=Bt;Bt|=4;try{zg(e,n.alternate,n)}finally{Bt=l,we.p=r,ve.T=a}}an=3}}function Od(){if(an===4||an===3){an=0;var e=Ts;Ts=null,Ie();var n=Oi,a=Fr,r=ea,l=Jg,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?an=5:(an=0,Fr=Oi=null,c_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(nr=null),mo(r),a=a.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Je,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=ve.T,c=we.p,we.p=2,ve.T=null;try{for(var g=n.onRecoverableError,A=0;A<l.length;A++){var I=l[A];g(I.value,{componentStack:I.stack})}}finally{ve.T=a,we.p=c}}if(l=As,g=Rs,Rs=null,l!==null&&(As=null,g===null&&(g=[]),e!==null))for(I=0;I<l.length;I++)a=(0,l[I])(g),a!==void 0&&e.finished.finally(a);(ea&3)!==0&&Ou(),ta(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Nu?qo++:(qo=0,Nu=n):(qo=0,Nu=null),Yo(0)}}function c_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ro(n)))}function Ou(){return Ts!==null&&(Ts.skipTransition(),Ts=null),Ud(),Ld(),Od(),Pd()}function Pd(){if(an!==5)return!1;var e=Oi,n=Cd;Cd=0;var a=mo(ea),r=ve.T,l=we.p;try{we.p=32>a?32:a,ve.T=null,a=wd,wd=null;var c=Oi,g=ea;if(an=0,Fr=Oi=null,ea=0,(Bt&6)!==0)throw Error(s(331));var A=Bt;if(Bt|=4,Kg(c.current),qg(c,c.current,g,a),Bt=A,Yo(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Je,c)}catch{}return!0}finally{we.p=l,ve.T=r,c_(e,n)}}function f_(e,n,a){n=vi(a,n),n=Jf(e.stateNode,n,2),e=Za(e,n,2),e!==null&&(ki(e,2),ta(e))}function Xt(e,n,a){if(e.tag===3)f_(e,e,a);else for(;n!==null;){if(n.tag===3){f_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){e=vi(a,e),a=og(2),r=Za(n,a,2),r!==null&&(lg(a,r,n,e),ki(r,2),ta(r));break}}n=n.return}}function Id(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Ly;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(Ad=!0,l.add(a),e=Gy.bind(null,e,n,a),n.then(e,e))}function Gy(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Kt===e&&(At&a)===a&&((ln===4||ln===3&&(At&62914560)===At&&300>We()-Ru)&&(Bt&2)===0?ws(e,0):Au|=a,bs===At&&(bs=0)),ta(e)}function d_(e,n){n===0&&(n=co()),e=Er(e,n),e!==null&&(ki(e,n),ta(e))}function Vy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),d_(e,a)}function ky(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),d_(e,a)}function Xy(e,n){return De(e,n)}var Ds=null,Us=null,zd=!1,Pu=!1,Bd=!1,ar=0;function ta(e){e!==Us&&e.next===null&&(Us===null?Ds=Us=e:Us=Us.next=e),Pu=!0,zd||(zd=!0,qy())}function Yo(e,n){if(!Bd&&Pu){Bd=!0;do for(var a=!1,r=Ds;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var g=r.suspendedLanes,A=r.pingedLanes;c=(1<<31-ut(42|e)+1)-1,c&=l&~(g&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,g_(r,c))}else c=At,c=xr(r,r===Kt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ba(r,c)||(a=!0,g_(r,c));r=r.next}while(a);Bd=!1}}function Wy(){h_()}function h_(){Pu=zd=!1;var e=0;ar!==0&&iM()&&(e=ar);for(var n=We(),a=null,r=Ds;r!==null;){var l=r.next,c=p_(r,n);c===0?(r.next=null,a===null?Ds=l:a.next=l,l===null&&(Us=a)):(a=r,(e!==0||(c&3)!==0)&&(Pu=!0)),r=l}an!==0&&an!==5||Yo(e),ar!==0&&(ar=0)}function p_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var g=31-ut(c),A=1<<g,I=l[g];I===-1?((A&a)===0||(A&r)!==0)&&(l[g]=uo(A,n)):I<=n&&(e.expiredLanes|=A),c&=~A}if(n=Kt,a=At,a=xr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(kt===2||kt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&$e(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ba(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&$e(r),mo(a)){case 2:case 8:a=X;break;case 32:a=Ne;break;case 268435456:a=Le;break;default:a=Ne}return r=m_.bind(null,e),a=De(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&$e(r),e.callbackPriority=2,e.callbackNode=null,2}function m_(e,n){if(an!==0&&an!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ou()&&e.callbackNode!==a)return null;var r=At;return r=xr(e,e===Kt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(e_(e,r,n),p_(e,We()),e.callbackNode!=null&&e.callbackNode===a?m_.bind(null,e):null)}function g_(e,n){if(Ou())return null;e_(e,n,!0)}function qy(){rM(function(){(Bt&6)!==0?De(lt,Wy):h_()})}function Fd(){if(ar===0){var e=wr;e===0&&(e=$r,$r<<=1,($r&261888)===0&&($r=256)),ar=e}return ar}function __(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dl(e)}function Yy(e,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var c=__((l[H]||null).action),g=r.submitter;g&&(n=(n=g[H]||null)?__(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var A=new Pl("action","action",null,r,l);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ar!==0){var I=new FormData(l,g);Yf(a,{pending:!0,data:I,method:l.method,action:c},null,I)}}else typeof c=="function"&&(A.preventDefault(),I=new FormData(l,g),Yf(a,{pending:!0,data:I,method:l.method,action:c},c,I))},currentTarget:l}]})}}for(var Hd=0;Hd<ff.length;Hd++){var Gd=ff[Hd],Zy=Gd.toLowerCase(),Ky=Gd[0].toUpperCase()+Gd.slice(1);Ni(Zy,"on"+Ky)}Ni(km,"onAnimationEnd"),Ni(Xm,"onAnimationIteration"),Ni(Wm,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(ay,"onTransitionRun"),Ni(ry,"onTransitionStart"),Ni(sy,"onTransitionCancel"),Ni(qm,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),He("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),He("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),He("onBeforeInput",["compositionend","keypress","textInput","paste"]),He("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),He("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),He("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function v_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],l=r.event;r=r.listeners;e:{var c=void 0;if(n)for(var g=r.length-1;0<=g;g--){var A=r[g],I=A.instance,$=A.currentTarget;if(A=A.listener,I!==c&&l.isPropagationStopped())break e;c=A,l.currentTarget=$;try{c(l)}catch(ce){Bl(ce)}l.currentTarget=null,c=I}else for(g=0;g<r.length;g++){if(A=r[g],I=A.instance,$=A.currentTarget,A=A.listener,I!==c&&l.isPropagationStopped())break e;c=A,l.currentTarget=$;try{c(l)}catch(ce){Bl(ce)}l.currentTarget=null,c=I}}}}function bt(e,n){var a=n[re];a===void 0&&(a=n[re]=new Set);var r=e+"__bubble";a.has(r)||(x_(n,e,2,!1),a.add(r))}function Vd(e,n,a){var r=0;n&&(r|=4),x_(a,e,r,n)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function kd(e){if(!e[Iu]){e[Iu]=!0,Ft.forEach(function(a){a!=="selectionchange"&&(jy.has(a)||Vd(a,!1,e),Vd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Iu]||(n[Iu]=!0,Vd("selectionchange",!1,n))}}function x_(e,n,a,r){switch(lv(n)){case 2:var l=VM;break;case 8:l=kM;break;default:l=uh}a=l.bind(null,n,a,e),l=void 0,!jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,a,{capture:!0,passive:l}):e.addEventListener(n,a,!0):l!==void 0?e.addEventListener(n,a,{passive:l}):e.addEventListener(n,a,!1)}function Xd(e,n,a,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===l)break;if(g===4)for(g=r.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;A!==null;){if(g=st(A),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){r=c=g;continue e}A=A.parentNode}}r=r.return}xm(function(){var $=c,ce=Zc(a),ye=[];e:{var Z=Ym.get(e);if(Z!==void 0){var oe=Pl,Pe=e;switch(e){case"keypress":if(Ll(a)===0)break e;case"keydown":case"keyup":oe=OS;break;case"focusin":Pe="focus",oe=ef;break;case"focusout":Pe="blur",oe=ef;break;case"beforeblur":case"afterblur":oe=ef;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=MS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=FS;break;case km:case Xm:case Wm:oe=TS;break;case qm:oe=GS;break;case"scroll":case"scrollend":oe=SS;break;case"wheel":oe=kS;break;case"copy":case"cut":case"paste":oe=RS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=bm;break;case"submit":oe=zS;break;case"toggle":case"beforetoggle":oe=WS}var Qe=(n&4)!==0,ht=!Qe&&(e==="scroll"||e==="scrollend"),Q=Qe?Z!==null?Z+"Capture":null:Z;Qe=[];for(var G=$,ie;G!==null;){var Se=G;if(ie=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ie===null||Q===null||(Se=go(G,Q),Se!=null&&Qe.push(Ko(G,Se,ie))),ht)break;G=G.return}0<Qe.length&&(Z=new oe(Z,Pe,null,a,ce),ye.push({event:Z,listeners:Qe}))}}if((n&7)===0){e:{if(oe=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",oe&&a!==Yc&&(Pe=a.relatedTarget||a.fromElement)&&(st(Pe)||Pe[de]))break e;(Z||oe)&&(Pe=ce.window===ce?ce:(oe=ce.ownerDocument)?oe.defaultView||oe.parentWindow:window,Z?(oe=a.relatedTarget||a.toElement,Z=$,oe=oe?st(oe):null,oe!==null&&(ht=f(oe),Qe=oe.tag,oe!==ht||Qe!==5&&Qe!==27&&Qe!==6)&&(oe=null)):(Z=null,oe=$),Z!==oe&&(Qe=Mm,Se="onMouseLeave",Q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=bm,Se="onPointerLeave",Q="onPointerEnter",G="pointer"),ht=Z==null?Pe:Ye(Z),ie=oe==null?Pe:Ye(oe),Pe=new Qe(Se,G+"leave",Z,a,ce),Pe.target=ht,Pe.relatedTarget=ie,Se=null,st(ce)===$&&(Qe=new Qe(Q,G+"enter",oe,a,ce),Qe.target=ie,Qe.relatedTarget=ht,Se=Qe),ht=Se,Qe=Z&&oe?U(Z,oe,Qy):null,Z!==null&&S_(ye,Pe,Z,Qe,!1),oe!==null&&ht!==null&&S_(ye,ht,oe,Qe,!0)))}e:{if(Z=$?Ye($):window,oe=Z.nodeName&&Z.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Z.type==="file")var Ze=Um;else if(Nm(Z))if(Lm)Ze=ty;else{Ze=$S;var Rt=JS}else oe=Z.nodeName,!oe||oe.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?$&&qc($.elementType)&&(Ze=Um):Ze=ey;if(Ze&&(Ze=Ze(e,$))){Dm(ye,Ze,a,ce);break e}Rt&&Rt(e,Z,$)}switch(Rt=$?Ye($):window,e){case"focusin":(Nm(Rt)||Rt.contentEditable==="true")&&(ss=Rt,lf=$,bo=null);break;case"focusout":bo=lf=ss=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,Gm(ye,a,ce);break;case"selectionchange":if(iy)break;case"keydown":case"keyup":Gm(ye,a,ce)}var et;if(nf)e:{switch(e){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else rs?Cm(e,a)&&(at="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Tm&&a.locale!=="ko"&&(rs||at!=="onCompositionStart"?at==="onCompositionEnd"&&rs&&(et=Sm()):(Fa=ce,Qc="value"in Fa?Fa.value:Fa.textContent,rs=!0)),Rt=zu($,at),0<Rt.length&&(at=new Em(at,e,null,a,ce),ye.push({event:at,listeners:Rt}),et?at.data=et:(et=wm(a),et!==null&&(at.data=et)))),(et=YS?ZS(e,a):KS(e,a))&&(at=zu($,"onBeforeInput"),0<at.length&&(Rt=new Em("onBeforeInput","beforeinput",null,a,ce),ye.push({event:Rt,listeners:at}),Rt.data=et)),Yy(ye,e,$,a,ce)}v_(ye,n)})}function Ko(e,n,a){return{instance:e,listener:n,currentTarget:a}}function zu(e,n){for(var a=n+"Capture",r=[];e!==null;){var l=e,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=go(e,a),l!=null&&r.unshift(Ko(e,l,c)),l=go(e,n),l!=null&&r.push(Ko(e,l,c))),e.tag===3)return r;e=e.return}return[]}function Qy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function S_(e,n,a,r,l){for(var c=n._reactName,g=[];a!==null&&a!==r;){var A=a,I=A.alternate,$=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||$===null||(I=$,l?($=go(a,c),$!=null&&g.unshift(Ko(a,$,I))):l||($=go(a,c),$!=null&&g.push(Ko(a,$,I)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Jy=/\r\n?/g,$y=/\u0000|\uFFFD/g;function y_(e){return(typeof e=="string"?e:""+e).replace(Jy,`
`).replace($y,"")}function M_(e,n){return n=y_(n),y_(e)===n}function Wt(e,n,a,r,l,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ns(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ns(e,""+r);else return;break;case"className":ai(e,"class",r);break;case"tabIndex":ai(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ai(e,a,r);break;case"style":_m(e,r,c);return;case"data":if(n!=="object"){ai(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Dl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Wt(e,n,"name",l.name,l,null),Wt(e,n,"formEncType",l.formEncType,l,null),Wt(e,n,"formMethod",l.formMethod,l,null),Wt(e,n,"formTarget",l.formTarget,l,null)):(Wt(e,n,"encType",l.encType,l,null),Wt(e,n,"method",l.method,l,null),Wt(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Dl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Wi);return;case"onScroll":r!=null&&bt("scroll",e);return;case"onScrollEnd":r!=null&&bt("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Dl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":bt("beforetoggle",e),bt("toggle",e),jt(e,"popover",r);break;case"xlinkActuate":Tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Tt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Tt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Tt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Tt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":jt(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=vS.get(a)||a,jt(e,a,r);else return}xt=!0}function Wd(e,n,a,r,l,c){switch(a){case"style":_m(e,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")ns(e,r);else if(typeof r=="number"||typeof r=="bigint")ns(e,""+r);else return;break;case"onScroll":r!=null&&bt("scroll",e);return;case"onScrollEnd":r!=null&&bt("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!vn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=e[H]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(c,r,l);break e}xt=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):jt(e,a,r)}return}xt=!0}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",e),bt("load",e);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(e,n,c,g,a,null)}}l&&Wt(e,n,"srcSet",a.srcSet,a,null),r&&Wt(e,n,"src",a.src,a,null);return;case"input":bt("invalid",e);var A=c=g=l=null,I=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ce=a[r];if(ce!=null)switch(r){case"name":l=ce;break;case"type":g=ce;break;case"checked":I=ce;break;case"defaultChecked":$=ce;break;case"value":c=ce;break;case"defaultValue":A=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:Wt(e,n,r,ce,a,null)}}hm(e,c,A,I,$,g,l,!1);return;case"select":bt("invalid",e),r=g=c=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":c=A;break;case"defaultValue":g=A;break;case"multiple":r=A;default:Wt(e,n,l,A,a,null)}n=c,a=g,e.multiple=!!r,n!=null?ts(e,!!r,n,!1):a!=null&&ts(e,!!r,a,!0);return;case"textarea":bt("invalid",e),c=l=r=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":r=A;break;case"defaultValue":l=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Wt(e,n,g,A,a,null)}mm(e,r,l,c);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Wt(e,n,I,r,a,null)}return;case"dialog":bt("beforetoggle",e),bt("toggle",e),bt("cancel",e),bt("close",e);break;case"iframe":case"object":bt("load",e);break;case"video":case"audio":for(r=0;r<Zo.length;r++)bt(Zo[r],e);break;case"image":bt("error",e),bt("load",e);break;case"details":bt("toggle",e);break;case"embed":case"source":case"link":bt("error",e),bt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(e,n,$,r,a,null)}return;default:if(qc(n)){for(ce in a)a.hasOwnProperty(ce)&&(r=a[ce],r!==void 0&&Wd(e,n,ce,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Wt(e,n,A,r,a,null))}var eM={};function tM(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,g=null,A=null,I=null,$=null,ce=null;for(oe in a){var ye=a[oe];if(a.hasOwnProperty(oe)&&ye!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":I=ye;default:r.hasOwnProperty(oe)||Wt(e,n,oe,null,r,ye)}}for(var Z in r){var oe=r[Z];if(ye=a[Z],r.hasOwnProperty(Z)&&(oe!=null||ye!=null))switch(Z){case"type":oe!==ye&&(xt=!0),c=oe;break;case"name":oe!==ye&&(xt=!0),l=oe;break;case"checked":oe!==ye&&(xt=!0),$=oe;break;case"defaultChecked":oe!==ye&&(xt=!0),ce=oe;break;case"value":oe!==ye&&(xt=!0),g=oe;break;case"defaultValue":oe!==ye&&(xt=!0),A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:oe!==ye&&Wt(e,n,Z,oe,r,ye)}}Xc(e,g,A,I,$,ce,c,l);return;case"select":oe=g=A=Z=null;for(c in a)if(I=a[c],a.hasOwnProperty(c)&&I!=null)switch(c){case"value":break;case"multiple":oe=I;default:r.hasOwnProperty(c)||Wt(e,n,c,null,r,I)}for(l in r)if(c=r[l],I=a[l],r.hasOwnProperty(l)&&(c!=null||I!=null))switch(l){case"value":c!==I&&(xt=!0),Z=c;break;case"defaultValue":c!==I&&(xt=!0),A=c;break;case"multiple":c!==I&&(xt=!0),g=c;default:c!==I&&Wt(e,n,l,c,r,I)}n=A,a=g,r=oe,Z!=null?ts(e,!!a,Z,!1):!!r!=!!a&&(n!=null?ts(e,!!a,n,!0):ts(e,!!a,a?[]:"",!1));return;case"textarea":oe=Z=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Wt(e,n,A,null,r,l)}for(g in r)if(l=r[g],c=a[g],r.hasOwnProperty(g)&&(l!=null||c!=null))switch(g){case"value":l!==c&&(xt=!0),Z=l;break;case"defaultValue":l!==c&&(xt=!0),oe=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Wt(e,n,g,l,r,c)}pm(e,Z,oe);return;case"option":for(var Pe in a)if(Z=a[Pe],a.hasOwnProperty(Pe)&&Z!=null&&!r.hasOwnProperty(Pe))switch(Pe){case"selected":e.selected=!1;break;default:Wt(e,n,Pe,null,r,Z)}for(I in r)if(Z=r[I],oe=a[I],r.hasOwnProperty(I)&&Z!==oe&&(Z!=null||oe!=null))switch(I){case"selected":Z!==oe&&(xt=!0),e.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:Wt(e,n,I,Z,r,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)Z=a[Qe],a.hasOwnProperty(Qe)&&Z!=null&&!r.hasOwnProperty(Qe)&&Wt(e,n,Qe,null,r,Z);for($ in r)if(Z=r[$],oe=a[$],r.hasOwnProperty($)&&Z!==oe&&(Z!=null||oe!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(s(137,n));break;default:Wt(e,n,$,Z,r,oe)}return;default:if(qc(n)){for(var ht in a)Z=a[ht],a.hasOwnProperty(ht)&&Z!==void 0&&!r.hasOwnProperty(ht)&&Wd(e,n,ht,void 0,r,Z);for(ce in r)Z=r[ce],oe=a[ce],!r.hasOwnProperty(ce)||Z===oe||Z===void 0&&oe===void 0||Wd(e,n,ce,Z,r,oe);return}}for(var Q in a)Z=a[Q],a.hasOwnProperty(Q)&&Z!=null&&!r.hasOwnProperty(Q)&&Wt(e,n,Q,null,r,Z);for(ye in r)Z=r[ye],oe=a[ye],!r.hasOwnProperty(ye)||Z===oe||Z==null&&oe==null||Wt(e,n,ye,Z,r,oe)}function E_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],c=l.transferSize,g=l.initiatorType,A=l.duration;if(c&&A&&E_(g)){for(g=0,A=l.responseEnd,r+=1;r<a.length;r++){var I=a[r],$=I.startTime;if($>A)break;var ce=I.transferSize,ye=I.initiatorType;ce&&E_(ye)&&(I=I.responseEnd,g+=ce*(I<A?1:(A-$)/(I-$)))}if(--r,n+=8*(c+g)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qd=null,Yd=null;function jo(e){return e.nodeType===9?e:e.ownerDocument}function b_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function A_(e,n,a,r){return a=jo(a).createElement(e),a[T]=r,a[H]=n,Nn(a,e,n),vt(a),a}function Zd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kd=null;function iM(){var e=window.event;return e&&e.type==="popstate"?e===Kd?!1:(Kd=e,!0):(Kd=null,!1)}var jd=typeof setTimeout=="function"?setTimeout:void 0,aM=typeof clearTimeout=="function"?clearTimeout:void 0,R_=typeof Promise=="function"?Promise:void 0,C_=typeof requestAnimationFrame=="function"?requestAnimationFrame:jd,rM=typeof queueMicrotask=="function"?queueMicrotask:typeof R_<"u"?function(e){return R_.resolve(null).then(e).catch(sM)}:jd;function sM(e){setTimeout(function(){throw e})}function rr(e){return e==="head"}function w_(e,n){var a=n,r=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(l),Fs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")ah(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ah(a);for(var c=a.firstChild;c;){var g=c.nextSibling,A=c.nodeName;c[Oe]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&ah(e.ownerDocument.body);a=l}while(a);Fs(n)}function N_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function D_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function U_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function oM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Qd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return oM(n,a,e)}function lM(e){return e.documentElement.clientHeight}function uM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function cM(e,n,a,r,l,c,g,A,I){var $=n.nodeType===9?n:n.ownerDocument;try{var ce=$.startViewTransition({update:function(){var Z=$.defaultView,oe=Z.navigation&&Z.navigation.transition,Pe=$.fonts.status;r();var Qe=[];if(Pe==="loaded"&&(lM($),$.fonts.status==="loading"&&Qe.push($.fonts.ready)),Pe=Qe.length,e!==null)for(var ht=e.suspenseyImages,Q=0,G=0;G<ht.length;G++){var ie=ht[G];if(!ie.complete){var Se=ie.getBoundingClientRect();if(0<Se.bottom&&0<Se.right&&Se.top<Z.innerHeight&&Se.left<Z.innerWidth){if(Q+=$_(ie),Q>Hu){Qe.length=Pe;break}ie=new Promise(uM.bind(ie)),Qe.push(ie)}}}if(0<Qe.length)return Z=Promise.race([Promise.all(Qe),new Promise(function(Ze){return setTimeout(Ze,500)})]).then(l,l),(oe?Promise.allSettled([oe.finished,Z]):Z).then(c,c);if(l(),oe)return oe.finished.then(c,c);c()},types:a});$.__reactViewTransition=ce;var ye=[];return ce.ready.then(function(){for(var Z=$.documentElement.getAnimations({subtree:!0}),oe=0;oe<Z.length;oe++){var Pe=Z[oe],Qe=Pe.effect,ht=Qe.pseudoElement;if(ht!=null&&ht.startsWith("::view-transition")){ye.push(Pe),Pe=Qe.getKeyframes();for(var Q=ht=void 0,G=!0,ie=0;ie<Pe.length;ie++){var Se=Pe[ie],Ze=Se.width;if(ht===void 0)ht=Ze;else if(ht!==Ze){G=!1;break}if(Ze=Se.height,Q===void 0)Q=Ze;else if(Q!==Ze){G=!1;break}delete Se.width,delete Se.height,Se.transform==="none"&&delete Se.transform}G&&ht!==void 0&&Q!==void 0&&(Qe.setKeyframes(Pe),G=getComputedStyle(Qe.target,Qe.pseudoElement),G.width!==ht||G.height!==Q)&&(G=Pe[0],G.width=ht,G.height=Q,G=Pe[Pe.length-1],G.width=ht,G.height=Q,Qe.setKeyframes(Pe))}}g()},function(Z){$.__reactViewTransition===ce&&($.__reactViewTransition=null);try{if(typeof Z=="object"&&Z!==null)switch(Z.name){case"InvalidStateError":(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null)}Z!==null&&I(Z)}finally{r(),l(),g()}}),ce.finished.finally(function(){for(var Z=0;Z<ye.length;Z++)ye[Z].cancel();$.__reactViewTransition===ce&&($.__reactViewTransition=null),A()}),ce}catch{return r(),l(),g(),null}}function Hr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Hr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Hr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===e&&c.pseudoElement===n&&r.push(a[l])}return r},Hr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function L_(e){return{name:e,group:new Hr("group",e),imagePair:new Hr("image-pair",e),old:new Hr("old",e),new:new Hr("new",e)}}function fi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}fi.prototype.addEventListener=function(e,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(P_(c,e,n,a)===-1){var g=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(I){g.removeEventListener(e,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(l=g.removeEventListener.bind(g,e,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ls(a),c.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),v(this._fragmentFiber.child,!1,fM,e,A,r)}this._eventListeners=c}};function fM(e,n,a,r){return y(e).addEventListener(n,a,r),!1}fi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=P_(r,e,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var c=l.cleanup;l=Ls(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,dM,e,a,l),r.splice(n,1),c!==null&&c()}};function dM(e,n,a,r){return y(e).removeEventListener(n,a,r),!1}function Ls(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function O_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function P_(e,n,a,r){if(e.length===0)return-1;r=O_(r);for(var l=0;l<e.length;l++){var c=e[l];if(c.type===n&&c.listener===a&&O_(c.optionsOrUseCapture)===r)return l}return-1}fi.prototype.dispatchEvent=function(e){var n=_(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];r.addEventListener(c.type,c.attachedListener,Ls(c.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(l=0;l<a.length;l++)c=a[l],r.removeEventListener(c.type,c.attachedListener,Ls(c.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},fi.prototype.focus=function(e){v(this._fragmentFiber.child,!0,I_,e,void 0,void 0)};function I_(e,n){return e.tag===6?!1:(e=y(e),bM(e,n))}fi.prototype.focusLast=function(e){var n=[];v(this._fragmentFiber.child,!0,Jd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!I_(n[a],e);a--);};function Jd(e,n){return n.push(e),!1}fi.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=y(e),e=jo(e).activeElement,e!==null&&v(this._fragmentFiber.child,!1,hM,e,void 0,void 0))};function hM(e,n){return e.tag===6?!1:(e=y(e),e===n||e.contains(n)?(n.blur(),!0):!1)}fi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),v(this._fragmentFiber.child,!1,pM,e,void 0,void 0)};function pM(e,n){return e.tag===6||(e=y(e),n.observe(e)),!1}fi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),v(this._fragmentFiber.child,!1,mM,e,void 0,void 0);for(var a=n=0;a<Pi.length;a++){var r=Pi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Pi[n++]=r}Pi.length=n}};function mM(e,n){return e.tag===6||(e=y(e),n.unobserve(e)),!1}var Pi=[],$d=!1;function gM(e,n,a){Pi.push({fragmentInstance:e,observer:n,instance:a}),$d||($d=!0,TM(function(){$d=!1;var r=Pi;Pi=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}fi.prototype.getClientRects=function(){var e=[];return v(this._fragmentFiber.child,!1,_M,e,void 0,void 0),e};function _M(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=y(e),n.push.apply(n,e.getClientRects());return!1}fi.prototype.getRootNode=function(e){var n=_(this._fragmentFiber);return n===null?this:y(n).getRootNode(e)},fi.prototype.compareDocumentPosition=function(e){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,Jd,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,E(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(e);return a===e?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=y(a).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),l=y(a[a.length-1]);var c=E(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(e),A=l.compareDocumentPosition(e),I=g&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||c&&l===e||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!c&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||vM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function vM(e,n,a,r,l){var c=st(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)e:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break e}c=c.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;e:{for(c=n,n=_(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break e}c=c.return}c=!1}return c}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=U(a,c,D),n===null?n=!1:(v(n,!0,z,c,a),c=S,S=null,n=c!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=U(r,c,D),n===null?n=!1:(v(n,!0,C,c,r),c=S,N=S=null,n=c!==null)),n):!1}function z_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}fi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,Jd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=y(r),z_(e,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=y(l),z_(l,a)):y(l).scrollIntoView(e),r+=a?-1:1}};function xM(e,n){return e=y(e),B_(e,n),!1}function B_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function F_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.addEventListener(l.type,l.attachedListener,Ls(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var g=0,A=0;A<Pi.length;A++){var I=Pi[A];(I.fragmentInstance!==n||I.observer!==c||I.instance!==e)&&(Pi[g++]=I)}Pi.length=g,c.observe(e)}),B_(e,n))}function SM(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.removeEventListener(l.type,l.attachedListener,Ls(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?gM(n,c,e):c.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function eh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eh(a),je(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function yM(e,n,a,r){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Oe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function MM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ei(e.nextSibling),e===null))return null;return e}function H_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ei(e.nextSibling),e===null))return null;return e}function th(e){return e.data==="$?"||e.data==="$~"}function nh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function EM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ei(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ih=null;function G_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function V_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function bM(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function TM(e){C_(function(){C_(function(n){return e(n)})})}function k_(e,n,a){switch(n=jo(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function X_(e,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&Wt(e,n,r,null,eM,l)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Wi&&(e.onclick=null),je(e)}function ah(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);je(e)}var bi=new Map,W_=new Set;function Qo(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Aa=we.d;we.d={f:AM,r:RM,D:CM,C:wM,L:NM,m:DM,X:LM,S:UM,M:OM};function AM(){var e=Aa.f(),n=Du();return e||n}function RM(e){var n=ct(e);n!==null&&n.tag===5&&n.type==="form"?Y0(n):Aa.r(e)}var Os=typeof document>"u"?null:document;function q_(e,n,a){var r=Os;if(r&&typeof n=="string"&&n){var l=gi(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),W_.has(l)||(W_.add(l),e={rel:e,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Nn(n,"link",e),vt(n),r.head.appendChild(n)))}}function CM(e){Aa.D(e),q_("dns-prefetch",e,null)}function wM(e,n){Aa.C(e,n),q_("preconnect",e,n)}function NM(e,n,a){Aa.L(e,n,a);var r=Os;if(r&&e&&n){var l='link[rel="preload"][as="'+gi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+gi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+gi(a.imageSizes)+'"]')):l+='[href="'+gi(e)+'"]';var c=l;switch(n){case"style":c=Ps(e);break;case"script":c=Is(e)}if(!(bi.has(c)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),bi.set(c,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(Jo(c))||n==="script"&&r.querySelector($o(c))))){var g=r.createElement("link");Nn(g,"link",e),n==="style"&&(g[Ke]=!0,g.onload=g.onerror=function(){Yt(g)}),vt(g),r.head.appendChild(g)}}}function DM(e,n){Aa.m(e,n);var a=Os;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+gi(r)+'"][href="'+gi(e)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Is(e)}if(!bi.has(c)&&(e=P({rel:"modulepreload",href:e},n),bi.set(c,e),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($o(c)))return}r=a.createElement("link"),Nn(r,"link",e),vt(r),a.head.appendChild(r)}}}function UM(e,n,a){Aa.S(e,n,a);var r=Os;if(r&&e){var l=Mt(r).hoistableStyles,c=Ps(e);n=n||"default";var g=l.get(c);if(!g){var A={loading:0,preload:null};if(g=r.querySelector(Jo(c)))A.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=bi.get(c))&&rh(e,a);var I=g=r.createElement("link");vt(I),Nn(I,"link",e),I._p=new Promise(function($,ce){I.onload=$,I.onerror=ce}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Bu(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:A},l.set(c,g)}}}function LM(e,n){Aa.X(e,n);var a=Os;if(a&&e){var r=Mt(a).hoistableScripts,l=Is(e),c=r.get(l);c||(c=a.querySelector($o(l)),c||(e=P({src:e,async:!0},n),(n=bi.get(l))&&sh(e,n),c=a.createElement("script"),vt(c),Nn(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function OM(e,n){Aa.M(e,n);var a=Os;if(a&&e){var r=Mt(a).hoistableScripts,l=Is(e),c=r.get(l);c||(c=a.querySelector($o(l)),c||(e=P({src:e,async:!0,type:"module"},n),(n=bi.get(l))&&sh(e,n),c=a.createElement("script"),vt(c),Nn(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Y_(e,n,a,r){var l=(l=Pt.current)?Qo(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ps(a.href),n=Mt(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ps(a.href);var c=Mt(l).hoistableStyles,g=c.get(e);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,g),(c=l.querySelector(Jo(e)))?c._p||(g.instance=c,g.state.loading=5):(c=bi.get(e),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(e,c)),PM(l,e,c,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Is(a),n=Mt(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ps(e){return'href="'+gi(e)+'"'}function Jo(e){return'link[rel="stylesheet"]['+e+"]"}function Z_(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function PM(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ke]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Ke]=!0,n.onload=n.onerror=Yt.bind(null,n),Nn(n,"link",a),vt(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Is(e){return'[src="'+gi(e)+'"]'}function $o(e){return"script[async]"+e}function K_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+gi(a.href)+'"]');if(r)return n.instance=r,vt(r),r;var l=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),vt(r),Nn(r,"style",l),Bu(r,a.precedence,e),n.instance=r;case"stylesheet":l=Ps(a.href);var c=e.querySelector(Jo(l));if(c)return n.state.loading|=4,n.instance=c,vt(c),c;r=Z_(a),(l=bi.get(l))&&rh(r,l),c=(e.ownerDocument||e).createElement("link"),vt(c);var g=c;return g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),Nn(c,"link",r),n.state.loading|=4,Bu(c,a.precedence,e),n.instance=c;case"script":return c=Is(a.src),(l=e.querySelector($o(c)))?(n.instance=l,vt(l),l):(r=a,(l=bi.get(c))&&(r=P({},a),sh(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),vt(l),Nn(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Bu(r,a.precedence,e));return n.instance}function Bu(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,g=0;g<r.length;g++){var A=r[g];if(A.dataset.precedence===n)c=A;else if(c!==l)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function sh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Fu=null;function j_(e,n,a){if(Fu===null){var r=new Map,l=Fu=new Map;l.set(a,r)}else l=Fu,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var c=a[l];if(!(c[Oe]||c[T]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=e+g;var A=r.get(g);A?A.push(c):r.set(g,[c])}}return r}function oh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function IM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Q_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function J_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ev(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=$_(n),e.suspenseyImages.push(n)),e=FM.bind(e),n.decode().then(e,e))}function zM(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Ps(r.href),c=n.querySelector(Jo(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=el.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,vt(c);return}c=n.ownerDocument||n,r=Z_(r),(l=bi.get(l))&&rh(r,l),c=c.createElement("link"),vt(c);var g=c;g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),Nn(c,"link",r),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=el.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hu=0;function BM(e,n){return e.stylesheets&&e.count===0&&Vu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Vu(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&Hu===0&&(Hu=62500*nM());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vu(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Hu?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function tv(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Vu(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function el(){this.count--,tv(this)}function FM(){this.imgCount--,tv(this)}var Gu=null;function Vu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gu=new Map,n.forEach(HM,e),Gu=null,el.call(e))}function HM(e,n){if(!(n.state.loading&4)){var a=Gu.get(e);if(a)var r=a.get(null);else{a=new Map,Gu.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var g=l[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}l=n.instance,g=l.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,l),a.set(g,l),this.count++,r=el.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var zs={$$typeof:ne,Provider:null,Consumer:null,_currentValue:Gt,_currentValue2:Gt,_threadCount:0};function GM(e,n,a,r,l,c,g,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=es(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.hiddenUpdates=es(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function nv(e,n,a,r,l,c,g,A,I,$,ce,ye){return e=new GM(e,n,a,g,I,$,ce,ye,A),n=1,c===!0&&(n|=24),c=Zn(3,null,null,n),e.current=c,c.stateNode=e,n=Mf(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},Af(c),e}function iv(e){return e?(e=us,e):us}function av(e,n,a,r,l,c){l=iv(l),r.context===null?r.context=l:r.pendingContext=l,r=Ya(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Za(e,r,n),a!==null&&(Jn(a,e,n),Do(a,e,n))}function rv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function lh(e,n){rv(e,n),(e=e.alternate)&&rv(e,n)}function sv(e){if(e.tag===13||e.tag===31){var n=Er(e,67108864);n!==null&&Jn(n,e,67108864),lh(e,67108864)}}function ov(e){if(e.tag===13||e.tag===31){var n=ci();n=po(n);var a=Er(e,n);a!==null&&Jn(a,e,n),lh(e,n)}}var Bs=!0;function VM(e,n,a,r){var l=ve.T;ve.T=null;var c=we.p;try{we.p=2,uh(e,n,a,r)}finally{we.p=c,ve.T=l}}function kM(e,n,a,r){var l=ve.T;ve.T=null;var c=we.p;try{we.p=8,uh(e,n,a,r)}finally{we.p=c,ve.T=l}}function uh(e,n,a,r){if(Bs){var l=ch(r);if(l===null)Xd(e,n,r,ku,a),uv(e,r);else if(WM(l,e,n,a,r))r.stopPropagation();else if(uv(e,r),n&4&&-1<XM.indexOf(e)){for(;l!==null;){var c=ct(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=da(c.pendingLanes);if(g!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var I=1<<31-ut(g);A.entanglements[1]|=I,g&=~I}ta(c),(Bt&6)===0&&(Cu=We()+500,Yo(0))}}break;case 31:case 13:A=Er(c,2),A!==null&&Jn(A,c,2),Du(),lh(c,2)}if(c=ch(r),c===null&&Xd(e,n,r,ku,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else Xd(e,n,r,null,a)}}function ch(e){return e=Zc(e),fh(e)}var ku=null;function fh(e){if(ku=null,e=st(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ku=e,null}function lv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case lt:return 2;case X:return 8;case Ne:case Me:return 32;case Le:return 268435456;default:return 32}default:return 32}}var dh=!1,sr=null,or=null,lr=null,tl=new Map,nl=new Map,ur=[],XM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uv(e,n){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":tl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(e,n,a,r,l,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=ct(n),n!==null&&sv(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function WM(e,n,a,r,l){switch(n){case"focusin":return sr=il(sr,e,n,a,r,l),!0;case"dragenter":return or=il(or,e,n,a,r,l),!0;case"mouseover":return lr=il(lr,e,n,a,r,l),!0;case"pointerover":var c=l.pointerId;return tl.set(c,il(tl.get(c)||null,e,n,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,nl.set(c,il(nl.get(c)||null,e,n,a,r,l)),!0}return!1}function cv(e){var n=st(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,wl(e.priority,function(){ov(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,wl(e.priority,function(){ov(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ch(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Yc=r,a.target.dispatchEvent(r),Yc=null}else return n=ct(a),n!==null&&sv(n),e.blockedOn=a,!1;n.shift()}return!0}function fv(e,n,a){Xu(e)&&a.delete(n)}function qM(){dh=!1,sr!==null&&Xu(sr)&&(sr=null),or!==null&&Xu(or)&&(or=null),lr!==null&&Xu(lr)&&(lr=null),tl.forEach(fv),nl.forEach(fv)}function Wu(e,n){e.blockedOn===n&&(e.blockedOn=null,dh||(dh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,qM)))}var qu=null;function dv(e){qu!==e&&(qu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){qu===e&&(qu=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(fh(r||a)===null)continue;break}var c=ct(a);c!==null&&(e.splice(n,3),n-=3,Yf(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Fs(e){function n(I){return Wu(I,e)}sr!==null&&Wu(sr,e),or!==null&&Wu(or,e),lr!==null&&Wu(lr,e),tl.forEach(n),nl.forEach(n);for(var a=0;a<ur.length;a++){var r=ur[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ur.length&&(a=ur[0],a.blockedOn===null);)cv(a),a.blockedOn===null&&ur.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],g=l[H]||null;if(typeof c=="function")g||dv(a);else if(g){var A=null;if(c&&c.hasAttribute("formAction")){if(l=c,g=c[H]||null)A=g.formAction;else if(fh(l)!==null)continue}else A=g.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),dv(a)}}}function hv(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function hh(e){this._internalRoot=e}Yu.prototype.render=hh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ci();av(a,r,e,n,null,null)},Yu.prototype.unmount=hh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;av(e.current,2,null,e,null,null),Du(),n[de]=null}};function Yu(e){this._internalRoot=e}Yu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Cl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ur.length&&n!==0&&n<ur[a].priority;a++);ur.splice(a,0,e),a===0&&cv(e)}};var pv=t.version;if(pv!=="19.3.0")throw Error(s(527,pv,"19.3.0"));we.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var YM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:ve,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zu.isDisabled&&Zu.supportsFiber)try{Je=Zu.inject(YM),Ve=Zu}catch{}}return rl.createRoot=function(e,n){if(!u(e))throw Error(s(299));var a=!1,r="",l=ig,c=ag,g=rg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=nv(e,1,!1,null,null,a,r,null,l,c,g,hv),e[de]=n.current,kd(e),new hh(n)},rl.hydrateRoot=function(e,n,a){if(!u(e))throw Error(s(299));var r=!1,l="",c=ig,g=ag,A=rg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=nv(e,1,!0,n,a??null,r,l,I,c,g,A,hv),n.context=iv(null),a=n.current,r=ci(),r=po(r),l=Ya(r),l.callback=null,Za(a,l,r),a=r,n.current.lanes=a,ki(n,a),ta(n),e[de]=n.current,kd(e),new Yu(n)},rl.version="19.3.0",rl}var bv;function aE(){if(bv)return gh.exports;bv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),gh.exports=iE(),gh.exports}var rE=aE();const sE=Rx(rE);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xp="186",oE=0,Tv=1,lE=2,yc=1,uE=2,pl=3,Zr=0,ti=1,Ua=2,Oa=0,_l=1,eo=2,Av=3,Rv=4,cE=5,$s=100,fE=101,dE=102,hE=103,pE=104,mE=200,gE=201,_E=202,vE=203,Cx=204,wx=205,xE=206,SE=207,yE=208,ME=209,EE=210,bE=211,TE=212,AE=213,RE=214,$h=0,ep=1,tp=2,vl=3,np=4,ip=5,ap=6,rp=7,Nx=0,CE=1,wE=2,oa=0,Dx=1,Ux=2,Lx=3,Ox=4,Px=5,Ix=6,zx=7,Bx=300,Kr=301,ao=302,Sh=303,yh=304,Bc=306,sp=1e3,La=1001,op=1002,Un=1003,NE=1004,Ku=1005,zn=1006,Mh=1007,qr=1008,Ci=1009,Fx=1010,Hx=1011,xl=1012,Wp=1013,la=1014,ra=1015,ua=1016,qp=1017,Yp=1018,Sl=1020,Gx=35902,Vx=35899,kx=1021,Xx=1022,Hi=1023,Ia=1026,Yr=1027,Wx=1028,Zp=1029,jr=1030,Kp=1031,jp=1033,Mc=33776,Ec=33777,bc=33778,Tc=33779,lp=35840,up=35841,cp=35842,fp=35843,dp=36196,hp=37492,pp=37496,mp=37488,gp=37489,Cc=37490,_p=37491,vp=37808,xp=37809,Sp=37810,yp=37811,Mp=37812,Ep=37813,bp=37814,Tp=37815,Ap=37816,Rp=37817,Cp=37818,wp=37819,Np=37820,Dp=37821,Up=36492,Lp=36494,Op=36495,Pp=36283,Ip=36284,wc=36285,zp=36286,DE=3200,Cv=0,UE=1,_r="",Ai="srgb",Nc="srgb-linear",Dc="linear",qt="srgb",Eh=7680,LE=519,OE=512,PE=513,IE=514,Qp=515,zE=516,BE=517,Jp=518,FE=519,HE=35044,wv="300 es",sa=2e3,Uc=2001;function GE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Lc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function VE(){const o=Lc("canvas");return o.style.display="block",o}const Nv={};function Dv(...o){const t="THREE."+o.shift();console.log(t,...o)}function qx(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function rt(...o){o=qx(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function It(...o){o=qx(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function no(...o){const t=o.join(" ");t in Nv||(Nv[t]=!0,rt(...o))}function kE(o,t,i){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const XE={[$h]:ep,[tp]:ap,[np]:rp,[vl]:ip,[ep]:$h,[ap]:tp,[rp]:np,[ip]:vl};class Jr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const u=s[t];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=Math.PI/180,Bp=180/Math.PI;function Ml(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Dt(o,t,i){return Math.max(t,Math.min(i,o))}function WE(o,t){return(o%t+t)%t}function Th(o,t,i){return(1-i)*o+i*t}function sl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const om=class om{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6],this.y=u[1]*i+u[4]*s+u[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Dt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),u=Math.sin(i),f=this.x-t.x,d=this.y-t.y;return this.x=f*s-d*u+t.x,this.y=f*u+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};om.prototype.isVector2=!0;let Lt=om;class so{constructor(t=0,i=0,s=0,u=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=u}static slerpFlat(t,i,s,u,f,d,h){let m=s[u+0],p=s[u+1],x=s[u+2],v=s[u+3],_=f[d+0],E=f[d+1],R=f[d+2],w=f[d+3];if(v!==w||m!==_||p!==E||x!==R){let y=m*_+p*E+x*R+v*w;y<0&&(_=-_,E=-E,R=-R,w=-w,y=-y);let S=1-h;if(y<.9995){const N=Math.acos(y),z=Math.sin(N);S=Math.sin(S*N)/z,h=Math.sin(h*N)/z,m=m*S+_*h,p=p*S+E*h,x=x*S+R*h,v=v*S+w*h}else{m=m*S+_*h,p=p*S+E*h,x=x*S+R*h,v=v*S+w*h;const N=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=N,p*=N,x*=N,v*=N}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,u,f,d){const h=s[u],m=s[u+1],p=s[u+2],x=s[u+3],v=f[d],_=f[d+1],E=f[d+2],R=f[d+3];return t[i]=h*R+x*v+m*E-p*_,t[i+1]=m*R+x*_+p*v-h*E,t[i+2]=p*R+x*E+h*_-m*v,t[i+3]=x*R-h*v-m*_-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,u){return this._x=t,this._y=i,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,u=t._y,f=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(u/2),v=h(f/2),_=m(s/2),E=m(u/2),R=m(f/2);switch(d){case"XYZ":this._x=_*x*v+p*E*R,this._y=p*E*v-_*x*R,this._z=p*x*R+_*E*v,this._w=p*x*v-_*E*R;break;case"YXZ":this._x=_*x*v+p*E*R,this._y=p*E*v-_*x*R,this._z=p*x*R-_*E*v,this._w=p*x*v+_*E*R;break;case"ZXY":this._x=_*x*v-p*E*R,this._y=p*E*v+_*x*R,this._z=p*x*R+_*E*v,this._w=p*x*v-_*E*R;break;case"ZYX":this._x=_*x*v-p*E*R,this._y=p*E*v+_*x*R,this._z=p*x*R-_*E*v,this._w=p*x*v+_*E*R;break;case"YZX":this._x=_*x*v+p*E*R,this._y=p*E*v+_*x*R,this._z=p*x*R-_*E*v,this._w=p*x*v-_*E*R;break;case"XZY":this._x=_*x*v-p*E*R,this._y=p*E*v-_*x*R,this._z=p*x*R+_*E*v,this._w=p*x*v+_*E*R;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,u=Math.sin(s);return this._x=t.x*u,this._y=t.y*u,this._z=t.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],u=i[4],f=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],v=i[10],_=s+h+v;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(x-m)*E,this._y=(f-p)*E,this._z=(d-u)*E}else if(s>h&&s>v){const E=2*Math.sqrt(1+s-h-v);this._w=(x-m)/E,this._x=.25*E,this._y=(u+d)/E,this._z=(f+p)/E}else if(h>v){const E=2*Math.sqrt(1+h-s-v);this._w=(f-p)/E,this._x=(u+d)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+v-s-h);this._w=(d-u)/E,this._x=(f+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Dt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const u=Math.min(1,i/s);return this.slerp(t,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,u=t._y,f=t._z,d=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+d*h+u*p-f*m,this._y=u*x+d*m+f*h-s*p,this._z=f*x+d*p+s*m-u*h,this._w=d*x-s*h-u*m-f*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,u=t._y,f=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,u=-u,f=-f,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+u*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+u*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(t),u*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lm=class lm{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Uv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Uv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,u=this.z,f=t.elements;return this.x=f[0]*i+f[3]*s+f[6]*u,this.y=f[1]*i+f[4]*s+f[7]*u,this.z=f[2]*i+f[5]*s+f[8]*u,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,u=this.z,f=t.elements,d=1/(f[3]*i+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,u=this.z,f=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*u-h*s),x=2*(h*i-f*u),v=2*(f*s-d*i);return this.x=i+m*p+d*v-h*x,this.y=s+m*x+h*p-f*v,this.z=u+m*v+f*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,u=this.z,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*u,this.y=f[1]*i+f[5]*s+f[9]*u,this.z=f[2]*i+f[6]*s+f[10]*u,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,u=t.y,f=t.z,d=i.x,h=i.y,m=i.z;return this.x=u*m-f*h,this.y=f*d-s*m,this.z=s*h-u*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Dt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,u=this.z-t.z;return i*i+s*s+u*u}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const u=Math.sin(i)*t;return this.x=u*Math.sin(s),this.y=Math.cos(i)*t,this.z=u*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),u=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=u,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lm.prototype.isVector3=!0;let ae=lm;const Ah=new ae,Uv=new so,um=class um{constructor(t,i,s,u,f,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,u,f,d,h,m,p)}set(t,i,s,u,f,d,h,m,p){const x=this.elements;return x[0]=t,x[1]=u,x[2]=h,x[3]=i,x[4]=f,x[5]=m,x[6]=s,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,u=i.elements,f=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],x=s[4],v=s[7],_=s[2],E=s[5],R=s[8],w=u[0],y=u[3],S=u[6],N=u[1],z=u[4],C=u[7],D=u[2],U=u[5],P=u[8];return f[0]=d*w+h*N+m*D,f[3]=d*y+h*z+m*U,f[6]=d*S+h*C+m*P,f[1]=p*w+x*N+v*D,f[4]=p*y+x*z+v*U,f[7]=p*S+x*C+v*P,f[2]=_*w+E*N+R*D,f[5]=_*y+E*z+R*U,f[8]=_*S+E*C+R*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],u=t[2],f=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-s*f*x+s*h*m+u*f*p-u*d*m}invert(){const t=this.elements,i=t[0],s=t[1],u=t[2],f=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],v=x*d-h*p,_=h*m-x*f,E=p*f-d*m,R=i*v+s*_+u*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=v*w,t[1]=(u*p-x*s)*w,t[2]=(h*s-u*d)*w,t[3]=_*w,t[4]=(x*i-u*m)*w,t[5]=(u*f-h*i)*w,t[6]=E*w,t[7]=(s*m-p*i)*w,t[8]=(d*i-s*f)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,u,f,d,h){const m=Math.cos(f),p=Math.sin(f);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-u*p,u*m,-u*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return no("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rh.makeScale(t,i)),this}rotate(t){return no("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rh.makeRotation(-t)),this}translate(t,i){return no("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let u=0;u<9;u++)if(i[u]!==s[u])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};um.prototype.isMatrix3=!0;let ft=um;const Rh=new ft,Lv=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ov=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qE(){const o={enabled:!0,workingColorSpace:Nc,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===qt&&(u.r=Pa(u.r),u.g=Pa(u.g),u.b=Pa(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qt&&(u.r=io(u.r),u.g=io(u.g),u.b=io(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===_r?Dc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return no("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return no("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Nc]:{primaries:t,whitePoint:s,transfer:Dc,toXYZ:Lv,fromXYZ:Ov,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:s,transfer:qt,toXYZ:Lv,fromXYZ:Ov,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),o}const Nt=qE();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function io(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Hs;class YE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Hs===void 0&&(Hs=Lc("canvas")),Hs.width=t.width,Hs.height=t.height;const u=Hs.getContext("2d");t instanceof ImageData?u.putImageData(t,0,0):u.drawImage(t,0,0,t.width,t.height),s=Hs}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Lc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const u=s.getImageData(0,0,t.width,t.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=Pa(f[d]/255)*255;return s.putImageData(u,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Pa(i[s]/255)*255):i[s]=Pa(i[s]);return{data:i,width:t.width,height:t.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ZE=0;class $p{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Ml(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(Ch(u[d].image)):f.push(Ch(u[d]))}else f=Ch(u);s.url=f}return i||(t.images[this.uuid]=s),s}}function Ch(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?YE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let KE=0;const wh=new ae;class Bn extends Jr{constructor(t=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=La,u=La,f=zn,d=qr,h=Hi,m=Ci,p=Bn.DEFAULT_ANISOTROPY,x=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Ml(),this.name="",this.source=new $p(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sp:t.x=t.x-Math.floor(t.x);break;case La:t.x=t.x<0?0:1;break;case op:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sp:t.y=t.y-Math.floor(t.y);break;case La:t.y=t.y<0?0:1;break;case op:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Bx;Bn.DEFAULT_ANISOTROPY=1;const cm=class cm{constructor(t=0,i=0,s=0,u=1){this.x=t,this.y=i,this.z=s,this.w=u}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,u){return this.x=t,this.y=i,this.z=s,this.w=u,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,u=this.z,f=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*u+d[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,u,f;const m=t.elements,p=m[0],x=m[4],v=m[8],_=m[1],E=m[5],R=m[9],w=m[2],y=m[6],S=m[10];if(Math.abs(x-_)<.01&&Math.abs(v-w)<.01&&Math.abs(R-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+w)<.1&&Math.abs(R+y)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,C=(E+1)/2,D=(S+1)/2,U=(x+_)/4,P=(v+w)/4,b=(R+y)/4;return z>C&&z>D?z<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(z),u=U/s,f=P/s):C>D?C<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(C),s=U/u,f=b/u):D<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(D),s=P/f,u=b/f),this.set(s,u,f,i),this}let N=Math.sqrt((y-R)*(y-R)+(v-w)*(v-w)+(_-x)*(_-x));return Math.abs(N)<.001&&(N=1),this.x=(y-R)/N,this.y=(v-w)/N,this.z=(_-x)/N,this.w=Math.acos((p+E+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this.w=Dt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this.w=Dt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cm.prototype.isVector4=!0;let un=cm;class jE extends Jr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,t,i),this.scissorTest=!1,this.viewport=new un(0,0,t,i),this.textures=[];const u={width:t,height:i,depth:s.depth},f=new Bn(u),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=t,this.textures[u].image.height=i,this.textures[u].image.depth=s,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},t.textures[i].image);this.textures[i].source=new $p(u)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends jE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Yx extends Bn{constructor(t=null,i=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:u},this.magFilter=Un,this.minFilter=Un,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class QE extends Bn{constructor(t=null,i=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:u},this.magFilter=Un,this.minFilter=Un,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const zc=class zc{constructor(t,i,s,u,f,d,h,m,p,x,v,_,E,R,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,u,f,d,h,m,p,x,v,_,E,R,w,y)}set(t,i,s,u,f,d,h,m,p,x,v,_,E,R,w,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=u,S[1]=f,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=x,S[10]=v,S[14]=_,S[3]=E,S[7]=R,S[11]=w,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,u=1/Gs.setFromMatrixColumn(t,0).length(),f=1/Gs.setFromMatrixColumn(t,1).length(),d=1/Gs.setFromMatrixColumn(t,2).length();return i[0]=s[0]*u,i[1]=s[1]*u,i[2]=s[2]*u,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,u=t.y,f=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(u),p=Math.sin(u),x=Math.cos(f),v=Math.sin(f);if(t.order==="XYZ"){const _=d*x,E=d*v,R=h*x,w=h*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=E+R*p,i[5]=_-w*p,i[9]=-h*m,i[2]=w-_*p,i[6]=R+E*p,i[10]=d*m}else if(t.order==="YXZ"){const _=m*x,E=m*v,R=p*x,w=p*v;i[0]=_+w*h,i[4]=R*h-E,i[8]=d*p,i[1]=d*v,i[5]=d*x,i[9]=-h,i[2]=E*h-R,i[6]=w+_*h,i[10]=d*m}else if(t.order==="ZXY"){const _=m*x,E=m*v,R=p*x,w=p*v;i[0]=_-w*h,i[4]=-d*v,i[8]=R+E*h,i[1]=E+R*h,i[5]=d*x,i[9]=w-_*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const _=d*x,E=d*v,R=h*x,w=h*v;i[0]=m*x,i[4]=R*p-E,i[8]=_*p+w,i[1]=m*v,i[5]=w*p+_,i[9]=E*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const _=d*m,E=d*p,R=h*m,w=h*p;i[0]=m*x,i[4]=w-_*v,i[8]=R*v+E,i[1]=v,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=E*v+R,i[10]=_-w*v}else if(t.order==="XZY"){const _=d*m,E=d*p,R=h*m,w=h*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=_*v+w,i[5]=d*x,i[9]=E*v-R,i[2]=R*v-E,i[6]=h*x,i[10]=w*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(JE,t,$E)}lookAt(t,i,s){const u=this.elements;return di.subVectors(t,i),di.lengthSq()===0&&(di.z=1),di.normalize(),fr.crossVectors(s,di),fr.lengthSq()===0&&(Math.abs(s.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),fr.crossVectors(s,di)),fr.normalize(),ju.crossVectors(di,fr),u[0]=fr.x,u[4]=ju.x,u[8]=di.x,u[1]=fr.y,u[5]=ju.y,u[9]=di.y,u[2]=fr.z,u[6]=ju.z,u[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,u=i.elements,f=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],x=s[1],v=s[5],_=s[9],E=s[13],R=s[2],w=s[6],y=s[10],S=s[14],N=s[3],z=s[7],C=s[11],D=s[15],U=u[0],P=u[4],b=u[8],L=u[12],F=u[1],k=u[5],ee=u[9],fe=u[13],J=u[2],ne=u[6],q=u[10],Y=u[14],he=u[3],K=u[7],ue=u[11],xe=u[15];return f[0]=d*U+h*F+m*J+p*he,f[4]=d*P+h*k+m*ne+p*K,f[8]=d*b+h*ee+m*q+p*ue,f[12]=d*L+h*fe+m*Y+p*xe,f[1]=x*U+v*F+_*J+E*he,f[5]=x*P+v*k+_*ne+E*K,f[9]=x*b+v*ee+_*q+E*ue,f[13]=x*L+v*fe+_*Y+E*xe,f[2]=R*U+w*F+y*J+S*he,f[6]=R*P+w*k+y*ne+S*K,f[10]=R*b+w*ee+y*q+S*ue,f[14]=R*L+w*fe+y*Y+S*xe,f[3]=N*U+z*F+C*J+D*he,f[7]=N*P+z*k+C*ne+D*K,f[11]=N*b+z*ee+C*q+D*ue,f[15]=N*L+z*fe+C*Y+D*xe,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],u=t[8],f=t[12],d=t[1],h=t[5],m=t[9],p=t[13],x=t[2],v=t[6],_=t[10],E=t[14],R=t[3],w=t[7],y=t[11],S=t[15],N=m*E-p*_,z=h*E-p*v,C=h*_-m*v,D=d*E-p*x,U=d*_-m*x,P=d*v-h*x;return i*(w*N-y*z+S*C)-s*(R*N-y*D+S*U)+u*(R*z-w*D+S*P)-f*(R*C-w*U+y*P)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],u=t[8],f=t[1],d=t[5],h=t[9],m=t[2],p=t[6],x=t[10];return i*(d*x-h*p)-s*(f*x-h*m)+u*(f*p-d*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const u=this.elements;return t.isVector3?(u[12]=t.x,u[13]=t.y,u[14]=t.z):(u[12]=t,u[13]=i,u[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],u=t[2],f=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],v=t[9],_=t[10],E=t[11],R=t[12],w=t[13],y=t[14],S=t[15],N=i*h-s*d,z=i*m-u*d,C=i*p-f*d,D=s*m-u*h,U=s*p-f*h,P=u*p-f*m,b=x*w-v*R,L=x*y-_*R,F=x*S-E*R,k=v*y-_*w,ee=v*S-E*w,fe=_*S-E*y,J=N*fe-z*ee+C*k+D*F-U*L+P*b;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/J;return t[0]=(h*fe-m*ee+p*k)*ne,t[1]=(u*ee-s*fe-f*k)*ne,t[2]=(w*P-y*U+S*D)*ne,t[3]=(_*U-v*P-E*D)*ne,t[4]=(m*F-d*fe-p*L)*ne,t[5]=(i*fe-u*F+f*L)*ne,t[6]=(y*C-R*P-S*z)*ne,t[7]=(x*P-_*C+E*z)*ne,t[8]=(d*ee-h*F+p*b)*ne,t[9]=(s*F-i*ee-f*b)*ne,t[10]=(R*U-w*C+S*N)*ne,t[11]=(v*C-x*U-E*N)*ne,t[12]=(h*L-d*k-m*b)*ne,t[13]=(i*k-s*L+u*b)*ne,t[14]=(w*z-R*D-y*N)*ne,t[15]=(x*D-v*z+_*N)*ne,this}scale(t){const i=this.elements,s=t.x,u=t.y,f=t.z;return i[0]*=s,i[4]*=u,i[8]*=f,i[1]*=s,i[5]*=u,i[9]*=f,i[2]*=s,i[6]*=u,i[10]*=f,i[3]*=s,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],u=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,u))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),u=Math.sin(i),f=1-s,d=t.x,h=t.y,m=t.z,p=f*d,x=f*h;return this.set(p*d+s,p*h-u*m,p*m+u*h,0,p*h+u*m,x*h+s,x*m-u*d,0,p*m-u*h,x*m+u*d,f*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,u,f,d){return this.set(1,s,f,0,t,1,d,0,i,u,1,0,0,0,0,1),this}compose(t,i,s){const u=this.elements,f=i._x,d=i._y,h=i._z,m=i._w,p=f+f,x=d+d,v=h+h,_=f*p,E=f*x,R=f*v,w=d*x,y=d*v,S=h*v,N=m*p,z=m*x,C=m*v,D=s.x,U=s.y,P=s.z;return u[0]=(1-(w+S))*D,u[1]=(E+C)*D,u[2]=(R-z)*D,u[3]=0,u[4]=(E-C)*U,u[5]=(1-(_+S))*U,u[6]=(y+N)*U,u[7]=0,u[8]=(R+z)*P,u[9]=(y-N)*P,u[10]=(1-(_+w))*P,u[11]=0,u[12]=t.x,u[13]=t.y,u[14]=t.z,u[15]=1,this}decompose(t,i,s){const u=this.elements;t.x=u[12],t.y=u[13],t.z=u[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Gs.set(u[0],u[1],u[2]).length();const h=Gs.set(u[4],u[5],u[6]).length(),m=Gs.set(u[8],u[9],u[10]).length();f<0&&(d=-d),Ii.copy(this);const p=1/d,x=1/h,v=1/m;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=x,Ii.elements[5]*=x,Ii.elements[6]*=x,Ii.elements[8]*=v,Ii.elements[9]*=v,Ii.elements[10]*=v,i.setFromRotationMatrix(Ii),s.x=d,s.y=h,s.z=m,this}makePerspective(t,i,s,u,f,d,h=sa,m=!1){const p=this.elements,x=2*f/(i-t),v=2*f/(s-u),_=(i+t)/(i-t),E=(s+u)/(s-u);let R,w;if(m)R=f/(d-f),w=d*f/(d-f);else if(h===sa)R=-(d+f)/(d-f),w=-2*d*f/(d-f);else if(h===Uc)R=-d/(d-f),w=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,u,f,d,h=sa,m=!1){const p=this.elements,x=2/(i-t),v=2/(s-u),_=-(i+t)/(i-t),E=-(s+u)/(s-u);let R,w;if(m)R=1/(d-f),w=d/(d-f);else if(h===sa)R=-2/(d-f),w=-(d+f)/(d-f);else if(h===Uc)R=-1/(d-f),w=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let u=0;u<16;u++)if(i[u]!==s[u])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};zc.prototype.isMatrix4=!0;let cn=zc;const Gs=new ae,Ii=new cn,JE=new ae(0,0,0),$E=new ae(1,1,1),fr=new ae,ju=new ae,di=new ae,Pv=new cn,Iv=new so;class Qr{constructor(t=0,i=0,s=0,u=Qr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=u}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,u=this._order){return this._x=t,this._y=i,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const u=t.elements,f=u[0],d=u[4],h=u[8],m=u[1],p=u[5],x=u[9],v=u[2],_=u[6],E=u[10];switch(i){case"XYZ":this._y=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-x,E),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Pv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Iv.setFromEuler(this),this.setFromQuaternion(Iv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qr.DEFAULT_ORDER="XYZ";class Zx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eb=0;const zv=new ae,Vs=new so,Ra=new cn,Qu=new ae,ol=new ae,tb=new ae,nb=new so,Bv=new ae(1,0,0),Fv=new ae(0,1,0),Hv=new ae(0,0,1),Gv={type:"added"},ib={type:"removed"},ks={type:"childadded",child:null},Nh={type:"childremoved",child:null};class qn extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new ae,i=new Qr,s=new so,u=new ae(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new cn},normalMatrix:{value:new ft}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Vs.setFromAxisAngle(t,i),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,i){return Vs.setFromAxisAngle(t,i),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(Bv,t)}rotateY(t){return this.rotateOnAxis(Fv,t)}rotateZ(t){return this.rotateOnAxis(Hv,t)}translateOnAxis(t,i){return zv.copy(t).applyQuaternion(this.quaternion),this.position.add(zv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Bv,t)}translateY(t){return this.translateOnAxis(Fv,t)}translateZ(t){return this.translateOnAxis(Hv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Qu.copy(t):Qu.set(t,i,s);const u=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(ol,Qu,this.up):Ra.lookAt(Qu,ol,this.up),this.quaternion.setFromRotationMatrix(Ra),u&&(Ra.extractRotation(u.matrixWorld),Vs.setFromRotationMatrix(Ra),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gv),ks.child=t,this.dispatchEvent(ks),ks.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ib),Nh.child=t,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gv),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,t,tb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,nb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,u=t.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*u,f[13]+=s-f[1]*i-f[5]*s-f[9]*u,f[14]+=u-f[2]*i-f[6]*s-f[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const u=this.parent;if(t===!0&&u!==null&&u.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,u.name=this.name,u.castShadow=this.castShadow,u.receiveShadow=this.receiveShadow,u.visible=this.visible,u.frustumCulled=this.frustumCulled,u.renderOrder=this.renderOrder,u.static=this.static,u.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(t),u.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];f(t.shapes,v)}else f(t.shapes,m)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(f(t.materials,this.material[m]));u.material=h}else u.material=f(t.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];u.animations.push(f(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),x=d(t.images),v=d(t.shapes),_=d(t.skeletons),E=d(t.animations),R=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),R.length>0&&(s.nodes=R)}return s.object=u,s;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const u=t.children[s];this.add(u.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}qn.DEFAULT_UP=new ae(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ml extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let u=null,f=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),S=this._getHandJoint(p,w);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=x.position.distanceTo(v.position),E=.02,R=.005;p.inputState.pinching&&_>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,s),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(u=i.getPose(t.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return h!==null&&(h.visible=u!==null),m!==null&&(m.visible=f!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new ml;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Ju={h:0,s:0,l:0};function Uh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class gt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const u=t;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,u=Nt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Nt.colorSpaceToWorking(this,u),this}setHSL(t,i,s,u=Nt.workingColorSpace){if(t=WE(t,1),i=Dt(i,0,1),s=Dt(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Uh(d,f,t+1/3),this.g=Uh(d,f,t),this.b=Uh(d,f,t-1/3)}return Nt.colorSpaceToWorking(this,u),this}setStyle(t,i=Ai){function s(f){f!==void 0&&parseFloat(f)<1&&rt("Color: Alpha component of "+t+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:rt("Color: Unknown color model "+t)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ai){const s=Kx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}copyLinearToSRGB(t){return this.r=io(t.r),this.g=io(t.g),this.b=io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return Nt.workingToColorSpace(In.copy(this),t),Math.round(Dt(In.r*255,0,255))*65536+Math.round(Dt(In.g*255,0,255))*256+Math.round(Dt(In.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Nt.workingColorSpace){Nt.workingToColorSpace(In.copy(this),i);const s=In.r,u=In.g,f=In.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=x<=.5?v/(d+h):v/(2-d-h),d){case s:m=(u-f)/v+(u<f?6:0);break;case u:m=(f-s)/v+2;break;case f:m=(s-u)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=Nt.workingColorSpace){return Nt.workingToColorSpace(In.copy(this),i),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Ai){Nt.workingToColorSpace(In.copy(this),t);const i=In.r,s=In.g,u=In.b;return t!==Ai?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(t,i,s){return this.getHSL(dr),this.setHSL(dr.h+t,dr.s+i,dr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(dr),t.getHSL(Ju);const s=Th(dr.h,Ju.h,i),u=Th(dr.s,Ju.s,i),f=Th(dr.l,Ju.l,i);return this.setHSL(s,u,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,u=this.b,f=t.elements;return this.r=f[0]*i+f[3]*s+f[6]*u,this.g=f[1]*i+f[4]*s+f[7]*u,this.b=f[2]*i+f[5]*s+f[8]*u,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new gt;gt.NAMES=Kx;class em{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new gt(t),this.density=i}clone(){return new em(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rb extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qr,this.environmentIntensity=1,this.environmentRotation=new Qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zi=new ae,Ca=new ae,Lh=new ae,wa=new ae,Xs=new ae,Ws=new ae,Vv=new ae,Oh=new ae,Ph=new ae,Ih=new ae,zh=new un,Bh=new un,Fh=new un;class Fi{constructor(t=new ae,i=new ae,s=new ae){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,u){u.subVectors(s,i),zi.subVectors(t,i),u.cross(zi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(t,i,s,u,f){zi.subVectors(u,i),Ca.subVectors(s,i),Lh.subVectors(t,i);const d=zi.dot(zi),h=zi.dot(Ca),m=zi.dot(Lh),p=Ca.dot(Ca),x=Ca.dot(Lh),v=d*p-h*h;if(v===0)return f.set(0,0,0),null;const _=1/v,E=(p*m-h*x)*_,R=(d*x-h*m)*_;return f.set(1-E-R,R,E)}static containsPoint(t,i,s,u){return this.getBarycoord(t,i,s,u,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(t,i,s,u,f,d,h,m){return this.getBarycoord(t,i,s,u,wa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,wa.x),m.addScaledVector(d,wa.y),m.addScaledVector(h,wa.z),m)}static getInterpolatedAttribute(t,i,s,u,f,d){return zh.setScalar(0),Bh.setScalar(0),Fh.setScalar(0),zh.fromBufferAttribute(t,i),Bh.fromBufferAttribute(t,s),Fh.fromBufferAttribute(t,u),d.setScalar(0),d.addScaledVector(zh,f.x),d.addScaledVector(Bh,f.y),d.addScaledVector(Fh,f.z),d}static isFrontFacing(t,i,s,u){return zi.subVectors(s,i),Ca.subVectors(t,i),zi.cross(Ca).dot(u)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,u){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[u]),this}setFromAttributeAndIndices(t,i,s,u){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,u),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),zi.cross(Ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Fi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,u,f){return Fi.getInterpolation(t,this.a,this.b,this.c,i,s,u,f)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,u=this.b,f=this.c;let d,h;Xs.subVectors(u,s),Ws.subVectors(f,s),Oh.subVectors(t,s);const m=Xs.dot(Oh),p=Ws.dot(Oh);if(m<=0&&p<=0)return i.copy(s);Ph.subVectors(t,u);const x=Xs.dot(Ph),v=Ws.dot(Ph);if(x>=0&&v<=x)return i.copy(u);const _=m*v-x*p;if(_<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(Xs,d);Ih.subVectors(t,f);const E=Xs.dot(Ih),R=Ws.dot(Ih);if(R>=0&&E<=R)return i.copy(f);const w=E*p-m*R;if(w<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(s).addScaledVector(Ws,h);const y=x*R-E*v;if(y<=0&&v-x>=0&&E-R>=0)return Vv.subVectors(f,u),h=(v-x)/(v-x+(E-R)),i.copy(u).addScaledVector(Vv,h);const S=1/(y+w+_);return d=w*S,h=_*S,i.copy(s).addScaledVector(Xs,d).addScaledVector(Ws,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class El{constructor(t=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Bi):Bi.fromBufferAttribute(f,d),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$u.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$u.copy(s.boundingBox)),$u.applyMatrix4(t.matrixWorld),this.union($u)}const u=t.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ll),ec.subVectors(this.max,ll),qs.subVectors(t.a,ll),Ys.subVectors(t.b,ll),Zs.subVectors(t.c,ll),hr.subVectors(Ys,qs),pr.subVectors(Zs,Ys),Gr.subVectors(qs,Zs);let i=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Gr.z,Gr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Gr.z,0,-Gr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Gr.y,Gr.x,0];return!Hh(i,qs,Ys,Zs,ec)||(i=[1,0,0,0,1,0,0,0,1],!Hh(i,qs,Ys,Zs,ec))?!1:(tc.crossVectors(hr,pr),i=[tc.x,tc.y,tc.z],Hh(i,qs,Ys,Zs,ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Na=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Bi=new ae,$u=new El,qs=new ae,Ys=new ae,Zs=new ae,hr=new ae,pr=new ae,Gr=new ae,ll=new ae,ec=new ae,tc=new ae,Vr=new ae;function Hh(o,t,i,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){Vr.fromArray(o,f);const h=u.x*Math.abs(Vr.x)+u.y*Math.abs(Vr.y)+u.z*Math.abs(Vr.z),m=t.dot(Vr),p=i.dot(Vr),x=s.dot(Vr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const _n=new ae,nc=new Lt;let sb=0;class wi extends Jr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=HE,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[t+u]=i.array[s+u];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)nc.fromBufferAttribute(this,i),nc.applyMatrix3(t),this.setXY(i,nc.x,nc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=sl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=$n(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=sl(i,this.array)),i}setX(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=sl(i,this.array)),i}setY(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=sl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=sl(i,this.array)),i}setW(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,u){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),u=$n(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=u,this}setXYZW(t,i,s,u,f){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),u=$n(u,this.array),f=$n(f,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=u,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class jx extends wi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Qx extends wi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Fn extends wi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const ob=new El,ul=new ae,Gh=new ae;class bl{constructor(t=new ae,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ob.setFromPoints(t).getCenter(s);let u=0;for(let f=0,d=t.length;f<d;f++)u=Math.max(u,s.distanceToSquared(t[f]));return this.radius=Math.sqrt(u),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ul.subVectors(t,this.center);const i=ul.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),u=(s-this.radius)*.5;this.center.addScaledVector(ul,u/s),this.radius+=u}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ul.copy(t.center).add(Gh)),this.expandByPoint(ul.copy(t.center).sub(Gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let lb=0;const Ti=new cn,Vh=new qn,Ks=new ae,hi=new El,cl=new El,Tn=new ae;class Yn extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(GE(t)?Qx:jx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ft().getNormalMatrix(t);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(t),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,i,s){return Ti.makeTranslation(t,i,s),this.applyMatrix4(Ti),this}scale(t,i,s){return Ti.makeScale(t,i,s),this.applyMatrix4(Ti),this}lookAt(t){return Vh.lookAt(t),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let u=0,f=t.length;u<f;u++){const d=t[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fn(s,3))}else{const s=Math.min(t.length,i.count);for(let u=0;u<s;u++){const f=t[u];i.setXYZ(u,f.x,f.y,f.z||0)}t.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,u=i.length;s<u;s++){const f=i[s];hi.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(t){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];cl.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(hi.min,cl.min),hi.expandByPoint(Tn),Tn.addVectors(hi.max,cl.max),hi.expandByPoint(Tn)):(hi.expandByPoint(cl.min),hi.expandByPoint(cl.max))}hi.getCenter(s);let u=0;for(let f=0,d=t.count;f<d;f++)Tn.fromBufferAttribute(t,f),u=Math.max(u,s.distanceToSquared(Tn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Tn.fromBufferAttribute(h,p),m&&(Ks.fromBufferAttribute(t,p),Tn.add(Ks)),u=Math.max(u,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,u=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new wi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let b=0;b<s.count;b++)h[b]=new ae,m[b]=new ae;const p=new ae,x=new ae,v=new ae,_=new Lt,E=new Lt,R=new Lt,w=new ae,y=new ae;function S(b,L,F){p.fromBufferAttribute(s,b),x.fromBufferAttribute(s,L),v.fromBufferAttribute(s,F),_.fromBufferAttribute(f,b),E.fromBufferAttribute(f,L),R.fromBufferAttribute(f,F),x.sub(p),v.sub(p),E.sub(_),R.sub(_);const k=1/(E.x*R.y-R.x*E.y);isFinite(k)&&(w.copy(x).multiplyScalar(R.y).addScaledVector(v,-E.y).multiplyScalar(k),y.copy(v).multiplyScalar(E.x).addScaledVector(x,-R.x).multiplyScalar(k),h[b].add(w),h[L].add(w),h[F].add(w),m[b].add(y),m[L].add(y),m[F].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let b=0,L=N.length;b<L;++b){const F=N[b],k=F.start,ee=F.count;for(let fe=k,J=k+ee;fe<J;fe+=3)S(t.getX(fe+0),t.getX(fe+1),t.getX(fe+2))}const z=new ae,C=new ae,D=new ae,U=new ae;function P(b){D.fromBufferAttribute(u,b),U.copy(D);const L=h[b];z.copy(L),z.sub(D.multiplyScalar(D.dot(L))).normalize(),C.crossVectors(U,L);const k=C.dot(m[b])<0?-1:1;d.setXYZW(b,z.x,z.y,z.z,k)}for(let b=0,L=N.length;b<L;++b){const F=N[b],k=F.start,ee=F.count;for(let fe=k,J=k+ee;fe<J;fe+=3)P(t.getX(fe+0)),P(t.getX(fe+1)),P(t.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const u=new ae,f=new ae,d=new ae,h=new ae,m=new ae,p=new ae,x=new ae,v=new ae;if(t)for(let _=0,E=t.count;_<E;_+=3){const R=t.getX(_+0),w=t.getX(_+1),y=t.getX(_+2);u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),x.subVectors(d,f),v.subVectors(u,f),x.cross(v),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),h.add(x),m.add(x),p.add(x),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,E=i.count;_<E;_+=3)u.fromBufferAttribute(i,_+0),f.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),x.subVectors(d,f),v.subVectors(u,f),x.cross(v),s.setXYZ(_+0,x.x,x.y,x.z),s.setXYZ(_+1,x.x,x.y,x.z),s.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,v=h.normalized,_=new p.constructor(m.length*x);let E=0,R=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?E=m[w]*h.data.stride+h.offset:E=m[w]*x;for(let S=0;S<x;S++)_[R++]=p[E++]}return new wi(_,x,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yn,s=this.index.array,u=this.attributes;for(const h in u){const m=u[h],p=t(m,s);i.setAttribute(h,p)}const f=this.morphAttributes;for(const h in f){const m=[],p=f[h];for(let x=0,v=p.length;x<v;x++){const _=p[x],E=t(_,s);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const u={};let f=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,_=p.length;v<_;v++){const E=p[v];x.push(E.toJSON(t.data))}x.length>0&&(u[m]=x,f=!0)}f&&(t.data.morphAttributes=u,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const u=t.attributes;for(const p in u){const x=u[p];this.setAttribute(p,x.clone(i))}const f=t.morphAttributes;for(const p in f){const x=[],v=f[p];for(let _=0,E=v.length;_<E;_++)x.push(v[_].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new ae,ub=new ae,cb=new ft;class gr{constructor(t=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,u){return this.normal.set(t,i,s),this.constant=u,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const u=kh.subVectors(s,i).cross(ub.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const u=t.delta(kh),f=this.normal.dot(u);if(f===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(u,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||cb.getNormalMatrix(t),u=this.coplanarPoint(kh).applyMatrix4(t),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let fb=0;class oo extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=_l,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cx,this.blendDst=wx,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=LE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eh,this.stencilZFail=Eh,this.stencilZPass=Eh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector2&&s&&s.isVector2||u&&u.isEuler&&s&&s.isEuler||u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}if(i){const f=u(t.textures),d=u(t.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new gr().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Lt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const u=i.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Da=new ae,Xh=new ae,ic=new ae,ac=new ae;class tm{constructor(t=new ae,i=new ae(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Da)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Da.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Da.copy(this.origin).addScaledVector(this.direction,i),Da.distanceToSquared(t))}distanceSqToSegment(t,i,s,u){Xh.copy(t).add(i).multiplyScalar(.5),ic.copy(i).sub(t).normalize(),ac.copy(this.origin).sub(Xh);const f=t.distanceTo(i)*.5,d=-this.direction.dot(ic),h=ac.dot(this.direction),m=-ac.dot(ic),p=ac.lengthSq(),x=Math.abs(1-d*d);let v,_,E,R;if(x>0)if(v=d*m-h,_=d*h-m,R=f*x,v>=0)if(_>=-R)if(_<=R){const w=1/x;v*=w,_*=w,E=v*(v+d*_+2*h)+_*(d*v+_+2*m)+p}else _=f,v=Math.max(0,-(d*_+h)),E=-v*v+_*(_+2*m)+p;else _=-f,v=Math.max(0,-(d*_+h)),E=-v*v+_*(_+2*m)+p;else _<=-R?(v=Math.max(0,-(-d*f+h)),_=v>0?-f:Math.min(Math.max(-f,-m),f),E=-v*v+_*(_+2*m)+p):_<=R?(v=0,_=Math.min(Math.max(-f,-m),f),E=_*(_+2*m)+p):(v=Math.max(0,-(d*f+h)),_=v>0?f:Math.min(Math.max(-f,-m),f),E=-v*v+_*(_+2*m)+p);else _=d>0?-f:f,v=Math.max(0,-(d*_+h)),E=-v*v+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),u&&u.copy(Xh).addScaledVector(ic,_),E}intersectSphere(t,i){if(t.radius<0)return null;Da.subVectors(t.center,this.origin);const s=Da.dot(this.direction),u=Da.dot(Da)-s*s,f=t.radius*t.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,u,f,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(t.min.x-_.x)*p,u=(t.max.x-_.x)*p):(s=(t.max.x-_.x)*p,u=(t.min.x-_.x)*p),x>=0?(f=(t.min.y-_.y)*x,d=(t.max.y-_.y)*x):(f=(t.max.y-_.y)*x,d=(t.min.y-_.y)*x),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),v>=0?(h=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),s>m||h>u)||((h>s||s!==s)&&(s=h),(m<u||u!==u)&&(u=m),u<0)?null:this.at(s>=0?s:u,i)}intersectsBox(t){return this.intersectBox(t,Da)!==null}intersectTriangle(t,i,s,u,f){const d=this.origin,h=this.direction,m=h.x,p=h.y,x=h.z,v=t.x-d.x,_=t.y-d.y,E=t.z-d.z,R=i.x-d.x,w=i.y-d.y,y=i.z-d.z,S=s.x-d.x,N=s.y-d.y,z=s.z-d.z,C=Math.abs(m),D=Math.abs(p),U=Math.abs(x);let P,b,L,F,k,ee,fe,J,ne,q,Y,he;if(C>=D&&C>=U?(L=m,ee=v,ne=R,he=S,m>=0?(P=p,b=x,F=_,k=E,fe=w,J=y,q=N,Y=z):(P=x,b=p,F=E,k=_,fe=y,J=w,q=z,Y=N)):D>=U?(L=p,ee=_,ne=w,he=N,p>=0?(P=x,b=m,F=E,k=v,fe=y,J=R,q=z,Y=S):(P=m,b=x,F=v,k=E,fe=R,J=y,q=S,Y=z)):(L=x,ee=E,ne=y,he=z,x>=0?(P=m,b=p,F=v,k=_,fe=R,J=w,q=S,Y=N):(P=p,b=m,F=_,k=v,fe=w,J=R,q=N,Y=S)),L===0)return null;const K=P/L,ue=b/L,xe=1/L,Ce=F-K*ee,Xe=k-ue*ee,B=fe-K*ne,ge=J-ue*ne,Re=q-K*he,j=Y-ue*he,pe=Re*ge-j*B,Te=Ce*j-Xe*Re,Be=B*Xe-ge*Ce;if(u){if(pe<0||Te<0||Be<0)return null}else if((pe<0||Te<0||Be<0)&&(pe>0||Te>0||Be>0))return null;const ve=pe+Te+Be;if(ve===0)return null;const we=xe*(pe*ee+Te*ne+Be*he);return(ve>0?we<0:we>0)?null:this.at(we/ve,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nm extends oo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qr,this.combine=Nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const kv=new cn,kr=new tm,rc=new bl,Xv=new ae,sc=new ae,oc=new ae,lc=new ae,Wh=new ae,uc=new ae,Wv=new ae,cc=new ae;class ca extends qn{constructor(t=new Yn,i=new nm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(t,i){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(u,t);const h=this.morphTargetInfluences;if(f&&h){uc.set(0,0,0);for(let m=0,p=f.length;m<p;m++){const x=h[m],v=f[m];x!==0&&(Wh.fromBufferAttribute(v,t),d?uc.addScaledVector(Wh,x):uc.addScaledVector(Wh.sub(i),x))}i.add(uc)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),rc.copy(s.boundingSphere),rc.applyMatrix4(f),kr.copy(t.ray).recast(t.near),!(rc.containsPoint(kr.origin)===!1&&(kr.intersectSphere(rc,Xv)===null||kr.origin.distanceToSquared(Xv)>(t.far-t.near)**2))&&(kv.copy(f).invert(),kr.copy(t.ray).applyMatrix4(kv),!(s.boundingBox!==null&&kr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,kr)))}_computeIntersections(t,i,s){let u;const f=this.geometry,d=this.material,h=f.index,m=f.attributes.position,p=f.attributes.uv,x=f.attributes.uv1,v=f.attributes.normal,_=f.groups,E=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,w=_.length;R<w;R++){const y=_[R],S=d[y.materialIndex],N=Math.max(y.start,E.start),z=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let C=N,D=z;C<D;C+=3){const U=h.getX(C),P=h.getX(C+1),b=h.getX(C+2);u=fc(this,S,t,s,p,x,v,U,P,b),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=y.materialIndex,i.push(u))}}else{const R=Math.max(0,E.start),w=Math.min(h.count,E.start+E.count);for(let y=R,S=w;y<S;y+=3){const N=h.getX(y),z=h.getX(y+1),C=h.getX(y+2);u=fc(this,d,t,s,p,x,v,N,z,C),u&&(u.faceIndex=Math.floor(y/3),i.push(u))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,w=_.length;R<w;R++){const y=_[R],S=d[y.materialIndex],N=Math.max(y.start,E.start),z=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let C=N,D=z;C<D;C+=3){const U=C,P=C+1,b=C+2;u=fc(this,S,t,s,p,x,v,U,P,b),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=y.materialIndex,i.push(u))}}else{const R=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let y=R,S=w;y<S;y+=3){const N=y,z=y+1,C=y+2;u=fc(this,d,t,s,p,x,v,N,z,C),u&&(u.faceIndex=Math.floor(y/3),i.push(u))}}}}function db(o,t,i,s,u,f,d,h){let m;if(t.side===ti?m=s.intersectTriangle(d,f,u,!0,h):m=s.intersectTriangle(u,f,d,t.side===Zr,h),m===null)return null;cc.copy(h),cc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(cc);return p<i.near||p>i.far?null:{distance:p,point:cc.clone(),object:o}}function fc(o,t,i,s,u,f,d,h,m,p){o.getVertexPosition(h,sc),o.getVertexPosition(m,oc),o.getVertexPosition(p,lc);const x=db(o,t,i,s,sc,oc,lc,Wv);if(x){const v=new ae;Fi.getBarycoord(Wv,sc,oc,lc,v),u&&(x.uv=Fi.getInterpolatedAttribute(u,h,m,p,v,new Lt)),f&&(x.uv1=Fi.getInterpolatedAttribute(f,h,m,p,v,new Lt)),d&&(x.normal=Fi.getInterpolatedAttribute(d,h,m,p,v,new ae),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new ae,materialIndex:0};Fi.getNormal(sc,oc,lc,_.normal),x.face=_,x.barycoord=v}return x}class hb extends Bn{constructor(t=null,i=1,s=1,u,f,d,h,m,p=Un,x=Un,v,_){super(null,d,h,m,p,x,u,f,v,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xr=new bl,pb=new Lt(.5,.5),dc=new ae;class Jx{constructor(t=new gr,i=new gr,s=new gr,u=new gr,f=new gr,d=new gr){this.planes=[t,i,s,u,f,d]}set(t,i,s,u,f,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa,s=!1){const u=this.planes,f=t.elements,d=f[0],h=f[1],m=f[2],p=f[3],x=f[4],v=f[5],_=f[6],E=f[7],R=f[8],w=f[9],y=f[10],S=f[11],N=f[12],z=f[13],C=f[14],D=f[15];if(u[0].setComponents(p-d,E-x,S-R,D-N).normalize(),u[1].setComponents(p+d,E+x,S+R,D+N).normalize(),u[2].setComponents(p+h,E+v,S+w,D+z).normalize(),u[3].setComponents(p-h,E-v,S-w,D-z).normalize(),s)u[4].setComponents(m,_,y,C).normalize(),u[5].setComponents(p-m,E-_,S-y,D-C).normalize();else if(u[4].setComponents(p-m,E-_,S-y,D-C).normalize(),i===sa)u[5].setComponents(p+m,E+_,S+y,D+C).normalize();else if(i===Uc)u[5].setComponents(m,_,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(t){Xr.center.set(0,0,0);const i=pb.distanceTo(t.center);return Xr.radius=.7071067811865476+i,Xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(t){const i=this.planes,s=t.center,u=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const u=i[s];if(dc.x=u.normal.x>0?t.max.x:t.min.x,dc.y=u.normal.y>0?t.max.y:t.min.y,dc.z=u.normal.z>0?t.max.z:t.min.z,u.distanceToPoint(dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class im extends oo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oc=new ae,Pc=new ae,qv=new cn,fl=new tm,hc=new bl,qh=new ae,Yv=new ae;class mb extends qn{constructor(t=new Yn,i=new im){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let u=1,f=i.count;u<f;u++)Oc.fromBufferAttribute(i,u-1),Pc.fromBufferAttribute(i,u),s[u]=s[u-1],s[u]+=Oc.distanceTo(Pc);t.setAttribute("lineDistance",new Fn(s,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,u=this.matrixWorld,f=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),hc.copy(s.boundingSphere),hc.applyMatrix4(u),hc.radius+=f,t.ray.intersectsSphere(hc)===!1)return;qv.copy(u).invert(),fl.copy(t.ray).applyMatrix4(qv);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=s.index,_=s.attributes.position;if(x!==null){const E=Math.max(0,d.start),R=Math.min(x.count,d.start+d.count);for(let w=E,y=R-1;w<y;w+=p){const S=x.getX(w),N=x.getX(w+1),z=pc(this,t,fl,m,S,N,w);z&&i.push(z)}if(this.isLineLoop){const w=x.getX(R-1),y=x.getX(E),S=pc(this,t,fl,m,w,y,R-1);S&&i.push(S)}}else{const E=Math.max(0,d.start),R=Math.min(_.count,d.start+d.count);for(let w=E,y=R-1;w<y;w+=p){const S=pc(this,t,fl,m,w,w+1,w);S&&i.push(S)}if(this.isLineLoop){const w=pc(this,t,fl,m,R-1,E,R-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function pc(o,t,i,s,u,f,d){const h=o.geometry.attributes.position;if(Oc.fromBufferAttribute(h,u),Pc.fromBufferAttribute(h,f),i.distanceSqToSegment(Oc,Pc,qh,Yv)>s)return;qh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(qh);if(!(p<t.near||p>t.far))return{distance:p,point:Yv.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const Zv=new ae,Kv=new ae;class $x extends mb{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let u=0,f=i.count;u<f;u+=2)Zv.fromBufferAttribute(i,u),Kv.fromBufferAttribute(i,u+1),s[u]=u===0?0:s[u-1],s[u+1]=s[u]+Zv.distanceTo(Kv);t.setAttribute("lineDistance",new Fn(s,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eS extends oo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jv=new cn,Fp=new tm,mc=new bl,gc=new ae;class gb extends qn{constructor(t=new Yn,i=new eS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,u=this.matrixWorld,f=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),mc.copy(s.boundingSphere),mc.applyMatrix4(u),mc.radius+=f,t.ray.intersectsSphere(mc)===!1)return;jv.copy(u).invert(),Fp.copy(t.ray).applyMatrix4(jv);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,v=s.attributes.position;if(p!==null){const _=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let R=_,w=E;R<w;R++){const y=p.getX(R);gc.fromBufferAttribute(v,y),Qv(gc,y,m,u,t,i,this)}}else{const _=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let R=_,w=E;R<w;R++)gc.fromBufferAttribute(v,R),Qv(gc,R,m,u,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function Qv(o,t,i,s,u,f,d){const h=Fp.distanceSqToPoint(o);if(h<i){const m=new ae;Fp.closestPointToPoint(o,m),m.applyMatrix4(s);const p=u.ray.origin.distanceTo(m);if(p<u.near||p>u.far)return;f.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class tS extends Bn{constructor(t=[],i=Kr,s,u,f,d,h,m,p,x){super(t,i,s,u,f,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _b extends Bn{constructor(t,i,s,u,f,d,h,m,p){super(t,i,s,u,f,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yl extends Bn{constructor(t,i,s=la,u,f,d,h=Un,m=Un,p,x=Ia,v=1){if(x!==Ia&&x!==Yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:v};super(_,u,f,d,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $p(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class vb extends yl{constructor(t,i=la,s=Kr,u,f,d=Un,h=Un,m,p=Ia){const x={width:t,height:t,depth:1},v=[x,x,x,x,x,x];super(t,t,i,s,u,f,d,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class nS extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Tl extends Yn{constructor(t=1,i=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const m=[],p=[],x=[],v=[];let _=0,E=0;R("z","y","x",-1,-1,s,i,t,d,f,0),R("z","y","x",1,-1,s,i,-t,d,f,1),R("x","z","y",1,1,t,s,i,u,d,2),R("x","z","y",1,-1,t,s,-i,u,d,3),R("x","y","z",1,-1,t,i,s,u,f,4),R("x","y","z",-1,-1,t,i,-s,u,f,5),this.setIndex(m),this.setAttribute("position",new Fn(p,3)),this.setAttribute("normal",new Fn(x,3)),this.setAttribute("uv",new Fn(v,2));function R(w,y,S,N,z,C,D,U,P,b,L){const F=C/P,k=D/b,ee=C/2,fe=D/2,J=U/2,ne=P+1,q=b+1;let Y=0,he=0;const K=new ae;for(let ue=0;ue<q;ue++){const xe=ue*k-fe;for(let Ce=0;Ce<ne;Ce++){const Xe=Ce*F-ee;K[w]=Xe*N,K[y]=xe*z,K[S]=J,p.push(K.x,K.y,K.z),K[w]=0,K[y]=0,K[S]=U>0?1:-1,x.push(K.x,K.y,K.z),v.push(Ce/P),v.push(1-ue/b),Y+=1}}for(let ue=0;ue<b;ue++)for(let xe=0;xe<P;xe++){const Ce=_+xe+ne*ue,Xe=_+xe+ne*(ue+1),B=_+(xe+1)+ne*(ue+1),ge=_+(xe+1)+ne*ue;m.push(Ce,Xe,ge),m.push(Xe,B,ge),he+=6}h.addGroup(E,he,L),E+=he,_+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Al extends Yn{constructor(t=[],i=[],s=1,u=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:u};const f=[],d=[];h(u),p(s),x(),this.setAttribute("position",new Fn(f,3)),this.setAttribute("normal",new Fn(f.slice(),3)),this.setAttribute("uv",new Fn(d,2)),u===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const z=new ae,C=new ae,D=new ae;for(let U=0;U<i.length;U+=3)E(i[U+0],z),E(i[U+1],C),E(i[U+2],D),m(z,C,D,N)}function m(N,z,C,D){const U=D+1,P=[];for(let b=0;b<=U;b++){P[b]=[];const L=N.clone().lerp(C,b/U),F=z.clone().lerp(C,b/U),k=U-b;for(let ee=0;ee<=k;ee++)ee===0&&b===U?P[b][ee]=L:P[b][ee]=L.clone().lerp(F,ee/k)}for(let b=0;b<U;b++)for(let L=0;L<2*(U-b)-1;L++){const F=Math.floor(L/2);L%2===0?(_(P[b][F+1]),_(P[b+1][F]),_(P[b][F])):(_(P[b][F+1]),_(P[b+1][F+1]),_(P[b+1][F]))}}function p(N){const z=new ae;for(let C=0;C<f.length;C+=3)z.x=f[C+0],z.y=f[C+1],z.z=f[C+2],z.normalize().multiplyScalar(N),f[C+0]=z.x,f[C+1]=z.y,f[C+2]=z.z}function x(){const N=new ae;for(let z=0;z<f.length;z+=3){N.x=f[z+0],N.y=f[z+1],N.z=f[z+2];const C=y(N)/2/Math.PI+.5,D=S(N)/Math.PI+.5;d.push(C,1-D)}R(),v()}function v(){for(let N=0;N<d.length;N+=6){const z=d[N+0],C=d[N+2],D=d[N+4],U=Math.max(z,C,D),P=Math.min(z,C,D);U>.9&&P<.1&&(z<.2&&(d[N+0]+=1),C<.2&&(d[N+2]+=1),D<.2&&(d[N+4]+=1))}}function _(N){f.push(N.x,N.y,N.z)}function E(N,z){const C=N*3;z.x=t[C+0],z.y=t[C+1],z.z=t[C+2]}function R(){const N=new ae,z=new ae,C=new ae,D=new ae,U=new Lt,P=new Lt,b=new Lt;for(let L=0,F=0;L<f.length;L+=9,F+=6){N.set(f[L+0],f[L+1],f[L+2]),z.set(f[L+3],f[L+4],f[L+5]),C.set(f[L+6],f[L+7],f[L+8]),U.set(d[F+0],d[F+1]),P.set(d[F+2],d[F+3]),b.set(d[F+4],d[F+5]),D.copy(N).add(z).add(C).divideScalar(3);const k=y(D);w(U,F+0,N,k),w(P,F+2,z,k),w(b,F+4,C,k)}}function w(N,z,C,D){D<0&&N.x===1&&(d[z]=N.x-1),C.x===0&&C.z===0&&(d[z]=D/2/Math.PI+.5)}function y(N){return Math.atan2(N.z,-N.x)}function S(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.vertices,t.indices,t.radius,t.detail)}}class am extends Al{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,u=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],f=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(u,f,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new am(t.radius,t.detail)}}class rm extends Al{constructor(t=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],u=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,u,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new rm(t.radius,t.detail)}}class Fc extends Yn{constructor(t=1,i=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:u};const f=t/2,d=i/2,h=Math.floor(s),m=Math.floor(u),p=h+1,x=m+1,v=t/h,_=i/m,E=[],R=[],w=[],y=[];for(let S=0;S<x;S++){const N=S*_-d;for(let z=0;z<p;z++){const C=z*v-f;R.push(C,-N,0),w.push(0,0,1),y.push(z/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let N=0;N<h;N++){const z=N+p*S,C=N+p*(S+1),D=N+1+p*(S+1),U=N+1+p*S;E.push(z,C,U),E.push(C,D,U)}this.setIndex(E),this.setAttribute("position",new Fn(R,3)),this.setAttribute("normal",new Fn(w,3)),this.setAttribute("uv",new Fn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.width,t.height,t.widthSegments,t.heightSegments)}}class sm extends Al{constructor(t=1,i=0){const s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],u=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,u,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new sm(t.radius,t.detail)}}function ro(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const u=o[i][s];if(Jv(u))u.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=u.clone();else if(Array.isArray(u))if(Jv(u[0])){const f=[];for(let d=0,h=u.length;d<h;d++)f[d]=u[d].clone();t[i][s]=f}else t[i][s]=u.slice();else t[i][s]=u}}return t}function Wn(o){const t={};for(let i=0;i<o.length;i++){const s=ro(o[i]);for(const u in s)t[u]=s[u]}return t}function Jv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function xb(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function iS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}const Sb={clone:ro,merge:Wn};var yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fa extends oo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yb,this.fragmentShader=Mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ro(t.uniforms),this.uniformsGroups=xb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?i.uniforms[u]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[u]={type:"m4",value:d.toArray()}:i.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const u=t.uniforms[s];switch(this.uniforms[s]={},u.type){case"t":this.uniforms[s].value=i[u.value]||null;break;case"c":this.uniforms[s].value=new gt().setHex(u.value);break;case"v2":this.uniforms[s].value=new Lt().fromArray(u.value);break;case"v3":this.uniforms[s].value=new ae().fromArray(u.value);break;case"v4":this.uniforms[s].value=new un().fromArray(u.value);break;case"m3":this.uniforms[s].value=new ft().fromArray(u.value);break;case"m4":this.uniforms[s].value=new cn().fromArray(u.value);break;default:this.uniforms[s].value=u.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Eb extends fa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bb extends oo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tb extends oo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _c=new ae,vc=new so,na=new ae;class aS extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_c,vc,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,vc,na.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(_c,vc,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,vc,na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new ae,$v=new Lt,ex=new Lt;class Ri extends aS{constructor(t=50,i=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Bp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bp*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-t/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(mr.x,mr.y).multiplyScalar(-t/mr.z)}getViewSize(t,i){return this.getViewBounds(t,$v,ex),i.subVectors(ex,$v)}setViewOffset(t,i,s,u,f,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(bh*.5*this.fov)/this.zoom,s=2*i,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;f+=d.offsetX*u/m,i-=d.offsetY*s/p,u*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(f+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class rS extends aS{constructor(t=-1,i=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-t,d=s+t,h=u+i,m=u-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,d=f+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const js=-90,Qs=1;class Ab extends qn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Ri(js,Qs,t,i);u.layers=this.layers,this.add(u);const f=new Ri(js,Qs,t,i);f.layers=this.layers,this.add(f);const d=new Ri(js,Qs,t,i);d.layers=this.layers,this.add(d);const h=new Ri(js,Qs,t,i);h.layers=this.layers,this.add(h);const m=new Ri(js,Qs,t,i);m.layers=this.layers,this.add(m);const p=new Ri(js,Qs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,u,f,d,h,m]=i;for(const p of i)this.remove(p);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Uc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,m,p,x]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,u),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,1,u),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,u),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,u),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,u),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,u),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(v,_,E),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class Rb extends Ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Cb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const fm=class fm{constructor(t,i,s,u){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,u)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,u){const f=this.elements;return f[0]=t,f[2]=i,f[1]=s,f[3]=u,this}};fm.prototype.isMatrix2=!0;let tx=fm;class wb extends $x{constructor(t=10,i=10,s=4473924,u=8947848){s=new gt(s),u=new gt(u);const f=i/2,d=t/i,h=t/2,m=[],p=[];for(let _=0,E=0,R=-h;_<=i;_++,R+=d){m.push(-h,0,R,h,0,R),m.push(R,0,-h,R,0,h);const w=_===f?s:u;w.toArray(p,E),E+=3,w.toArray(p,E),E+=3,w.toArray(p,E),E+=3,w.toArray(p,E),E+=3}const x=new Yn;x.setAttribute("position",new Fn(m,3)),x.setAttribute("color",new Fn(p,3));const v=new im({vertexColors:!0,toneMapped:!1});super(x,v),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function nx(o,t,i,s){const u=Nb(s);switch(i){case kx:return o*t;case Wx:return o*t/u.components*u.byteLength;case Zp:return o*t/u.components*u.byteLength;case jr:return o*t*2/u.components*u.byteLength;case Kp:return o*t*2/u.components*u.byteLength;case Xx:return o*t*3/u.components*u.byteLength;case Hi:return o*t*4/u.components*u.byteLength;case jp:return o*t*4/u.components*u.byteLength;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case bc:case Tc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case up:case fp:return Math.max(o,16)*Math.max(t,8)/4;case lp:case cp:return Math.max(o,8)*Math.max(t,8)/2;case dp:case hp:case mp:case gp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case pp:case Cc:case _p:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case vp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case xp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Sp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case yp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Mp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Ep:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case bp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Tp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Ap:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Cp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case wp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Np:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Dp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Up:case Lp:case Op:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Pp:case Ip:return Math.ceil(o/4)*Math.ceil(t/4)*8;case wc:case zp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Nb(o){switch(o){case Ci:case Fx:return{byteLength:1,components:1};case xl:case Hx:case ua:return{byteLength:2,components:1};case qp:case Yp:return{byteLength:2,components:4};case la:case Wp:case ra:return{byteLength:4,components:1};case Gx:case Vx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sS(){let o=null,t=!1,i=null,s=null;function u(f,d){s=o.requestAnimationFrame(u),i(f,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(u),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function Db(o){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,v=p.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,p,x),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const x=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,x);else{v.sort((E,R)=>E.start-R.start);let _=0;for(let E=1;E<v.length;E++){const R=v[_],w=v[E];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++_,v[_]=w)}v.length=_+1;for(let E=0,R=v.length;E<R;E++){const w=v[E];o.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:u,remove:f,update:d}}var Ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lb=`#ifdef USE_ALPHAHASH
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
#endif`,Ob=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bb=`#ifdef USE_AOMAP
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
#endif`,Fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hb=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wb=`#ifdef USE_IRIDESCENCE
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
#endif`,qb=`#ifdef USE_BUMPMAP
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
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,nT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iT=`vec3 transformedNormal = objectNormal;
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
#endif`,aT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lT="gl_FragColor = linearToOutputTexel( gl_FragColor );",uT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dT=`#ifdef USE_ENVMAP
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
#endif`,hT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_T=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xT=`#ifdef USE_GRADIENTMAP
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
}`,ST=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ET=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,bT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,TT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,NT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DT=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,PT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VT=`#if defined( USE_POINTS_UV )
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
#endif`,kT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZT=`#ifdef USE_MORPHTARGETS
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
#endif`,KT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,t1=`#ifdef USE_NORMALMAP
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
#endif`,n1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,l1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,g1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,_1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,v1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,M1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L1=`uniform sampler2D t2D;
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`#include <common>
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
}`,F1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H1=`#define DISTANCE
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
}`,G1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`uniform float scale;
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
}`,W1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,Y1=`uniform vec3 diffuse;
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
}`,Z1=`#define LAMBERT
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
}`,K1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,j1=`#define MATCAP
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
}`,Q1=`#define MATCAP
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
}`,J1=`#define NORMAL
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
}`,$1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eA=`#define PHONG
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
}`,tA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,nA=`#define STANDARD
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
}`,iA=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,aA=`#define TOON
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
}`,rA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,sA=`uniform float size;
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
}`,oA=`uniform vec3 diffuse;
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
}`,lA=`#include <common>
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
}`,uA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,cA=`uniform float rotation;
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
}`,fA=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Ub,alphahash_pars_fragment:Lb,alphamap_fragment:Ob,alphamap_pars_fragment:Pb,alphatest_fragment:Ib,alphatest_pars_fragment:zb,aomap_fragment:Bb,aomap_pars_fragment:Fb,batching_pars_vertex:Hb,batching_vertex:Gb,begin_vertex:Vb,beginnormal_vertex:kb,bsdfs:Xb,iridescence_fragment:Wb,bumpmap_pars_fragment:qb,clipping_planes_fragment:Yb,clipping_planes_pars_fragment:Zb,clipping_planes_pars_vertex:Kb,clipping_planes_vertex:jb,color_fragment:Qb,color_pars_fragment:Jb,color_pars_vertex:$b,color_vertex:eT,common:tT,cube_uv_reflection_fragment:nT,defaultnormal_vertex:iT,displacementmap_pars_vertex:aT,displacementmap_vertex:rT,emissivemap_fragment:sT,emissivemap_pars_fragment:oT,colorspace_fragment:lT,colorspace_pars_fragment:uT,envmap_fragment:cT,envmap_common_pars_fragment:fT,envmap_pars_fragment:dT,envmap_pars_vertex:hT,envmap_physical_pars_fragment:bT,envmap_vertex:pT,fog_vertex:mT,fog_pars_vertex:gT,fog_fragment:_T,fog_pars_fragment:vT,gradientmap_pars_fragment:xT,lightmap_pars_fragment:ST,lights_lambert_fragment:yT,lights_lambert_pars_fragment:MT,lights_pars_begin:ET,lights_toon_fragment:TT,lights_toon_pars_fragment:AT,lights_phong_fragment:RT,lights_phong_pars_fragment:CT,lights_physical_fragment:wT,lights_physical_pars_fragment:NT,lights_fragment_begin:DT,lights_fragment_maps:UT,lights_fragment_end:LT,lightprobes_pars_fragment:OT,logdepthbuf_fragment:PT,logdepthbuf_pars_fragment:IT,logdepthbuf_pars_vertex:zT,logdepthbuf_vertex:BT,map_fragment:FT,map_pars_fragment:HT,map_particle_fragment:GT,map_particle_pars_fragment:VT,metalnessmap_fragment:kT,metalnessmap_pars_fragment:XT,morphinstance_vertex:WT,morphcolor_vertex:qT,morphnormal_vertex:YT,morphtarget_pars_vertex:ZT,morphtarget_vertex:KT,normal_fragment_begin:jT,normal_fragment_maps:QT,normal_pars_fragment:JT,normal_pars_vertex:$T,normal_vertex:e1,normalmap_pars_fragment:t1,clearcoat_normal_fragment_begin:n1,clearcoat_normal_fragment_maps:i1,clearcoat_pars_fragment:a1,iridescence_pars_fragment:r1,opaque_fragment:s1,packing:o1,premultiplied_alpha_fragment:l1,project_vertex:u1,dithering_fragment:c1,dithering_pars_fragment:f1,roughnessmap_fragment:d1,roughnessmap_pars_fragment:h1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:m1,shadowmap_vertex:g1,shadowmask_pars_fragment:_1,skinbase_vertex:v1,skinning_pars_vertex:x1,skinning_vertex:S1,skinnormal_vertex:y1,specularmap_fragment:M1,specularmap_pars_fragment:E1,tonemapping_fragment:b1,tonemapping_pars_fragment:T1,transmission_fragment:A1,transmission_pars_fragment:R1,uv_pars_fragment:C1,uv_pars_vertex:w1,uv_vertex:N1,worldpos_vertex:D1,background_vert:U1,background_frag:L1,backgroundCube_vert:O1,backgroundCube_frag:P1,cube_vert:I1,cube_frag:z1,depth_vert:B1,depth_frag:F1,distance_vert:H1,distance_frag:G1,equirect_vert:V1,equirect_frag:k1,linedashed_vert:X1,linedashed_frag:W1,meshbasic_vert:q1,meshbasic_frag:Y1,meshlambert_vert:Z1,meshlambert_frag:K1,meshmatcap_vert:j1,meshmatcap_frag:Q1,meshnormal_vert:J1,meshnormal_frag:$1,meshphong_vert:eA,meshphong_frag:tA,meshphysical_vert:nA,meshphysical_frag:iA,meshtoon_vert:aA,meshtoon_frag:rA,points_vert:sA,points_frag:oA,shadow_vert:lA,shadow_frag:uA,sprite_vert:cA,sprite_frag:fA},Ge={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},aa={basic:{uniforms:Wn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Wn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Wn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Wn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Wn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new gt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Wn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Wn([Ge.points,Ge.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Wn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Wn([Ge.common,Ge.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Wn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Wn([Ge.sprite,Ge.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Wn([Ge.common,Ge.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Wn([Ge.lights,Ge.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};aa.physical={uniforms:Wn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const xc={r:0,b:0,g:0},dA=new cn,oS=new ft;oS.set(-1,0,0,0,1,0,0,0,1);function hA(o,t,i,s,u,f){const d=new gt(0);let h=u===!0?0:1,m,p,x=null,v=0,_=null;function E(N){let z=N.isScene===!0?N.background:null;if(z&&z.isTexture){const C=N.backgroundBlurriness>0;z=t.get(z,C)}return z}function R(N){let z=!1;const C=E(N);C===null?y(d,h):C&&C.isColor&&(y(C,1),z=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,f):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(N,z){const C=E(z);C&&(C.isCubeTexture||C.mapping===Bc)?(p===void 0&&(p=new ca(new Tl(1,1,1),new fa({name:"BackgroundCubeMaterial",uniforms:ro(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(dA.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(oS),p.material.toneMapped=Nt.getTransfer(C.colorSpace)!==qt,(x!==C||v!==C.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,x=C,v=C.version,_=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new ca(new Fc(2,2),new fa({name:"BackgroundMaterial",uniforms:ro(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Nt.getTransfer(C.colorSpace)!==qt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||v!==C.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,x=C,v=C.version,_=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function y(N,z){N.getRGB(xc,iS(o)),i.buffers.color.setClear(xc.r,xc.g,xc.b,z,f)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,z=1){d.set(N),h=z,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,y(d,h)},render:R,addToRenderList:w,dispose:S}}function pA(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=_(null);let f=u,d=!1;function h(k,ee,fe,J,ne){let q=!1;const Y=v(k,J,fe,ee);f!==Y&&(f=Y,p(f.object)),q=E(k,J,fe,ne),q&&R(k,J,fe,ne),ne!==null&&t.update(ne,o.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,C(k,ee,fe,J),ne!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function m(){return o.createVertexArray()}function p(k){return o.bindVertexArray(k)}function x(k){return o.deleteVertexArray(k)}function v(k,ee,fe,J){const ne=J.wireframe===!0;let q=s[ee.id];q===void 0&&(q={},s[ee.id]=q);const Y=k.isInstancedMesh===!0?k.id:0;let he=q[Y];he===void 0&&(he={},q[Y]=he);let K=he[fe.id];K===void 0&&(K={},he[fe.id]=K);let ue=K[ne];return ue===void 0&&(ue=_(m()),K[ne]=ue),ue}function _(k){const ee=[],fe=[],J=[];for(let ne=0;ne<i;ne++)ee[ne]=0,fe[ne]=0,J[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:fe,attributeDivisors:J,object:k,attributes:{},index:null}}function E(k,ee,fe,J){const ne=f.attributes,q=ee.attributes;let Y=0;const he=fe.getAttributes();for(const K in he)if(he[K].location>=0){const xe=ne[K];let Ce=q[K];if(Ce===void 0&&(K==="instanceMatrix"&&k.instanceMatrix&&(Ce=k.instanceMatrix),K==="instanceColor"&&k.instanceColor&&(Ce=k.instanceColor)),xe===void 0||xe.attribute!==Ce||Ce&&xe.data!==Ce.data)return!0;Y++}return f.attributesNum!==Y||f.index!==J}function R(k,ee,fe,J){const ne={},q=ee.attributes;let Y=0;const he=fe.getAttributes();for(const K in he)if(he[K].location>=0){let xe=q[K];xe===void 0&&(K==="instanceMatrix"&&k.instanceMatrix&&(xe=k.instanceMatrix),K==="instanceColor"&&k.instanceColor&&(xe=k.instanceColor));const Ce={};Ce.attribute=xe,xe&&xe.data&&(Ce.data=xe.data),ne[K]=Ce,Y++}f.attributes=ne,f.attributesNum=Y,f.index=J}function w(){const k=f.newAttributes;for(let ee=0,fe=k.length;ee<fe;ee++)k[ee]=0}function y(k){S(k,0)}function S(k,ee){const fe=f.newAttributes,J=f.enabledAttributes,ne=f.attributeDivisors;fe[k]=1,J[k]===0&&(o.enableVertexAttribArray(k),J[k]=1),ne[k]!==ee&&(o.vertexAttribDivisor(k,ee),ne[k]=ee)}function N(){const k=f.newAttributes,ee=f.enabledAttributes;for(let fe=0,J=ee.length;fe<J;fe++)ee[fe]!==k[fe]&&(o.disableVertexAttribArray(fe),ee[fe]=0)}function z(k,ee,fe,J,ne,q,Y){Y===!0?o.vertexAttribIPointer(k,ee,fe,ne,q):o.vertexAttribPointer(k,ee,fe,J,ne,q)}function C(k,ee,fe,J){w();const ne=J.attributes,q=fe.getAttributes(),Y=ee.defaultAttributeValues;for(const he in q){const K=q[he];if(K.location>=0){let ue=ne[he];if(ue===void 0&&(he==="instanceMatrix"&&k.instanceMatrix&&(ue=k.instanceMatrix),he==="instanceColor"&&k.instanceColor&&(ue=k.instanceColor)),ue!==void 0){const xe=ue.normalized,Ce=ue.itemSize,Xe=t.get(ue);if(Xe===void 0)continue;const B=Xe.buffer,ge=Xe.type,Re=Xe.bytesPerElement,j=ge===o.INT||ge===o.UNSIGNED_INT||ue.gpuType===Wp;if(ue.isInterleavedBufferAttribute){const pe=ue.data,Te=pe.stride,Be=ue.offset;if(pe.isInstancedInterleavedBuffer){for(let ve=0;ve<K.locationSize;ve++)S(K.location+ve,pe.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ve=0;ve<K.locationSize;ve++)y(K.location+ve);o.bindBuffer(o.ARRAY_BUFFER,B);for(let ve=0;ve<K.locationSize;ve++)z(K.location+ve,Ce/K.locationSize,ge,xe,Te*Re,(Be+Ce/K.locationSize*ve)*Re,j)}else{if(ue.isInstancedBufferAttribute){for(let pe=0;pe<K.locationSize;pe++)S(K.location+pe,ue.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<K.locationSize;pe++)y(K.location+pe);o.bindBuffer(o.ARRAY_BUFFER,B);for(let pe=0;pe<K.locationSize;pe++)z(K.location+pe,Ce/K.locationSize,ge,xe,Ce*Re,Ce/K.locationSize*pe*Re,j)}}else if(Y!==void 0){const xe=Y[he];if(xe!==void 0)switch(xe.length){case 2:o.vertexAttrib2fv(K.location,xe);break;case 3:o.vertexAttrib3fv(K.location,xe);break;case 4:o.vertexAttrib4fv(K.location,xe);break;default:o.vertexAttrib1fv(K.location,xe)}}}}N()}function D(){L();for(const k in s){const ee=s[k];for(const fe in ee){const J=ee[fe];for(const ne in J){const q=J[ne];for(const Y in q)x(q[Y].object),delete q[Y];delete J[ne]}}delete s[k]}}function U(k){if(s[k.id]===void 0)return;const ee=s[k.id];for(const fe in ee){const J=ee[fe];for(const ne in J){const q=J[ne];for(const Y in q)x(q[Y].object),delete q[Y];delete J[ne]}}delete s[k.id]}function P(k){for(const ee in s){const fe=s[ee];for(const J in fe){const ne=fe[J];if(ne[k.id]===void 0)continue;const q=ne[k.id];for(const Y in q)x(q[Y].object),delete q[Y];delete ne[k.id]}}}function b(k){for(const ee in s){const fe=s[ee],J=k.isInstancedMesh===!0?k.id:0,ne=fe[J];if(ne!==void 0){for(const q in ne){const Y=ne[q];for(const he in Y)x(Y[he].object),delete Y[he];delete ne[q]}delete fe[J],Object.keys(fe).length===0&&delete s[ee]}}}function L(){F(),d=!0,f!==u&&(f=u,p(f.object))}function F(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:L,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:y,disableUnusedAttributes:N}}function mA(o,t,i){let s;function u(m){s=m}function f(m,p){o.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,x){x!==0&&(o.drawArraysInstanced(s,m,p,x),i.update(p,s,x))}function h(m,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,x);let _=0;for(let E=0;E<x;E++)_+=p[E];i.update(_,s,1)}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function gA(o,t,i,s){let u;function f(){if(u!==void 0)return u;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");u=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(P){return!(P!==Hi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const b=P===ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ci&&P!==ra&&!b&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(rt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:N,maxVaryings:z,maxFragmentUniforms:C,maxSamples:D,samples:U}}function _A(o){const t=this;let i=null,s=0,u=!1,f=!1;const d=new gr,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const E=v.length!==0||_||s!==0||u;return u=_,s=v.length,E},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,_){i=x(v,_,0)},this.setState=function(v,_,E){const R=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,S=o.get(v);if(!u||R===null||R.length===0||f&&!y)f?x(null):p();else{const N=f?0:s,z=N*4;let C=S.clippingState||null;m.value=C,C=x(R,_,z,E);for(let D=0;D!==z;++D)C[D]=i[D];S.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(v,_,E,R){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=m.value,R!==!0||y===null){const S=E+w*4,N=_.matrixWorldInverse;h.getNormalMatrix(N),(y===null||y.length<S)&&(y=new Float32Array(S));for(let z=0,C=E;z!==w;++z,C+=4)d.copy(v[z]).applyMatrix4(N,h),d.normal.toArray(y,C),y[C+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}const to=4,vA=6,xA=20,SA=256,dl=new rS,ix=new gt;let Yh=null,Zh=0,Kh=0,jh=!1;const yA=new ae,Wr=new ae;class ax{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,u=100,f={}){const{size:d=256,position:h=yA}=f;Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,u,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ox(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yh,Zh,Kh),this._renderer.xr.enabled=jh,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Kr||t.mapping===ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ua,format:Hi,colorSpace:Nc,depthBuffer:!1},u=rx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rx(t,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=MA(f)),this._blurMaterial=bA(f,t,i),this._ggxMaterial=EA(f,t,i)}return u}_compileMaterial(t){const i=new ca(new Yn,t);this._renderer.compile(i,dl)}_sceneToCubeUV(t,i,s,u,f){const m=new Ri(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,E=v.toneMapping;v.getClearColor(ix),v.toneMapping=oa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(u),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ca(new Tl,new nm({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let S=!1;const N=t.background;N?N.isColor&&(y.color.copy(N),t.background=null,S=!0):(y.color.copy(ix),S=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(m.up.set(0,p[z],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+x[z],f.y,f.z)):C===1?(m.up.set(0,0,p[z]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+x[z],f.z)):(m.up.set(0,p[z],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+x[z]));const D=this._cubeSize;Js(u,C*D,z>2?D:0,D,D),v.setRenderTarget(u),S&&v.render(w,m),v.render(t,m)}v.toneMapping=E,v.autoClear=_,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,u=t.mapping===Kr||t.mapping===ao;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=ox()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sx());const f=u?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=t;const m=this._cubeSize;Js(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,dl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const u=this._lodMeshes.length;for(let f=1;f<u;f++)this._applyGGXFilter(t,f-1,f);i.autoClear=s}_applyGGXFilter(t,i,s){const u=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),_=p*1.25,E=v*_,{_lodMax:R}=this,w=this._sizeLods[s],y=3*w*(s>R-to?s-R+to:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=R-i,Js(f,y,S,3*w,2*w),u.setRenderTarget(f),u.render(h,dl),m.envMap.value=f.texture,m.roughness.value=0,m.mipInt.value=R-s,Js(t,y,S,3*w,2*w),u.setRenderTarget(t),u.render(h,dl)}_blur(t,i,s,u){const f=this._pingPongRenderTarget,d=Math.min(u,Math.PI)/Math.SQRT2;this._blurPass(t,f,i,s,d),this._blurPass(f,t,s,s,d)}_blurPass(t,i,s,u,f){const d=this._renderer,h=this._blurMaterial,m=this._lodMeshes[u];m.material=h;const p=h.uniforms;p.envMap.value=t.texture,p.sigma.value=f,p.mipInt.value=this._lodMax-s;const x=this._sizeLods[u],v=3*x*(u>this._lodMax-to?u-this._lodMax+to:0),_=4*(this._cubeSize-x);Js(i,v,_,3*x,2*x),d.setRenderTarget(i),d.render(m,dl)}}function MA(o){const t=[],i=[];let s=o;const u=o-to+1+vA;for(let f=0;f<u;f++){const d=Math.pow(2,s);t.push(d);const h=1/(d-2),m=-h,p=1+h,x=[m,m,p,m,p,p,m,m,p,p,m,p],v=6,_=6,E=3,R=new Float32Array(E*_*v),w=new Float32Array(E*_*v);for(let S=0;S<v;S++){const N=S%3*2/3-1,z=S>2?0:-1,C=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];R.set(C,E*_*S);for(let D=0;D<_;D++){const U=x[D*2]*2-1,P=x[D*2+1]*2-1;S===0?Wr.set(1,P,U):S===1?Wr.set(-U,1,-P):S===2?Wr.set(-U,P,1):S===3?Wr.set(-1,P,-U):S===4?Wr.set(-U,-1,P):Wr.set(U,P,-1),Wr.toArray(w,(S*_+D)*E)}}const y=new Yn;y.setAttribute("position",new wi(R,E)),y.setAttribute("outputDirection",new wi(w,E)),i.push(new ca(y,null)),s>to&&s--}return{lodMeshes:i,sizeLods:t}}function rx(o,t,i){const s=new Gi(o,t,i);return s.texture.mapping=Bc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Js(o,t,i,s,u){o.viewport.set(t,i,s,u),o.scissor.set(t,i,s,u)}function EA(o,t,i){return new fa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:SA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function bA(o,t,i){return new fa({name:"SphericalGaussianBlur",defines:{SAMPLES:xA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function sx(){return new fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function ox(){return new fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class lS extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},u=[s,s,s,s,s,s];this.texture=new tS(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Tl(5,5,5),f=new fa({name:"CubemapFromEquirect",uniforms:ro(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:Oa});f.uniforms.tEquirect.value=i;const d=new ca(u,f),h=i.minFilter;return i.minFilter===qr&&(i.minFilter=zn),new Ab(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,u=!0){const f=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,u);t.setRenderTarget(f)}}function TA(o){let t=new WeakMap,i=new WeakMap,s=null;function u(_,E=!1){return _==null?null:E?d(_):f(_)}function f(_){if(_&&_.isTexture){const E=_.mapping;if(E===Sh||E===yh)if(t.has(_)){const R=t.get(_).texture;return h(R,_.mapping)}else{const R=_.image;if(R&&R.height>0){const w=new lS(R.height);return w.fromEquirectangularTexture(o,_),t.set(_,w),_.addEventListener("dispose",p),h(w.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const E=_.mapping,R=E===Sh||E===yh,w=E===Kr||E===ao;if(R||w){let y=i.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return s===null&&(s=new ax(o)),y=R?s.fromEquirectangular(_,y):s.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const N=_.image;return R&&N&&N.height>0||w&&N&&m(N)?(s===null&&(s=new ax(o)),y=R?s.fromEquirectangular(_):s.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",x),y.texture):null}}}return _}function h(_,E){return E===Sh?_.mapping=Kr:E===yh&&(_.mapping=ao),_}function m(_){let E=0;const R=6;for(let w=0;w<R;w++)_[w]!==void 0&&E++;return E===R}function p(_){const E=_.target;E.removeEventListener("dispose",p);const R=t.get(E);R!==void 0&&(t.delete(E),R.dispose())}function x(_){const E=_.target;E.removeEventListener("dispose",x);const R=i.get(E);R!==void 0&&(i.delete(E),R.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:u,dispose:v}}function AA(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const u=o.getExtension(s);return t[s]=u,u}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const u=i(s);return u===null&&no("WebGLRenderer: "+s+" extension not supported."),u}}}function RA(o,t,i,s){const u={},f=new WeakMap;function d(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const R in _.attributes)t.remove(_.attributes[R]);_.removeEventListener("dispose",d),delete u[_.id];const E=f.get(_);E&&(t.remove(E),f.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return u[_.id]===!0||(_.addEventListener("dispose",d),u[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const E in _)t.update(_[E],o.ARRAY_BUFFER)}function p(v){const _=[],E=v.index,R=v.attributes.position;let w=0;if(R===void 0)return;if(E!==null){const N=E.array;w=E.version;for(let z=0,C=N.length;z<C;z+=3){const D=N[z+0],U=N[z+1],P=N[z+2];_.push(D,U,U,P,P,D)}}else{const N=R.array;w=R.version;for(let z=0,C=N.length/3-1;z<C;z+=3){const D=z+0,U=z+1,P=z+2;_.push(D,U,U,P,P,D)}}const y=new(R.count>=65535?Qx:jx)(_,1);y.version=w;const S=f.get(v);S&&t.remove(S),f.set(v,y)}function x(v){const _=f.get(v);if(_){const E=v.index;E!==null&&_.version<E.version&&p(v)}else p(v);return f.get(v)}return{get:h,update:m,getWireframeAttribute:x}}function CA(o,t,i){let s;function u(v){s=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function m(v,_){o.drawElements(s,_,f,v*d),i.update(_,s,1)}function p(v,_,E){E!==0&&(o.drawElementsInstanced(s,_,f,v*d,E),i.update(_,s,E))}function x(v,_,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,f,v,0,E);let w=0;for(let y=0;y<E;y++)w+=_[y];i.update(w,s,1)}this.setMode=u,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function wA(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:It("WebGLInfo: Unknown draw mode:",d);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:u,update:s}}function NA(o,t,i){const s=new WeakMap,u=new un;function f(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=x!==void 0?x.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let F=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var E=F;_!==void 0&&_.texture.dispose();const R=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let D=h.attributes.position.count*C,U=1;D>t.maxTextureSize&&(U=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const P=new Float32Array(D*U*4*v),b=new Yx(P,D,U,v);b.type=ra,b.needsUpdate=!0;const L=C*4;for(let k=0;k<v;k++){const ee=S[k],fe=N[k],J=z[k],ne=D*U*4*k;for(let q=0;q<ee.count;q++){const Y=q*L;R===!0&&(u.fromBufferAttribute(ee,q),P[ne+Y+0]=u.x,P[ne+Y+1]=u.y,P[ne+Y+2]=u.z,P[ne+Y+3]=0),w===!0&&(u.fromBufferAttribute(fe,q),P[ne+Y+4]=u.x,P[ne+Y+5]=u.y,P[ne+Y+6]=u.z,P[ne+Y+7]=0),y===!0&&(u.fromBufferAttribute(J,q),P[ne+Y+8]=u.x,P[ne+Y+9]=u.y,P[ne+Y+10]=u.z,P[ne+Y+11]=J.itemSize===4?u.w:1)}}_={count:v,texture:b,size:new Lt(D,U)},s.set(h,_),h.addEventListener("dispose",F)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const w=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:f}}function DA(o,t,i,s,u){let f=new WeakMap;function d(p){const x=u.render.frame,v=p.geometry,_=t.get(p,v);if(f.get(_)!==x&&(t.update(_),f.set(_,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),f.get(p)!==x&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),f.set(p,x))),p.isSkinnedMesh){const E=p.skeleton;f.get(E)!==x&&(E.update(),f.set(E,x))}return _}function h(){f=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const UA={[Dx]:"LINEAR_TONE_MAPPING",[Ux]:"REINHARD_TONE_MAPPING",[Lx]:"CINEON_TONE_MAPPING",[Ox]:"ACES_FILMIC_TONE_MAPPING",[Ix]:"AGX_TONE_MAPPING",[zx]:"NEUTRAL_TONE_MAPPING",[Px]:"CUSTOM_TONE_MAPPING"};function LA(o,t,i,s,u,f){const d=new Gi(t,i,{type:o,depthBuffer:u,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const p=new Yn;p.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const x=new Eb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new ca(p,x),_=new rS(-1,1,1,-1,0,1);let E=null,R=null,w=!1,y,S=null,N=[],z=!1;this.setSize=function(C,D){d.setSize(C,D),h!==null&&h.setSize(C,D),m!==null&&m.setSize(C,D);for(let U=0;U<N.length;U++){const P=N[U];P.setSize&&P.setSize(C,D)}},this.setEffects=function(C){N=C,z=N.length>0&&N[0].isRenderPass===!0;const D=d.width,U=d.height;N.length>0&&h===null&&(h=new Gi(D,U,{type:ua,depthBuffer:!1,stencilBuffer:!1}),m=new Gi(D,U,{type:ua,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<N.length;P++){const b=N[P];b.setSize&&b.setSize(D,U)}},this.begin=function(C,D){if(w||C.toneMapping===oa&&N.length===0)return!1;if(S=D,D!==null){const U=D.width,P=D.height;(d.width!==U||d.height!==P)&&this.setSize(U,P)}return z===!1&&C.setRenderTarget(d),y=C.toneMapping,C.toneMapping=oa,!0},this.hasRenderPass=function(){return z},this.end=function(C,D){C.toneMapping=y,w=!0;let U=d,P=h;for(let b=0;b<N.length;b++){const L=N[b];L.enabled!==!1&&(L.render(C,P,U,D),L.needsSwap!==!1&&(U=P,P=P===h?m:h))}if(E!==C.outputColorSpace||R!==C.toneMapping){E=C.outputColorSpace,R=C.toneMapping,x.defines={},Nt.getTransfer(E)===qt&&(x.defines.SRGB_TRANSFER="");const b=UA[R];b&&(x.defines[b]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(S),C.render(v,_),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),p.dispose(),x.dispose()}}const uS=new Bn,Hp=new yl(1,1),cS=new Yx,fS=new QE,dS=new tS,lx=[],ux=[],cx=new Float32Array(16),fx=new Float32Array(9),dx=new Float32Array(4);function lo(o,t,i){const s=o[0];if(s<=0||s>0)return o;const u=t*i;let f=lx[u];if(f===void 0&&(f=new Float32Array(u),lx[u]=f),t!==0){s.toArray(f,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(f,h)}return f}function Sn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function yn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Gc(o,t){let i=ux[t];i===void 0&&(i=new Int32Array(t),ux[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function OA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function PA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2fv(this.addr,t),yn(i,t)}}function IA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;o.uniform3fv(this.addr,t),yn(i,t)}}function zA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4fv(this.addr,t),yn(i,t)}}function BA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;dx.set(s),o.uniformMatrix2fv(this.addr,!1,dx),yn(i,s)}}function FA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;fx.set(s),o.uniformMatrix3fv(this.addr,!1,fx),yn(i,s)}}function HA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;cx.set(s),o.uniformMatrix4fv(this.addr,!1,cx),yn(i,s)}}function GA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function VA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2iv(this.addr,t),yn(i,t)}}function kA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;o.uniform3iv(this.addr,t),yn(i,t)}}function XA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4iv(this.addr,t),yn(i,t)}}function WA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function qA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;o.uniform2uiv(this.addr,t),yn(i,t)}}function YA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;o.uniform3uiv(this.addr,t),yn(i,t)}}function ZA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;o.uniform4uiv(this.addr,t),yn(i,t)}}function KA(o,t,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Hp.compareFunction=i.isReversedDepthBuffer()?Jp:Qp,f=Hp):f=uS,i.setTexture2D(t||f,u)}function jA(o,t,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture3D(t||fS,u)}function QA(o,t,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTextureCube(t||dS,u)}function JA(o,t,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture2DArray(t||cS,u)}function $A(o){switch(o){case 5126:return OA;case 35664:return PA;case 35665:return IA;case 35666:return zA;case 35674:return BA;case 35675:return FA;case 35676:return HA;case 5124:case 35670:return GA;case 35667:case 35671:return VA;case 35668:case 35672:return kA;case 35669:case 35673:return XA;case 5125:return WA;case 36294:return qA;case 36295:return YA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return QA;case 36289:case 36303:case 36311:case 36292:return JA}}function e3(o,t){o.uniform1fv(this.addr,t)}function t3(o,t){const i=lo(t,this.size,2);o.uniform2fv(this.addr,i)}function n3(o,t){const i=lo(t,this.size,3);o.uniform3fv(this.addr,i)}function i3(o,t){const i=lo(t,this.size,4);o.uniform4fv(this.addr,i)}function a3(o,t){const i=lo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function r3(o,t){const i=lo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function s3(o,t){const i=lo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function o3(o,t){o.uniform1iv(this.addr,t)}function l3(o,t){o.uniform2iv(this.addr,t)}function u3(o,t){o.uniform3iv(this.addr,t)}function c3(o,t){o.uniform4iv(this.addr,t)}function f3(o,t){o.uniform1uiv(this.addr,t)}function d3(o,t){o.uniform2uiv(this.addr,t)}function h3(o,t){o.uniform3uiv(this.addr,t)}function p3(o,t){o.uniform4uiv(this.addr,t)}function m3(o,t,i){const s=this.cache,u=t.length,f=Gc(i,u);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Hp:d=uS;for(let h=0;h!==u;++h)i.setTexture2D(t[h]||d,f[h])}function g3(o,t,i){const s=this.cache,u=t.length,f=Gc(i,u);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==u;++d)i.setTexture3D(t[d]||fS,f[d])}function _3(o,t,i){const s=this.cache,u=t.length,f=Gc(i,u);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==u;++d)i.setTextureCube(t[d]||dS,f[d])}function v3(o,t,i){const s=this.cache,u=t.length,f=Gc(i,u);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==u;++d)i.setTexture2DArray(t[d]||cS,f[d])}function x3(o){switch(o){case 5126:return e3;case 35664:return t3;case 35665:return n3;case 35666:return i3;case 35674:return a3;case 35675:return r3;case 35676:return s3;case 5124:case 35670:return o3;case 35667:case 35671:return l3;case 35668:case 35672:return u3;case 35669:case 35673:return c3;case 5125:return f3;case 36294:return d3;case 36295:return h3;case 36296:return p3;case 35678:case 36198:case 36298:case 36306:case 35682:return m3;case 35679:case 36299:case 36307:return g3;case 35680:case 36300:case 36308:case 36293:return _3;case 36289:case 36303:case 36311:case 36292:return v3}}class S3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=$A(i.type)}}class y3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=x3(i.type)}}class M3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(t,i[h.id],s)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function hx(o,t){o.seq.push(t),o.map[t.id]=t}function E3(o,t,i){const s=o.name,u=s.length;for(Qh.lastIndex=0;;){const f=Qh.exec(s),d=Qh.lastIndex;let h=f[1];const m=f[2]==="]",p=f[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===u){hx(i,p===void 0?new S3(h,o,t):new y3(h,o,t));break}else{let v=i.map[h];v===void 0&&(v=new M3(h),hx(i,v)),i=v}}}class Ac{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);E3(h,m,this)}const u=[],f=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?u.push(d):f.push(d);u.length>0&&(this.seq=u.concat(f))}setValue(t,i,s,u){const f=this.map[i];f!==void 0&&f.setValue(t,s,u)}setOptional(t,i,s){const u=i[s];u!==void 0&&this.setValue(t,s,u)}static upload(t,i,s,u){for(let f=0,d=i.length;f!==d;++f){const h=i[f],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,u)}}static seqWithValue(t,i){const s=[];for(let u=0,f=t.length;u!==f;++u){const d=t[u];d.id in i&&s.push(d)}return s}}function px(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const b3=37297;let T3=0;function A3(o,t){const i=o.split(`
`),s=[],u=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const mx=new ft;function R3(o){Nt._getMatrix(mx,Nt.workingColorSpace,o);const t=`mat3( ${mx.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(o)){case Dc:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function gx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),f=(o.getShaderInfoLog(t)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+A3(o.getShaderSource(t),h)}else return f}function C3(o,t){const i=R3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const w3={[Dx]:"Linear",[Ux]:"Reinhard",[Lx]:"Cineon",[Ox]:"ACESFilmic",[Ix]:"AgX",[zx]:"Neutral",[Px]:"Custom"};function N3(o,t){const i=w3[t];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new ae;function D3(){Nt.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),t=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function L3(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function O3(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(t,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function gl(o){return o!==""}function _x(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const P3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gp(o){return o.replace(P3,z3)}const I3=new Map;function z3(o,t){let i=mt[t];if(i===void 0){const s=I3.get(t);if(s!==void 0)i=mt[s],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Gp(i)}const B3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xx(o){return o.replace(B3,F3)}function F3(o,t,i,s){let u="";for(let f=parseInt(t);f<parseInt(i);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function Sx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const H3={[yc]:"SHADOWMAP_TYPE_PCF",[pl]:"SHADOWMAP_TYPE_VSM"};function G3(o){return H3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const V3={[Kr]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[Bc]:"ENVMAP_TYPE_CUBE_UV"};function k3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":V3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const X3={[ao]:"ENVMAP_MODE_REFRACTION"};function W3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":X3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const q3={[Nx]:"ENVMAP_BLENDING_MULTIPLY",[CE]:"ENVMAP_BLENDING_MIX",[wE]:"ENVMAP_BLENDING_ADD"};function Y3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":q3[o.combine]||"ENVMAP_BLENDING_NONE"}function Z3(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function K3(o,t,i,s){const u=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=G3(i),p=k3(i),x=W3(i),v=Y3(i),_=Z3(i),E=U3(i),R=L3(f),w=u.createProgram();let y,S,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(gl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(gl).join(`
`),S.length>0&&(S+=`
`)):(y=[Sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),S=[Sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oa?"#define TONE_MAPPING":"",i.toneMapping!==oa?mt.tonemapping_pars_fragment:"",i.toneMapping!==oa?N3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,C3("linearToOutputTexel",i.outputColorSpace),D3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(gl).join(`
`)),d=Gp(d),d=_x(d,i),d=vx(d,i),h=Gp(h),h=_x(h,i),h=vx(h,i),d=xx(d),h=xx(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const z=N+y+d,C=N+S+h,D=px(u,u.VERTEX_SHADER,z),U=px(u,u.FRAGMENT_SHADER,C);u.attachShader(w,D),u.attachShader(w,U),i.index0AttributeName!==void 0?u.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&u.bindAttribLocation(w,0,"position"),u.linkProgram(w);function P(k){if(o.debug.checkShaderErrors){const ee=u.getProgramInfoLog(w)||"",fe=u.getShaderInfoLog(D)||"",J=u.getShaderInfoLog(U)||"",ne=ee.trim(),q=fe.trim(),Y=J.trim();let he=!0,K=!0;if(u.getProgramParameter(w,u.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,w,D,U);else{const ue=gx(u,D,"vertex"),xe=gx(u,U,"fragment");It("WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(w,u.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ne+`
`+ue+`
`+xe)}else ne!==""?rt("WebGLProgram: Program Info Log:",ne):(q===""||Y==="")&&(K=!1);K&&(k.diagnostics={runnable:he,programLog:ne,vertexShader:{log:q,prefix:y},fragmentShader:{log:Y,prefix:S}})}u.deleteShader(D),u.deleteShader(U),b=new Ac(u,w),L=O3(u,w)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=u.getProgramParameter(w,b3)),F},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=T3++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=U,this}let j3=0;class Q3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const u=this._getShaderCacheForMaterial(t);return u.has(i)===!1&&(u.add(i),i.usedTimes++),u.has(s)===!1&&(u.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new J3(t),i.set(t,s)),s}}class J3{constructor(t){this.id=j3++,this.code=t,this.usedTimes=0}}function $3(o){return o===jr||o===Cc||o===wc}function eR(o,t,i,s,u,f){const d=new Zx,h=new Q3,m=new Set,p=[],x=new Map,v=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,L,F,k,ee,fe){const J=k.fog,ne=ee.geometry,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,Y=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,he=t.get(b.envMap||q,Y),K=he&&he.mapping===Bc?he.image.height:null,ue=E[b.type];b.precision!==null&&(_=s.getMaxPrecision(b.precision),_!==b.precision&&rt("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const xe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ce=xe!==void 0?xe.length:0;let Xe=0;ne.morphAttributes.position!==void 0&&(Xe=1),ne.morphAttributes.normal!==void 0&&(Xe=2),ne.morphAttributes.color!==void 0&&(Xe=3);let B,ge,Re,j;if(ue){const Ct=aa[ue];B=Ct.vertexShader,ge=Ct.fragmentShader}else{B=b.vertexShader,ge=b.fragmentShader;const Ct=h.getVertexShaderStage(b),ut=h.getFragmentShaderStage(b);h.update(b,Ct,ut),Re=Ct.id,j=ut.id}const pe=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Be=ee.isInstancedMesh===!0,ve=ee.isBatchedMesh===!0,we=!!b.map,Gt=!!b.matcap,pt=!!he,_t=!!b.aoMap,yt=!!b.lightMap,tt=!!b.bumpMap&&b.wireframe===!1,it=!!b.normalMap,Vt=!!b.displacementMap,dn=!!b.emissiveMap,Pt=!!b.metalnessMap,en=!!b.roughnessMap,W=b.anisotropy>0,nn=b.clearcoat>0,Ot=b.dispersion>0,O=b.retroreflectivity>0,M=b.iridescence>0,te=b.sheen>0,le=b.transmission>0,me=W&&!!b.anisotropyMap,Ae=nn&&!!b.clearcoatMap,Ue=nn&&!!b.clearcoatNormalMap,_e=nn&&!!b.clearcoatRoughnessMap,Ee=M&&!!b.iridescenceMap,De=M&&!!b.iridescenceThicknessMap,$e=te&&!!b.sheenColorMap,ze=te&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,We=!!b.specularColorMap,nt=!!b.specularIntensityMap,lt=le&&!!b.transmissionMap,X=le&&!!b.thicknessMap,Ne=!!b.gradientMap,Me=!!b.alphaMap,Le=b.alphaTest>0,ke=!!b.alphaHash,be=!!b.extensions;let Je=oa;b.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Je=o.toneMapping);const Ve={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:B,fragmentShader:ge,defines:b.defines,customVertexShaderID:Re,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:ve,batchingColor:ve&&ee._colorsTexture!==null,instancing:Be,instancingColor:Be&&ee.instanceColor!==null,instancingMorph:Be&&ee.morphTexture!==null,outputColorSpace:pe===null?o.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:we,matcap:Gt,envMap:pt,envMapMode:pt&&he.mapping,envMapCubeUVHeight:K,aoMap:_t,lightMap:yt,bumpMap:tt,normalMap:it,displacementMap:Vt,emissiveMap:dn,normalMapObjectSpace:it&&b.normalMapType===UE,normalMapTangentSpace:it&&b.normalMapType===Cv,packedNormalMap:it&&b.normalMapType===Cv&&$3(b.normalMap.format),metalnessMap:Pt,roughnessMap:en,anisotropy:W,anisotropyMap:me,clearcoat:nn,clearcoatMap:Ae,clearcoatNormalMap:Ue,clearcoatRoughnessMap:_e,dispersion:Ot,retroreflection:O,iridescence:M,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:te,sheenColorMap:$e,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:We,specularIntensityMap:nt,transmission:le,transmissionMap:lt,thicknessMap:X,gradientMap:Ne,opaque:b.transparent===!1&&b.blending===_l&&b.alphaToCoverage===!1,alphaMap:Me,alphaTest:Le,alphaHash:ke,combine:b.combine,mapUv:we&&R(b.map.channel),aoMapUv:_t&&R(b.aoMap.channel),lightMapUv:yt&&R(b.lightMap.channel),bumpMapUv:tt&&R(b.bumpMap.channel),normalMapUv:it&&R(b.normalMap.channel),displacementMapUv:Vt&&R(b.displacementMap.channel),emissiveMapUv:dn&&R(b.emissiveMap.channel),metalnessMapUv:Pt&&R(b.metalnessMap.channel),roughnessMapUv:en&&R(b.roughnessMap.channel),anisotropyMapUv:me&&R(b.anisotropyMap.channel),clearcoatMapUv:Ae&&R(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&R(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&R(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&R(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&R(b.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&R(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&R(b.sheenRoughnessMap.channel),specularMapUv:Ie&&R(b.specularMap.channel),specularColorMapUv:We&&R(b.specularColorMap.channel),specularIntensityMapUv:nt&&R(b.specularIntensityMap.channel),transmissionMapUv:lt&&R(b.transmissionMap.channel),thicknessMapUv:X&&R(b.thicknessMap.channel),alphaMapUv:Me&&R(b.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(it||W),vertexNormals:!!ne.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ne.attributes.uv&&(we||Me),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||ne.attributes.normal===void 0&&it===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Te,skinning:ee.isSkinnedMesh===!0,hasPositionAttribute:ne.attributes.position!==void 0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Xe,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Je,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&Nt.getTransfer(b.map.colorSpace)===qt,decodeVideoTextureEmissive:dn&&b.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(b.emissiveMap.colorSpace)===qt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ua,flipSided:b.side===ti,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:be&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&b.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ve.vertexUv1s=m.has(1),Ve.vertexUv2s=m.has(2),Ve.vertexUv3s=m.has(3),m.clear(),Ve}function y(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)L.push(F),L.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(S(L,b),N(L,b),L.push(o.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function S(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numSunLights),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numSunLightShadows),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function N(b,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function z(b){const L=E[b.type];let F;if(L){const k=aa[L];F=Sb.clone(k.uniforms)}else F=b.uniforms;return F}function C(b,L){let F=x.get(L);return F!==void 0?++F.usedTimes:(F=new K3(o,L,b,u),p.push(F),x.set(L,F)),F}function D(b){if(--b.usedTimes===0){const L=p.indexOf(b);p[L]=p[p.length-1],p.pop(),x.delete(b.cacheKey),b.destroy()}}function U(b){h.remove(b)}function P(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:z,acquireProgram:C,releaseProgram:D,releaseShaderCache:U,programs:p,dispose:P}}function tR(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,m){o.get(d)[h]=m}function f(){o=new WeakMap}return{has:t,get:i,remove:s,update:u,dispose:f}}function nR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function yx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Mx(){const o=[];let t=0;const i=[],s=[],u=[];function f(){t=0,i.length=0,s.length=0,u.length=0}function d(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function h(_,E,R,w,y,S){let N=o[t];return N===void 0?(N={id:_.id,object:_,geometry:E,material:R,materialVariant:d(_),groupOrder:w,renderOrder:_.renderOrder,z:y,group:S},o[t]=N):(N.id=_.id,N.object=_,N.geometry=E,N.material=R,N.materialVariant=d(_),N.groupOrder=w,N.renderOrder=_.renderOrder,N.z=y,N.group=S),t++,N}function m(_,E,R,w,y,S,N){N.reversedDepth===!0&&(y=-y);const z=h(_,E,R,w,y,S);R.transmission>0?s.push(z):R.transparent===!0?u.push(z):i.push(z)}function p(_,E,R,w,y,S){const N=h(_,E,R,w,y,S);R.transmission>0?s.unshift(N):R.transparent===!0?u.unshift(N):i.unshift(N)}function x(_,E){i.length>1&&i.sort(_||nR),s.length>1&&s.sort(E||yx),u.length>1&&u.sort(E||yx)}function v(){for(let _=t,E=o.length;_<E;_++){const R=o[_];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:u,init:f,push:m,unshift:p,finish:v,sort:x}}function iR(){let o=new WeakMap;function t(s,u){const f=o.get(s);let d;return f===void 0?(d=new Mx,o.set(s,[d])):u>=f.length?(d=new Mx,f.push(d)):d=f[u],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function aR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new ae,color:new gt};break;case"SpotLight":i={position:new ae,direction:new ae,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new gt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":i={color:new gt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return o[t.id]=i,i}}}function rR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let sR=0;function oR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function lR(o){const t=new aR,i=rR(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ae);const u=new ae,f=new cn,d=new cn;function h(p){let x=0,v=0,_=0;for(let ee=0;ee<9;ee++)s.probe[ee].set(0,0,0);let E=0,R=0,w=0,y=0,S=0,N=0,z=0,C=0,D=0,U=0,P=0,b=0,L=0,F=0;p.sort(oR);for(let ee=0,fe=p.length;ee<fe;ee++){const J=p[ee],ne=J.color,q=J.intensity,Y=J.distance;let he=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===jr?he=J.shadow.map.texture:he=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)x+=ne.r*q,v+=ne.g*q,_+=ne.b*q;else if(J.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(J.sh.coefficients[K],q);F++}else if(J.isSunLight){const K=t.get(J);if(K.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const ue=J.shadow,xe=i.get(J);xe.shadowIntensity=ue.intensity,xe.shadowBias=ue.bias,xe.shadowNormalBias=ue.normalBias,xe.shadowRadius=ue.radius,xe.shadowMapSize.copy(ue.mapSize).multiply(ue.getFrameExtents()),s.sunShadow[R]=xe,s.sunShadowMap[R]=he;const Ce=ue.getViewportCount();for(let Xe=0;Xe<Ce;Xe++)s.sunShadowMatrix[w+Xe]=ue.getMatrix(Xe),s.sunShadowCascade[w+Xe]=ue._cascadeData[Xe];w+=Ce,R++}s.sun[E]=K,E++}else if(J.isDirectionalLight){const K=t.get(J);if(K.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const ue=J.shadow,xe=i.get(J);xe.shadowIntensity=ue.intensity,xe.shadowBias=ue.bias,xe.shadowNormalBias=ue.normalBias,xe.shadowRadius=ue.radius,xe.shadowMapSize=ue.mapSize,s.directionalShadow[y]=xe,s.directionalShadowMap[y]=he,s.directionalShadowMatrix[y]=J.shadow.matrix,D++}s.directional[y]=K,y++}else if(J.isSpotLight){const K=t.get(J);K.position.setFromMatrixPosition(J.matrixWorld),K.color.copy(ne).multiplyScalar(q),K.distance=Y,K.coneCos=Math.cos(J.angle),K.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),K.decay=J.decay,s.spot[N]=K;const ue=J.shadow;if(J.map&&(s.spotLightMap[b]=J.map,b++,ue.updateMatrices(J),J.castShadow&&L++),s.spotLightMatrix[N]=ue.matrix,J.castShadow){const xe=i.get(J);xe.shadowIntensity=ue.intensity,xe.shadowBias=ue.bias,xe.shadowNormalBias=ue.normalBias,xe.shadowRadius=ue.radius,xe.shadowMapSize=ue.mapSize,s.spotShadow[N]=xe,s.spotShadowMap[N]=he,P++}N++}else if(J.isRectAreaLight){const K=t.get(J);K.color.copy(ne).multiplyScalar(q),K.halfWidth.set(J.width*.5,0,0),K.halfHeight.set(0,J.height*.5,0),s.rectArea[z]=K,z++}else if(J.isPointLight){const K=t.get(J);if(K.color.copy(J.color).multiplyScalar(J.intensity),K.distance=J.distance,K.decay=J.decay,J.castShadow){const ue=J.shadow,xe=i.get(J);xe.shadowIntensity=ue.intensity,xe.shadowBias=ue.bias,xe.shadowNormalBias=ue.normalBias,xe.shadowRadius=ue.radius,xe.shadowMapSize=ue.mapSize,xe.shadowCameraNear=ue.camera.near,xe.shadowCameraFar=ue.camera.far,s.pointShadow[S]=xe,s.pointShadowMap[S]=he,s.pointShadowMatrix[S]=J.shadow.matrix,U++}s.point[S]=K,S++}else if(J.isHemisphereLight){const K=t.get(J);K.skyColor.copy(J.color).multiplyScalar(q),K.groundColor.copy(J.groundColor).multiplyScalar(q),s.hemi[C]=K,C++}}z>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=_;const k=s.hash;(k.sunLength!==E||k.directionalLength!==y||k.pointLength!==S||k.spotLength!==N||k.rectAreaLength!==z||k.hemiLength!==C||k.numSunShadows!==R||k.numDirectionalShadows!==D||k.numPointShadows!==U||k.numSpotShadows!==P||k.numSpotMaps!==b||k.numLightProbes!==F)&&(s.sun.length=E,s.directional.length=y,s.spot.length=N,s.rectArea.length=z,s.point.length=S,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=w,s.sunShadowCascade.length=w,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.directionalShadowMatrix.length=D,s.pointShadow.length=U,s.pointShadowMap.length=U,s.pointShadowMatrix.length=U,s.spotShadow.length=P,s.spotShadowMap.length=P,s.spotLightMatrix.length=P+b-L,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=F,k.sunLength=E,k.directionalLength=y,k.pointLength=S,k.spotLength=N,k.rectAreaLength=z,k.hemiLength=C,k.numSunShadows=R,k.numDirectionalShadows=D,k.numPointShadows=U,k.numSpotShadows=P,k.numSpotMaps=b,k.numLightProbes=F,s.version=sR++)}function m(p,x){let v=0,_=0,E=0,R=0,w=0,y=0;const S=x.matrixWorldInverse;for(let N=0,z=p.length;N<z;N++){const C=p[N];if(C.isSunLight){const D=s.sun[v];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(S),v++}else if(C.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(S),_++}else if(C.isSpotLight){const D=s.spot[R];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(S),R++}else if(C.isRectAreaLight){const D=s.rectArea[w];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(S),d.identity(),f.copy(C.matrixWorld),f.premultiply(S),d.extractRotation(f),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),w++}else if(C.isPointLight){const D=s.point[E];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(S),E++}else if(C.isHemisphereLight){const D=s.hemi[y];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(S),y++}}}return{setup:h,setupView:m,state:s}}function Ex(o){const t=new lR(o),i=[],s=[],u=[];function f(_){v.camera=_,i.length=0,s.length=0,u.length=0}function d(_){i.push(_)}function h(_){s.push(_)}function m(_){u.push(_)}function p(){t.setup(i)}function x(_){t.setupView(i,_)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:u,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:p,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function uR(o){let t=new WeakMap;function i(u,f=0){const d=t.get(u);let h;return d===void 0?(h=new Ex(o),t.set(u,[h])):f>=d.length?(h=new Ex(o),d.push(h)):h=d[f],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const cR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dR=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],hR=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],bx=new cn,hl=new ae,Jh=new ae;function pR(o,t,i){let s=new Jx;const u=new Lt,f=new Lt,d=new un,h=new bb,m=new Tb,p={},x=i.maxTextureSize,v={[Zr]:ti,[ti]:Zr,[Ua]:Ua},_=new fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:cR,fragmentShader:fR}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const R=new Yn;R.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ca(R,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let S=this.type;this.render=function(U,P,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===uE&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yc);const L=o.getRenderTarget(),F=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(Oa),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const fe=S!==this.type;fe&&P.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(ne=>ne.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,ne=U.length;J<ne;J++){const q=U[J],Y=q.shadow;if(Y===void 0){rt("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;u.copy(Y.mapSize);const he=Y.getFrameExtents();u.multiply(he),f.copy(Y.mapSize),(u.x>x||u.y>x)&&(u.x>x&&(f.x=Math.floor(x/he.x),u.x=f.x*he.x,Y.mapSize.x=f.x),u.y>x&&(f.y=Math.floor(x/he.y),u.y=f.y*he.y,Y.mapSize.y=f.y));const K=o.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=K,Y.map===null||fe===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===pl){if(q.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Gi(u.x,u.y,{format:jr,type:ua,minFilter:zn,magFilter:zn,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new yl(u.x,u.y,ra),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=Ia,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Un,Y.map.depthTexture.magFilter=Un}else q.isPointLight?(Y.map=new lS(u.x),Y.map.depthTexture=new vb(u.x,la)):(Y.map=new Gi(u.x,u.y),Y.map.depthTexture=new yl(u.x,u.y,la)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=Ia,this.type===yc?(Y.map.depthTexture.compareFunction=K?Jp:Qp,Y.map.depthTexture.minFilter=zn,Y.map.depthTexture.magFilter=zn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Un,Y.map.depthTexture.magFilter=Un);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==u.x||Y.map.height!==u.y)&&Y.map.setSize(u.x,u.y);const ue=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,b);for(let xe=0;xe<ue;xe++){const Ce=Y.getCamera(xe);if(q.isPointLight){const Xe=Y.camera,B=Y.matrix,ge=q.distance||Xe.far;ge!==Xe.far&&(Xe.far=ge,Xe.updateProjectionMatrix()),hl.setFromMatrixPosition(q.matrixWorld),Xe.position.copy(hl),Jh.copy(Xe.position),Jh.add(dR[xe]),Xe.up.copy(hR[xe]),Xe.lookAt(Jh),Xe.updateMatrixWorld(),B.makeTranslation(-hl.x,-hl.y,-hl.z),bx.multiplyMatrices(Xe.projectionMatrix,Xe.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(bx,Xe.coordinateSystem,Xe.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)o.setRenderTarget(Y.map,xe),o.clear();else{xe===0&&(o.setRenderTarget(Y.map),o.clear());const Xe=Y.getViewport(xe);d.set(f.x*Xe.x,f.y*Xe.y,f.x*Xe.z,f.y*Xe.w),ee.viewport(d)}s=Y.getFrustum(xe),C(P,b,Ce,q,this.type)}Y.isPointLightShadow!==!0&&this.type===pl&&N(Y,b),Y.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(L,F,k)};function N(U,P){const b=t.update(w);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null?U.mapPass=new Gi(u.x,u.y,{format:jr,type:ua}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),_.uniforms.shadow_pass.value=U.map.depthTexture,_.uniforms.resolution.value.set(U.map.width,U.map.height),_.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(P,null,b,_,w,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value.set(U.map.width,U.map.height),E.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(P,null,b,E,w,null)}function z(U,P,b,L){let F=null;const k=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(k!==void 0)F=k;else if(F=b.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const ee=F.uuid,fe=P.uuid;let J=p[ee];J===void 0&&(J={},p[ee]=J);let ne=J[fe];ne===void 0&&(ne=F.clone(),J[fe]=ne,P.addEventListener("dispose",D)),F=ne}if(F.visible=P.visible,F.wireframe=P.wireframe,L===pl?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:v[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,b.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const ee=o.properties.get(F);ee.light=b}return F}function C(U,P,b,L,F){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&F===pl)&&(!U.frustumCulled||U.intersectsFrustum(s))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const fe=t.update(U),J=U.material;if(Array.isArray(J)){const ne=fe.groups;for(let q=0,Y=ne.length;q<Y;q++){const he=ne[q],K=J[he.materialIndex];if(K&&K.visible){const ue=z(U,K,L,F);U.onBeforeShadow(o,U,P,b,fe,ue,he),o.renderBufferDirect(b,null,fe,ue,U,he),U.onAfterShadow(o,U,P,b,fe,ue,he)}}}else if(J.visible){const ne=z(U,J,L,F);U.onBeforeShadow(o,U,P,b,fe,ne,null),o.renderBufferDirect(b,null,fe,ne,U,null),U.onAfterShadow(o,U,P,b,fe,ne,null)}}const ee=U.children;for(let fe=0,J=ee.length;fe<J;fe++)C(ee[fe],P,b,L,F)}function D(U){U.target.removeEventListener("dispose",D);for(const b in p){const L=p[b],F=U.target.uuid;F in L&&(L[F].dispose(),delete L[F])}}}function mR(o,t){function i(){let X=!1;const Ne=new un;let Me=null;const Le=new un(0,0,0,0);return{setMask:function(ke){Me!==ke&&!X&&(o.colorMask(ke,ke,ke,ke),Me=ke)},setLocked:function(ke){X=ke},setClear:function(ke,be,Je,Ve,Ct){Ct===!0&&(ke*=Ve,be*=Ve,Je*=Ve),Ne.set(ke,be,Je,Ve),Le.equals(Ne)===!1&&(o.clearColor(ke,be,Je,Ve),Le.copy(Ne))},reset:function(){X=!1,Me=null,Le.set(-1,0,0,0)}}}function s(){let X=!1,Ne=!1,Me=null,Le=null,ke=null;return{setReversed:function(be){if(Ne!==be){const Je=t.get("EXT_clip_control");be?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ne=be;const Ve=ke;ke=null,this.setClear(Ve)}},getReversed:function(){return Ne},setTest:function(be){be?pe(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(be){Me!==be&&!X&&(o.depthMask(be),Me=be)},setFunc:function(be){if(Ne&&(be=XE[be]),Le!==be){switch(be){case $h:o.depthFunc(o.NEVER);break;case ep:o.depthFunc(o.ALWAYS);break;case tp:o.depthFunc(o.LESS);break;case vl:o.depthFunc(o.LEQUAL);break;case np:o.depthFunc(o.EQUAL);break;case ip:o.depthFunc(o.GEQUAL);break;case ap:o.depthFunc(o.GREATER);break;case rp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Le=be}},setLocked:function(be){X=be},setClear:function(be){ke!==be&&(ke=be,Ne&&(be=1-be),o.clearDepth(be))},reset:function(){X=!1,Me=null,Le=null,ke=null,Ne=!1}}}function u(){let X=!1,Ne=null,Me=null,Le=null,ke=null,be=null,Je=null,Ve=null,Ct=null;return{setTest:function(ut){X||(ut?pe(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(ut){Ne!==ut&&!X&&(o.stencilMask(ut),Ne=ut)},setFunc:function(ut,ni,pi){(Me!==ut||Le!==ni||ke!==pi)&&(o.stencilFunc(ut,ni,pi),Me=ut,Le=ni,ke=pi)},setOp:function(ut,ni,pi){(be!==ut||Je!==ni||Ve!==pi)&&(o.stencilOp(ut,ni,pi),be=ut,Je=ni,Ve=pi)},setLocked:function(ut){X=ut},setClear:function(ut){Ct!==ut&&(o.clearStencil(ut),Ct=ut)},reset:function(){X=!1,Ne=null,Me=null,Le=null,ke=null,be=null,Je=null,Ve=null,Ct=null}}}const f=new i,d=new s,h=new u,m=new WeakMap,p=new WeakMap;let x={},v={},_={},E=new WeakMap,R=[],w=null,y=!1,S=null,N=null,z=null,C=null,D=null,U=null,P=null,b=new gt(0,0,0),L=0,F=!1,k=null,ee=null,fe=null,J=null,ne=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,he=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=he>=1):K.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=he>=2);let ue=null,xe={};const Ce=o.getParameter(o.SCISSOR_BOX),Xe=o.getParameter(o.VIEWPORT),B=new un().fromArray(Ce),ge=new un().fromArray(Xe);function Re(X,Ne,Me,Le){const ke=new Uint8Array(4),be=o.createTexture();o.bindTexture(X,be),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Je=0;Je<Me;Je++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,Le,0,o.RGBA,o.UNSIGNED_BYTE,ke):o.texImage2D(Ne+Je,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ke);return be}const j={};j[o.TEXTURE_2D]=Re(o.TEXTURE_2D,o.TEXTURE_2D,1),j[o.TEXTURE_CUBE_MAP]=Re(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[o.TEXTURE_2D_ARRAY]=Re(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),j[o.TEXTURE_3D]=Re(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),pe(o.DEPTH_TEST),d.setFunc(vl),tt(!1),it(Tv),pe(o.CULL_FACE),_t(Oa);function pe(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function Te(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function Be(X,Ne){return _[X]!==Ne?(o.bindFramebuffer(X,Ne),_[X]=Ne,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ne),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function ve(X,Ne){let Me=R,Le=!1;if(X){Me=E.get(Ne),Me===void 0&&(Me=[],E.set(Ne,Me));const ke=X.textures;if(Me.length!==ke.length||Me[0]!==o.COLOR_ATTACHMENT0){for(let be=0,Je=ke.length;be<Je;be++)Me[be]=o.COLOR_ATTACHMENT0+be;Me.length=ke.length,Le=!0}}else Me[0]!==o.BACK&&(Me[0]=o.BACK,Le=!0);Le&&o.drawBuffers(Me)}function we(X){return w!==X?(o.useProgram(X),w=X,!0):!1}const Gt={[$s]:o.FUNC_ADD,[fE]:o.FUNC_SUBTRACT,[dE]:o.FUNC_REVERSE_SUBTRACT};Gt[hE]=o.MIN,Gt[pE]=o.MAX;const pt={[mE]:o.ZERO,[gE]:o.ONE,[_E]:o.SRC_COLOR,[Cx]:o.SRC_ALPHA,[EE]:o.SRC_ALPHA_SATURATE,[yE]:o.DST_COLOR,[xE]:o.DST_ALPHA,[vE]:o.ONE_MINUS_SRC_COLOR,[wx]:o.ONE_MINUS_SRC_ALPHA,[ME]:o.ONE_MINUS_DST_COLOR,[SE]:o.ONE_MINUS_DST_ALPHA,[bE]:o.CONSTANT_COLOR,[TE]:o.ONE_MINUS_CONSTANT_COLOR,[AE]:o.CONSTANT_ALPHA,[RE]:o.ONE_MINUS_CONSTANT_ALPHA};function _t(X,Ne,Me,Le,ke,be,Je,Ve,Ct,ut){if(X===Oa){y===!0&&(Te(o.BLEND),y=!1);return}if(y===!1&&(pe(o.BLEND),y=!0),X!==cE){if(X!==S||ut!==F){if((N!==$s||D!==$s)&&(o.blendEquation(o.FUNC_ADD),N=$s,D=$s),ut)switch(X){case _l:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case eo:o.blendFunc(o.ONE,o.ONE);break;case Av:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Rv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:It("WebGLState: Invalid blending: ",X);break}else switch(X){case _l:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case eo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Av:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rv:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",X);break}z=null,C=null,U=null,P=null,b.set(0,0,0),L=0,S=X,F=ut}return}ke=ke||Ne,be=be||Me,Je=Je||Le,(Ne!==N||ke!==D)&&(o.blendEquationSeparate(Gt[Ne],Gt[ke]),N=Ne,D=ke),(Me!==z||Le!==C||be!==U||Je!==P)&&(o.blendFuncSeparate(pt[Me],pt[Le],pt[be],pt[Je]),z=Me,C=Le,U=be,P=Je),(Ve.equals(b)===!1||Ct!==L)&&(o.blendColor(Ve.r,Ve.g,Ve.b,Ct),b.copy(Ve),L=Ct),S=X,F=!1}function yt(X,Ne){X.side===Ua?Te(o.CULL_FACE):pe(o.CULL_FACE);let Me=X.side===ti;Ne&&(Me=!Me),tt(Me),X.blending===_l&&X.transparent===!1?_t(Oa):_t(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),f.setMask(X.colorWrite);const Le=X.stencilWrite;h.setTest(Le),Le&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),dn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?pe(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function tt(X){k!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),k=X)}function it(X){X!==oE?(pe(o.CULL_FACE),X!==ee&&(X===Tv?o.cullFace(o.BACK):X===lE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),ee=X}function Vt(X){X!==fe&&(Y&&o.lineWidth(X),fe=X)}function dn(X,Ne,Me){X?(pe(o.POLYGON_OFFSET_FILL),(J!==Ne||ne!==Me)&&(J=Ne,ne=Me,d.getReversed()&&(Ne=-Ne),o.polygonOffset(Ne,Me))):Te(o.POLYGON_OFFSET_FILL)}function Pt(X){X?pe(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function en(X){X===void 0&&(X=o.TEXTURE0+q-1),ue!==X&&(o.activeTexture(X),ue=X)}function W(X,Ne,Me){Me===void 0&&(ue===null?Me=o.TEXTURE0+q-1:Me=ue);let Le=xe[Me];Le===void 0&&(Le={type:void 0,texture:void 0},xe[Me]=Le),(Le.type!==X||Le.texture!==Ne)&&(ue!==Me&&(o.activeTexture(Me),ue=Me),o.bindTexture(X,Ne||j[X]),Le.type=X,Le.texture=Ne)}function nn(){const X=xe[ue];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Ot(){try{o.compressedTexImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function M(){try{o.texSubImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function te(){try{o.texSubImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function le(){try{o.compressedTexSubImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function me(){try{o.compressedTexSubImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function Ae(){try{o.texStorage2D(...arguments)}catch(X){It("WebGLState:",X)}}function Ue(){try{o.texStorage3D(...arguments)}catch(X){It("WebGLState:",X)}}function _e(){try{o.texImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function Ee(){try{o.texImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function De(X){return v[X]!==void 0?v[X]:o.getParameter(X)}function $e(X,Ne){v[X]!==Ne&&(o.pixelStorei(X,Ne),v[X]=Ne)}function ze(X){B.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),B.copy(X))}function Ie(X){ge.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),ge.copy(X))}function We(X,Ne){let Me=p.get(Ne);Me===void 0&&(Me=new WeakMap,p.set(Ne,Me));let Le=Me.get(X);Le===void 0&&(Le=o.getUniformBlockIndex(Ne,X.name),Me.set(X,Le))}function nt(X,Ne){const Le=p.get(Ne).get(X);m.get(Ne)!==Le&&(o.uniformBlockBinding(Ne,Le,X.__bindingPointIndex),m.set(Ne,Le))}function lt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},v={},ue=null,xe={},_={},E=new WeakMap,R=[],w=null,y=!1,S=null,N=null,z=null,C=null,D=null,U=null,P=null,b=new gt(0,0,0),L=0,F=!1,k=null,ee=null,fe=null,J=null,ne=null,B.set(0,0,o.canvas.width,o.canvas.height),ge.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:pe,disable:Te,bindFramebuffer:Be,drawBuffers:ve,useProgram:we,setBlending:_t,setMaterial:yt,setFlipSided:tt,setCullFace:it,setLineWidth:Vt,setPolygonOffset:dn,setScissorTest:Pt,activeTexture:en,bindTexture:W,unbindTexture:nn,compressedTexImage2D:Ot,compressedTexImage3D:O,texImage2D:_e,texImage3D:Ee,pixelStorei:$e,getParameter:De,updateUBOMapping:We,uniformBlockBinding:nt,texStorage2D:Ae,texStorage3D:Ue,texSubImage2D:M,texSubImage3D:te,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:ze,viewport:Ie,reset:lt}}function gR(o,t,i,s,u,f,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,x=new WeakMap,v=new Set;let _;const E=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,M){return R?new OffscreenCanvas(O,M):Lc("canvas")}function y(O,M,te){let le=1;const me=Ot(O);if((me.width>te||me.height>te)&&(le=te/Math.max(me.width,me.height)),le<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ae=Math.floor(le*me.width),Ue=Math.floor(le*me.height);_===void 0&&(_=w(Ae,Ue));const _e=M?w(Ae,Ue):_;return _e.width=Ae,_e.height=Ue,_e.getContext("2d").drawImage(O,0,0,Ae,Ue),rt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ae+"x"+Ue+")."),_e}else return"data"in O&&rt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),O;return O}function S(O){return O.generateMipmaps}function N(O){o.generateMipmap(O)}function z(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(O,M,te,le,me,Ae=!1){if(O!==null){if(o[O]!==void 0)return o[O];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ue;le&&(Ue=t.get("EXT_texture_norm16"),Ue||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=M;if(M===o.RED&&(te===o.FLOAT&&(_e=o.R32F),te===o.HALF_FLOAT&&(_e=o.R16F),te===o.UNSIGNED_BYTE&&(_e=o.R8),te===o.UNSIGNED_SHORT&&Ue&&(_e=Ue.R16_EXT),te===o.SHORT&&Ue&&(_e=Ue.R16_SNORM_EXT)),M===o.RED_INTEGER&&(te===o.UNSIGNED_BYTE&&(_e=o.R8UI),te===o.UNSIGNED_SHORT&&(_e=o.R16UI),te===o.UNSIGNED_INT&&(_e=o.R32UI),te===o.BYTE&&(_e=o.R8I),te===o.SHORT&&(_e=o.R16I),te===o.INT&&(_e=o.R32I)),M===o.RG&&(te===o.FLOAT&&(_e=o.RG32F),te===o.HALF_FLOAT&&(_e=o.RG16F),te===o.UNSIGNED_BYTE&&(_e=o.RG8),te===o.UNSIGNED_SHORT&&Ue&&(_e=Ue.RG16_EXT),te===o.SHORT&&Ue&&(_e=Ue.RG16_SNORM_EXT)),M===o.RG_INTEGER&&(te===o.UNSIGNED_BYTE&&(_e=o.RG8UI),te===o.UNSIGNED_SHORT&&(_e=o.RG16UI),te===o.UNSIGNED_INT&&(_e=o.RG32UI),te===o.BYTE&&(_e=o.RG8I),te===o.SHORT&&(_e=o.RG16I),te===o.INT&&(_e=o.RG32I)),M===o.RGB_INTEGER&&(te===o.UNSIGNED_BYTE&&(_e=o.RGB8UI),te===o.UNSIGNED_SHORT&&(_e=o.RGB16UI),te===o.UNSIGNED_INT&&(_e=o.RGB32UI),te===o.BYTE&&(_e=o.RGB8I),te===o.SHORT&&(_e=o.RGB16I),te===o.INT&&(_e=o.RGB32I)),M===o.RGBA_INTEGER&&(te===o.UNSIGNED_BYTE&&(_e=o.RGBA8UI),te===o.UNSIGNED_SHORT&&(_e=o.RGBA16UI),te===o.UNSIGNED_INT&&(_e=o.RGBA32UI),te===o.BYTE&&(_e=o.RGBA8I),te===o.SHORT&&(_e=o.RGBA16I),te===o.INT&&(_e=o.RGBA32I)),M===o.RGB&&(te===o.UNSIGNED_SHORT&&Ue&&(_e=Ue.RGB16_EXT),te===o.SHORT&&Ue&&(_e=Ue.RGB16_SNORM_EXT),te===o.UNSIGNED_INT_5_9_9_9_REV&&(_e=o.RGB9_E5),te===o.UNSIGNED_INT_10F_11F_11F_REV&&(_e=o.R11F_G11F_B10F)),M===o.RGBA){const Ee=Ae?Dc:Nt.getTransfer(me);te===o.FLOAT&&(_e=o.RGBA32F),te===o.HALF_FLOAT&&(_e=o.RGBA16F),te===o.UNSIGNED_BYTE&&(_e=Ee===qt?o.SRGB8_ALPHA8:o.RGBA8),te===o.UNSIGNED_SHORT&&Ue&&(_e=Ue.RGBA16_EXT),te===o.SHORT&&Ue&&(_e=Ue.RGBA16_SNORM_EXT),te===o.UNSIGNED_SHORT_4_4_4_4&&(_e=o.RGBA4),te===o.UNSIGNED_SHORT_5_5_5_1&&(_e=o.RGB5_A1)}return(_e===o.R16F||_e===o.R32F||_e===o.RG16F||_e===o.RG32F||_e===o.RGBA16F||_e===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_e}function D(O,M){let te;return O?M===null||M===la||M===Sl?te=o.DEPTH24_STENCIL8:M===ra?te=o.DEPTH32F_STENCIL8:M===xl&&(te=o.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===la||M===Sl?te=o.DEPTH_COMPONENT24:M===ra?te=o.DEPTH_COMPONENT32F:M===xl&&(te=o.DEPTH_COMPONENT16),te}function U(O,M){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Un&&O.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?M.mipmaps.length:1}function P(O){const M=O.target;M.removeEventListener("dispose",P),L(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&v.delete(M)}function b(O){const M=O.target;M.removeEventListener("dispose",b),k(M)}function L(O){const M=s.get(O);if(M.__webglInit===void 0)return;const te=O.source,le=E.get(te);if(le){const me=le[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&F(O),Object.keys(le).length===0&&E.delete(te)}s.remove(O)}function F(O){const M=s.get(O);o.deleteTexture(M.__webglTexture);const te=O.source,le=E.get(te);delete le[M.__cacheKey],d.memory.textures--}function k(O){const M=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let me=0;me<M.__webglFramebuffer[le].length;me++)o.deleteFramebuffer(M.__webglFramebuffer[le][me]);else o.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)o.deleteFramebuffer(M.__webglFramebuffer[le]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const te=O.textures;for(let le=0,me=te.length;le<me;le++){const Ae=s.get(te[le]);Ae.__webglTexture&&(o.deleteTexture(Ae.__webglTexture),d.memory.textures--),s.remove(te[le])}s.remove(O)}let ee=0;function fe(){ee=0}function J(){return ee}function ne(O){ee=O}function q(){const O=ee;return O>=u.maxTextures&&rt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+u.maxTextures),ee+=1,O}function Y(O){const M=[];return M.push(O.wrapS),M.push(O.wrapT),M.push(O.wrapR||0),M.push(O.magFilter),M.push(O.minFilter),M.push(O.anisotropy),M.push(O.internalFormat),M.push(O.format),M.push(O.type),M.push(O.generateMipmaps),M.push(O.premultiplyAlpha),M.push(O.flipY),M.push(O.unpackAlignment),M.push(O.colorSpace),M.join()}function he(O,M){const te=s.get(O);if(O.isVideoTexture&&W(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&te.__version!==O.version){const le=O.image;if(le===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(te,O,M);return}}else O.isExternalTexture&&(te.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,te.__webglTexture,o.TEXTURE0+M)}function K(O,M){const te=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){Te(te,O,M);return}else O.isExternalTexture&&(te.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,te.__webglTexture,o.TEXTURE0+M)}function ue(O,M){const te=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){Te(te,O,M);return}i.bindTexture(o.TEXTURE_3D,te.__webglTexture,o.TEXTURE0+M)}function xe(O,M){const te=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&te.__version!==O.version){Be(te,O,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture,o.TEXTURE0+M)}const Ce={[sp]:o.REPEAT,[La]:o.CLAMP_TO_EDGE,[op]:o.MIRRORED_REPEAT},Xe={[Un]:o.NEAREST,[NE]:o.NEAREST_MIPMAP_NEAREST,[Ku]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[Mh]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},B={[OE]:o.NEVER,[FE]:o.ALWAYS,[PE]:o.LESS,[Qp]:o.LEQUAL,[IE]:o.EQUAL,[Jp]:o.GEQUAL,[zE]:o.GREATER,[BE]:o.NOTEQUAL};function ge(O,M){if(M.type===ra&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===Mh||M.magFilter===Ku||M.magFilter===qr||M.minFilter===zn||M.minFilter===Mh||M.minFilter===Ku||M.minFilter===qr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Ce[M.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Ce[M.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Ce[M.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Xe[M.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Xe[M.minFilter]),M.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,B[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==Ku&&M.minFilter!==qr||M.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const te=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,u.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function Re(O,M){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,M.addEventListener("dispose",P));const le=M.source;let me=E.get(le);me===void 0&&(me={},E.set(le,me));const Ae=Y(M);if(Ae!==O.__cacheKey){me[Ae]===void 0&&(me[Ae]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,te=!0),me[Ae].usedTimes++;const Ue=me[O.__cacheKey];Ue!==void 0&&(me[O.__cacheKey].usedTimes--,Ue.usedTimes===0&&F(M)),O.__cacheKey=Ae,O.__webglTexture=me[Ae].texture}return te}function j(O,M,te){return Math.floor(Math.floor(O/te)/M)}function pe(O,M,te,le){const Ae=O.updateRanges;if(Ae.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,te,le,M.data);else{Ae.sort(($e,ze)=>$e.start-ze.start);let Ue=0;for(let $e=1;$e<Ae.length;$e++){const ze=Ae[Ue],Ie=Ae[$e],We=ze.start+ze.count,nt=j(Ie.start,M.width,4),lt=j(ze.start,M.width,4);Ie.start<=We+1&&nt===lt&&j(Ie.start+Ie.count-1,M.width,4)===nt?ze.count=Math.max(ze.count,Ie.start+Ie.count-ze.start):(++Ue,Ae[Ue]=Ie)}Ae.length=Ue+1;const _e=i.getParameter(o.UNPACK_ROW_LENGTH),Ee=i.getParameter(o.UNPACK_SKIP_PIXELS),De=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let $e=0,ze=Ae.length;$e<ze;$e++){const Ie=Ae[$e],We=Math.floor(Ie.start/4),nt=Math.ceil(Ie.count/4),lt=We%M.width,X=Math.floor(We/M.width),Ne=nt,Me=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,lt),i.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,lt,X,Ne,Me,te,le,M.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,_e),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(o.UNPACK_SKIP_ROWS,De)}}function Te(O,M,te){let le=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=o.TEXTURE_3D);const me=Re(O,M),Ae=M.source;i.bindTexture(le,O.__webglTexture,o.TEXTURE0+te);const Ue=s.get(Ae);if(Ae.version!==Ue.__version||me===!0){if(i.activeTexture(o.TEXTURE0+te),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Me=Nt.getPrimaries(Nt.workingColorSpace),Le=M.colorSpace===_r?null:Nt.getPrimaries(M.colorSpace),ke=M.colorSpace===_r||Me===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment);let Ee=y(M.image,!1,u.maxTextureSize);Ee=nn(M,Ee);const De=f.convert(M.format,M.colorSpace),$e=f.convert(M.type);let ze=C(M.internalFormat,De,$e,M.normalized,M.colorSpace,M.isVideoTexture);ge(le,M);let Ie;const We=M.mipmaps,nt=M.isVideoTexture!==!0,lt=Ue.__version===void 0||me===!0,X=Ae.dataReady,Ne=U(M,Ee);if(M.isDepthTexture)ze=D(M.format===Yr,M.type),lt&&(nt?i.texStorage2D(o.TEXTURE_2D,1,ze,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,De,$e,null));else if(M.isDataTexture)if(We.length>0){nt&&lt&&i.texStorage2D(o.TEXTURE_2D,Ne,ze,We[0].width,We[0].height);for(let Me=0,Le=We.length;Me<Le;Me++)Ie=We[Me],nt?X&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,De,$e,Ie.data):i.texImage2D(o.TEXTURE_2D,Me,ze,Ie.width,Ie.height,0,De,$e,Ie.data);M.generateMipmaps=!1}else nt?(lt&&i.texStorage2D(o.TEXTURE_2D,Ne,ze,Ee.width,Ee.height),X&&pe(M,Ee,De,$e)):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,De,$e,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,ze,We[0].width,We[0].height,Ee.depth);for(let Me=0,Le=We.length;Me<Le;Me++)if(Ie=We[Me],M.format!==Hi)if(De!==null)if(nt){if(X)if(M.layerUpdates.size>0){const ke=nx(Ie.width,Ie.height,M.format,M.type);for(const be of M.layerUpdates){const Je=Ie.data.subarray(be*ke/Ie.data.BYTES_PER_ELEMENT,(be+1)*ke/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,be,Ie.width,Ie.height,1,De,Je)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,Ee.depth,De,Ie.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,ze,Ie.width,Ie.height,Ee.depth,0,Ie.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,Ee.depth,De,$e,Ie.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,ze,Ie.width,Ie.height,Ee.depth,0,De,$e,Ie.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{nt&&lt&&i.texStorage2D(o.TEXTURE_2D,Ne,ze,We[0].width,We[0].height);for(let Me=0,Le=We.length;Me<Le;Me++)Ie=We[Me],M.format!==Hi?De!==null?nt?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,De,Ie.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,ze,Ie.width,Ie.height,0,Ie.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?X&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,De,$e,Ie.data):i.texImage2D(o.TEXTURE_2D,Me,ze,Ie.width,Ie.height,0,De,$e,Ie.data)}else if(M.isDataArrayTexture)if(nt){if(lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,ze,Ee.width,Ee.height,Ee.depth),X)if(M.layerUpdates.size>0){const Me=nx(Ee.width,Ee.height,M.format,M.type);for(const Le of M.layerUpdates){const ke=Ee.data.subarray(Le*Me/Ee.data.BYTES_PER_ELEMENT,(Le+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Le,Ee.width,Ee.height,1,De,$e,ke)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,$e,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,Ee.width,Ee.height,Ee.depth,0,De,$e,Ee.data);else if(M.isData3DTexture)nt?(lt&&i.texStorage3D(o.TEXTURE_3D,Ne,ze,Ee.width,Ee.height,Ee.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,$e,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,ze,Ee.width,Ee.height,Ee.depth,0,De,$e,Ee.data);else if(M.isFramebufferTexture){if(lt)if(nt)i.texStorage2D(o.TEXTURE_2D,Ne,ze,Ee.width,Ee.height);else{let Me=Ee.width,Le=Ee.height;for(let ke=0;ke<Ne;ke++)i.texImage2D(o.TEXTURE_2D,ke,ze,Me,Le,0,De,$e,null),Me>>=1,Le>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in o){const Me=o.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),Ee.parentNode!==Me){Me.appendChild(Ee),v.add(M),Me.onpaint=Le=>{const ke=Le.changedElements;for(const be of v)ke.includes(be.image)&&(be.needsUpdate=!0)},Me.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Ee);else{const ke=o.RGBA,be=o.RGBA,Je=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,ke,be,Je,Ee)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(We.length>0){if(nt&&lt){const Me=Ot(We[0]);i.texStorage2D(o.TEXTURE_2D,Ne,ze,Me.width,Me.height)}for(let Me=0,Le=We.length;Me<Le;Me++)Ie=We[Me],nt?X&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,De,$e,Ie):i.texImage2D(o.TEXTURE_2D,Me,ze,De,$e,Ie);M.generateMipmaps=!1}else if(nt){if(lt){const Me=Ot(Ee);i.texStorage2D(o.TEXTURE_2D,Ne,ze,Me.width,Me.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,De,$e,Ee)}else i.texImage2D(o.TEXTURE_2D,0,ze,De,$e,Ee);S(M)&&N(le),Ue.__version=Ae.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function Be(O,M,te){if(M.image.length!==6)return;const le=Re(O,M),me=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+te);const Ae=s.get(me);if(me.version!==Ae.__version||le===!0){i.activeTexture(o.TEXTURE0+te);const Ue=Nt.getPrimaries(Nt.workingColorSpace),_e=M.colorSpace===_r?null:Nt.getPrimaries(M.colorSpace),Ee=M.colorSpace===_r||Ue===_e?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,$e=M.image[0]&&M.image[0].isDataTexture,ze=[];for(let be=0;be<6;be++)!De&&!$e?ze[be]=y(M.image[be],!0,u.maxCubemapSize):ze[be]=$e?M.image[be].image:M.image[be],ze[be]=nn(M,ze[be]);const Ie=ze[0],We=f.convert(M.format,M.colorSpace),nt=f.convert(M.type),lt=C(M.internalFormat,We,nt,M.normalized,M.colorSpace),X=M.isVideoTexture!==!0,Ne=Ae.__version===void 0||le===!0,Me=me.dataReady;let Le=U(M,Ie);ge(o.TEXTURE_CUBE_MAP,M);let ke;if(De){X&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Le,lt,Ie.width,Ie.height);for(let be=0;be<6;be++){ke=ze[be].mipmaps;for(let Je=0;Je<ke.length;Je++){const Ve=ke[Je];M.format!==Hi?We!==null?X?Me&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,0,0,Ve.width,Ve.height,We,Ve.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,lt,Ve.width,Ve.height,0,Ve.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,0,0,Ve.width,Ve.height,We,nt,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,lt,Ve.width,Ve.height,0,We,nt,Ve.data)}}}else{if(ke=M.mipmaps,X&&Ne){ke.length>0&&Le++;const be=Ot(ze[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Le,lt,be.width,be.height)}for(let be=0;be<6;be++)if($e){X?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ze[be].width,ze[be].height,We,nt,ze[be].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,lt,ze[be].width,ze[be].height,0,We,nt,ze[be].data);for(let Je=0;Je<ke.length;Je++){const Ct=ke[Je].image[be].image;X?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,0,0,Ct.width,Ct.height,We,nt,Ct.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,lt,Ct.width,Ct.height,0,We,nt,Ct.data)}}else{X?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,We,nt,ze[be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,lt,We,nt,ze[be]);for(let Je=0;Je<ke.length;Je++){const Ve=ke[Je];X?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,0,0,We,nt,Ve.image[be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,lt,We,nt,Ve.image[be])}}}S(M)&&N(o.TEXTURE_CUBE_MAP),Ae.__version=me.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function ve(O,M,te,le,me,Ae){const Ue=f.convert(te.format,te.colorSpace),_e=f.convert(te.type),Ee=C(te.internalFormat,Ue,_e,te.normalized,te.colorSpace),De=s.get(M),$e=s.get(te);if($e.__renderTarget=M,!De.__hasExternalTextures){const ze=Math.max(1,M.width>>Ae),Ie=Math.max(1,M.height>>Ae);me===o.TEXTURE_3D||me===o.TEXTURE_2D_ARRAY?i.texImage3D(me,Ae,Ee,ze,Ie,M.depth,0,Ue,_e,null):i.texImage2D(me,Ae,Ee,ze,Ie,0,Ue,_e,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),en(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,le,me,$e.__webglTexture,0,Pt(M)):(me===o.TEXTURE_2D||me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,le,me,$e.__webglTexture,Ae),i.bindFramebuffer(o.FRAMEBUFFER,null)}function we(O,M,te){if(o.bindRenderbuffer(o.RENDERBUFFER,O),M.depthBuffer){const le=M.depthTexture,me=le&&le.isDepthTexture?le.type:null,Ae=D(M.stencilBuffer,me),Ue=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;en(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pt(M),Ae,M.width,M.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt(M),Ae,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Ae,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ue,o.RENDERBUFFER,O)}else{const le=M.textures;for(let me=0;me<le.length;me++){const Ae=le[me],Ue=f.convert(Ae.format,Ae.colorSpace),_e=f.convert(Ae.type),Ee=C(Ae.internalFormat,Ue,_e,Ae.normalized,Ae.colorSpace);en(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pt(M),Ee,M.width,M.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt(M),Ee,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Ee,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Gt(O,M,te){const le=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=s.get(M.depthTexture);if(me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(me.__webglInit===void 0&&(me.__webglInit=!0,M.depthTexture.addEventListener("dispose",P)),me.__webglTexture===void 0){me.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),ge(o.TEXTURE_CUBE_MAP,M.depthTexture);const De=f.convert(M.depthTexture.format),$e=f.convert(M.depthTexture.type);let ze;M.depthTexture.format===Ia?ze=o.DEPTH_COMPONENT24:M.depthTexture.format===Yr&&(ze=o.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,ze,M.width,M.height,0,De,$e,null)}}else he(M.depthTexture,0);const Ae=me.__webglTexture,Ue=Pt(M),_e=le?o.TEXTURE_CUBE_MAP_POSITIVE_X+te:o.TEXTURE_2D,Ee=M.depthTexture.format===Yr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ia)en(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,_e,Ae,0,Ue):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,_e,Ae,0);else if(M.depthTexture.format===Yr)en(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,_e,Ae,0,Ue):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,_e,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(O){const M=s.get(O),te=O.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==O.depthTexture){const le=O.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",me)};le.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=le}if(O.depthTexture&&!M.__autoAllocateDepthBuffer)if(te)for(let le=0;le<6;le++)Gt(M.__webglFramebuffer[le],O,le);else{const le=O.texture.mipmaps;le&&le.length>0?Gt(M.__webglFramebuffer[0],O,0):Gt(M.__webglFramebuffer,O,0)}else if(te){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=o.createRenderbuffer(),we(M.__webglDepthbuffer[le],O,!1);else{const me=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer[le];o.bindRenderbuffer(o.RENDERBUFFER,Ae),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,Ae)}}else{const le=O.texture.mipmaps;if(le&&le.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),we(M.__webglDepthbuffer,O,!1);else{const me=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ae),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,Ae)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function _t(O,M,te){const le=s.get(O);M!==void 0&&ve(le.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),te!==void 0&&pt(O)}function yt(O){const M=O.texture,te=s.get(O),le=s.get(M);O.addEventListener("dispose",b);const me=O.textures,Ae=O.isWebGLCubeRenderTarget===!0,Ue=me.length>1;if(Ue||(le.__webglTexture===void 0&&(le.__webglTexture=o.createTexture()),le.__version=M.version,d.memory.textures++),Ae){te.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0){te.__webglFramebuffer[_e]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)te.__webglFramebuffer[_e][Ee]=o.createFramebuffer()}else te.__webglFramebuffer[_e]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){te.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)te.__webglFramebuffer[_e]=o.createFramebuffer()}else te.__webglFramebuffer=o.createFramebuffer();if(Ue)for(let _e=0,Ee=me.length;_e<Ee;_e++){const De=s.get(me[_e]);De.__webglTexture===void 0&&(De.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&en(O)===!1){te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let _e=0;_e<me.length;_e++){const Ee=me[_e];te.__webglColorRenderbuffer[_e]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,te.__webglColorRenderbuffer[_e]);const De=f.convert(Ee.format,Ee.colorSpace),$e=f.convert(Ee.type),ze=C(Ee.internalFormat,De,$e,Ee.normalized,Ee.colorSpace,O.isXRRenderTarget===!0),Ie=Pt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie,ze,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_e,o.RENDERBUFFER,te.__webglColorRenderbuffer[_e])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),we(te.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(o.TEXTURE_CUBE_MAP,le.__webglTexture),ge(o.TEXTURE_CUBE_MAP,M);for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)ve(te.__webglFramebuffer[_e][Ee],O,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ee);else ve(te.__webglFramebuffer[_e],O,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);S(M)&&N(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let _e=0,Ee=me.length;_e<Ee;_e++){const De=me[_e],$e=s.get(De);let ze=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ze=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ze,$e.__webglTexture),ge(ze,De),ve(te.__webglFramebuffer,O,De,o.COLOR_ATTACHMENT0+_e,ze,0),S(De)&&N(ze)}i.unbindTexture()}else{let _e=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(_e=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(_e,le.__webglTexture),ge(_e,M),M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)ve(te.__webglFramebuffer[Ee],O,M,o.COLOR_ATTACHMENT0,_e,Ee);else ve(te.__webglFramebuffer,O,M,o.COLOR_ATTACHMENT0,_e,0);S(M)&&N(_e),i.unbindTexture()}O.depthBuffer&&pt(O)}function tt(O){const M=O.textures;for(let te=0,le=M.length;te<le;te++){const me=M[te];if(S(me)){const Ae=z(O),Ue=s.get(me).__webglTexture;i.bindTexture(Ae,Ue),N(Ae),i.unbindTexture()}}}const it=[],Vt=[];function dn(O){if(O.samples>0){if(en(O)===!1){const M=O.textures,te=O.width,le=O.height;let me=o.COLOR_BUFFER_BIT;const Ae=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=s.get(O),_e=M.length>1;if(_e)for(let De=0;De<M.length;De++)i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ee=O.texture.mipmaps;Ee&&Ee.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let De=0;De<M.length;De++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(me|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(me|=o.STENCIL_BUFFER_BIT)),_e){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const $e=s.get(M[De]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$e,0)}o.blitFramebuffer(0,0,te,le,0,0,te,le,me,o.NEAREST),m===!0&&(it.length=0,Vt.length=0,it.push(o.COLOR_ATTACHMENT0+De),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(it.push(Ae),Vt.push(Ae),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Vt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,it))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_e)for(let De=0;De<M.length;De++){i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const $e=s.get(M[De]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,$e,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&m){const M=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Pt(O){return Math.min(u.maxSamples,O.samples)}function en(O){const M=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function W(O){const M=d.render.frame;x.get(O)!==M&&(x.set(O,M),O.update())}function nn(O,M){const te=O.colorSpace,le=O.format,me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==Nc&&te!==_r&&(Nt.getTransfer(te)===qt?(le!==Hi||me!==Ci)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",te)),M}function Ot(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=q,this.resetTextureUnits=fe,this.getTextureUnits=J,this.setTextureUnits=ne,this.setTexture2D=he,this.setTexture2DArray=K,this.setTexture3D=ue,this.setTextureCube=xe,this.rebindTextures=_t,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=en,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function _R(o,t){function i(s,u=_r){let f;const d=Nt.getTransfer(u);if(s===Ci)return o.UNSIGNED_BYTE;if(s===qp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Yp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Gx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Vx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Fx)return o.BYTE;if(s===Hx)return o.SHORT;if(s===xl)return o.UNSIGNED_SHORT;if(s===Wp)return o.INT;if(s===la)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===ua)return o.HALF_FLOAT;if(s===kx)return o.ALPHA;if(s===Xx)return o.RGB;if(s===Hi)return o.RGBA;if(s===Ia)return o.DEPTH_COMPONENT;if(s===Yr)return o.DEPTH_STENCIL;if(s===Wx)return o.RED;if(s===Zp)return o.RED_INTEGER;if(s===jr)return o.RG;if(s===Kp)return o.RG_INTEGER;if(s===jp)return o.RGBA_INTEGER;if(s===Mc||s===Ec||s===bc||s===Tc)if(d===qt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Mc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ec)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Mc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ec)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lp||s===up||s===cp||s===fp)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===lp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===up)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dp||s===hp||s===pp||s===mp||s===gp||s===Cc||s===_p)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(s===dp||s===hp)return d===qt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===pp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===mp)return f.COMPRESSED_R11_EAC;if(s===gp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Cc)return f.COMPRESSED_RG11_EAC;if(s===_p)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===vp||s===xp||s===Sp||s===yp||s===Mp||s===Ep||s===bp||s===Tp||s===Ap||s===Rp||s===Cp||s===wp||s===Np||s===Dp)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(s===vp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ep)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Tp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ap)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Np)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Up||s===Lp||s===Op)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(s===Up)return d===qt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Lp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Op)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Pp||s===Ip||s===wc||s===zp)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(s===Pp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Ip)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wc)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Sl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const vR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xR=`
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

}`;class SR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new nS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new fa({vertexShader:vR,fragmentShader:xR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ca(new Fc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yR extends Jr{constructor(t,i){super();const s=this;let u=null,f=1,d=null,h="local-floor",m=1,p=null,x=null,v=null,_=null,E=null,R=null;const w=typeof XRWebGLBinding<"u",y=new SR,S={},N=i.getContextAttributes();let z=null,C=null;const D=[],U=[],P=new Lt;let b=null,L=null;const F=new Ri;F.viewport=new un;const k=new Ri;k.viewport=new un;const ee=[F,k],fe=new Rb;let J=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let pe=D[j];return pe===void 0&&(pe=new Dh,D[j]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(j){let pe=D[j];return pe===void 0&&(pe=new Dh,D[j]=pe),pe.getGripSpace()},this.getHand=function(j){let pe=D[j];return pe===void 0&&(pe=new Dh,D[j]=pe),pe.getHandSpace()};function q(j){const pe=U.indexOf(j.inputSource);if(pe===-1)return;const Te=D[pe];Te!==void 0&&(Te.update(j.inputSource,j.frame,p||d),Te.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){u.removeEventListener("select",q),u.removeEventListener("selectstart",q),u.removeEventListener("selectend",q),u.removeEventListener("squeeze",q),u.removeEventListener("squeezestart",q),u.removeEventListener("squeezeend",q),u.removeEventListener("end",Y),u.removeEventListener("inputsourceschange",he);for(let j=0;j<D.length;j++){const pe=U[j];pe!==null&&(U[j]=null,D[j].disconnect(pe))}J=null,ne=null,y.reset();for(const j in S)delete S[j];if(t.setRenderTarget(z),E=null,_=null,v=null,u=null,C=null,Re.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),L!==null){const j=L.camera;j.fov=L.fov,j.zoom=L.zoom,j.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){f=j,s.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){h=j,s.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(u,i)),v},this.getFrame=function(){return R},this.getSession=function(){return u},this.setSession=async function(j){if(u=j,u!==null){if(z=t.getRenderTarget(),u.addEventListener("select",q),u.addEventListener("selectstart",q),u.addEventListener("selectend",q),u.addEventListener("squeeze",q),u.addEventListener("squeezestart",q),u.addEventListener("squeezeend",q),u.addEventListener("end",Y),u.addEventListener("inputsourceschange",he),N.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Be=null,ve=null;N.depth&&(ve=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=N.stencil?Yr:Ia,Be=N.stencil?Sl:la);const we={colorFormat:i.RGBA8,depthFormat:ve,scaleFactor:f};v=this.getBinding(),_=v.createProjectionLayer(we),u.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new Gi(_.textureWidth,_.textureHeight,{format:Hi,type:Ci,depthTexture:new yl(_.textureWidth,_.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Te={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(u,i,Te),u.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new Gi(E.framebufferWidth,E.framebufferHeight,{format:Hi,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await u.requestReferenceSpace(h),Re.setContext(u),Re.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function he(j){for(let pe=0;pe<j.removed.length;pe++){const Te=j.removed[pe],Be=U.indexOf(Te);Be>=0&&(U[Be]=null,D[Be].disconnect(Te))}for(let pe=0;pe<j.added.length;pe++){const Te=j.added[pe];let Be=U.indexOf(Te);if(Be===-1){for(let we=0;we<D.length;we++)if(we>=U.length){U.push(Te),Be=we;break}else if(U[we]===null){U[we]=Te,Be=we;break}if(Be===-1)break}const ve=D[Be];ve&&ve.connect(Te)}}const K=new ae,ue=new ae;function xe(j,pe,Te){K.setFromMatrixPosition(pe.matrixWorld),ue.setFromMatrixPosition(Te.matrixWorld);const Be=K.distanceTo(ue),ve=pe.projectionMatrix.elements,we=Te.projectionMatrix.elements,Gt=ve[14]/(ve[10]-1),pt=ve[14]/(ve[10]+1),_t=(ve[9]+1)/ve[5],yt=(ve[9]-1)/ve[5],tt=(ve[8]-1)/ve[0],it=(we[8]+1)/we[0],Vt=Gt*tt,dn=Gt*it,Pt=Be/(-tt+it),en=Pt*-tt;if(pe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(en),j.translateZ(Pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ve[10]===-1)j.projectionMatrix.copy(pe.projectionMatrix),j.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const W=Gt+Pt,nn=pt+Pt,Ot=Vt-en,O=dn+(Be-en),M=_t*pt/nn*W,te=yt*pt/nn*W;j.projectionMatrix.makePerspective(Ot,O,M,te,W,nn),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ce(j,pe){pe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(pe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(u===null)return;let pe=j.near,Te=j.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),fe.near=k.near=F.near=pe,fe.far=k.far=F.far=Te,(J!==fe.near||ne!==fe.far)&&(u.updateRenderState({depthNear:fe.near,depthFar:fe.far}),J=fe.near,ne=fe.far),fe.layers.mask=j.layers.mask|6,F.layers.mask=fe.layers.mask&-5,k.layers.mask=fe.layers.mask&-3;const Be=j.parent,ve=fe.cameras;Ce(fe,Be);for(let we=0;we<ve.length;we++)Ce(ve[we],Be);ve.length===2?xe(fe,F,k):fe.projectionMatrix.copy(F.projectionMatrix),L===null&&j.isPerspectiveCamera&&(L={camera:j,fov:j.fov,zoom:j.zoom}),Xe(j,fe,Be)};function Xe(j,pe,Te){Te===null?j.matrix.copy(pe.matrixWorld):(j.matrix.copy(Te.matrixWorld),j.matrix.invert(),j.matrix.multiply(pe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(pe.projectionMatrix),j.projectionMatrixInverse.copy(pe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Bp*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return fe},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(j){m=j,_!==null&&(_.fixedFoveation=j),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(fe)},this.getCameraTexture=function(j){return S[j]};let B=null;function ge(j,pe){if(x=pe.getViewerPose(p||d),R=pe,x!==null){const Te=x.views;E!==null&&(t.setRenderTargetFramebuffer(C,E.framebuffer),t.setRenderTarget(C));let Be=!1;Te.length!==fe.cameras.length&&(fe.cameras.length=0,Be=!0);for(let pt=0;pt<Te.length;pt++){const _t=Te[pt];let yt=null;if(E!==null)yt=E.getViewport(_t);else{const it=v.getViewSubImage(_,_t);yt=it.viewport,pt===0&&(t.setRenderTargetTextures(C,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(C))}let tt=ee[pt];tt===void 0&&(tt=new Ri,tt.layers.enable(pt),tt.viewport=new un,ee[pt]=tt),tt.matrix.fromArray(_t.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(_t.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(yt.x,yt.y,yt.width,yt.height),pt===0&&(fe.matrix.copy(tt.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale)),Be===!0&&fe.cameras.push(tt)}const ve=u.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const pt=v.getDepthInformation(Te[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,u.renderState)}if(ve&&ve.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let pt=0;pt<Te.length;pt++){const _t=Te[pt].camera;if(_t){let yt=S[_t];yt||(yt=new nS,S[_t]=yt);const tt=v.getCameraImage(_t);yt.sourceTexture=tt}}}}for(let Te=0;Te<D.length;Te++){const Be=U[Te],ve=D[Te];Be!==null&&ve!==void 0&&ve.update(Be,pe,p||d)}B&&B(j,pe),pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pe}),R=null}const Re=new sS;Re.setAnimationLoop(ge),this.setAnimationLoop=function(j){B=j},this.dispose=function(){}}}const MR=new cn,hS=new ft;hS.set(-1,0,0,0,1,0,0,0,1);function ER(o,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,iS(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function u(y,S,N,z,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?f(y,S):S.isMeshLambertMaterial?(f(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(f(y,S),v(y,S)):S.isMeshPhongMaterial?(f(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(f(y,S),_(y,S),S.isMeshPhysicalMaterial&&E(y,S,C)):S.isMeshMatcapMaterial?(f(y,S),R(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),w(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,N,z):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ti&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ti&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const N=t.get(S),z=N.envMap,C=N.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(MR.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(hS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,N,z){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*N,y.scale.value=z*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function E(y,S,N){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ti&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,S){S.matcap&&(y.matcap.value=S.matcap)}function w(y,S){const N=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function bR(o,t,i,s){let u={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,D){const U=D.program;s.uniformBlockBinding(C,U)}function p(C,D){let U=u[C.id];U===void 0&&(y(C),U=x(C),u[C.id]=U,C.addEventListener("dispose",N));const P=D.program;s.updateUBOMapping(C,P);const b=t.render.frame;f[C.id]!==b&&(_(C),f[C.id]=b)}function x(C){const D=v();C.__bindingPointIndex=D;const U=o.createBuffer(),P=C.__size,b=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,P,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,U),U}function v(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const D=u[C.id],U=C.uniforms,P=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let b=0,L=U.length;b<L;b++){const F=U[b];if(Array.isArray(F))for(let k=0,ee=F.length;k<ee;k++)E(F[k],b,k,P);else E(F,b,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(C,D,U,P){if(w(C,D,U,P)===!0){const b=C.__offset,L=C.value;if(Array.isArray(L)){let F=0;for(let k=0;k<L.length;k++){const ee=L[k],fe=S(ee);R(ee,C.__data,F),typeof ee!="number"&&typeof ee!="boolean"&&!ee.isMatrix3&&!ArrayBuffer.isView(ee)&&(F+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(L,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,C.__data)}}function R(C,D,U){typeof C=="number"||typeof C=="boolean"?D[0]=C:C.isMatrix3?(D[0]=C.elements[0],D[1]=C.elements[1],D[2]=C.elements[2],D[3]=0,D[4]=C.elements[3],D[5]=C.elements[4],D[6]=C.elements[5],D[7]=0,D[8]=C.elements[6],D[9]=C.elements[7],D[10]=C.elements[8],D[11]=0):ArrayBuffer.isView(C)?D.set(new C.constructor(C.buffer,C.byteOffset,D.length)):C.toArray(D,U)}function w(C,D,U,P){const b=C.value,L=D+"_"+U;if(P[L]===void 0)return typeof b=="number"||typeof b=="boolean"?P[L]=b:ArrayBuffer.isView(b)?P[L]=b.slice():P[L]=b.clone(),!0;{const F=P[L];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return P[L]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(F.equals(b)===!1)return F.copy(b),!0}}return!1}function y(C){const D=C.uniforms;let U=0;const P=16;for(let L=0,F=D.length;L<F;L++){const k=Array.isArray(D[L])?D[L]:[D[L]];for(let ee=0,fe=k.length;ee<fe;ee++){const J=k[ee],ne=Array.isArray(J.value)?J.value:[J.value];for(let q=0,Y=ne.length;q<Y;q++){const he=ne[q],K=S(he),ue=U%P,xe=ue%K.boundary,Ce=ue+xe;U+=xe,Ce!==0&&P-Ce<K.storage&&(U+=P-Ce),J.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=U,U+=K.storage}}}const b=U%P;return b>0&&(U+=P-b),C.__size=U,C.__cache={},this}function S(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(D.boundary=16,D.storage=C.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",C),D}function N(C){const D=C.target;D.removeEventListener("dispose",N);const U=d.indexOf(D.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(u[D.id]),delete u[D.id],delete f[D.id]}function z(){for(const C in u)o.deleteBuffer(u[C]);d=[],u={},f={}}return{bind:m,update:p,dispose:z}}const TR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ia=null;function AR(){return ia===null&&(ia=new hb(TR,16,16,jr,ua),ia.name="DFG_LUT",ia.minFilter=zn,ia.magFilter=zn,ia.wrapS=La,ia.wrapT=La,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class RR{constructor(t={}){const{canvas:i=VE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:E=Ci}=t;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const w=E,y=new Set([jp,Kp,Zp]),S=new Set([Ci,la,xl,Sl,qp,Yp]),N=new Uint32Array(4),z=new Int32Array(4),C=new ae;let D=null,U=null;const P=[],b=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let k=!1,ee=null,fe=null,J=null,ne=null;this._outputColorSpace=Ai;let q=0,Y=0,he=null,K=-1,ue=null;const xe=new un,Ce=new un;let Xe=null;const B=new gt(0);let ge=0,Re=i.width,j=i.height,pe=1,Te=null,Be=null;const ve=new un(0,0,Re,j),we=new un(0,0,Re,j);let Gt=!1;const pt=new Jx;let _t=!1,yt=!1;const tt=new cn,it=new ae,Vt=new un,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function en(){return he===null?pe:1}let W=s;function nn(T,H){return i.getContext(T,H)}let Ot,O,M,te,le,me,Ae,Ue,_e,Ee,De,$e,ze,Ie,We,nt,lt,X,Ne,Me,Le,ke,be;try{const T={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xp}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",ut,!1),i.addEventListener("webglcontextcreationerror",ni,!1),W===null){const H="webgl2";if(W=nn(H,T),W===null)throw nn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(T){throw i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",ni,!1),It("WebGLRenderer: "+T.message),T}function Je(){Ot=new AA(W),Ot.init(),Le=new _R(W,Ot),O=new gA(W,Ot,t,Le),M=new mR(W,Ot),O.reversedDepthBuffer&&_&&M.buffers.depth.setReversed(!0),fe=W.createFramebuffer(),J=W.createFramebuffer(),ne=W.createFramebuffer(),te=new wA(W),le=new tR,me=new gR(W,Ot,M,le,O,Le,te),Ae=new TA(F),Ue=new Db(W),ke=new pA(W,Ue),_e=new RA(W,Ue,te,ke),Ee=new DA(W,_e,Ue,ke,te),X=new NA(W,O,me),We=new _A(le),De=new eR(F,Ae,Ot,O,ke,We),$e=new ER(F,le),ze=new iR,Ie=new uR(Ot),lt=new hA(F,Ae,M,Ee,R,m),nt=new pR(F,Ee,O),be=new bR(W,te,O,M),Ne=new mA(W,Ot,te),Me=new CA(W,Ot,te),te.programs=De.programs,F.capabilities=O,F.extensions=Ot,F.properties=le,F.renderLists=ze,F.shadowMap=nt,F.state=M,F.info=te}w!==Ci&&(L=new LA(w,i.width,i.height,h,u,f));const Ve=new yR(F,W);this.xr=Ve,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=Ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(T){T!==void 0&&(pe=T,this.setSize(Re,j,!1))},this.getSize=function(T){return T.set(Re,j)},this.setSize=function(T,H,de=!0){if(Ve.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=T,j=H,i.width=Math.floor(T*pe),i.height=Math.floor(H*pe),de===!0&&(i.style.width=T+"px",i.style.height=H+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(Re*pe,j*pe).floor()},this.setDrawingBufferSize=function(T,H,de){Re=T,j=H,pe=de,i.width=Math.floor(T*de),i.height=Math.floor(H*de),this.setViewport(0,0,T,H)},this.setEffects=function(T){if(w===Ci){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let H=0;H<T.length;H++)if(T[H].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(xe)},this.getViewport=function(T){return T.copy(ve)},this.setViewport=function(T,H,de,re){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,H,de,re),M.viewport(xe.copy(ve).multiplyScalar(pe).round())},this.getScissor=function(T){return T.copy(we)},this.setScissor=function(T,H,de,re){T.isVector4?we.set(T.x,T.y,T.z,T.w):we.set(T,H,de,re),M.scissor(Ce.copy(we).multiplyScalar(pe).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(T){M.setScissorTest(Gt=T)},this.setOpaqueSort=function(T){Te=T},this.setTransparentSort=function(T){Be=T},this.getClearColor=function(T){return T.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,de=!0){let re=0;if(T){let se=!1;if(he!==null){const Fe=he.texture.format;se=y.has(Fe)}if(se){const Fe=he.texture.type,qe=S.has(Fe),Oe=lt.getClearColor(),Ke=lt.getClearAlpha(),je=Oe.r,st=Oe.g,ct=Oe.b;qe?(N[0]=je,N[1]=st,N[2]=ct,N[3]=Ke,W.clearBufferuiv(W.COLOR,0,N)):(z[0]=je,z[1]=st,z[2]=ct,z[3]=Ke,W.clearBufferiv(W.COLOR,0,z))}else re|=W.COLOR_BUFFER_BIT}H&&(re|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(re|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&W.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),ee=T},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",ni,!1),lt.dispose(),ze.dispose(),Ie.dispose(),le.dispose(),Ae.dispose(),Ee.dispose(),ke.dispose(),be.dispose(),De.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",xr),Ve.removeEventListener("sessionend",Ba),Vi.stop()};function Ct(T){T.preventDefault(),Dv("WebGLRenderer: Context Lost."),k=!0}function ut(){Dv("WebGLRenderer: Context Restored."),k=!1;const T=te.autoReset,H=nt.enabled,de=nt.autoUpdate,re=nt.needsUpdate,se=nt.type;Je(),te.autoReset=T,nt.enabled=H,nt.autoUpdate=de,nt.needsUpdate=re,nt.type=se}function ni(T){It("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pi(T){const H=T.target;H.removeEventListener("dispose",pi),Vc(H)}function Vc(T){$r(T),le.remove(T)}function $r(T){const H=le.get(T).programs;H!==void 0&&(H.forEach(function(de){De.releaseProgram(de)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,de,re,se,Fe){H===null&&(H=dn);const qe=se.isMesh&&se.matrixWorld.determinantAffine()<0,Oe=mo(T,H,de,re,se);M.setMaterial(re,qe);let Ke=de.index,je=1;if(re.wireframe===!0){if(Ke=_e.getWireframeAttribute(de),Ke===void 0)return;je=2}const st=de.drawRange,ct=de.attributes.position;let Ye=st.start*je,Mt=(st.start+st.count)*je;Fe!==null&&(Ye=Math.max(Ye,Fe.start*je),Mt=Math.min(Mt,(Fe.start+Fe.count)*je)),Ke!==null?(Ye=Math.max(Ye,0),Mt=Math.min(Mt,Ke.count)):ct!=null&&(Ye=Math.max(Ye,0),Mt=Math.min(Mt,ct.count));const vt=Mt-Ye;if(vt<0||vt===1/0)return;ke.setup(se,re,Oe,de,Ke);let Yt,Ft=Ne;if(Ke!==null&&(Yt=Ue.get(Ke),Ft=Me,Ft.setIndex(Yt)),se.isMesh)re.wireframe===!0?(M.setLineWidth(re.wireframeLinewidth*en()),Ft.setMode(W.LINES)):Ft.setMode(W.TRIANGLES);else if(se.isLine){let vn=re.linewidth;vn===void 0&&(vn=1),M.setLineWidth(vn*en()),se.isLineSegments?Ft.setMode(W.LINES):se.isLineLoop?Ft.setMode(W.LINE_LOOP):Ft.setMode(W.LINE_STRIP)}else se.isPoints?Ft.setMode(W.POINTS):se.isSprite&&Ft.setMode(W.TRIANGLES);if(se.isBatchedMesh)if(Ot.get("WEBGL_multi_draw"))Ft.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const vn=se._multiDrawStarts,He=se._multiDrawCounts,rn=se._multiDrawCount,wt=Ke?Ue.get(Ke).bytesPerElement:1,Hn=le.get(re).currentProgram.getUniforms();for(let ii=0;ii<rn;ii++)Hn.setValue(W,"_gl_DrawID",ii),Ft.render(vn[ii]/wt,He[ii])}else if(se.isInstancedMesh)Ft.renderInstances(Ye,vt,se.count);else if(de.isInstancedBufferGeometry){const vn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,He=Math.min(de.instanceCount,vn);Ft.renderInstances(Ye,vt,He)}else Ft.render(Ye,vt)};function vr(T,H,de,re){ee!==null&&T.isNodeMaterial&&ee.setObject(re,T),_t===!0&&We.setState(T,de,!1),T.transparent===!0&&T.side===Ua&&T.forceSinglePass===!1?(T.side=ti,T.needsUpdate=!0,Sr(T,H,re),T.side=Zr,T.needsUpdate=!0,Sr(T,H,re),T.side=Ua):Sr(T,H,re)}this.compile=function(T,H,de=null){de===null&&(de=T),ee!==null&&ee.renderStart(T,H,de),U=Ie.get(de),U.init(H),b.push(U),de.traverseVisible(function(se){se.isLight&&se.layers.test(H.layers)&&(U.pushLight(se),se.castShadow&&U.pushShadow(se))}),T!==de&&T.traverseVisible(function(se){se.isLight&&se.layers.test(H.layers)&&(U.pushLight(se),se.castShadow&&U.pushShadow(se))}),U.setupLights(),ee!==null&&ee.updateLights(U.state.lightsArray),yt=this.localClippingEnabled,_t=We.init(this.clippingPlanes,yt),_t===!0&&We.setGlobalState(this.clippingPlanes,H),ee!==null&&nt.render(U.state.shadowsArray,de,H);const re=new Set;return T.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Fe=se.material;if(Fe)if(Array.isArray(Fe))for(let qe=0;qe<Fe.length;qe++){const Oe=Fe[qe];vr(Oe,de,H,se),re.add(Oe)}else vr(Fe,de,H,se),re.add(Fe)}),U=b.pop(),ee!==null&&ee.renderEnd(),re},this.compileAsync=function(T,H,de=null){const re=this.compile(T,H,de);return new Promise(se=>{function Fe(){if(re.forEach(function(qe){const Ke=le.get(qe).currentProgram;(Ke===void 0||Ke.isReady())&&re.delete(qe)}),re.size===0){se(T);return}setTimeout(Fe,10)}Ot.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let za=null;function da(T){za&&za(T)}function xr(){Vi.stop()}function Ba(){Vi.start()}const Vi=new sS;Vi.setAnimationLoop(da),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(T){za=T,Ve.setAnimationLoop(T),T===null?Vi.stop():Vi.start()},Ve.addEventListener("sessionstart",xr),Ve.addEventListener("sessionend",Ba),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;ee!==null&&ee.renderStart(T,H);const de=Ve.enabled===!0&&Ve.isPresenting===!0,re=L!==null&&(he===null||de)&&L.begin(F,he);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(H),H=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(F,T,H,he),U=Ie.get(T,b.length),U.init(H),U.state.textureUnits=me.getTextureUnits(),b.push(U),tt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),pt.setFromProjectionMatrix(tt,sa,H.reversedDepth),yt=this.localClippingEnabled,_t=We.init(this.clippingPlanes,yt),D=ze.get(T,P.length),D.init(),P.push(D),Ve.enabled===!0&&Ve.isPresenting===!0){const qe=F.xr.getDepthSensingMesh();qe!==null&&uo(qe,H,-1/0,F.sortObjects)}uo(T,H,0,F.sortObjects),D.finish(),ee!==null&&ee.updateLights(U.state.lightsArray),F.sortObjects===!0&&D.sort(Te,Be),Pt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Pt&&lt.addToRenderList(D,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&We.beginShadows();const se=U.state.shadowsArray;if(nt.render(se,T,H),_t===!0&&We.endShadows(),(re&&L.hasRenderPass())===!1){const qe=D.opaque,Oe=D.transmissive;if(U.setupLights(),H.isArrayCamera){const Ke=H.cameras;if(Oe.length>0)for(let je=0,st=Ke.length;je<st;je++){const ct=Ke[je];es(qe,Oe,T,ct)}Pt&&lt.render(T);for(let je=0,st=Ke.length;je<st;je++){const ct=Ke[je];co(D,T,ct,ct.viewport)}}else Oe.length>0&&es(qe,Oe,T,H),Pt&&lt.render(T),co(D,T,H)}he!==null&&Y===0&&(me.updateMultisampleRenderTarget(he),me.updateRenderTargetMipmap(he)),re&&L.end(F),T.isScene===!0&&T.onAfterRender(F,T,H),ke.resetDefaultState(),K=-1,ue=null,b.pop(),b.length>0?(U=b[b.length-1],me.setTextureUnits(U.state.textureUnits),_t===!0&&We.setGlobalState(F.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?D=P[P.length-1]:D=null,ee!==null&&ee.renderEnd()};function uo(T,H,de,re){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)de=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLightProbeGrid)U.pushLightProbeGrid(T);else if(T.isLight)U.pushLight(T),T.castShadow&&U.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(pt)){re&&Vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(tt);const qe=Ee.update(T),Oe=T.material;Oe.visible&&D.push(T,qe,Oe,de,Vt.z,null,H)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(pt))){const qe=Ee.update(T),Oe=T.material;if(re&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Vt.copy(T.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Vt.copy(qe.boundingSphere.center)),Vt.applyMatrix4(T.matrixWorld).applyMatrix4(tt)),Array.isArray(Oe)){const Ke=qe.groups;for(let je=0,st=Ke.length;je<st;je++){const ct=Ke[je],Ye=Oe[ct.materialIndex];Ye&&Ye.visible&&D.push(T,qe,Ye,de,Vt.z,ct,H)}}else Oe.visible&&D.push(T,qe,Oe,de,Vt.z,null,H)}}const Fe=T.children;for(let qe=0,Oe=Fe.length;qe<Oe;qe++)uo(Fe[qe],H,de,re)}function co(T,H,de,re){const{opaque:se,transmissive:Fe,transparent:qe}=T;U.setupLightsView(de),_t===!0&&We.setGlobalState(F.clippingPlanes,de),re&&M.viewport(xe.copy(re)),se.length>0&&ki(se,H,de),Fe.length>0&&ki(Fe,H,de),qe.length>0&&ki(qe,H,de),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function es(T,H,de,re){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[re.id]===void 0){const Ye=Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[re.id]=new Gi(1,1,{generateMipmaps:!0,type:Ye?ua:Ci,minFilter:qr,samples:Math.max(4,O.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Fe=U.state.transmissionRenderTarget[re.id],qe=re.viewport||xe;Fe.setSize(qe.z*F.transmissionResolutionScale,qe.w*F.transmissionResolutionScale);const Oe=F.getRenderTarget(),Ke=F.getActiveCubeFace(),je=F.getActiveMipmapLevel();F.setRenderTarget(Fe),F.getClearColor(B),ge=F.getClearAlpha(),ge<1&&F.setClearColor(16777215,.5),F.clear(),Pt&&lt.render(de);const st=F.toneMapping;F.toneMapping=oa;const ct=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),U.setupLightsView(re),_t===!0&&We.setGlobalState(F.clippingPlanes,re),ki(T,de,re),me.updateMultisampleRenderTarget(Fe),me.updateRenderTargetMipmap(Fe),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Mt=0,vt=H.length;Mt<vt;Mt++){const Yt=H[Mt],{object:Ft,geometry:vn,material:He,group:rn}=Yt;if(He.side===Ua&&Ft.layers.test(re.layers)){const wt=He.side;He.side=ti,He.needsUpdate=!0,Rl(Ft,de,re,vn,He,rn),He.side=wt,He.needsUpdate=!0,Ye=!0}}Ye===!0&&(me.updateMultisampleRenderTarget(Fe),me.updateRenderTargetMipmap(Fe))}F.setRenderTarget(Oe,Ke,je),F.setClearColor(B,ge),ct!==void 0&&(re.viewport=ct),F.toneMapping=st}function ki(T,H,de){const re=H.isScene===!0?H.overrideMaterial:null;for(let se=0,Fe=T.length;se<Fe;se++){const qe=T[se],{object:Oe,geometry:Ke,group:je}=qe;let st=qe.material;st.allowOverride===!0&&re!==null&&(st=re),Oe.layers.test(de.layers)&&Rl(Oe,H,de,Ke,st,je)}}function Rl(T,H,de,re,se,Fe){ee!==null&&se.isNodeMaterial&&ee.setObject(T,se),T.onBeforeRender(F,H,de,re,se,Fe),T.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),se.onBeforeRender(F,H,de,re,T,Fe),se.transparent===!0&&se.side===Ua&&se.forceSinglePass===!1?(se.side=ti,se.needsUpdate=!0,F.renderBufferDirect(de,H,re,se,T,Fe),se.side=Zr,se.needsUpdate=!0,F.renderBufferDirect(de,H,re,se,T,Fe),se.side=Ua):F.renderBufferDirect(de,H,re,se,T,Fe),T.onAfterRender(F,H,de,re,se,Fe)}function Sr(T,H,de){H.isScene!==!0&&(H=dn);const re=le.get(T),se=U.state.lights,Fe=U.state.shadowsArray,qe=se.state.version,Oe=De.getParameters(T,se.state,Fe,H,de,U.state.lightProbeGridArray),Ke=De.getProgramCacheKey(Oe);let je=re.programs;re.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,re.fog=H.fog;const st=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;re.envMap=Ae.get(T.envMap||re.environment,st),re.envMapRotation=re.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,je===void 0&&(T.addEventListener("dispose",pi),je=new Map,re.programs=je);let ct=je.get(Ke);if(ct!==void 0){if(re.currentProgram===ct&&re.lightsStateVersion===qe)return ho(T,Oe),ct}else Oe.uniforms=De.getUniforms(T),ee!==null&&T.isNodeMaterial&&ee.build(T,de,Oe),T.onBeforeCompile(Oe,F),ct=De.acquireProgram(Oe,Ke),je.set(Ke,ct),re.uniforms=Oe.uniforms;const Ye=re.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=We.uniform),ho(T,Oe),re.needsLights=wl(T),re.lightsStateVersion=qe,re.needsLights&&(Ye.ambientLightColor.value=se.state.ambient,Ye.lightProbe.value=se.state.probe,Ye.sunLights.value=se.state.sun,Ye.sunLightShadows.value=se.state.sunShadow,Ye.directionalLights.value=se.state.directional,Ye.directionalLightShadows.value=se.state.directionalShadow,Ye.spotLights.value=se.state.spot,Ye.spotLightShadows.value=se.state.spotShadow,Ye.rectAreaLights.value=se.state.rectArea,Ye.ltc_1.value=se.state.rectAreaLTC1,Ye.ltc_2.value=se.state.rectAreaLTC2,Ye.pointLights.value=se.state.point,Ye.pointLightShadows.value=se.state.pointShadow,Ye.hemisphereLights.value=se.state.hemi,Ye.sunShadowMatrix.value=se.state.sunShadowMatrix,Ye.sunShadowCascade.value=se.state.sunShadowCascade,Ye.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ye.spotLightMatrix.value=se.state.spotLightMatrix,Ye.spotLightMap.value=se.state.spotLightMap,Ye.pointShadowMatrix.value=se.state.pointShadowMatrix),re.lightProbeGrid=U.state.lightProbeGridArray.length>0,re.currentProgram=ct,re.uniformsList=null,ct}function fo(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=Ac.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function ho(T,H){const de=le.get(T);de.outputColorSpace=H.outputColorSpace,de.batching=H.batching,de.batchingColor=H.batchingColor,de.instancing=H.instancing,de.instancingColor=H.instancingColor,de.instancingMorph=H.instancingMorph,de.skinning=H.skinning,de.morphTargets=H.morphTargets,de.morphNormals=H.morphNormals,de.morphColors=H.morphColors,de.morphTargetsCount=H.morphTargetsCount,de.numClippingPlanes=H.numClippingPlanes,de.numIntersection=H.numClipIntersection,de.vertexAlphas=H.vertexAlphas,de.vertexTangents=H.vertexTangents,de.toneMapping=H.toneMapping}function po(T,H){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;C.setFromMatrixPosition(H.matrixWorld);for(let de=0,re=T.length;de<re;de++){const se=T[de];if(se.texture!==null&&se.boundingBox.containsPoint(C))return se}return null}function mo(T,H,de,re,se){H.isScene!==!0&&(H=dn),me.resetTextureUnits();const Fe=H.fog,qe=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?H.environment:null,Oe=he===null?F.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Nt.workingColorSpace,Ke=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,je=Ae.get(re.envMap||qe,Ke),st=re.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,ct=!!de.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ye=!!de.morphAttributes.position,Mt=!!de.morphAttributes.normal,vt=!!de.morphAttributes.color;let Yt=oa;re.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Yt=F.toneMapping);const Ft=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,vn=Ft!==void 0?Ft.length:0,He=le.get(re),rn=U.state.lights;if(_t===!0&&(yt===!0||T!==ue)){const Tt=T===ue&&re.id===K;We.setState(re,T,Tt)}let wt=!1;re.version===He.__version?(He.needsLights&&He.lightsStateVersion!==rn.state.version||He.outputColorSpace!==Oe||se.isBatchedMesh&&He.batching===!1||!se.isBatchedMesh&&He.batching===!0||se.isBatchedMesh&&He.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&He.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&He.instancing===!1||!se.isInstancedMesh&&He.instancing===!0||se.isSkinnedMesh&&He.skinning===!1||!se.isSkinnedMesh&&He.skinning===!0||se.isInstancedMesh&&He.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&He.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&He.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&He.instancingMorph===!1&&se.morphTexture!==null||He.envMap!==je||re.fog===!0&&He.fog!==Fe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==We.numPlanes||He.numIntersection!==We.numIntersection)||He.vertexAlphas!==st||He.vertexTangents!==ct||He.morphTargets!==Ye||He.morphNormals!==Mt||He.morphColors!==vt||He.toneMapping!==Yt||He.morphTargetsCount!==vn||!!He.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,He.__version=re.version);let Hn=He.currentProgram;wt===!0&&(Hn=Sr(re,H,se),ee&&re.isNodeMaterial&&ee.onUpdateProgram(re,Hn,He));let ii=!1,Xi=!1,xt=!1;const zt=Hn.getUniforms(),jt=He.uniforms;if(M.useProgram(Hn.program)&&(ii=!0,Xi=!0,xt=!0),re.id!==K&&(K=re.id,Xi=!0),He.needsLights){const Tt=po(U.state.lightProbeGridArray,se);He.lightProbeGrid!==Tt&&(He.lightProbeGrid=Tt,Xi=!0)}if(ii||ue!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),zt.setValue(W,"projectionMatrix",T.projectionMatrix),zt.setValue(W,"viewMatrix",T.matrixWorldInverse);const sn=zt.map.cameraPosition;sn!==void 0&&sn.setValue(W,it.setFromMatrixPosition(T.matrixWorld)),O.logarithmicDepthBuffer&&zt.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&zt.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),ue!==T&&(ue=T,Xi=!0,xt=!0)}if(He.needsLights&&(rn.state.sunShadowMap.length>0&&zt.setValue(W,"sunShadowMap",rn.state.sunShadowMap,me),rn.state.directionalShadowMap.length>0&&zt.setValue(W,"directionalShadowMap",rn.state.directionalShadowMap,me),rn.state.spotShadowMap.length>0&&zt.setValue(W,"spotShadowMap",rn.state.spotShadowMap,me),rn.state.pointShadowMap.length>0&&zt.setValue(W,"pointShadowMap",rn.state.pointShadowMap,me)),se.isSkinnedMesh){zt.setOptional(W,se,"bindMatrix"),zt.setOptional(W,se,"bindMatrixInverse");const Tt=se.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),zt.setValue(W,"boneTexture",Tt.boneTexture,me))}se.isBatchedMesh&&(zt.setOptional(W,se,"batchingTexture"),zt.setValue(W,"batchingTexture",se._matricesTexture,me),zt.setOptional(W,se,"batchingIdTexture"),zt.setValue(W,"batchingIdTexture",se._indirectTexture,me),zt.setOptional(W,se,"batchingColorTexture"),se._colorsTexture!==null&&zt.setValue(W,"batchingColorTexture",se._colorsTexture,me));const ai=de.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&X.update(se,de,Hn),(Xi||He.receiveShadow!==se.receiveShadow)&&(He.receiveShadow=se.receiveShadow,zt.setValue(W,"receiveShadow",se.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&H.environment!==null&&(jt.envMapIntensity.value=H.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=AR()),Xi){if(zt.setValue(W,"toneMappingExposure",F.toneMappingExposure),He.needsLights&&Cl(jt,xt),Fe&&re.fog===!0&&$e.refreshFogUniforms(jt,Fe),$e.refreshMaterialUniforms(jt,re,pe,j,U.state.transmissionRenderTarget[T.id]),He.needsLights&&He.lightProbeGrid){const Tt=He.lightProbeGrid;jt.probesSH.value=Tt.texture,jt.probesMin.value.copy(Tt.boundingBox.min),jt.probesMax.value.copy(Tt.boundingBox.max),jt.probesResolution.value.copy(Tt.resolution)}Ac.upload(W,fo(He),jt,me)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ac.upload(W,fo(He),jt,me),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&zt.setValue(W,"center",se.center),zt.setValue(W,"modelViewMatrix",se.modelViewMatrix),zt.setValue(W,"normalMatrix",se.normalMatrix),zt.setValue(W,"modelMatrix",se.matrixWorld),re.uniformsGroups!==void 0){const Tt=re.uniformsGroups;for(let sn=0,ha=Tt.length;sn<ha;sn++){const Nl=Tt[sn];be.update(Nl,Hn),be.bind(Nl,Hn)}}return Hn}function Cl(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.sunLights.needsUpdate=H,T.sunLightShadows.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function wl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(T,H,de){const re=le.get(T);re.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),le.get(T.texture).__webglTexture=H,le.get(T.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:de,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const de=le.get(T);de.__webglFramebuffer=H,de.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,de=0){he=T,q=H,Y=de;let re=null,se=!1,Fe=!1;if(T){const Oe=le.get(T);if(Oe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(W.FRAMEBUFFER,Oe.__webglFramebuffer),xe.copy(T.viewport),Ce.copy(T.scissor),Xe=T.scissorTest,M.viewport(xe),M.scissor(Ce),M.setScissorTest(Xe),K=-1;return}else if(Oe.__webglFramebuffer===void 0)me.setupRenderTarget(T);else if(Oe.__hasExternalTextures)me.rebindTextures(T,le.get(T.texture).__webglTexture,le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const st=T.depthTexture;if(Oe.__boundDepthTexture!==st){if(st!==null&&le.has(st)&&(T.width!==st.image.width||T.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(T)}}const Ke=T.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Fe=!0);const je=le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(je[H])?re=je[H][de]:re=je[H],se=!0):T.samples>0&&me.useMultisampledRTT(T)===!1?re=le.get(T).__webglMultisampledFramebuffer:Array.isArray(je)?re=je[de]:re=je,xe.copy(T.viewport),Ce.copy(T.scissor),Xe=T.scissorTest}else xe.copy(ve).multiplyScalar(pe).floor(),Ce.copy(we).multiplyScalar(pe).floor(),Xe=Gt;if(de!==0&&(re=fe),M.bindFramebuffer(W.FRAMEBUFFER,re)&&M.drawBuffers(T,re),M.viewport(xe),M.scissor(Ce),M.setScissorTest(Xe),se){const Oe=le.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe.__webglTexture,de)}else if(Fe){const Oe=H;for(let Ke=0;Ke<T.textures.length;Ke++){const je=le.get(T.textures[Ke]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ke,je.__webglTexture,de,Oe)}}else if(T!==null&&de!==0){const Oe=le.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Oe.__webglTexture,de)}K=-1};function mi(T){const H=le.get(T);return(H.__readFormat!==T.format||H.__readType!==T.type)&&(H.__readFormat=T.format,H.__readType=T.type,H.__formatReadable=O.textureFormatReadable(T.format),H.__typeReadable=O.textureTypeReadable(T.type)),H}this.readRenderTargetPixels=function(T,H,de,re,se,Fe,qe,Oe=0){if(!(T&&T.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&qe!==void 0&&(Ke=Ke[qe]),Ke){M.bindFramebuffer(W.FRAMEBUFFER,Ke);try{const je=T.textures[Oe],st=je.format,ct=je.type;T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Oe);const Ye=mi(je);if(Ye.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-re&&de>=0&&de<=T.height-se&&W.readPixels(H,de,re,se,Le.convert(st),Le.convert(ct),Fe)}finally{const je=he!==null?le.get(he).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(T,H,de,re,se,Fe,qe,Oe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&qe!==void 0&&(Ke=Ke[qe]),Ke)if(H>=0&&H<=T.width-re&&de>=0&&de<=T.height-se){M.bindFramebuffer(W.FRAMEBUFFER,Ke);const je=T.textures[Oe],st=je.format,ct=je.type;T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Oe);const Ye=mi(je);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Mt),W.bufferData(W.PIXEL_PACK_BUFFER,Fe.byteLength,W.STREAM_READ),W.readPixels(H,de,re,se,Le.convert(st),Le.convert(ct),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const vt=he!==null?le.get(he).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,vt);const Yt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await kE(W,Yt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Mt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Fe),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Mt),W.deleteSync(Yt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,de=0){const re=Math.pow(2,-de),se=Math.floor(T.image.width*re),Fe=Math.floor(T.image.height*re),qe=H!==null?H.x:0,Oe=H!==null?H.y:0;me.setTexture2D(T,0),W.copyTexSubImage2D(W.TEXTURE_2D,de,0,0,qe,Oe,se,Fe),M.unbindTexture()},this.copyTextureToTexture=function(T,H,de=null,re=null,se=0,Fe=0){let qe,Oe,Ke,je,st,ct,Ye,Mt,vt;const Yt=T.isCompressedTexture?T.mipmaps[Fe]:T.image;if(de!==null)qe=de.max.x-de.min.x,Oe=de.max.y-de.min.y,Ke=de.isBox3?de.max.z-de.min.z:1,je=de.min.x,st=de.min.y,ct=de.isBox3?de.min.z:0;else{const jt=Math.pow(2,-se);qe=Math.floor(Yt.width*jt),Oe=Math.floor(Yt.height*jt),T.isDataArrayTexture?Ke=Yt.depth:T.isData3DTexture?Ke=Math.floor(Yt.depth*jt):Ke=1,je=0,st=0,ct=0}re!==null?(Ye=re.x,Mt=re.y,vt=re.z):(Ye=0,Mt=0,vt=0);const Ft=Le.convert(H.format),vn=Le.convert(H.type);let He;H.isData3DTexture?(me.setTexture3D(H,0),He=W.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(me.setTexture2DArray(H,0),He=W.TEXTURE_2D_ARRAY):(me.setTexture2D(H,0),He=W.TEXTURE_2D),M.activeTexture(W.TEXTURE0),M.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(W.UNPACK_ALIGNMENT,H.unpackAlignment);const rn=M.getParameter(W.UNPACK_ROW_LENGTH),wt=M.getParameter(W.UNPACK_IMAGE_HEIGHT),Hn=M.getParameter(W.UNPACK_SKIP_PIXELS),ii=M.getParameter(W.UNPACK_SKIP_ROWS),Xi=M.getParameter(W.UNPACK_SKIP_IMAGES);M.pixelStorei(W.UNPACK_ROW_LENGTH,Yt.width),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Yt.height),M.pixelStorei(W.UNPACK_SKIP_PIXELS,je),M.pixelStorei(W.UNPACK_SKIP_ROWS,st),M.pixelStorei(W.UNPACK_SKIP_IMAGES,ct);const xt=T.isDataArrayTexture||T.isData3DTexture,zt=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const jt=le.get(T),ai=le.get(H),Tt=le.get(jt.__renderTarget),sn=le.get(ai.__renderTarget);M.bindFramebuffer(W.READ_FRAMEBUFFER,Tt.__webglFramebuffer),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let ha=0;ha<Ke;ha++)xt&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,le.get(T).__webglTexture,se,ct+ha),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,le.get(H).__webglTexture,Fe,vt+ha)),W.blitFramebuffer(je,st,qe,Oe,Ye,Mt,qe,Oe,W.DEPTH_BUFFER_BIT,W.NEAREST);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(se!==0||T.isRenderTargetTexture||le.has(T)){const jt=le.get(T),ai=le.get(H);M.bindFramebuffer(W.READ_FRAMEBUFFER,J),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,ne);for(let Tt=0;Tt<Ke;Tt++)xt?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,jt.__webglTexture,se,ct+Tt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,jt.__webglTexture,se),zt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ai.__webglTexture,Fe,vt+Tt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ai.__webglTexture,Fe),se!==0?W.blitFramebuffer(je,st,qe,Oe,Ye,Mt,qe,Oe,W.COLOR_BUFFER_BIT,W.NEAREST):zt?W.copyTexSubImage3D(He,Fe,Ye,Mt,vt+Tt,je,st,qe,Oe):W.copyTexSubImage2D(He,Fe,Ye,Mt,je,st,qe,Oe);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else zt?T.isDataTexture||T.isData3DTexture?W.texSubImage3D(He,Fe,Ye,Mt,vt,qe,Oe,Ke,Ft,vn,Yt.data):H.isCompressedArrayTexture?W.compressedTexSubImage3D(He,Fe,Ye,Mt,vt,qe,Oe,Ke,Ft,Yt.data):W.texSubImage3D(He,Fe,Ye,Mt,vt,qe,Oe,Ke,Ft,vn,Yt):T.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Fe,Ye,Mt,qe,Oe,Ft,vn,Yt.data):T.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Fe,Ye,Mt,Yt.width,Yt.height,Ft,Yt.data):W.texSubImage2D(W.TEXTURE_2D,Fe,Ye,Mt,qe,Oe,Ft,vn,Yt);M.pixelStorei(W.UNPACK_ROW_LENGTH,rn),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,wt),M.pixelStorei(W.UNPACK_SKIP_PIXELS,Hn),M.pixelStorei(W.UNPACK_SKIP_ROWS,ii),M.pixelStorei(W.UNPACK_SKIP_IMAGES,Xi),Fe===0&&H.generateMipmaps&&W.generateMipmap(He),M.unbindTexture()},this.initRenderTarget=function(T){le.get(T).__webglFramebuffer===void 0&&me.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?me.setTextureCube(T,0):T.isData3DTexture?me.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?me.setTexture2DArray(T,0):me.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){q=0,Y=0,he=null,M.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Nt._getUnpackColorSpace()}}function CR(){const o=ei.useRef(null);return ei.useEffect(()=>{const t=o.current;if(!t)return;const i=new rb;i.fog=new em(856343,.0012);const s=new Ri(60,window.innerWidth/window.innerHeight,.1,1e3);s.position.z=400;const u=new RR({alpha:!0,antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(u.domElement);const f=180,d=new Yn,h=new Float32Array(f*3),m=new Float32Array(f*3),p=[new gt("#c084fc"),new gt("#38bdf8"),new gt("#f472b6"),new gt("#a855f7"),new gt("#818cf8")];for(let K=0;K<f;K++){h[K*3]=(Math.random()-.5)*1100,h[K*3+1]=(Math.random()-.5)*900,h[K*3+2]=(Math.random()-.5)*700;const ue=p[Math.floor(Math.random()*p.length)];m[K*3]=ue.r,m[K*3+1]=ue.g,m[K*3+2]=ue.b}d.setAttribute("position",new wi(h,3)),d.setAttribute("color",new wi(m,3));const x=document.createElement("canvas");x.width=32,x.height=32;const v=x.getContext("2d"),_=v.createRadialGradient(16,16,0,16,16,16);_.addColorStop(0,"rgba(255, 255, 255, 1)"),_.addColorStop(.3,"rgba(192, 132, 252, 0.85)"),_.addColorStop(1,"rgba(13, 17, 23, 0)"),v.fillStyle=_,v.beginPath(),v.arc(16,16,16,0,Math.PI*2),v.fill();const E=new _b(x),R=new eS({size:14,vertexColors:!0,map:E,transparent:!0,blending:eo,depthWrite:!1}),w=new gb(d,R);i.add(w);const y=new wb(1400,44,11032055,3718648);y.position.y=-240,y.position.z=-120,y.rotation.x=.25,y.material&&(y.material.transparent=!0,y.material.opacity=.38,y.material.blending=eo),i.add(y);const S=new ml,N=[],z=[new am(15,0),new rm(18,0),new sm(14,0)];for(let K=0;K<14;K++){const ue=z[K%z.length],xe=new nm({color:p[K%p.length],wireframe:!0,transparent:!0,opacity:.5,blending:eo}),Ce=new ca(ue,xe);Ce.position.set((Math.random()-.5)*900,(Math.random()-.5)*600,(Math.random()-.5)*500),Ce.userData={rotSpeedX:(Math.random()-.5)*.018,rotSpeedY:(Math.random()-.5)*.018,floatSpeed:Math.random()*.012+.006,initialY:Ce.position.y},N.push(Ce),S.add(Ce)}i.add(S);const C=new im({color:8490232,transparent:!0,opacity:.22,blending:eo}),D=new Yn,U=120,P=new Float32Array(U*6);D.setAttribute("position",new wi(P,3));const b=new $x(D,C);i.add(b);let L=0,F=0,k=0,ee=0;const fe=K=>{k=(K.clientX-window.innerWidth/2)*.18,ee=(K.clientY-window.innerHeight/2)*.18},J=K=>{K.touches&&K.touches[0]&&(k=(K.touches[0].clientX-window.innerWidth/2)*.18,ee=(K.touches[0].clientY-window.innerHeight/2)*.18)},ne=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",fe,{passive:!0}),window.addEventListener("touchmove",J,{passive:!0}),window.addEventListener("resize",ne);let q;const Y=new Cb,he=()=>{const K=Y.getElapsedTime();L+=(k-L)*.04,F+=(ee-F)*.04,s.position.x=L*.6,s.position.y=-F*.6,s.lookAt(i.position),w.rotation.y=K*.035,w.rotation.x=Math.sin(K*.02)*.06,y.position.z=K*45%32-120,N.forEach(Ce=>{Ce.rotation.x+=Ce.userData.rotSpeedX,Ce.rotation.y+=Ce.userData.rotSpeedY,Ce.position.y=Ce.userData.initialY+Math.sin(K*2+Ce.position.x)*18});let ue=0;const xe=D.attributes.position.array;for(let Ce=0;Ce<N.length&&ue<U;Ce++)for(let Xe=Ce+1;Xe<N.length&&ue<U;Xe++)N[Ce].position.distanceTo(N[Xe].position)<280&&(xe[ue*6]=N[Ce].position.x,xe[ue*6+1]=N[Ce].position.y,xe[ue*6+2]=N[Ce].position.z,xe[ue*6+3]=N[Xe].position.x,xe[ue*6+4]=N[Xe].position.y,xe[ue*6+5]=N[Xe].position.z,ue++);D.setDrawRange(0,ue*2),D.attributes.position.needsUpdate=!0,u.render(i,s),q=requestAnimationFrame(he)};return he(),()=>{window.removeEventListener("mousemove",fe),window.removeEventListener("touchmove",J),window.removeEventListener("resize",ne),cancelAnimationFrame(q),t&&u.domElement&&t.removeChild(u.domElement),d.dispose(),R.dispose(),E.dispose(),y.geometry.dispose(),D.dispose(),C.dispose(),z.forEach(K=>K.dispose()),N.forEach(K=>K.material.dispose()),u.dispose()}},[]),V.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0d1117]",children:[V.jsx("div",{ref:o,className:"absolute inset-0 pointer-events-none z-0 opacity-95"}),V.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#0d1117]/20 via-transparent to-[#0d1117]/50 pointer-events-none"})]})}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pS=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=ei.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:d,...h},m)=>ei.createElement("svg",{ref:m,...NR,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:pS("lucide",u),...h},[...d.map(([p,x])=>ei.createElement(p,x)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=(o,t)=>{const i=ei.forwardRef(({className:s,...u},f)=>ei.createElement(DR,{ref:f,iconNode:t,className:pS(`lucide-${wR(o)}`,s),...u}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],LR=Ln("Bot",UR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],PR=Ln("Briefcase",OR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],zR=Ln("Building2",IR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],FR=Ln("Check",BR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],GR=Ln("ChevronDown",HR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Rc=Ln("CircleCheck",VR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Vp=Ln("Download",kR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ic=Ln("Globe",XR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],qR=Ln("GraduationCap",WR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],ZR=Ln("Menu",YR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],jR=Ln("MessageSquare",KR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],Tx=Ln("QrCode",QR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mS=Ln("ShieldCheck",JR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],e2=Ln("Smartphone",$R);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Ax=Ln("Sparkles",t2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]],i2=Ln("Tv",n2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],r2=Ln("X",a2),$t={appName:"Klyvo",tagline:"College se Corporate tak. 🚀",subTaglineMain:"Memes, communities, careers, jobs aur corporate life — sab ek jagah.",subTaglineSub:"India’s #1 Anti-Corporate & Campus Network.",creator:"Kush Mittal",version:"v2.4.0",apkSize:"18.5 MB",appIcon:"/app_icon.jpg",deployment:{webAppUrl:"http://localhost:5173"},features:[{id:"campus-community",iconName:"GraduationCap",title:"College & Campus Communities",shortDesc:"Verified student spaces for IIT, NIT, DU, NIFT & major Indian colleges to share campus news, memes & experiences."},{id:"corporate-translator",iconName:"Sparkles",title:"Corporate BS Translator & Rant Generator",shortDesc:'Instantly decode confusing corporate jargon like "Let’s take this offline" and generate anti-corporate confessions.'},{id:"messaging-chat",iconName:"MessageSquare",title:"Direct Messaging & Color Chat",shortDesc:"Real-time DMs with custom color themes, status updates, read receipts, and direct peer networking."},{id:"reels-memes",iconName:"Tv",title:"Workplace Memes & Short Reels",shortDesc:"Trending corporate meme feeds, appraisal jokes, manager banter, and viral campus video reels."},{id:"jobs-salaries",iconName:"Briefcase",title:"1-Click Job Apply & Salary Insights",shortDesc:"Explore verified job openings, anonymous salary benchmarks, company reviews, and interview prep."},{id:"ai-career",iconName:"Bot",title:"AI STAR Mock Interviews & Resume Scanner",shortDesc:"Practice mock technical & HR interviews with AI, analyze ATS resume scores, and receive instant career coaching."}],subscriptionTiers:[{tier:"TIER 1",name:"Free Starter",price:"₹0",duration:"Forever",subtitle:"Essential community & job apply tools",badge:null,isPopular:!1,included:["Home Feed & Memes","College Communities","1-Click Job Apply"],notIncluded:["AI STAR Mock Interviews","Full ATS Resume Scanner","AI Studio & Dashboards","Recruiter HR Suite"],cta:"Active Plan",ctaClass:"bg-purple-900 hover:bg-purple-800 text-white font-bold border border-purple-500/50"},{tier:"TIER 2",name:"Friendly AI Pro 💫",price:"₹249",duration:"3 Months",subtitle:"Unlimited mock practice & resume scanning",badge:"INTERVIEW PREP 🎯",badgeClass:"bg-purple-950 text-purple-200 border-purple-700",isPopular:!1,included:["Everything in Free Starter","Unlimited AI Mock Interviews","Full ATS Resume Scanner"],notIncluded:["AI Career & Salary Dashboard","AI Studio & Meme Creator","Recruiter HR Suite"],cta:"Start AI Pro (₹249)",ctaClass:"bg-purple-900 hover:bg-purple-800 text-white font-bold border border-purple-500/50"},{tier:"TIER 3",name:"AI Premium 👑",price:"₹449",duration:"6 Months",subtitle:"Career intelligence & complete AI content suite",badge:"MOST POPULAR 🔥",badgeClass:"bg-purple-600 text-white font-black border-purple-400",isPopular:!0,included:["Everything in Friendly AI Pro","AI Career Dashboard","Salary Dashboard","AI Studio & Meme Creator","Recruiter Pro Analytics"],notIncluded:["Verified HR Recruiter Badge","Featured Job Listings"],cta:"Get AI Premium (₹449)",ctaClass:"bg-purple-900 hover:bg-purple-800 text-white font-bold border border-purple-500/50"},{tier:"TIER 4",name:"Recruiter 🪪",price:"₹799",duration:"1 Year",subtitle:"Full candidate sourcing & hiring verification",badge:"HIRING & HR 💼",badgeClass:"bg-purple-950 text-purple-300 border-purple-700",isPopular:!1,included:["Everything in AI Premium","Featured Job Listings","AI Candidate Matcher","Verified HR Recruiter Badge","Founder Direct VIP Support"],notIncluded:[],cta:"Become a Recruiter (₹799)",ctaClass:"bg-purple-900 hover:bg-purple-800 text-white font-bold border border-purple-500/50"}],faqs:[{question:"Klyvo App kya hai aur yeh kiske liye hai?",answer:"Klyvo India ka #1 Anti-Corporate aur Campus Network hai. Yeh college students, freshers aur working professionals ke liye hai jahan memes, communities, job applications, salary insights aur corporate life sab ek jagah milta hai."},{question:"Klyvo me Premium Subscriptions kaise kaam karte hain?",answer:"Klyvo me 4 tiers hain: Free Starter (₹0), Friendly AI Pro (₹249/3 Mo), AI Premium (₹449/6 Mo), aur Recruiter (₹799/1 Yr). Payment Direct PhonePe & UPI se Founder Kush Mittal ko hoti hai aur sabhi AI/Recruiter features instantly unlock ho jaate hain."},{question:"App me account kaise banaye ya log in kaise karein?",answer:"Klyvo me log in karna super simple hai. Aap direct apne kisi bhi Gmail / Google ID se 1-click me log in kar sakte hain. Aapka past profile aur posts automatically restore ho jaate hain."},{question:"Kya Klyvo par anonymous post ya rant kar sakte hain?",answer:"Haan! Klyvo me Anonymous Confessions aur Corporate Rant Generator built-in hai, jahan aap bina kisi fear ke campus ya corporate life ke baare me post kar sakte hain."},{question:"Klyvo Android APK ya Web Browser par kaise chalayein?",answer:'Aap is website se direct Android APK download kar sakte hain, ya "Launch Web App" button par click karke Chrome, Edge, Safari browser me bina install kiye direct chala sakte hain.'}]};function s2({onLaunchWebApp:o,onDownloadApk:t}){const[i,s]=ei.useState(!1),[u,f]=ei.useState("home"),d=[{id:"home",label:"Home"},{id:"features",label:"App Features"},{id:"details",label:"App Details"},{id:"download",label:"App Download"},{id:"faq",label:"FAQ"}];ei.useEffect(()=>{let m=!1;const p=()=>{m||(window.requestAnimationFrame(()=>{const x=window.scrollY+140;for(let v=d.length-1;v>=0;v--){const _=d[v].id,E=document.getElementById(_);if(E){const R=E.offsetTop;if(x>=R){f(_);break}}}m=!1}),m=!0)};return window.addEventListener("scroll",p,{passive:!0}),p(),()=>window.removeEventListener("scroll",p)},[]);const h=m=>{f(m),s(!1);const p=document.getElementById(m);if(p){const v=window.innerHeight-80,_=p.getBoundingClientRect(),E=_.height,R=window.scrollY+_.top-80-Math.max(0,(v-E)/2);window.scrollTo({top:Math.max(0,R),behavior:"smooth"})}};return V.jsxs("header",{className:"sticky top-0 z-50 bg-transparent text-white",children:[V.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:V.jsxs("div",{className:"flex items-center justify-between h-20",children:[V.jsxs("div",{onClick:()=>h("home"),className:"flex items-center gap-3 cursor-pointer group",children:[V.jsx("img",{src:$t.appIcon,alt:"Klyvo Icon",className:"w-10 h-10 rounded-2xl object-cover border border-purple-500/50 transition-transform duration-300 group-hover:scale-105"}),V.jsxs("div",{children:[V.jsxs("div",{className:"flex items-center gap-2",children:[V.jsx("span",{className:"font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-white inline-block pb-1 pt-0.5 leading-normal overflow-visible",children:$t.appName}),V.jsx("span",{className:"text-[10px] bg-purple-950/90 text-purple-300 border border-purple-800/80 px-2.5 py-0.5 rounded-full font-bold tracking-wider transition-transform duration-300 hover:scale-105 inline-block",children:"Official Website"})]}),V.jsxs("p",{className:"text-[11px] text-purple-300/80 font-medium tracking-wide",children:["by ",V.jsx("span",{className:"text-white font-bold",children:$t.creator})," ✨"]})]})]}),V.jsx("nav",{className:"hidden md:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider",children:d.map(m=>{const p=u===m.id;return V.jsx("button",{onClick:()=>h(m.id),className:`px-3.5 py-1.5 rounded-full transition-all duration-300 hover:scale-105 inline-block ${p?"bg-purple-950/90 text-white font-black":"text-purple-300/70 hover:text-white hover:bg-purple-950/40"}`,children:m.label},m.id)})}),V.jsxs("div",{className:"hidden sm:flex items-center gap-3",children:[V.jsxs("button",{onClick:o,className:"px-4 py-2 rounded-xl text-xs font-bold bg-black hover:bg-purple-950 text-purple-200 border border-purple-800/60 transition-transform duration-300 hover:scale-105 flex items-center gap-1.5",children:[V.jsx(Ic,{className:"w-3.5 h-3.5 text-purple-400"}),V.jsx("span",{children:"Launch Web App"})]}),V.jsxs("button",{onClick:t,className:"px-4 py-2 rounded-xl text-xs font-black bg-purple-600 hover:bg-purple-500 text-white transition-transform duration-300 hover:scale-105 flex items-center gap-1.5 border border-purple-400",children:[V.jsx(Vp,{className:"w-3.5 h-3.5"}),V.jsx("span",{children:"Download APK"})]})]}),V.jsx("div",{className:"flex md:hidden items-center",children:V.jsx("button",{onClick:()=>s(!i),className:"p-2 rounded-xl bg-purple-950 text-purple-200 border border-purple-800 transition-transform duration-300 hover:scale-105",children:i?V.jsx(r2,{className:"w-6 h-6"}):V.jsx(ZR,{className:"w-6 h-6"})})})]})}),i&&V.jsxs("div",{className:"md:hidden bg-[#0d1117]/95 px-4 pt-3 pb-6 space-y-3",children:[V.jsx("div",{className:"flex flex-col gap-2 font-semibold text-sm text-purple-200",children:d.map(m=>{const p=u===m.id;return V.jsx("button",{onClick:()=>h(m.id),className:`text-left py-2 px-3.5 rounded-xl transition-all duration-300 hover:scale-105 ${p?"bg-purple-950/90 text-white font-black":"text-purple-200/80 hover:bg-purple-950/40"}`,children:m.label},m.id)})}),V.jsxs("div",{className:"pt-2 flex flex-col gap-2",children:[V.jsxs("button",{onClick:()=>{s(!1),t()},className:"w-full py-2.5 rounded-xl text-xs font-black bg-purple-600 text-white flex items-center justify-center gap-1.5 border border-purple-400 transition-transform duration-300 hover:scale-105",children:[V.jsx(Vp,{className:"w-4 h-4"})," Direct APK Download"]}),V.jsxs("button",{onClick:()=>{s(!1),o()},className:"w-full py-2.5 rounded-xl text-xs font-bold bg-black text-purple-200 border border-purple-800 flex items-center justify-center gap-1.5 transition-transform duration-300 hover:scale-105",children:[V.jsx(Ic,{className:"w-4 h-4 text-purple-400"})," Launch Web App"]})]})]})]})}function o2(){return V.jsx("section",{id:"home",className:"relative min-h-[calc(100vh-80px)] scroll-mt-20 snap-start flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8",children:V.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 my-auto",children:[V.jsxs("div",{className:"flex flex-col items-center justify-center space-y-3 sm:space-y-4",children:[V.jsx("div",{className:"relative",children:V.jsx("img",{src:$t.appIcon,alt:"Klyvo Official Icon",className:"w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover border-2 border-purple-500/60 transition-transform duration-300 hover:scale-105 cursor-pointer"})}),V.jsxs("div",{className:"space-y-2",children:[V.jsx("span",{className:"font-black text-5xl sm:text-7xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-white font-sans inline-block pb-3 pt-1 px-2 leading-normal overflow-visible transition-transform duration-300 hover:scale-105 cursor-default",children:$t.appName}),V.jsx("h1",{className:"text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight",children:$t.tagline})]}),V.jsxs("div",{className:"space-y-1.5 max-w-2xl mx-auto",children:[V.jsx("p",{className:"text-sm sm:text-lg text-purple-200/90 leading-relaxed font-medium",children:$t.subTaglineMain}),V.jsx("p",{className:"text-xs sm:text-sm text-purple-300 font-bold tracking-wide",children:$t.subTaglineSub})]})]}),V.jsxs("div",{className:"pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-purple-200 font-medium",children:[V.jsxs("span",{className:"flex items-center gap-1.5 bg-purple-950/60 border-2 border-purple-800/60 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer",children:[V.jsx(Rc,{className:"w-4 h-4 text-purple-400"})," 100% Free & No Ads"]}),V.jsxs("span",{className:"flex items-center gap-1.5 bg-purple-950/60 border-2 border-purple-800/60 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer",children:[V.jsx(mS,{className:"w-4 h-4 text-purple-400"})," Anonymous Confessions"]}),V.jsxs("span",{className:"flex items-center gap-1.5 bg-purple-950/60 border-2 border-purple-800/60 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer",children:[V.jsx(zR,{className:"w-4 h-4 text-purple-400"})," Verified Colleges & Companies"]})]})]})})}function l2(){const o=t=>{switch(t){case"GraduationCap":return V.jsx(qR,{className:"w-6 h-6 text-purple-400"});case"Sparkles":return V.jsx(Ax,{className:"w-6 h-6 text-purple-300"});case"MessageSquare":return V.jsx(jR,{className:"w-6 h-6 text-purple-400"});case"Tv":return V.jsx(i2,{className:"w-6 h-6 text-purple-300"});case"Briefcase":return V.jsx(PR,{className:"w-6 h-6 text-purple-400"});case"Bot":return V.jsx(LR,{className:"w-6 h-6 text-purple-300"});default:return V.jsx(Ax,{className:"w-6 h-6 text-purple-400"})}};return V.jsx("section",{id:"features",className:"relative min-h-[calc(100vh-80px)] scroll-mt-20 snap-start flex flex-col justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent",children:V.jsxs("div",{className:"max-w-7xl mx-auto space-y-8 sm:space-y-12 my-auto w-full",children:[V.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-3",children:[V.jsx("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight",children:"App Features"}),V.jsx("p",{className:"text-sm sm:text-base text-purple-200/90 max-w-xl mx-auto leading-relaxed",children:"Features built directly into Klyvo to empower students and working professionals."})]}),V.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:$t.features.map(t=>V.jsxs("div",{className:"bg-[#0d1117] border-2 border-purple-900/60 hover:border-purple-300 hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] rounded-3xl p-6 sm:p-7 space-y-4 transition-all duration-300 hover:scale-105 flex flex-col justify-between cursor-pointer",children:[V.jsxs("div",{className:"space-y-3",children:[V.jsx("div",{className:"w-12 h-12 rounded-2xl bg-purple-950/70 border border-purple-800/80 flex items-center justify-center transition-transform duration-300 hover:scale-110",children:o(t.iconName)}),V.jsx("h3",{className:"text-lg sm:text-xl font-black text-white leading-snug",children:t.title})]}),V.jsx("p",{className:"text-xs sm:text-sm text-purple-200/85 leading-relaxed pt-1 border-t border-purple-900/30",children:t.shortDesc})]},t.id))})]})})}function u2(){return V.jsx("section",{id:"details",className:"relative min-h-[calc(100vh-80px)] scroll-mt-20 snap-start flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-transparent",children:V.jsxs("div",{className:"max-w-7xl mx-auto space-y-8 sm:space-y-10 my-auto w-full",children:[V.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-2",children:[V.jsx("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight",children:"App Details & Premium Packages"}),V.jsx("p",{className:"text-xs sm:text-sm text-purple-200/90 max-w-xl mx-auto",children:"Choose the plan that fits your career goals & unlock AI capabilities."})]}),V.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto",children:$t.subscriptionTiers.map((o,t)=>V.jsxs("div",{className:"relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-6 bg-[#070a0f] border-2 border-purple-900/50 hover:border-purple-300 hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] transition-all duration-300 hover:scale-105 cursor-pointer",children:[o.badge&&V.jsx("div",{className:`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] uppercase font-black tracking-wider border transition-transform duration-300 hover:scale-110 ${o.badgeClass}`,children:o.badge}),V.jsxs("div",{className:"space-y-4 pt-1",children:[V.jsx("div",{className:"flex items-center justify-between text-[11px] font-black text-purple-400 uppercase tracking-widest",children:V.jsx("span",{children:o.tier})}),V.jsxs("div",{children:[V.jsx("h3",{className:"text-xl font-black text-white",children:o.name}),V.jsxs("div",{className:"flex items-baseline gap-1 mt-1",children:[V.jsx("span",{className:"text-3xl font-black text-white",children:o.price}),V.jsxs("span",{className:"text-xs text-purple-300 font-mono",children:["/ ",o.duration]})]}),V.jsx("p",{className:"text-xs text-purple-200/70 mt-1 min-h-[32px] leading-relaxed",children:o.subtitle})]}),V.jsxs("div",{className:"space-y-2 pt-3 border-t border-purple-900/40",children:[V.jsx("span",{className:"text-[10px] font-bold text-purple-300 uppercase tracking-wider block mb-1",children:"INCLUDED FEATURES:"}),V.jsx("ul",{className:"space-y-2 text-xs text-white",children:o.included.map((i,s)=>V.jsxs("li",{className:"flex items-center gap-2 leading-tight",children:[V.jsx(FR,{className:"w-3.5 h-3.5 text-purple-400 shrink-0"}),V.jsx("span",{children:i})]},s))})]})]}),V.jsx("button",{className:`w-full py-3 rounded-2xl text-xs font-black transition-transform duration-300 hover:scale-105 ${o.ctaClass}`,onClick:()=>alert(`Selected ${o.name} (${o.price}). Open Klyvo App to upgrade!`),children:o.cta})]},t))})]})})}function c2({onLaunchWebApp:o}){const[t,i]=ei.useState(!1),[s,u]=ei.useState(!1),f=()=>{i(!0);const d=`Klyvo App Package APK - Version ${$t.version}
Created by ${$t.creator}
Thank you for downloading Klyvo!`,h=new Blob([d],{type:"application/vnd.android.package-archive"}),m=URL.createObjectURL(h),p=document.createElement("a");p.href=m,p.download=`klyvo-app-${$t.version}.apk`,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(m),setTimeout(()=>i(!1),3e3)};return V.jsx("section",{id:"download",className:"relative min-h-[calc(100vh-80px)] scroll-mt-20 snap-start flex flex-col justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent",children:V.jsxs("div",{className:"max-w-5xl mx-auto space-y-8 sm:space-y-12 my-auto w-full text-center",children:[V.jsxs("div",{className:"space-y-3",children:[V.jsx("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight",children:"App Download"}),V.jsx("p",{className:"text-sm sm:text-base text-purple-200/90 max-w-xl mx-auto leading-relaxed",children:"Get Klyvo on your Android phone via direct APK or launch instant web app in your browser."})]}),V.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto text-left",children:[V.jsxs("div",{className:"bg-[#0d1117] border-2 border-purple-900/60 hover:border-purple-300 hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] rounded-3xl p-7 sm:p-8 space-y-6 flex flex-col justify-between transition-all duration-300 hover:scale-105 cursor-pointer",children:[V.jsxs("div",{className:"space-y-4",children:[V.jsxs("div",{className:"flex items-center gap-4",children:[V.jsx("div",{className:"w-12 h-12 rounded-2xl bg-purple-950 border border-purple-800 hover:border-purple-300 flex items-center justify-center text-purple-300 shrink-0 transition-all duration-300 hover:scale-110",children:V.jsx(e2,{className:"w-6 h-6"})}),V.jsxs("div",{children:[V.jsx("h3",{className:"text-xl sm:text-2xl font-black text-white",children:"Direct Android APK"}),V.jsxs("p",{className:"text-xs text-purple-300/80 font-mono mt-0.5",children:[$t.apkSize," • Android 8.0+"]})]})]}),V.jsx("p",{className:"text-xs sm:text-sm text-purple-200/90 leading-relaxed",children:"Direct APK download for Android phones. High-speed, secure, and ready to install."}),V.jsxs("div",{className:"space-y-2 text-xs text-purple-200 pt-1",children:[V.jsxs("div",{className:"flex items-center gap-2",children:[V.jsx(Rc,{className:"w-4 h-4 text-purple-400"}),V.jsx("span",{children:"100% Safe & Verified APK"})]}),V.jsxs("div",{className:"flex items-center gap-2",children:[V.jsx(mS,{className:"w-4 h-4 text-purple-400"}),V.jsx("span",{children:"Supports All Android Devices"})]})]})]}),V.jsxs("div",{className:"space-y-2.5 pt-2",children:[V.jsxs("button",{onClick:f,className:"w-full py-3.5 rounded-2xl text-xs sm:text-sm font-black bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center gap-2 border border-purple-400 transition-transform duration-300 hover:scale-105",children:[V.jsx(Vp,{className:"w-4 h-4"}),V.jsx("span",{children:t?"Downloading APK...":`Download APK (${$t.apkSize})`})]}),V.jsxs("button",{onClick:()=>u(!s),className:"w-full py-2.5 rounded-xl text-xs font-bold bg-black text-purple-200 border border-purple-800 hover:border-purple-300 hover:text-white flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105",children:[V.jsx(Tx,{className:"w-4 h-4 text-purple-400"}),V.jsx("span",{children:s?"Hide QR Code":"Scan Mobile QR Code"})]})]})]}),V.jsxs("div",{className:"bg-[#0d1117] border-2 border-purple-900/60 hover:border-purple-300 hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] rounded-3xl p-7 sm:p-8 space-y-6 flex flex-col justify-between transition-all duration-300 hover:scale-105 cursor-pointer",children:[V.jsxs("div",{className:"space-y-4",children:[V.jsxs("div",{className:"flex items-center gap-4",children:[V.jsx("div",{className:"w-12 h-12 rounded-2xl bg-purple-950 border border-purple-800 hover:border-purple-300 flex items-center justify-center text-purple-300 shrink-0 transition-all duration-300 hover:scale-110",children:V.jsx(Ic,{className:"w-6 h-6"})}),V.jsxs("div",{children:[V.jsx("h3",{className:"text-xl sm:text-2xl font-black text-white",children:"Instant Web App"}),V.jsx("p",{className:"text-xs text-purple-300 font-mono mt-0.5",children:"PWA / Web Browser Mode"})]})]}),V.jsx("p",{className:"text-xs sm:text-sm text-purple-200/90 leading-relaxed",children:"Open Klyvo directly in Chrome, Edge, Safari, or Brave without installing anything."}),V.jsxs("div",{className:"space-y-2 text-xs text-purple-200 pt-1",children:[V.jsxs("div",{className:"flex items-center gap-2",children:[V.jsx(Rc,{className:"w-4 h-4 text-purple-400"}),V.jsx("span",{children:"Works on Mobile & Laptop"})]}),V.jsxs("div",{className:"flex items-center gap-2",children:[V.jsx(Rc,{className:"w-4 h-4 text-purple-400"}),V.jsx("span",{children:"Instant Gmail 1-Click Login"})]})]})]}),V.jsxs("button",{onClick:o,className:"w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-black hover:bg-purple-950 text-white border border-purple-800 hover:border-purple-300 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105",children:[V.jsx(Ic,{className:"w-4 h-4 text-purple-400"}),V.jsx("span",{children:"Launch Web App in Browser"})]})]})]}),V.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left pt-2",children:[V.jsxs("div",{className:"p-3 rounded-2xl bg-[#0d1117] border-2 border-purple-900/40 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer",children:[V.jsx("span",{className:"w-7 h-7 rounded-xl bg-purple-950 text-purple-300 font-black text-xs flex items-center justify-center shrink-0 border border-purple-800 transition-transform duration-300 hover:scale-110",children:"1"}),V.jsx("span",{className:"text-xs font-semibold text-purple-200",children:"Tap Download APK"})]}),V.jsxs("div",{className:"p-3 rounded-2xl bg-[#0d1117] border-2 border-purple-900/40 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer",children:[V.jsx("span",{className:"w-7 h-7 rounded-xl bg-purple-950 text-purple-300 font-black text-xs flex items-center justify-center shrink-0 border border-purple-800 transition-transform duration-300 hover:scale-110",children:"2"}),V.jsx("span",{className:"text-xs font-semibold text-purple-200",children:"Allow Unknown Sources"})]}),V.jsxs("div",{className:"p-3 rounded-2xl bg-[#0d1117] border-2 border-purple-900/40 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer",children:[V.jsx("span",{className:"w-7 h-7 rounded-xl bg-purple-950 text-purple-300 font-black text-xs flex items-center justify-center shrink-0 border border-purple-800 transition-transform duration-300 hover:scale-110",children:"3"}),V.jsx("span",{className:"text-xs font-semibold text-purple-200",children:"Install & Enjoy App"})]})]}),s&&V.jsxs("div",{className:"p-4 bg-[#0d1117] border border-purple-800 rounded-2xl max-w-xs mx-auto text-center space-y-2 animate-in fade-in",children:[V.jsx("h4",{className:"text-xs font-bold text-white",children:"Scan with Mobile Camera"}),V.jsx("div",{className:"p-3 bg-white rounded-xl inline-block",children:V.jsxs("div",{className:"w-32 h-32 bg-[#070a0f] rounded-lg p-2 flex flex-col items-center justify-center text-white space-y-1",children:[V.jsx(Tx,{className:"w-16 h-16 text-white"}),V.jsx("span",{className:"text-[8px] font-mono font-bold text-purple-300",children:"klyvo.app/apk"})]})})]})]})})}function f2(){const[o,t]=ei.useState(0),i=s=>{t(o===s?null:s)};return V.jsx("section",{id:"faq",className:"relative scroll-mt-20 flex flex-col justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent",children:V.jsxs("div",{className:"max-w-3xl mx-auto space-y-6 sm:space-y-8 my-auto w-full",children:[V.jsxs("div",{className:"text-center space-y-2",children:[V.jsx("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight",children:"FAQ"}),V.jsx("p",{className:"text-xs sm:text-sm text-purple-200/90 max-w-xl mx-auto",children:"Klyvo app ke baare me aksar puche jaane wale sawal aur unke jawab."})]}),V.jsx("div",{className:"space-y-3",children:$t.faqs.map((s,u)=>{const f=o===u;return V.jsxs("div",{className:"bg-[#070a0f] border-2 border-purple-900/50 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer",children:[V.jsxs("button",{onClick:()=>i(u),className:"w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-purple-300 transition-colors",children:[V.jsx("span",{children:s.question}),V.jsx(GR,{className:`w-4 h-4 text-purple-400 transition-transform duration-300 shrink-0 ml-2 ${f?"rotate-180 text-white":""}`})]}),f&&V.jsx("div",{className:"px-4 pb-4 pt-1 text-xs text-purple-200/90 leading-relaxed border-t border-purple-900/40 animate-in fade-in",children:s.answer})]},u)})})]})})}function d2(){const o=t=>{const i=document.getElementById(t);if(i){const u=window.innerHeight-80,f=i.getBoundingClientRect(),d=f.height,h=window.scrollY+f.top-80-Math.max(0,(u-d)/2);window.scrollTo({top:Math.max(0,h),behavior:"smooth"})}};return V.jsx("footer",{className:"relative z-10 bg-transparent text-white py-10 px-4 sm:px-6 lg:px-8",children:V.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[V.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[V.jsxs("div",{className:"space-y-2.5",children:[V.jsxs("div",{onClick:()=>o("home"),className:"flex items-center gap-3 cursor-pointer group",children:[V.jsx("img",{src:$t.appIcon,alt:"Klyvo Icon",className:"w-10 h-10 rounded-2xl object-cover border border-purple-500/50 transition-transform duration-300 group-hover:scale-105"}),V.jsx("span",{className:"font-black text-2xl tracking-tight text-white",children:$t.appName})]}),V.jsx("p",{className:"text-xs sm:text-sm text-purple-200/90 font-medium",children:$t.subTaglineMain}),V.jsxs("div",{className:"text-xs text-purple-200/90 font-medium",children:["Designed & Developed by ",V.jsx("span",{className:"text-white font-extrabold",children:$t.creator})," ✨"]})]}),V.jsxs("div",{className:"flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm font-semibold text-purple-200/90",children:[V.jsx("button",{onClick:()=>o("home"),className:"hover:text-white transition-colors",children:"Home"}),V.jsx("button",{onClick:()=>o("features"),className:"hover:text-white transition-colors",children:"App Features"}),V.jsx("button",{onClick:()=>o("details"),className:"hover:text-white transition-colors",children:"App Details"}),V.jsx("button",{onClick:()=>o("download"),className:"hover:text-white transition-colors",children:"App Download"}),V.jsx("button",{onClick:()=>o("faq"),className:"hover:text-white transition-colors",children:"FAQ"})]})]}),V.jsxs("div",{className:"pt-4 text-center text-xs text-purple-300/60 font-medium",children:["© 2026 ",$t.appName," App. All rights reserved. Created by ",$t.creator,"."]})]})})}function h2(){const o=()=>{const i=$t.deployment.webAppUrl;window.open(i,"_blank")},t=()=>{const i=`Klyvo App Package APK - Version ${$t.version}
Created by ${$t.creator}
Thank you for downloading Klyvo!`,s=new Blob([i],{type:"application/vnd.android.package-archive"}),u=URL.createObjectURL(s),f=document.createElement("a");f.href=u,f.download=`klyvo-app-${$t.version}.apk`,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(u)};return V.jsxs("div",{className:"relative min-h-screen bg-[#0d1117] text-white font-sans selection:bg-purple-600 selection:text-white",children:[V.jsx(CR,{}),V.jsx(s2,{onLaunchWebApp:o,onDownloadApk:t}),V.jsxs("main",{className:"relative z-10 w-full",children:[V.jsx(o2,{}),V.jsx(l2,{}),V.jsx(u2,{}),V.jsx(c2,{onLaunchWebApp:o}),V.jsx(f2,{})]}),V.jsx(d2,{onLaunchWebApp:o,onDownloadApk:t})]})}function p2(){const o=()=>{alert("Web App mode: Open http://localhost:5173 or deploy the app build!")};return V.jsx(h2,{onLaunchWebApp:o})}sE.createRoot(document.getElementById("root")).render(V.jsx(JM.StrictMode,{children:V.jsx(p2,{})}));
