import Card from './Card'
import Coment from './Coment'

export default () => {

  return (
    <div className="container border">
      <div className="row">
        <div className="col-12">
          <Card>
            <Coment
              image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
              alt="Pikachu"
              title="123"
              text="Teste afffffffffffffffffffffffffe eeeeeeeeeeeeeeeeeeeeeeeeeee fffffffffffffffffffffffffff eeeeeeeeeeeeeeeeeee eeeeeeeeee eeeeeeeeeee eeeeeeeeeeeeeeee
              eeeeeeeeeeeeeeeeee
              eeeeeeeeeeeee
              eeeeeeeeeeeeeeeeeeeee
              eeee eee"
              time="12/03/2025"
              >
            </Coment>
          </Card>
        </div>

        <div className="col-12">
          <Card>
            <Coment
              image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
              alt="Pikachu"
              title="123"
              text="Teste"
              time="12/03/2025"
              >
            </Coment>
          </Card>
        </div>
        
      </div>
    </div>
  )
}