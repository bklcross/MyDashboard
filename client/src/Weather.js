import React, { useState, useEffect } from "react";
export default function Weather() {
	const [weather, setWeather] = useState("weather not founds");
	//const [city, setCity] = "San Diego";
	useEffect(() => {
		const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=223877617654ecd60464a18de4c191dc`;
		fetch(url)
		  .then(response => console.log(response.json()));
	})
	return (
		<div className="section">
			<h1>{weather}</h1>
		</div>
	);
};