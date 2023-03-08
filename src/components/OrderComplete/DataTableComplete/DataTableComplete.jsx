import React from 'react'

const DataTableComplete = ({orderComplete,setOrderCompleteId,setListFoodOrderComplete,setIsView}) => {
    const handleShowView = (data) => {
        setIsView(true)
        setOrderCompleteId(data.id_order)
        setListFoodOrderComplete(data.listFood)
    }
  return (
    <div className='table__container' >
    <table id="customers">
      <thead>
        <tr>
          <th>STT</th>
          <th>ID</th>
          <th>Tên Người Đặt</th>
          <th>Địa Chỉ</th>
          <th>Tổng Tiền</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            orderComplete.map((data, index) => {
                return(
                    <tr key={data.id_order}>
                        <td>{index + 1}</td>
                        <td>{data.id_order}</td>
                        <td>{data.user.fullName}</td>
                        <td>{data.address_order}</td>
                        <td>{data.total_cart}</td>
                        <td>
                            <button className='edit-btn' onClick={() => handleShowView(data)}>View</button>
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

export default DataTableComplete