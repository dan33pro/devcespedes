import React from 'react';

import certTerminal from '@images/certificaciones/1.png';
import frontEndDeveloper from '@images/certificaciones/2.png';
import practicoFrontEndDeveloper from '@images/certificaciones/3.png';
import definitivoHtmlCss from '@images/certificaciones/4.png';
import practicoHtmlCss from '@images/certificaciones/5.png';
import responsiveDesingMobileFirts from '@images/certificaciones/6.png';
import defingForDevelopers from '@images/certificaciones/7.png';
import cssGrid from '@images/certificaciones/8.png';
import maquetacionCSS from '@images/certificaciones/9.png';
import cssGridLayout from '@images/certificaciones/10.png';
import cssGridFlexbox from '@images/certificaciones/11.png';
import transformaciones from '@images/certificaciones/12.png';
import animaciones from '@images/certificaciones/13.png';
import js from '@images/certificaciones/14.png';
import closuresScope from '@images/certificaciones/15.png';
import pooUno from '@images/certificaciones/16.png';
import pooDos from '@images/certificaciones/17.png';
import ecmaScript from '@images/certificaciones/18.png';
import arraysJS from '@images/certificaciones/19.png';
import practicoJS from '@images/certificaciones/20.png';
import engineV8 from '@images/certificaciones/21.png';
import asincronoJS from '@images/certificaciones/22.png';
import npm from '@images/certificaciones/23.png';
import webpack from '@images/certificaciones/24.png';
import react from '@images/certificaciones/25.png';
import nextPractico from '@images/certificaciones/26.png';
import nextProfesional from '@images/certificaciones/27.png';
import fundamentosNode from '@images/certificaciones/28.png';
import backExpress from '@images/certificaciones/29.png';

import styles from '@styles/Certificaciones.module.scss';
import SimpleSlider from 'common/SimpleSlider';

const certificaciones = [
    {
        img: {
            src: certTerminal,
            alt: 'Introducción a la terminal y linea de comandos'
        }
    },{
        img: {
            src: frontEndDeveloper,
            alt: 'Frontend Developer'
        }
    },{
        img: {
            src: practicoFrontEndDeveloper,
            alt: 'Practico de Frontend Developer'
        }
    },{
        img: {
            src: definitivoHtmlCss,
            alt: 'Definitivo de HTML y CSS'
        }
    },{
        img: {
            src: practicoHtmlCss,
            alt: 'Practico de HTML y CSS'
        }
    },{
        img: {
            src: responsiveDesingMobileFirts,
            alt: 'Responsive Desing - Mobile Firts'
        }
    },{
        img: {
            src: defingForDevelopers,
            alt: 'Diseño para Desarrolladores'
        }
    },{
        img: {
            src: cssGrid,
            alt: 'CSS Grid Básico'
        }
    },{
        img: {
            src: maquetacionCSS,
            alt: 'Maquetación CSS'
        }
    },{
        img: {
            src: cssGridLayout,
            alt: 'CSS Grid Layout'
        }
    },{
        img: {
            src: cssGridFlexbox,
            alt: 'CSS Grid y Flexbox'
        }
    },{
        img: {
            src: transformaciones,
            alt: 'Transformaciones y Transiciones con CSS'
        }
    },{
        img: {
            src: animaciones,
            alt: 'Animaciones con CSS'
        }
    },{
        img: {
            src: js,
            alt: 'Básico de JavaScript'
        }
    },{
        img: {
            src: closuresScope,
            alt: 'Closures y Scope'
        }
    },{
        img: {
            src: pooUno,
            alt: 'Programación Orientada a Objetos con JavaScript'
        }
    },{
        img: {
            src: pooDos,
            alt: 'Programación Orientada a Objetos en JavaScript'
        }
    },{
        img: {
            src: ecmaScript,
            alt: 'ECMAScript 6+'
        }
    },{
        img: {
            src: arraysJS,
            alt: 'Manipulación de Arrays con JavaScript'
        }
    },{
        img: {
            src: practicoJS,
            alt: 'Curso Practico de JavaScript'
        }
    },{
        img: {
            src: engineV8,
            alt: 'JavaScript Engine V8'
        }
    },{
        img: {
            src: asincronoJS,
            alt: 'Asincrono de JavaScript'
        }
    },{
        img: {
            src: npm,
            alt: 'Gestión de Paquetes - NPM de JavaScript'
        }
    },{
        img: {
            src: webpack,
            alt: 'Webpack'
        }
    },{
        img: {
            src: react,
            alt: 'React.js'
        }
    },{
        img: {
            src: nextPractico,
            alt: 'Next.js Practico'
        }
    },{
        img: {
            src: nextProfesional,
            alt: 'Next.js Profesional'
        }
    },{
        img: {
            src: fundamentosNode,
            alt: 'Fundamentos de Node.js'
        }
    },{
        img: {
            src: backExpress,
            alt: 'Backend con Node.js y Express.js'
        }
    }
];

const Certificaciones = () => {
    return (
        <section className={styles.Certificaciones}>
            <h2>CERTIFICACIONES</h2>
            <div className={styles['line-divide']}></div>
            <SimpleSlider items={certificaciones} />
        </section>
    );
};

export default Certificaciones;