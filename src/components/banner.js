import Link from 'next/link';
import styles from '../app/styles/Banner.module.css';

export default function Banner() {
    return ( 
        <div className={styles.mainHeader}>
            <Link href="https://passage.id/" ><div className={styles.passageLogo}></div></Link>
            <div className={styles.headerText}>Biometric Signin</div>
            <div className={styles.spacer}></div>
            <Link href="https://passage.id/" className="{styles.link} list-none" >Signin</Link>
        </div>
    );
}