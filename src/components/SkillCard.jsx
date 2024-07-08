import React, { useEffect, useState } from 'react';

import styles from '@styles/SkillCard.module.scss';

const SkillCard = ({ percentage, title }) => {
    const [dashArray, setDashArray] = useState('0 100');

    useEffect(() => {
        const radius = 45;
        const circumference = 2 * Math.PI * radius;
        const dashOffset = ((100 - percentage) / 100) * circumference;

        setDashArray(`${circumference - dashOffset} ${dashOffset}`);
    }, [percentage]);

    return (
        <aside className={styles.SkillCard}>
            <div className={styles.skill}>
                <svg width="100" height="100">
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        style={{ strokeDasharray: dashArray }}
                    />
                </svg>
                <span className={styles['percentage-label']}>{percentage}%</span>
            </div>
            <p>{title}</p>
        </aside>
    );
};

export default SkillCard;