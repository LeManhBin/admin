import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BadgeIcon from '@mui/icons-material/Badge';
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" className='text-style'>
          <span className="logo">Admin</span>
        </Link>       
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" className='text-style'>
            <li>
              <DashboardIcon className='icon'/>
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LIST</p>
          <Link to='/employee' className='text-style'>
            <li>
              <BadgeIcon className='icon'/>
              <span>Employee</span>
            </li>
          </Link>

          <Link to='/users' className='text-style'>
            <li>
              <SupervisedUserCircleIcon className='icon'/>
              <span>Users</span>
            </li>
          </Link>
          
          <Link to='/categori' className='text-style'>
            <li>
              <CategoryIcon className='icon'/>
              <span>Category</span>
            </li>
          </Link>
          
          <Link to='/food' className='text-style'>
            <li>
              <InventoryIcon className='icon'/>
              <span>Food</span>
            </li>
          </Link>
          <Link to='/order' className='text-style'>
            <li>
              <BookmarkBorderIcon className='icon'/>
              <span>Orders</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option" onClick={() => dispatch({type:"LIGHT"})}>
          
        </div>
        <div className="color-option" onClick={() => dispatch({type:"DARK"})}>

        </div>
      </div>
    </div>
  )
}

export default Sidebar