import{_ as x,i as u,u as I,b as R,d as b,r as M,e as S,f as _,o as a,c as n,a as e,g as B,h as C,t as s,F as D,j as L,k as d,w as N,p as j,l as A,m as $}from"./index-966d328d.js";const i=o=>(j("data-v-11d118bc"),o=o(),A(),o),F={class:"movies"},G={key:0},O={class:"movie"},z=["src","alt"],E={class:"description"},P=i(()=>e("h2",null,"Vote / Votes :",-1)),T={class:"description"},q=i(()=>e("h2",null,"Popularity :",-1)),H={class:"description"},J=i(()=>e("h2",null,"Genres :",-1)),K=i(()=>e("h2",null,"Synopsis :",-1)),Q={class:"navlist"},U={key:1},W={__name:"MoviesDetailView",props:{from:{type:String,default:"/"}},setup(o){const p=o,v=u("moviesApi"),h=u("moviesApipathImage"),m=I(),g=R(),l=b(()=>g.params.moviesId),t=M({}),f=[{href:"cast",text:"Cast"},{href:"reviews",text:"Reviews"}],w=()=>{m.push({path:p.from,replace:!0})};async function y(){const c=await v.get(`/movie/${l.value}`,{params:{language:"en"}});t.value=c.data}return S(()=>{y()}),(c,X)=>{const k=_("RouterLink"),V=_("RouterView");return a(),n("div",F,[Object.keys(t.value)!==0?(a(),n("div",G,[e("button",{onClick:w},"Go Back"),e("div",O,[t.value.poster_path?(a(),n("img",{key:0,src:B(h)+"w500"+t.value.poster_path,alt:t.value.title,loading:"lazy",width:"300",height:"450"},null,8,z)):C("",!0),e("div",null,[e("h1",null,s(t.value.title),1),e("h2",null," Original title : "+s(t.value.original_title),1),e("div",E,[P,e("p",null,s(t.value.vote_average)+" / "+s(t.value.vote_count),1)]),e("div",T,[q,e("p",null,s(t.value.popularity),1)]),e("div",H,[J,e("p",null,s(t.value.genres),1)]),K,e("p",null,s(t.value.overview),1)])]),e("nav",Q,[(a(),n(D,null,L(f,r=>d(k,{to:{path:`/movies/${l.value}/${r.href}`}},{default:N(()=>[$(s(r.text),1)]),_:2},1032,["to"])),64))]),d(V)])):(a(),n("div",U," Loading ... "))])}}},Z=x(W,[["__scopeId","data-v-11d118bc"]]);export{Z as default};