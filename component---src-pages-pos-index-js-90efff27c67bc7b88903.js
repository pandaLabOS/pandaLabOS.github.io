"use strict";(self.webpackChunkornwara_gatsby=self.webpackChunkornwara_gatsby||[]).push([[588],{6581:function(e,t,l){l.r(t),l.d(t,{default:function(){return Z}});var n=l(5785),a=l(7294),r=l(682),c=l(2086),o=l(1945),i=l(4051),m=l(1555),u=l(3228);function s(e){const{image:t,title:l,description:n,price:r,handleClick:c}=e;return a.createElement(u.Z,{style:{width:"15rem",margin:"5px"}},a.createElement(u.Z.Img,{variant:"top",src:t,style:{marginTop:"0.5rem",borderRadius:"10px"}}),a.createElement(u.Z.Body,null,a.createElement(u.Z.Title,null,l," - ",r),a.createElement(u.Z.Text,null,n),a.createElement(o.Z,{style:{backgroundColor:"#FE6601",color:"white",border:"1px #FFFFFF solid",fontSize:"1em",display:"flex",alignItems:"center"},onClick:c},"Add to Cart")))}var E=l(30);function Z(){const[e,t]=(0,E.Z)("coffee","Latte");let[l,u]=a.useState([]),[Z,d]=a.useState("hot"),[f,p]=(0,E.Z)("cart",[]),[h,g]=a.useState("XXX");function k(e){console.debug(e),f.push(e),console.log(f),p((0,n.Z)(f))}return a.useEffect((()=>{let e=[];fetch("https://api.sampleapis.com/coffee/"+Z).then((e=>e.json())).then((t=>{for(let l=0;l<t.length;l++)t[l].price=59,console.log(t[l]),e.push(a.createElement(s,{key:l,image:t[l].image,title:t[l].title,price:65,handleClick:()=>{k(t[l])}}));u(e)}))}),[Z]),a.createElement(r.Z,null,a.createElement("h1",null,"Coffee"),a.createElement(c.Z,null,a.createElement(o.Z,{variant:"secondary",onClick:()=>d("hot")},"Hot"),a.createElement(o.Z,{variant:"secondary",onClick:()=>d("iced")},"Iced")),a.createElement(i.Z,null,a.createElement(m.Z,{sm:10},a.createElement(i.Z,null,l)),a.createElement(m.Z,{sm:2},a.createElement(i.Z,null,a.createElement("h2",null,"Cart")),f.map((e=>a.createElement(i.Z,null,a.createElement(m.Z,null,e.title," - 59 Baht")))),a.createElement(i.Z,null,a.createElement(m.Z,null,a.createElement("b",null,"Total: ",f.reduce((e=>65),0)))),a.createElement(i.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-pos-index-js-90efff27c67bc7b88903.js.map