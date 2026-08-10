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
                        Ingeniero de Sistemas especializado en Ingeniería de Datos,
                        AWS Cloud y Desarrollo de Software Full Stack, con
                        experiencia en el diseño e implementación de arquitecturas
                        de datos, procesos ETL, Data Lakes, Data Warehouses y
                        soluciones serverless. Experiencia desarrollando
                        aplicaciones web, APIs REST, microservicios e integrando
                        modelos de Inteligencia Artificial Generativa (LLMs) para la
                        automatización de procesos. Orientado a la construcción
                        de soluciones escalables, de alto rendimiento y alineadas
                        con las necesidades del negocio.
                    </p>
                </article>
            </section>
            <div className={styles['fondo-gris']}></div>
        </main>
    );
};

export default Interview;
