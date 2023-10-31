import React, { useEffect } from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';

import {Navbar,Header, Overview} from './components'
import {Home,Statistics,Send_Notifications,Settings,Help} from './pages';

import './App.css'

const App = () => {
	return (
		  <BrowserRouter>
			  <Navbar>
				<Routes>
				  <Route path="/index" element={<Home/>}/>
				  <Route path="/statistics" element={<Statistics/>}/>
				  <Route path="/send-notifications" element={<Send_Notifications/>}/>
				  <Route path="/settings" element={<Settings/>}/>
				  <Route path="/help" element={<Help/>}/>
				</Routes>
			  </Navbar>
			  <Header/>
		  </BrowserRouter>
	);
  };
  
  export default App;
  