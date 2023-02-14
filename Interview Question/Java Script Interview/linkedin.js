// let cat=Object.create({type:"lion"});
// cat.size="large";
//  let copyCat={...cat};
//  cat.type="tiger";
//  console.log(copyCat.type,copyCat.size);

// var a=['dog','cat','hen'];
// a[100]='fox';
// console.log(a.length)

// let obj={};
// console.log(obj?.a.b)
// console.log(obj.a?.b)
// console.log(obj.?a.?b)
// console.log(obj[a][b])

// let r=["am","Bo","Ce","Co"]

// r.splice(0,2);
// console.log(r)

// var obj;
// console.log(obj)

// console.log("I");
// setTimeout(()=>{
//     console.log("love")
// },0)
// console.log("Javascript !");

// class Rain{
//     static minrf=60;
// }
// let congo=new Rain();
// Rain.minrf=80;
// console.log(congo.minrf);

// let rainfa=10;
// let animals=0;
// while(rainfa<13||animals<=2){
//     rainfa++;
//     animals +=2
// }
// console.log(animals)

// if(true)
// {
//     var first='you';
// }

// function fScope(){
//     var second="got this";
// }
// // fScope();
// // console.log(first)
// console.log(second);

// pollyfills using map


// function MyArray()
// {
//     this.length=0;
   
  
// }
// MyArray.prototype.push=function (element){
//     this[this.length]=element; 
//     this.length++;
//     return element;
// }
// MyArray.prototype.printarr=function(){
//     let arr="[ "
//     for(let i=0;i<this.length;i++)
//     {
//         if(i==this.length-1)
//         {
//             arr+=this[i]; 
//         }
//         else
//         arr+=this[i]+",";

//     }
//     arr+=" ]"
//     console.log(arr);
    
// }
// MyArray.prototype.mymap=function(cb)
// {
//     let arr=[]
//     for(let i=0;i<this.length;i++)
//     {
//         arr.push(cb(this[i],i,this))
//     }
//     return arr;
// }
// MyArray.prototype.myfilter=function(cb)
// {
//     let arr=[];
//     for(let i=0;i<this.length;i++)
//     {
//         if(cb(this[i],i,this))
//         {
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// }


// let arr= new MyArray()

// arr.push(10);
// // console.log(arr)

// arr.push(30);
// arr.push(50);
// // arr.printarr();
// let filterarr=arr.myfilter((element,i)=>{
//     if(element==90)
//     {
//         return element;
//     }
   

// })
// console.log(filterarr)

// console.log(arr);
// let newarr=arr.mymap((element,i)=>{
//     return element*5;
// })
// // console.log(arr[1]);
// console.log(newarr);



// curring
function curry(func)
{
    return function  currying(...args)
    {
        if(args.length>=func.length)
        {
            return func(...args)
        }
        else
        {
            return function(...nextargs)
            {
                return currying(...args, ...nextargs)
            }
        }
    }
}

function sum(a,b,c,d)
{
    return a+b+c+d;
}

let curridsum=curry(sum);

console.log(curridsum(1)(2,3)(5));