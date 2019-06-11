import React, { Component } from 'react';

class Header extends Component {
	state = {
		name: 'Nicholas',
		nickname: 'Niki',
		imageUrl: "http://picsum.photos/200",
		hobbies: [
			{ id: 0, name: "Do random tutorials" },
			{ id: 1, name: "Beer with the guys" },
			{ id: 2, name: "Skydiving" }
		]
	};

	render() {
		return (
			<React.Fragment>
				<h1 className="title">Hello React!</h1>
				<p>My name is {this.state.name},
				but you can call me {this.state.nickname}!</p>
				<img className="is-256x256" src={this.state.imageUrl} alt="random"></img>
				<br></br><br></br>
				<h2 className="subtitle">My hobbies are:</h2>
				<ul className="list">
					{this.state.hobbies.map(hobby =>
						<li className="list-item" key={hobby.id}>{hobby.name}</li>)}
				</ul>
			</React.Fragment>
		);
	}

}

export default Header;