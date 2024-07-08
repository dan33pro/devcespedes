import React from 'react';

import sanpedro from '@images/csp-photo.jpeg';
import upc from '@images/upc-photo.webp';
import CardDescription from 'common/CardDescription';

import styles from '@styles/Education.module.scss';

const education = [
    {
        type: 'primary',
        img: sanpedro,
        alt: 'Imagen del San Pedro - Colegio',
        title: 'Colegio San Pedro TC - Madrid, Cundinamarca (2019)',
        description: 'Bachiller Académico y Técnico en desarrollo de software',
        url: 'https://colsanpedrotc.edu.co/'
    },
    {
        type: 'primary',
        img: upc,
        alt: 'Imagen de la Universidad Piloto de Colombia',
        title: 'Universidad Piloto de Colombia - Bogotá D.C',
        description: 'Pregrado en Ingeniería de Sistemas (Grado: Noviembre 2024)',
        url: 'https://www.unipiloto.edu.co/'
    }
];

const Education = () => {
    return (
        <section className={styles.Education}>
            <h2>EDUCACIÓN</h2>
            <div className={styles['line-divide']}></div>
            <article className={styles['cards-container']}>
                {education.map((card) => <CardDescription card={card} />)}
            </article>
        </section>
    );
};

export default Education;