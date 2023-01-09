import { Link } from "react-router-dom"
function ItemListContainer({ url, Marca, Modelo, precio, id, count, discount }) {
  let urlDetail = `/item/${id}`

  const cardBody={
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  }
  const discountStyle={
    color: discount? "green":"black"
  }
  return (
      <div>
        <div style={cardBody}>
            <div className="card" style={{width: 18+'rem'}} id={id}>
            <Link to={urlDetail} className="link">
              <img src={url} alt="Autos" height="100%" width="100%" />
            </Link>
                <div className="card-body" style={cardBody}>
                    <h4 className="card-title">{Marca}</h4>
                    <h5 className="card-text">{Modelo}</h5>
                    <h5 className="card-text" style={discountStyle}>{precio}</h5>
                    {discount && <h6 className="card-text" >{discount}% off</h6>}
                    {count && <p>{count}</p>}
                </div>
            </div>
        </div>
      </div>
  );
}

export default ItemListContainer;