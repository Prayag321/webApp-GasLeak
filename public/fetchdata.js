let temp = document.getElementById("temperature");
let humid = document.getElementById("humidity");
let gas = document.getElementById("gas_concentration");
let alert = document.getElementById("alert");
let preousTime = "0";
let knobstatus = document.getElementById("motor_s");

const currentIP = window.location.hostname;
// Define the base URL for the fetch request
const baseUrl = (currentIP === 'localhost' || currentIP === '127.0.0.1') ? 'http://localhost:3000' : 'https://your-other-api-url';
// Append the endpoint to the base URL
const apiUrl = `${baseUrl}/api/sensordata/`;

function getData() {
    // https://dummyjson.com/products/2    test api
    // 7veY3rCXY872zflm  atlas pass
    // preousTime !== (val.dbData[0].createdAt.split('T')[1])
    let data = fetch(apiUrl);
    data.then((val) => {
        return val.json();
    }).then((val) => {
        if (true) { 
            temp.textContent = val.dbData[0].temperature;
            humid.textContent = val.dbData[0].humidity;
            gas.textContent = val.dbData[0].gasreading;
            knobstatus.textContent = val.dbData[0].nobstatus;
            preousTime = val.dbData[0].createdAt.split('T')[1];
            alert.textContent = "Space for alert";

        }
        else {
            alert.textContent = "Device is dissconnected";
            alert.style.color = "red"
            alert.style.fontSize = "20px"
            alert.style.display = "flex"

        }
    })
    .catch(error => {
    console.error('Error fetching data:', error)
    alert.textContent = "Error fetching data";
    alert.style.color = "red"
    alert.style.fontSize = "20px"
    alert.style.display = "flex"
});



}
setInterval(getData, 1100); //for execution 

