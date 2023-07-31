let r=234;

let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        r+=1;
        resolve(r);
    },1000)
})

p.then((r)=>{
    console.log(r);
})
