function Columna (props){
    return(
        <div>
            <h3 className="fs-2">{props.nombre}</h3>
            <img src={props.url} alt="Logo" height="150px" width="150px"/>
            <p>{props.texto}</p>
            <a href={props.href} className="btn btn-primary">{props.boton}</a>
        </div>
    )
}

export default Columna