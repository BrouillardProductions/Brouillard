import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function ThankYou() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thank You!</title>
        <meta name="description" content="Thank you for subscribing!" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Thank You!</h1>
        <p>You have successfully subscribed to our newsletter.</p>
      </main>
    </div>
  );
}
