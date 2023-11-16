const PI = 3.1415; 
const radius = 5
const area = PI * radius * radius; 
console.log(area);
const minPlantSpace = 0.8
//50% of area = 39
//80% of area = 62.8



// week 1
let numberOfPlants = 20;
let numberOfWeeks = 1;
let area1 = numberOfPlants * minPlantSpace;
console.log(area1);

if (area1 >= (area*0.8)) {
    console.log(`prune`)
} else if (area1 <= (area/2)) {
    console.log(`plant`);
} else {
    console.log(`monitor`);
}

// week 2
numberOfWeeks++;
numberOfPlants *= 2;
console.log(numberOfPlants);
let area2 = numberOfPlants * minPlantSpace
console.log(area2);
if (area2 >= (area*0.8)) {
    console.log(`prune`)
} else if (area2 <= (area/2)) {
    console.log(`plant`);
} else {
    console.log(`monitor`)
}

//week 3
numberOfWeeks++;
numberOfPlants *= 2;
console.log(numberOfPlants);
let area3 = numberOfPlants * minPlantSpace
console.log(area3);
if (area3 >= (area*0.8)) {
    console.log(`prune`)
} else if (area3 <= (area/2)) {
    console.log(`plant`);
} else {
    console.log(`monitor`);
}

//attempt to do it with a for loop
//issue: i don't know how to access "plant" variable for the if block

// let numberOfWeeks = n 
// for (let week = 1; week <= numberOfWeeks; week++) {
//     let plant = (numberOfPlants *= 2)
//     console.log(plant);
// }


// if ((minPlantSpace * plant) > (area * 0.8)) {
//     console.log("Plants need to be pruned to stop them exceeding the capacity of the garden.");
// } else {
//     if ((minPlantSpace * plant) >= (area / 2) && (minPlantSpace * plant) <= (area * 0.8)) {
//         console.log("Plants must be monitored");
//     } else{
//         console.log("There is room to plant more plants");
//           }
//     }

// Part 2
// Compute the amount of additional space that would be needed if 
// we started with 100 plants that didn't prune them for 10 weeks
let totalPlants = (50*(2 ** 10))
console.log(totalPlants);
let areaCoveredByPlants = totalPlants * minPlantSpace
console.log(areaCoveredByPlants);
let spaceNeed = areaCoveredByPlants - area
console.log(spaceNeed);

//Part 3
// Use try and catch to wrap your work in an error-handling block.
// If the amount of space required to hold the originally provided 
// number of plants exceeds the amount of space available,
// throw a new error and log an appropriate message. 