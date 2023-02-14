import React from 'react'
import DataTableOder from '../../components/Oder/DataTableOrder/DataTableOder'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const OrderPage = () => {
  return (
    <div className='employee'>
    <Sidebar/>
    <div className="employee-container">
      <Navbar/>
      <div className='employee-desc'>
          <div className='title'>
              Quản Lí Đơn Hàng
          </div>
              <div className='table'>
                  <DataTableOder/>
              </div>
          </div>
      </div>
      <div className='popup-update'>
         

      </div>
    </div>
  )
}

export default OrderPage