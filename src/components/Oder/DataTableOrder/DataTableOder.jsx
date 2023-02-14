import React from 'react'

const DataTableOder = () => {
  return (
    <div className='table__container' >
    <table id="customers">
      <thead>
        <tr>
          <th>STT</th>
          <th>ID</th>
          <th>Tên Món</th>
          <th>Giá</th>
          <th>Số Lượng</th>
          <th>Thành Tiền</th>
          <th>Tình Trạng</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
            <tr >
                <td>1</td>
                <td>Order1</td>
                <td>Gà 45kg</td>
                <td>500000</td>
                <td>1</td>
                <td>500000</td>
                <td>Đã Giao</td>
                <td>
                  <button className='edit-btn'>View</button>
                  <button className='delete-btn'>Delete</button>
                </td>
            </tr>
      </tbody>
    </table>
    </div>
  )
}

export default DataTableOder