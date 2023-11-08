import React, { useState } from "react";
import './moreDropdown.css'


const MoreDropdown = () => {
	return(
		<div className="flex flex-col dropDown">
			<ul className="flex flex-col gap-4"> 
				<li>Profile</li>
				<li>Settings</li>
				<li>Logout</li>
			</ul>
		</div>
	)
}

export default MoreDropdown