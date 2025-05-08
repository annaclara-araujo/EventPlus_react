import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/login/Login";
import ListaEventos from "../pages/listaEventos/ListaEventos";
import CadastroEvento from "../pages/cadastroEvento/CadastroEvento";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";
import CadastroTipoUsuario from "../pages/cadastroTipoUsuario/CadastroTipoUsuario";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} exact/>

                <Route path="/TipoEvento" element={<CadastroTipoEvento/>}/>

                <Route path="/Evento" element={<CadastroEvento/>}/>

                <Route path="/Listagem" element={<ListaEventos/>}/>

                <Route path="/TipoUsuario" element={<CadastroTipoUsuario/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;