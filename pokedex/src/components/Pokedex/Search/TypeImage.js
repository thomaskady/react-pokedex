import { useState } from 'react';

import classes from '../Search/TypeImage.module.css';

const TypeImage = (props) => {
    const [popupIsShown, setPopupIsShown] = useState(false);

    return (
        <div
            className={classes.types}
            onMouseEnter={() => setPopupIsShown(true)}
            onMouseLeave={() => setPopupIsShown(false)}
        >
            {popupIsShown && (
                <div className={`${classes.popup} `}>
                    <p>{props.pokemon.type.join('/')}</p>
                </div>
            )}
            {props.pokemon.typeImg.map((img) => (
                <img
                    src={img}
                    alt="Logo for pokemon typing"
                    className={classes.type}
                ></img>
            ))}
        </div>
    );
};

export default TypeImage;
