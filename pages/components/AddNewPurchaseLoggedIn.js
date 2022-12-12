import React from 'react';
import Link from 'next/link'
import styles from "../../styles/Dashboard.module.css";

export default function AddNewPurchaseLoggedIn(props){
    if(props.isLoggedIn){
        return(
            <div id={styles.purchases} className={styles.card}>
            <Link href="addNewPurchase" id={styles.login}>
                Add new purchase
            </Link>
            <h2>Purchase History</h2>
            <div>Buy</div>
            <div>Buy</div>
            <div>Buy</div>
            <button></button>
        </div>
    )
    } else if (!props.isLoggedIn){
        return(
            <div id={styles.purchases} className={styles.card}>
                Please Sign in
            </div>
        )
    }
}