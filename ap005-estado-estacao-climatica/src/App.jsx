import React, {useState} from 'react'

const App = () => {

    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [estacao, setEstacao] = useState(null)
    const [data, setData] = useState(null)
    const [icone, setIcone] = useState(null)
    const [mensagemDeErro, setMensagemDeErro] = useState(null)

    const obterEstacao = (dataAtual, latitude) => {
      const d1 = new Date(dataAtual.getFullYear(), 5, 21)
      const d2 = new Date(dataAtual.getFullYear(), 8, 24)
      const d3 = new Date(dataAtual.getFullYear(), 11, 22)
      const d4 = new Date(dataAtual.getFullYear(), 2, 21)

      const estaNoSul = latitude <0? true:false
      if(dataAtual >= d1 && dataAtual < 2){
        return estaNoSul ? 'Inverno' : "Verao"
      }
      if(dataAtual >= d2 && dataAtual < d3){
        return estaNoSul? 'Primavera' : 'Outono'
      }
      if(dataAtual >= d3 || dataAtual < d4)
        {return estaNoSul ? 'Verao' : 'Inverno'}
      return estaNoSul ? 'Outono' : 'Primavera'
    }

    const icones = {
      'Primavera': 'leaf',
      'Verao': 'sun',
      'Outono': 'tree',
      'Inverno': 'snowflake'
    }

    const obterLocalizacao = () => {
      window.navigator.geolocation.getCurrentPosition(
    (position) => {
      const dataAtual = new Date()
      /// chamar a função obter estação para obter a estação climatica do usuario
      const estacao = obterEstacao(dataAtual,position.coords.latitude)
      /// obter icone apropriado
      const icone = icones[estacao]
      /// atualizar o estado
      setEstacao(estacao)
      setIcone(icone)
      /// atualizar a jsx para que, por enquanto, somente o nome do estado apareça
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      setData(dataAtual.toLocaleTimeString())
    }, 
    (erro) => {
      setMensagemDeErro('É preciso liberar o acesso à localização para ver a sua estação.')
      console.log(`Erro: ${erro}`)
    })

    }
  return (
    <div className='container mt-2'> 
      {/* {estacao}:{icone}
      <i className={`fa-solid fa-${icone} fa-2x`}></i>
      <button onClick={obterLocalizacao}>Estacao</button> */}
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center border rounded mb-2 justify-content-center" style={{height: '6rem'}}>
                <i className={`fa-solid fa-${icone} fa-5x`}></i>
                {/* p.w-75.ms-3.text-center.fs-1 */}
                <p className="w-75 ms-3 text-center fs-1">{estacao}</p>
              </div>
              <div>
                <p className="text-center">
                  {
                   latitude ? 
                    `Coordenadas: ${latitude}, ${longitude}. Data: ${data}`
                    :
                    mensagemDeErro ?
                      `${mensagemDeErro}`
                      :
                      'Clique no botão para saber a sua estação climática'
                   }
                </p>
              </div>
              <button className='btn btn-outline-primary w-100 mt-2'
              onClick={obterLocalizacao}>Qual a minha estação?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App