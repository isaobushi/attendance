import React, { Component } from 'react';
import './App.css';
import './Components/Numpad';
import Numpad from './Components/Numpad';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="pad">
					<div
						className="card-panel  #9fa8da indigo lighten-3
"
					>
						PLEASE INSERT YOUR ID STUDENT NUMBER
					</div>
				</div>
				<Numpad />
			</div>
		);
	}
}

export default App;
