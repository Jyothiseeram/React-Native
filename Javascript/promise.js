function fun1(){
    return  new Promise(function(resolve,reject){
        var x=8;
        if(x==8)
        {
            resolve(1);
        }
        else{
            reject();
        }
    })
}
function fun2(){
    return  new Promise(function(resolve,reject){
        var x=8;
        if(x==8)
        {
            resolve(2);
        }
        else{
            reject();
        }
    })
}
function fun3(){
    return  new Promise(function(resolve,reject){
        var x=8;
        if(x==8)
        {
            resolve(3);
        }
        else{
            reject();
        }
    })
}
async function Excute() {
    try{

    const result1 =await fun1();
    const result2=await fun2(result1);
    const result3=await fun3(result2);

    console.log(result3)
    }
    catch(err){
         console.log(err);
    }
}
Excute()

// fun1().then(function(){
//     console.log("fun-1 completed")

// })

// .catch(function(){
//     console.log("It is rejected")
// })


// const result = new Promise(function(resolve,reject){
//     var a = 10;
//     if(a==10){
//         resolve();
//     } 
//     else{
//         reject()
//     }
// })

// result.then(function(){
//     console.log("success")
// })