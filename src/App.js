import "./App.css";
import Nav from "./component/Nav";
import Coin from "./component/Coin";
import "./styles.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Nav />
				<Coin />
			</header>
		</div>
	);
}

export default App;
