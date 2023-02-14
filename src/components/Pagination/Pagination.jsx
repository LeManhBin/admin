import React from 'react'

const Pagination = ({totalPage, limit, setCurrentPage, currentPage}) => {

    let pages = [];
    for(let i = 1; i <= Math.ceil(totalPage/limit); i++){
      pages.push(i)
    }
    return (
      <div>
        {
          pages.map((page, index) => {
            return (
              <button key={index} onClick={() => setCurrentPage(page)}
              className={ `pagination-btn ${page === currentPage ? "active" : ''}`}
              >{page}</button>
            )
          })
        }
      </div>
    )
  }

export default Pagination