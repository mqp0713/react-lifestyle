import React, { Component } from 'react';

class Counter extends Component {
	// 设置默认 props 的值
	static defaultProps = {
		count: 0,
	};
	// 构造函数 construcor
	constructor(props){
		console.log('counterConstructor');
		super(props);
		this.state = {
			counter: 0,
		};
		this.handleIncrease = this.handleIncrease.bind(this);
	}
	// componentWillMount()
	componentWillMount(){
		console.log('counterComponentWillMount');
	}
	// componentDidMount
	componentDidMount(){
		console.log('counterComponentDidMount');
	}
	// componentWillReceiveProps
	componentWillReceiveProps(nextProps){
		console.log('counterComponentWillReceiveProps',nextProps);
	}
	// shouldComponentUpdate
	shouldComponentUpdate(nextProps, nextState) {
		console.log('counterShouldComponentUpdate',nextProps,nextState);
		return this.props.count !== nextProps.count || this.state.counter !== nextState.counter;
	}
	// componentWillUpdate
	componentWillUpdate(){
		console.log('counterComponentWillUpdate');
	}
	// componentDidUpdate
	componentDidUpdate(){
		console.log('counterComponentDidUpdate');
	}
	// componentWillUnmount
	componentWillUnmount(){
		console.log('counterComponentWillUnmount');
	}
	// 点击增加1
	handleIncrease(){
		let addCounter = this.state.counter;
		
		this.setState({
			counter: addCounter + 1
		})
	}
  render() {
		console.log('counterRender');
		
		return (
			<div>
				当前 props 值为：{this.props.count}
				<br />
				当前 state 值为：{this.state.counter}
				<button onClick={this.handleIncrease}>点击增加</button>
			</div>
		)
	}
}

export default Counter;