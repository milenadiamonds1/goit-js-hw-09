function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=document.querySelector("body");e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,o.style.backgroundColor=t(),d=setInterval((()=>{o.style.backgroundColor=t()}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,n.disabled=!0,clearInterval(d)}));let d=null;
//# sourceMappingURL=01-color-switcher.2e021439.js.map