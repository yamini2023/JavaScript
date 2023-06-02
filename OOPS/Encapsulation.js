class person
{
    constructor(name,id,age,sal)
    {
        this.name=name;
        this.id=id;
        this.age=age;
        this.sal=sal;
        
        
    }
    getName()
    {
        console.log(this.name);
    }
    getId()
    {
        console.log(this.id);
    }

    getAge()
    {
        console.log(this.age);
    }

    getSal()
    {
        console.log(this.sal);
    }


}
let p1=new person('tom',01,30,50000);
console.log(p1);
p1.getName();
p1.getId();
p1.getAge();
p1.getSal();
