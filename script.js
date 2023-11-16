const PI = 3.1415; 
const radius = 5
const area = PI * radius * radius; 
const minPlantSpace = 0.8

// week 1
let numberOfPlants = 20;
let numberOfWeeks = 1;
let area1 = numberOfPlants * minPlantSpace
if (area1 > (area * 0.8)) {
    console.log("Plants need to be pruned.");
} else {
    if (area1 => (area/2) && area1 <= (area * 0.8)) {
        console.log("Plants need to be monitored.");
    } else {
        console.log("There is room for more plants.");
    }
    
}

// week 2
numberOfWeeks++;
numberOfPlants *= 2;
console.log(numberOfPlants);
let area2 = numberOfPlants * minPlantSpace
if (area2 > (area * 0.8)) {
    console.log("Plants need to be pruned.");
} else {
    if (area2 => (area/2) && area2 <= (area * 0.8)) {
        console.log("Plants need to be monitored.");
    } else {
        console.log("There is room for more plants.");
    }
    
}

//week 3
numberOfWeeks++;
numberOfPlants *= 2;
console.log(numberOfPlants);
let area3 = numberOfPlants * minPlantSpace
if (area3 > (area * 0.8)) {
    console.log("Plants need to be pruned.");
} else {
    if (area3 => (area/2) && area3 <= (area * 0.8)) {
        console.log("Plants need to be monitored.");
    } else {
        console.log("There is room for more plants.");
    }
    
}


// let n = numberOfWeeks
// for (let week = 1; week <= numberOfWeeks; week++) {
//     console.log(numberOfPlants *= 2);
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