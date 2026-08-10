import React from 'react';

import Image from 'next/image';
import github from '@icons/github-yellow.png';
import laptop from '@images/profile-github-v2.png';

import styles from '@styles/ProfesionalProfile.module.scss';

const ProfesionalProfile = () => {
    return (
        <main className={styles.ProfesionalProfile}>
            <section className={styles['info-profile']}>
                <article className={styles['container-info']}>
                    <h3>Perfil Profesional</h3>
                    <div className={styles['simple-border']}></div>
                    <p>
                        Profesional con experiencia en el desarrollo de soluciones tecnológicas de extremo a extremo, 
                        desde el análisis y diseño hasta la implementación e integración. He trabajado en entornos empresariales 
                        y equipos multidisciplinarios, participando en proyectos que requieren adaptación a diferentes tecnologías, 
                        arquitecturas y necesidades de negocio. Me caracterizo por el pensamiento analítico, la resolución de problemas, 
                        el aprendizaje continuo y la capacidad para convertir requerimientos en soluciones eficientes y mantenibles.
                    </p>
                </article>
                <a target='_blank' href='https://github.com/dan33pro/' className={styles['btn-git']}>
                    <Image src={github} alt='github icon' />
                    <span>GITHUB</span>
                </a>
            </section>
            <picture className={styles['aside-img']}>
                <Image src={laptop} alt='Imagen de laptop GitHub' />
            </picture>
        </main>
    );
};

export default ProfesionalProfile;