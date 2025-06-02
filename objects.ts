function printName(person: {first: string, last: string}) : void {
    console.log(`${person.first} ${person.last}`);
}

printName({first:"john", last:"doe"});


let coordinates: {x: number, y: number} = {
    x: 10,
    y: 20
};
console.log(coordinates.x, coordinates.y);

function randomCoordinate(): {x: number, y: number} {
    return {
        x: Math.random() * 100,
        y: Math.random() * 100
    };
}
let randomPoint = randomCoordinate();
console.log(randomPoint.x, randomPoint.y);


printName({first: "Alice", last: "Smith", age: 30}); // This will work, but it's not type-safe
const singer = {first: "Alice", last: "Smith", age: 30}
printName(singer)
console.log(singer.age);


type Point = {
    x: number;
    y: number;
};

function printPoint(point: Point): void {
    console.log(`X: ${point.x}, Y: ${point.y}`);
}
let myPoint: Point = {x: 5, y: 10};
printPoint(myPoint);

function doublePoint(point: Point): Point {
    return {
        x: point.x * 2,
        y: point.y * 2
    };
}
let doubledPoint = doublePoint(myPoint);
console.log(`Doubled Point: X: ${doubledPoint.x}, Y: ${doubledPoint.y}`);

type MyNum = number;
let age: MyNum = 25;
console.log(age);


type Song = {

    title: string;
    artist: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string;
    };      
}

// {
//     title: "The Great Gatsby",
//     artist: "F. Scott Fitzgerald",
//     numStreams: 1000,
//     credits: {
//         producer: "Max Martin",
//         writer: "John Doe"
//     }
// }

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033; // Assuming $0.01 per stream
}

function printSongDetails(song: Song): void {
    console.log(`Title: ${song.title}`);
    console.log(`Artist: ${song.artist}`);
    console.log(`Streams: ${song.numStreams}`);
    console.log(`Producer: ${song.credits.producer}`);
    console.log(`Writer: ${song.credits.writer}`);
}
let mySong: Song = {
    title: "Shape of You",
    artist: "Ed Sheeran",
    numStreams: 1000000,
    credits: {
        producer: "Steve Mac",
        writer: "Ed Sheeran"
    }
};
printSongDetails(mySong);
let payout = calculatePayout(mySong);
console.log(`Payout: $${payout.toFixed(2)}`);


type Point2 = {
    x: number;
    y: number;
    z? : number; // Optional property
};

function printPoint2(point: Point2): void {
    console.log(`X: ${point.x}, Y: ${point.y}, Z: ${point.z}`);
}
let myPoint2: Point2 = {x: 5, y: 10};
printPoint2(myPoint2);

let myPoint22: Point2 = {x: 5, y: 10, z: 15};
printPoint2(myPoint22);



type User = {
    readonly id: number;
    username: string;
}
const user: User = {
    id: 1,
    username: "john_doe"
};
console.log(user.id); // 1
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
user.id = 3


//Intersection Types:
type Colorful = {
    color: string;
}
type Circle = {
    radius: number;
}
type ColorfulCircle = Colorful & Circle;
let myCircle: ColorfulCircle = {
    color: "red",
    radius: 10
};


type Cat = {
    numLives: number;
}

type Dog = {
    breed: string;
}
type CatDog = Cat & Dog & {
    age: number;
}

const myCatDog: CatDog = {
    numLives: 9,
    breed: "Labrador",
    age: 5
};

