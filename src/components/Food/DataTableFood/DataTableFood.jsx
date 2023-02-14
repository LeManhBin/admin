import React, { useState } from 'react'
import Pagination from '../../Pagination/Pagination';
const DataTableFood = ({foodData, handleDelete}) => {
  const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(4)

    const lastPageIndex = currentPage * limit;
    const firstPageIndex = lastPageIndex - limit;
    const currentItem = foodData.slice(firstPageIndex, lastPageIndex);

    const totalPage = foodData.length

    const handleClickDelete = (id) => {
      handleDelete(id)
    }
  return (
    <div className='table__container' >
    <table id="customers">
      <thead>
        <tr>
          <th>STT</th>
          <th>ID</th>
          <th>Tên Món</th>
          <th>Danh Mục</th>
          <th>Hình Ảnh</th>
          <th>Giá</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          currentItem.map((food, index) => {
            return (
              <tr key={food.id_Food}>
                <td>{index + 1}</td>
                <td>{food.id_Food}</td>
                <td>{food.category_Food}</td>
                <td>{food.name_Food}</td>
                <td className='img'>
                    <img src={ food.image_Food} alt="" />
                </td>
                <td>
                    {food.price_Food}
                </td>
                <td>
                <button className='edit-btn' >Edit</button>
                <button className='delete-btn' onClick={() => handleClickDelete(food.id_Food)}>Delete</button>
                </td>
            </tr>
            )
          })
        }
      </tbody>
    </table>
    <div className='pagination'>
                <Pagination
                currentPage={currentPage}
                limit={limit}
                setCurrentPage={setCurrentPage}
                totalPage={totalPage}
                />
    </div>
    </div>
  )
}

export default DataTableFood