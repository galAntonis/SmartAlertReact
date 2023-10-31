import React from 'react'
import './header.css'

import {
	FaUserAlt,FaBell,FaSignOutAlt
}from "react-icons/fa";

import userlogo from '../../assets/user-logo.png';
import logout from '../../assets/logout.png';
import notification from '../../assets/notification.png';

const Header = () =>{
	return (
		<div className='sma_header'>
			<div></div>
			<div className="sma_header-title">
				<p>Overview Page</p>
			</div>
			<div className='sma_header-links'>
				<FaBell/>
				<FaUserAlt/>
				<FaSignOutAlt/>
			</div>
		</div>
	)
}

export default Header