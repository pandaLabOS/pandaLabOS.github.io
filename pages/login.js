import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import styles from '../components/layout.module.css';

const name = 'AU Digital Academic Remuneration System';

export default function Login() {
    return (
      <div className={utilStyles.heading2XlCenter} >
        <Image
          priority
          src="/logos/ABAC.png"
          className={utilStyles.borderSquare}
          width={238}
          height={234}
          alt={name}
        />
      
        <h1 className={utilStyles.heading2XlCenter}>
          AU Digital Academic Remuneration System
        </h1>

        <div className={styles.loginContainer}>
          <p>
            <a href = "https://www.facebook.com/">
              Sign in with Microsoft
            </a>
          </p>
        </div>
    </div>

    );
  }

Login.getLayout = function getLayout(login) {
  return (login)
}