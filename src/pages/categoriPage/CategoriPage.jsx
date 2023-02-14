import React, { useEffect, useState } from 'react'
import DataTableCategori from '../../components/Categori/DataTableCategori/DataTableCategori'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { v4 as uuidv4 } from 'uuid';
import { database } from '../../firebase'
import { getDatabase, onValue, ref, set, remove, update } from 'firebase/database';
import { toast } from 'react-toastify';
import { storage } from '../../firebase'
import { uploadBytes, getDownloadURL } from 'firebase/storage'
import UpdateCategori from '../../components/Categori/UpdateCategori/UpdateCategori';

const CategoriPage = () => {
    const [isUpdate, setIsUpdate] = useState(false)
    const [categoriData, setCategoriData] = useState([]);
    const [idCategori, setIdCategori] = useState("");
    const [nameCategori, setNameCategori] = useState("");
    const [imgCategori, setImgCategori] = useState();

    const [tempId, setTempId] = useState("")
    const [nameCategoriEdit, setNameCategoriEdit] = useState("");
    const [imgCategoriEdit, setImgCategoriEdit] = useState();
    const [ url, setUrl] = useState()
    const handleUploadImage = (e) => {
        if(e.target.files[0]) {
            setImgCategori(e.target.files[0]);
        }
    }
    //write
    const writeCategoriData = (id, name, image) => {
        set(ref(database, '/Category/Categori' + id), {
            id_category: id,
            image_Category: image,
            name_Category: name
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!nameCategori || !imgCategori) {
            toast.error("Vui lòng nhập đủ thông tin!!")
        }else{
            setIdCategori(uuidv4())
            const imageRef = ref(storage, "/imageCategori"+ idCategori);
            uploadBytes(imageRef, imgCategori)
            .then(() => {
            getDownloadURL(imageRef).then((url) => {
                setUrl(url);
            }).catch(error => {
                console.log(error.message, "err");
            });
            setImgCategori(null)
            })
            writeCategoriData(idCategori, nameCategori, url)
            toast.success("Thêm mới thành công")
        }
      }
      
      //read
      const handleReadData = () => {
        onValue(ref(database, '/Category'), (snapshot) => {
            setCategoriData([])
            const data = snapshot.val();
            if(data !==null){
              Object.values(data).map((categori) => {
                setCategoriData((prev) => [...prev, categori])
              })
            }
        })
    }
    useEffect(() => {
        handleReadData()
    },[])

    //remove 
    const handleDelete = (id) => {
        try {
          remove(ref(database,'/Category/Category' + id))
          toast.success("Xoá thành công!")
        } catch (error) {
          toast.error(error)
        }
    }

    //update
    const handleUpdate = () => {
        update(ref(database, '/Category/Category' + tempId), {
            id_category: tempId,
            image_Category: imgCategoriEdit,
            name_Category: nameCategoriEdit,
        })
        setIsUpdate(false)
        // console.log('update bên employee', fullNameEmployee,phoneNumberEmployee, passwordEmployee)
    }
  return (
    <div className='employee'>
    <Sidebar/>
    <div className="employee-container">
      <Navbar/>
      <div className='employee-desc'>
          <div className='title'>
              Quản Lí Danh Mục
          </div>
          <div className='employee-form'>
              <form onSubmit={handleSubmit}>
                  <div className="input-form">
                      <label>Tên Danh Mục</label>
                      <input type="text" value={nameCategori} 
                      placeholder='Enter your full name' onChange={(e) => setNameCategori(e.target.value)}/>
                  </div>
                  <div className="input-form">
                      <label>Hình Ảnh</label>
                      <input type="file"
                      placeholder='Enter your phone number' onChange={(e) => handleUploadImage(e)}/>
                  </div>
                  <div className='input-img'>
                    {
                        imgCategori && (
                            <img src={url} alt=""/>
                        )
                    }
                  </div>
                  <button type='submit' className='submit-btn'>Submit</button>
              </form>
              <div className='table'>
                  <DataTableCategori 
                  categoriData={categoriData}
                  handleDelete={handleDelete}
                  setIsUpdate={setIsUpdate}
                  setTempId={setTempId}
                  setNameCategoriEdit={setNameCategoriEdit}
                  setImgCategoriEdit={setImgCategoriEdit}
                  />
              </div>
          </div>
      </div>
      <div className='popup-update'>
         {
            isUpdate && (
                <UpdateCategori
                setIsUpdate={setIsUpdate}
                tempId={tempId}
                handleUpdate={handleUpdate}
                nameCategori={nameCategori}
                imgCategori={imgCategori}
                imgCategoriEdit={imgCategoriEdit}
                nameCategoriEdit={nameCategoriEdit}
                />
            )
         }

      </div>
    </div>
  </div>
  )
}

export default CategoriPage