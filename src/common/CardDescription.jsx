import React from 'react';
import Image from 'next/image';

import styles from '@styles/CardDescription.module.scss';

const CardDescription = (props) => {
    const { card } = props;

    return (
        <a className={`${styles.CardDescription} ${styles[`${card.type}`]}`} href={card.url} target='_blank'>
            <picture className={styles['container-img']}>
                <Image src={card.img} alt={card.alt} />
            </picture>
            <section className={styles['container-info']}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </section>
        </a>
    );
};

export default CardDescription;