import React, { useState } from 'react'
import { EmployeeList } from './EmployeeList'

export const Employees = () => {

    var [employees, setemployees] = useState([
        {
            id: 1,
            name: 'Raj',
            age: 25,
        },
        {
            id: 2,
            name: 'Rahul',
            age: 30,
        },
        {
            id: 3,
            name: 'Ravi',
            age: 35,
        }
    ])


    const addEmploye = (emp)=>{

        employees = [...employees,emp]
        setemployees(employees)

    }

    const deleteEmployee = (id)=>{ //2

        employees  = employees.filter((emp)=>{
            //emp.id = 1 !== 2 true
            //emp.id = 2 !== 2 false
            //emp.id = 3 !== 2 true
            return emp.id !== id
        })

        console.log("after delete...",employees) //2 
        setemployees(employees)

        // setemployees(employees.filter((emp)=>{
        //     return emp.id !== id
        // }))

    }


  return (
    <div>
            <h1>EMPLOYEE COMPONENET</h1>
            <EmployeeList employees = {employees} deleteEmployee = {deleteEmployee} addEmployee = {addEmploye}></EmployeeList>
    </div>
  )
}
