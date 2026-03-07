/// rafce
/*
react
arrow function
component
export */

const pedido = (props) => {
    return (
        <div className="card">
            <div className="card-header text-muted">{props.data}</div>
            <div className="card-body d-flex">
                <div className="d-flex align-items-center">
                    <i className={`fa-solid fa-${props.icone} fa-2x`}></i>
                </div>

                {/* div>(h4.text-center+p.text-center) */}
                {/* padding => p-(0 a 5) */}
                <div className="border flex-grow-1 rounded p-3">
                    <h4 className="text-center">{props.titulo}</h4>
                    <p className="text-center">{props.descricao}</p>
                </div>
            </div>
        </div>
    )
}

export default pedido