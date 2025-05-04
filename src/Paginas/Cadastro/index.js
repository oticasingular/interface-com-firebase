import React, { Component } from 'react';
import firebase from '../../Firebase';
import "../../App.css"

class Cadastro extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            email: "",
            senha: "",
            dataNascimento: "",
            dados: []
        }

        this.cadastrar = this.cadastrar.bind(this);
    }

    async cadastrar() {

        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then(async (retorno) => {

            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome:  this.state.sobrenome,
                dataNascimento: this.state.dataNascimento
            });
            window.location.href = './principal'
        });
    }

    render() {
        return(
            <div className="form-container">
                <h1>Página de cadastro</h1>

                <input type="text" placeholder='Nome' onChange={(e) => this.setState({nome: e.target.value})} />
                <br/>
                <input type="text" placeholder='Sobrenome' onChange={(e) => this.setState({sobrenome: e.target.value})} />
                <br/>
                <input type="text" placeholder='Data de nascimento' onChange={(e) => this.setState({dataNascimento: e.target.value})} />
                <br/>
                <input type="text" placeholder='E-mail' onChange={(e) => this.setState({email: e.target.value})} />
                <br/>
                <input type="text" placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value})} />
                <br/>

                <div className="button-group">
                <button onClick={this.cadastrar}
                >Cadastrar </button>
                </div>
            </div>
        )
    }
}

export default Cadastro;
