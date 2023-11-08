import React, {useState} from 'react'
import './panel.css'
import { Tooltip } from 'react-tooltip'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	FaEllipsisH
}from "react-icons/fa";
import MoreDropdown from '../moreDropdown/MoreDropdown';
const Panel = ({imgUrl, title, subTitle, subTitle2, statsImgUrl}) =>{
	const [open,setOpen] = useState(false);
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
				{statsImgUrl && <img src={statsImgUrl} />}
			</div>
			
			<div className="sma_home-panel_more">
				<a data-tooltip-id="more" data-tooltip-content="More" onClick={()=>setOpen(!open)}><FaEllipsisH/></a>
				{
					open && <MoreDropdown/>
				}
				
			</div>
			<div className="sma_home-panel_content">
				<h3></h3>
				<h5></h5>
			</div>			
		</div>
		
	)
}

export default Panel