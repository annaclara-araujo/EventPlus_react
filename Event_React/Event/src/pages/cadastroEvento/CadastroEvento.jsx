import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Banner from "../../assests/img/cadastroevento.png";
import api from "../../Services/services";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

const CadastroEvento = () => {
    const [evento, setEvento] = useState("");
    const [dataEvento, setDataEvento] = useState("");
    const [descricao, setDescricao] = useState("");
    const [instituicao, setInstituicao] = useState("5C0B4A4B-1EA5-401E-866D-9E6DACD156F0");
    const [tipoEvento, setTipoEvento] = useState("");
    const [listaTipoEvento, setListaTipoEvento] = useState([])
    const [listaEvento, setListaEvento] = useState([])



    function alertar(icone, mensagem) {
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

    async function listarTipoEvento() {
        try {
            const resposta = await api.get("TiposEventos");
            setListaTipoEvento(resposta.data);
        } catch (error) {
            console.log(error);

        }

    }
    async function editarTipoEvento(evento) {
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
    async function mostrarDescricao() {
       Swal.fire({
            title: "<strong>HTML <u>example</u></strong>",
            icon: "info",
            html: `
            You can use <b>bold text</b>,
            <a href="#" autofocus>links</a>,
            and other HTML tags
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
             <i class="fa fa-thumbs-up"></i> Great!
             `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
            <i class="fa fa-thumbs-down"></i>
             `,
            cancelButtonAriaLabel: "Thumbs down"
        });
    }


    async function listarEvento() {
        try {
            const resposta = await api.get("eventos")
            setListaEvento(resposta.data)
        } catch (error) {
            console.log(error);

        }
    }

    async function deletarEvento(id) {

        Swal.fire({
            title: 'Tem certeza?',
            text: "Você não poderá desfazer esta ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#b51d44',
            cancelButtonColor: '#b5b5b5',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`eventos/${id.idEvento}`);
                alertar("success", "Gênero Excluido!")
            }
        }).catch(error => {
            console.log(error);
            alertar("error", "Erro ao Excluir!");
        });
    }

    async function cadastrarEvento(evt) {
        evt.preventDefault();

        if (evento.trim() !== "") {
            try {
                await api.post("eventos", { nomeEvento: evento, dataEvento: dataEvento, descricao: descricao, idTipoEvento: tipoEvento, idInstituicao: instituicao })
                alertar("success", "Sucesso! Cadastro realizado com sucesso!");

                setEvento("")
                setDataEvento()
                setTipoEvento("")
                setDescricao("")
                setInstituicao("")

            } catch (error) {
                alertar("error", "Erro! Entre em contato com o suporte!")
                console.log(error);

                // console.log({
                //     DataEvento: data,
                //     NomeEvento: evento,
                //     Descricao: descricao,
                //     IdTipoEvento: tipoEvento,
                //     IdInstituicao: instituicoes
                // });
            }
        } else {
            alertar("error", "Erro! Preencha os campos")
        }
    }

    useEffect(() => {
        listarTipoEvento();
        listarEvento();
    }, [listaEvento]);

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

                    valorData={dataEvento}
                    setValorData={setDataEvento}

                    valorInputDescricao={descricao}
                    setValorInputDescricao={setDescricao}

                    tipoEvento={tipoEvento}
                    setTipoEvento={setTipoEvento}

                    setValorTipoEvento={setTipoEvento}

                    Instituicao={instituicao}
                    setInstituicao={setInstituicao}

                    lista={listaTipoEvento}

                />

                <Lista

                    listatitulo="Lista Eventos"
                    titulocoluna="Nome"
                    titulocoluna2="Tipo Evento"
                    titulocoluna3="Descrição"
                    titulo1="Nome do Evento"
                    titulo2="Tipo do Evento"

                    lista={listaEvento}
                    tipoLista="Evento"

    
                    funcExcluir={deletarEvento}
                    funcEditar={editarTipoEvento}
                    funcDescricao={mostrarDescricao}
                    


                />

            </main>



            <Footer />
        </>
    )
}

export default CadastroEvento;