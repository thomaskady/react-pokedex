import classes from '../Search/PokemonListItem.module.css';
import TypeImage from "./TypeImage";

const pokemonListItem = (props) => {
    const pokemon = props.pokemon;

    const clickHandler = (event) => {
        props.setActivePokemon(pokemon);
    }

    return (
        <li key={pokemon.id} className={classes.entry} onClick={clickHandler}>
            <img
                src={pokemon.sprites.box}
                alt={`Box sprite for ${pokemon.name}`}
            ></img>
            {`${pokemon.id} ${pokemon.name}`}
            <TypeImage pokemon={pokemon} />
        </li>
    );
};

export default pokemonListItem;
