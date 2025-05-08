

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
                    <tr className="item_lista">
                        <td>{props.titulo1}</td>
                        <td>{props.titulo2}</td>
                        <td data-cell="Editar"><img src={Editar} alt="Imagem de uma caneta" /></td>
                        <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                    </tr>
                </tbody>
            </div>
        </section>
    )
}

export default Lista;

