import "./Login.css";
import Logo from "../../assests/img/logo.svg";
import Botao from "../../components/botao/Botao";


const Login = () => {
    return(
        <main className= "main_login">
            <div className = "banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo Event" />
                    <form action= "" className="form_login">    
                        <div className="campos_login">
                    <div className="campo_input">
                        <input type="username" name="username" placeholder="username"/>                        
                    </div>
                    <div className="campo_input">
                        <input type="password" name="senha" placeholder="password"/>
                    </div>
                </div>
                <a href="">Esqueceu sua senha?</a>
                <Botao nomeBotao ="Login"/>
               </form>
            </section>
        </main>
    )
}

export default Login;