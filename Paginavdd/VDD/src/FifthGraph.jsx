import { useEffect } from "react"
import "./App.css"
import SectionNumber from "./SectionNumber"
function FifthGraph() {
  return (
    <section>
        <SectionNumber number="05" desc="EL MUNDO ENTERO EMPIEZA A JUGAR"/>
        <p className="storytelling_2">Hasta los años 80, el Mundial era en la práctica un torneo de dos confederaciones: 
            Europa y Sudamérica se repartían los goles, los títulos y el protagonismo. África, Asia y el mundo árabe aparecían 
            como invitados ocasionales, sin peso real en el resultado colectivo del torneo.</p>

        <p className="storytelling_2_1">Pero el mapa fue cambiando. La expansión a 32 equipos en 1998 y la llegada de Qatar 
            2022 abrieron la puerta a selecciones con una identidad táctica muy distinta: más cautelosa, más colectiva, 
            construida sobre la organización defensiva antes que sobre el talento individual. A medida que el mapa se tiñó de color, 
            el promedio de goles por partido comenzó a caer.</p>

        <p className="storytelling_2_1">Mirando esta evolución surge una pregunta inevitable: <span className="highlight">¿es la irrupción de estas 
            nuevas confederaciones lo que explica que los goles escaseen, que caigan cada vez más tarde y que los penales y 
            errores sean hoy los protagonistas del juego?</span></p>

        <div className="regiones">
            <div className="uefa region-card">
                <p className="regionName">EUROPA (UEFA)</p>
                <div className="region-bar-wrap">
                    <div className="region-bar dominant" style={{ width: '72%' }}></div>
                </div>
                <h1 className="region-pct">Dominante</h1>
                <p className="region-note">Alemania, Francia, Italia y España lideran el marcador histórico acumulado</p>
            </div>
            <div className="conmebol region-card">
                <p  className="regionName">SUDAMERICA (CONMEBOL)</p>
                <div className="region-bar-wrap">
                    <div className="region-bar dominant" style={{ width: '58%' }}></div>
                </div>
                <h1 className="region-pct">Histórico</h1>
                <p className="region-note">Brasil y Argentina como potencias constantes en todos los torneos</p>
            </div>
            <div className="caf region-card">
                <p  className="regionName">ÁFRICA (CAF)</p>
                <div className="region-bar-wrap">
                    <div className="region-bar growing" style={{ width: '28%' }}></div>
                </div>
                <h1 className="region-pct">En alza</h1>
                <p className="region-note">Marruecos, Senegal y Ghana como nuevos protagonistas desde los 90</p>
            </div>
            <div className="afc region-card">
                <p  className="regionName">ASIA (AFC) y OCEANÍA (OFC)</p>
                <div className="region-bar-wrap">
                    <div className="region-bar growing" style={{ width: '18%' }}></div>
                </div>
                <h1 className="region-pct">Emergente</h1>
                <p className="region-note">Japón, Corea y Australia acumulan participaciones y eliminaciones históricas</p>
            </div>
        </div>
            
        <iframe className="mapa" src='https://flo.uri.sh/visualisation/28424940/embed' title='Interactive or visual content' class='flourish-embed-iframe' 
        frameborder='0' scrolling='no' style={{ height: '650px' }}
        sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
    </section>
  )
}

export default FifthGraph