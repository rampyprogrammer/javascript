class Car{
     numOfCars=0;

    constructor(name){
        this.name=name
        Car.numOfCars+=1
    }

    
}

const obj=new Car("virat kohli")
const obj1=new Car("virat the king")
const obj2=new Car("virat the legend")
const obj3=new Car("virat the myth")
const obj4=new Car("chase master")

console.log(Car.numOfCars)
