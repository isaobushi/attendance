import React, { Component } from 'react';
import axios from 'axios';

export default class extends Component {
	constructor() {
		super();
		this.state = {
			display: '',
		};
	}

	addNumber = e => {
		this.setState({
			display: this.state.display + e.target.innerText,
		});
	};
	clear = e => {
		this.setState({
			display: '',
		});
	};
	handleSubmit = e => {
		console.log('click');
		e.preventDefault();

		const user = {
			id: this.state.display,
		};
		axios.get(`http://launchpad-services.au-syd.mybluemix.net/attendance?student_id=${user.id}`).then(res => {
			console.log(user.id);
			console.log(res.data);
		});
	};

	render() {
		return (
			<div className="row">
				<div style={{ color: 'black' }} className="display col s12 #e8eaf6  btn #fafafa grey lighten-5">
					{this.state.display}
				</div>
				<div
					style={{ color: 'black' }}
					className="col s4 #e8eaf6 indigo lighten-5 btn"
					onClick={this.addNumber}
				>
					1
				</div>
				<div
					style={{ color: 'black' }}
					className="col s4 #e8eaf6 indigo lighten-5 btn"
					onClick={this.addNumber}
				>
					2
				</div>
				<div
					style={{ color: 'black' }}
					className="col s4 #e8eaf6 indigo lighten-5 btn"
					onClick={this.addNumber}
				>
					3
				</div>
				<div
					style={{ color: 'black' }}
					className="col s4 #e8eaf6 indigo lighten-5 btn"
					onClick={this.addNumber}
				>
					4
				</div>
				<div
					style={{ color: 'black' }}
					className="col s4 #e8eaf6 indigo lighten-5 btn"
					onClick={this.addNumber}
				>
					5
				</div>
				<div
					style={{ color: 'black' }}
					className="col s4 #e8eaf6 indigo lighten-5 btn"
					onClick={this.addNumber}
				>
					6
				</div>
				<div
					style={{ color: 'black' }}
					className="col s4 #e8eaf6 indigo lighten-5 btn"
					onClick={this.addNumber}
				>
					7
				</div>
				<div
					style={{ color: 'black' }}
					className="col s4 #e8eaf6 indigo lighten-5 btn"
					onClick={this.addNumber}
				>
					8
				</div>
				<div
					style={{ color: 'black' }}
					className="col s4 #e8eaf6 indigo lighten-5 btn"
					onClick={this.addNumber}
				>
					9
				</div>
				<div
					style={{ color: 'black' }}
					className="col s12 #e8eaf6 indigo lighten-5 btn"
					onClick={this.addNumber}
				>
					0
				</div>
				<div
					className="col s6 #e57373 red lighten-2 btn

"
					onClick={this.clear}
				>
					Clear
				</div>
				<div
					className="col s6 #90caf9 blue lighten-3 btn
"
					onClick={this.handleSubmit}
				>
					SUBMIT
				</div>
			</div>
		);
	}
}
