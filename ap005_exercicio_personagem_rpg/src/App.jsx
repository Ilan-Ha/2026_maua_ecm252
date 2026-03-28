import React, {useState} from 'react'

const App = () => {
  const [nome,setNome] = useState('')
  const [classe,setClasse] = useState('')
  const [nivel,setNivel] = useState(5)
  const [percentegeLeft,setPercentegeLeft] = useState(25)
  const [percentegeRight,setPercentegeRight] = useState(75)
 
  const handleNameChange = event => {
    setNome(event.target.value)
  }
  const handleClassChange = event => {
    setClasse(event.target.value)
  }
  const handlePercentege = temNivel =>{
    setNivel(temNivel)
    setPercentegeLeft((temNivel/20)*100)
    setPercentegeRight(((20-temNivel)/20)*100)
  }
  const handeLevelChange = increment =>{
    if(typeof(increment) !== 'number'){
      console.log("handleLevelChange can only receive int values");
      return
    }
    
    const trab = nivel + increment
    trab >0? 
      trab < 21? handlePercentege(trab):null:
      null
  }
  return (
    <div className="container mt-2">
      <div className="row justify-content-center ">
        <div className="col-12 ">
          <h1 className='text-center'>Criador de Personagem</h1>
          <div className="card ">
            <div className="card-body">
              <div className="col-12">
              Nome do Personagem
              {`\n ${nome}`}
              </div>
              <div className="col-12">
              <input style={{width: '100%'}}type="text" 
              value={nome}
               onChange={handleNameChange}
               placeholder='Digite o Nome do Personagem...'/>
              </div>
              <div className="col-12">
              Classe
              {`\n ${classe}`}
              </div>
              <div className="col-12">
              <input style={{width: '100%'}}type="text"
              value={classe}
               onChange={handleClassChange}
               placeholder='Digite o Tipo da classe...'
               />
              </div>
              <div className="col-12">
                Nível
              </div>
              <div className="col-12">
                <button onClick={() => handeLevelChange(-1)}>
                  -
                </button>
                {nivel}
                <button onClick={() => handeLevelChange(1)}>
                  +
                </button>
                (1 a 20)
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <div className="card-body">
              <div className="col-12">
                {nome === ''? 'Nome não definido': `${nome}`}
              </div>
              <div className="col-12">
                {classe === ''? 'Classe não definida': `${classe}`}
              </div>
              <div className="col-12">
                {`Nível ${nivel}`}
              </div>
              <div style={{display: 'flex', borderRadius: '8px', overflow: 'hidden', border: '1px solid #000000', width: '100%', height: '30px'}}>
                <div style={{width: `${percentegeLeft}%`,
              background: '#f43c45'}}>{Math.trunc(percentegeLeft)}%</div>
                <div style={{width: `${percentegeRight}%`}}></div>
              </div>
              <div className="col-12">
                {`${nivel}/20`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App