import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widget = ({type}) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch(type){
    case "user":
      data={
        title: "User",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon className='icon' 
        style={{color: '#FF7B54', backgroundColor: '#FFB26B' }}
        />,
      };
      break;
    case "order":
      data={
        title: "Order",
        isMoney: false,
        link: "View all order",
        icon: <ShoppingCartOutlinedIcon className='icon'
        style={{color: '#439A97', backgroundColor: '#62B6B7' }}
        />,
      };
      break;
    case "erarning":
      data={
        title: "Erarnings",
        isMoney: true,
        link: "See net earnings",
        icon: <MonetizationOnOutlinedIcon className='icon'
        style={{color: '#379237', backgroundColor: '#54B435' }}
        />,
      };
      break;
    case "balance":
      data={
        title: "Balance",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceOutlinedIcon className='icon'
        style={{color: '#47B5FF', backgroundColor: '#DFF6FF' }}
        />,
      };
      break;
    default:
      break;

  }

  return (
    <div className='widget'>
        <div className="left">
          <div className="title">{data.title}</div>
          <div className="counter">{data.isMoney && "$"} {amount}</div>
          <div className="link">{data.link}</div>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon/>
            {diff} %
          </div>
          {data.icon}
        </div>
    </div>
  )
}

export default Widget