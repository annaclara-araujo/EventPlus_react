import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import Comentario from "../../assests/img/comentario.png"
import Descricao from "../../assests/img/informacoes.png"
import Toggle from "../../components/toggle/Toggle";
import Modal from "../../components/modal/Modal"
import "./ListaEvento.css";
import { useState, useEffect } from "react";
import api from "../../Services/services";
import { format } from "date-fns";
const ListaEvento = () => {

    const [listaEventos, setListaEventos] = useState([])
    const [tipoModal, setTipoModal] = useState("") //"descricaoEvento" ou "Comentario"
    const [dadosModal, setDadosModal] = useState([]) //descricao, idEvento, etc.
    const [modalAberto, settModalAberto] = useState([false])

    const [usuarioId, setUsuarioId] = useState("67299B4B-D582-4127-A3B9-EB8902386071")

    async function listarEventos() {
        try {
            const resposta = await api.get("Eventos");
            const todosOsEventos = resposta.data;
            
            const respostaPresenca = await api.get("PresencaEventos/ListarMinhas"+usuarioId)
            const minhasPresencas = respostaPresenca.data;

            const eventosComPresencas = todosOsEventos.map((atualEvento) => {
                const presenca = minhasPresencas.find(p => p.idEvento === atualEvento.idEvento)

                return{
                    //As informacoes tanto de eventos quanto de eventos que possuem presenca
                    ...atualEvento,

                    possuiPresenca: presenca?.situacao === true,
                    idPresenca: presenca?.idPresencaEvento || null
                }

            })

            setListaEventos(eventosComPresencas);
            console.log(resposta.data);

            console.log("Informacoes de todos os eventos");
            console.log(todosOsEventos);

            console.log("Informacoes de eventos com presenca");
            console.log(todosOsEventos);

            console.log("Informacoes de todos os eventos com presenca");
            console.log(todosOsEventos);
            
            

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        listarEventos();
    }, [])

    function abrirModal(tipo,dados) {
        settModalAberto(true)
        setTipoModal(tipo)
        setDadosModal(dados)

    }

    function fecharModal() {
        settModalAberto(false)
        setDadosModal({})
        setTipoModal("")
    }









    return (
        <>
            <Header />

            <section className="ListagemEvento">
                <h1>Eventos</h1>
                <hr className="linha_titulo" />


                <div className="tabela_listagem layout_grid">

                    <div className="left  seletor">
                        <label htmlFor="eventos"></label>
                        <select name="eventos" id="">
                            <option value="" disabled selected>Todos os eventos</option>
                            <option value="">op1</option>
                            <option value="">op2</option>
                            <option value="">op3</option>
                        </select>
                    </div>

                    <table>
                        <thead>
                            <tr className="cabecalho_listagem ">
                                <th >Título</th>
                                <th >Data Evento</th>
                                <th >Tipo Evento</th>
                                <th >Descrição</th>
                                <th >Comentários</th>
                                <th >Participar</th>
                            </tr>
                        </thead>

                        <tbody>

                            {listaEventos.length > 0 ? (
                                listaEventos.map((item) => (

                                    <tr className="item_listagem espaco">
                                        <td >{item.nomeEvento}</td>
                                        <td >{format(item.dataEvento, "dd/MM/yy")}</td>
                                        <td >{item.tiposEvento.tituloTipoEvento}</td>

                                        <td className="descricao" onClick={() => abrirModal("descricaoEvento", {descricao: item.descricao})}>
                                            <button>
                                                <img src={Descricao} alt="" />
                                            </button>
                                        </td>

                                        <td className="Comentários" onClick={() => abrirModal("comentarios", {idEvento: item.idEvento})}>
                                            <button>
                                                <img src={Comentario} alt="" />
                                            </button>
                                        </td>

                                        <td className="Participar"><Toggle presenca={item.possuiPresenca}
                                        /></td>

                                    </tr>

                                ))
                            ) :
                                (
                                    <p> nenheum evento encontrado</p>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />

            {modalAberto &&(

                <Modal
                titulo={tipoModal == "descricaoEvento" ? "Descrição do evento" : "Comentario"}

                tipoModel = {tipoModal}

                idEvento ={dadosModal.idEvento}

                descricao = {dadosModal.descricao}
                fecharModal={fecharModal}
                />
            )}
        </>
    );
}

export default ListaEvento;