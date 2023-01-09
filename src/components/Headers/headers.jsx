import Cart from './CartWidget'
import Logo from './logo'
import './headers.css'
import { Link } from 'react-router-dom'

function Headers(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
            <div className="container-fluid">
                <Logo></Logo>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Volkswagen">Volkswagen</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Audi">Audi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Seat">Seat</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Skoda">Skoda</Link>
                        </li>
                    </ul>
                    <div>
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Headers