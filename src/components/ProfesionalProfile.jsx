import React from 'react';

import Image from 'next/image';
import github from '@icons/github-yellow.png';
import laptop from '@images/profile-github.png';

import styles from '@styles/ProfesionalProfile.module.scss';

const ProfesionalProfile = () => {
    return (
        <main className={styles.ProfesionalProfile}>
            <section className={styles['info-profile']}>
                <article className={styles['container-info']}>
                    <h3>Perfil Profesional</h3>
                    <div className={styles['simple-border']}></div>
                    <p>
                        Conocimientos en desarrollo de software y tecnologías
                        web como Angular, React.js y Next.js. Con sólidos bases en Frontend,
                        diseño UI/UX - Figma, con experiencia en backend con TypeScript,
                        Java - Springboot, Node.js y Express.js. Adaptable a metodologías
                        ágiles, siempre dispuesto a enfrentar nuevos retos y estar en
                        constante proceso de aprendizaje.
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