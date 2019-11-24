import React, { useState, useEffect } from "react";

export default function GoogleNews() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		const key = "358c4d8b64c74e118f4b22422ad987e5";
		const url = `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${key}`;
		fetch(url, {
			method: "GET",
		})
			.then(res => {
				return res.json()
			})
			.then(data => {
				setNews(data.articles);
				//console.log('data:', data.articles);
				//console.log('news:', news);
			})
			.catch(err => {
				//console.log(err);
			});
	}, []);
	//console.log('news1:', news);
	return (
		<div>
			<h1>Latest News</h1>
			{news.map(article => (
				<h2 key={article.title}>{article.title}</h2>
			))}
		</div>
	);
};
