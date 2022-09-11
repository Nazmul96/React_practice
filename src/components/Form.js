import React from 'react';

export default class Form extends React.Component{
    state={
        title:'Javascript',
        description: 'Alhamdulilallah for everything',
        library:'React',
        isAwesome:true
    };

    submitHandler=(e)=>{
        e.preventDefault();
        const {title,description,library,isAwesome}=this.state;
        console.log(title,description,library,isAwesome);
    }

    handleChange=(e)=>{

        // this.setState({
        //     [e.target.name]:e.target.value
        // })
      //console.log(e.target.type);  
      if(e.target.type === 'text')  
        this.setState({
            title:e.target.value
        })
     else if(e.target.type === 'textarea')  
        this.setState({
            description:e.target.value
     })
     else if(e.target.type === 'select-one') 
        this.setState({
            library:e.target.value
     })
     else if(e.target.type === 'checkbox') 
     this.setState({
        isAwesome:e.target.checked
     })  

    };

    render(){
        
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name="title" type="text" placeholder='Enter a value' value={this.state.title}  onChange={this.handleChange} />
                    <br/>
                    <br/>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    <br/>
                    <br/>
                    <select value={this.library} onChange={this.handleChange} name="library">
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="checkbox" checked={this.state.isAwesome} onChange={this.handleChange} name="isAwesome"/>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}