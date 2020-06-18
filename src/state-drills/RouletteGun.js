import React from 'react';

/***********************************************************************************
    A component that combines state and props. 
    The parent of this component will pass in a prop that the number of which 
    chamber contains a bullet, and the number should be between 1 and 6. 
    When a user clicks on a button, the component will choose a random chamber 
    and pull the trigger! If the chamber with the bullet in is chosen, 
    the component will render BANG!!!!
*************************************************************************************/


class RouletteGun extends React.Component {

    //default COMPONENT PROP = bulletInChamber{6}
    static defaultProps = {
        bulletInChamber: 6
    };

    //initial state
    state = {
        chamber: null,
        spinningTheChamber: false,
    };

    //clear timeout using "clearTimeout(timeout)"
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    //handle user click on <button "onClick={this.handleClick}">
    handleClick = () => {
        this.setState({
        //state updates "spinningTheChamber" to 'true'
        spinningTheChamber: true,
        })

        //timeout using "let timeout = setTimeout(callback, timeInMs)"
        this.timeout = setTimeout(() => {

        //random number between 1 and 6 generated with "Math.ceil(Math.random() * 6)"
        const randomChamber = Math.ceil(Math.random() * 6)
        
        
        this.setState({
            //state updates with generated random number as the new value for "chamber"
            chamber: randomChamber,
            //"spinningTheChamber" updates to 'false' 
            spinningTheChamber: false,
        })
        //timeout should be registered for 2 seconds
        }, 2000)
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
        return 'spinning the chamber ...'
        } else if (chamber === bulletInChamber) {
        return 'BANG!!!!!'
        } else {
        return 'you\'re safe!'
        }
    }

    render() {
        return (
        <div className='RouletteGun'>
            <p>{this.renderDisplay()}</p>
            <button className='GunTrigger' onClick={this.handleClick}>
            Pull the trigger!
            </button>
        </div>
        )
    }
}





export default RouletteGun