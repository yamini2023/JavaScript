class poly
{
    add()
    {
        console.log("polymorphism")
    }
}
class poly2 extends poly
{
    add()
    {
        console.log("second method in polymorphism")
    }
    
}
class poly3 extends poly2
{
    add()
    {
        console.log("third method in polymorphism")
    }

}
let p=new poly();
let p2=new poly2();
let p3=new poly3();
p.add();
p2.add();
p3.add();
