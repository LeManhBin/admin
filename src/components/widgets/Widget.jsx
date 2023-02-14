import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import BadgeIcon from '@mui/icons-material/Badge';
import { Link } from 'react-router-dom';
const Widget = ({type, orderQuantity, employeeQuantity,usersQuantity, revenue}) => {
  let data;

  //temporary
  const diff = 20;
 
  switch(type){
    case "user":
      data={
        title: "User",
        isMoney: false,
        link: "See all users",
        to: "users",
        amount: usersQuantity,
        icon: <PersonOutlineOutlinedIcon className='icon' 
        style={{color: '#FF7B54', backgroundColor: '#FFB26B' }}
        />,
      };
      break;
    case "Employee":
    data={
      title: "Employee",
      isMoney: false,
      link: "See all employee",
      to: "employee",
      amount: employeeQuantity,
      icon: <BadgeIcon className='icon'
      style={{color: '#47B5FF', backgroundColor: '#DFF6FF' }}
      />,
    };
    break;
    case "order":
      data={
        title: "Order",
        isMoney: false,
        link: "View all order",
        to: "order",
        amount: orderQuantity,
        icon: <ShoppingCartOutlinedIcon className='icon'
        style={{color: '#439A97', backgroundColor: '#62B6B7' }}
        />,
      };
      break;
    case "revenue":
      data={
        title: "Eevenue",
        isMoney: true,
        amount: revenue,
        icon: <MonetizationOnOutlinedIcon className='icon'
        style={{color: '#379237', backgroundColor: '#54B435' }}
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
          <div className="counter">{data.isMoney && "$"} {data.amount}</div> 
          <div className="link"><Link style={{textDecoration: 'none'}} to={`/${data.to}`}>{data.link}</Link></div>
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

export default React.memo(Widget)