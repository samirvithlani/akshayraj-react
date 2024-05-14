import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo4 = () => {
  const navigate = useNavigate();

  const postUser = async () => {
    try {
      const userObj = {
        name: "sachin",
        email: "sachin@gmail.com",
        age: 46,
        isActive: false,
      };

      const res = await axios.post(
        "https://node5.onrender.com/user/user",
        userObj
      );
      console.log("res", res);
      console.log("res.data", res.data);
      console.log("res.data.message", res.data.message);
      console.log("res.data.data", res.data.data);

      //alert("data posted successfully")

      //async toster..
      await showToast("success", "User Added Successfully");
      navigate("/apidemo1");
    } catch (err) {

        await showToast("error", "Something went wrong...");
        navigate("/apidemo1");
    }
  };
  const showToast = (type, message) => {
    return new Promise((resolve) => {
      toast[type](message, {
        onClose: resolve,
      });
    });
  };
  
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
      <h1>API DEMO 4</h1>
      {/* <button
        onClick={() => {
          postUser();
        }}
      >
        POST USER
      </button> */}

      
    </div>
  );
};
