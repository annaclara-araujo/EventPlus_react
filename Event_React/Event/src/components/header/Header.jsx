
import "./Header.css"
import Logo from "../../assets/img/logo.svg";
import Adm from "../../assets/img/simboloAdm.png"




const Header = () => {
    return(
        <header>
        <div className="layout_grid cabecalho">
        {/* /* ao clicar no link redireciona para tela Login */} 
        <img src= {Logo} alt= "Logo Event" />
       
     <div className="nav_header">
        <a className="link_header" href="">Home</a>
        <a className="link_header" href="">Eventos</a>
        <a className="link_header" href="">Usuarios</a>
        <a className="link_header" href="">Contatos</a>
    </div>

    <div className="div_adm">
        <a className="link_header" href="">Administrador<img src={Adm} /> </a>
    </div>

 </div>
</header>
    )
}

export default Header;