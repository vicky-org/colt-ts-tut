interface Point5 {
    x: number
    y: number
}

const pointA: Point5 = {
    x: 10,
    y: 20
};

interface Person {
    readonly id: number // readonly property
    first: string
    last: string
    nickname?: string // optional property
    //sayHi: () => string // method
    sayHi(): string
}

const thomas : Person = {
    id: 123,
    first: "Thomas",
    last: "Anderson",
    nickname: "Neo", // optional property can be included
    sayHi: () => {
        return `Hello, my name is ${thomas.first} ${thomas.last}`;
    }
}



console.log(thomas.first, thomas.last);
console.log(thomas.sayHi());


interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number
}


const shoes: Product = {
    name: "Running Shoes",
    price: 100,
    applyDiscount(discount: number): number {   
        const newPrice = this.price * (1 - discount)
        this.price = newPrice
        return this.price
    }
}


console.log(shoes.name, shoes.price);
console.log(shoes.applyDiscount(0.2)); // Apply 20% discount
console.log(shoes.name, shoes.price);


interface Doggy {
    name: string;
    age: number;
}


interface Doggy {
    breed: string;
    bark(): string;
}



const myDog: Doggy = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
    bark() {
        return "Woof! Woof!";
    }
};
console.log(myDog.name, myDog.age, myDog.breed);
console.log(myDog.bark());

interface ServiceDog extends Doggy {
    job: "drug sniffer" | "guide" | "therapy";
}

const myServiceDog: ServiceDog = {
    name: "Max",
    age: 5,
    breed: "Labrador",
    job: "guide",
    bark() {
        return "Woof! I'm ServiceDog, I'm here to help!";
    }
};
console.log(myServiceDog.name, myServiceDog.age, myServiceDog.breed, myServiceDog.job);
console.log(myServiceDog.bark());


interface Person1 {
    name: string
}

interface Employee {
    readonly id: number
    eamil: string
}

interface Engineer extends Person1, Employee {
    level: "junior" | "mid" | "senior"
    languages: string[]
}

const engineer: Engineer = {
    name: "Alice",
    id: 456,
    eamil: "alice@test.com",
    level: "mid",
    languages: ["JavaScript", "TypeScript", "Python"]
}