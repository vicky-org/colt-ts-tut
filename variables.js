var movieTitle = "Inception";
movieTitle = "Interstellar";
console.log(movieTitle.toUpperCase());
var movieRating = 8.8;
movieRating += 1;
console.log(movieRating);
var gameOver = false;
gameOver = true;
console.log(gameOver);
//Type inference
var score = 100;
score = 200;
score = "hello";
var playerName = "Alice";
playerName = 42;
var isActive = true;
isActive = 60;
var myComplicatedData = "This could be anything";
myComplicatedData = 42;
myComplicatedData = true;
myComplicatedData = { name: "Alice", age: 30 };
myComplicatedData = [1, 2, 3];
var movies = ["Inception", "Interstellar", "Dunkirk"];
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    console.log(movie);
    if (movie === "Interstellar") {
        foundMovie = movie;
        break;
    }
}
console.log(foundMovie);
