var arryData = []
async function getData(x) {

    var data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${x}&days=3`);
    var finelData = await data.json();
    arryData = finelData;
    showData();
    
}



function showData(){
    cartona = ``;
        cartona += `<div class="col-lg-4 rounded-start-3 p-0 moo">
        <div class="moo2 d-flex justify-content-between p-2 px-2">
        <small class="text-secondary">Wednesday</small>
        <small class="text-secondary">27March</small>
        </div>
        <div class="p-4">
        <p class="text-secondary h5 p-2 ms-2">${arryData.location.name}</p>
        <h1 class=" fw-bold text-white py-0">${arryData.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>C <sub><img src="https:${arryData.forecast.forecastday[0].day.condition.icon}" width="30%" alt=""></sub></h1>
        <p class="text-primary m-0">${arryData.forecast.forecastday[0].day.condition.text}</p>
        <span class="me-4"><img src="Image/icon-umberella.png" alt=""><small class="ms-2 text-secondary">20%</small></span>
        <span class="me-4"><img src="Image/icon-wind.png" alt=""><small class="ms-2 text-secondary">18km/h</small></span>
        <span class="me-4"><img src="Image/icon-compass.png" alt=""><small class="ms-2 text-secondary">East</small></span>
        </div>
    </div>
    <div class="col-lg-4 soo2 p-0 ">
        <div class="soo d-flex justify-content-center p-2 px-2">
        <small class="text-secondary">Thursday</small>
        </div>
        <div class="p-4 text-center">
        <img src="https:${arryData.forecast.forecastday[1].day.condition.icon}" alt="">
        <p class="h4 fw-bold text-white px-2">${arryData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
        <p class="h6 text-secondary">${arryData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></p>
        <p class="text-primary mt-4">${arryData.forecast.forecastday[1].day.condition.text}</p>
        </div>
    </div>
    <div class="col-lg-4 rounded-end-3 p-0 moo">
        <div class="moo2 d-flex justify-content-center p-2 px-2">
        <small class="text-secondary">Thursday</small>
        </div>
        <div class="p-4 text-center">
        <img src="https:${arryData.forecast.forecastday[2].day.condition.icon}" alt="">
        <p class="h4 fw-bold text-white px-2">${arryData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
        <p class="h6 text-secondary">${arryData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></p>
        <p class="text-primary mt-4">${arryData.forecast.forecastday[2].day.condition.text}</p>
        </div>
    </div>` 

    document.getElementById("rowData").innerHTML=cartona;
}












































// async function search(a) {
//     let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);
//     if (t.ok && 400 != t.status) { let a = await t.json(); 
//         displayCurrent(a.location, a.current), displayAnother(a.forecast.forecastday) }
// } document.getElementById("search").addEventListener("keyup", a => { search(a.target.value) });
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// function displayCurrent(a, t) {
//     if (null != t) {
//         var e = new Date(t.last_updated.replace(" ", "T")); let n = `<div class="today forecast">\n    <div class="forecast-header"  id="today">\n    <div class="day">${days[e.getDay()]}</div>\n    <div class=" date">${e.getDate() + monthNames[e.getMonth()]}</div>\n    </div> \x3c!-- .forecast-header --\x3e\n    <div class="forecast-content" id="current">\n    <div class="location">${a.name}</div>\n    <div class="degree">\n        <div class="num">${t.temp_c}<sup>o</sup>C</div>\n      \n        <div class="forecast-icon">\n            <img src="https:${t.condition.icon}" alt="" width=90>\n        </div>\t\n    \n    </div>\n    <div class="custom">${t.condition.text}</div>\n    <span><img src="images/icon-umberella.png" alt="">20%</span>\n\t\t\t\t\t\t\t\t<span><img src="images/icon-wind.png" alt="">18km/h</span>\n\t\t\t\t\t\t\t\t<span><img src="images/icon-compass.png" alt="">East</span>\n    </div>\n</div>`;
//         document.getElementById("forecast").innerHTML = n
//     }
// }
// function displayAnother(a) {
//     let t = ""; 
//     for (let e = 1; e < a.length; e++)
//     t += `\t<div class="forecast">\n        <div class="forecast-header">\n            <div class="day">${days[new Date(a[e].date.replace(" ", "T")).getDay()]}</div>\n        </div> \x3c!-- .forecast-header --\x3e\n        <div class="forecast-content">\n            <div class="forecast-icon">\n                <img src="https:${a[e].day.condition.icon}" alt="" width=48>\n            </div>\n            <div class="degree">${a[e].day.maxtemp_c}<sup>o</sup>C</div>\n            <small>${a[e].day.mintemp_c}<sup>o</sup></small>\n            <div class="custom">${a[e].day.condition.text}</div>\n        </div>\n        </div>`;
//     document.getElementById("forecast").innerHTML += t
// } 
// search("cairo");