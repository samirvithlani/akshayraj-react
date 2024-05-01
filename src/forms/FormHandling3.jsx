import React from "react";
import { useForm } from "react-hook-form";

export const FormHandling3 = () => {
  const { register, handleSubmit,formState:{errors} } = useForm({mode:"all",
  defaultValues:{name:"XYZ",age:"18",color:"#FFC0CB",dob:new Date().toISOString().substr(0,10)}}
  );
  const submitHandler = (data) => {
    console.log("data...", data);
  };

  const validationSchema = {
    name: {
      required: {
        value: true,
        message: "Name is required",
      },
      minLength: {
        value: 3,
        message: "Name should have atleast 3 characters",
      },
      maxLength: {
        value: 10,
        message: "Name should have atmost 10 characters",
      }
    },
    age: {
      required: {
        value: true,
        message: "Age is required",
      },
      min: {
        value: 18,
        message: "Age should be atleast 18",
      },
      max: {
        value: 60,
        message: "Age should be atmost 60",
      }
    }
  }
  return (
    <div>
      <h1>FormHandling3</h1>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Name</label>
            <input type="text" {...register("name",validationSchema.name)}></input>
            <span>{errors.name && errors.name.message}</span>
          </div>
          <div>
            <label>Age</label>
            <input type="number" {...register("age",validationSchema.age)}></input>
            <span>{errors.age && errors.age.message}</span>
          </div>
          <div>
            <label>COLOR</label>
            <input type="color" {...register("color")}></input>
            <span>{errors.color && errors.color.message}</span>
          </div>
          <div>
            <label>DOB</label>
            <input type="date" {...register("dob")}></input>
            <span>{errors.dob && errors.dob.message}</span>
          </div>
          <div>
            <input type="submit" value="submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
};
