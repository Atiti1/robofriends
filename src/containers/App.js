import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
//import { robots }   from './robots';
import SearchBox from '../components/SearchBox';
//import 'tachyons';
import './App.css'
//import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


function App() {
	const [robots, setRobots] = useState([])
	const [searchfield, setSearchfield] = useState('')

	useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users => {setRobots(users)}); 
  },[])
	const onSearchChange = (event) => {
		 setSearchfield(event.target.value)
		 
	}
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !robots.length ?
			 <h3> LOADING!!!!!!!!!!!!! </h3>
		: 
             (
		<div Class='tc'>
		<h1>RoboFriends</h1>
		<SearchBox searchChange={onSearchChange}/>
        <scroll>
        <ErrorBoundry>
        <CardList robots={filteredRobots} />
        </ErrorBoundry>
        </scroll> 
        </div>
		);
		
      
	}


export default App;