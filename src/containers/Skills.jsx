import SkillCard from '@components/SkillCard';
import React from 'react';

import styles from '@styles/Skills.module.scss';

const Skills = (props) => {
    let { skills, title, secondClassName } = props;
    
    return (
        <section className={`${styles.Skills} ${styles[secondClassName]}`}>
            <h2>{title}</h2>
            <div className={styles['line-divide']}></div>
            <article className={styles['cards-container']}>
                {skills.map((skill) => <SkillCard percentage={skill.percentage} title={skill.title} secondClassName={secondClassName} />)}
            </article>
        </section>
    );
};

export default Skills;