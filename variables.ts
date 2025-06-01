let movieTitle: string = "Inception";
movieTitle = "Interstellar";
console.log(movieTitle.toUpperCase());

let movieRating: number = 8.8;
movieRating += 1
console.log(movieRating);

let gameOver: boolean = false;
gameOver = true;
console.log(gameOver);

//Type inference
let score = 100; 
score = 200;
score = "hello"

let playerName = "Alice";
playerName = 42

let isActive = true;
isActive = 60


let myComplicatedData: any = "This could be anything";
myComplicatedData = 42;
myComplicatedData = true;
myComplicatedData = { name: "Alice", age: 30 };
myComplicatedData = [1, 2, 3]; 


const movies = ["Inception", "Interstellar", "Dunkirk"];
let foundMovie: string;

for( let movie of movies) {
    console.log(movie);
    if (movie === "Interstellar") {
        foundMovie = movie;
        break;
    }
}
console.log(foundMovie);