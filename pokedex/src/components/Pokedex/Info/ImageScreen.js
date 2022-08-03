import classes from '../Info/ImageScreen.module.css';

const ImageScreen = (props) => {
    return <div className={classes.screen}>{props.activePokemon && <img src={props.activePokemon.sprites.frontDefault} alt={props.activePokemon.name}></img>}</div>
}

export default ImageScreen