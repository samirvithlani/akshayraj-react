import logo from "./logo.svg";
import "./App.css";
import { HomeComponent } from "./components/HomeComponent";
import HeaderComponent from "./components/HeaderComponent";
import { MapDemo } from "./components/MapDemo";
import { Content } from "./components/Content";
import { UseStateDemo } from "./components/UseStateDemo";

function App() {

  var title = "REACT APP"
  var style = {
    color: "red",
    fontSize: "20px"
  }



  return (
    <div className="App">
     <HeaderComponent title = {title}></HeaderComponent>
     {/* <Content t = {title} s = {style}></Content> */}
     <UseStateDemo></UseStateDemo>
      {/* <HomeComponent></HomeComponent> */}
      {/* <MapDemo></MapDemo> */}
    </div>
  );
}

export default App;
