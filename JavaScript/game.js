 'use strict'





// //１００個までbox描画
// for(let i=0;i<=100;i++)
// {
//     const div=document.createElement('div');
//     div.classList.add("box");//classListの四角
//     div.textContent=i;

//     div.addEventListener('click',()=>{
// div.classList.toggle('circle');
//     });
//     document.body.appendChild(div);//divの子要素
// }


const num=5

const Hit=Math.floor( Math.random()*num);//0-4ランダムから４までの数
console.log(Hit);
//0から４
for(let i=0;i<num;i++)
{
    const div=document.createElement('div');
      div.classList.add("box");//classListの四角


      //クリックイベント
div.addEventListener('click',()=>{
    //hit
if(i===Hit)
{
    div.textContent='あたり';
    div.classList.add('hit');
}
//外れ
else
{
    div.textContent='外れ';
    div.classList.add('lose');
}


});

  document.body.appendChild(div);//divの子要素

}
// const target1=document.gvetElementById("target1");
// const target2=document.getElementById("target2");
// const target3=document.getElementById("target3");

// //ターゲット１左
// target1.addEventListener('click',()=>{
    
// target1.classList.toggle('circle');
// });
// //ターゲット２真ん中
// target2.addEventListener('click',()=>{
    
//     target2.classList.toggle('circle');
//     });

// //ターゲット３ 右
//     target3.addEventListener('click',()=>{
    
//         target3.classList.toggle('circle');
//         });

