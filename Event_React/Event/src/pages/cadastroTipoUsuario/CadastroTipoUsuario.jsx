import Imagem from "../../assests/img/cadastrousuario.png"
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import api from "../../Services/services";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';


const CadastroTipoUsuario = () => {


    const [tipoUsuario, setTipoUsuario] = useState("")
    const [listaTipoUsuario, setListaTipoUsuario] = useState([])


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

    async function cadastrarTipoUsuario(evt) {
        evt.preventDefault();

        if (tipoUsuario.trim() != "") {

            try {

                await api.post("tiposUsuarios", { tituloTipoUsuario: tipoUsuario });
                alertar("success", "Cadastrado com sucesso!")
                setTipoUsuario("");

            } catch (error) {
                console.log(error);
                alertar("error", "Erro ao cadastrar! Entre em contato")

            }
        } else {
            alertar("error", "Preencha o campo!")
        }

    }

    async function listarTipoUsuario() {
        try {
            const resposta = await api.get("tiposUsuarios");
            setListaTipoUsuario(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function deletarTipoUsuario(tipoUsuarioId) {
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
                    await api.delete(`tiposUsuarios/${tipoUsuarioId.idTipoUsuario}`);
                    alertar("success", "Usuario Excluido!")
                }
            });

        } catch (error) {
            console.log(error);
            alertar("error", "Erro ao Excluir!");
        };

    }

    async function editarTipoUsuario(tipoUsuario) {

        const { value: novoTipoUsuario } = await Swal.fire({
            title: "Edite seu evento",
            input: "text",
            inputLabel: "Novo Tipo De Usuario",
            inputValue: tipoUsuario.tituloTipoUsuario,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "O campo precisa estar preenchido!";
                }
            }
        });
        if (novoTipoUsuario) {
            try {
                api.put(`tiposUsuarios/${tipoUsuario.idTipoUsuario}`, { tituloTipoUsuario: novoTipoUsuario });
                Swal.fire(`O usuario modificado ${novoTipoUsuario}`);
            } catch (error) {
                console.log(error);

            }
        }
    }

    useEffect(() => {
        listarTipoUsuario()
    }, [listaTipoUsuario]);


    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro Tipo De Usuarios"
                    visibilidade="none"
                    NomeBotao="Cadastrar"
                    img_banner={Imagem}
                    campoPlaceholder="Titulo"

                    funcCadastro={cadastrarTipoUsuario}

                    valorInput={tipoUsuario}
                    setValorInput={setTipoUsuario}

                />

                <Lista
                    listatitulo="Lista Tipo De Usuario"
                    titulocoluna="Titulo"
                    //titulo = "Tipo Evento"
                    //titulo1 = "Tipo Usuario"

                    lista={listaTipoUsuario}
                    tipoLista="TiposUsuarios"

                    funcExcluir={deletarTipoUsuario}
                    funcEditar={editarTipoUsuario}
                    visibilidade2="none"

                />

            </main>

            <Footer />
        </>
    )
}

export default CadastroTipoUsuario;