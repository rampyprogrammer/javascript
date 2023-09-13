class Person{

    constructor(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender

    }
    
    Eat(){
        console.log(`the ${this.name} will eat`)

    }
    Sleep(){
        console.log(`the ${this.name} will sleep at night`)
    }

}
class Employee extends Person{
    constructor(name,age,gender,empid){
        super(name,age,gender)
        this.empid=empid

    }
    
   

    Work(){
        console.log(`${this.name} should work in company to get month end salary and the id employee is ${this.empid}`)
    }


}

class student extends Person{
    constructor(name,age,gender,rollNo){
        super(name,age,gender)
        this.rollNo=rollNo
        
    }
    
    Exams(){
        console.log(`${this.name} should sit at ${this.rollNo} to write exams to pass and to get my degree certificate`)
    }
}

obj=new Employee("RAakesh",25,"male","576hg")
obj.Work()
obj1=new student("rama",22,"male",546)
obj1.Exams()
obj1.Eat()
   