 import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ChallengeList from "./container/ChallengList"

function App() {
  return (
    <main>
    <Navbar/>
    <ChallengeList />
    <Feature/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    <Footer/>
    </main>
  )
}

export default App
