import React, { useState, useRef, useEffect } from "react";

export default function Timer() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const timePassed = useRef(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			const date = new Date()
			timePassed.current = timePassed.current + 1;
			setTime(date.toLocaleTimeString());
		}, 1000);
		return () => {
			clearTimeout(timeout);
		}
	}, [time]);

	return (
		<div>
			<div>{time}</div>
		</div>
	)
}
