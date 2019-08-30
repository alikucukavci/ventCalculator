//First I compare building type, after match I loop over current rooms. For every current room I loop over previous (experience) rooms. When match is correct I add the specific airflow.
// Accessing building types of Ebuilding

let myAirQuality;
for (let i = 0; i < comfort.airQuality.length; i++) {
    if (home.airQuality === comfort.airQuality[i].name) {
        myAirQuality = comfort.airQuality[i].value;
    }
}
console.log(myAirQuality);

let myPollution;
for (let i = 0; i < comfort.pollution.length; i++) {
    if (home.pollution === comfort.pollution[i].name) {
        myPollution = comfort.pollution[i].value;
    }
}
// console.log(room1.occupants)

for (let i = 0; i < eBuildings.types.length; i++) {
    if (home.type === eBuildings.types[i].type) {
        //accessing rooms for the chosen building
        for (let j = 0; j < eBuildings.types[i].Rooms.length; j++) {
            //comparing ebuildings type with my rooms
            for (let k = 0; k < home.rooms.length; k++) {
                if (home.rooms[k].name === eBuildings.types[i].Rooms[j].name) {
                    home.rooms[k].specificAirflow = eBuildings.types[i].Rooms[j].specificAirflow;
                } else {
                    home.rooms[k].occupantAirflow = (
                        home.rooms[k].area * myPollution +
                        home.rooms[k].occupants * myAirQuality
                    ).toFixed(0);
                    // console.log('nothing again');
                }

                if (home.rooms[k].specificAirflow !== 0) home.rooms[k].occupantAirflow = 0;
            }
        }
    } else {
        // home.rooms[k].occupantAirflow = (home.rooms[k].area *myPollution +home.rooms[k].occupants*myAirQuality).toFixed(0)
        //not matching home types
        // console.log('nothing');
    }
}

if (home.rooms.length > 0) {
    document.body.querySelector('.section').innerHTML += ` 
    <table class="table table is-hoverable is-fullwidth
    ">
        <thead>
          <tr class="tableHead">
                   
          </tr>
        </thead>
        <tbody class="roomRow">
          <tfoot class="roomSum">
            <tr></tr>
        </tfoot>
        </tbody>
      </table>`;
}

const headings = {
    area: 'area (m2)',
    height: 'height (m)',
    occupants: 'occupants (pcs)',
    airExchange: 'airExchange (h-1)',
    occupantAirflow: 'occupantAirflow (l/s)',
    emissionAirflow: 'emissionAirflow (l/s)',
    specificAirflow: 'specificAirflow (l/s)',
    maxAirflow: 'maxAirflow (l/s)'
};

for (let i = 0; i < Object.keys(home.rooms[0]).length; i++) {
    const heading = headings[Object.keys(home.rooms[0])[i]] || Object.keys(home.rooms[0])[i];
    document.body.querySelector('.tableHead').innerHTML += `<th><abbr>${heading}</abbr></th>`;
}
// console.log(Object.keys(room1))
// calculate sum maxAirflow for each room

let rowMaxAirflow = 0;
for (let i = 0; i < home.rooms.length; i++) {
    rowMaxAirflow = Math.max(
        +home.rooms[i].airExchange,
        +home.rooms[i].occupantAirflow,
        +home.rooms[i].emissionAirflow,
        +home.rooms[i].specificAirflow
    );
    // console.log(rowMaxAirflow)
    home.rooms[i].maxAirflow = rowMaxAirflow;
}

for (let i = 0; i < home.rooms.length; i++) {
    document.body.querySelector('.roomRow').innerHTML += `<td><abbr>${home.rooms[i].level}</abbr></td>
    <td><abbr>${home.rooms[i].apartment}</abbr></td>
    <td><abbr>${home.rooms[i].number}</abbr></td>
    <td><abbr>${home.rooms[i].name}</abbr></td>
    <td><abbr>${home.rooms[i].area}</abbr></td>
    <td><abbr>${home.rooms[i].height}</abbr></td>
    <td><abbr>${home.rooms[i].volume}</abbr></td>
    <td><abbr>${home.rooms[i].occupants}</abbr></td>
    <td><abbr>${home.rooms[i].airExchange}</abbr></td>
    <td><abbr>${home.rooms[i].occupantAirflow}</abbr></td>
    <td><abbr>${home.rooms[i].emissionAirflow}</abbr></td>
    <td><abbr>${home.rooms[i].specificAirflow}</abbr></td>
    <td><abbr>${home.rooms[i].maxAirflow}</abbr></td>
    <td><abbr>${home.rooms[i].VEIN}</abbr></td>
    <td><abbr>${home.rooms[i].VEOUT}</abbr></td>
    `;
}

// console.log(document.body.querySelector('.roomSum').innerHTML);
for (let i = 0; i < Object.keys(home.rooms[0]).length; i++) {
    document.body.querySelector('.roomSum tr').innerHTML += `<th><abbr>${''}</abbr></th>`;
}

// Calculate sum area and insert sum with dom
let sumArea = 0;
for (let i = 0; i < home.rooms.length; i++) {
    sumArea += Number(home.rooms[i].area);
}

{
    document.body.querySelector('.roomSum tr :nth-child(5)').innerHTML = `<th><abbr>${sumArea}</abbr></th>`;
}

// Calculate sum occupants and insert sum with dom
let sumOccupants = 0;
for (let i = 0; i < home.rooms.length; i++) {
    sumOccupants += Number(home.rooms[i].occupants);
}

{
    document.body.querySelector('.roomSum tr :nth-child(8)').innerHTML = `<th><abbr>${sumOccupants}</abbr></th>`;
}

// Calculate sum occupantAirflow and insert sum with dom
let sumOccupantAirflow = 0;
for (let i = 0; i < home.rooms.length; i++) {
    sumOccupantAirflow += Number(home.rooms[i].occupantAirflow);
}

{
    document.body.querySelector('.roomSum tr :nth-child(10)').innerHTML = `<th><abbr>${sumOccupantAirflow}</abbr></th>`;
}

// Calculate sum emissionAirflow and insert sum with dom
let sumEmissionAirflow = 0;
for (let i = 0; i < home.rooms.length; i++) {
    sumEmissionAirflow += Number(home.rooms[i].emissionAirflow);
}

{
    document.body.querySelector('.roomSum tr :nth-child(11)').innerHTML = `<th><abbr>${sumEmissionAirflow}</abbr></th>`;
}

// Calculate sum specificAirflow and insert sum with dom
let sumSpecificAirflow = 0;
for (let i = 0; i < home.rooms.length; i++) {
    sumSpecificAirflow += Number(home.rooms[i].specificAirflow);
}

{
    document.body.querySelector('.roomSum tr :nth-child(12)').innerHTML = `<th><abbr>${sumSpecificAirflow}</abbr></th>`;
}

// Calculate sum maxAirflow and insert sum with dom
let sumMaxAirflow = 0;
for (let i = 0; i < home.rooms.length; i++) {
    sumMaxAirflow += Number(home.rooms[i].maxAirflow);
}

{
    document.body.querySelector('.roomSum tr :nth-child(13)').innerHTML = `<th><abbr>${sumMaxAirflow}</abbr></th>`;
}


//Sorting numbers before creating graph
let homeRoomsSortedArea = home.rooms.slice().sort((a,b)=>b.area - a.area)
console.log(homeRoomsSortedArea)

let homeRoomsSortedmaxAirflow = home.rooms.slice().sort((a,b)=>b.maxAirflow - a.maxAirflow)
console.log(homeRoomsSortedmaxAirflow)


let newArrArea = [];
for (let i = 0; i < home.rooms.length; i++) {
    newArrArea.push(homeRoomsSortedArea[i].area);
}

let maxAirFlowData = [];
for (let i = 0; i < home.rooms.length; i++) {
    maxAirFlowData.push(homeRoomsSortedmaxAirflow[i].maxAirflow);
}

let newArrNameArea = [];
for (let i = 0; i < home.rooms.length; i++) {
    newArrNameArea.push(homeRoomsSortedArea[i].name);
}

let newArrNamemaxAirflow = [];
for (let i = 0; i < home.rooms.length; i++) {
    newArrNamemaxAirflow.push(homeRoomsSortedmaxAirflow[i].name);
}



// Giving each room dataset a color
function getRandomColor(n) {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    var colors = [];
    for (var j = 0; j < n; j++) {
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        colors.push(color);
        color = '#';
    }
    return colors;
}

let roomColors = getRandomColor(home.rooms.length);

//Creating my chart empty
var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = "#777";


var myChart = new Chart(ctx, undefined);


drawChart(undefined);

//Onchange give me the graph
function changeChart(string) {
    switch (string) {
        case 'maxAirFlowData':
            drawChart(newArrNamemaxAirflow, maxAirFlowData);
            break;
        case 'newArrArea':
            drawChart(newArrNameArea, newArrArea);
            break;
        default:
            drawChart(undefined);
    }
}

//Function that creates my graph
function drawChart(label, data) {
    // console.log(data)
    
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [
                {
                    label: "Hello",
                    data: data,
                    backgroundColor: roomColors,
                    borderColor: "#777",
                    borderWidth: 1,
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000",
                }]
        },
        options: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Airflow and area distribution",
                fontSize: 20,
            },
            tooltips: {
               enabled:true 
            },

            scales: {
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: "Value",
            
                        },
                        ticks: {
                            beginAtZero: true,

                        }
                    }
                ],
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: "Name",
            
                        },
                        ticks: {
                            beginAtZero: true,

                        }
                    }
                ]
            }
        }
    });
}

