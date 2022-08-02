import { useState } from 'react';

import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Pokedex from './pages/Pokedex';

function App() {
    const [landingButtonIsClicked, setLandingButtonIsClicked] = useState(false);

    const openPokedex = () => {
        setLandingButtonIsClicked(true);
    };

    return (
        <Layout>
            {landingButtonIsClicked ? (
                <Pokedex />
            ) : (
                <LandingPage onPokeballClick={openPokedex} />
            )}
        </Layout>
    );
}

export default App;
