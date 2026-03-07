import Pedido from "./pedido"

export default () => {
  return(
    <div className="container border">
      <div className="row">

        <div className="col-12">
          {/* i.fa-solid.fa-hippo */}
          <i className="fa-solid fa-hippo fa-2x"></i>
        </div>

      </div>
      <div className="row">
          <div className="col-smal-12 col-md-6 col-xl-3">
              <Pedido 
              data="22/02/2026"
              icone="camera"
              titulo="Câmera"
              descricao="Uma câmera 4K"/>
          </div>

        <div className="col-smal-12 col-md-6 col-xl-3">
            <Pedido 
              data="22/02/2026"
              icone="camera"
              titulo="Câmera"
              descricao="Uma câmera 4K"/>

          </div>
        <div className="col-smal-12 col-md-6 col-xl-3">
            <Pedido 
              data="22/02/2026"
              icone="camera"
              titulo="Câmera"
              descricao="Uma câmera 4K"/>

          </div>
        <div className="col-smal-12 col-md-6 col-xl-3">
            <Pedido 
              data="22/02/2026"
              icone="camera"
              titulo="Câmera"
              descricao="Uma câmera 4K"/>

          </div>
      </div>
    </div>
    )
}