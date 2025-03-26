import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Game from "./pages/Game";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { auth, db } from "./firebase/init";
import Games from "./pages/Games";
import { collection, getDocs } from "firebase/firestore";
import CreateGame from "./pages/CreateGame";


function App() {

  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState(null)
  const [games, setGames] = useState(null)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesCollection = collection(db, "games")
        const gamesSnapshot = await getDocs(gamesCollection)
        const gamesList = gamesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setGames(gamesList)
      } catch (error) {
        console.error("Error fetching games:", error)
      }
    }
    fetchGames()
  }, [])

  return (
    <Router>
      <Nav logged={logged} setLogged={setLogged} user={user} setUser={setUser} />
      <Routes>
        <Route path='/' exact element={<Home user={user} />} />
        <Route path='/game' element={<Game />} />
        
        <Route path='/games' element={<Games games={games} />} />
        <Route path='/create-game' element={<CreateGame user={user} />} />
      </Routes>
    </Router>
  );
}

export default App
