import Cart from './CartWidget'
import Logo from './logo'

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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Volkswagen</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Audi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Seat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Skoda</a>
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