// rafce
import React from 'react'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import Busca from './Busca'
const App = () => {
  return (
    <div className='grid justify-content-center m-auto w-9 border-round border-1'>

      <div className='col-12'>
        <i className="pi pi-apple"></i>
      </div>
      <div className='col-12'>
        <h1>Exibir uma lista de...</h1>
      </div>
      <div className="col-12">
        <Busca dica="Digite algo que deseja ver..." />
      </div>
    </div>
  )
}

export default App