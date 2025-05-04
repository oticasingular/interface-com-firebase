import React, {Component} from 'react';
import firebase from '../../Firebase';
class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: ""
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
                    sobrenome: retonro.data().sobrenome
                });
            });
         }

        });
    }

    render() {
        return(
            <div>
                Nome: {this.state.nome } <br/>
                Sobrenome: { this.state.sobrenome } 
            </div>
        )
    }
}

export default Principal;
