// rafce
import React from 'react'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import Busca from './Busca'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
import pexelsClient from '../utils/pexelsClient'
export default class App extends React.Component{

  state = {
    photos: []
  }

  onBuscaRealizada = (termoDeBusca) => {
    pexelsClient.get('/search', {
      params: { query: termoDeBusca }
    })
    .then(result => this.setState({photos: result.data.photos}))
    //.then(result => console.log(result))
  }

  //componentDidMount(){}

  render(){
    return (
      <div className='grid justify-content-center m-auto w-9 border-round border-1'>
        
        <div className="col-12">
          <PexelsLogo/>
        </div>
        <div className='col-12'>
          <i className="pi pi-apple"></i>
        </div>
        <div className='col-12'>
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <Busca 
            dica="Digite algo que deseja ver..."
            onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          <div className="grid">
          <ListaImagens
            imgStyle={"col-12 md:col-6 lg:col-4 xl:col-3"}
            photos={this.state.photos}
          />
          </div>
        </div>
      </div>
    )
  }
}
