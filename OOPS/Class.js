class test
{
    constructor(n1,n2)
    {
          this.n1=n1;
          this.n2=n2;

    }
    add()
    {
           console.log(this.n1+this.n2);
    }

} 
let t=new test(2,4);
t.add();