import styles from './Content.module.scss';
import Router from '../Router/Router';
function Content() {
    return (
        <div className={styles.container}>
            <Router />
        </div>
    )
}

export default Content