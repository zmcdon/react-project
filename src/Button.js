import React from 'react';
import './button.css';

export class Button extends React.Component {
	render() {
		return (
    <button className="btn">{this.props.text}</button>
		);
	}
}