import React from 'react';


/**
a component that changes its display according to buttons that update state. 
Utilising event handlers and state.
**/


class HelloWorld extends React.Component {
// initial state
    state = {
        who: 'WORLD',
    };

    render() {
        return (
            <div className='HelloWORLD'>
                <p>Hello, {this.state.who}!!!</p>

                <button
                onClick={() => this.setState({ who: 'FOLKS' })}
                >
                Folks
                </button>
                
                <button 
                onClick={() => this.setState({ who: 'FRIENDS' })}
                >
                Friends
                </button>
                
                <button 
                onClick={() => this.setState({ who: 'REACT' })}
                >
                React
                </button>
           
            </div>
        )
    }
}

export default HelloWorld
