import { useEffect } from "react"
import "./App.css"
import SectionNumber from "./SectionNumber"
function FirstGraph() {
  return (
    <section>
        <SectionNumber number="01" desc="LA CAÍDA HISTORICA"/>
        <div className="table">
            <div className="tab">
                <span className="valorMax">5.38 <span className="golesxpartido">goles/partido</span></span>
                <span className="picoHistorico">Maximo histórico - Suiza 1954</span>
            </div>
            <div className="tab">
                <span className="valorMin">2.21 <span className="golesxpartido">goles/partido</span></span>
                <span className="picoHistorico">Mínimo histórico - Italia 1990</span>
            </div>
            <div className="tab">
                <span className="valorMin">-59%</span>
                <span className="picoHistorico">Caida entre 1954 y 1990</span>
            </div>
        </div>

        <p className="storytelling_1">
            En Suiza 1954, cada partido producía en promedio <span className="highlight">5.38 goles</span>: un carnaval ofensivo que difícilmente se volvió a ver. 
            Pero algo cambió. Con la llegada de la televisión y el análisis táctico, los entrenadores empezaron a entender que <span className="highlight">no perder</span> era más valioso que ganar con amplitud. El resultado fue una curva descendente que encontró su piso en Italia 1990, 
            con apenas <span className="highlight">2.21 goles por partido</span>: el mundial más aburrido de la historia, que terminó obligando a la FIFA a modificar las 
            reglas para incentivar el ataque.
        </p>

        <p className="storytelling_1_2">
            Desde entonces, el promedio se estabilizó en torno a los 2.6 goles, 
            como si el fútbol hubiera alcanzado un equilibrio táctico: defensas bien organizadas, 
            transiciones velaces, y el gol como bien escaso y preciado.
        </p>

        <iframe src='https://flo.uri.sh/visualisation/28382568/embed' title='Interactive or visual content' 
        frameBorder='0' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups 
        allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        

    </section>
  )
}

export default FirstGraph