import {useState} from 'react';

import Layout from "./components/Layout";
import LandingPage from './pages/LandingPage';

function App() {
  const [landingButtonIsClicked, setLandingButtonIsClicked] = useState(false);

  const openPokedex = () => {
    setLandingButtonIsClicked(true);
  }

  return <Layout>{!landingButtonIsClicked && <LandingPage onPokeballClick={openPokedex} />}</Layout>
}

export default App;
