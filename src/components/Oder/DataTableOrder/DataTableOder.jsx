import React from 'react'
import OrderStatus from '../../OrderStatus/OrderStatus';

const DataTableOder = ({orderData, handleDelete, setIsView, setOrderId, setListFoodOrder}) => {


  const handleClickDelete = (id) => {
    handleDelete(id)
  }

  const handleShowView = (order) => {
    setIsView(true)
    setOrderId(order.id_order)
    setListFoodOrder(order.listFood)
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
          <th>Phương Thức Thanh Toán</th>
          <th>Tình Trạng</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
            {
              orderData.map((order, index) => {
                let status
                if(order.check == 1) {
                   status = <OrderStatus text={"Chờ xác nhận"} className={'waiting'}/>
                }else if(order.check == 2) {
                    status = <OrderStatus text={"Đang giao"} className={'delivering'}/>
                }else if(order.check == 3) {
                    status = <OrderStatus text={"Đã giao"} className={'delivered'}/>
                }
                return (
                  <tr key={order.id_order}>
                    <td>{index + 1}</td>
                    <td>{order.id_order}</td>
                    <td>{order.user.fullName}</td>
                    <td>{order.address_order}</td>
                    <td>{order.total_cart}</td>
                    <td>{order.payments}</td>
                    <td>
                      {status}
                    </td>
                    <td>
                      <button className='edit-btn' onClick={() => handleShowView(order)}>View</button>
                      <button className='delete-btn' onClick={() => handleClickDelete(order.id_order)}>Delete</button>
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

export default DataTableOder