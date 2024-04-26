import React from "react";
import { useForm } from "react-hook-form";

export const FormHandling1 = () => {
  //register --> object
  //handleSubmit --> function

  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log("data...", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("username")}></input>
        </div>
        <div>
          <label>EMAIL</label>
          <input type="email" {...register("email")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="number" {...register("age")}></input>
        </div>
        <div>
            <label>GENDER</label>
            <br /> MALE : <input type="radio" value="male" name="geder" {...register("gender")}></input>
            <br /> FEMALE : <input type="radio" value="female" name="geder" {...register("gender")}></input>
        </div>
        <div>
            <label>SKILLS</label>
            <br /> HTML : <input type="checkbox" value="html" {...register("skills")} name="skills"></input>
            <br /> CSS : <input type="checkbox" value="css" {...register("skills")} name="skills"></input>
            <br /> JS : <input type="checkbox" value="js" {...register("skills")} name="skills"></input>
        </div>
        <div>
          <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};
