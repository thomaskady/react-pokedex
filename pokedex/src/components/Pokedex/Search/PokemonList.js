import { useState, useEffect, useRef } from 'react';
import throttle from 'lodash/throttle';

import classes from '../Search/PokemonList.module.css';

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

let start = 1;
let end = 51;
let loadHeight = 600;

const PokemonList = (props) => {
    const effectRan = useRef(false);
    const scrollRef = useRef();
    const [pokemonDisplayList, setPokemonDisplayList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchPokemon = async (filter) => {
        setIsLoading(true);
        console.log(start, end);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        const newPokemon = [];
        for (let i = start; i <= end; i++) {
            const data = await P.getPokemon(i);
            const pokemon = { id: data.id, name: data.name, type: data.types };
            newPokemon.push(pokemon);
        }
        start += 51;
        end += 51;
        setIsLoading(false);
        return newPokemon;
    };

    useEffect(() => {
        if (effectRan.current === false) {
            console.log('fetching');
            const fetchStartingPokemon = async () => {
                const startingPokemon = await fetchPokemon();
                setPokemonDisplayList((prevState) => [...prevState, ...startingPokemon]);
            }
            fetchStartingPokemon();
        }

        return () => {
            effectRan.current = true;
        };
    }, []);

    const scrollHandler = async (event) => {
        if (scrollRef.current.scrollTop > loadHeight && isLoading === false) {
            const newPokemon = await fetchPokemon();
            console.log(newPokemon);
            setPokemonDisplayList((prevState) => [...prevState, ...newPokemon]);
            loadHeight += 600;
        }
    };

    const throttledScrollHandler = throttle(scrollHandler, 200);

    return (
        <ol className={classes.list} ref={scrollRef} onScroll={throttledScrollHandler}>
            {pokemonDisplayList.map((pokemon) => {
                return (
                    <li>{`${pokemon.id} ${pokemon.name} ${pokemon.type}`}</li>
                )
            })}
            {isLoading && <p>Loading...</p>}
        </ol>
    );
};

export default PokemonList;
