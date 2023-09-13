class Animal{
    alive=true
    Eat(){
        console.log(`the ${this.name} will eat`)

    }
    Sleep(){
        console.log(`the ${this.name} will sleep at night`)
    }

}
class Rabbit extends Animal{
    
    name="rabbit";

    Run(){
        console.log(`${this.name} will run with high speeed`)
    }


}

class Hawk extends Animal{
    name="hawk"
    Fly(){
        console.log(`the ${this.name} will fly high..`)
    }
}

class Fish extends Animal{
    name="fish";
    Swim(){
        console.log(`the ${this.name} will swim in the water`)
    }
}

const obj=new Fish()
obj.Eat()
const obj1=new Rabbit()
obj1.Eat()
