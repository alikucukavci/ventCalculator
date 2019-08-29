// Building constructor
class Building {
    constructor(name, type, level, airQuality, pollution) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.airQuality = airQuality;
        this.pollution = pollution;
        this.rooms = [];
    }
}

//instantiate a building
const home = new Building('Home', 'duplexHouse', '2', "A", "lowPollution");

console.log(home);
let Rooms = [];

//Room constructor
class Room {
    constructor(
        level,
        apartment,
        number,
        name,
        area,
        height,
        volume,
        occupants,
        airExchange,
        occupantAirflow,
        emissionAirflow,
        specificAirflow,
        maxAirflow,
        VEIN,
        VEOUT
    ) {
        this.level = level;
        this.apartment = apartment;
        this.number = number;
        this.name = name;
        this.area = area;
        this.height = height;
        this.volume = volume;
        this.occupants = occupants;
        this.airExchange = airExchange;
        this.occupantAirflow = occupantAirflow;
        this.emissionAirflow = emissionAirflow;
        this.specificAirflow = specificAirflow;
        this.maxAirflow = maxAirflow;
        this.VEIN = VEIN;
        this.VEOUT = VEOUT;
    }
}

//instantiate a room
const room1 = new Room(1, 1, 'B101', 'Foyer', 7.9, 2.6, 20.5, 1, 2, 3, 4, 5, 0, 1, 1);

const room2 = new Room(1, 1, 'B102', 'Living Room', 30, 2.6, 78, 0, 0, 0, 0, 2, 0, 1, 1);

const room3 = new Room(1, 1, 'B103', 'Kitchen', 14, 2.6, 36.4, 0, 0, 0, 0, 3, 0, 1, 1);

const room4 = new Room(1, 1, 'B104', 'WC', 3, 2.6, 7.8, 0, 0, 0, 0, 0, 0, 1, 1);

const room5 = new Room(2, 1, 'B203', 'Bedroom 2', 26, 2.6, 67.6, 2, 0, 0, 0, 0, 0, 1, 1);

const room6 = new Room(2, 1, 'B201', 'Hallway', 7.8, 2.6, 20.3, 0, 0, 0, 0, 0, 0, 1, 1);

const room7 = new Room(2, 1, 'B204', 'Bathroom 2', 5, 2.6, 13, 0, 0, 0, 0, 0, 0, 1, 1);

const room8 = new Room(2, 1, 'B205', 'Utility', 2, 2.6, 5.2, 0, 0, 0, 0, 0, 0, 1, 1);

const room9 = new Room(2, 1, 'B202', 'Bedroom 1', 26, 2.6, 67.6, 10, 0, 0, 0, 0, 0, 1, 1);

const room10 = new Room(1, 2, 'B101', 'Foyer', 17.9, 2.6, 20.5, 0, 0, 0, 5, 0, 0, 1, 1);

const room11 = new Room(1, 2, 'B102', 'Living Room', 30, 2.6, 78, 4, 0, 0, 0, 0, 0, 1, 1);

const room12 = new Room(1, 2, 'B103', 'Kitchen', 14, 2.6, 36.4, 0, 0, 0, 0, 0, 0, 1, 1);

const room13 = new Room(1, 2, 'B104', 'WC', 3, 2.6, 7.8, 0, 0, 0, 0, 0, 0, 1, 1);

const room14 = new Room(2, 2, 'B203', 'Bedroom 2', 26, 2.6, 67.6, 2, 0, 0, 0, 0, 0, 1, 1);

const room15 = new Room(2, 2, 'B201', 'Hallway', 7.8, 2.6, 20.3, 0, 0, 0, 0, 0, 0, 1, 1);

const room16 = new Room(2, 2, 'B204', 'Bathroom 2', 5, 2.6, 13, 0, 0, 0, 0, 0, 0, 1, 1);

const room17 = new Room(2, 2, 'B205', 'Utility', 2, 2.6, 5.2, 0, 0, 0, 0, 0, 0, 1, 1);

const room18 = new Room(2, 2, 'B202', 'Bedroom 1', 26, 2.6, 67.6, 2, 0, 0, 0, 0, 30, 1, 1);

home.rooms.push(
    room1,
    room2,
    room3,
    room4,
    room5,
    room6,
    room7,
    room8,
    room9,
    room10,
    room11,
    room12,
    room13,
    room14,
    room15,
    room16,
    room17,
    room18
);

let buildings = [];
buildings.push(home);
console.log(home.rooms);


