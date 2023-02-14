import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataTableFood from '../../components/Food/DataTableFood/DataTableFood'
import { storage } from '../../firebase'
import { database } from '../../firebase'
import { getDatabase, onValue, ref, set, remove, update } from 'firebase/database';
import {  uploadBytes, getDownloadURL} from 'firebase/storage'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';
const FoodPage = () => {
  const [foodData, setFoodData] = useState([])
  const [idFood, setIdFood] = useState("")
  const [nameFood, setNameFood] = useState("")
  const [categoriList, setCategoriList] = useState([])
  const [categoriFood, setCategoriFood] = useState("")
  const [priceFood, setPriceFood] = useState(0)
  const [descFood, setDescFood] = useState("")
  const [image, setImage] = useState();
  const [url, setUrl] = useState()

  
  const handleImageChange = (e) => {
    if(e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }
  // write

  const writeFoodData = (id, name, image, categori, desc, price) => {
    set(ref(database, '/Food/Food' + id), {
        category_Food: categori,
        id_Food: id,
        image_Food: image,
        information_Food: desc,
        name_Food: name,
        price_Food: price,
    })
}

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!categoriFood || !nameFood || !priceFood || !descFood || !image){
      toast.error("Vui lòng nhập đủ thông tin")
    }else {
      setIdFood(uuidv4())
      const imageRef = ref(storage, "/imageFood/"+ idFood);
      uploadBytes(imageRef, image)
      .then(() => {
      getDownloadURL(imageRef).then((url) => {
        setUrl(url);
    }).catch(error => {
        console.log(error.message, "err");
    });
      setImage(null)
    })
    writeFoodData(idFood, nameFood, url, categoriFood, descFood, priceFood)
    }
  }
  //read list categori
  const handleReadCategori = () => {
    onValue(ref(database, '/Category'), (snapshot) => {
        setCategoriList([])
        const data = snapshot.val();
        if(data !==null){
          Object.values(data).map((categori) => {
            setCategoriList((prev) => [...prev, categori.name_Category])
          })
        }
    })
}   
  useEffect(() => {
    handleReadCategori()
  },[])


  //read

  const handleReadData = () => {
    onValue(ref(database, '/Food'), (snapshot) => {
        setFoodData([])
        const data = snapshot.val();
        if(data !==null){
          Object.values(data).map((food) => {
            setFoodData((prev) => [...prev, food])
          })
        }
    })
}

  useEffect(() => {
      handleReadData()
  },[])

  //delete 
  const handleDelete = (id) => {
    try {
      remove(ref(database,'/Food/Food' + id))
      toast.success("Xoá thành công!")
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <div className='employee'>
    <Sidebar/>
    <div className="employee-container">
      <Navbar/>
      <div className='employee-desc'>
          <div className='title'>
              Quản Lí Món ăn
          </div>
          <div className='employee-form'>
              <form onSubmit={handleSubmit}>
                  <div className="input-form">
                      <label>Tên Món Ăn</label>
                      <input type="text" 
                      placeholder='Please enter dish name'
                      value={nameFood}
                      onChange={(e) => setNameFood(e.target.value)}
                      />
                  </div>
                  <div className='input-form'>
                    <select value={categoriFood} onChange={(e) => setCategoriFood(e.target.value)}>
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
                      <input type="file" onChange={(e) => handleImageChange(e)}/>
                  </div>
                  <div className='input-img'>
                    {
                        image && (
                            <img src={image} alt=""/>
                        )
                    }
                  </div>
                  <div className='input-form'>
                        <label>Mô tả</label>
                        <textarea name="" id="" cols="30" rows="10"
                        value={descFood} onChange={(e) => setDescFood(e.target.value)}
                        ></textarea>
                  </div>
                  <div className="input-form">
                      <label>Giá</label>
                      <input type="number" value={priceFood} onChange={(e) => setPriceFood(e.target.value)}
                      placeholder='Please enter the price'/>
                  </div>
                  <button type='submit' className='submit-btn'>Submit</button>
              </form>
              <div className='table'>
                <DataTableFood
                foodData={foodData}
                handleDelete={handleDelete}
                />
              </div>
          </div>
      </div>
      <div className='popup-update'>
         

      </div>
    </div>
  </div>
  )
}

export default FoodPage