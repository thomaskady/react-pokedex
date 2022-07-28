import classes from '../pages/pokedex-wrapper.module.css';

const PokedexWrapper = () => {
    

    return (
        <div className={classes.container}>
            <div className={classes.top}></div>
            <div className={classes.pokeball}>
                <button className={classes.button}></button>
            </div>
            <div className={classes.bottom}></div>
        </div>
    );
};

export default PokedexWrapper;
