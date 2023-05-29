function Employee(id,name)
{
    this.id=id;
    this.name=name;
    //console.log(`id :${this.id}name :${this.name}`);



this.getdetails= function ()
{
    console.log('id:' +this.id+ '   name :' + this.name);
}
}
let emp=new Employee(1, 'john');
emp.getdetails();
   