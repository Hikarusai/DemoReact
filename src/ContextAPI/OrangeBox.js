import React ,{Component} from 'react';
import NumberContext from './NumberContext';
import '../App.css';
class OrangeBox extends Component{

    render(){
        return(
            
                <div className='OrangeBox' >
                    <NumberContext.Consumer>
                       {(context)=>(
                        <div>
                            {context.number}
                            <button onClick={context.numberUp}>ClickMe</button>
                        </div>
                       )}
                        
                    </NumberContext.Consumer>
                    
                </div>
            
            
        )
    }
}
export default OrangeBox;