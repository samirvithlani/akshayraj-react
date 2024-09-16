import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'

export const Login = () => {
    const {register,handleSubmit} = useForm()
    const submitHandler = async(data) => {
        console.log(data)
        try{
        const res  =await axios.post('http://localhost:3000/user/login',data)
        console.log(res.data.data)
        if(res.status === 200){
            Cookies.set('token',res.data.data)
        }
        }catch(err){
            console.log(err)
        }
    
    }
  return (
    <div>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>EMAIL</label>
                <input type="text" {...register('email')}></input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type="text" {...register('password')}></input>
            </div>
            <div>
                <input type="submit" value="LOGIN"></input>
            </div>
        </form>
    </div>
  )
}
