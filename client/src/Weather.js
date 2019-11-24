import React, { useState, useEffect } from "react";
import Request from 'request';

export default function Weather() {
	const [weather, setWeather] = useState('weather not founds');

	var options = {
		method: 'GET',
		url: 'https://weather-ydn-yql.media.yahoo.com/forecastrss',
		qs:
		{
			location: 'sunnyvale,ca',
			format: 'json',
			oauth_consumer_key: 'dj0yJmk9U0lLWU1tUzM1VTZ0JmQ9WVdrOVJFOUlkR0l3TkhNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTJi',
			oauth_signature_method: 'HMAC-SHA1',
			oauth_timestamp: '1572729941',
			oauth_nonce: 'WhhBcBUbmSr',
			oauth_version: '1.0',
			oauth_signature: 'P8CutBzpslCvxIn8FAwEymRzjGE='
		},
		headers:
		{
			'cache-control': 'no-cache',
			Connection: 'keep-alive',
			'Accept-Encoding': 'gzip, deflate',
			Host: 'weather-ydn-yql.media.yahoo.com',
			'Postman-Token': 'c24a93b2-b69a-44df-baed-ac31c52ee8a6,e7b5a331-d0b4-4c14-a9ef-fe8792d4f104',
			'Cache-Control': 'no-cache',
			Accept: '*/*',
			'User-Agent': 'PostmanRuntime/7.19.0'
		}
	};

	useEffect(() => {
		Request(options, function (error, response, body) {
			if (error) throw new Error(error);
			console.log(body);
		});
	}, []);

	return (
		<div className="section">
			<h1>{weather}</h1>
		</div>
	);
};
