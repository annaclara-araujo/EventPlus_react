
import "./Botao.css"

const Login = (props) => {
    return(
        <button type="submit"  className="botao">{props.nomeBotao}</button>

    )
}

export default Login;