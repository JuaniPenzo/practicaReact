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
                        nombre="Volkswagen"
                        url="https://brandemia.org/sites/default/files/inline/images/volkswagen_logo-portada.jpg"
                        texto="Accede a los mejores precios y financiacion de tu primer Volkswagen"
                        boton="Accede a Volkswagen"
                        href="/Volkswagen"
                        >
                        </Columna>
                    </div>
                    <div className="col d-flex align-items-start">
                    <Columna
                        nombre="Audi"
                        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRExXG26-B8ALTqre4Lb0cGgJrSYL-W7cVp8jEW8Zx&s"
                        texto="Accede a los mejores precios y financiacion de tu primer Audi"
                        boton="Accede a Audi"
                        href="/Audi"
                        >
                        </Columna>
                    </div>
                    <div className="col d-flex align-items-start">
                        <Columna
                        nombre="Seat"
                        url="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/SEAT_Logo_from_2017.svg/2560px-SEAT_Logo_from_2017.svg.png"
                        texto="Accede a los mejores precios y financiacion de tu primer Seat"
                        boton="Accede a Seat"
                        href="/Seat"
                        >
                        </Columna>
                    </div>
                    <div className="col d-flex align-items-start">
                        <Columna
                        nombre="Skoda"
                        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-bkYwK8o2Z5hImbe89vJk-sTW1XwMcWFOrtNVPwR&s"
                        texto="Accede a los mejores precios y financiacion de tu primer Skoda"
                        boton="Accede a Skoda"
                        href="/Skoda"
                        >
                        </Columna>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main