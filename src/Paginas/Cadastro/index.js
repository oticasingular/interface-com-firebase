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

        this.gravar = this.gravar.bind(this);
        this.listar = this.listar.bind(this);
    }

   async gravar() {

        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then(async (retorno) => {

            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome:  this.state.sobrenome
            });

        });


        // await firebase.firestore().collection("usuario").add({
        //   nome: this.state.nome,  
        //   sobrenome: this.state.sobrenome,  
        // })
    }

    async listar() {
        await firebase.firestore().collection("usuario").get().then((retorno) => {
            var state = this.state;
            retorno.forEach((item) => {
                state.dados.push({
                    id: item.id,
                    nome: item.data().nome,
                    sobrenome: item.data().sobrenome
                });
            });
            this.setState(state);
        });
    }

    render() {
        return(
            <div>
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
                <div style={{ marginTop: '20px' }}>
                <button onClick={this.gravar}
                >Gravar </button>
                </div>
                <div style={{ marginTop: '20px' }}>
                <button onClick={this.listar}>Listar</button> <br/>
                </div>

                <ul>
                    {this.state.dados.map((item) => {
                        return(
                            <li> {item.nome + " " + item.sobrenome} </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Cadastro;
