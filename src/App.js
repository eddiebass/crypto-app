import "./App.css";
import Nav from "./component/Nav";
import Coin from "./component/Coin";
import Footer from "./component/Footer";
import "./styles.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Nav />
				<Coin />
				<Footer />
			</header>
		</div>
	);
}

export default App;
