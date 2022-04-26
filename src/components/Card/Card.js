import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getClickedMountains } from '../../redux/store';

const Card = props => {

const dispatch = useDispatch()

const ifClicked = props.clicked;
const mountainId = props.id;

const [clicked, setClicked] = useState(props.clicked);

const handleSubmit = e => {
    e.preventDefault();
    setClicked(clicked => !clicked);
    dispatch(getClickedMountains(mountainId, ifClicked))
    console.log(props.clicked);
}

    if(clicked) 
    return (
        <li onClick={handleSubmit} className={clsx(styles.cards, styles.clicked)}>
            <div className={styles.name}>
                <h3 className={styles.nameClicked}>{props.name}</h3>
                <h3 className={styles.reached}>REACHED!</h3>
                <h3 className={styles.nameClicked}>{props.height}</h3>
            </div>
        </li>
    );
    return (
        <li onClick={handleSubmit} className={styles.cards}>
            <div className={styles.name}>
                <h3 className={styles.mountain}>{props.name}</h3>
                <h4 className={styles.height}>{props.height}</h4>
            </div>
        </li>
    );
};

export default Card;