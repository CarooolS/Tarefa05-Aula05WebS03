import React from 'react';

class Identificacao extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "Carolina",
            sobrenome: "dos Santos",
            idade: 22
        };
    }

    render(){
        return(
            <div>
                <p>Meu nome é {this.state.nome} {this.state.sobrenome} e eu tenho {this.state.idade} anos. </p>
            </div>
        );
    }
}

export default Identificacao;