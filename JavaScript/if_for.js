

'use strict'

// let i=2;
// if(i===1)
// {
// console.log("真です");
// }
// else
// if(i===2)
// {
//     console.log("偽です");
// }

//関数
function ScoreCheck()
{
    let testScore=document.getElementById('score').value;
if(testScore>=80)
{
    document.write("合格です。おはようございます。");
}
else if(testScore>=70)
{
    document.write("惜しい！あと少し！");
}
else 
{
    document.write("不合格です！もう少し勉強しましょう")
}
}


// const namelist=["田中","山田","林","佐藤"];

// console.log(namelist[0]);

// for(let i=0;i<namelist.length;i++)
// {
//     console.log(`${i+1} ${namelist[i]}`);
// }

// //continue文
// for(let i=0;i<10;i++)
// {
//     if(i%2===0)continue;//2で割り切るときだけ処理を行う

//     console.log(i);
// }
// //break文
// for(let i=0;i<1000;i++)
// {
//     if(i>10)break;
//     console.log(i);//10より大きくなったらループをぬける
// }
