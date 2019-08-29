//First I compare building type, after match I loop over current rooms. For every current room I loop over previous (experience) rooms. When match is correct I add the specific airflow.
// Accessing building types of Ebuilding

let myAirQuality
for (let i = 0; i < comfort.airQuality.length; i++){
    if (home.airQuality === comfort.airQuality[i].name){
        myAirQuality = comfort.airQuality[i].value;
    }  
}
console.log(myAirQuality)

let myPollution
for (let i = 0; i < comfort.pollution.length; i++){
    if (home.pollution === comfort.pollution[i].name){
        myPollution = comfort.pollution[i].value;
    }  
}
console.log(room1.occupants)



for (let i = 0; i < eBuildings.types.length; i++) {
    if (home.type === eBuildings.types[i].type) {
        //accessing rooms for the chosen building
        for (let j = 0; j < eBuildings.types[i].Rooms.length; j++) {
            //comparing ebuildings type with my rooms
            for (let k = 0; k < home.rooms.length; k++) {
                if (home.rooms[k].name === eBuildings.types[i].Rooms[j].name) {
                    home.rooms[k].specificAirflow = eBuildings.types[i].Rooms[j].specificAirflow;
                } else {
                    home.rooms[k].occupantAirflow = (home.rooms[k].area *myPollution +home.rooms[k].occupants*myAirQuality).toFixed(0)
                    console.log('nothing again');
                }

                if (home.rooms[k].specificAirflow !== 0) home.rooms[k].occupantAirflow = 0;
            }
        }
    } else {

        // home.rooms[k].occupantAirflow = (home.rooms[k].area *myPollution +home.rooms[k].occupants*myAirQuality).toFixed(0)
        //not matching home types
        console.log('nothing');
    }
}

if (home.rooms.length > 0) {
    document.body.querySelector('.section').innerHTML +=` 
    <table class="table">
        <thead>
          <tr class="tableHead">
                   
          </tr>
        </thead>
        <tbody class="roomRow">
          <tfoot class="roomSum">
            <tr></tr>
        </tfoot>
        </tbody>
      </table>`
}

const headings = {
    area: "area (m2)",
    height: "height (m)",
    occupants: "occupants (pcs)",
    airExchange: "airExchange (h-1)",
    occupantAirflow: "occupantAirflow (l/s)",
    emissionAirflow: "emissionAirflow (l/s)",
    specificAirflow: "specificAirflow (l/s)",
    maxAirflow: "maxAirflow (l/s)"


}

for (let i = 0; i < Object.keys(room1).length; i++) {
    const heading = headings[Object.keys(room1)[i]] || Object.keys(room1)[i]
    document.body.querySelector('.tableHead').innerHTML += `<th><abbr>${heading}</abbr></th>`;
}
console.log(Object.keys(room1))
// calculate sum maxAirflow for each room

let rowMaxAirflow = 0;
for (let i = 0; i < home.rooms.length; i++) {
    rowMaxAirflow = Math.max(
            +home.rooms[i].airExchange,
            +home.rooms[i].occupantAirflow,
            +home.rooms[i].emissionAirflow,
            +home.rooms[i].specificAirflow
    );
    console.log(rowMaxAirflow)
    home.rooms[i].maxAirflow = rowMaxAirflow 
    }
    




for (let i = 0; i < home.rooms.length; i++) {
    document.body.querySelector('.roomRow').innerHTML += `<th><abbr>${home.rooms[i].level}</abbr></th>
    <th><abbr>${home.rooms[i].apartment}</abbr></th>
    <th><abbr>${home.rooms[i].number}</abbr></th>
    <th><abbr>${home.rooms[i].name}</abbr></th>
    <th><abbr>${home.rooms[i].area}</abbr></th>
    <th><abbr>${home.rooms[i].height}</abbr></th>
    <th><abbr>${home.rooms[i].volume}</abbr></th>
    <th><abbr>${home.rooms[i].occupants}</abbr></th>
    <th><abbr>${home.rooms[i].airExchange}</abbr></th>
    <th><abbr>${home.rooms[i].occupantAirflow}</abbr></th>
    <th><abbr>${home.rooms[i].emissionAirflow}</abbr></th>
    <th><abbr>${home.rooms[i].specificAirflow}</abbr></th>
    <th><abbr>${home.rooms[i].maxAirflow}</abbr></th>
    <th><abbr>${home.rooms[i].VEIN}</abbr></th>
    <th><abbr>${home.rooms[i].VEOUT}</abbr></th>
    `;
}

console.log(document.body.querySelector('.roomSum').innerHTML);
for (let i = 0; i < Object.keys(room1).length; i++) {
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

let newArrArea = [];
for (let i = 0; i < home.rooms.length; i++) {
    newArrArea.push(home.rooms[i].area)
}

let maxAirFlowData = [];
for (let i = 0; i < home.rooms.length; i++) {
    maxAirFlowData.push(home.rooms[i].maxAirflow)
}


let newArrName = [];
for (let i = 0; i < home.rooms.length; i++) {
    newArrName.push(home.rooms[i].name)
}

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx,undefined)

drawChart(undefined)

function changeChart(string) {
    switch (string) {
        case "maxAirFlowData":
            drawChart(maxAirFlowData)
            break;
        case "newArrArea":
            drawChart(newArrArea)
            break;
        default:
            drawChart(undefined)
    }
}




function drawChart(data) {
    console.log(data)
    myChart.destroy()
     myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: newArrName,
        datasets: [{
            label: 'maxAirflow (l/s)',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}
