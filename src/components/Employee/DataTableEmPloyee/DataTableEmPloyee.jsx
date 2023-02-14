import React, { useState } from 'react'
import './datatable.scss'



const DataTableEmPloyee = ({employeeData, handleDelete,setIsUpdate, setTempId, setFullNameEmployeeEdit,setPhoneNumberEmployeeEdit,setPasswordEmployeeEdit}) => {

  const handleClickDelete = (id) => {
    handleDelete(id)
  }

  const handleShowUpdate = (employee) => {
    setIsUpdate(true)
    setTempId(employee.id_staff)
    setFullNameEmployeeEdit(employee.fullName_staff)
    setPhoneNumberEmployeeEdit(employee.phoneNumber)
    setPasswordEmployeeEdit(employee.password)
  }
return (
  <div className='table__container' >
    <table id="customers">
      <thead>
        <tr>
          <th>STT</th>
          <th>ID</th>
          <th>Full name</th>
          <th>Phone number</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          employeeData.map((employee, index) => {
            return (
              <tr key={employee.id_staff}>
                <td>{index+ 1}</td>
                <td>{employee.id_staff}</td>
                <td>{employee.fullName_staff}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.password}</td>
                <td>
                  <button onClick={() => handleShowUpdate(employee)} className='edit-btn'>Edit</button>
                  <button onClick={() => handleClickDelete(employee.id_staff)} className='delete-btn'>Delete</button>
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

export default DataTableEmPloyee