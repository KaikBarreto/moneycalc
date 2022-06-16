import { useState } from "react"
import Footer from "../../Footer"
import { Input } from "../../Input"
import Navbar from "../../Navbar"
import "./styles.css"

export const Calculator = function() {

    const [inicial, setInicial] = useState(0)
    const [taxa, setTaxa] = useState(0)
    const [tempo, setTempo] = useState(0)


    function handleChange(e: any): void {
        if (e.target.name === "inicial") {
            setInicial(e.target.value)
        } else if (e.target.name === "taxa"){
            setTaxa(e.target.value)
        } else {
            setTempo(e.target.value)
        }
    }

    function formula(inicial:number , taxa: number, tempo:number) {
        let M =  0;
        M = (inicial*(1+taxa/100)**tempo)
        
        return M.toFixed(2)
    }

    let Montante = parseInt(formula(inicial, taxa, tempo))
    let montanteFormatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(Montante)

    function changeVisibility() {
        let botao = document.querySelector(".resultado")
        botao?.classList.remove("resultado")
    }

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
                        <Input placeholder="Digite aqui o valor da taxa de juros (% ao ano)" name="taxa" header="Taxa de juros (% ao ano)" handleChange={handleChange} />
                        <span>%</span>
                    </div>
                    <div className="input">
                        <Input placeholder="Por quanto tempo o capital permanecerá aplicado" name="tempo" header="Tempo aplicado (anos)" handleChange={handleChange} />
                        <span>Y</span>
                    </div>
                </div>
                <button onClick={changeVisibility} >
                    Calcular rendimentos
                </button>
                <h2 className="resultado">
                    {montanteFormatado}
                </h2>
            </main>
            <Footer />
        </>
    )
}