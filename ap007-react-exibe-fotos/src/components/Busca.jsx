// rcc
import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
export default class Busca extends Component {
  //const [termoDeBusca, setTermoDeBusca] = useState('')
  state = {
    termoDeBusca: ''
  }

  onTermoAlterado = (event) => {
    console.log(event.target.value)
  }
  render() {
    return (
      <div className='flex flex-column'>
        <IconField iconPosition='left'>
          <InputIcon className='pi pi-search'></InputIcon>
          <InputText 
            className='w-full'
            placeholder={this.props.dica}
            onChange={this.onTermoAlterado}
            value={this.state.termoDeBusca}/>
        </IconField>
        <Button
          label='OK' 
          className='mt-2 p-button-outlined'/>
      </div>
    )
  }
}

Busca.defaultProps = {
  dica: "Buscar..."
}