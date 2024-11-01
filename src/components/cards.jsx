const Cards = ({image, description}) => {
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
              <button href="#">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Cards