import React from 'react';
import Button from './Button';

class Clock extends React.Component
{

    // constructor(props)
    // {
    //     super(props);
        
    // }
    state= { date: new Date(),locale:'bn-BD'};

    componentDidMount()
    {
        this.ClockTimer=setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.ClockTimer);
    }

    tick()
    {
        this.setState({
            date: new Date(),    
        });
    }

    handleClick=(locale)=>
    {
        this.setState({
            locale  
        });
    }

    render()
    {
        console.log('Clock rerenderd');
        const {date,locale}=this.state;
        return (
            <div>
                <h2>
                    <small> Happy Codeing -{date.toLocaleTimeString(locale)}</small>
                </h2>
                {locale==="bn-BD" ? (
                    <Button change={this.handleClick} locale="en-US" enable='false'>
                    </Button>
                ) : (
                    <Button change={this.handleClick} locale="bn-BD">
                    </Button>
                )}
            </div>    
        );
    }

}
export default Clock;