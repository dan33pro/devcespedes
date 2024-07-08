import React from 'react';
import Image from 'next/image';

import styles from '@styles/Hero.module.scss';

import profilePhoto from '@images/profile-photo.png';
import linkedin from '@icons/linkedin.png';
import github from '@icons/github.png';

const Hero = () => {
    return (
        <section className={styles.Hero}>
            <picture className={styles['container-profile-img']}>
                <Image src={profilePhoto} alt="imagen de perfil" />
            </picture>
            <article className={styles['profile-info']}>
                <h1>Daniel Santiago Céspedes Granados</h1>
                <div className={styles['simple-border']}></div>
                <p>Desarrollador Web | Full - Stack | React.js | Next.js | Angular | Node.js | JS - TS | Java</p>
                <div className={styles['container-btns-profile']}>
                    <a target='_blank' href='https://www.linkedin.com/in/daniel-santiago-c%C3%A9spedes-granados-825729206/'>
                        <Image src={linkedin} alt="LinkedIn logo" />
                        <span>@DEVCESPEDES</span>
                    </a>
                    <a target='_blank' href='https://github.com/dan33pro/'>
                        <Image src={github} alt="Github logo" />
                        <span>@DAN33PRO</span>
                    </a>
                </div>
            </article>
        </section>
    );
};

export default Hero;
