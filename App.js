import React,{Component} from 'react';
import Cardlist from './components/Cardlist';
import SearchBox from './components/SearchBox';
import './App.css';
import ErrorBoundry from './components/ErrorBoundry';
import Scroll from './components/Scroll';

class App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots:users})});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const {robots,searchfield} = this.state;
		const filterRobots = robots.filter( robot => {
					return robot.name.toLowerCase().includes(searchfield.toLowerCase());
				})

		return !robots.length ? 
				<h1>LOADING</h1>:
				(
				<div className='tc'>
				<h1>ROBOFRIENDS</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<ErrorBoundry>
					<Cardlist robots={filterRobots}/>
				</ErrorBoundry>
				</Scroll>
				</div>
				);
	}
}

export default App;