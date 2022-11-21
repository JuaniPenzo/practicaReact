function Columna (props){
    return(
        <div>
            <h3 class="fs-2">{props.nombre}</h3>
            <p>{props.texto}</p>
            <a href="#" class="btn btn-primary">{props.boton}</a>
        </div>
    )
}

export default Columna