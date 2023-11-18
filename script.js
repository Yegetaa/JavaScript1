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
console.log(`It is the start of week ${numberOfWeeks} and there is ${numberOfPlants} plants that are \
occupying ${area1} square meters.`);

if (area1 >= (area*0.8)) {
    console.log(`prune`)
} else if (area1 <= (area/2)) {
    console.log(`${area1} square meters is less than ${area/2} (i.e., 50% of garden area available)\
    This means that there is room to plant more plants`);
} else {
    console.log(`monitor`);
}

// week 2
console.log("Week 2")
numberOfWeeks++;
numberOfPlants *= 2;
let area2 = numberOfPlants * minPlantSpace
console.log(`It is the start of week ${numberOfWeeks} and there is ${numberOfPlants} plants that are \
occupying ${area2} square meters.`);

if (area2 >= (area*0.8)) {
    console.log(`prune`)
} else if (area2 <= (area/2)) {
    console.log(`${area2} square meters is less than ${area/2} (i.e., 50% of garden area available)\
    This means that there is room to plant more plants`);
} else {
    console.log(`monitor`)
}

// week 3
console.log("Week 3");
numberOfWeeks++;
numberOfPlants *= 2;

let area3 = numberOfPlants * minPlantSpace
console.log(`It is the start of week ${numberOfWeeks} and there is ${numberOfPlants} plants that are \
occupying ${area3} square meters.`);

if (area3 >= (area*0.8)) {
    console.log(`${area3} square meters is more than ${area * 0.8} (i.e., 80% of garden area available)\
    This means that plants need to be pruned.`)
} else if (area3 <= (area/2)) {
    console.log(`plant`);
} else {
    console.log(`monitor`);
}


//done with a for loop

// let numberOfWeeks = 10 
// let plant; 

// for (let week = 1; week <= numberOfWeeks; week++) {
//     plant = (numberOfPlants *= 2)
//     console.log(`It is week ${week} and there are ${plant} plants in the garden.`);
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

let totalPlants = (100*(2 ** 10))

let areaCoveredByPlants = totalPlants * minPlantSpace

let spaceNeed = areaCoveredByPlants - area

console.log(`To plant 100 plants with no pruning for 10 weeks in the same garden, ${spaceNeed} square meters of additional space
would be needed. This is because, by the end of the ten weeks, we would have ${totalPlants} plants that
would need ${areaCoveredByPlants} square meters of space.`);

//Part 3
// Use try and catch to wrap your work in an error-handling block.
// If the amount of space required to hold the originally provided 
// number of plants exceeds the amount of space available,
// throw a new error and log an appropriate message. 

let areaOccupied = 10
try {
    if (areaOccupied >= (area*0.8)) {
        throw ("Error: There is no space in garden")
    } else if (area2 <= (area/2)) {
        console.log(`${areaOccupied} square meters is less than ${area/2} (i.e., 50% of garden area available).
This means that there is room to plant more plants.`);
    } else {
        console.log(`${areaOccupied} square meters is more than ${area/2} (i.e., 50% of garden area available)
but less than ${area * 0.8} (i.e., 80% of garden area available).
This means that plants need to be monitored.`)
    }
} catch (error) {
    console.log(`${areaOccupied} square meters is more than ${area * 0.8} (i.e., 80% of garden area available)
This means that the plants need to be pruned.`)
}