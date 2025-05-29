
import "./Header.css"
import Logo from "../../assests/img/logo.svg";
import Adm from "../../assests/img/simboloAdm.png"
import {Link} from "react-router-dom"



const Header = () => {
    return(
        <header>
        <div className="layout_grid cabecalho">
        {/* /* ao clicar no link redireciona para tela Login */} 
        
        <Link to="/">
        <img src= {Logo} alt= "Logo Event" />
        </Link>
       
     <nav className="nav_header">
        <Link to="/TipoEvento" className="link_header" href="">Home</Link>
        <Link to="/Evento" className="link_header" href="">Eventos</Link>
        <Link to="/TipoUsuario" className="link_header" href="">Usuarios</Link>
        <Link to="/Contatos" className="link_header" href="">Contatos</Link>
    </nav>

    <div className="div_adm">
         <Link to="/Administrador" className="link_header" href="">Administrador</Link>
    </div>
        <img className="adm" src={Adm}/>
 </div>
</header>
    )
}

export default Header;