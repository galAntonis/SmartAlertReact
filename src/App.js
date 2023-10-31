import React, { useEffect } from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';

import {Navbar,Header, Overview} from './components'
import {Home,Statistics,Alerts,Settings,Help} from './pages';

import './App.css'

const App = () => {
	return (
		<BrowserRouter>
			<Header/>
			<Navbar>
				<Routes>
					<Route path="/index" element={<Home/>}/>
					<Route path="/statistics" element={<Statistics/>}/>
					<Route path="/alerts" element={<Alerts/>}/>
					<Route path="/settings" element={<Settings/>}/>
					<Route path="/help" element={<Help/>}/>
				</Routes>
			</Navbar>
			
			  
		</BrowserRouter>
	);
  };
  
  export default App;
  