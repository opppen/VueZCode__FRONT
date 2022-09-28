import{ac as A,r as h,ad as D,aQ as F,a as N,q as $,o as r,c as p,d as l,w as o,f as w,ak as C,S as x,e as c,aq as S,aU as z,ag as i,a5 as j,an as M,J as O,am as P,g as J,i as K,aI as L,h as Q,V as R,j as m,aK as G,bs as H,k as _,ao as b,al as E,ae as W,af as X}from"./index.ea86435d.js";import{v as Y}from"./index.ca02616b.js";import{V as Z,a as ee}from"./VPagination.c0a526a3.js";import{V as le}from"./VInput.1d6be533.js";import{V as T}from"./VTextField.c4474226.js";import{V as te}from"./VCheckbox.6d7bdf7a.js";import{V as ae}from"./VRadio.e979238d.js";import"./index.3a8c39a5.js";import"./VSelectionControl.acc45ccc.js";const V=f=>(W("data-v-5249b5ce"),f=f(),X(),f),se={id:"admin-users"},oe=V(()=>i("h1",{class:"text-center"},"\u6703\u54E1\u7BA1\u7406",-1)),ie=V(()=>i("thead",null,[i("tr",null,[i("th",null,"\u6703\u54E1\u7DE8\u865F"),i("th",null,"\u4FE1\u7BB1"),i("th",null,"\u5E33\u865F"),i("th",null,"\u662F\u5426\u7BA1\u7406\u54E1"),i("th",null,"\u7BA1\u7406")])],-1)),de=_("\u7DE8\u8F2F"),ne=_("\u7DE8\u8F2F"),re={key:0},ue=V(()=>i("td",{colspan:"4",class:"text-center"},"\u6C92\u6709\u6703\u54E1",-1)),ce=[ue],me=V(()=>i("div",{class:"text-h5 font-weight-bold text-center py-5"},"\u7DE8\u8F2F\u6703\u54E1\u8CC7\u6599",-1)),_e=_("\u522A\u9664\u6B64\u6703\u54E1"),fe=_("\u53D6\u6D88"),pe=_("\u78BA\u8A8D\u9001\u51FA"),Ve={__name:"UsersView",setup(f){const d=h([]),y=D();F(y);const u=5,n=N(1),q=$(()=>d.slice(n.value*u-u,n.value*u)),e=h({_id:"",account:"",email:"",role:!1,dialog:!1,valid:!1,submitting:!1,idx:-1}),g=h({required(s){return!!s||"\u5FC5\u586B"},email(s){return Y.isEmail(s)||"\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4"}}),U=(s,t)=>{e._id=d[t]._id,e.email=d[t].email,e.account=d[t].account,e.role=d[t].role,e.idx=t,e.dialog=!0,e.valid=!1,e.submitting=!1},B=async()=>{if(!!e.valid){e.submitting=!0;try{const{data:s}=await C.patch("/users/"+e._id,e);d[e.idx]=s.result,x.fire({title:"success //\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"}),e.dialog=!1}catch(s){x.fire({title:"ERROR //\u5931\u6557",text:s.isAxiosError?s.response.data.message:s.message})}e.submitting=!1}},I=async s=>{const t=await y.delUser(e._id);console.log(t),d.splice(s,1)};return(async()=>{try{const{data:s}=await C.get("/users/all");d.push(...s.result)}catch(s){console.log(s),x.fire({title:"ERROR //\u5931\u6557",text:s.isAxiosError?s.response.data.message:s.message})}})(),(s,t)=>(r(),p("div",se,[l(w,null,{default:o(()=>[l(c,{cols:"12"},{default:o(()=>[oe]),_:1}),l(S),l(c,{cols:"12"},{default:o(()=>[l(z,{"fixed-header":"",height:"300"},{default:o(()=>[ie,i("tbody",null,[(r(!0),p(j,null,M(O(q),(a,k)=>(r(),p("tr",{key:a._id},[i("td",null,b(a._id),1),i("td",null,b(a.email),1),i("td",null,b(a.account),1),i("td",null,[l(ae,{olor:"success",modelValue:a.role,"onUpdate:modelValue":v=>a.role=v,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),i("td",null,[n.value===1?(r(),E(m,{key:0,onClick:v=>U(a._id,k),variant:"outlined",plain:"",size:"x-small",rounded:"lg"},{default:o(()=>[de]),_:2},1032,["onClick"])):(r(),E(m,{key:1,onClick:v=>U(a._id,k+(n.value-1)*u),variant:"outlined",plain:"",size:"x-small",rounded:"lg"},{default:o(()=>[ne]),_:2},1032,["onClick"]))])]))),128)),d.length===0?(r(),p("tr",re,ce)):P("",!0)])]),_:1})]),_:1})]),_:1}),l(Z,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=a=>n.value=a),length:Math.ceil(d.length/u),rounded:"circle",class:"ma-5"},null,8,["modelValue","length"]),l(ee,{modelValue:e.dialog,"onUpdate:modelValue":t[7]||(t[7]=a=>e.dialog=a),persistent:""},{default:o(()=>[l(J,{rounded:"xl"},{default:o(()=>[l(le,{modelValue:e.valid,"onUpdate:modelValue":t[6]||(t[6]=a=>e.valid=a),onSubmit:K(B,["prevent"])},{default:o(()=>[l(L,null,{default:o(()=>[me,l(S)]),_:1}),l(Q,null,{default:o(()=>[l(R,null,{default:o(()=>[l(w,null,{default:o(()=>[l(c,{cols:"12"},{default:o(()=>[l(T,{label:"\u4FE1\u7BB1",modelValue:e.email,"onUpdate:modelValue":t[1]||(t[1]=a=>e.email=a),rules:[g.required,g.email],type:"text","hide-details":"auto",variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),l(c,{cols:"12"},{default:o(()=>[l(T,{label:"\u5E33\u865F",modelValue:e.account,"onUpdate:modelValue":t[2]||(t[2]=a=>e.account=a),rules:[g.required],type:"text","hide-details":"auto",variant:"outlined"},null,8,["modelValue","rules"])]),_:1}),l(c,{cols:"12",class:"d-flex justify-space-between align-center"},{default:o(()=>[l(te,{label:"(\u6253\u52FE)\u7BA1\u7406\u54E1",modelValue:e.role,"onUpdate:modelValue":t[3]||(t[3]=a=>e.role=a),"hide-details":""},null,8,["modelValue"]),l(m,{onClick:t[4]||(t[4]=a=>I(s.idx)),variant:"outlined",size:"x-small",style:{opacity:"0.4"}},{default:o(()=>[_e]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(G,null,{default:o(()=>[l(R,{class:"d-flex"},{default:o(()=>[l(m,{onClick:t[5]||(t[5]=a=>e.dialog=!1),color:"red",variant:"tonal",disadled:e.submitting},{default:o(()=>[fe]),_:1},8,["disadled"]),l(H),l(m,{type:"submit",variant:"tonal",loading:e.submitting,color:"green"},{default:o(()=>[pe]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1},8,["modelValue"])]))}};var Se=A(Ve,[["__scopeId","data-v-5249b5ce"]]);export{Se as default};