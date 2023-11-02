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

const Home = () => {
	return (
		<div class="sma_home">
			<div className="sma_home-grid selected_row">

				<div id="item-0"><Panel imgUrl={faCirclePlus} title='52'	subTitle='New Incidents'/>
				</div>
				<div id="item-1"><Panel imgUrl={faCircleRadiation} title='142'	subTitle='Total Incidents'/></div>
				<div id="item-2">&nbsp;</div>
				<div id="item-3"><Panel imgUrl={faHandHoldingMedical} title='2.653' subTitle='Lives saved'/></div>
				<div id="item-4"><Panel imgUrl={faUserPlus} title='23'	subTitle='New users' subTitle2='This month'/></div>

				<div id="item-5"></div>
				<div id="item-6">&nbsp;</div>
			</div>
		</div>
		
	)
}

export default Home;