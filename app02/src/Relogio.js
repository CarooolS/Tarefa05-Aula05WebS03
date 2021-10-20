import React from 'react';

class Relogio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        };
    }

    render(){
        return(
            <div>
                <h2>Olá, React!</h2>
                <p>Agora é {this.state.date}</p>
            </div>
        );
    }
}

export default Relogio;