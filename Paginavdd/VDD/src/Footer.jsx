import { useEffect } from "react"
import "./App.css"
import SectionNumber from "./SectionNumber"
function SixthGraph() {

  const cambiarAncho = () => {
    document.body.classList.toggle("modo-ancho")
  }

  return (
    <footer>
        <div>
          <p onClick={cambiarAncho} className="footer-boton">Parcial Visualización de Datos - Lic. en Tecnología Digital - UTDT</p>
          <p>Grupo 11: Facundo Arechaga, Franco Bergman y Peter Ahn</p>
        </div>
        <div>
          <p>Datos: FIFA — Copa del Mundo 1930–2022</p>
          <p>Visualizaciones: Flourish</p>
        </div>
    </footer>
  )
}

export default SixthGraph