import React, {useState, useEffect} from 'react';

export default function GoogleNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const key = '194df6fe3029433199fb23076cbe2d5c';
        const url = `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${key}`;
        fetch(url, {
            method: 'GET'
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setNews(data.articles);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>Latest News</h1>
            {news.map(article => (
                <h2 key={article.title}>{article.title}</h2>
            ))}
        </div>
    );
}
