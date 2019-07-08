import React, { Component } from 'react';
import Shape from './Shape';

class Selector extends Component{

  state = {
    name: ''
  }



  changeText = (event) => {

    console.log("changeText: " + event.target.shape)
    console.log('changetext: ' + event.target.value)
    let shape = '';
    if (event.target.shape === 'square') {shape = 'Square'};
    if (event.target.shape === 'circle') shape = 'Circle';
    if (event.target.shape === 'triangle') shape = 'Triangle';
    this.setState({
      name: shape
    })
    
  }

  render() {



    return (
      <div className='container'>
        <nav className='navbar'>
          <h1>
            Selected: {this.state.name}
          </h1>
        </nav>

        <div className= 'shape-list'>
          {/* <Shape alt="Square" onClick={this.changeText} value='square'/>
          <Shape alt="Circle" onClick={this.changeText} value='circle'/>
          <Shape alt="Triangle" onClick={this.changeText} value='triangle'/> */}

          <Shape shape='square' onClick={this.changeText} value = 'square'/>
        <Shape shape='circle' onClick={this.changeText} value = 'circle'/>
        <Shape shape='triangle' onClick={this.changeText} value = 'triangle'/>
        </div>

        
      </div>
    )
  }
}

export default Selector;