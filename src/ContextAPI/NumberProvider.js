import React,{Component} from 'react';
import NumberContext from './NumberContext';

export default class extends  Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         number : 10
    //     }
    //     this.numberUp=this.numberUp.bind(this);
    // }
    state={
        number:10,
        numberUp:()=>{
            this.setState({number:this.state.number+1})
            console.log(this.state.number)
        }
    }
    
    // numberUp(){
    //     this.setState=({ 
    //         number : this.state.number +1
    //     })
    //     console.log(this.state.number)
    // }
    render(){
        
        return(
            <NumberContext.Provider value={this.state}>
                {this.props.children}             
            </NumberContext.Provider>
        )
       
    }
}