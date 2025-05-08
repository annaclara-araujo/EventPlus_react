import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Imagem from "../../assets/img/CadastroTipoUsuario.svg"

const CadastroTipoUsuario = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro Tipo Usuário"
                    campoPlaceholder="Titulo"
                    visibilidade="none"
                    NomeBotao="Cadastrar"
                    banner_img={Imagem}
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroTipoUsuario;