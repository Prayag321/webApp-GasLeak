let temp = document.getElementById("temperature");
let humid = document.getElementById("humidity");
let gas = document.getElementById("gas_concentration");
let alert = document.getElementById("alert");
let preousTime = "";
let knobstatus = document.getElementById("motor_s");

const currentIP = window.location.hostname;
// Define the base URL for the fetch request
const baseUrl = (currentIP === 'localhost' || currentIP === '127.0.0.1') ? 'http://localhost:3000' : 'https://nodeserver-gasleak-production.up.railway.app';
// Append the endpoint to the base URL
const apiUrl = `${baseUrl}/api/sensordata/`;

function getData() {
    // https://dummyjson.com/products/2    test api
    // 7veY3rCXY872zflm  atlas pass
    // preousTime !== (val.dbData[0].createdAt.split('T')[1])  not working cause seconds nay he
    let data = fetch(apiUrl);
    data.then((val) => {
        return val.json();
    }).then((val) => {
        if (true) { 
            // console.log(`${val.dbData[0].createdAt.split('T')[0]}`);
            temp.textContent = val.dbData[0].temperature;
            humid.textContent = val.dbData[0].humidity;
            gas.textContent = val.dbData[0].gasreading;
            // preousTime = val.dbData[0].createdAt.split('T')[0];
            preousTime = val.dbData[0].createdAt;
            if (val.dbData[0].nobstatus == 1) {
                knobstatus.textContent = "OFF";  
            }
            else{
                knobstatus.textContent = "ON";
            }
            if (val.dbData[0].gasreading > 500) {
                alert.style.display = "flex"
                alert.textContent = "Gas is detected!";
                alert.style.color = "red"
                alert.style.fontSize = "20px"
            } else {
                alert.textContent = "";
            }
            // alert.textContent = "";

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
    alert.style.display = "flex"
    alert.textContent = `Server is not connected`;
    alert.style.color = "red"
    alert.style.fontSize = "20px"
});



}
setInterval(getData, 1100); //for execution 

