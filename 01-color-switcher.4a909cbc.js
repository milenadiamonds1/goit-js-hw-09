!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=document.querySelector("body");e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,o.style.backgroundColor=t(),r=setInterval((function(){o.style.backgroundColor=t()}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,n.disabled=!0,clearInterval(r)}));var r=null}();
//# sourceMappingURL=01-color-switcher.4a909cbc.js.map
