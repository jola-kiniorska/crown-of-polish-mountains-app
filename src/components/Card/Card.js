import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addClickedMountains, removeClickedMountains } from '../../redux/store';
import { useSelector } from 'react-redux';
import { getClickedMountains } from '../../redux/store';

const Card = props => {

    const dispatch = useDispatch()

    const [clicked, setClicked] = useState(props.clicked);
    const counter = useSelector(getClickedMountains)

    const handleSubmit = e => {
        e.preventDefault();
        setClicked(clicked => !clicked);
        const mountainId = props.id;
        if (!counter.includes(mountainId)) {
            dispatch(addClickedMountains({ mountainId }));
        } else {
            dispatch(removeClickedMountains({ mountainId }));
        }
    }

    if (clicked)
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