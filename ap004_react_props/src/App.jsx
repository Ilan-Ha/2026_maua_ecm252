import Pedido from "./pedido"
import Cartao from "./Card"
import Feedback from "./Feedback"

export default () => {
  const textoOK = "Já recebi"
  const textoNOK = "Ainda não recebi"
  const funcaoOK = () => alert("Agradeçemos o feedback")
  const funcaoNOK = () => alert("Verificaremos")
  const componenteFeedback = (
    <Feedback
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
      textoOK={textoOK}
      textoNOK={textoNOK}
    />
  )

  return (
    <div className="container border">
      <div className="row">

        <div className="col-12">
          {/* i.fa-solid.fa-hippo */}
          <i className="fa-solid fa-hippo fa-3x"></i>
        </div>

      </div>
      <div className="row">
        <div className="col-smal-12 col-md-6 col-xl-3">
          <Cartao
            cabecalho="22/02/2026">
            <Pedido
              icone="camera"
              titulo="Câmera"
              descricao="Uma câmera 4K" />
              {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-smal-12 col-md-6 col-xl-3">
          <Cartao
            cabecalho="22/03/2026">
            <Pedido
              icone="bicycle"
              titulo="Bicicleta"
              descricao="Uma bicicleta 18 marchas" />
              {componenteFeedback}
          </Cartao>

        </div>
        <div className="col-smal-12 col-md-6 col-xl-3">
          <Cartao
            cabecalho="24/03/2026">
            <Pedido
              icone="hippo"
              titulo="Hipopótamo"
              descricao="Um filhote de hipo" />
              {componenteFeedback}
          </Cartao>

        </div>
        <div className="col-smal-12 col-md-6 col-xl-3">
          <Cartao
            cabecalho="15/02/2026">
            <Pedido
              icone="book"
              titulo="Livro"
              descricao="Concrete Maths" />
              {componenteFeedback}
          </Cartao>

        </div>
      </div>
    </div>
  )
}