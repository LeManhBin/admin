import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColums, userRows } from '../../dataUser';
import { Link } from 'react-router-dom';

const Datatable = () => {

  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    console.log(data);
    setData(data.filter((item) => item.id !== id))
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return( 
          <div className="cell-action">
            <button className="edit-btn button">Edit</button>
            <button className="delete-btn button" onClick={() => handleDelete(params.row.id)}>Delete</button>
          </div>
        )
      }
    }
  ]

  return (
    <div className='datatable' >
      <div className="datatable-title">
        <h1>Add new User</h1>
        <Link to="/users/new" style={{textDecoration: "none"}}>
          <button>Add New</button>
        </Link>
      </div>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                className='data-grid'
                rows={data}
                columns={userColums.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    </div>
  )
}

export default Datatable