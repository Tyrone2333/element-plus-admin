import{c as r}from"./permission.b37799e6.js";import"./index.fbd304e3.js";import"./element-plus.76e3bf80.js";const c=(a,o)=>{const e=typeof o.value=="string"?[o.value]:o.value,t=o.arg==="and"?"and":"or";r(e,t)||a.parentNode&&a.parentNode.removeChild(a)};var n=a=>{a.directive("action",{mounted:(o,e)=>c(o,e)})};export{n as default};
