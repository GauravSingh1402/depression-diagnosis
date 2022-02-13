import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Survey from "./components/survey";
import Quotes from "./components/Quotes";
import Help from "./components/Selfhelp";
function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/survey" element={<Survey />} />
					<Route path="/quotes" element={<Quotes />} />
					<Route path="/help" element={<Help />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
