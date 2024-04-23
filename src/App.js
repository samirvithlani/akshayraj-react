import logo from "./logo.svg";
import "./App.css";
import { HomeComponent } from "./components/HomeComponent";
import HeaderComponent from "./components/HeaderComponent";
import { MapDemo } from "./components/MapDemo";
import { Content } from "./components/Content";
import { UseStateDemo } from "./components/UseStateDemo";
import { Employees } from "./employees/Employees";
import { Blogs } from "./blogs/Blogs";
import { Route, Routes } from "react-router-dom";
import { Students } from "./students/Students";
import { Navbar } from "./Navbar";
import { Home } from "./students/Home";
import { Commerce } from "./students/Commerce";
import { Science } from "./students/Science";

function App() {
  var title = "REACT APP";
  var style = {
    color: "red",
    fontSize: "20px",
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/students/commerce" element={<Commerce />}></Route>
        <Route path="/science" element={<Science />}></Route>
      </Routes>
    </div>
  );
}

export default App;
