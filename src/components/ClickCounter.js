import React from 'react';

export default class ClickCounter extends React.Component {
    state={
        count: 0
    }

    incrementClick = () =>{
        this.setState(
            (prevstate)=>({count:prevstate.count + 1
            }));
    }
    render() {    
        const {count}=this.state;  
        return (
            <div>
                <button type='button' onClick={this.incrementClick}>Clicked {count} Times</button>
            </div>
        );
    }
}