//Callback

function step1(value,callback)
{
    return new Promise((resolve, reject)=>
{
    if(!error)
    {
        resolve(value +10);

    }
    else{
     
        reject('something went wrong');
    }    
    });
}
function step2(value,error)
{
    return new Promise((resolve,reject)=>{

    if(!error)
    {
        resolve(value +10);

    }
    else{
     
        reject('something went wrong');
    }    
    });
}
    

