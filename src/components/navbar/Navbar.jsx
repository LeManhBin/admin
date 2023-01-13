import React, { useContext } from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchOutlinedIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            VietNam
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({type: "TOGGLE"})}/>     
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <img src="https://kiemtientuweb.com/ckfinder/userfiles/images/anh-rose/rose-2.jpg" 
            alt="" 
            className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar