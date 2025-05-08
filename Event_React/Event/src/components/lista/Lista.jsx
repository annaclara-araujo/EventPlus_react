
import "./Lista.css";
import Editar from "../../assets/img/Editar.png";
import Excluir from "../../assets/img/Excluir.png";


const Lista = (props) => {
    return(
        <>
        <section className="lista">
            <h1>{`Lista de ${props.tituloLista}`}</h1>
            <hr/>

            <div className="tabela layout_grid">
            <table>
                {/*Cabecalho da tabela */}
                <thead>
                    {/* tr => Table row */}
                    <tr className="table_cabecalho">
                        <th>{props.titulo}</th>
                        <th style={{display:props.visible}}>Tipo Evento</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {/* tbody =>corpo da tabela */}
                    <tr className="item_lista" >
                        <td data-cell={props.titulo}>---------</td>
                        <td data-cell="Genero" style={{display:props.visible}}>Comedia</td>
                        <td data-cell="Editar"><img src={Editar} alt="Lapis"/></td>
                        <td data-cell="Excluir"><img src={Excluir} alt="Lixeira"/></td> 
                        
                    </tr>
                </tbody>
            </table>
        </div>



        </section> 
        </>
    )
}

export default Lista;