import React from 'react';
import Link from 'next/link'
import styles from "../styles/Dashboard.module.scss";

function AddNewPurchaseLoggedIn(props, {ledgers}){
    if(props.isLoggedIn){
        return(
            <div id={styles.purchases} className={styles.card}>
            <Link href="addNewPurchase" id={styles.login}>
                Add new purchase
            </Link>
            <h2>Purchase History</h2>
            <div>{ledgers}</div>
            <div>Buy</div>
            <div>Buy</div>
            <button></button>
            <form action="api/purchaseHistoryAPI" method="post">
                <button type="submit">History</button>
            </form>
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

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const ledger = await res.json()
    console.log(ledger)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      ledgers:ledger,
    },
  }
}

export default AddNewPurchaseLoggedIn;