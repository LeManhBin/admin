import React, { useState,useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { database } from '../../firebase'
import { getDatabase, onValue, ref, set, remove, update } from 'firebase/database';
import { toast } from 'react-toastify';
import DataTableUsers from '../../components/Users/DataTableUsers/DataTableUsers';
const UsersPage = () => {

    const [usersData, setUserData] = useState([])

    const handleReadData = () => {
        onValue(ref(database, '/User'), (snapshot) => {
            setUserData([])
            const data = snapshot.val();
            if(data !==null){
              Object.values(data).map((user) => {
                setUserData((prev) => [...prev, user])
              })
            }
        })
      }
        useEffect(() => {
            handleReadData()
        },[])

        //delete
        const handleDelete = (phoneNumber) => {
            try {
            remove(ref(database,`/User/${phoneNumber}`))
            toast.success("Xoá thành công!")
            } catch (error) {
                toast.error(error)
            }
        }
  return (
    <div className='employee'>
      <Sidebar/>
      <div className="employee-container">
        <Navbar/>
        <div className='employee-desc'>
            <div className='title'>
                Quản Lí Khách Hàng
            </div>
            <div className='employee-form'>
                <div className='table'>
                   <DataTableUsers usersData={usersData}  handleDelete={handleDelete}/>
                </div>
            </div>
        </div>
        <div className='popup-update'>
            
        </div>
      </div>
    </div>
  )
}

export default UsersPage