import React, { useState, useEffect } from "react";
export default function Weather() {
	const [weather, setWeather] = useState("weather not found");
	//const [city, setCity] = "San Diego";
	useEffect(() => {
		const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=223877617654ecd60464a18de4c191dc`;
		fetch(url, {
			method: "GET",
		})
			.then(res => {
				return res.json();
			})
			.then(currentWeather => {
				console.log("Weather is: ",currentWeather.weather[0].icon);
				let renderedWeather = [
					currentWeather.main.temp, 
					currentWeather.weather[0].icon,
					currentWeather.name
				]
					
					
					//location: currentWeather.name
				setWeather(renderedWeather);
				//console.log('data:', data.articles);
				//console.log('news:', news);
			})
			.catch(err => {
				//console.log(err);
			});
		}, []);
	
	return (
		<div className="section">
			<h1>{weather[0]}</h1>
			<h1>{weather[1]}</h1>
            <h1>{weather[2]}</h1>
		</div>
	);
};
