import styles from './Column.module.scss'
import { useSelector } from 'react-redux'
import Card from '../Card/Card';
import { getMountains } from '../../redux/store';

const Column = props => {

    const cards = useSelector(getMountains);

    return (
        <article>
            <ul className={styles.column}>
                {cards.map(card =>
                    <Card key={card.id} name={card.name} height={card.height} clicked={card.clicked} id={card.id}/>
                )}
            </ul>
        </article>
    );
};

export default Column;