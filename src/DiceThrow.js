import React, {Component} from "react";
import Button from "./Button";

class DiceThrow extends Component {

    state = {
        counter: 1,
        results: []
      };
    
      // setState = this.setState.bind(this);
    
      addDice = (event) => {
          if (this.state.counter < 19) {
              this.setState({ counter: ++this.state.counter });
          }

        // this.setState({
        //   results: [...this.state.results, Math.floor(Math.random() * 6 + 1)]
        // });
      };
    
      removeDice = () => {
          if (this.state.counter > 1) {
              this.setState({ counter: --this.state.counter });
          }

        // const copyState = [...this.state.results];
        // copyState.pop();
        // this.setState({
        //   results: copyState
        // });
      };

      throwDice = (event) => {
          this.setState({results: []})
        // this.setState({ result: Math.floor(Math.random() * 6 + 1) });
        // this.setState((prevState) => ({
        //   results: [...prevState.results, Math.floor(Math.random() * 6 + 1)]
        // }));
        // console.log(this.state.results);

      };


    render() {
        return (
            <div className="main-wrapper">
            <p>
              Throwing <span>{this.state.counter}</span> dice(s)
            </p>
            {/* {this.state.flag
              ? this.state.results.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })
              : null} */}
            {/* <p>{this.state.result}</p> */}
            <div>
              <Button text="Add" func={this.addDice} />
              <Button text="Remove" func={this.removeDice} />
              <Button text="Throw" func={this.throwDice} />
            </div>
          </div>
        )
    }
}

export default DiceThrow;