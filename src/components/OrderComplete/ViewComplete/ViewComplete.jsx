import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './ViewComplete.scss'
const ViewComplete = ({setIsView,listFoodOrderComplete}) => {


    const [totalPayment, setTotalPayment] = useState()

    const handlePayment = () => {
        let total = listFoodOrderComplete.listFood.reduce(function(sum, item) {
            return sum + parseInt(item.price_Food);
        }, 0);
        setTotalPayment(total)
    }
    useEffect(() => {
        handlePayment()
    },[listFoodOrderComplete])



  return (
    <div className='view-container'>
    <div className='view-title'>
        Chi Tiết Đơn Hàng
        <span className='view-close' onClick={() => setIsView(false)}><CloseIcon/></span>
    </div>
    <div className='view'>
        <div className='driver-infor'>
            <h3>Thông tin tài xế:</h3>
            <p>ID tài xế: <span>{listFoodOrderComplete.staff.id_staff}</span></p>
            <p>Tên tài xế: <span>{listFoodOrderComplete.staff.fullName_staff}</span></p>
            <p>Số điện thoại: <span>{listFoodOrderComplete.staff.phoneNumber}</span></p>
        </div>
        <div className='order-infor'>
            <h3>Thông tin đơn hàng</h3>
            <p>Địa chỉ nhận: <span>{listFoodOrderComplete.address_order}</span></p>
            <p>Tên người nhận: <span>{listFoodOrderComplete.user.fullName}</span></p>
            <p>Số điện thoại: <span>{listFoodOrderComplete.user.phoneNumber}</span></p>
        </div>    
        <div className="food-infor">
            <table id="table-view">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Món</th>
                        <th>Danh Mục</th>
                        <th>Hình Ảnh</th>
                        <th>Số Lượng</th>
                        <th>Đơn Giá</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listFoodOrderComplete.listFood.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name_Food}</td>
                                    <td>{item.category_Food}</td>
                                    <td className='img'>
                                        <img src={item.image_Food} alt="" />
                                    </td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price_Food}</td>
                                </tr>
                            )
                        })
                    }
                        
                </tbody>
            </table>
            
        </div>
        <p className='total-payment'>Thành Tiền: <span>{totalPayment}</span></p>
    </div>
</div>
  )
}

export default ViewComplete