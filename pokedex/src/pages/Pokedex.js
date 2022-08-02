

import classes from '../pages/Pokedex.module.css';
import SearchForm from '../components/Pokedex/Search/SearchForm';
import ImageScreen from '../components/Pokedex/Info/ImageScreen';
import ContentWrapper from '../components/Pokedex/ContentWrapper';
import PokemonList from '../components/Pokedex/Search/PokemonList';

const Dex = require('pokeapi-js-wrapper');
const P = new Dex.Pokedex();

const Pokedex = () => {
    return (
        <div className={classes.container}>
            <ContentWrapper>
                <ImageScreen />
            </ContentWrapper>
            <div className={classes.divider}></div>
            <ContentWrapper>
                <SearchForm />
                <PokemonList P={P} />
            </ContentWrapper>
        </div>
    );
};

export default Pokedex;
