import React from 'react'
import './panel.css'
import { Tooltip } from 'react-tooltip'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	FaEllipsisH
}from "react-icons/fa";
const Panel = ({imgUrl, title, subTitle, subTitle2}) =>{

	return (
		<div className='sma_home-panel'>
			<Tooltip id="more" />
			<div className="sma_home-panel_content">
				<div className="sma_home-panel_image">
					<FontAwesomeIcon icon={imgUrl} />
					
				</div>
				<div className="sma_home-panel_image-text">
						<div className="sma_home-panel_image-primtext">
						{title}
						</div>	
						<div className="sma_home-panel_image-sectext_container">
							<div className="sma_home-panel_image-sectext">
							{subTitle}
							</div>
							<div className="sma_home-panel_image-sectext2">
							{subTitle2}
							</div>
						</div>
				</div>
			</div>
			
			<div className="sma_home-panel_more">
				
				<a data-tooltip-id="more" data-tooltip-content="More"><FaEllipsisH/></a>
				
			</div>
			<div className="sma_home-panel_content">
				<h3></h3>
				<h5></h5>
			</div>			
		</div>
		
	)
}

export default Panel