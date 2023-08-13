import styles from '@styles/Header.module.scss';
import Image from 'next/image';

import logoupc from '@logos/logo_upc.png';
import iconmail from '@icons/email-green.png';
import iconshare from '@icons/share.png';
import iconcall from '@icons/phone-green.png';
import iconArrow from '@icons/triangle-arrow.png';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [navOptionsSize, setNavOptionsSize] = useState({width: 0, height: 0});
  const navOptionsRef = useRef(null);

  useEffect(() => {
    if (navOptionsRef.current) {
      const { clientWidth, clientHeight } = navOptionsRef.current;
      setNavOptionsSize({width: clientWidth, height: clientHeight});
    }
  }, []);

  return (
    <nav className={styles.Nav}>
      <div className={styles['logo-container']}>
        <Image src={logoupc} alt="logo_upc" className={styles['upc-logo']} />
      </div>
      <ul className={styles['menu-list']} ref={navOptionsRef}>
        <li className={`${styles['menu-item']} ${styles['sectionVisible']}`}>
          <Link className={styles['link-item']} href={'#hola'} scroll={false}>
            <span>QUIEN SOY</span>
          </Link>
        </li>
        <li className={`${styles['menu-item']}`}>
          <Link className={styles['link-item']} href={'#hola'} scroll={false}>
            <span>SOBRE MI</span>
          </Link>
        </li>
        <li className={`${styles['menu-item']}`}>
          <Link className={styles['link-item']} href={'#hola'} scroll={false}>
            <span>EDUCACIÓN</span>
          </Link>
        </li>
        <li className={`${styles['menu-item']}`}>
          <Link className={styles['link-item']} href={'#hola'} scroll={false}>
            <span>PERFIL PROFESIONAL</span>
          </Link>
        </li>
        <li className={`${styles['menu-item']}`}>
          <Link className={styles['link-item']} href={'#hola'} scroll={false}>
            <span>ALGUNOS PROYECTOS</span>
          </Link>
        </li>
        <li className={`${styles['menu-item']}`}>
          <Link className={styles['link-item']} href={'#hola'} scroll={false}>
            <span>HOJA DE VIDA</span>
          </Link>
        </li>
        <li className={`${styles['menu-item']}`}>
          <Link className={styles['link-item']} href={'#hola'} scroll={false}>
            <span>MIS HABILIDADES</span>
          </Link>
        </li>
        <li className={`${styles['menu-item']}`}>
          <Link className={styles['link-item']} href={'#hola'} scroll={false}>
            <span>CERTIFICACIONES</span>
          </Link>
        </li>
        <li className={`${styles['menu-item']}`}>
          <Link className={styles['link-item']} href={'#hola'} scroll={false}>
            <span>CONTACTO</span>
          </Link>
        </li>
        <li className={`${styles['menu-item']} ${styles['inactive']}`}>
          <Link className={styles['link-item']} href={'#hola'} scroll={false}>
            <span>MÁS</span>
            <Image src={iconArrow} alt='icono flecha' className={styles['icono-arrow']} />
          </Link>
        </li>
      </ul>
      <ul className={styles['menu-contact']}>
        <li className={styles['item-contact']}>
          <Image src={iconmail} alt="icon-mail" className={styles['icon-mail']} />
        </li>
        <li className={styles['item-contact']}>
          <Image src={iconshare} alt="icon-share" className={styles['icon-share']} />
        </li>
        <li className={styles['item-contact']}>
          <Image src={iconcall} alt="icon-call" className={styles['icon-call']} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
