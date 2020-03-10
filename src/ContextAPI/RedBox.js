import React ,{Component} from 'react';
import NumberContext from './NumberContext';
import '../App.css'
class RedBox extends Component{
    
    render(){
        return(
      
            <div className='RedBox' >
                <NumberContext.Consumer>
                    {(context)=>context.number}
                </NumberContext.Consumer>
                {this.props.children}
                
            </div>

            
        )
    }
}
export default RedBox;