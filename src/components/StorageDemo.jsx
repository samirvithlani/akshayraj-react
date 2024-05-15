import React from 'react'

export const StorageDemo = () => {
    const storeData = () => {
        //all storage data is stored as string
        localStorage.setItem("id","1011")
        sessionStorage.setItem("name","Rahul")

        localStorage.setItem("user",JSON.stringify({name:"Rahul",age:25}))


    }
    const getData = () => {

        var id  = localStorage.getItem("id")
        console.log(id)
        var name = sessionStorage.getItem("name")
        console.log(name)

        var user = localStorage.getItem("user")
        //console.log(user[0])
        var userObj = JSON.parse(localStorage.getItem("user"))
        console.log(userObj)
        console.log(userObj.name)
    }
    const removeData = () => {
        localStorage.removeItem("id")
        sessionStorage.removeItem("name")

        // localStorage.clear()
        // sessionStorage.clear()
    }
  return (
    <div>
        <h1>Storage Demo</h1>
        <h3>Example of storing Data in Local Storage</h3>
        
        <h3>Example of storing Data in Session Storage</h3>
        <button onClick={()=>{storeData()}}>Store Data</button>
        <button onClick={()=>{getData()}}>Get Data</button>
        <button onClick={()=>{removeData()}}>Remove Data</button>
    </div>
  )
}
