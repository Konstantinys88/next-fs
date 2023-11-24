import { useContext } from 'react';
import styles from './page.module.scss';
import { ThemeContext } from '../context/ThemeContext';


const ThemeModTogle = () => {

    const { modeToggle, mode } = useContext(ThemeContext)

    return (
        <div className={styles.container} onClick={modeToggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div className={styles.ball} style={mode === 'light' ? { left: '2px' } : { right: '2px' }}></div>
        </div>
    )
}

export default ThemeModTogle