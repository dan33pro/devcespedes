import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '@styles/SimpleSlider.module.scss';

const SimpleSlider = ({ items }) => {
    const [indexFocus, setIndexFocus] = useState(0);
    const containerRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        if (containerRef.current && itemsRef.current[indexFocus]) {
            const scrollAmount = itemsRef.current[indexFocus].offsetLeft - (containerRef.current.clientWidth / 2) + (itemsRef.current[indexFocus].clientWidth / 2);
            containerRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }, [indexFocus]);

    const movePrevius = () => {
        if (indexFocus > 0) {
            setIndexFocus(indexFocus - 1);
        }
    };

    const moveNext = () => {
        if (indexFocus < items.length - 1) {
            setIndexFocus(indexFocus + 1);
        }
    };

    return (
        <section className={styles.SimpleSlider}>
            <div className={styles['container-images']} ref={containerRef}>
                <button
                    type="button"
                    onClick={movePrevius}
                    className={`${styles['btn-slider']} ${styles.previous} ${indexFocus === 0 ? styles.hidden : ''}`}
                >
                    <svg viewBox="0 0 100 100">
                        <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className={styles.arrow}></path>
                    </svg>
                </button>
                {items.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemsRef.current[index] = el)}
                        className={`${styles['item-container']} ${indexFocus === index ? styles.focus : ''}`}
                    >
                        <Image
                            src={item.img.src}
                            alt={item.img.alt}
                            id={`image-${index}`}
                            className={styles['item-image']}
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={moveNext}
                    className={`${styles['btn-slider']} ${styles.next} ${indexFocus === items.length - 1 ? styles.hidden : ''}`}
                >
                    <svg viewBox="0 0 100 100">
                        <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className={styles.arrow}></path>
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default SimpleSlider;
