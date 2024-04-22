import React from 'react'

export const EmployeeList = (props) => {
    //props {employees:[{}],deleteEmployee:()=>{},addEmploye:()=>{}}
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>{
            props.addEmployee({id:4,name:'Raj',age:25})
        }}>ADD EMPLOYEE</button>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map((emp)=>{
                        return(
                            <tr>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.age}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=>{
                                        props.deleteEmployee(emp.id)
                                    }}>DELETE</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
