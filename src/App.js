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
import { HomeDetail } from "./students/HomeDetail";
import { FormHandling1 } from "./forms/FormHandling1";
import { FormHandling2 } from "./forms/FormHandling2";
import { FormHandling3 } from "./forms/FormHandling3";
import { ApiDemo1 } from "./api/ApiDemo1";
import { UseEffectDemo } from "./components/UseEffectDemo";
import { ApiDemo3 } from "./api/ApiDemo3";
import { ApiDemo4 } from "./api/ApiDemo4";
import { UserDetail } from "./api/UserDetail";
import { UpdateUser } from "./api/UpdateUser";
import { StorageDemo } from "./components/StorageDemo";
import { createContext } from "react";
import { ThemeContext } from "./Context";
import { DepedentDropdown } from "./components/DepedentDropdown";
import { ProdComp } from "./components/ProdComp";

function App() {
  var title = "REACT APP";
  var style = {
    color: "red",
    fontSize: "20px",
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ mode: "light" }}>
        <Navbar />
      </ThemeContext.Provider>
      <ThemeContext.Provider value={{ mode: "light",xyz :100 }}>
        <Routes>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/students/commerce" element={<Commerce />}></Route>
          <Route path="/science" element={<Science />}></Route>
          <Route path="/home/detail/:id" element={<HomeDetail />}></Route>
          <Route path="/formdemo1" element={<FormHandling1 />}></Route>
          <Route path="/formdemo2" element={<FormHandling2 />}></Route>
          <Route path="/formdemo3" element={<FormHandling3 />}></Route>
          <Route path="/useeeffectdemo" element={<UseEffectDemo />}></Route>
          <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
          <Route path="/apidemo3" element={<ApiDemo3 />}></Route>
          <Route path="/apidemo4" element={<ApiDemo4 />}></Route>
          <Route path="/userdetail/:id" element={<UserDetail />}></Route>
          <Route path="/userupdate/:id" element={<UpdateUser />}></Route>
          <Route path="/storagedemo" element={<StorageDemo />}></Route>
          <Route path = "/depdropdown" element = {<DepedentDropdown/>}></Route>
          <Route path = "/prodcomp" element = {<ProdComp/>}></Route>


          {/* :id is wild card */}
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
