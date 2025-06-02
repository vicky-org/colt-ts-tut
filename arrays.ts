//const activeUsers: Array<string> = ["Alice", "Bob", "Charlie"];
const activeUsers: string[] = ["Alice", "Bob", "Charlie"];
activeUsers.push("Dave");
activeUsers.push(55);
console.log(activeUsers);


//const scores: Array<number> = [100, 200, 300];
const scores: number[] = [100, 200, 300];
scores.push(400);
scores.push("500"); // This will cause a type error
console.log(scores);

//const bools: Array<boolean> = [true, false, true];
const bools: boolean[] = [true, false, true];
bools.push(false);
bools.push("true"); // This will cause a type error
console.log(bools);

type Point3 = {
    x: number;
    y: number;
}

const points: Point3[] = [
    { x: 10, y: 20 },
    { x: 30, y: 40 },
    { x: 50, y: 60 }
];
points.push({ x: 70, y: 80 });
points.push({ x: "90", y: 100 }); // This will cause a type error
console.log(points);

const boards: string[][] = [
    ["Board 1", "Board 2"],
    ["Board 3", "Board 4"],
    ["Board 5", "Board 6"]
];
boards.push(["Board 7", "Board 8"]);
boards.push([7, 8]); // This will cause a type error
console.log(boards);
