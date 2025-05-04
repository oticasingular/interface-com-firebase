import React, {Component} from 'react';
import firebase from '../../Firebase';
class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            dataNascimento: ""
        }
    }

    async componentDidMount() {
        await firebase.auth().onAuthStateChanged(async (usuario) => {
         if(usuario){
            var uid = usuario.uid;

            await firebase.firestore().collection("usuario").doc(uid).get()
            .then((retonro) => {
                this.setState({
                    nome: retonro.data().nome,
                    sobrenome: retonro.data().sobrenome,
                    dataNascimento: retonro.data().dataNascimento
                });
            });
         }

        });
    }

    novoCadastro (){
        window.location.href = './cadastro'
    }
    novoLogin() {
        window.location.href = './'
    }
    render() {
        return(
            
            <div className="form-container">
                <h1>Dados do(a) usuário(a) logado(a):</h1>
                Nome: {this.state.nome } <br/>
                Sobrenome: { this.state.sobrenome } <br/>
                Data de nascimento: { this.state.dataNascimento }

                <div className="button-group">
                <button onClick={this.novoCadastro}
                >Novo Cadastro </button>
                <button onClick={this.novoLogin}
                >Novo Login </button>
                </div>
            </div>
        )
    }
}

export default Principal;
