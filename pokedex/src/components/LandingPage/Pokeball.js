import {useState} from 'react';
import classes from '../LandingPage/Pokeball.module.css';

const Pokeball = (props) => {
    const [buttonIsClicked, setButtonIsClicked] = useState(false);
    const [pokeballIsSpinning, setPokeballIsSpinning] = useState(false);

    return (
        <div className={`${classes.pokeball} ${pokeballIsSpinning && classes.spinning}`}>
            <button
                className={`${classes.button} ${buttonIsClicked && classes.clicked}`}
                onClick={() => {
                    setButtonIsClicked(true);
                }}
                onAnimationEnd = {() => {
                    props.pokeballAnimationIsDone();
                    setPokeballIsSpinning(true);
                }}
            ></button>
        </div>
    );
};

export default Pokeball;