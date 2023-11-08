import React from "react";
import './home.css'
import { Panel } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserPlus, // the clock icon
	faHandHoldingMedical, // the user circle icon
	faCircleRadiation,
	faCirclePlus // a cup of coffee
} from "@fortawesome/free-solid-svg-icons";

import stats1 from '../../assets/statistics/stats1.png'
import stats2 from '../../assets/statistics/stats2.png'
import stats3 from '../../assets/statistics/stats3.png'
const Home = ({name}) => {
	return (
		<div class="sma_home">
			<div className="sma_home-content">
				<div className="sma_home_greeting">
					<div className="sma_home_greeting-title">
						<p>Hello {name}</p>
					</div>
					<div className="sma_home_greeting-subtitle">
						<p>Welcome to Smart Alert Overview page</p>
					</div>
				</div>
				
				<div className="sma_home-grid selected_row">

					<div id="item-0"><Panel imgUrl={faCirclePlus} title='52'	subTitle='New Incidents'/>
					</div>
					<div id="item-1"><Panel imgUrl={faCircleRadiation} title='142'	subTitle='Total Incidents'/></div>
					<div id="item-2"><Panel statsImgUrl={stats2}/></div>
					<div id="item-3"><Panel imgUrl={faHandHoldingMedical} title='2.653' subTitle='Lives saved'/></div>
					<div id="item-4"><Panel imgUrl={faUserPlus} title='23'	subTitle='New users' subTitle2='This month'/></div>

					<div id="item-5"><Panel statsImgUrl={stats1}/></div>
					<div id="item-6"><Panel statsImgUrl={stats3}/></div>
				</div>
			</div>
		</div>
		
	)
}

export default Home;