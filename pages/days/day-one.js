import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { motion } from 'framer-motion';
import { Unbounded } from '@next/font/google'
const unbounded = Unbounded({
    weight: '900',
    subsets: ['latin'],
})


export default function DayOne() {
    return (
    <Layout>
        <Head>
        <title>Day One</title>
        </Head>
        <h1 className= {`${utilStyles.headingLg} ${unbounded.className}`}>{' '}<span className = {utilStyles.greenColor}>CHRISTMAS</span> {' '} <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">CHRISTMAS</Link></h1>
        <Link href="/">Click me to go back!</Link>
    </Layout>
    )
}