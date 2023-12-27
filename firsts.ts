// function sum (x: number, y: number): number {
//     return x + y;
// };
// function multiply (a: number, b: number): number {
//     return a * b;
// };
  
// function mathOp(x: number, y: number, op: (a: number, b: number) => number): number{
  
//     return op(x, y);
// }
// console.log(mathOp(10, 20, sum)); 
// console.log(mathOp(10, 20, multiply)); 

// function hello():void{console.log("Firdavs");}
// const Firdavs : () => void = hello;
// Firdavs();

//arrow functions
// const sum  = (x:number,y:number) => x+y;
// console.log(sum(10,11));

// function result(x:number,y:number,op:(a:number,b:number)=>number) :number{
//     return op(x,y);
// }

// console.log(result(10,11,((x,y)=>x+y)));

////////////////// union
// function printSentence(numbers: number[]|number){
//     if (typeof numbers === "number") {
//       console.log(numbers);
//     } else {
//       console.log(numbers.join(" "));
//     }
// }
// printSentence([1,2,3]);
// printSentence(123);

// let x: number = undefined;
// console.log(x);
// x = null;
// console.log(x);
// x = 5;
// console.log(x);

// function vv({name,age = 2 }:{name:string;age?:number}){
//     console.log(`${name} ${age}`);
// }

// vv({name:"Firdavs"});

// function usd():{name:string ; age:number}{
//     return {name:"Firdavs",age:21};
// }

// console.log(usd);

// function printMarks(marks: [string,...number[]]){
     
//     for(const mark of marks){
//         console.log(mark);
//     }
// }
// let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];
// let physics: [string,...number[]] = ["Physics", 5, 5, 5];
 
// printMarks(math);
// printMarks(physics);
type a= {name:string ; jinsi:string};
let IsmAndJins: Array<a> =[
    {name:"Firdavs",jinsi:"male"},
    {name:"Quvvat",jinsi:"male"},
    {name:"Azizbek",jinsi:"male"},
    {name:"Axror",jinsi:"male"},
    {name:"Sardor",jinsi:"male"},
    {name:"Saida",jinsi:"female"},
    {name:"Aziza",jinsi:"female"},
    {name:"Oygul",jinsi:"female"},
]

function ismlar() 
{
    
    let sd=document.getElementById("txt");
    var s:string = sd.value;
    let str : string ="";
    for(let i:number=0;i<IsmAndJins.length;i++){
        if(s===IsmAndJins[i].jinsi)
            str+=IsmAndJins[i].name+"<br>";
    }
 
    document.getElementById("yozilsin").innerHTML=str;   
}