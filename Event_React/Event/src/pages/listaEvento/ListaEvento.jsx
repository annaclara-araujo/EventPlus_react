import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import Comentario from "../../assests/img/comentario.png"
import Informacao from "../../assests/img/informacoes.png"
import Toggle from "../../components/toggle/Toggle";
import Modal from "../../components/modal/Modal"
import "./ListaEvento.css";
import { useState, useEffect } from "react";
import api from "../../Services/services";
import { format } from "date-fns";
const ListaEvento = () => {

    const [listaEventos, setListaEventos] = useState([])

    async function listarEventos() {
        try {
            const resposta = await api.get("Eventos");
            setListaEventos(resposta.data);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        listarEventos();
    }, [])

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

                                <td data-cell="descricao">
                                    <button>
                                        <img src={Informacao} alt="" />
                                    </button>
                                </td>

                                <td data-cell="Comentários">
                                    <button>
                                        <img src={Comentario} alt="" />
                                    </button>
                                </td>

                                <td data-cell="Participar"><Toggle /></td>

                            </tr>

                            ))
                            ):
                            (
                                <p> nenheum evento encontrado</p>
                            )
                        }


                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
            <Modal />
        </>
    );
}

export default ListaEvento;