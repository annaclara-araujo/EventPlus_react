import "./Cadastro.css";
import Botao from "../botao/Botao";
const Cadastro = (props) => {
  return (
    <section className="section_cadastro">
      <div className="Titulo_cadastro">
        <h1>{props.tituloCadastro}</h1>
        <hr />
      </div>

      <form action="" className="layout_grid form_cadastro">
        <img className="img_Cadastro" src={props.img_banner} alt="" />
        <div className="campos_cadastro">
          <div className="campo_cad_nome">
            <input type="text" placeholder={props.campoPlaceholder} />
          </div>

          <div className="campo_cad_tipoEvento" style={{display:props.visibilidade}}>
                            <label htmlFor="tipoEvento"></label>
                            <select name="tipoEvento" id="">
                                <option value="" disabled selected>Tipo Evento</option>
                                <option value="">Festa</option>
                                <option value="">Social</option>
                                <option value="">Trabalho</option>
                            </select>
                        </div>

          <Botao nomeBotao= "Cadastrar" />
        </div>
      </form>
    </section>
  );
};
export default Cadastro;








