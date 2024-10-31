const ItemListContainer = ({greeting, texto}) => {
    return (
        <div className="itemContainer">
            <h1 className="h1Greeting">{greeting}</h1>
            <p className="pTexto">{texto}</p>
        </div>
    )
}

export default ItemListContainer 