import { useState } from "react";
import Nav from "./components/Nav";
import Game from "./pages/Game";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {

  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <Router>
      <Nav logged={logged} setLogged={setLogged} user={user} setUser={setUser} />
      <Routes>
        <Route path='/' exact element={<Home user={user}/>} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App
