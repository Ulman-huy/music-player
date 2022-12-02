import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Data } from './NavbarData';
function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.navList}>
                {Data.map(item => (
                    <li className={styles.navItem} key={item.id}>
                        <NavLink to={item.link}>
                            <FontAwesomeIcon icon={item.icon} />
                            <span>{item.title}</span>
                            <span className={styles.hoverIcon}>
                                <FontAwesomeIcon icon={faPlay} />
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar