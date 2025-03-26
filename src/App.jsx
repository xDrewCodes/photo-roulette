import Nav from "./components/Nav";
import Game from "./pages/Game";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App
