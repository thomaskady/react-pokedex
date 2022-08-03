import { useState } from 'react';

import classes from '../pages/Pokedex.module.css';
import SearchForm from '../components/Pokedex/Search/SearchForm';
import ImageScreen from '../components/Pokedex/Info/ImageScreen';
import ContentWrapper from '../components/Pokedex/ContentWrapper';
import PokemonList from '../components/Pokedex/Search/PokemonList';

const Pokedex = () => {
    const [activePokemon, setActivePokemon] = useState(null);

    console.log(activePokemon);

    return (
        <div className={classes.container}>
            <ContentWrapper>
                <ImageScreen activePokemon={activePokemon}/>
            </ContentWrapper>
            <div className={classes.divider}></div>
            <ContentWrapper>
                <SearchForm />
                <PokemonList setActivePokemon={setActivePokemon} />
            </ContentWrapper>
        </div>
    );
};

export default Pokedex;
