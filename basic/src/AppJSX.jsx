import './App.css';

function AppJSX() {
	const name = 'dongja';
	const list = ['우유', '딸기', '바나나', '요거트'];
	return (
		<>
			<h1 className="orange">{`Hello! ${name}`}</h1>
			<h2>Hello!</h2>
			<p>{name}</p>
			<ul>
				{list.map((item) => (
					<li>{item}</li>
				))}
			</ul>
			<img
				style={{ width: '200px', height: '200px' }}
				src="https://images.unsplash.com/photo-1682250705830-11c1cecbd3ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1200&q=60"
				alt="nature"></img>
		</>
	);
}

export default AppJSX;
