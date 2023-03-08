import React, { useState, useEffect } from 'react'
import DataTableOder from '../../components/Oder/DataTableOrder/DataTableOder'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { database } from '../../firebase'
import { getDatabase, onValue, ref, set, remove, update } from 'firebase/database';
import { toast } from 'react-toastify'
import ViewOrder from '../../components/Oder/ViewOrder/ViewOrder'
import { useNavigate } from 'react-router-dom'

const OrderPage = () => {
  const navigate = useNavigate()
  const [orderData, setOrderData] = useState([])
  const [isView, setIsView] = useState(false)
  const [orderId, setOrderId] = useState()
  const [listFoodOrder, setListFoodOrder] = useState([])
 
  const handleReadData = () => {
  onValue(ref(database, '/Order'), (snapshot) => {
      setOrderData([])
      const data = snapshot.val();
      if(data !==null){
        Object.values(data).map((order) => {
          setOrderData((prev) => [...prev, order])
        })
      }
  })
}
  
  useEffect(() => {
      handleReadData()
  },[])


  //delete
  const handleDelete = (id) => {
    try {
      remove(ref(database,`/Order/${id}`))
      toast.success("Xoá thành công!")
    } catch (error) {
      toast.error(error)
    }
  }
  
  const handleCompleteOrderPage = () => {
    navigate('/order/complete')
  }
  return (
    <div className='employee'>
    <Sidebar/>
    <div className="employee-container">
      <Navbar/>
      <div className='employee-desc'>
          <div className='title'>
              <h3>Quản lý đơn hàng</h3>
              <button onClick={handleCompleteOrderPage}>Đơn hàng đã giao</button>
          </div>
              <div className='table'>
                  <DataTableOder
                  orderData={orderData}
                  handleDelete={handleDelete}
                  setIsView={setIsView}
                  setListFoodOrder={setListFoodOrder}
                  setOrderId={setOrderId}
                  />
              </div>
          </div>
          <div className='popup-update'>
            {
              isView && 
              (<ViewOrder
                setIsView={setIsView}
                listFoodOrder={listFoodOrder} 
              />)
            }
          </div>
      </div>

    </div>
  )
}

export default OrderPage