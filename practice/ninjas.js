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

console.log(`${ninja1.sayName()}\n${ninja1.showStats()}\n${ninja1.drinkSake()}`)