let ag: string | number = 21;
ag = "hello"; // valid

let ages: string | number = "21";
ages = 30 
ages = "hello"; // valid
ages = true; // invalid, will cause a type error


type Point4 = {
    x: number;
    y: number;      
}

type Loc = {
    lat: number;
    long: number;      
}

let coordinate: Point4 | Loc = {x: 10, y: 20};
coordinate = { lat: 40.7128, long: -74.0060};


function printAge(age: string | number): void {
    if (typeof age === "string") {
        console.log(`Age is a string: ${age.toUpperCase()}`);
    } else {
        console.log(`Age is a number: ${age}`);
    }
}
printAge(25); // Age is a number: 25
printAge("hello"); // Age is a string: 30

function calculateTax(price: number | string, tax: number): number {
    if (typeof price === "string") {
        price = price.replace("$", ""); // Remove dollar sign if present
        price = parseFloat(price);
    }
    return price * tax; // Assuming a 10% tax rate
}
console.log(`Tax is: $${calculateTax(100, 0.1)}`); // Tax is: $10
console.log(`Tax is: $${calculateTax("$200.5", 0.1)}`); // Tax is: $20
console.log(`Tax is: $${calculateTax("300.5", 0.1)}`); // Tax is: $20


const stuff: (string | number)[] = ["hello", 42, "world", 100];
stuff.push("new item");
stuff.push(200);
stuff.push(true); // This will cause a type error
console.log(stuff); // ["hello", 42, "world", 100, "new item", 200]

const coords: (Point4 | Loc)[] = []
coords.push({x: 10, y: 20});
coords.push({ lat: 40.7128, long: -74.0060 });
coords.push({x: "30", y: 40}); // This will cause a type error
coords.push({y: 40}); // This will cause a type error
console.log(coords);

let zeroOrOne: 0 | 1 = 0;
zeroOrOne = 1; // valid
zeroOrOne = 2
console.log(zeroOrOne);

let zero: 0 = 0;
zero = 1; // This will cause a type error
console.log(zero);

// Exercises:
let highScore: number | boolean;
highScore = 1000; // valid
highScore = true; // valid


const stuff2: number[] | string[] = []

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: "Skiing" | "Snowboarding";
    skillLevel: SkillLevel;
}

type RGB = {
    r: number;
    g: number;
    b: number;  
}

type HSL = {
    h: number;
    s: number;
    l: number;
}

const colors: (RGB | HSL)[] = []

const greet = (name: string | string[]): void => {
    if (typeof name === "string") {
        console.log(`Hello, ${name}!`);
    } else {
        name.forEach(n => console.log(`Hello, ${n}!`));
    }
}