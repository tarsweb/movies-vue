import{_ as g,b as w,d as h,i as y,r as f,q as k,o as e,c as s,F as R,j as b,a as t,t as n}from"./index-966d328d.js";const M={key:0},x={key:0},A={class:"review-info"},B={key:1},I={key:1},j={__name:"MoviesReviews",setup(E){const l=w(),r=h(()=>l.params.moviesId),c=y("moviesApi"),o=f(null);let i;async function _(){i=new AbortController;const a=await c.get(`/movie/${r.value}/reviews`,{signal:i.signal,params:{language:"en"}});o.value=a.data.results}return k(async a=>{a(()=>{i.abort()}),_()}),(a,F)=>o.value!==null?(e(),s("div",M,[o.value.length>0?(e(),s("ul",x,[(e(!0),s(R,null,b(o.value,({id:u,author:v,author_details:{username:d},content:p,created_at:m})=>(e(),s("li",{key:u},[t("div",A,[t("h3",null,n(v),1),t("p",null,n(d),1),t("p",null,n(m),1)]),t("p",null,n(p),1)]))),128))])):(e(),s("p",B," No reviews "))])):(e(),s("div",I," Loading... "))}},N=g(j,[["__scopeId","data-v-5911e78b"]]);export{N as default};
