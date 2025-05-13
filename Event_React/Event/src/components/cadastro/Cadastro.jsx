import "./Cadastro.css";
import Botao from "../botao/Botao";
const Cadastro = (promps) => {
  return (
    <section className="section_cadastro">
      <form action="" className="layout_grid form_cadastro">
          <h1>{promps.tituloCadastro}</h1>
          <hr />

        <div className="campos_cadastro">
          <div className="banner_cadastro">
            <img src={promps.img_banner} alt="" />
          </div>

          <div className="campo_preen">

            <div className="campo_cad_nome">
              <label></label>
              <input type="text" placeholder={promps.campoPlaceholder} />
            </div>

            <div className="campo_cad_tipoEvento" style={{ display: promps.visibilidade }}>
              <label htmlFor="tipoEvento"></label>
              <select name="tipoEvento" id="">
                <option value="" disabled selected>Tipo Evento</option>
                <option value="">Festa</option>
                <option value="">Social</option>
                <option value="">Trabalho</option>
              </select>
            </div>
            <Botao nomeBotao="Cadastrar" />
          </div>
        </div>
      </form>
    </section>
  );
};
export default Cadastro;








