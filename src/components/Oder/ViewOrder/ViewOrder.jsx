import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
const ViewOrder = ({setIsView, listFoodOrder}) => {
  return (
    <div className='update-container'>
        <div className='update-title'>
            Chi Tiết Đơn Hàng
            <span className='update-close' onClick={() => setIsView(false)}><CloseIcon/></span>
        </div>
        <div className='update view'>
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
                        listFoodOrder.map((item, index) => {
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
    </div>
  )
}

export default ViewOrder