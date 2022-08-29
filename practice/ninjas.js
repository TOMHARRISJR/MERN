class Ninja{
    constructor(name,health,speed=3,strength=3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;  
    }

    sayName() {
        this.name
        return `Name: ${this.name}`
    }
    
    showStats() {
        return `Health: ${this.health}\nSpeed:${this.speed}\nStrength:${this.strength}`
    }

    drinkSake() {
        return `Health: ${this.health += 10}`
        
    }
}

const ninja1 = new Ninja("Hyabusa",100);


class Sensei extends Ninja{
    constructor(name,health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name,health,speed,strength)
        
        this.wisdom = wisdom
    }
    
    speakWisdom() {
        this.drinkSake()
        return `${this.health}\nWhat one programmer can do in one month, two programmers can do in two months.`

    }

}


const superSensei = new Sensei("Master Splinter");




console.log(`${superSensei.sayName()}\n${superSensei.showStats()}\n${superSensei.drinkSake()}\n${superSensei.speakWisdom()}`)