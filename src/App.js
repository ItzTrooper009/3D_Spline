// import logo from "./logo.svg";
import "./App.css";
import Tshirt from "./Components_3D/Common";

function App() {
  const Elements = {
    tshirt: "https://prod.spline.design/MnoUdOJDuIparvgb/scene.splinecode",
    car: "https://prod.spline.design/ci3-6m4MSteJ0Svu/scene.splinecode",
    robo_4_leg: "https://prod.spline.design/y-0N6X8CBtYwB7p5/scene.splinecode",
    hand: "https://prod.spline.design/TngVTOyjKeQlEChn/scene.splinecode",
    miniHouse: "https://prod.spline.design/IYb-E3KmepHteXCP/scene.splinecode",
    bike: "https://prod.spline.design/Mizutl9vczQqgl0A/scene.splinecode",
  };

  return (
    <div className="App">
      <header className="App-header">
        <Tshirt url={Elements.tshirt} />
      </header>
    </div>
  );
}

export default App;
