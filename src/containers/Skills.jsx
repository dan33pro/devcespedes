import SkillCard from '@components/SkillCard';
import React from 'react';

import styles from '@styles/Skills.module.scss';

const mySkills = [
    {
        title: 'HTML Semantico',
        percentage: 90,
    },{
        title: 'CSS / SCSS',
        percentage: 95,
    },{
        title: 'React.js - Next.js',
        percentage: 95,
    },{
        title: 'Angular',
        percentage: 90,
    },{
        title: 'JavaScript / TypeScript - Node.js',
        percentage: 95,
    },{
        title: 'Java / SpringBoot',
        percentage: 85,
    },{
        title: 'Kotllin - Android',
        percentage: 90,
    },{
        title: 'Git / GitHub',
        percentage: 85,
    },{
        title: 'SQL / PostgreSQL - MySQL',
        percentage: 90,
    },{
        title: 'Figma',
        percentage: 95,
    },{
        title: 'Scrum',
        percentage: 90,
    }
];

const Skills = () => {
    return (
        <section className={styles.Skills}>
            <h2>MIS HABILIDADES</h2>
            <div className={styles['line-divide']}></div>
            <article className={styles['cards-container']}>
                {mySkills.map((skill) => <SkillCard percentage={skill.percentage} title={skill.title} />)}
            </article>
        </section>
    );
};

export default Skills;