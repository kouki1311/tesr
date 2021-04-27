'use strict'

//イベント呼び出し
const main=document.getElementById("main");
const open=document.getElementById("open").addEventListener('click', ()=>{

    if(main.className=='menu-open')
    {
        main.className='';
    }
    else{
        main.className='menu-open';

    }
});
