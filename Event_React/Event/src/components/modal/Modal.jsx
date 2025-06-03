import React from 'react'

const Modal = (props) => {
    return (
        <>

            <div className="model-overlay" onClick={props.fecharModal}> </div>
            <div className='model'>

                <h1>{props.titulo}</h1>
                <div className='model_conteudo'>
                    {props.tipoModal === "descricaoEvento" ? (
                        <p>{props.descricao}</p>
                    ) : (

                        <>

                            {comentarios.map((item) => (
                                <div key={item.idComentarioEvento}>
                                <strong>{item.usuario.nomeUsuario}
                                </strong>
                                <img src={ImgDeletar}
                                alt="deletar"/>
                                <p>{item.descricao}</p>
                                <hr />

                                </div>
                            ))}

                            <div>
                                <input type="text"
                                placeholder='Escreva seu comentario ...'
                                />
                                <button>
                                    Cadastrar
                                </button>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </>
    )
}

export default Modal