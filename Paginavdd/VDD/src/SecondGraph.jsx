import { useEffect } from "react"
import "./App.css"
import SectionNumber from "./SectionNumber"
function SecondGraph() {
  return (
    <section>
        <SectionNumber number="02" desc="LA CONCENTRACION TARDÍA"/>
        <p className="storytelling_2">Que haya menos goles no significa que el espectáculo disminuyó, simplemente <span className="highlight">se reubicó en el tiempo</span>. 
            En los mundiales anteriores a 1990, el 21% de los goles caía en los últimos 15 minutos. En la era moderna, 
            esa cifra saltó al <span className="highlight">26%</span>. Mientras tanto, los primeros 30 minutos concentran cada vez menos tantos: los equipos 
            salieron a especular, a aguantar, a esperar el error del rival.</p>

        <p className="storytelling_2_1">Esta transformación tiene nombre táctico: <span className="highlight">el bloque bajo</span>. Equipos que ceden la pelota, comprimen espacios y atacan en 
            transición solo cuando el rival se desorganiza. Y el resultado más lógico de ese choque de paciencias es que las redes 
            se sacuden cuando el cansancio rompe las líneas: en el minuto 80, 85, o en el descuento.</p>

        <div className="quote">
            <p>“En el fútbol moderno, los partidos duran hasta el último segundo.”</p>
            <p>Pep Guardiola</p>
        </div>

        <iframe className="grafico2" src='https://flo.uri.sh/visualisation/28382591/embed' title='Interactive or visual content' 
         frameborder='0' scrolling='no'
        sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
    </section>
  )
}

export default SecondGraph