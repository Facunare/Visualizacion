import { useEffect } from "react"
import "./App.css"
import SectionNumber from "./SectionNumber"
function SixthGraph() {
  return (
    <section>
        <SectionNumber number="06" desc="LA RESPUESTA"/>
        <p className="storytelling_2">Si las nuevas confederaciones fueran las únicas responsables, 
            esperaríamos ver que Europa y Sudamérica mantuvieron sus niveles históricos mientras los recién 
            llegados arrastraban el promedio. Pero el gráfico desmiente esa hipótesis de entrada: <span className="highlight">UEFA ya caía 
            de 4.15 a 3.0 goles por partido antes de que CAF o AFC existieran en el torneo</span>. CONMEBOL hizo lo mismo. 
            La tendencia defensiva no esperó a nadie.</p>

        <p className="storytelling_2_1">Lo que sí hicieron las confederaciones emergentes fue llegar con promedios 
            estructuralmente más bajos, AFC y CAF nunca superaron los 2 goles por partido en ninguna era, <span className="highlight">profundizando 
            una caída que las potencias tradicionales ya habían iniciado décadas antes</span>. El resultado es una convergencia 
            hacia abajo: todas las líneas apuntan en la misma dirección, independientemente del origen geográfico.</p>

        <div className="resultado">
            <div className="resultado1">
                <p className="veredicto yes">LO QUE SI HICIERON</p>
                <p>AFC y CAF entraron al torneo con promedios de 1 a 2 goles por partido, 
                    muy por debajo de las potencias, y su incorporación masiva desde 1998 aceleró la 
                    caída del promedio global y profundizó la brecha entre confederaciones.</p>
            </div>
            <div className="resultado2">
                <p className="veredicto loqueno">LO QUE NO EXPLICAN</p>
                <p>UEFA pasó de 4.15 a 2.99 goles por partido entre 1930–1954 y 1958–1974, cuando AFC y CAF aún no participaban. 
                    La caída es propia del juego moderno, no de quién juega. Todas las confederaciones bajaron su promedio con el 
                    tiempo.</p>
            </div>
        </div>
            
        <iframe src='https://flo.uri.sh/visualisation/28485205/embed' title='Interactive or visual content' 
        class='flourish-embed-iframe' frameborder='0' scrolling='no'
        sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        {/* <iframe src='https://flo.uri.sh/visualisation/28414732/embed' title='Interactive or visual content' 
        class='flourish-embed-iframe' frameborder='0' scrolling='no'
        sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe> */}
    </section>
  )
}

export default SixthGraph