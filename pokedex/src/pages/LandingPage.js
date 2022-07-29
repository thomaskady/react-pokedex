import Pokeball from '../components/LandingPage/Pokeball';
import PokedexWrapper from '../components/LandingPage/PokedexWrapper';
import { Fragment, useState } from 'react';

const LandingPage = (props) => {
    const [pokeballAnimationIsDone, setPokeballAnimationIsDone] = useState(false);

    return (
        <Fragment>
            <Pokeball pokeballAnimationIsDone ={() => {
                setPokeballAnimationIsDone(true);
            }}></Pokeball>
            <PokedexWrapper onPokeballClick={props.onPokeballClick} pokeballAnimationIsDone={pokeballAnimationIsDone}></PokedexWrapper>
        </Fragment>
    );
};

export default LandingPage;
