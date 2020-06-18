import React from 'react';

/******************************************************************
a component that uses life-cycles, setInterval and state 
to alternate between rendering either "tick" or "tock" for a time 
and then rendering "BOOM!!!!".
*******************************************************************/

/********************************************************************
 * :::: life-cycle methods ::::
 * 1. constructor (once per component instance)
 * 2. render  --> 3. DOM is updated (happens every time props change)
 * 4. componentDidMount
 * 5. componentWillUnmount
********************************************************************/



class Bomb extends React.Component {
    // initial state - CONSTRUCTOR
    state = { count: 0 };

    // component mounts - JS METHOD
    componentDidMount() {
        //registers an interval - JS METHOD
        this.interval = setInterval(() => {
            //adds +1 to the count in state 
            this.setState({
                count: this.state.count + 1
            })
        // for every second (1000ms = 1sec)
        }, 1000)        
    }

    // component unmounts - JS METHOD
    componentWillUnmount() {
        //clears the interval - JS METHOD
        clearInterval(this.interval)
    }

    //render the display - FUNCTION
    renderDisplay() {
        const { count } = this.state

        // when the count equals to or goes above 10
        if (count >= 10) {
            //clear the interval
            clearInterval(this.interval)
            //display "BOOM!!!!"
            return 'B-O-O-M!!!'
        }

        // when the count is divisible by 2
        else if (count % 2 === 0) {
            //display the word "tick";
            return 'TICK!'
        }

        // when the count is NOT divisible by 2
        else {
            //display the word "tock";
            return 'TOCK!!'
        }
    }


    //DOM will show either "tick", "tock" or "BOOM!!!!" 
    //by calling the renderDisplay FUNCTION
    render() {
        return (
            <div className='CountingBomb'>
                {this.renderDisplay()}
            </div>
        )
    }
}

export default Bomb