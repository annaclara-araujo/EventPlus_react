// import Footer from "../../components/footer/Footer"
// import Header from "../../components/header/Header";
// //import Ligado from "../../assents/img/listagem_ligado.png"
// //import Desligado from "../../assests/img/listagem_desligado.png"
// //import Comentario from "../../assents/img/comentario.png"
// import Toggle from "../../components/toggle/Toggle";
// import "./ListaEvento.css";

// function ListaEvento() {
//     return (
//         <>
//             <Header/>

//             <section className="ListagemEvento">
//                     <h1>Eventos</h1>
//                     <hr className="linha_titu" />


//                 <div className="tabela_listagem layout_grid">

//                 <div className="left  seletor">
//                     <label htmlFor="eventos"></label>
//                     <select name="eventos" id="">
//                         <option value="" disabled selected>Todos os eventos</option>
//                         <option value="">op1</option>
//                         <option value="">op2</option>
//                         <option value="">op3</option>
//                     </select>
//                 </div>
//                     <table>
//                         <thead>
//                             <tr className="cabecalho_listagem ">
//                                 <th className="left">Título</th>
//                                 <th className="left">Tipo Evento</th>
//                                 <th className="right">Comentários</th>
//                                 <th className="right">Participar</th>
//                             </tr>
//                         </thead>
//                         {/* <hr className="divi" /> */}
//                         <tbody>
//                             <tr className="item_listagem espaco">
//                                 <td className="left" data-cell="Título">xxxxxxxxx</td>
//                                 <td className="left" data-cell="Tipo Evento">xxxxxxxxx</td>
//                                 <td className="right" data-cell="Comentários"><img src={Comentario} alt="" /></td>
//                                 <td className="right" data-cell="Participar"><Toggle/></td>

//                             </tr>


//                         </tbody>

//                         <tbody>
//                             <tr className="item_listagem separa">
//                                 <td className="left" data-cell="Título">xxxxxxxxx</td>
//                                 <td className="left" data-cell="Tipo Evento">xxxxxxxxx</td>
//                                 <td className="right" data-cell="Comentários"><img src={Comentario} alt="" /></td>
//                                 <td className="right" data-cell="Participar"> <Toggle/></td>

//                             </tr>


//                         </tbody>
//                     </table>
//                 </div>
//             </section>

//             <Footer />
//         </>
//     );
// }

// export default ListaEvento;