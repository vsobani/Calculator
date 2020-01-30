import React, { Component } from 'react';

import './App.css';

class Calulator extends Component {
  constructor(props){
    super(props);
    let tempNum,operator;
    this.state = {
        key:''
        
      };

    this.takeInput = this.takeInput.bind(this);
    this.number = this.number.bind(this);  
    this.store = this.store.bind(this);
    this.result = this.result.bind(this);
  }


  
  takeInput(event){
    let key = event.target.value;
    if (key){
      this.setState({
        key:parseInt(key)
      });
    } 
    else {
      this.setState({
        key:parseInt(0)
      });
    }
  }
  
    number(key){
      this.setState({
        key:this.state.key + key
      });
    }

    clearCalci(){
      this.setState({
        key:''
      });
    }
    store(operator){
      this.tempNum = this.state.key
      this.operator = operator

      this.setState({
        key:0
      });

    }

    result() {
      if (this.operator === '1'){
      this.setState ({
        key : parseInt(this.tempNum) + parseInt(this.state.key)
      });
    }
      else if (this.operator === '2'){
        this.setState ({
          key : parseInt(this.tempNum) - parseInt(this.state.key)
        });
      }
      else if (this.operator === '3'){
        this.setState ({
          key: parseInt(this.tempNum) * parseInt(this.state.key)
        });
      }
      else if (this.operator === '4'){
        this.setState ({
          key : parseInt(this.tempNum) / parseInt(this.state.key)
        });
      }
    }


  render() {
    return (
      <div className="App">
        <h1>Simple Calulator</h1>
       <input className="input" onChange={this.takeInput} value={this.state.key}/>
       <br/>
       <div className="">
       <button className ="btn" onClick={(event) => this.number('1')}>1</button>
       <button className ="btn" onClick={(event) => this.number('2')}>2</button>
       <button className ="btn" onClick={(event) => this.number('3')}>3</button><br/>
       <button className ="btn" onClick={(event) => this.number('4')}>4</button>
       <button className ="btn" onClick={(event) => this.number('5')}>5</button>
       <button className ="btn" onClick={(event) => this.number('6')}>6</button><br/>
       <button className ="btn" onClick={(event) => this.number('7')}>7</button>
       <button className ="btn" onClick={(event) => this.number('8')}>8</button>
       <button className ="btn" onClick={(event) => this.number('9')}>9</button><br/>
       <button className ="btn" onClick={(event) => this.number('0')}>0</button>
       <br/> 
      
       {/* <button className ="btn" onClick={this.clearCalci}>.</button><br/> */}
       
       <button className ="btn" onClick={(event) => this.store('1')}>+</button>     
       <button className ="btn" onClick={(event) => this.store('2')}>-</button>
       <button className ="btn" onClick={(event) => this.store('3')}>*</button>
       <button className ="btn" onClick={(event) => this.store('4')}>/</button>
       <button className ="btn" onClick={(event) => this.clearCalci()}>C</button> 
       <button className ="btn" onClick={this.result}>=</button>

       </div>
      </div>

    );
  }
}

class App extends Component{
  render(){
    return(
      <div>
        <Calulator key=''></Calulator>
      </div>
    )
  }
}
export default App;
