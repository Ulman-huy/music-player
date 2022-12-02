import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faAngleRight, faAngleLeft, faBars, faGrip, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <header className={styles.header}>
            <h1>
                <FontAwesomeIcon icon={faFolder}/>
                <span>MUSIC PLAYER</span>
            </h1>
            <div className={styles.dot}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.tools}>
                <div>
                    <div className={styles.btn}>
                        <button className={styles.previous}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <button className={styles.next}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>

                    <div className={styles.views}>
                        <button className={styles.flex}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>

                        <div className={styles.slice}></div>
                        
                        <button className={styles.grid}>
                            <FontAwesomeIcon icon={faGrip} />
                        </button>
                    </div>
                </div>
                <div className={styles.search}>
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header