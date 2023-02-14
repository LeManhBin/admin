import React from 'react'
import '../UpdatePopup/UpdatePopup.scss'
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';


const UpdatePopUp = ({setIsUpdate, tempId, fullNameEmployeeEdit,phoneNumberEmployeeEdit, passwordEmployeeEdit,setFullNameEmployeeEdit,setPhoneNumberEmployeeEdit,setPasswordEmployeeEdit, handleUpdate}) => {

    const handleClickUpdate = (e) => {
        e.preventDefault()
        if(!fullNameEmployeeEdit || !phoneNumberEmployeeEdit || !passwordEmployeeEdit) {
            toast.error("Vui lòng nhập đầy đủ thông tin cần Update")
        }else {
            handleUpdate()
            toast.success("Update thành công")
        }
        
    }
  return (
    <div className='update-container'>
        <div className='update-title'>
            Update
            <span className='update-close' onClick={() => setIsUpdate(false)}><CloseIcon/></span>
        </div>
        <div className='update'>
            <form onSubmit={handleClickUpdate}>
                <div className="input-form">
                    <label>Full Name</label>
                    <input type="text" value={fullNameEmployeeEdit} onChange={(e) => setFullNameEmployeeEdit(e.target.value)}
                    placeholder='Enter your full name'/>
                </div>
                <div className="input-form">
                    <label>Phone Number</label>
                    <input type="text" value={phoneNumberEmployeeEdit} onChange={(e) => setPhoneNumberEmployeeEdit(e.target.value)}
                    placeholder='Enter your phone number'/>
                </div>
                <div className='input-form'>
                    <label>Password</label>
                    <input type="text" value={passwordEmployeeEdit} onChange={(e) => setPasswordEmployeeEdit(e.target.value)}
                    placeholder='Enter your password'/>
                </div>
                <button type='submit' className='update-btn'>Update</button>    
            </form>
        </div>
    </div>
  )
}

export default UpdatePopUp