import Layout from "./components/layout/Layout";
import Navbar from "./components/layout/Navbar";
import { Route, Routes } from "react-router-dom"
import HomeView from "./pages/Home/HomeView";
import GameView from "./pages/Game/GameView";
import LeaderboardView from "./pages/Leaderboard/LeaderboardView";
import { LevelsProvider } from "./context/LevelsContext";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
          <Route path='/' element={
            <LevelsProvider>
              <HomeView />
            </LevelsProvider>
          } />
          <Route path='/game/:id' element={
            <LevelsProvider>
              <GameView />
            </LevelsProvider>
          } />
        <Route path='/leaderboard' element={<LeaderboardView />} />
      </Routes>
    </Layout>
  );
}

export default App;
