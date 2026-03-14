
/// hook do react -> permite que componentes funcionais manipulem variaveis de estado

import { useState } from "react"

  /// useState
    /// retorna uma lista com 2 posições
      /// variavel de estado
      /// funcao
const App = () => {
  const [contador, setContador] = useState(0)
  // let contador = 0
  return (
    <div>
      <h1>Contador: {contador}</h1>

      <button
      onClick={() => setContador(contador+1)}>
        Incrementar
      </button>

      <button
      onClick={() => setContador(contador-1)}>
        Decrementar
      </button>

      <button
      onClick={() => setContador(0)}>
        Reiniciar
      </button>
    
    </div>
  )
}

export default App