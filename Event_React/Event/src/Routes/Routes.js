import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroEvento from "../pages/cadastroEvento/CadastroEvento";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";
import CadastroTipoUsuario from "../pages/cadastroTipoUsuario/CadastroTipoUsuario";
import ListaEvento from "../pages/listaEvento/ListaEvento"

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} exact/>
                
                <Route path="/Login" element={<Login/>} exact/>

                <Route path="/TipoEvento" element={<CadastroTipoEvento/>}/>

                <Route path="/Evento" element={<CadastroEvento/>}/>

                <Route path="/TipoUsuario" element={<CadastroTipoUsuario/>}/>

                <Route path="/ListaEvento" element = {<ListaEvento/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;