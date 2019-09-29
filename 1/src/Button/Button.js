import React from 'react';
import './Button.css';

class Button extends React.Component{
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return <button>{this.props.buttonText} </button>
    }
}
export default Button;