var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	render: function() {
		return React.createElement('div', {onClick: this.increment},
			React.createElement('span', {}, 'dodaj' + this.state.counter)
		);
	}
});

var CounterDecr = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function() {
		return React.createElement('div', {onClick: this.decrement},
			React.createElement('span', {}, 'odejmij' + this.state.counter)
		);
	}
});

var element = React.createElement('div', {},
	React.createElement(Counter),
	React.createElement(CounterDecr)
);
ReactDOM.render(element, document.getElementById('app'));