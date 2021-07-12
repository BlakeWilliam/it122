let trails = [
    { trailName : "Burroughs Mountain Loop", park: 'Mt Rainier National Park', city : 'Paradise Inn', state : 'WA', length : '9.7 miles', elevation_gain : '2595 feet'  },
    { trailName : "Mount Storm King", park: 'Olympic National Park', city : 'Port Angeles', state : 'WA', length : '5.3 miles', elevation_gain : '2076 feet'  },
    { trailName : "Lake Serene", park: 'Mount Baker Snoqualmie National Forest', city : 'Gold Bar', state : 'WA', length : '8.7 miles', elevation_gain : '2798 feet'  },
    { trailName : "Trap Lake", park: 'Alpine Lakes Wilderness', city : 'Leavenworth', state : 'WA', length : '8.8 miles', elevation_gain : '3070 feet'  },
    { trailName : "Gem Lake", park: 'Mount Baker Snoqualmie National Forest', city : 'Snoqualmie', state : 'WA', length : '11 miles', elevation_gain : '2670 feet'  }
];

// console.log(trails)


// This will return all trails in the array - WORKS!
// console.log('Running .forEach')
// trails.forEach((trail) => {
//     console.log(trail)
// });

// this doesn't work - not sure how to format
console.log('get all trails function')
const getAll = () => {
    trails.forEach((trail) => {
        console.log(trail)
    });
}

//create const to export # of trails - when I use this to route the / path with stringify, it works.
// const getAll = () => {
//     return trails.length;
// }
// console.log (getAll())


// this only returns the trail in the array that we specify
// console.log('Running Search with .find')
// let found = trails.find((trail) => {
//     return trail.trailName === 'Lake Serene';
// });
// console.log(found);

// create const to export specific trail
const getItem = (name) => {
    return trails.find((trail) => {
        return trail.trailName === name;
    });
}
// console.log(getItem('Gem Lake'));

// export function
export { getAll, getItem }