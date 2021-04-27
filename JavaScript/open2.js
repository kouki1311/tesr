'use strict'

//イベント呼び出し

const Cover=document.getElementById("cover");
const menu=document.getElementById("menu");
menu.addEventListener('mouseover',()=>{
        menu.className="menu-open";
        Cover.className="menu-open";
});
menu.addEventListener('mouseleave',()=>{
        menu.className="";
        Cover.className="";
})

