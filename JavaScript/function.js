'use strict'
//アロー関数
//（）=>{}

// const addTwoNum=(x,y)=>
// {
// return x*y; //返す　ｘ＋Y
// };
// console.log(addTwoNum(3,4));

//クラスとは
// class Cluculater{
//     constructor (x,y)
//     {
// this.x=x;//呼び出したxをconstructor（ｘ、y)を代入
// this.y=y;

//     }
//     addTwoNum()
//     {
//         return this.x+this.y
//     }

// }


// // //新しいCluculaterClassを呼び出し　そこに3と４を呼び出す
// // const Clac=new Cluculater(3,4);//インスタンス生成
// // const ClacB=new Cluculater(1,1);
// // console.log(Clac.addTwoNum());
// // console.log(ClacB.addTwoNum());

// //クラスの継承
// class SuperNaming{
//     constructor ()

//     {
//         this.name="田中"

//     }
//     outgputName()
//     {
//         return this.name;
//     }

// }
// class SubGreeting extends SuperNaming
// {
// outgputName(){
//     return super.outgputName()+"太郎";
// }
// outgputHellp()
// {
//     return "Hello";
// }
// }
// const Greeting=new SubGreeting;
// console.log(Greeting.outgputHellp()+Greeting.outgputName());


//練習問題
class Naming{
    constructor(name)
    {
        this.name=["山田","田中","林",name]

    }
    result(i)
    {
        return this.name[i];
     }
}
    const outgputName=new Naming("佐藤");
    for(let i=0;i<outgputName.name.length;i++)
    {
        console.log(outgputName.result(i));
    }

