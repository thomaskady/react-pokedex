import { useState, useEffect, useRef, } from 'react';
import throttle from 'lodash/throttle';

import classes from '../Search/PokemonList.module.css';

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

let start = 1;
let end = 51;

const boxSpriteURL = 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/';
const typeURL = 'https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/gen8/'

const PokemonList = (props) => {
    const effectRan = useRef(false);
    const scrollRef = useRef();
    const [pokemonDisplayList, setPokemonDisplayList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchPokemon = async (filter) => {
        if(end === 905) return;
        if (end > 900) {
            end = 905;
        }
        setIsLoading(true);
        console.log(start, end);
        const newPokemon = [];
        for (let i = start; i <= end; i++) {
            const data = await P.getPokemon(i);
            console.log(data);
            let typing;
            let typeImgURL;
            if (data.types.length > 1) {
                typing = [data.types[0].type.name, data.types[1].type.name];
                typeImgURL = [`${typeURL}${data.types[0].type.name}.png`, `${typeURL}${data.types[1].type.name}.png`];
            } else {
                typing = [data.types[0].type.name];
                typeImgURL = [`${typeURL}${data.types[0].type.name}.png`];
            }
            const pokemon = { id: data.id, name: data.name, type: typing, typeImg: typeImgURL, boxSprite: `${boxSpriteURL}${data.name}.png` };
            newPokemon.push(pokemon);
        }
        start += 51;
        end += 51;
        setIsLoading(false);
        setPokemonDisplayList((prevState) => [...prevState, ...newPokemon]);
        if (
            scrollRef.current.clientHeight === scrollRef.current.scrollHeight &&
            effectRan.current === true
        ) {
            fetchPokemon();
        }
    };

    useEffect(() => {
        if (effectRan.current === false) {
            fetchPokemon();
        }

        return () => {
            effectRan.current = true;
        };
    });

    const scrollHandler = async (event) => {
        const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;
        console.log(scrollTop, clientHeight, scrollHeight);
        if (
            scrollHeight - (scrollTop + clientHeight) < 100 &&
            isLoading === false
        ) {
            fetchPokemon();
        }
    };

    const throttledScrollHandler = throttle(scrollHandler, 200);

    return (
        <ol
            className={classes.list}
            ref={scrollRef}
            onScroll={throttledScrollHandler}
        >
            {pokemonDisplayList.map((pokemon) => {
                return (
                    <li><img src={pokemon.boxSprite} alt={`Box sprite for ${pokemon.name}`}></img>{`${pokemon.id} ${pokemon.name}`}{pokemon.typeImg.map((img) => <img src={img} alt='Logo for pokemon typing' className={classes.type}></img>)}</li>
                );
            })}
            {isLoading && <p>Loading...</p>}
        </ol>
    );
};

export default PokemonList;
