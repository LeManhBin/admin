import React, { useState, useEffect } from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widgets/Widget'
import "./home.scss"
import { database } from '../../firebase'
import { getDatabase, onValue, ref, set, remove, update } from 'firebase/database';

const Home = ({setDark}) => {
  const [usersChartData, setUserChartData] = useState([]);
  const [usersQuantity, setUserQuantity] = useState([]);

  const [orderChartData, setOrderChartData] = useState([])
  const [orderQuantity, setOrderQuantity] = useState("")

  const [employeeChartData, setEmployeeChartData] = useState([])
  const [employeeQuantity, setEmployeeQuantity] = useState("")

  //Users
  const handleReadUsersData = () => {
    onValue(ref(database, '/User'), (snapshot) => {
        setUserChartData([])
        const data = snapshot.val();
        if(data !==null){
          Object.values(data).map((user) => {
            setUserChartData((prev) => [...prev, user])
            handleOrderQuantity()
          })
        } 
    })
  }
  
  const handleUsersQuantity = () => {
    setUserQuantity(usersChartData.length)
  }
  
  //Order
  const handleReadOrderData = () => {
    onValue(ref(database, '/Order'), (snapshot) => {
        setOrderChartData([])
        const data = snapshot.val();
        if(data !==null){
          Object.values(data).map((order) => {
            setOrderChartData((prev) => [...prev, order])
            handleOrderQuantity()
          })
        } 
    })
  }
  
  const handleOrderQuantity = () => {
    setOrderQuantity(orderChartData.length)
  }

  //Employee
  const handleReadEmployeeData = () => {
    onValue(ref(database, '/AccountEmployee'), (snapshot) => {
        setEmployeeChartData([])
        const data = snapshot.val();
        if(data !==null){
          Object.values(data).map((employee) => {
            setEmployeeChartData((prev) => [...prev, employee])
          })
        }
    })
}
  const handleEmloyeeQuantity = () => {
    setEmployeeQuantity(employeeChartData.length)
  }

  //Eevenue
  let revenue = 0
  orderChartData.forEach((value, index) => {
    revenue += value.total_cart
  })
  

  useEffect(() => {
    handleOrderQuantity()
    handleEmloyeeQuantity()
    handleUsersQuantity()
  })

  useEffect(() => {
    handleReadOrderData()
    handleReadEmployeeData()
    handleReadUsersData()
  }, [])


  return (
    <div className='home'>
        <Sidebar/>
        <div className="home-container">
            <Navbar/>
            <div className="widgets">
              <Widget type='user' usersQuantity={usersQuantity}/>
              <Widget type='Employee' employeeQuantity={employeeQuantity}/>
              <Widget type='order' orderQuantity={orderQuantity}/>
              <Widget type='revenue' revenue={revenue}/>
              
            </div>
            <div className="charts">
              <Chart/>
              <Featured/>
            </div>

        </div>
    </div>
  )
}

export default Home