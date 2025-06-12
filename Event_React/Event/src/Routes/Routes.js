import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroEvento from "../pages/cadastroEvento/CadastroEvento";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";
import CadastroTipoUsuario from "../pages/cadastroTipoUsuario/CadastroTipoUsuario";
import ListaEvento from "../pages/listaEvento/ListaEvento"
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Privado = (props) => {
    const {usuario} = useAuth();

    if (!usuario){
        return <Navigate to="/" />
    }

    if(usuario.tipoUsuario !== props.tipoPermitido) {
        return <Navigate to="/" />
    }

    return <props.item />
}


const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login/>} path="/" exact/>
                <Route element= {<Privado tipoPermitido="Adm" item={CadastroTipoEvento}/>} path="/TipoEvento"></Route>
                <Route element= {<Privado tipoPermitido="Adm" item={CadastroEvento}/>} path="/Evento"></Route>
                <Route element= {<Privado tipoPermitido="Adm" item={CadastroTipoUsuario}/>} path="TipoUsuario"></Route>
                <Route element= {<Privado tipoPermitido="comum" item={ListaEvento}/>} path="/listaEvento"></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;