class Animal {
    constructor(species, name) {
        this.species = species;
        this.name = name;
    }
}

class AnimalShelter {
    constructor() {
        this.dog = [];
        this.cat = [];
    }

    enqueue(animal) {
        if (animal.species === 'dog') {
            this.dog.push(animal);
        } else if (animal.species === 'cat') {
            this.cat.push(animal);
        }
    }

    dequeue(pref) {
        if (pref === 'dog') {
            return this.dog.shift() || null;
        } else if (pref === 'cat') {
            return this.cat.shift() || null;
        } else {
            return null;
        }
    }
}

module.exports = { AnimalShelter , Animal};

const shelter = new AnimalShelter();


const dog1 = new Animal('dog', 'Bush');
const dog2 = new Animal('dog', 'Trumb');
const cat1 = new Animal('cat', 'Ice');
const cat2 = new Animal('cat', 'Saqer');


shelter.enqueue(dog1);
shelter.enqueue(cat1);
shelter.enqueue(dog2);
shelter.enqueue(cat2);


const dog = shelter.dequeue('dog');
const cat = shelter.dequeue('cat');


console.log(dog);
console.log(cat); 