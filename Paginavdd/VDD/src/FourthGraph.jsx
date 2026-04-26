import { useEffect } from "react"
import "./App.css"
import SectionNumber from "./SectionNumber"
function FourthGraph() {
  return (
    <section>
        <SectionNumber number="04" desc="EL ARMA DEL EQUIPO DEBIL"/>
        <p className="storytelling_2">Cuando un equipo de una confederación emergente enfrenta a una potencia tradicional, 
          su plan suele ser el mismo: <span className="highlight">defender profundo, aguantar y esperar</span>. El problema de ese estilo es que un solo error: 
          una mano en el área, una distracción defensiva, <span className="highlight">se convierte en penal</span>. Y cuando la desesperación obliga a atacar en los últimos minutos, 
          el propio cuerpo se vuelve verdugo: <span className="highlight">el gol en contra</span>.</p>

        <p className="storytelling_2_1">El crecimiento sostenido de penales y goles en contra desde 1990, justamente cuando más confederaciones 
          se incorporaron al torneo, no es casualidad. Es la <span className="highlight">huella estadística del choque entre el fútbol especulativo y el poderío ofensivo</span> de 
          las potencias tradicionales. El penal y el gol en contra son los dos grandes protagonistas del fútbol moderno, y ambos nacen del mismo lugar: 
          equipos que defienden hasta que no pueden más.</p>
            
        <iframe src='https://flo.uri.sh/visualisation/28414732/embed' title='Interactive or visual content' 
        class='flourish-embed-iframe' frameborder='0' scrolling='no'
        sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
    </section>
  )
}

export default FourthGraph