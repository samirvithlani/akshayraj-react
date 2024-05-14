import axios from "axios";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useParams } from "react-router-dom";
import { CutomeLoader } from "../components/CutomeLoader";

export const UserDetail = () => {
  const id = useParams().id;
  console.log("id", id);

  const [user, setuser] = useState({});
  const [loder, setloder] = useState(false);

  const getuserById = async () => {
    setloder(true);
    const res = await axios.get("https://node5.onrender.com/user/user/" + id);
    setuser(res.data.data);
    setloder(false);
  };
  useEffect(() => {
    getuserById();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {loder && <CutomeLoader />}
      <h1>USER DETAIL</h1>
      <card style={{ width: "50%", margin: "auto" }}>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.age}</h1>
        <h1>{user?.isActive ? "Active" : "Not Active"}</h1>
      </card>
    </div>
  );
};
