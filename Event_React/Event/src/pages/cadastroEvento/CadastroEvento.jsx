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

        if (evento.trim() != "") {

            try {

                await api.post("Eventos", { nomeEvento: evento });
                alertar("success", "Cadastrado com sucesso!")
                setEvento("");

            } catch (error) {
                console.log(error);
                alertar("error", "Erro ao cadastrar! Entre em contato")

            }
        } else {
            alertar("error", "Preencha o campo!")
        }
}



    return (
        <>
            <Header/>

            <main>

            <Cadastro
                tituloCadastro="Cadastro Evento"
                NomeBotao="Cadastrar"
                img_banner={Banner}
                campoPlaceholder="Nome"
                campoData="Data do Evento"
                campoDescricao="Descrição"

                funcCadastro={cadastrarEvento}

                valorInput={evento}
                setValorInput={setEvento}



                />

            <Lista
    
                listatitulo = "Lista Eventos"
                titulocoluna = "Nome"
                titulocoluna2 = "Tipo Evento"
                titulo1 = "Nome do Evento"
                titulo2 = "Tipo do Evento"
                />

            </main>



            <Footer/>
        </>
    )
}

export default CadastroEvento;