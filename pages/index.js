import Head from 'next/head'
// import Image from 'next/image'
// nextjs - put content in header/ image from public
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Stock Purchase Tracker</title>
        <meta name="description" content="Web App for Tracking Stock Purchases" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title}>
            <a>Stock Purchase App</a>
            {/* <div>Login</div> */}
            <a href="/login"id={styles.login}>Icon</a>
        </h1>

    <div className={styles.container}>
      <main className={styles.main}>
        <div id={styles.banner} className={styles.grid}> 
          <h2 className={styles.card}>Banner stock information</h2>
        </div>

        <div id={styles.stockChange} className={styles.card}>
            <h2>Stock Change &rarr;</h2>
            {/* <Image src="" alt="Vercel Logo" width={0} height={0} /> */}
        </div>

        <div id={styles.chart} className={styles.gridChart}>
            <h2 className={styles.cardChart}>Chart</h2>
        </div>

        <div id={styles.purchases} className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>

          <div id={styles.chartController} className={styles.card}>
            <h2>Controller</h2>
          </div>
        
        </main>

      <footer className={styles.footer}>
            {/* <Image src="" alt="Vercel Logo" width={0} height={0} /> */}
      </footer>
    </div>
    </div>
  )
}
