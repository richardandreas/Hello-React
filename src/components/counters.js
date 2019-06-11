import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	state = {
		counters: [
			{ id: 0, value: 1, product: "Milk" },
			{ id: 1, value: 0, product: "Cookies (with chocolate)" },
			{ id: 2, value: 0, product: "Cereal" },
			{ id: 3, value: 0, product: "Apples" },
			{ id: 4, value: 0, product: "Honey" },
			{ id: 5, value: 0, product: "Waffles" },
		]
	};

	render() {
		return (
			<div>
				<button onClick={this.reset} className="button is-info is-outlined">Reset List</button>
				<br></br><br></br>
				{this.state.counters.map(counter =>
					<Counter
						key={counter.id}
						// value={counter.value}
						// product={counter.product}
						counter={counter}
						// {...counter}
						onDelete={this.delete}
					/>)}
			</div>
		);
	}

	reset = () => {
		
	}

	delete = (counterToDelete) => {
		console.log("Counter deleted:", counterToDelete);
		const newCounters = this.state.counters.filter(counter =>
			counter.id !== counterToDelete.id
		);
		this.setState({counters: newCounters});
	}

}

export default Counters;