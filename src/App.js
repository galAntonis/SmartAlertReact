import React, { useEffect } from 'react';


import {Navbar,Header, Overview} from './components'

import './App.css'

const App = () => {
  return (
	<div className="App">
			<Header/>
			<Navbar/>
			<Overview/>
	</div>
  )
}

export default App