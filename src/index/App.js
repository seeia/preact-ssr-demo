'use strict';
import { h, Component } from 'preact';


import Header from './components/Header';
// import Home from './home';
// import Profile from './profile';

export default class App extends Component {
	// handleRoute = e => {
	// 	this.currentUrl = e.url;
	// };
	constructor(props){
		super(props)
		this.state = {isToggleOn: true};
	}
	componentWillMount(){
		console.log('App componentWillMount')
	}
	componentDidMount(){
		console.log('App componentDidMount')
	}
	componentWillUnmount(){
		console.log('App componentWillUnmount')
	}
	componentWillReceiveProps(){
		console.log('App componentWillReceiveProps')
	}
	shouldComponentUpdate(){
		console.log('App shouldComponentUpdate')
	}
	componentWillUpdate(){
		console.log('App componentWillUpdate')
	}
	componentDidUpdate(){
		console.log('App componentDidUpdate')
	}
	handleClick() {
		console.log('bind event', this, this.state)
		this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
	}
	render() {
		return (
			<div id="app">
				<Header></Header>
        <div>111dasdaddsda</div>
				<div onClick={this.handleClick.bind(this)}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</div>
			</div>
		);
	}
}
