
//asynchronous
console.log('yamini');
setTimeout(()=>
{
    cal()
    console.log('yam');
},1000);
console.log('sai');

function cal()
{
    let sum=0;
    for(let i=0; i<10000;i++)
    {
        sum+=i;
    }
    console.log('result',sum);
}