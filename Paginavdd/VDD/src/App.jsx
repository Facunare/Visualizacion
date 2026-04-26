import { useEffect } from "react"
import "./App.css"
import Introduction from "./Introduction"
import FirstGraph from "./FirstGraph"
import SecondGraph from "./SecondGraph"
import ThirdGraph from "./ThirdGraph"
import FourthGraph from "./FourthGraph"
import FifthGraph from "./FifthGraph"
import SixthGraph from "./SixthGraph"
import Conclusion from "./Conclusion"
import Footer from "./Footer"
import Separator from "./Separator"
function App() {
  return (
    <>
      <Introduction />
      <Separator/>
      <FirstGraph/>
      <Separator/>
      <SecondGraph/>
      <Separator/>
      <ThirdGraph/>
      <Separator/>
      <FourthGraph/>
      <Separator/>
      <FifthGraph/>
      <Separator/>
      <SixthGraph/>
      <Conclusion/>
      <Separator/>
      <Footer/>

    
    </>
  )
}

export default App