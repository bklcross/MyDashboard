import React, {useState, useEffect} from 'react';

export default function Timer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timeout = setTimeout(() => {
            let date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, [time]);

    return (
        <div>
            <div>{time}</div>
        </div>
    );
}
