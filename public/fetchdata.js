let temp = document.getElementById("temperature");
let humid = document.getElementById("humidity");
let gas = document.getElementById("gas_concentration");
let alert = document.getElementById("alert");
let preousTime = "0";

function getData() {

    // https://dummyjson.com/products/2
    let data = fetch('http://localhost:3000/api/sensordata/');
    data.then((val) => {
        return val.json();
    }).then((val) => {
        if (preousTime !== (val.dbData[0].createdAt.split('T')[1]) ) {
            temp.textContent = val.dbData[0].temperature;
            humid.textContent = val.dbData[0].temperature;
            gas.textContent = val.dbData[0].gasreading;
            preousTime = val.dbData[0].createdAt.split('T')[1];
            alert.textContent = "Space for alert";
        }
        else{
            alert.textContent = "Device is dissconnected";
            alert.style.color = "red"
            alert.style.fontSize = "20px"
        }
    })



}
setInterval(getData, 1100); //for execution 

