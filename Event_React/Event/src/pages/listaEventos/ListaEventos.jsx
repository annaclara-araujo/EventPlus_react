
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";


const ListaEventos = () => {
    return (
        <>

        <Header/>
            <Lista
            listatitulo = "Lista De Eventos"
            visible="none"
            titulocoluna = "Titulo"
            titulo = "Tipo Evento"
            />

        <Footer/>
        </>
    )
}

export default ListaEventos;