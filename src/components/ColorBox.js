import React,{Component} from 'react';
import '../App.css';

class ColorBox  extends Component {
  constructor(){
    console.log('ColorBox constructor');
    super()
    this.state={
      color:'black',
      fontSize:'20'
    }
  }
  handleChange=(event)=> {
    this.setState({value: event.target.value});
  }
  
  selectColor(color){ 
    this.setState({color:color})
  }
  clickUp=()=>{
    this.setState({fontSize:parseInt(this.state.fontSize)+1})
  }
  clickDown=()=>{
    this.setState({fontSize:parseInt(this.state.fontSize)-1})
  }
  clickReset=()=>{
    this.setState({color:'black',fontSize:'20'})
  }
  render(){
    console.log('ColorBox render');
    const color=['red','blue','orange','pink']
    return(
      <div>
      <div className='ColorBox'>
        <h4>Color</h4>
        { color.map((color,index)=><div className='color' key={index} style={{backgroundColor:color}} onClick={()=>this.selectColor(color)}></div>) }
        
  
      </div>
      <input type='text' value='Color of Text ' style={{color:this.state.color,fontSize:this.state.fontSize+'px'}} onChange={this.handleChange}></input>
      <button onClick={this.clickUp}>Tăng</button>
      <button onClick={this.clickDown}>Giảm</button>
      <button onClick={this.clickReset}>Reset</button>
      
      </div>
    )
  }
  componentDidMount(){
    console.log( 'Component did Mount');
  }
  componentDidUpdate(){
    console.log('Component did Update');
  }
  componentWillUnmount(){
    console.log('Component Will Unmount');
  }
  
}


export default ColorBox;
