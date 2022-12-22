import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const siteTitle = 'Merry Christmas!';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}>
        {children}
      </motion.div>
    </div>
  );
}
