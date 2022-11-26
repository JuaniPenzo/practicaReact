import './main.css'
import Columna from './mainContainer'

function Main(){
    return(
        <main className="main">
            <div className="container px-4 py-5" id="hanging-icons">
                <h2 className="pb-2 border-bottom">Nuestros servicios</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">
                        <Columna
                        nombre="Repuestos"
                        texto="Accede a los mejores precios de repuestos nacionales e internacionales"
                        boton="Accede a Repuestos"
                        >
                        </Columna>
                    </div>
                    <div className="col d-flex align-items-start">
                    <Columna
                        nombre="Asesoramiento"
                        texto="Nuestros profesionales te brindaran el mejor asesoramiento para la deteccion de tus repuestos"
                        boton="Accede a Asesoramiento"
                        >
                        </Columna>
                    </div>
                    <div className="col d-flex align-items-start">
                        <Columna
                        nombre="Logistica"
                        texto="Contamos con una amplia flota de transporte para garantizar que tus repuestos lleguen segun lo acordado"
                        boton="Accede a Logistica"
                        >
                        </Columna>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main