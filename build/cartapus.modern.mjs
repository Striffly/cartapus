import e from"tiny-emitter";class t extends e{constructor(e={}){super(),this.intersect=this.intersect.bind(this),this.options=Object.assign({root:null,rootMargin:"0px",threshold:0,once:!1,events:!0},e),this.createMainObserver(),this.init()}createMainObserver(){this.observers=[{observer:new IntersectionObserver(this.intersect,this.options),threshold:this.options.threshold,elements:[]}]}init(){this.getElems(),this.createObservers(),this.observe()}getElems(){const e=null===this.options.root?document:this.options.root;this.elems=e.querySelectorAll("[data-cartapus]")}createObservers(){for(const e of this.elems)if(e.dataset.cartapusThreshold){const t=parseFloat(e.dataset.cartapusThreshold);let s=!1;for(const r of this.observers)t===r.threshold&&(s=!0,r.elements.push(e));if(!s){const s={observer:new IntersectionObserver(this.intersect,Object.assign(this.options,{threshold:t})),threshold:t,elements:[e]};this.observers.push(s)}}else this.observers[0].elements.push(e)}intersect(e,t){e.forEach(e=>{e.isIntersecting?(e.target.dataset.cartapus="visible",this.options.once&&"false"!==e.target.dataset.cartapusOnce&&t.unobserve(e.target)):e.target.dataset.cartapus="hidden",this.options.events&&this.dispatch(e)})}dispatch(e){const t={element:e.target,visible:e.isIntersecting,intersection:e},s=new CustomEvent("cartapusintersect",{detail:t});e.target.dispatchEvent(s),this.emit("intersect",t)}observe(){this.observers.forEach(e=>{e.elements.forEach(t=>{e.observer.observe(t)})})}unobserve(){this.observers.forEach(e=>{e.elements.forEach(t=>{e.observer.unobserve(t)})})}destroy(){this.unobserve(),this.observers.forEach(e=>{e.elements=[]})}reset(){this.destroy(),this.init()}}export{t as default};
//# sourceMappingURL=cartapus.modern.mjs.map
