import React from 'react';

class Counter extends React.Component {
    /*
    state = {
      count: 0
    };
    */
        // handleButtonClick() {
        //     console.log(this.state.count)
        // } 
        /*^^^^this will cause error use the below solution*/

    /*
    handleButtonClick = () => {
        //console.log(this.state.count)
        const newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }
    */

   constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = { count: 0, step: 10}
    }

   handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        this.setState({ count: this.state.count + 1 })
        this.setState({ step: this.state.step + 10})
    }

    render() {
        return (
            <div>
            <p>The current count: {this.state.count}</p>
            <button onClick={this.handleButtonClick}>
                Add 1
                Step 10
            </button>
            </div>
        )
    }
}

export default Counter


// Here's a quick challenge for you:

// Make a number prop called 'step'. 
//The 'step' prop can control how much we add to the count each time the button is clicked. 
//Don't forget to setup a default ('static defaultProps') for the step prop with the number '1'.