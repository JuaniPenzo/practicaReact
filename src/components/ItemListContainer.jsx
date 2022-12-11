import './ItemListContainer.css'
import { Link } from "react-router-dom"
function ItemListContainer({ url, Marca, Modelo, precio, id }) {
  let urlDetail = `/item/${id}`
  return (
      <div className="Divisor">
        <Link to={urlDetail}>
        <img src={url} alt="Autos" height="190px" width="190px" />
        </Link>
        <br />
        <h2>{Marca}</h2>
        <p>{Modelo}</p>
        <h3>{precio}</h3>
      </div>
    
  );
}

export default ItemListContainer;