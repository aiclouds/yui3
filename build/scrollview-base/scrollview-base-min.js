YUI.add("scrollview-base",function(e,t){function q(){q.superclass.constructor.apply(this,arguments)}var n=e.ClassNameManager.getClassName,r=e.config.doc,i=e.config.win,s=e.UA.ie,o=e.Transition.useNative,u="scrollview",a={vertical:n(u,"vert"),horizontal:n(u,"horiz")},f="scrollEnd",l="flick",c="drag",h="mousewheel",p="ui",d="top",v="right",m="bottom",g="left",y="px",b="axis",w="scrollY",E="scrollX",S="bounce",x="disabled",T="deceleration",N="x",C="y",k="boundingBox",L="contentBox",A="gesturemove",O="start",M="end",_="",D="0s",P="snapDuration",H="snapEasing",B="easing",j="frameDuration",F="bounceRange",I=function(e,t,n){return Math.min(Math.max(e,t),n)};e.ScrollView=e.extend(q,e.Widget,{_forceHWTransforms:e.UA.webkit?!0:!1,_prevent:{start:!1,move:!0,end:!1},lastScrolledAmt:0,initializer:function(e){var t=this;t._bb=t.get(k),t._cb=t.get(L),t._cAxis=t.get(b),t._cBounce=t.get(S),t._cBounceRange=t.get(F),t._cDeceleration=t.get(T),t._cFrameDuration=t.get(j)},bindUI:function(){var e=this;e._bindFlick(e.get(l)),e._bindDrag(e.get(c)),e._bindMousewheel(!0),e._bindAttrs(),s&&e._fixIESelect(e._bb,e._cb),q.SNAP_DURATION&&e.set(P,q.SNAP_DURATION),q.SNAP_EASING&&e.set(H,q.SNAP_EASING),q.EASING&&e.set(B,q.EASING),q.FRAME_STEP&&e.set(j,q.FRAME_STEP),q.BOUNCE_RANGE&&e.set(F,q.BOUNCE_RANGE)},_bindAttrs:function(){var e=this,t=e._afterScrollChange,n=e._afterDimChange;e.after({scrollEnd:e._afterScrollEnd,disabledChange:e._afterDisabledChange,flickChange:e._afterFlickChange,dragChange:e._afterDragChange,axisChange:e._afterAxisChange,scrollYChange:t,scrollXChange:t,heightChange:n,widthChange:n})},_bindDrag:function(t){var n=this,r=n._bb;r.detach(c+"|*"),t&&r.on(c+"|"+A+O,e.bind(n._onGestureMoveStart,n))},_bindFlick:function(t){var n=this,r=n._bb;r.detach(l+"|*"),t&&(r.on(l+"|"+l,e.bind(n._flick,n),t),n._bindDrag(n.get(c)))},_bindMousewheel:function(t){var n=this,i=n._bb;i.detach(h+"|*"),t&&e.one(r).on(h,e.bind(n._mousewheel,n))},syncUI:function(){var e=this,t=e._getScrollDims(),n=t.offsetWidth,r=t.offsetHeight,i=t.scrollWidth,s=t.scrollHeight;e._cAxis===undefined&&(e._cAxis={x:i>n,y:s>r},e._set(b,e._cAxis)),e.rtl=e._cb.getComputedStyle("direction")==="rtl",e._cDisabled=e.get(x),e._uiDimensionsChange(),e._isOutOfBounds()&&e._snapBack()},_getScrollDims:function(){var e=this,t=e._cb,n=e._bb,r=q._TRANSITION,i=e.get(E),s=e.get(w),u,a;return o&&(t.setStyle(r.DURATION,D),t.setStyle(r.PROPERTY,_)),origHWTransform=e._forceHWTransforms,e._forceHWTransforms=!1,e._moveTo(t,0,0),a={offsetWidth:n.get("offsetWidth"),offsetHeight:n.get("offsetHeight"),scrollWidth:n.get("scrollWidth"),scrollHeight:n.get("scrollHeight")},e._moveTo(t,-i,-s),e._forceHWTransforms=origHWTransform,a},_uiDimensionsChange:function(){var e=this,t=e._bb,n=e._getScrollDims(),r=n.offsetWidth,i=n.offsetHeight,s=n.scrollWidth,o=n.scrollHeight,u=e.rtl,f=e._cAxis;f&&f.x&&t.addClass(a.horizontal),f&&f.y&&t.addClass(a.vertical),e._minScrollX=u?Math.min(0,-(s-r)):0,e._maxScrollX=u?0:Math.max(0,s-r),e._minScrollY=0,e._maxScrollY=Math.max(0,o-i)},scrollTo:function(t,n,r,i,s){if(this._cDisabled)return;var u=this,a=u._cb,f=q._TRANSITION,l=e.bind(u._onTransEnd,u),c=0,h=0,v={},m;r=r||0,i=i||u.get(B),s=s||a,t!==null&&(u.set(E,t,{src:p}),c=-t),n!==null&&(u.set(w,n,{src:p}),h=-n),m=u._transform(c,h),o&&s.setStyle(f.DURATION,D).setStyle(f.PROPERTY,_),r===0?o?s.setStyle("transform",m):(t!==null&&s.setStyle(g,c+y),n!==null&&s.setStyle(d,h+y)):(v.easing=i,v.duration=r/1e3,o?v.transform=m:(v.left=c+y,v.top=h+y),s.transition(v,l))},_transform:function(e,t){var n="translate("+e+"px, "+t+"px)";return this._forceHWTransforms&&(n+=" translateZ(0)"),n},_moveTo:function(e,t,n){o?e.setStyle("transform",this._transform(t,n)):(e.setStyle(g,t+y),e.setStyle(d,n+y))},_onTransEnd:function(e){var t=this;t.fire(f)},_onGestureMoveStart:function(t){if(this._cDisabled)return!1;var n=this,r=n._bb,i=n.get(E),s=n.get(w),o=t.clientX,u=t.clientY;n._prevent.start&&t.preventDefault(),n._flickAnim&&(n._flickAnim.cancel(),delete n._flickAnim,n._onTransEnd()),t.stopPropagation(),n.lastScrolledAmt=0,n._gesture={axis:null,startX:i,startY:s,startClientX:o,startClientY:u,endClientX:null,endClientY:null,deltaX:null,deltaY:null,flick:null,onGestureMove:r.on(c+"|"+A,e.bind(n._onGestureMove,n)),onGestureMoveEnd:r.on(c+"|"+A+M,e.bind(n._onGestureMoveEnd,n))}},_onGestureMove:function(e){var t=this,n=t._gesture,r=t._cAxis,i=r.x,s=r.y,o=n.startX,u=n.startY,a=n.startClientX,f=n.startClientY,l=e.clientX,c=e.clientY;t._prevent.move&&e.preventDefault(),n.deltaX=a-l,n.deltaY=f-c,n.axis===null&&(n.axis=Math.abs(n.deltaX)>Math.abs(n.deltaY)?N:C),n.axis===N&&i?t.set(E,o+n.deltaX):n.axis===C&&s&&t.set(w,u+n.deltaY)},_onGestureMoveEnd:function(e){var t=this,n=t._gesture,r=n.flick,i=e.clientX,s=e.clientY;t._prevent.end&&e.preventDefault(),n.endClientX=i,n.endClientY=s,n.onGestureMove.detach(),n.onGestureMoveEnd.detach(),r||n.deltaX!==null&&n.deltaY!==null&&(t._isOutOfBounds()?t._snapBack():t.pages&&!t.pages.get(b)[n.axis]&&t._onTransEnd())},_flick:function(e){if(this._cDisabled)return!1;var t=this,n=t._cAxis,r=e.flick,i=r.axis,s=r.velocity,o=i===N?E:w,u=t.get(o);t._gesture&&(t._gesture.flick=r),n[i]&&t._flickFrame(s,i,u)},_flickFrame:function(t,n,r){var i=this,s=n===N?E:w,o=i._cBounce,u=i._cBounceRange,a=i._cDeceleration,f=i._cFrameDuration,l=t*a,c=r-f*l,h=n===N?i._minScrollX:i._minScrollY,p=n===N?i._maxScrollX:i._maxScrollY,d=c<h,v=c<p,m=c>h,g=c>p,y=c<h-u,b=c<p+u,S=d&&c>h-u,x=g&&c<p+u,T=c>h-u,C=c>p+u,k;if(S||x)l*=o;k=Math.abs(l).toFixed(4)<.015,k||y||C?(i._flickAnim&&(i._flickAnim.cancel(),delete i._flickAnim),m&&v?i._onTransEnd():i._snapBack()):(i._flickAnim=e.later(f,i,"_flickFrame",[l,n,c]),i.set(s,c))},_mousewheel:function(e){var t=this,n=t.get(w),r=t._bb,i=10,s=e.wheelDelta>0,o=n-(s?1:-1)*i;o=I(o,t._minScrollY,t._maxScrollY),r.contains(e.target)&&t._cAxis[C]&&(t.lastScrolledAmt=0,t.set(w,o),t.scrollbars&&(t.scrollbars._update(),t.scrollbars.flash()),t._onTransEnd(),e.preventDefault())},_isOutOfBounds:function(e,t){var n=this,r=n._cAxis,i=r.x,s=r.y,o=e||n.get(E),u=t||n.get(w),a=n._minScrollX,f=n._minScrollY,l=n._maxScrollX,c=n._maxScrollY;return i&&(o<a||o>l)||s&&(u<f||u>c)},_snapBack:function(){var e=this,t=e.get(E),n=e.get(w),r=e._minScrollX,i=e._minScrollY,s=e._maxScrollX,o=e._maxScrollY,u=I(n,i,o),a=I(t,r,s),f=e.get(P),l=e.get(H);a!==t?e.set(E,a,{duration:f,easing:l}):u!==n?e.set(w,u,{duration:f,easing:l}):e._onTransEnd()},_afterScrollChange:function(e){if(e.src===q.UI_SRC)return!1;var t=this,n=e.duration,r=e.easing,i=e.newVal,s=[];t.lastScrolledAmt=t.lastScrolledAmt+(e.newVal-e.prevVal),e.attrName===E?(s.push(i),s.push(t.get(w))):(s.push(t.get(E)),s.push(i)),s.push(n),s.push(r),t.scrollTo.apply(t,s)},_afterFlickChange:function(e){this._bindFlick(e.newVal)},_afterDisabledChange:function(e){this._cDisabled=e.newVal},_afterAxisChange:function(e){this._cAxis=e.newVal},_afterDragChange:function(e){this._bindDrag(e.newVal)},_afterDimChange:function(){this._uiDimensionsChange()},_afterScrollEnd:function(e){var t=this;t._flickAnim&&(t._flickAnim.cancel(),delete t._flickAnim),t._isOutOfBounds()&&t._snapBack()},_axisSetter:function(t,n){if(e.Lang.isString(t))return{x:t.match(/x/i)?!0:!1,y:t.match(/y/i)?!0:!1}},_setScroll:function(t,n){return this._cDisabled&&(t=e.Attribute.INVALID_VALUE),t},_setScrollX:function(e){return this._setScroll(e,N)},_setScrollY:function(e){return this._setScroll(e,C)}},{NAME:"scrollview",ATTRS:{axis:{setter:"_axisSetter",writeOnce:"initOnly"},scrollX:{value:0,setter:"_setScrollX"},scrollY:{value:0,setter:"_setScrollY"},deceleration:{value:.93},bounce:{value:.1},flick:{value:{minDistance:10,minVelocity:.3}},drag:{value:!0},snapDuration:{value:400},snapEasing:{value:"ease-out"},easing:{value:"cubic-bezier(0, 0.1, 0, 1.0)"},frameDuration:{value:15},bounceRange:{value:150}},CLASS_NAMES:a,UI_SRC:p,_TRANSITION:{DURATION:e.Transition._VENDOR_PREFIX+"TransitionDuration",PROPERTY:e.Transition._VENDOR_PREFIX+"TransitionProperty"},BOUNCE_RANGE:!1,FRAME_STEP:!1,EASING:!1,SNAP_EASING:!1,SNAP_DURATION:!1})},"@VERSION@",{requires:["widget","event-gestures","event-mousewheel","transition"],skinnable:!0});
