import{a as n}from"./chunk-G5KA7DMQ.js";import{h as i}from"./chunk-W52NJFE2.js";import{v as s}from"./chunk-LFFRWUCI.js";import{Q as r,V as o,W as a}from"./chunk-YM5XIUHN.js";var l=class e{constructor(t){this.httpClient=t}router=a(i);userData=null;sendRegesterForm(t){return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",t)}sendLoginForm(t){return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",t)}saveUserData(){localStorage.getItem("userToken")!==null&&(this.userData=n(localStorage.getItem("userToken")),console.log("user",this.userData))}signOut(){localStorage.removeItem("userToken"),this.userData=null,this.router.navigate(["/login"])}setEmailVerify(t){return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",t)}setCodeVerify(t){return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",t)}resetPass(t){return this.httpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",t)}static \u0275fac=function(p){return new(p||e)(o(s))};static \u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})};export{l as a};
