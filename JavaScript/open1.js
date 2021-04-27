'use strict'

//イベント呼び出し
const menu=document.getElementById("menu");
const Cover=document.getElementById("cover");
const open=document.getElementById("open").addEventListener('click', ()=>{


  
        menu.className='menu-open';
        Cover.className='menu-open';


});
const close=document.getElementById("close").addEventListener("click",()=>{
 
        menu.className='';
        Cover.className='';
    
});