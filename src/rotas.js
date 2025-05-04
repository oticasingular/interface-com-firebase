import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Home from "./Paginas/Home"
import Cadastro  from "./Paginas/Cadastro"
import Principal from "./Paginas/Principal";
import Login from "./Paginas/Login";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/> 
                <Route path="/cadastro" element={<Cadastro />}/> 
                <Route path="/principal" element={<Principal />}/> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;