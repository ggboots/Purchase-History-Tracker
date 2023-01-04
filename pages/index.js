import { Chart } from "react-google-charts";
import React, { useState, useEffect } from "react";
import data from "../backend/fromDatabase"

import Head from "next/head";
import Link from "next/link";

import AddNewPurchaseLoggedIn from '../components/AddNewPurchaseLoggedIn'
import StockChart from "../components/StockChart";
import StockChange from "../components/StockChange";

import styles from "../styles/Dashboard.module.scss";



export default function Dashboard() {
  // on default, useState will set as login, when components render only
  const [loginTitle, setLoginTitle] = useState("login");
  let loginUsername = data.username || 'login'

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
    
// conditional rendering / if(loggedIn = true => return ())
  return (
    <div>
      <Head>
        <title>Purchase History Tracker</title>
        <meta
          name="description"
          content="Web App for Tracking Stock Purchases"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        <a>Purchase History Tracker</a>
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
          <StockChange />
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
