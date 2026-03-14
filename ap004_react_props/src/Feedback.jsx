import React from 'react'
{/* desestruturação ({A, B, C}) 
    ex:
    const pessoa ={
        idade: "100",
        nome: "a"
    }
const {idade,nome} = pessoa -> guarda tudo dentro dessas variaveis direto (não precisa acessar)*/}
const Feedback = ({ textoOK, textoNOK, funcaoOK, funcaoNOK }) => {
    return (
        <div
            className='d-flex justify-content-evenly'>
            {/* button[type=button].btn.btn-*2 */}
            <button
             onClick={funcaoOK}
             type="button"
             className="btn btn-primary">
                {textoOK}
            </button>

            <button
             onClick={funcaoNOK}
             type="button"
             className="btn btn-danger">
                {textoNOK}
            </button>
        </div>
    )
}

export default Feedback