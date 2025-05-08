import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";


const CadastroTipoEvento = () =>{
    return(
        <>
            <Header/>
            <main>
                <Cadastro
                tituloCadastro="Cadastro de Tipo Eventos"
                campoPlaceholder="Titulo"
                visibilidade="none"
                NomeBotao="Cadastrar"
                banner_img={Imagem}
                />
            </main>
            <Footer/>
       </> 
    )
}

export default CadastroTipoEvento;