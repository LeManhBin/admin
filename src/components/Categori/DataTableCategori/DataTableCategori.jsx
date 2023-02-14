import React, { useState } from 'react'
import Pagination from '../../Pagination/Pagination';

import './datatable.scss'
const DataTableCategori = ({categoriData, handleDelete, setIsUpdate, setTempId, setImgCategoriEdit, setNameCategoriEdit}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(4)

    const lastPageIndex = currentPage * limit;
    const firstPageIndex = lastPageIndex - limit;
    const currentItem = categoriData.slice(firstPageIndex, lastPageIndex);

    const totalPage = categoriData.length

    const handleClickDelete = (id) => {
      handleDelete(id)
    }

    const handleShowUpdate = (categori) => {
      setIsUpdate(true)
      setTempId(categori.id_category)
      setImgCategoriEdit(categori.image_Category)
      setNameCategoriEdit(categori.name_Category)
    }
  return (
    <div className='table__container' >
    <table id="customers">
      <thead>
        <tr>
          <th>STT</th>
          <th>ID</th>
          <th>Tên Danh Mục</th>
          <th>Hình ảnh</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
            {
              currentItem.map((categori, index) => {
                return(
                  <tr key={categori.id_category}>
                    <td>{index + 1}</td>
                    <td>{categori.id_category}</td>
                    <td>{categori.name_Category}</td>
                    <td className='img'>
                      <img src={categori.image_Category} alt="" />
                    </td>
                    <td>
                      <button  className='edit-btn' onClick={() => handleShowUpdate(categori)}>Edit</button>
                      <button className='delete-btn' onClick={() => handleClickDelete(categori.id_category)}>Delete</button>
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

export default DataTableCategori