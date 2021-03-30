import React, {  Component } from 'react';
import CardList from '../components/CardList';
//import { robots }   from './robots';
import SearchBox from '../components/SearchBox';
//import 'tachyons';
import './App.css'
//import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component{
	constructor() {
		super()
		this.state = {
			robots: [],
	        searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({ robots: users}));
		 
	}

	onSearchChange = (event) => {
		 this.setState({ searchfield: event.target.value })
		 
	}
	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !robots.length ?
			 <h3> LOADING!!!!!!!!!!!!! </h3>
		: 
             (
		<div Class='tc'>
		<h1>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
        <scroll>
        <ErrorBoundry>
        <CardList robots={filteredRobots} />
        </ErrorBoundry>
        </scroll> 
        </div>
		);
		
      
	}
	 
}


export default App;