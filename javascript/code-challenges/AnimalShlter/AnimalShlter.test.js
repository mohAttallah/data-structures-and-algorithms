
const { AnimalShelter } = require('./AnimalShlter');
const { Animal } = require('./AnimalShlter');

describe('AnimalShelter', () => {
    let shelter;

    beforeEach(() => {
        shelter = new AnimalShelter();
    });

    test('enqueue ', () => {
        const dog = new Animal('dog', 'Bush');
        const cat = new Animal('cat', 'Ice');

        shelter.enqueue(dog);
        shelter.enqueue(cat);

        expect(shelter.dog.length).toBe(1);
        expect(shelter.cat.length).toBe(1);
    });

    test('dequeue ', () => {
        const dog1 = new Animal('dog', 'Bush');
        const dog2 = new Animal('dog', 'Trumb');
        const cat1 = new Animal('cat', 'Ice');
        const cat2 = new Animal('cat', 'Saqaer');

        shelter.enqueue(dog1);
        shelter.enqueue(cat1);
        shelter.enqueue(dog2);
        shelter.enqueue(cat2);

        const dog = shelter.dequeue('dog');
        const cat = shelter.dequeue('cat');

        expect(dog).toEqual(dog1);
        expect(cat).toEqual(cat1);
    });

    test('return null if preferred species queue is empty', () => {
        const dog = new Animal('dog', 'Bush');

        shelter.enqueue(dog);

        const cat = shelter.dequeue('cat');
        const dogAgain = shelter.dequeue('dog');

        expect(cat).toBeNull();
        expect(dogAgain).toEqual(dog);
    });

    test('return null if preferred species is invalid', () => {
        const dog = new Animal('dog', 'Bush');

        shelter.enqueue(dog);

        const animal = shelter.dequeue('fish');

        expect(animal).toBeNull();
    });
});
