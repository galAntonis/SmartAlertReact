import React, { useEffect } from 'react';
import { BrowserRouter,Router, Routes , Route, useLocation } from 'react-router-dom';

import {Navbar,Header, Overview} from './components'
import {Home,Statistics,Alerts,Settings,Help} from './pages';

import './App.css'

import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "./firebase_setup/firebase"

function Title(){
	const location = useLocation();
	return(
		<Header route={location.pathname} />
	);
	
}
const App = () => {
	const ref = collection(firestore, "test_data");
	return (
		<BrowserRouter>
			<Title/>
			<Navbar>
				<Routes>
				<Route path="/" element={<Home name='Antonis' />} />
				<Route path="/index" element={<Home name='Antonis' />} />
				<Route path="/statistics" element={<Statistics />} />
				<Route path="/alerts" element={<Alerts />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/help" element={<Help />} />
				</Routes>
			</Navbar>
   		</BrowserRouter>
	);
  };
  
  export default App;
  