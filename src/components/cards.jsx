import ItemCount from "./ItemCount"

const Cards = ({image, description}) => {
  const onAdd = (cantidad) => {
    alert(`Agregaste al carrito ${cantidad} productos`)
}
    return (
        <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img className="cardimage" src= {image}/>

            </div>
            <div className="card-content">
              <p>{description}</p>
            </div>
            <div className="card-action">
              <ItemCount stock={12} onAdd ={onAdd}/>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Cards