import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import Img from "../../assests/img/cadastrotipoevento.png"
import api from "../../Services/services";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';


const CadastroTipoEvento = () => {

    const [tipoEvento, setTipoEvento] = useState("")
    const [listaTipoEvento, setListaTipoEvento] = useState([])


    function alertar(icone, mensagem) {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

        //----------alertarAAAA SUCESSO--------------------------------------------
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });

    }

    async function cadastrarTipoEvento(evt) {
        evt.preventDefault();

        if (tipoEvento.trim() != "") {

            try {

                await api.post("tiposEventos", { tituloTipoEvento: tipoEvento });
                alertar("success", "Cadastrado com sucesso!")
                setTipoEvento("");

            } catch (error) {
                console.log(error);
                alertar("error", "Erro ao cadastrar! Entre em contato")

            }
        } else {
            alertar("error", "Preencha o campo!")
        }

    }


    async function listarTipoEvento() {
        try {

            const resposta = await api.get("tiposEventos");
            //console.log(resposta.data);
            setListaTipoEvento(resposta.data);
            //console.log(resposta.data);

        } catch (error) {
            console.log(error);
        }
    }

    /*  useEffect(() => {
        listarTipoEvento()
   }, [listarTipoEvento]);*/

    //  async function deletarTipoEvento(tipoeventoId) {
    //     try {

    //         Swal.fire({
    //             title: "Você tem certeza?",
    //             text: "Você não poderá reverter isso!",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonColor: "#3085d6",
    //             cancelButtonColor: "#d33",
    //             confirmButtonText: "Sim, delete isso!"
    //         }).then(async (result) => {
    //             if (result.isConfirmed) {
    //              await api.delete(`TiposEventos/${id.idTipoEvento}`);
    //            alertar("success", "Gênero Excluido!")
    //             }
    //         });

    //     } catch(error => {
    //        console.log(error);
    // alertar("error", "Erro ao Excluir!");
    //    });
    // try {
    //     api.delete(`TipoEvento/${id.idTipoEvento}`);
    //     alert("apagou")
    // } catch (error) {
    //     console.log(error);

    // }
    // }

    // async function editarTipoEvento(tipoEvento) {

    //     const { value: novoTipoEvento } = await Swal.fire({
    //         title: "Edite seu evento",
    //         input: "text",
    //         inputLabel: "Novo Tipo Evento",
    //         inputValue: tipoEvento.tituloTipoEvento,
    //         showCancelButton: true,
    //         inputValidator: (value) => {
    //             if (!value) {
    //                 return "O campo precisa estar preenchido!";
    //             }
    //         }
    //     });
    //     if (novoTipoEvento) {
    //         try{
    //             api.put(`tiposEventos/${tipoEvento.idTipoEvento}`, { tituloTipoEvento: novoTipoEvento });
    //             Swal.fire(`O evento modificado ${novoTipoEvento}`);
    //         }catch(error){
    //             console.log(error);

    //         }
    //     }
    // }


    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro Tipo De Eventos"
                    visibilidade="none"
                    NomeBotao="Cadastrar"
                    img_banner={Img}
                    campoPlaceholder="Titulo"

                    funcCadastro={cadastrarTipoEvento}

                    valorInput={tipoEvento}
                    setValorInput={setTipoEvento}
                />

                <Lista

                    listatitulo="Lista Tipo De Eventos"
                    titulocoluna="Titulo"
                    titulo="Tipo Evento"
                    titulo1="Titulo Evento"

                    lista={listaTipoEvento}
                    tipoLista="TiposEventos"

                    //funcExcluir={deletarTipoEvento}
                    //funcEditar={editarTipoEvento}
                />



            </main>
            <Footer />
        </>
    )
}

export default CadastroTipoEvento;