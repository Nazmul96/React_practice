import React from 'react';

export default class Counter extends React.Component{

    state={
        count: 0
    }

    incrementClick = () =>{
        this.setState(
            (prevstate)=>({count:prevstate.count + 1
            }));
    }

    render(){
        const {render}=this.props;
        const { count } = this.state;
        console.log(render);
        return render(count,this.incrementClick);          
    }
}