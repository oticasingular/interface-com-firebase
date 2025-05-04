import React, {Component} from "react";
import firebase from "../../Firebase";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: ""
        }
        this.acessar = this.acessar.bind(this);
    }

    async acessar(){
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {
             window.location.href = "./principal"
        })
        .catch((erro) => {

        });
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <input type="text" placeholder='E-mail' onChange={(e) => this.setState({email: e.target.value})} />
                <br/> 
                <input type="text" placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value})} />
                <br/>
                <button onClick={this.acessar}>Acessar</button> 
            </div>
        )
    }
}

export default Login;