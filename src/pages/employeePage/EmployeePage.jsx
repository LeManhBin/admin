import React, { useEffect, useState } from 'react'
import './employee.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataTableEmPloyee from '../../components/Employee/DataTableEmPloyee/DataTableEmPloyee'
import { v4 as uuidv4 } from 'uuid';
import { database } from '../../firebase'
import { getDatabase, onValue, ref, set, remove, update } from 'firebase/database';
import UpdatePopUp from '../../components/Employee/UpdatePopup/UpdatePopUp'
import { toast } from 'react-toastify';
const EmployeePage = () => {
    const [employeeData, setEmployeeData] = useState([])
    const [idEmployee, setIdEmployee] = useState(uuidv4());
    const [fullNameEmployee, setFullNameEmployee] = useState("");
    const [phoneNumberEmployee, setPhoneNumberEmployee] = useState("");
    const [passwordEmployee, setPasswordEmployee] = useState("");

    const [isUpdate, setIsUpdate] = useState(false)
    const [tempId, setTempId] = useState("")
    const [fullNameEmployeeEdit, setFullNameEmployeeEdit] = useState("");
    const [phoneNumberEmployeeEdit, setPhoneNumberEmployeeEdit] = useState("");
    const [passwordEmployeeEdit, setPasswordEmployeeEdit] = useState("");
    //write
    const writeEmployeeDta = (id, fullname, phonenumber, password) => {
        set(ref(database, '/AccountEmployee/Staff' + id), {
            id_staff: id,
            fullName_staff:fullname,
            password: password,
            phoneNumber: phonenumber
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!fullNameEmployee || !phoneNumberEmployee || !passwordEmployee) {
            toast.error("Vui lòng nhập đủ thông tin!!")
        }else{
            setIdEmployee(uuidv4())
            writeEmployeeDta(idEmployee, fullNameEmployee, phoneNumberEmployee, passwordEmployee)
            toast.success("Thêm mới thành công!")
        }
    }
    

    //read
    const handleReadData = () => {
        onValue(ref(database, '/AccountEmployee'), (snapshot) => {
            setEmployeeData([])
            const data = snapshot.val();
            if(data !==null){
              Object.values(data).map((employee) => {
                setEmployeeData((prev) => [...prev, employee])
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
            remove(ref(database, '/AccountEmployee/Staff' + id))
            toast.success("Xoá thành công") 
        } catch (error) {
            toast.error(error)
        }    
    }

    //update
    const handleUpdate = () => {
        update(ref(database, '/AccountEmployee/Staff' + tempId), {
            id_staff: tempId,
            fullName_staff: fullNameEmployeeEdit,
            password: passwordEmployeeEdit,
            phoneNumber: phoneNumberEmployeeEdit
        })
        setIsUpdate(false)
        
    }
  return (
    <div className='employee'>
      <Sidebar/>
      <div className="employee-container">
        <Navbar/>
        <div className='employee-desc'>
            <div className='title'>
                Quản lí Nhân viên
            </div>
            <div className='employee-form'>
                <form onSubmit={handleSubmit}>
                    <div className="input-form">
                        <label>Full Name</label>
                        <input required type="text" value={fullNameEmployee} 
                        placeholder='Enter your full name' onChange={(e) => setFullNameEmployee(e.target.value)}/>
                    </div>
                    <div className="input-form">
                        <label>Phone Number</label>
                        <input required type="text" value={phoneNumberEmployee} 
                        placeholder='Enter your phone number'onChange={(e) => setPhoneNumberEmployee(e.target.value)}/>
                    </div>
                    <div className='input-form'>
                        <label>Password</label>
                        <input required type="text" value={passwordEmployee} 
                        placeholder='Enter your password' onChange={(e) => setPasswordEmployee(e.target.value)}/>
                    </div>
                    <button type='submit' className='submit-btn'>Submit</button>
                </form>
                <div className='table'>
                    <DataTableEmPloyee employeeData={employeeData}
                    handleDelete={handleDelete}
                    setIsUpdate={setIsUpdate}
                    isUpdate={isUpdate}
                    setTempId={setTempId}
                    setFullNameEmployeeEdit={setFullNameEmployeeEdit}
                    setPhoneNumberEmployeeEdit={setPhoneNumberEmployeeEdit}
                    setPasswordEmployeeEdit={setPasswordEmployeeEdit}
                    />
                </div>
            </div>
        </div>
        <div className='popup-update'>
            {
                isUpdate && ( 
                    <UpdatePopUp
                    fullNameEmployeeEdit={fullNameEmployeeEdit}
                    phoneNumberEmployeeEdit={phoneNumberEmployeeEdit}
                    passwordEmployeeEdit={passwordEmployeeEdit}
                    setIsUpdate={setIsUpdate}
                    tempId={tempId}
                    handleUpdate={handleUpdate}
                    setFullNameEmployeeEdit={setFullNameEmployeeEdit}
                    setPhoneNumberEmployeeEdit={setPhoneNumberEmployeeEdit}
                    setPasswordEmployeeEdit={setPasswordEmployeeEdit}
                    />
                )
            }
        </div>
      </div>
    </div>
  )
}

export default EmployeePage