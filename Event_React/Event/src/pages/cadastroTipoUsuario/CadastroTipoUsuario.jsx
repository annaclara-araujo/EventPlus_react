import Imagem from "../../assests/img/cadastrousuario.png"
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

const CadastroTipoUsuario = () => {
    return (
        <>
            <Header/>
            <main>
                <Cadastro
                tituloCadastro="Cadastro Tipo De Usuarios"
                visibilidade="none"
                NomeBotao="Cadastrar"
                img_banner={Imagem}
                campoPlaceholder="Titulo"
                />

                <Lista
                listatitulo = "Lista Tipo De Usuario"
                titulocoluna = "Titulo"
                titulo = "Tipo Evento"
                titulo1 = "Tipo Usuario"
                />

            </main>

            <Footer/>
        </>
    )
}

export default CadastroTipoUsuario;