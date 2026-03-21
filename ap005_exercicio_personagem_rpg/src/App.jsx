import React, {useState} from 'react'

const App = () => {
  const [nome,setNome] = useState(null)
  const [classe,setClasse] = useState(null)
  const [nivel,setNivel] = useState(5)

  return (
    <div className="container mt-2">
      <div className="row justify-content-center ">
        <div className="col-12 ">
          <h1 className='text-center'>Criador de Personagem</h1>
          <div className="card ">
            <div className="card-body">
              <div className="col-12">
              Nome do Personagem
              </div>
              <div className="col-12">
              <input style={{width: '100%'}}type="text" />
              </div>
              <div className="col-12">
              Classe
              </div>
              <div className="col-12">
              <input style={{width: '100%'}}type="text" />
              </div>
              <div className="col-12">
                Nível
              </div>
              <div className="col-12">
                <button>
                  -
                </button>
                {nivel}
                <button>
                  +
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App