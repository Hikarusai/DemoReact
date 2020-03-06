import React,{Component} from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import demo from './demoRedux/demo';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      showColorBox: true
    }
  }
  removeColorBox=()=>{
    this.setState({ showColorBox : !this.state.showColorBox});
  }
  render(){

    console.log('App render ');

    return(
      <div className='App'>
        
        <h1>Test Component</h1>
        <button onClick={this.removeColorBox}>Remove ColorBox</button>
        { this.state.showColorBox && <ColorBox/>}
        <hr/>


      </div>
    )
  }
}

export default App;
