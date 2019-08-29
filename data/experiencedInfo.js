

// eBuildings.types.push(Office);
// console.log(eBuildings);

let Office = {
     type: "Office",
    Rooms: [
        { name: 'WC', specificAirflow: 15 },
        { name: 'Kitchen', specificAirflow: 30 },
        { name: 'Utility', specificAirflow: 5 }
    ]
};

let Hospital = {
     type: "Hospital",
     Rooms: [
         { name: 'WC', specificAirflow: 20 },
         { name: 'Kitchen', specificAirflow: 40 },
         { name: 'Utility', specificAirflow: 10 }
     ]
};
 

let duplexHouse = {
     type: "duplexHouse",
     Rooms: [
         { name: 'WC', specificAirflow: 15 },
         { name: 'Kitchen', specificAirflow: 30 },
         { name: 'Utility', specificAirflow: 10 }
     ]
};
 
let eBuildings = {
     types: [Office , Hospital, duplexHouse ]
 };


console.log(eBuildings)