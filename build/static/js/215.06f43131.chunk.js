/*! For license information please see 215.06f43131.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkxpdc=self.webpackChunkxpdc||[]).push([[215],{5215:function(e,t,n){n.r(t),n.d(t,{startTapClick:function(){return o}});var i=n(1811),o=function(e){var t,n,o,v=10*-f,l=0,p=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),h=new WeakMap,m=function(e){v=(0,i.u)(e),E(e)},L=function(){clearTimeout(o),o=void 0,t&&(g(!1),t=void 0)},w=function(e){t||k(a(e),e)},E=function(e){k(void 0,e)},k=function(e,n){if(!e||e!==t){clearTimeout(o),o=void 0;var a=(0,i.q)(n),c=a.x,d=a.y;if(t){if(h.has(t))throw new Error("internal error");t.classList.contains(s)||T(t,c,d),g(!0)}if(e){var f=h.get(e);f&&(clearTimeout(f),h.delete(e));var v=r(e)?0:u;e.classList.remove(s),o=setTimeout((function(){T(e,c,d),o=void 0}),v)}t=e}},T=function(e,t,i){l=Date.now(),e.classList.add(s);var o=p&&c(e);o&&o.addRipple&&(b(),n=o.addRipple(t,i))},b=function(){void 0!==n&&(n.then((function(e){return e()})),n=void 0)},g=function(e){b();var n=t;if(n){var i=d-Date.now()+l;if(e&&i>0&&!r(n)){var o=setTimeout((function(){n.classList.remove(s),h.delete(n)}),d);h.set(n,o)}else n.classList.remove(s)}},R=document;R.addEventListener("ionGestureCaptured",L),R.addEventListener("touchstart",(function(e){v=(0,i.u)(e),w(e)}),!0),R.addEventListener("touchcancel",m,!0),R.addEventListener("touchend",m,!0),R.addEventListener("pointercancel",L,!0),R.addEventListener("mousedown",(function(e){var t=(0,i.u)(e)-f;v<t&&w(e)}),!0),R.addEventListener("mouseup",(function(e){var t=(0,i.u)(e)-f;v<t&&E(e)}),!0),R.addEventListener("contextmenu",(function(e){E(e)}),!0)},a=function(e){if(!e.composedPath)return e.target.closest(".ion-activatable");for(var t=e.composedPath(),n=0;n<t.length-2;n++){var i=t[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},r=function(e){return e.classList.contains("ion-activatable-instant")},c=function(e){if(e.shadowRoot){var t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=215.06f43131.chunk.js.map