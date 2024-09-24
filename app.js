// let h1=document.querySelector("h1");

// function changeColor(color,delay)
// {
//     return new Promise((resolve,reject) => {
//       setTimeout(()=>{
//         let num=Math.floor(Math.random()*10)+1;
//         if(num>3)
//         {
//             reject("promise rejected");
//         }
//         h1.style.color=color;
//         console.log(`color change to${color}`);
//         resolve("color changed!");
//       },delay);
//     });
    
// }

// async function demo(){
//     try{
//     await changeColor("red",1000);
//     await changeColor("green",1000);
//     await changeColor("blue",1000);
//     await changeColor("yellow",1000);
//     await changeColor("pink",1000);
//     await changeColor("limegreen",1000);
//     await changeColor("orange",1000);
//     await changeColor("purple",1000);
//     await changeColor("black",1000);
//     await changeColor("maroon",1000);
//     }
//     catch(err){
//        console.log("error caught",err);
//     }
    
//     let a=9;
//     console.log(a);
// }


// // changeColor("red",1000,()=>{
// //     changeColor("orange",1000,()=>{
// //         changeColor("green",1000,()=>{
// //             changeColor("blue",1000,()=>{
// //                 changeColor("pink",1000,()=>{
// //                     changeColor("maroon",1000,()=>{
// //                         changeColor("limegreen",1000,()=>{
// //                             changeColor("purple",1000,()=>{

// //                             });
// //                         });
// //                     });
// //                 });
// //             });
// //         });
// //     });
// // });


// // // function savetoDb(data,success,failure)
// // // {

// // //     let internetSpeed=Math.floor(Math.random()*10)+1;
// // //     if(internetSpeed>4)
// // //     {
// // //       success();
// // //     }
// // //     else{
// // //        failure();
// // //     }
// // // }

// // // savetoDb("apna college", ()=>{
// // //     console.log("  success: your data was saved");
// // //     savetoDb("hello world", ()=>{
// // //         console.log("success2: data was saved");
// // //         savetoDb("suraj", ()=>{
// // //             console.log("success3: data was saved");
// // //         }, ()=>{
// // //             console.log(" failure3: weak connection. data not saved");
// // //         })
// // //     }, ()=>{
// // //         console.log(" failure2: weak connection. data not saved");
// // //     })
// // // }, ()=>{
// // //     console.log(" failure: weak connection. data not saved");
// // // });

// // // function savetoDb(data)
// // // {
// // //     return new Promise((resolve,reject) => {

// // //         let internetSpeed=Math.floor(Math.random()*10)+1;
// // //         if(internetSpeed>4)
// // //         {
// // //             resolve("resolve : data was saved");
// // //         }
// // //         else{
// // //             reject("failure : weak connection");
// // //         }
// // //     });
// // // }

// // // savetoDb("apna college")
// // // .then( (result)=>{
// // //     console.log("data1 saved");
// // //     console.log("result of promise :",result);
// // //     return savetoDb("hello");
// // // })
// // // .then( (result)=>{
// // //     console.log("dat2 saved");
// // //     console.log("result of promise :",result);
// // //     return savetoDb("suraj");
// // // })
// // // .then( (result)=>{
// // //     console.log("data3 saved");
// // //     console.log("result of promise :",result);
// // // })
// // // .catch( (error)=>{
// // //     console.log("promise was rejected");
// // //     console.log("error of promise :",error);
// // // });


// // function getNum(){
// //     return new Promise((resolve,reject) =>{
// //         let num=Math.floor(Math.random()*10)+1;
// //         return num;
// //     });
// // }

// // async function demo(){
// //     getNum();
// // }

// let jsonRes='{"fact":"Owning a cat is actually proven to be beneficial for your health.","length":65}';
// let validRes=JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);

// let student={
//     name:"suraj",
//     marks:98,
// };
// console.log(JSON.stringify(student));

let url ="https://catfact.ninja/fact";

async function getFacts()
{
    try{
        let res=await fetch(url);
        let data =await res.json();
        console.log(data.fact);

        let res2=await fetch(url);
        let data2 =await res2.json();
        console.log(data2.fact);

    }
    catch(e)
    {
        console.log("error -",e);
    }

    
}

let a=getFacts();
console.log(a);

console.log("bye suraj");