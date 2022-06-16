import { Link } from 'react-router-dom'
import "./styles.css"

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo" />

            <ul className="links">
                <li>
                    <Link to="/" >
                        Página Inicial
                    </Link>
                </li>
                <li>
                    <Link to="/calculator" >
                        Calculadora
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar