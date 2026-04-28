import { useEffect } from "react"
import "./App.css"
import SectionNumber from "./SectionNumber"
function ThirdGraph() {
  return (
    <section>
        <SectionNumber number="03" desc="LA BRECHA QUE NO PARA DE CRECER"/>
        <p className="storytelling_2">El desplazamiento del gol hacia el final se confirma también a escala de los tiempos. En 1930, 
            la diferencia de goles entre primer y segundo tiempo era de apenas <span className="highlight">6 goles</span> en todo el torneo. En 2014, esa brecha llegó a <span className="highlight">38 goles</span>. 
            Los equipos modernos saben administrar los primeros 45 minutos: las instrucciones del banco, los ajustes al descanso y la entrada de 
            cambios explosivos hacen del segundo tiempo un territorio cada vez más fértil.</p>


        <iframe src='https://flo.uri.sh/visualisation/28414209/embed' title='Interactive or visual content' class='flourish-embed-iframe' 
        frameborder='0' scrolling='no'
        sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
    </section>
  )
}

export default ThirdGraph