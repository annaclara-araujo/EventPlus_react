import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import Img from "../../assests/img/cadastrotipoevento.png"


const CadastroTipoEvento = () =>{
    return(
        <>
            <Header/>
            <main>
                <Cadastro
                tituloCadastro="Cadastro Tipo De Eventos"
                visibilidade="none"
                NomeBotao="Cadastrar"
                img_banner={Img}
                campoPlaceholder="Titulo"
                />

                <Lista
    
                listatitulo = "Lista Tipo De Eventos"
                titulocoluna = "Titulo"
                titulo = "Tipo Evento"
                titulo1 = "Titulo Evento"
                />
            
        

            </main>





            <Footer/>
       </> 
    )
}

export default CadastroTipoEvento;