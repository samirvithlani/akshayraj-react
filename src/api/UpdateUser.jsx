import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export const UpdateUser = () => {
    const id = useParams().id;
    const {register,handleSubmit} = useForm({
        defaultValues:async()=>{
            const res = await axios.get("https://node5.onrender.com/user/user/" + id);
            return ({
                name:res.data.data.name,
                email:res.data.data.email,
                age:res.data.data.age,
                isActive:res.data.data.isActive
            })
        }
    });
    const submitHandler = async(data) => {

        console.log("data", data);
        data = Object.assign(data,{isActive:data.isActive === "active" ? true : false});
        console.log("data", data);
        const res = await axios.put("https://node5.onrender.com/user/user/" + id,data);
        console.log("res", res);
        //toaster --> navigate ("/apidemo1")
    }
  return (
    <div>
        <h1>USER UPDATE</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type="text" {...register('name')} />
            </div>
            <div>
                <label>EMAIL</label>
                <input type="email" {...register('email')} />
            </div>
            <div>
                <label>AGE</label>
                <input type="number" {...register('age')} />
            </div>
            <div>
                <label>STATUS</label><br/>
                ACtive<input type="radio" {...register('isActive')}  value="active"/><br/>
                Not Active<input type="radio" {...register('isActive')} value="notactive"/><br/>
            </div>
            <div>
                <input type="submit" value="UPDATE" />
            </div>
            
        </form>
    </div>
  )
}
