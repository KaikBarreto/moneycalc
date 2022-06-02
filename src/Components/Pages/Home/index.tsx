import Footer from "../../Footer"
import Navbar  from "../../Navbar"
import "./styles.css"

export const Home = function() {
    return (
        <>
            <Navbar />
            <main>
                <img src="https://random.imagecdn.app/400/400" alt="MoneyCalc Logo" />
                <h2>A sua calculadora financeira</h2>
            </main>
            <Footer />
        </>
    )
}