import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CutomeLoader } from "../components/CutomeLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context";
import { MyButton } from "../components/MyButton";
import Cookies from 'js-cookie';

export const ApiDemo1 = () => {
  const {mode,xyz} = useContext(ThemeContext);
  
  console.log("mode", mode);
  console.log("xyz", xyz);

  useEffect(() => {
    
    getApiDemo1();
    mode == "dark" ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white";
    
  }, [])
  





  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const getApiDemo1 = async () => {
    //api -->data
    setisLoading(true);
    try{
    //const res = await axios.get("https://node5.onrender.com/user/user");
    console.log("Cookies.get('token')", Cookies.get('token'));
    var token = Cookies.get('token');
    token = "Bearer " + token;
    console.log("token", token);

    const res = await axios.get("http://localhost:3000/user/user",{
      headers:{
        Authorization:token
      }
    });
    console.log("res", res);
    console.log("res.data.message", res.data.message);
    console.log("res.data.data", res.data.data);
    setusers(res.data.data);
    setisLoading(false);
    }catch(err){
      console.log("err", err);
      setisLoading(false);
    }
    
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(
      "https://node5.onrender.com/user/user/" + id
    );
    console.log("res", res);
    if (res.status === 204) {
      //alert("User Deleted Successfully");
      toast.error('User Deleted SuccessFully...', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
      getApiDemo1();
    }
  };

  const handleSearch = async (e) => {

    console.log("e.target.value", e.target.value);

    const res = await axios.get("https://node5.onrender.com/user/filter",{
      params:{
        name:e.target.value
      }
    });
    console.log("res", res);
    //rahul
    setusers(res.data.data);

  }

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>API DEMO 1</h1>
      {/* <button
        onClick={() => {
          getApiDemo1();
        }}
      >
        GET
      </button> */}
      {isLoading && <CutomeLoader />}
      <input type="text" onChange={(e)=>{handleSearch(e)}} placeholder="Search User..."></input>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>AGE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.isActive == true ? "Active" : "Not Active"}</td>
                <td>
                  <MyButton></MyButton>
                  <button
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <Link to = {`/userdetail/${user._id}`} className = "btn btn-success">Detail</Link>
                  <Link to ={`/userupdate/${user._id}`} className = "btn btn-primary">Update</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
