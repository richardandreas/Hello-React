import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: this.props.counter.value,
		product: this.props.counter.product
	};

	countStyle = {
		marginTop: "6px",
		width: "44px"
	};

	render() {
		return (
			<div className="field is-grouped">
				<div className="control">
					<p style={this.countStyle} className={this.setTagClasses()}>{this.formatCount()}</p>
				</div>
				<div className="control">
					<button onClick={this.increment} className="button is-grouped is-primary">+</button>
				</div>
				<div className="control">
					<button onClick={this.decrement} className="button is-grouped is-success">–</button>
				</div>
				<div className="control">
					<button onClick={this.delete} className="button is-grouped is-danger">Delete</button>
				</div>
				<div className="control">
					<h3 className="is-size-5">{this.state.product}</h3>
				</div>
				<br></br>
			</div>
		);
	}

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	}

	decrement = () => {
		if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
	}

	delete = () => {
		this.props.onDelete(this.props.counter);
	}

	setTagClasses() {
		let countClasses = "tag has-text-weight-bold ";
		countClasses += this.state.count === 0 ? "is-warning" : "is-info";
		return countClasses;
	}

	formatCount() {
		const count = this.state.count;
		// return age === 0 ? "zero" : count;
		return count === 0 ? <span>zero</span> : count;
	}

}

export default Counter;