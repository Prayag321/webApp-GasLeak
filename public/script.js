function getData() {
    let temp = document.getElementById("temperature")
    let data = fetch('https://dummyjson.com/products/2');
    data.then((val) => {
        return val.json();
    }).then((val) => {
            temp.textContent = val.title;
            console.log(val.title);
    })

}
// setInterval(getData,1000); //for execution 