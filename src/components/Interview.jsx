import React from 'react';
import styles from '@styles/Interview.module.scss';

const Interview = () => {
    return (
        <main className={styles.Interview}>
            <section className={styles['container-interview']}>
                <picture className={styles['container-img-interview']}></picture>
                <article className={styles['interview-info']}>
                    <h1>SOBRE MI</h1>
                    <div className={styles['simple-border']}></div>
                    <p>
                        Soy estudiante de ingeniería de sistemas a la espera del grado, apasionado por el desarrollo de software y la IA Generativa como medio para la automatización e innovación de procesos. Soy
                        una persona altamente autodidacta, con bases firmes en las tecnologías del desarrollo web. Puedo adaptarme rápido a las diversas metodologías y frameworks ágiles, dispuesto a enfrentar
                        nuevos retos y a estar en un proceso de constante aprendizaje.
                    </p>
                </article>
            </section>
            <div className={styles['fondo-gris']}></div>
        </main>
    );
};

export default Interview;
