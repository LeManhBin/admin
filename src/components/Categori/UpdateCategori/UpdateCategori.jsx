import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
const UpdateCategori = ({setIsUpdate, tempId,handleUpdate, nameCategori,imgCategori, imgCategoriEdit, nameCategoriEdit}) => {

  const handleClickUpdate = (e) => {
    e.preventDefault()
    if(!nameCategoriEdit || !imgCategoriEdit) {
        toast.error("Vui lòng nhập đầy đủ thông tin cần Update")
    }else {
        handleUpdate()
        toast.success("Update thành công")
    }
    
}
  return (
    <div className='update-container'>
        <div className='update-title'>
            Update Category
            <span className='update-close' onClick={() => setIsUpdate(false)}><CloseIcon/></span>
        </div>
        <div className='update'>
            <form>
                <div className="input-form">
                    <label>Tên Danh Mục</label>
                    <input type="text" value={nameCategoriEdit}
                    placeholder='Enter your full name'/>
                </div>
                <div className="input-form">
                    <label>Hình Ảnh</label>
                    <input type="file" />
                    <div className='img'> 
                       <img src={imgCategoriEdit} alt="" />
                    </div>
                </div>
                <button type='submit' className='update-btn'>Update</button>    
            </form>
        </div>
    </div>
  )
}

export default UpdateCategori