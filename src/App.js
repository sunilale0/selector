import React, { Component } from 'react';
import Shape from './Shape';

class Selector extends Component{

  state = {
    shapeName: 'Guess Name'
  }



  changeText = (shapeName) => {

    // console.log("changeText: " + props.value or props.someName)
    console.log("changeText: " + shapeName)
  
    this.setState({ 
      shapeName: shapeName
    })
    
  }

  render() {



    return (
      <div className='container'>
        <nav className='navbar'>
          <h1>
            Selected: {this.state.shapeName}
          </h1>
        </nav>

        <div className= 'shape-list'>
          {/* <Shape alt="Square" onClick={this.changeText} value='square'/>
          <Shape alt="Circle" onClick={this.changeText} value='circle'/>
          <Shape alt="Triangle" onClick={this.changeText} value='triangle'/> */}

        <Shape shape='square' selectShape={this.changeText} />
        <Shape shape='circle' selectShape={this.changeText}/>
        <Shape shape='triangle' selectShape={this.changeText} />
        </div>

        
      </div>
    )
  }
}

export default Selector;