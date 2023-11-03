import React from 'react'
import './header.css'

import {
	FaUserAlt,FaBell,FaSignOutAlt
}from "react-icons/fa";

import { Tooltip } from "react-tooltip";
const Header = ({ route }) =>{
	let headerText = '';

	switch (route) {
	  case '/':
	  case '/index':
		headerText = 'Overview';
		break;
	  case '/statistics':
		headerText = 'Statistics';
		break;
	  case '/alerts':
		headerText = 'Alerts';
		break;
	  case '/settings':
		headerText = 'Settings';
		break;
	  case '/help':
		headerText = 'Help';
		break;
	  default:
		headerText = 'Page Not Found';
	}
	return (
		<div className='sma_header'>
			<Tooltip id="top-icons_tooltip" place="bottom" effect='float'/>
			<div></div>
			<div className="sma_header-title">
				<p>{headerText}</p>
			</div>
			<div className='sma_header-links'>
				<a data-tooltip-id="top-icons_tooltip" data-tooltip-content='Notifications'><FaBell/></a>
				<a data-tooltip-id="top-icons_tooltip" data-tooltip-content='User'><FaUserAlt/></a>
				<a data-tooltip-id="top-icons_tooltip" data-tooltip-content='Log out'><FaSignOutAlt/></a>
			</div>
		</div>
	)
}

export default Header