import Imagem from "../../assests/img/cadastrousuario.png"
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import api from "../../Services/services";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

const CadastroTipoUsuario = () => {

    const[tipoUsuario, setTipoUsuario] = useState("")
    const[listaTipoUsuario, setListaTipoUsuario] = useState([])

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
    
     async function cadastrarTipoUsuario(e) {
        e.preventDefault();

        if(tipoUsuario.trim() !== ""){
            try{
                api.post("TipoUsuario",{TituloTipoUsuario: tipoUsuario})
                alertar("success", "Cadastro realizado com sucesso")
                setTipoUsuario("")
            } catch (error){
                alertar("error", "Erro ao cadastrar! Entre em contato")
            }
        } else {
            alertar("error", "Campo precisa estar preenchido!")
        }
    
    }

    async function listarTipoUsuario () {
        try {
            const resposta = await api.get("TiposUsuarios");
            setListaTipoUsuario(resposta.data);
        } catch (error) {
            console.log("error");
            
        }
    }
    
    async function excluirTipoUsuario(id) {
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
                api.delete(`TiposUsuarios/${id.idTipoUsuario}`)
                alertar("success", "Cadastro Excluido!")
            }
        }).catch(error => {
            console.log(error);
            alertar("error", "Erro ao Excluir!");
        });
    }


    async function editarTipoUsuario(tipousuario) {
        const { value: novoUsuario } = await Swal.fire({
            title: "Modifique o tipo do usuario",
            input: "text",
            inputLabel: "Novo tipo do usuario",
            inputValue: tipoUsuario.tituloTipoUsuario,
            showCancelButton: true,
            confirmButtonColor: '#b51d44',
            cancelButtonColor: '#b5b5b5',
            resultButtonColor: '#b51d44',
            confirmButtonText: 'Sim, mudar',
            cancelButtonText: 'Cancelar',
            inputValidator: (value) => {
                if (!value) {
                    return "O campo precisa estar preenchido!";
                }
            }
        });
        if (novoUsuario) {
            try {
                api.put(`TiposUsuarios/${tipousuario.idTipoUsuario}`, { tituloTipoUsuario: novoUsuario });
                Swal.fire(`O novo usuario é ${novoUsuario}`);
            } catch (error) {
                console.log(error);
            }
        }

    }

    useEffect(() => {
        listarTipoUsuario();
    }, [listaTipoUsuario])


    return (
        <>
            <Header/>
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
                listatitulo = "Lista Tipo De Usuario"
                titulocoluna = "Titulo"
                titulo = "Tipo Evento"
                titulo1 = "Tipo Usuario"

                lista={listaTipoUsuario}
                excluir={excluirTipoUsuario}
                editar={editarTipoUsuario}
                />

            </main>

            <Footer/>
        </>
    )
}

export default CadastroTipoUsuario;