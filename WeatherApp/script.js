
const API_KEY="847b3bf34954dc617afab3c388f2dd05";

    document.getElementById("icon").src =
`https://openweathermap.org/img/wn/04d@2x.png`;


document.getElementById("searchBtn").addEventListener("click",async ()=>{
    let city=document.getElementById("city").value;
    document.getElementById("p").innerHTML="";
    document.getElementById("p").innerHTML = "";

    if(!city){
        document.getElementById("p").innerHTML="Type Valid City"
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let details = await fetch(url)
    let data=await details.json();

    if (data.cod != 200) {
    document.getElementById("p").innerHTML = "City not found!";
    return;
}



    document.getElementById("icon").src =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    // console.log(data);
document.getElementById("cityName").innerHTML=data.name;
document.getElementById("temperature").innerHTML=data.main.temp;
document.getElementById("condition").innerHTML=data.weather[0].description;
document.getElementById("humidity").innerHTML=data.main.humidity+"%";
document.getElementById("wind").innerHTML=data.wind.speed+"km/h";
document.getElementById("feelsLike").innerHTML=data.main.feels_like+"°C";
document.getElementById("country").innerHTML=data.sys.country;

})