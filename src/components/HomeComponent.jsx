import React from "react";

export const HomeComponent = () => {
  var name = "Amit";
  var age = 30;
  var isMarrid = false;
  var user = {
    name: "parth",
    age: 25,
  };

  const homeStyle = {
    backgroundColor: "grey",
  }

  return (
    <div style={homeStyle}>
      <h1 style={{color:"blue"}}>Home Component</h1>
      <h1>HELLO THIS IS REACT</h1>
      <h2>At a time we can only return 1 tag</h2>
      <h3>Every tag must have closing tag </h3>
      <h1>Name = {name}</h1>
      {age}
      <h3>Married {isMarrid == true ? "YES" : "NO"}</h3>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h3>{user.age >= 18 ? "Eligible" : "Not eligble"}</h3>
    </div>
  );
};
