import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Game from "./pages/Game";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { db } from "./firebase/init";
import Games from "./pages/Games";
import { collection, getDocs, addDoc } from "firebase/firestore";
import CreateGame from "./pages/CreateGame";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [games, setGames] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesCollection = collection(db, "games");
        const gamesSnapshot = await getDocs(gamesCollection);
        const gamesList = gamesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (gamesList.length > 0) {
          setGames(gamesList);
        }

      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames()
  }, []);

  const createGame = async (gameName) => {
    if (!logged || !user) {

      toast('You need to be logged in to create games.', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        progress: undefined,
        theme: "dark"
      });

      return;
    }

    try {
      const newGame = {
        name: gameName,
        creatorUid: user.uid,
        createdAt: new Date(),
      };

      const gamesCollection = collection(db, "games");
      const docRef = await addDoc(gamesCollection, newGame);

      if (games !== null) {
        setGames((prevGames) => [
          ...prevGames,
          { id: docRef.id, ...newGame },
        ])
      } else {
        setGames([newGame])
      }

    } catch (error) {
      console.error("Error creating game:", error);
    }
  };

  return (
    <Router>
      <ToastContainer />
      <Nav logged={logged} setLogged={setLogged} user={user} setUser={setUser} />
      <Routes>
        <Route path="/" exact element={<Home user={user} />} />
        <Route path="/game" element={<Game />} />
        <Route path="/games" element={<Games games={games} />} />
        <Route
          path="/create-game"
          element={<CreateGame user={user} createGame={createGame} />}
        />
      </Routes>
    </Router>
  );
}

export default App;