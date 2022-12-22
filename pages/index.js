import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Script from 'next/script';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.heading2Xl}>
        <p >
          {' '} <span className={utilStyles.greenColor}>Christmas</span> Countdown!
        </p>
      </section>
      <section className={`${utilStyles.countDown} ${utilStyles.headingMd}`}>
        <p>
          There are {' '}<span className={utilStyles.redColor} id='countdown'></span> seconds left until Christmas!
        </p>
      </section>
      <Script id="update-countdown" strategy="lazyOnload">
        {`
            function delay(time) {
              return new Promise(resolve => setTimeout(resolve, time));
            }
            async function updateCountdown() {
              while (true) {
                const currentYear = new Date().getFullYear();
                const christmas = new Date('December 25, ' +  currentYear + ' 00:00:00');
                const now = new Date();
                const secondsLeft = (christmas - now) / 1000;
                document.getElementById('countdown').innerHTML = Math.round(secondsLeft)
                await delay(1000);
              }
            }
            updateCountdown();
        `}
      </Script>
    </Layout>
  );
}
