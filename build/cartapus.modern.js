function e(){}e.prototype={on:function(e,t,s){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:s}),this},once:function(e,t,s){var r=this;function i(){r.off(e,i),t.apply(s,arguments)}return i._=t,this.on(e,i,s)},emit:function(e){for(var t=[].slice.call(arguments,1),s=((this.e||(this.e={}))[e]||[]).slice(),r=0,i=s.length;r<i;r++)s[r].fn.apply(s[r].ctx,t);return this},off:function(e,t){var s=this.e||(this.e={}),r=s[e],i=[];if(r&&t)for(var n=0,o=r.length;n<o;n++)r[n].fn!==t&&r[n].fn._!==t&&i.push(r[n]);return i.length?s[e]=i:delete s[e],this}};var t=e;t.TinyEmitter=e;class s extends t{constructor(e={}){super(),this.intersect=this.intersect.bind(this);const t={root:document,rootMargin:"0px",threshold:0,once:!1,events:!0};this.options=Object.assign(t,e),this.createMainObserver(),this.init()}createMainObserver(){this.observers=[{observer:new IntersectionObserver(this.intersect,this.options),threshold:this.options.threshold,elements:[]}]}init(){this.getElems(),this.createObservers(),this.observe()}getElems(){this.elems=this.options.root.querySelectorAll("[data-cartapus]")}createObservers(){for(const e of this.elems)if(e.dataset.cartapusThreshold){const t=parseFloat(e.dataset.cartapusThreshold);let s=!1;for(const r of this.observers)t===r.threshold&&(s=!0,r.elements.push(e));if(!s){const s={observer:new IntersectionObserver(this.intersect,Object.assign(this.options,{threshold:t})),threshold:t,elements:[e]};this.observers.push(s)}}else this.observers[0].elements.push(e)}intersect(e,t){e.forEach(e=>{e.isIntersecting?(e.target.dataset.cartapus="visible",this.options.once&&"false"!==e.target.dataset.cartapusOnce&&t.unobserve(e.target)):e.target.dataset.cartapus="hidden",this.options.events&&this.dispatch(e)})}dispatch(e){const t={element:e.target,visible:e.isIntersecting,intersection:e},s=new CustomEvent("cartapusintersect",{detail:t});e.target.dispatchEvent(s),this.emit("intersect",t)}observe(){this.observers.forEach(e=>{e.elements.forEach(t=>{e.observer.observe(t)})})}unobserve(){this.observers.forEach(e=>{e.elements.forEach(t=>{e.observer.unobserve(t)})})}destroy(){this.unobserve(),this.observers.forEach(e=>{e.elements=[]})}reset(){this.destroy(),this.init()}}export{s as default};
//# sourceMappingURL=cartapus.modern.js.map
