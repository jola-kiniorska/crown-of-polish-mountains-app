import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = props => {

console.log(props.clicked);

const handleSubmit = e => {
    e.preventDefault();
}

    return (
        <li onClick={handleSubmit} className={clsx(styles.cards, {[styles.active] : props.clicked === true})}>
            <div className={styles.name}>
                <h3 className={styles.mountain}>{props.name}</h3>
                <h4 className={styles.height}>{props.height}</h4>
            </div>
        </li>
    );
};

export default Card;