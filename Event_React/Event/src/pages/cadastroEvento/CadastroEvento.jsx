import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro"

import Banner from "../../assents/img/banner_cadastroEvento.png"
const CadastroEvento = () => {
    return (
        <>
            <Header/>
                <Cadastro
                tituloCadastro = "Cadastro Evento"
                img_banner = {Banner}
                nomes = "Nome"
                
                />
            <Footer/>
        </>
    )
}

export default CadastroEvento;