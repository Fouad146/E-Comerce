import{a as T,b as p,c as y,d as k,e as N,f as h,g as D,h as G,i as M,j as q}from"./chunk-NIOZYWYZ.js";import{a as F}from"./chunk-QQJH2RDI.js";import"./chunk-G5KA7DMQ.js";import{h as w,i as L}from"./chunk-W52NJFE2.js";import"./chunk-LFFRWUCI.js";import{Ab as S,Bb as u,Fb as a,Hb as C,Jb as E,Oa as r,W as _,Za as b,ca as x,cb as m,da as v,jb as f,nb as s,rb as t,sb as i,tb as d}from"./chunk-YM5XIUHN.js";import"./chunk-EQDQRRRY.js";var H=()=>["/forget"];function R(e,n){e&1&&(t(0,"li",18),a(1,"email is required"),i())}function V(e,n){e&1&&(t(0,"li",18),a(1,"email not valid"),i())}function z(e,n){if(e&1&&(t(0,"div",7),x(),t(1,"svg",14),d(2,"path",15),i(),v(),t(3,"span",16),a(4,"Danger"),i(),t(5,"div")(6,"ul",17),m(7,R,2,0,"li",18)(8,V,2,0,"li",18),i()()()),e&2){let o,l=u();r(7),s((o=l.loginForm.get("email"))!=null&&o.getError("required")?7:(o=l.loginForm.get("email"))!=null&&o.getError("email")?8:-1)}}function I(e,n){e&1&&(t(0,"li",18),a(1,"password is required"),i())}function Z(e,n){e&1&&(t(0,"li",18),a(1,"minLength is 6 caracters"),i())}function j(e,n){e&1&&(t(0,"li",18),a(1,"you must start with capital caracter "),i())}function B(e,n){if(e&1&&(t(0,"div",7),x(),t(1,"svg",14),d(2,"path",15),i(),v(),t(3,"span",16),a(4,"Danger"),i(),t(5,"div")(6,"ul",17),m(7,I,2,0,"li",18)(8,Z,2,0,"li",18)(9,j,2,0,"li",18),i()()()),e&2){let o,l=u();r(7),s((o=l.loginForm.get("password"))!=null&&o.getError("required")?7:(o=l.loginForm.get("password"))!=null&&o.getError("minlength")?8:(o=l.loginForm.get("password"))!=null&&o.getError("pattern")?9:-1)}}function P(e,n){e&1&&(t(0,"span"),d(1,"i",19),i())}function U(e,n){e&1&&a(0,"log in")}function $(e,n){if(e&1&&(t(0,"p",12),a(1),i()),e&2){let o=u();r(),C(" ",o.msgError," ")}}function J(e,n){if(e&1&&(t(0,"p",13),a(1),i()),e&2){let o=u();r(),C(" ",o.msgsuccess," ")}}var A=class e{authService=_(F);router=_(w);isLoading=!1;msgError="";msgsuccess="";loginForm=new N({email:new h(null,[p.required,p.email]),password:new h(null,[p.required,p.minLength(6),p.pattern(/^[A-Z]\w{7,}$/)])});submitForm(){this.loginForm.valid?(this.isLoading=!0,console.log(this.loginForm),this.authService.sendLoginForm(this.loginForm.value).subscribe({next:n=>{console.log(n),n.message==="success"&&(this.msgsuccess=n.message,setTimeout(()=>{localStorage.setItem("userToken",n.token),this.authService.saveUserData(),this.router.navigate(["/home"])},300)),this.isLoading=!1},error:n=>{console.log(n),this.msgError=n.error.message,this.isLoading=!1}})):this.loginForm.markAllAsTouched()}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=b({type:e,selectors:[["app-login"]],decls:23,vars:8,consts:[[1,"container","m-auto","text-center","w-1/2"],[1,"text-2xl","font-bold","italic"],[1,"container","bg-slate-200","rounded-lg","p-5","mt-3"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","email",1,"block","mb-2","text-sm","font-medium","text-start","capitalize"],["formControlName","email","type","email","id","email",1,"block","w-full","p-2","rounded-lg","text-base"],["role","alert",1,"flex","p-4","mb-4","text-sm","text-red-800","rounded-lg","bg-red-50"],["for","password",1,"block","mb-2","text-sm","font-medium","text-start","capitalize"],["formControlName","password","type","password","id","password",1,"block","w-full","p-2","rounded-lg","text-base"],["type","submit",1,"btn-main",3,"disabled"],[1,"capitalize","hover:underline","hover:text-blue-950",3,"routerLink"],[1,"bg-red-400","text-white","px-2","py-4","border"],[1,"bg-green-400","text-white","px-2","py-4","border"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"shrink-0","inline","w-4","h-4","me-3","mt-[2px]"],["d","M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"],[1,"sr-only"],[1,"mt-1.5","list-disc","list-inside"],[1,"capitalize"],[1,"fa-spin","fas","fa-spinner","fa-1x"]],template:function(o,l){if(o&1&&(t(0,"section")(1,"div",0)(2,"h2",1),a(3,"log in now"),i(),t(4,"div",2)(5,"form",3),S("ngSubmit",function(){return l.submitForm()}),t(6,"div",4)(7,"label",5),a(8,"email"),i(),d(9,"input",6),m(10,z,9,1,"div",7),i(),t(11,"div",4)(12,"label",8),a(13,"password"),i(),d(14,"input",9),m(15,B,10,1,"div",7),i(),t(16,"button",10),m(17,P,2,0,"span")(18,U,1,0),i(),t(19,"a",11),a(20,"forget password"),i(),m(21,$,2,1,"p",12)(22,J,2,1,"p",13),i()()()()),o&2){let c,g;r(5),f("formGroup",l.loginForm),r(5),s((c=l.loginForm.get("email"))!=null&&c.errors&&((c=l.loginForm.get("email"))!=null&&c.touched)?10:-1),r(5),s((g=l.loginForm.get("password"))!=null&&g.errors&&((g=l.loginForm.get("password"))!=null&&g.touched)?15:-1),r(),f("disabled",l.isLoading),r(),s(l.isLoading?17:18),r(2),f("routerLink",E(7,H)),r(2),s(l.msgError?21:l.msgsuccess?22:-1)}},dependencies:[q,D,T,y,k,G,M,L],encapsulation:2})};export{A as LoginComponent};
