import './App.css';
import StyledComponent from './StyledComponent';
import Button1 from './components/Button1';
import Button2 from './components/Button2';

function App() {
	return (
		<div className="App">
			<Button1></Button1>
			<Button2></Button2>
			<StyledComponent></StyledComponent>
			<div>
				<h1 className="text-8xl">안녕</h1>
				<button className="bg-blue-500 rounded-xl px-2">버튼</button>
			</div>
		</div>
	);
}

export default App;
