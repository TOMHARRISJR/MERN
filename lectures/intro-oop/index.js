class Person{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        return this.firstName + " " + this.lastName
    }
}

class Student extends Person{
    constructor(firstName,lastName,hobbies = []){
        super(firstName,lastName)
        this.hobbies = hobbies
    }
}

const tomHobbies = ["games","cars"]
const tom = new Student("Tom", "Harris",tomHobbies)

console.log(tom.fullName())