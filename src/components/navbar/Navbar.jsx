import React, { useState } from "react";
import './navbar.css'
import logo from '../../assets/logo.png';
import {
	FaTh,FaHome,FaRegChartBar,FaBullhorn,FaShoppingBag,FaQuestionCircle, FaBars
}from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Navbar = ({children}) =>{
	const[isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen)
	const menuItem=[
		{
			path:"/index",
			name:"Home",
			icon: <FaHome/>
		},
		{
			path:"/statistics",
			name:"Statistics",
			icon: <FaRegChartBar/>
		},
		{
			path:"/alerts",
			name:"Alerts",
			icon: <FaBullhorn/>
		},
		{
			path:"/settings",
			name:"Settings",
			icon: <FaShoppingBag/>
		},
		{
			path:"/help",
			name:"Help",
			icon: <FaQuestionCircle/>
		}
	]

	return (
		<div className='sma_navbar'>
			<div style={{width: isOpen? "200px":"50px"}} className="sma_navbar-sidebar">
				<div className="sma_navbar-sidebar-top_section">
					<img src={logo} style={{display: isOpen? "block":"none"}} className="sma_navbar-sidebar-top_section-logo" alt='Menu'/>
					<div style={{marginLeft: isOpen? "50px":"0px"}} className="sma_navbar-sidebar-top_section-bars">
						<FaBars onClick={toggle}/>
					</div>
				</div>
				{ menuItem.map((item,index) => (
					<NavLink to={item.path} key={index} className="sma_navbar-sidebar_link" activeclassName = "active">
						<div className="sma_navbar-sidebar_link-icon">{item.icon}</div>
						<div style={{display: isOpen? "block":"none"}} className="sma_navbar-sidebar_link-text">{item.name}</div>
					</NavLink>
				))}
			</div>
			<main>{children}</main>
		</div>
		
	)
}

export default Navbar