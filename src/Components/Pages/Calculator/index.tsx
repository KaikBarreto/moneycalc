import { useState } from "react"
import Footer from "../../Footer"
import { Input } from "../../Input"
import Navbar from "../../Navbar"
import "./styles.css"

export const Calculator = function() {

    const [inicial, setInicial] = useState(0)
    const [mensal, setMensal] = useState(0)
    const [taxa, setTaxa] = useState(0)
    const [tempo, setTempo] = useState(0)


    function handleChange(e: any): void {
        if (e.target.name === "inicial") {
            setInicial(e.target.value)
        } else if (e.target.name === "mensal") {
            setMensal(e.target.value)
        } else if (e.target.name === "taxa"){
            setTaxa(e.target.value)
        } else {
            setTempo(e.target.value)
        }
    }

    function formula(C:number , i: number, n: number, a:number) {
        let M =  (C * ((1 + (i / 100)) ** n)) + (a * (((((1 + (i / 100))) ** n ) - 1) / (i / 100)))
        
        return M.toFixed(2)
    }

    const Montante = formula(inicial, taxa / 12, tempo * 12, mensal)

    return (
        <>
            <Navbar />
            <main>
                <h2>Calculadora Financeira</h2>
                <div className="inputArea">
                    <div className="input">
                        <Input placeholder="Digite aqui o valor do aporte inicial" name="inicial" header="Aporte inicial" handleChange={handleChange} />
                        <span>R$</span>
                    </div>
                    <div className="input">
                        <Input placeholder="Digite aqui o valor dos aportes mensais (opcional)" name="mensal" header="Aportes mensais" handleChange={handleChange} />
                        <span>R$</span>
                    </div>
                    <div className="input">
                        <Input placeholder="Digite aqui o valor da taxa de juros (% ao ano)" name="taxa" header="Taxa de juros (% ao ano)" handleChange={handleChange} />
                        <span>%</span>
                    </div>
                    <div className="input">
                        <Input placeholder="Por quanto tempo o capital permanecerá aplicado" name="tempo" header="Tempo aplicado (anos)" handleChange={handleChange} />
                        <span>Y</span>
                    </div>
                </div>
                <button>
                    Calcular rendimentos
                </button>
                <h2>
                    {Montante}
                </h2>
            </main>
            <Footer />
        </>
    )
}