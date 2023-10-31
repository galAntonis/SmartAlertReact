import React from 'react'
import './header.css'

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
				<img src={notification} width='40px' height='40px'/>
				<img src={userlogo} width='40px' height='40px'/>
				<img src={logout} width='40px' height='40px'/>
			</div>
		</div>
	)
}

export default Header