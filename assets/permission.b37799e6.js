import{r as c}from"./index.fbd304e3.js";function a(e,n="or"){const r=typeof e=="string"?[e]:e,t=c.currentRoute.value.meta.permission||[];return n==="and"?r.every(o=>t.includes(o)):r.some(o=>t.includes(o))}export{a as c};
