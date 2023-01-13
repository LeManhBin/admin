import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
const New = ({inputs, title}) => {
  const [file, setFile] = useState("")

  return (
    <div className='new'>
      <Sidebar/>
      <div className="new-container">
        <Navbar/>
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img 
              src={file ? URL.createObjectURL(file) : "https://cdn-icons-png.flaticon.com/512/2956/2956744.png"}
              alt=""
              />
            </div>
            <div className="right">
              <form>
                <div className="form-input">
                  <label htmlFor='file'> Image:<DriveFolderUploadIcon className='icon'/></label>
                  <input type="file" onChange={e => setFile(e.target.files[0])} id='file' style={{display: 'none'}}/>
                </div>
                {
                  inputs.map((input) => {
                    return (
                      <div className="form-input" key={input.id}>
                        <label>{input.label}</label>
                        <input type={input.type} placeholder={input.placeholder} />
                      </div>
                    )
                  })
                }
               
                <div className="form-input">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default New