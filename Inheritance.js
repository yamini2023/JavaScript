// parent class
class Animal { 
    constructor(name) {
        this.name = name;
    }
    dog()
    {
        console.log(`hello javascript ${this.name}`);
    }
}

// inheriting parent class
class Pet1 extends Animal
{
   
   cat()
   {
    console.log(this.age);
   }

}

let Animal1 = new Animal('Bow');
Animal1.dog();
let Pet2=new Pet1('meow');
Pet2.cat();

