import React,{Component} from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import demo from './demoRedux/demo';
import DemoHook from './ReactHook/DemoHook';
import NumberContext from './ContextAPI/NumberContext';
import NumberProvider from './ContextAPI/NumberProvider';
import RedBox from './ContextAPI/RedBox';
import BlueBox from './ContextAPI/BlueBox';
import OrangeBox from './ContextAPI/OrangeBox';
import Image from './HigherOderComponent/Image';
import HoverOpacity from './HigherOderComponent/HoverOpacity';
import WithHoverComponet from './HigherOderComponent/withHoverOpacity';
import withHoverOpacity from './HigherOderComponent/withHoverOpacity';
 
const HigherOderHover=withHoverOpacity(Image);

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
        <DemoHook text='Demo Hook'/>

        <hr/>
        <h1>ContextAPI</h1>
        <NumberProvider>
          <RedBox>
            <BlueBox>
              <OrangeBox/>
            </BlueBox>
          </RedBox>
        </NumberProvider>
        <hr/>

        <h1>Demo Higher Oder Component</h1>
        {/* <HoverOpacity>
          <Image src='https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/images/image_licorice.jpg'/>
        </HoverOpacity>
        */}
        <HigherOderHover src='https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/images/image_licorice.jpg'/>
      </div>
    )
  }
}

export default App;
