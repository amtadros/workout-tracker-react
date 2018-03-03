import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Home extends Component {
	compoentDidmount(){
		browserHistory.push('/');
	}
	render(){
		return(
			<div id="home">
				Home page!
			</div>
		);
	}
}

export default Home;