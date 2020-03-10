import React ,{Component} from 'react';
import '../App.css'
class BlueBox extends Component{
    
    render(){
        return(
            <div className='BlueBox' >
                {this.props.children}
            </div>
        )
    }
}
export default BlueBox;