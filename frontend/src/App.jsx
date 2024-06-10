import { Route,Routes } from "react-router-dom"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ChallengeList from "./container/ChallengList"
import Challenge from "./pages/Challenge"

function App() {
  return (
    <main>
    <Navbar/>
    <Routes>
      <Route path="/" element={
        <>
          <ChallengeList />
          <Feature/>
        </>
      }/>
<     Route path="/challenge/:id" element={<Challenge />}/>
    </Routes>
    <Footer/>
    </main>
  )
}

export default App
