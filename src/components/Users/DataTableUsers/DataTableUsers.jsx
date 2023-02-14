import React from 'react'

const DataTableUsers = ({usersData, handleDelete}) => {
    const handleClickDelete = (phoneNumber) => {
        handleDelete(phoneNumber)
    }
  return (
    <div className='table__container' >
    <table id="customers">
      <thead>
        <tr>
          <th>STT</th>
          <th>ID</th>
          <th>Tên Khách Hàng</th>
          <th>Số Điện Thoại</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
            {
                usersData.map((user, index) => {
                    return(
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.id}</td>
                            <td>{user.fullName}</td>
                            <td>{user.phoneNumber}</td>
                            <td>
                                <button className='delete-btn' onClick={() => handleClickDelete(user.phoneNumber)}>Delete</button>
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

export default DataTableUsers