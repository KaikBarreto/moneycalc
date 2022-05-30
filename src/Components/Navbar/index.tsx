import { Link } from 'react-router-dom'
import "./styles.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                Logo
            </div>

            <ul className="links">
                <li>
                    <Link to="#" >
                        Página Inicial
                    </Link>
                </li>
                <li>
                    <Link to="#" >
                        Calculadora
                    </Link>
                </li>
                <li>
                    <Link to="#" >
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar