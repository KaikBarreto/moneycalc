import Footer from "../../Footer"
import Navbar  from "../../Navbar"
import "./styles.css"
import { Link } from 'react-router-dom'

export const Home = function() {
    return (
        <>
            <Navbar />
            <main>
                <h2>MoneyCalc</h2>
                <h3>A sua calculadora financeira</h3>
                <div className="image" />
                <div className="botao">
                    <Link to="/calculator">Ir para a calculadora</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}