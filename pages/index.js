import { Chart } from "react-google-charts";
import React, { useState, useEffect } from "react";
import data from "../backend/fromDatabase"

import Head from "next/head";
import Link from "next/link";

import AddNewPurchaseLoggedIn from '../components/AddNewPurchaseLoggedIn'
import StockChart from "../components/StockChart";
import StockChange from "../components/StockChange";

import styles from "../styles/Dashboard.module.scss";
// MUI elements \/
import Button from '@mui/material/Button';
import { FormControl, MenuItem, InputLabel, Select  } from "@mui/material";




export default function Dashboard() {
  // on default, useState will set as login, when components render only
  const [loginTitle, setLoginTitle] = useState("login");
  let loginUsername = data.username || 'login'

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
            <h2 className={styles.card}>
              Banner stock information 
            </h2>
          </div>

          <div id={styles.stockChange} className={styles.card}>
            {/* <h2>Stock Change &rarr;</h2> */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Change Purchase Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
              <MenuItem value={10}>TSLA</MenuItem>
              <MenuItem value={20}>AAPL</MenuItem>
              <MenuItem value={30}>Purchases</MenuItem>
            </Select>
          </FormControl>
          </div>
          <StockChart />
          {/* <StockChange /> */}
          <AddNewPurchaseLoggedIn/>

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
