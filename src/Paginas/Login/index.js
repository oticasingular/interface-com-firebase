import React, {Component} from "react";
import firebase from "../../Firebase";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            erroMensagem: ""
        }
        this.acessar = this.acessar.bind(this);
    }

    async acessar() {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {
            window.location.href = "./principal";
        })
        .catch(() => {
            this.setState({ erroMensagem: 'Usuário não cadastrado!' });
        });
    }
    
    

    cadastrar() {
        window.location.href= "./cadastro"
    }
    
    render() {
        return (
            <div className="form-container">
                <h1>Login</h1>
                <input type="text" placeholder='E-mail' onChange={(e) => this.setState({email: e.target.value})} />
                <br/> 
                <input type="password" placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value})} />
                <br/>
                <div className="button-group">
                    <button onClick={this.acessar}>Acessar</button> 

                    
                    <button onClick={this.cadastrar}>Cadastrar</button>
                </div>
                {this.state.erroMensagem && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                    {this.state.erroMensagem}
                </div>
            )}

            </div>
        )
    }
}

export default Login;