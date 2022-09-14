import React from 'react';

export default class HoverCounter extends React.Component {
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
                <h1 onMouseOver={this.incrementClick}>Hovered {count} Times</h1>
            </div>
        );
    }
}