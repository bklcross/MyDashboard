import React, { useState, useEffect } from "react";
export default function Quote() {
    const [quotes, setQuote] = useState([]);
    useEffect(() => {
        fetch("http://quotes.rest/qod.json", {
            "method": "GET"
        })
    .then(res => {
        return res.json()
    })
    .then(response => {
        // console.log(response);
        setQuote(response.contents.quotes[0].quote);
        // console.log(response.contents.quotes[0].quote);
    })
    .catch(err => {
        console.log(err);
    });
    }, []);
    return (
        <div>
            <h1>Quote: {quotes} </h1>
        </div>
    );
};
