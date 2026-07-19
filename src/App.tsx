import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { GameList } from '@/pages/GameList';
import { GameDetail } from '@/pages/GameDetail';
import { GamePlay } from '@/pages/GamePlay';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/games"
        element={
          <Layout>
            <GameList />
          </Layout>
        }
      />
      <Route
        path="/games/:id"
        element={
          <Layout>
            <GameDetail />
          </Layout>
        }
      />
      <Route path="/play/:id" element={<GamePlay />} />
    </Routes>
  );
}

export default App;
