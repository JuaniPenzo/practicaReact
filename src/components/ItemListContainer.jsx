import './ItemListContainer.css'
function ItemListContainer({ url, Marca, Modelo, precio, id }) {

  let urlDetail = `/item/${id}`
  
  return (
    <div className="Divisor">
      <img src={url} alt="Autos" height="150px" width="150px" />
      <br />
      <button><a href={urlDetail}>Ver producto</a></button>
      <h2>{Marca}</h2>
      <p>{Modelo}</p>
      <h3>{precio}</h3>
    </div>
  );
}

export default ItemListContainer;