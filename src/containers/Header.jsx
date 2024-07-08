import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import useWindowSize from '@hooks/useWindowSize';
import styles from '@styles/Header.module.scss';

import logoupc from '@logos/logo_upc.png';
import iconmail from '@icons/email-green.png';
import iconshare from '@icons/share.png';
import iconcall from '@icons/phone-green.png';
import iconArrow from '@icons/triangle-arrow.png';
import ItemNav from '@components/ItemNav';

const Header = () => {
  const navOptionsRef = useRef(null);
  const size = useWindowSize();
  const [btnMasIsView, setBtnMasIsView] = useState(false);
  const [navItemsSize, setnavItemsSize] = useState([]);
  const [itemsList, setItemsList] = useState([
    {
      id: 1,
      myClassList: {
        sectionVisible: true,
        inactive: false,
      },
      path: '#QuienSoy',
      title: 'QUIEN SOY',
    },
    {
      id: 2,
      myClassList: {
        sectionVisible: false,
        inactive: false,
      },
      path: '#SobreMi',
      title: 'SOBRE MI',
    },
    {
      id: 3,
      myClassList: {
        sectionVisible: false,
        inactive: false,
      },
      path: '#Educacion',
      title: 'EDUCACIÓN',
    },
    {
      id: 4,
      myClassList: {
        sectionVisible: false,
        inactive: false,
      },
      path: '#PerfilProfesional',
      title: 'PERFIL PROFESIONAL',
    },
    {
      id: 5,
      myClassList: {
        sectionVisible: false,
        inactive: false,
      },
      path: '#AlgunosProyectos',
      title: 'ALGUNOS PROYECTOS',
    },
    {
      id: 6,
      myClassList: {
        sectionVisible: false,
        inactive: false,
      },
      path: '#HojaDeVida',
      title: 'HOJA DE VIDA',
    },
    {
      id: 7,
      myClassList: {
        sectionVisible: false,
        inactive: false,
      },
      path: '#MisHabilidades',
      title: 'MIS HABILIDADES',
    },
    {
      id: 8,
      myClassList: {
        sectionVisible: false,
        inactive: false,
      },
      path: '#Certificaciones',
      title: 'CERTIFICACIONES',
    },
    {
      id: 9,
      myClassList: {
        sectionVisible: false,
        inactive: false,
      },
      path: '#Contacto',
      title: 'CONTACTO',
    },
  ]);
  const changeStateItem = (index, nameClass, value) => {
    let copyList = [...itemsList];
    copyList[index].myClassList[nameClass] = value;
    setItemsList(copyList);
  };

  useEffect(() => {
    if (navOptionsRef.current) {
      let navISize = [];
      navOptionsRef.current.childNodes.forEach((node) => {
        const { clientWidth, clientHeight } = node;
        navISize.push({ width: clientWidth, height: clientHeight });
      });
      setnavItemsSize(navISize);
    }
  }, []);

  useEffect(() => {
    const maxNavOptionsSize = (size.width / 15) * 12 + 20;
  }, [size]);

  const navOptiosSize = navItemsSize.filter(item => item.width != 0).reduce((sum, item) => sum + item.width + 4, -4);
  console.log(navItemsSize);
  console.log(navOptiosSize);

  return (
    <nav className={styles.Nav}>
      <div className={styles['logo-container']}>
        <Image src={logoupc} alt="logo_upc" className={styles['upc-logo']} />
      </div>
      <ul className={styles['menu-list']} ref={navOptionsRef}>
        {/* {itemsList.map((item) => (
          <ItemNav infoItem={item} key={item.id + '-' + item.path} />
        ))} */}
        {/* <li className={`${styles['menu-item']} ${!btnMasIsView ? styles['inactive'] : ''}`}>
          <button className={styles['link-item']} onClick={changeStateItem}>
            <span>MÁS</span>
            <Image src={iconArrow} alt="icono flecha" className={styles['icono-arrow']} />
          </button>
        </li> */}
      </ul>
      <ul className={styles['menu-contact']}>
        {/* <li className={styles['item-contact']}>
          <Image src={iconmail} alt="icon-mail" className={styles['icon-mail']} />
        </li>
        <li className={styles['item-contact']}>
          <Image src={iconshare} alt="icon-share" className={styles['icon-share']} />
        </li>
        <li className={styles['item-contact']}>
          <Image src={iconcall} alt="icon-call" className={styles['icon-call']} />
        </li> */}
        <h2 className={styles['branch']}>devcespedesg</h2>
      </ul>
    </nav>
  );
};

export default Header;
