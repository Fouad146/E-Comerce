import{a as w}from"./chunk-PNU75DGW.js";import{l as M}from"./chunk-FXKKQLOH.js";import{a as O}from"./chunk-VTBKJ64V.js";import{i as S}from"./chunk-W52NJFE2.js";import"./chunk-LFFRWUCI.js";import{Ab as b,Bb as h,Fb as a,Gb as d,Hb as p,Kb as y,La as v,Oa as o,W as s,Za as x,a as u,aa as g,ba as f,jb as l,pb as C,qb as _,rb as r,sb as i,tb as c,wb as P}from"./chunk-YM5XIUHN.js";import"./chunk-EQDQRRRY.js";var D=n=>["/details",n],F=(n,e)=>e.id;function T(n,e){if(n&1){let t=P();r(0,"div",2)(1,"div",3)(2,"div",4),c(3,"img",5),i(),r(4,"div",6)(5,"h5",7),a(6),i(),r(7,"p",8),a(8),i(),r(9,"div",9)(10,"p",10),a(11),c(12,"i",11),i(),r(13,"p",10),a(14),i()()()(),r(15,"div",12)(16,"button",13),b("click",function(){let k=g(t).$implicit,E=h();return f(E.getCartItem(k.id))}),c(17,"i",14),r(18,"span"),a(19," add to cart "),i()(),r(20,"div",15),c(21,"i",16),i()()()}if(n&2){let t=e.$implicit;o(),l("routerLink",y(7,D,t.id)),o(2),l("src",t.imageCover,v)("alt",t.slug),o(3),p(" ",t.slug.split("-").slice(0,2).join(" "),""),o(2),d(t.title.split(" ").slice(0,2).join(" ")),o(3),d(t.ratingsAverage),o(3),p("",t.price," EPG")}}var I=class n{products=new u;allProducts=[];productsService=s(w);cartService=s(O);toastrService=s(M);getProducts(){this.products=this.productsService.getAllProducts().subscribe({next:e=>{console.log(e.data),this.allProducts=e.data},error:e=>{console.log(e)}})}ngOnInit(){this.getProducts()}ngOnDestroy(){this.products.unsubscribe}getCartItem(e){this.cartService.addProductToCart(e).subscribe({next:t=>{console.log(t),this.toastrService.success(t.message,"Fresh Cart")},error:t=>{console.log(t),this.toastrService.error(t.message,"Fresh Cart")}})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-products"]],decls:4,vars:0,consts:[[1,"some-products","my-5"],[1,"container","grid","gap-6","md:grid-cols-2","lg:grid-cols-3","xl:grid-cols-4","xxl:grid-cols-6"],[1,"container","cart","overflow-hidden","max-w-sm","rounded-lg"],[3,"routerLink"],[1,"w-full"],[1,"rounded-t-lg","mx-auto",3,"src","alt"],[1,"px-5","py-2"],[1,"mb-2","capitalize","font-semibold","tracking-tight","text-green-600"],[1,"mb-3","font-normal"],[1,"flex","justify-between"],[1,"mb-3","font-semibold","text-gray-700"],[1,"fa-solid","fa-star","text-yellow-300"],[1,"b-cart","flex","justify-evenly","items-center","pb-3"],[1,"add-cart","capitalize","items-center","px-3","py-2","text-sm","font-medium",3,"click"],[1,"fa-solid","fa-plus"],[1,"heart"],[1,"fa-solid","fa-heart","fa-2x"]],template:function(t,m){t&1&&(r(0,"section",0)(1,"div",1),C(2,T,22,9,"div",2,F),i()()),t&2&&(o(2),_(m.allProducts))},dependencies:[S],styles:[".cart[_ngcontent-%COMP%]{transition:all 1s}.cart[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]{cursor:pointer}.cart[_ngcontent-%COMP%]   .add-cart[_ngcontent-%COMP%]{transform:translateY(200px);opacity:0;transition:all .8s;background-color:#4fa74f;border-radius:10px;color:#fff;width:80%;text-align:center}.cart[_ngcontent-%COMP%]   .add-cart[_ngcontent-%COMP%]:hover{background-color:#1c721c}.cart[_ngcontent-%COMP%]:hover{box-shadow:#4fa74f 0 0 25px 2px}.cart[_ngcontent-%COMP%]:hover   .add-cart[_ngcontent-%COMP%]{transform:translateY(0);opacity:1}.cart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20rem}"]})};export{I as ProductsComponent};
