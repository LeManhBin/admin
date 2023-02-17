import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify'
const UpdatePopup = ({
    setIsUpdate,tempId, handleUpdate,categoriFoodEdit, descFoodEdit,
    imageEdit, nameFoodEdit, priceFoodEdit, setCategoriFoodEdit, setDescFoodEdit,
    setImageEdit, setNameFoodEdit, setPriceFoodEdit, categoriList
        
    }) => {
  
    const handleClickUpdate = (e) => {
        e.preventDefault()
        if(!categoriFoodEdit || !nameFoodEdit || !imageEdit || !descFoodEdit || !priceFoodEdit) {
            toast.error("Vui lòng nhập đầy đủ thông tin cần Update")
        }else {
            handleUpdate()
            toast.success("Update thành công")
        }
    }
    return (
    <div className='update-container'>
        <div className='update-title'>
            Update Food
            <span className='update-close' onClick={() => setIsUpdate(false)}><CloseIcon/></span>
        </div>
        <div className='update'>
            <form onSubmit={handleClickUpdate}>
                <div className="input-form">
                    <label>Tên Món Ăn</label>
                    <input type="text" value={nameFoodEdit}
                    onChange={(e) => setNameFoodEdit(e.target.value)}
                    placeholder='Enter your full name'/>
                </div>
                <div className="input-form">
                    <label>Danh Mục</label>
                    <select value={categoriFoodEdit} onChange={(e) => setCategoriFoodEdit(e.target.value)}>
                        {
                          categoriList.map((value, index) => {
                            return(
                              <option value={value} key={index}>{value}</option>
                            )
                          })
                        }
                    </select>
                </div>
                <div className="input-form">
                    <label>Hình Ảnh</label>
                    <input type="file" onChange={(e) => setImageEdit(e.target.files[0])}/>
                    <div className='img'> 
                       <img src={imageEdit} alt=""/>
                    </div>
                </div>
                <div className='input-form'>
                    <label>Mô tả</label>
                    <textarea value={descFoodEdit} name="" id="" cols="20" rows="10"
                    onChange={(e)=> setDescFoodEdit(e.target.value)}
                    ></textarea>
                </div>
                <div className="input-form">
                    <label>Giá</label>
                    <input type="number" value={priceFoodEdit} onChange={(e) => setPriceFoodEdit(e.target.value) }
                    placeholder='Enter your Price'/>
                </div>
                <button type='submit' className='update-btn'>Update</button>    
            </form>
        </div>
    </div>
  )
}

export default UpdatePopup