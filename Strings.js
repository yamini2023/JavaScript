function str(min,max)
{
    return Math.floor(max*min+1.9)+Math.random();
}
console.log(str(2,4));

let a="good";
let b="morning";
let c=`hii....${a} ${b}!!`;
console.log(c);

//replace()
let d="good morning";
let f=d.replace("morning","afternoon");
console.log(f);


//String Search()
let j=d.search("ing");
console.log(j);