import classes from '../Pokedex/ContentWrapper.module.css';

const ContentWrapper = props => {
    return <div className={classes.wrapper}>{props.children}</div>
}

export default ContentWrapper;