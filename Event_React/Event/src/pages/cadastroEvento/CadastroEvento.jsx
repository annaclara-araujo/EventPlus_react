import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Banner from "../../assests/img/cadastroevento.png";

const CadastroEvento = () => {
    return (
        <>
            <Header/>

            <main>

            <Cadastro
                tituloCadastro="Cadastro Evento"
                NomeBotao="Cadastrar"
                img_banner={Banner}
                campoPlaceholder="Nome"
                />

            <Lista
    
                listatitulo = "Lista Eventos"
                titulocoluna = "Nome"
                titulocoluna2 = "Tipo Evento"
                titulo1 = "Nome do Evento"
                titulo2 = "Tipo do Evento"
                />

            </main>



            <Footer/>
        </>
    )
}

export default CadastroEvento;