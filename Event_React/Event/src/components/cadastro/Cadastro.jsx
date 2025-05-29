import "./Cadastro.css";
import Botao from "../botao/Botao";


const Cadastro = (props) => {
  return (
    <section className="section_cadastro">
      <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">
        <h1>{props.tituloCadastro}</h1>
        <hr />

        <div className="campos_cadastro">
          <div className="banner_cadastro">
            <img src={props.img_banner} alt="" />
          </div>



          <div className="campo_preen">
            <div className="campo_cad_nome">

              <div>
                <input
                  type="text"
                  placeholder={props.campoPlaceholder}
                  value={props.valorInput}
                  onChange={(e) => props.setValorInput(e.target.value)}
                />
              </div>

              <div className="campo_cad_data" style={{ display: props.visibilidade }}>
                <input
                  type="date"
                  placeholder="campoData"
                  value={props.valorData}
                  onChange={(e) => props.setValorData(e.target.value)}
                />

                <select name="tipoEvento" id=""
                  style={{ display: props.visibilidade }}
                  value={props.valorTipoEvento}
                  onChange={(e) => props.setValorTipoEvento(e.target.value)}>
                  <option value="" disabled selected>Tipo Evento</option>
                  {props.lista &&
                    props.lista.length > 0 &&
                    props.lista.map((itemEvento) =>
                      <option value={itemEvento.idTipoEvento}>{itemEvento.tituloTipoEvento}</option>
                    )}
                </select>


                <select name="Instituicao" id="">
                  <option value="" disabled selected>Instituicao</option>
                  <option value="E47E2F25-8E58-4E48-983B-36281FA6BA37">SENAI</option>
                </select>


                <div className="descricao">
                  <textarea name="" id="" style={{ display: props.visibilidade }}
                    value={props.valorInputDescricao}
                    onChange={(e) => props.setValorInputDescricao(e.target.value)}>
                  </textarea>
                </div>

              </div>
            </div>
            <Botao nomeBotao="Cadastrar" />
          </div>
        </div>
      </form>
    </section>
  );
};
export default Cadastro;

