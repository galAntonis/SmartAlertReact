import React from 'react'
import './navbar.css'

import logo from '../../assets/logo.png';
import home from '../../assets/menu-white/home-white.png';
import barchart from '../../assets/menu/bar-chart.png';
import send from '../../assets/menu/send.png';
import settings from '../../assets/menu/settings.png';
import help from '../../assets/menu/help.png';

const Navbar = () =>{

	return (
		<div className='sma_navbar'>
			<div className="sma_navbar-logo">
				<img src={logo} alt='Menu'/>
			</div>
			<div className='sma_navbar-links'>
				<ul>
					<li><img src={home} className='active' alt='Home' /></li>
					<li><img src={barchart} alt='Statistics' /></li>
					<li><img src={send} alt='Send Notifications' /></li>
					<li><img src={settings} alt='Settings' /></li>
					<li><img src={help} alt='Help' /></li>
				</ul>
			</div>
		</div>
		
	)
}

export default Navbar