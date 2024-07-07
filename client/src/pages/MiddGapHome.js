import React, { useState } from "react";
import Map from '../components/Map';

const api = {
    key: '<INSERT OpenWeather API KEY HERE>',
    base: 'https://api.openweathermap.org/data/2.5/',
}

const MGHome = () => {

    // const [search, setSearch] = useState("");
    const [forecast, setForecast] = useState({});

    const searchPressed = () => {
        fetch(`${api.base}forecast?q=Middlebury&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then((result) => {
            setForecast(result);
        });
    }

    return (
        <div class="mghome">
            <div className="left-column">
                <br />
                <h1>Come Boulder at Midd Gap!</h1>
            </div>
            <div className="left-column">
                <br />
                <p>A bouldering area that blends the best elements of both descriptions: It's a serene enclave surrounded by a canopy of trees and natural rock formations, featuring a multitude of climbs on high-quality, textured rocks. These rocks are known for their excellent friction, facilitating a range of cool, intricate moves from dynamic leaps to delicate balancing acts, including crimpy and balance-focused challenges. A steeper hill leads climbers to this secluded spot, adding an adventurous approach. This idyllic spot is perfect for those seeking a peaceful yet challenging climbing experience, offering an escape into nature where each climb brings its own unique test of skill and endurance.</p>
                <br />
            </div>
            <div className="right-column">
                <br />
                {typeof forecast.list !== "undefined" ? (
                    <div>
                        <p>Temperature: {forecast.list[0].main.temp}ºF</p>
                        <p>Conditions: {forecast.list[0].weather[0].description}</p>
                    </div>
                ) : (
                    ""
                )}
                <div>
                    {/* <input type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)}/> */}
                    <button onClick={searchPressed} class="weather-btn">Midd Gap Weather Forecast</button>
                </div>
            </div>
            <div className="left-column">
                <div className="directions">
                    <div className="map">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MGHome;