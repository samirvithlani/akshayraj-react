import React from "react";
import { useForm } from "react-hook-form";

export const FormHandling2 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();

    const submitHandler = (data) => {
        console.log(data);
    }
    console.log("errors...",errors);

    const validationSchema = {
        email:{
            required:{
                value:true,
                message:"Email is required*"
            },
            maxLength:{
                value:30,
                message:"Email should not exceed 20 characters"
            }
        },
        age:{
            required:{
                value:true,
                message:"Age is required*"
            },
            min:{
                value:18,
                message:"Age should be greater than 18"
            },
            max:{
                value:60,
                message:"Age should be less than 60"
            }
        },
        phone:{
            required:{
                value:true,
                message:"Phone is required*"
            },
            pattern:{
                value:/^[6-9]{1}[0-9]{9}$/,
                message:"Phone number should be valid"
            }
        }
    }


  return (
    <div>
      <h1>FORM HANDLING 2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>NAME</label>
            <input type="text" {...register("name",{required:{value:true,message:"Name is required*"}})}></input>
            <span>{errors.name && errors.name.message}</span>
        </div>
        <div>
            <label>EMAIL</label>
            <input type="email" {...register("email",validationSchema.email)}></input>
            <span>{errors.email && errors.email.message}</span>
        </div>
        <div>
            <label>AGE</label>
            <input type="nummber" {...register("age",validationSchema.age)}></input>
            <span>
                {errors.age && errors.age.message}
            </span>
        </div>
        <div>
            <label>CONTACT</label>
            <input type ="text" {...register("contact",validationSchema.phone)}></input>
            <span>
                {errors.contact && errors.contact.message}
            </span>
        </div>
        <div>
            <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};
