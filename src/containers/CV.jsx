import React from 'react';

import profile from '@images/profile-photo-v2.png';
import CardDescription from 'common/CardDescription';

import styles from '@styles/CV.module.scss';

const myCV = [
    {
        type: 'secundary',
        img: profile,
        alt: 'Imagen de perfil profesional',
        title: 'Hoja de Vida',
        description: '¡Haz click para ver mi Hoja de Vida',
        url: 'https://canva.link/nv4e3ijx7g564l6'
    },
];

const CV = () => {
    return (
        <section className={styles.CV}>
            <h2>HOJA DE VIDA</h2>
            <div className={styles['line-divide']}></div>
            <article className={styles['cards-container']}>
                {myCV.map((card) => <CardDescription card={card} />)}
            </article>
        </section>
    );
};

export default CV;