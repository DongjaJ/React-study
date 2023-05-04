import React, { useState } from 'react';

export default function Counter({ total, setTotal }) {
	const [number, setNumber] = useState(0);
	return (
		<div className="counter">
			<p className="number">
				{number} <span className="total">/{total} </span>
			</p>
			<button
				className="button"
				onClick={() => {
					setNumber((prev) => prev + 1);
					setTotal((prev) => prev + 1);
				}}>
				Add +
			</button>
		</div>
	);
}
