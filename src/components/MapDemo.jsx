import React from 'react'

export const MapDemo = () => {
    var users = ["ram","shyam","sunny","sita","geeta"]
    var employees = [
        {
            id:1,
            name:"ram",
        },
        {
            id:2,
            name:"shyam",
        },
        {
            id:3,
            name:"sunny",
        }
    ]
  return (
    <div>
        {/* {
            users.map((user)=>{
                return(<ul>
                    <li>{user}</li>
                </ul>)
            })
        } */}

        {
            employees.map((emp)=>{
                return(<ul>
                    <li>{emp.id} {emp.name}</li>
                </ul>)
            })
        }
    </div>
  )
}
