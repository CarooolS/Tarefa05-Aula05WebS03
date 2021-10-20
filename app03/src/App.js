import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cont: 0
    };
  }

  incrementa = () =>{
    this.setState({cont: this.state.cont+1});
  }

  decrementa = () =>{
    this.setState({cont: this.state.cont-1});
  }

  render(){
    return(
      <div>
        <button type="button" onClick={this.incrementa}>Incrementa</button>
        <p>O valor do contador é: {this.state.cont}</p>
        <button type="button" onClick={this.decrementa}>Decrementa</button>
      </div>
    );
  }
}

export default App;
