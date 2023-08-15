import Link from 'next/link';
import styles from '@styles/ItemNav.module.scss';

const ItemNav = (props) => {
  const { infoItem } = props;

  return (
    <li className={`${styles['menu-item']} ${infoItem.myClassList.sectionVisible ? styles['sectionVisible'] : ''} ${infoItem.myClassList.inactive ? styles['inactive'] : ''}`}>
      <Link className={styles['link-item']} href={infoItem.path} scroll={false}>
        <span>{infoItem.title}</span>
      </Link>
    </li>
  );
};

export default ItemNav;
