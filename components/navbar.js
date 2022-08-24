import Link from 'next/link';
import styles from '../styles/navbar.module.css'
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';


const Navbar = () => {
    return (
        <div className={styles.nav}>
            
            <div className={styles.logo}>
                <Image
                    priority
                    src = "/logos/ABAC_FullCircle.png"
                    width={54}
                    height={55}
                    alt={"AU Logo"}
                />
                <h1>AU-DARS</h1>

            </div>

            <links className={styles.buttons}>
                <Link href = "/dean/home">
                    <a className={styles.buttonText_selected}>
                        Lecturer
                    </a>
                </Link>

                <Link href = "/dean/history">
                    <a className={styles.buttonText_default}>
                        History
                    </a>
                </Link>
            </links>

            <profile className={styles.profile}>
                <h1>SC</h1>
            </profile>
        </div>
    );
}

export default Navbar;