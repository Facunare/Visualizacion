import { useEffect } from "react"
import "./App.css"

function SectionNumber({number, desc}) {
  return (
    <section>
        <div className="firstItem">
            <h1 className="numberItem">{number}</h1>
            <h2>{desc}</h2>
        </div>
    </section>
  )
}

export default SectionNumber