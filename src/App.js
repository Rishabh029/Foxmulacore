// import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./Main/Attendence";
import LeftSection from "./Main/Details";
import BottomSection from "./Main/BottomSection";
const App = () => {
	return (
		<div>
			<LeftSection />
			<MainComponent />
			<BottomSection />
		</div>
	);
};

export default App;
