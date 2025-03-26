import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Game from "./pages/Game";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { auth } from "./firebase/init";
import Games from "./pages/Games";


function App() {

  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log(auth?.currentUser)
    setUser(auth?.currentUser)
  }, [])

  return (
    <Router>
      <Nav logged={logged} setLogged={setLogged} user={user} setUser={setUser} />
      <Routes>
        <Route path='/' exact element={<Home user={user} />} />
        <Route path='/game' element={<Game />} />
        <Route path='/games' element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App
