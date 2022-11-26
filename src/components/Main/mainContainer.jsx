function Columna (props){
    return(
        <div>
            <h3 className="fs-2">{props.nombre}</h3>
            <p>{props.texto}</p>
            <a href="#" className="btn btn-primary">{props.boton}</a>
        </div>
    )
}

export default Columna