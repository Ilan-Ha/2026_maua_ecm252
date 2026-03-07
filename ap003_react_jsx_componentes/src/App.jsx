const App = () => {
  return <div style={{margin: 'auto', width: 576, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
    <label htmlFor="campoNome" style={{display: 'block', marginBottom: 8}}>
      Nome:
    </label>
    {/* input#campoNome*/}
    <input type="text" id="campoNome" style={{paddingTop: 8, paddingBottom: 8, width: '100%', borderStyle: 'hidden', outline: 'none', borderRadius: 8}}/>

    {/* button(Enviar) */}
    <button style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', borderStyle: 'hidden', color: 'white', width: '100%', borderRadius: 8}}>
      Enviar
      </button>
  </div>
}

export default App