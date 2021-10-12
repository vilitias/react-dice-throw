import React from "react";

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.func}>{this.props.text}</button>
        )
    }
}

export default Button;