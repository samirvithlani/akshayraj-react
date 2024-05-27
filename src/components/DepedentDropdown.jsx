import React, { useState } from 'react'

export const DepedentDropdown = () => {
    const [selectedCountry, setselectedCountry] = useState("")
    const data = [
        {
            country: "INDIA",
            city: ["DELHI", "MUMBAI"]
        },
        {
            country: "USA",
            city: ["NEW YORK", "WASHINGTON"]
        }
    ]
    const countryHandler = (e) => {
        console.log(e.target.value)
        setselectedCountry(e.target.value)
    }
  return (
    <div>
        <select onChange={(e)=>{countryHandler(e)}}>
            <option>Select Country</option>
            {
                data.map((con)=>{
                    return <option>{con.country}</option>
                })
            }
        </select>
        <select>
            <option>Select City</option>
            {
                data.map((con)=>{
                    if(con.country === selectedCountry){
                        return con.city.map((ci)=>{
                            return <option>{ci}</option>
                        })
                    }
                })
            }
        </select>
    </div>
  )
}
