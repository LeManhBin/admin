import React, { useState, useEffect } from 'react'
import DataTableOder from '../../components/Oder/DataTableOrder/DataTableOder'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { database } from '../../firebase'
import { getDatabase, onValue, ref, set, remove, update } from 'firebase/database';
import { toast } from 'react-toastify'
import ViewOrder from '../../components/Oder/ViewOrder/ViewOrder'
import { useNavigate } from 'react-router-dom'
import DataTableComplete from '../../components/OrderComplete/DataTableComplete/DataTableComplete'
import ViewComplete from '../../components/OrderComplete/ViewComplete/ViewComplete'

const OrderComplete = () => {
    const navigate = useNavigate()
    const handleOrderPage = () => {
        navigate("/order")
    }

    const [orderComplete, setOrderComplete] = useState([])
    const [isView, setIsView] = useState(false)
    const [orderCompleteId, setOrderCompleteId] = useState()
    const [listFoodOrderComplete, setListFoodOrderComplete] = useState([])




    const handleReadData = () => {
        onValue(ref(database, '/History'), (snapshot) => {
            setOrderComplete([])
            const data = snapshot.val();
            if(data !==null){
              Object.values(data).map((order) => {
                setOrderComplete((prev) => [...prev, order])
              })
            }
        })
      }
      console.log(listFoodOrderComplete, 'aaaaaaaaa');
      useEffect(() => {
        handleReadData()
    },[])
  return (
    <div className='employee'>
    <Sidebar/>
    <div className="employee-container">
      <Navbar/>
      <div className='employee-desc'>
          <div className='title'>
              <h3>Đơn Hàng Hoàn Thành</h3>
              <button onClick={handleOrderPage}>Back</button>
          </div>
              <div className='table'>
                    <DataTableComplete
                        orderComplete={orderComplete}
                        setOrderCompleteId={setOrderCompleteId}
                        setListFoodOrderComplete={setListFoodOrderComplete}
                        setIsView={setIsView}
                    />
              </div>
          </div>
          <div className='popup-update'>
                {
                    isView && (
                        <ViewComplete
                        setIsView={setIsView}
                        listFoodOrderComplete={listFoodOrderComplete} 
                        orderComplete={orderComplete}
                        />
                    )
                }
          </div>
      </div>

    </div>
  )
}

export default OrderComplete