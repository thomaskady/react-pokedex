import { Fragment } from 'react';
import classes from '../LandingPage/PokedexWrapper.module.css';

const PokedexWrapper = (props) => {
    const animationEndHandler = () => {
        props.onPokeballClick();
    };

    return (
        <Fragment>
            <div
                className={`${classes.top} ${
                    props.pokeballAnimationIsDone && classes['top-slide']
                }`}
                onAnimationEnd={animationEndHandler}
            ></div>
            <div
                className={`${classes.bottom} ${
                    props.pokeballAnimationIsDone && classes['bottom-slide']
                }`}
            ></div>
        </Fragment>
    );
};

export default PokedexWrapper;
