import './styles.css'

const App = () => {

  const estiloBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', borderStyle: 'hidden', color: 'white', width: '100%', borderRadius: 8}

  const textoDoRotulo = 'Nome:'
  
  const obterTextoDoBotao = () => 'Enviar'

  const aoClicar = () => alert('Clicou')

  return <div style={{margin: 'auto', width: 576, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
    <label className="rotulo" htmlFor="campoNome" style={{display: 'block', marginBottom: 8}}>
      {textoDoRotulo}
    </label>
    {/* input#campoNome*/}
    <input type="text" id="campoNome" style={{paddingTop: 8, paddingBottom: 8, width: '100%', borderStyle: 'hidden', outline: 'none', borderRadius: 8}}/>

    {/* button(Enviar) */}
    <button 
      onClick={aoClicar}
      style={estiloBotao}>
        {/*ou onClick ={() => aoClicar()} 
          se fizer onClick = {aoClicar()} a função executa quando a pagina carrega ao invés de ficar vinculada ao botão*/}
      {obterTextoDoBotao()}
      </button>
  </div>
}

export default App