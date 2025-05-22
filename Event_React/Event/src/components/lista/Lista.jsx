
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
                    <tr className="item_lista" key={props.tipoLista == "TiposEventos" ? item.idTipoEvento : item.idTipo}>
                        <td>{props.titulo1}</td>
                        <td>{props.titulo2}</td>
                        <td data-cell="Editar">
                            <button onClick={() => props.funcEditar(item)} className="bnt-editar">
                            <img src={Editar} alt="Imagem de uma caneta" />
                            </button>

                         <td data-cell="Excluir">
                            <button onClick={() => props.funcExcluir(item)} className="btn-excluir">
                            <img src={Excluir} alt="Lixeira" />
                            </button>
                         </td>
                        </td>
                        <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
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

