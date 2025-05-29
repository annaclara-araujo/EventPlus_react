import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Banner from "../../assests/img/cadastroevento.png";
import api from "../../Services/services";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

const CadastroEvento = () => {

    const [evento, setEvento] = useState("")
    const [listaTipoEvento, setListaTipoEvento] = useState([])
    const [listaEvento, setListaEvento] = useState([])
    const [data, setData] = useState("")
    const [tipoEvento, setTipoEvento] = useState("")
    const [descricao, setDescricao] = useState("")
    const [Instituicao, setInstituicao] = useState("E47E2F25-8E58-4E48-983B-36281FA6BA37")

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

    async function cadastrarEvento(evt) {
        evt.preventDefault();

        console.log(data);
        console.log(Instituicao);
        console.log(descricao);
        console.log(tipoEvento);
        console.log(evento);



        if (evento.trim() != "") {

            try {

                await api.post("Eventos", { nomeEvento: evento, dataEvento: data, descricao: descricao, idTipoEvento: tipoEvento, idInstituicao: Instituicao });
                alertar("success", "Cadastrado com sucesso!")
                setEvento("");
                setData();
                setDescricao("");
                setTipoEvento("");
                setInstituicao("");

            } catch (error) {
                console.log(error);
                alertar("error", "Erro ao cadastrar! Entre em contato")
                // console.log({
                //     DataEvento: data,
                //     NomeEvento:data, 
                //     Descricao: descricao, 
                //     idTipoEvento: tipoEvento, 
                //     Instituicao: Instituicao
                // });
            }
        } else {
            alertar("error", "Preencha o campo!")
        }
    }

    async function listarTipoEvento() {
        try {
            const resposta = await api.get("TiposEventos")
            setListaTipoEvento(resposta.data);
        } catch (error) {
            console.log(error);

        }
    }

    async function listarEvento() {
        try {
            const resposta = await api.get("Eventos");
            setListaEvento(resposta.data);
        } catch (error) {
            console.log(error);

        }
    }

    async function deletarEvento(eventoId) {
        try {
            Swal.fire({
                title: "Você tem certeza?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim, delete isso!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.delete(`Eventos/${eventoId.idEvento}`);
                    alertar("success", "Evento Excluido!")
                }
            });
        } catch (error) {

        }
    }


    async function editarEvento(evento) {
            try {
                const tiposOptions = listaTipoEvento
                    .map(tipo => `<option value="${tipo.idTipoEvento}" ${tipo.idTipoEvento === evento.idTipoEvento ? 'selected' : ''}>${tipo.tituloTipoEvento}</option>`)
                    .join('');

                const { value } = await Swal.fire({
                    title: "Editar Tipo de Evento",
                    html: `
        <input id="campo1" class="swal2-input" placeholder="Título" value="${evento.nomeEvento || ''}">
        <input id="campo2" class="swal2-input" type="date" value="${evento.dataEvento?.substring(0, 10) || ''}">
        <select id="campo3" class="swal2-select">${tiposOptions}</select>
        <input id="campo4" class="swal2-input" placeholder="Categoria" value="${evento.descricao || ''}">
      `,
                    showCancelButton: true,
                    confirmButtonText: "Salvar",
                    cancelButtonText: "Cancelar",
                    focusConfirm: false,
                    preConfirm: () => {
                        const campo1 = document.getElementById("campo1").value;
                        const campo2 = document.getElementById("campo2").value;
                        const campo3 = document.getElementById("campo3").value;
                        const campo4 = document.getElementById("campo4").value;

                        if (!campo1 || !campo2 || !campo3 || !campo4) {
                            Swal.showValidationMessage("Preencha todos os campos.");
                            return false;
                        }

                        return { campo1, campo2, campo3, campo4 };
                    }
                });

                if (!value) {
                    console.log("Edição cancelada pelo usuário.");
                    return;
                }

                console.log("Dados para atualizar:", value);

                await api.put(`eventos/${evento.idEvento}`, {
                    nomeEvento: value.campo1,
                    dataEvento: value.campo2,
                    idTipoEvento: value.campo3,
                    descricao: value.campo4,
                });

                console.log("Evento atualizado com sucesso!");
                Swal.fire("Atualizado!", "Dados salvos com sucesso.", "success");
                listarEvento();

            } catch (error) {
                console.log("Erro ao atualizar evento:", error);
                Swal.fire("Erro!", "Não foi possível atualizar.", "error");
            }
        }
    

    useEffect(() => {
        listarTipoEvento()
        listarEvento()
    }, []);


    return (
        <>
            <Header />

            <main>

                <Cadastro
                    tituloCadastro="Cadastro Evento"
                    NomeBotao="Cadastrar"
                    img_banner={Banner}
                    campoPlaceholder="Nome"
                    campoData="Data do Evento"
                    campoDescricao="Descrição"

                    funcCadastro={cadastrarEvento}

                    setValorInput={setEvento}
                    valorInput={evento}

                    valorData={data}
                    setValorData={setData}

                    valorInputDescricao={descricao}
                    setValorInputDescricao={setDescricao}

                    // tipoEvento={tipoEvento}
                    // setTipoEvento={setTipoEvento}

                    setValorTipoEvento={setTipoEvento}

                    Instituicao={Instituicao}
                    setInstituicao={setInstituicao}

                    lista={listaTipoEvento}

                />

                <Lista

                    listatitulo="Lista Eventos"
                    titulocoluna="Nome"
                    titulocoluna2="Tipo Evento"
                    titulo1="Nome do Evento"
                    titulo2="Tipo do Evento"

                    lista={listaTipoEvento}
                    tipoLista="Evento"

                    funcExcluir={deletarEvento}
                    funcEditar={editarEvento}

                />

            </main>



            <Footer />
        </>
    )
}

export default CadastroEvento;