import React from 'react';

class Retangulo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comprimento: 8,
            largura: 5
        };
    }

    mudarLargura = () =>{
        this.setState({largura: 6});
    }

    render() {
        const area = parseInt(this.state.comprimento) * parseInt(this.state.largura);
        return (
            <div>
                <p>A área do Retangulo é: {area} </p>
                <button type="button" onClick= {this.mudarLargura}>mudar largura</button>
            </div>
        );
    }
}

export default Retangulo;