import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

const FormState = {
  IDLE: 'IDLE',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export default function Home() {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState(FormState.IDLE);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      setFormState(FormState.SUCCESS);
      setEmail(''); // Reset the email field
    } catch (error) {
      setFormState(FormState.ERROR);
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Subscribe to Our Newsletter</title>
        <meta name="description" content="Stay updated with our latest news!" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Subscribe to Our Newsletter</h1>
        <p>Stay updated with our latest news and updates!</p>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
          name="subscribe"
          method="POST"
          netlify
        >
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>

        {/* Conditional Rendering of Messages */}
        {formState === FormState.SUCCESS && (
          <p className={styles.successMessage}>
            Thank you for subscribing to our newsletter!
          </p>
        )}
        {formState === FormState.ERROR && (
          <p className={styles.errorMessage}>
            Oops! Something went wrong. Please try again later.
          </p>
        )}
      </main>
    </div>
  );
}
