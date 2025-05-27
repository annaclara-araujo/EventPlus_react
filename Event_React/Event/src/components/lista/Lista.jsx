
import "./Lista.css"
import Editar from "../../assests/img/Editar.png"
import Excluir from "../../assests/img/Excluir.png"

const Lista = (props) => {
    return (
        <section className="listagem">
            <h1>{props.listatitulo}</h1>
            <hr />

            <div className="tabela">
                <thead>
                    <tr className="table_cabecalho">
                        <th>{props.titulocoluna}</th>
                        <th>{props.titulocoluna2}</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {props.lista && props.lista.length > 0 ? (
                        props.lista.map((item) => (

                            <tr className="item_lista" key={props.tipoLista == "TiposEventos" ? item.idTipoEvento : item.idTipoUsuario}>

                                <td data-cell="Nome">{props.tipoLista == "TiposEventos" ? item.tituloTipoEvento : item.tituloTipoUsuario}</td>

                                <td></td>

                                <td data-cell="Editar">
                                    <img
                                        className="bnt-editar" src={Editar} alt="icone de editar"
                                        onClick={() => props.funcEditar(item)}
                                    />
                                </td>
                                <td data-cell="Excluir">
                                    <img
                                        className="bnt-excluir" src={Excluir} alt="icone de excluir"
                                        onClick={() => props.funcExcluir(item)}
                                    />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">Nenhum gênero foi encontrado.</td>
                        </tr>
                    )}
                </tbody>
            </div>
        </section>
    )
}

export default Lista;