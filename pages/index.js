import { Chart } from "react-google-charts";
import React, { useState, useEffect } from "react";
import data from "../backend/fromDatabase"

import Head from "next/head";
import Link from "next/link";

import AddNewPurchaseLoggedIn from '../components/AddNewPurchaseLoggedIn'
import StockChart from "../components/StockChart";

import styles from "../styles/Dashboard.module.scss";


export default function Dashboard() {
  // on default, useState will set as login, when components render only
  const [loginTitle, setLoginTitle] = useState("login");
  let loginUsername = data.username || 'login'
    // take data from json OR if empty set as 

    function fullScreenMode(){
      // css module
    }

    async function GetStaticProps(){
      const res = await fetch('http://localhost:300/api/')
      console.log(res.json)
    }

    const getPurchaseHistory = async () => {
        try {
          const res = await fetch(
            `/pages/api/hello.js`
          );
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }
    

  return (
    <div>
      <Head>
        <title>Stock Purchase Tracker</title>
        <meta
          name="description"
          content="Web App for Tracking Stock Purchases"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        <a>Stock Purchase App</a>
        <Link href="login" passHref id={styles.login} >
          {loginUsername}
        </Link>
      </h1>

      <div className={styles.container}>
        <main id={styles.main}>
          <div id={styles.banner} className={styles.grid}>
            <h2 className={styles.card}>Banner stock information</h2>
          </div>

          <div id={styles.stockChange} className={styles.card}>
            <h2>Stock Change &rarr;</h2>
          </div>
          <StockChart />
          {/* <div id={styles.chart} className={styles.gridChart}>
            <h2 className={styles.cardChart}>Chart</h2>
            <button onClick={getPurchaseHistory}>Click for Fullscreen</button>
            <div>
              <Chart
                chartType="ScatterChart"
                data={[
                  ["StockPrice", "$TSLA"],
                  [30, 42],
                  [360, 360],
                ]}
                width="100%"
                height="500px"
                legendToggle
              />
            </div>
          </div> */}
{/* conditional rendering */}

          <AddNewPurchaseLoggedIn isLoggedIn={true}/>

          <div id={styles.chartController} className={styles.card}>
            <h2>Controller</h2>
          </div>
        </main>

        <footer className={styles.footer}>
          {/* <Image src="" alt="Vercel Logo" width={0} height={0} /> */}
        </footer>
      </div>
    </div>
  );
}
