"use strict";(self.webpackChunkornwara_gatsby=self.webpackChunkornwara_gatsby||[]).push([[960],{8511:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var n=r(5785),l=r(7294),a=r(682),c=r(2086),i=r(1945),o=r(4051),s=r(1555),m=r(444);function u(e){const{image:t,title:r,description:n,winery:a,location:c,price:o,averageRating:s,reviews:u,handleClick:d}=e;return l.createElement(m.Z,{style:{width:"25rem",margin:"5px",display:"flex",flexDirection:"row",border:"1px #720017 solid"}},l.createElement(m.Z.Img,{variant:"top",src:t,style:{marginTop:"0.5rem",borderRadius:"10px",maxWidth:"150px"}}),l.createElement(m.Z.Body,null,l.createElement(m.Z.Title,null,r),l.createElement(m.Z.Text,null,o," THB"),l.createElement(m.Z.Text,null,"Winery: ",a),l.createElement(m.Z.Text,null,c),l.createElement(m.Z.Text,null,s," (",u," reviews)"),l.createElement(i.Z,{style:{backgroundColor:"#720017",color:"white",border:"1px #720017 solid",fontSize:"1em",display:"flex",alignItems:"center"},onClick:d},"Add to Cart")))}var d=r(30);const E=Number(950);function F(){const[e,t]=(0,d.Z)("wine","Cabernet Sauvignon");let[r,m]=l.useState([]),[F,Z]=l.useState("reds"),[p,g]=(0,d.Z)("cart",[]),[y,b]=l.useState("XXX");function k(e){p.push(e),g((0,n.Z)(p))}return l.useEffect((()=>{let e=[];fetch("https://api.sampleapis.com/wines/"+F).then((e=>e.json())).then((t=>{for(let r=0;r<t.length;r++)t[r].price=E,e.push(l.createElement(u,{key:r,image:t[r].image,winery:t[r].winery,title:t[r].wine,location:t[r].location,price:t[r].price,averageRating:t[r].rating.average,reviews:t[r].rating.reviews,handleClick:()=>{k(t[r])}}));m(e)}))}),[F]),l.createElement(a.Z,null,l.createElement("h1",{style:{color:"#720017"}},"Wine"),l.createElement(c.Z,null,l.createElement(i.Z,{style:{backgroundColor:"#720017",border:"#FFFFFF"},variant:"secondary",onClick:()=>Z("reds")},"Reds"),l.createElement(i.Z,{style:{backgroundColor:"#720017",border:"#FFFFFF"},variant:"secondary",onClick:()=>Z("whites")},"Whites"),l.createElement(i.Z,{style:{backgroundColor:"#720017",border:"#FFFFFF"},variant:"secondary",onClick:()=>Z("sparkling")},"Sparkling"),l.createElement(i.Z,{style:{backgroundColor:"#720017",border:"#FFFFFF"},variant:"secondary",onClick:()=>Z("rose")},"Rose"),l.createElement(i.Z,{style:{backgroundColor:"#720017",border:"#FFFFFF"},variant:"secondary",onClick:()=>Z("dessert")},"Dessert")),l.createElement(o.Z,null,l.createElement(s.Z,{sm:8},l.createElement(o.Z,null,r)),l.createElement(s.Z,{sm:4},l.createElement(o.Z,null,l.createElement("h2",null,"Cart")),p.map((e=>l.createElement(o.Z,null,l.createElement(s.Z,{sm:1}),l.createElement(s.Z,null,e.wine," - ",E)))),l.createElement(o.Z,null,l.createElement(s.Z,null,l.createElement("b",null,"Total: ",p.reduce(((e,t)=>e+t.price),0)))))))}}}]);
//# sourceMappingURL=component---src-pages-pos-wine-pos-js-d6fd81bb0ea522d3cf56.js.map