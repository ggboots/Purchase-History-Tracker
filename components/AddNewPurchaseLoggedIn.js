import React from 'react';
import Link from 'next/link'
import styles from "../styles/Dashboard.module.scss";



function AddNewPurchaseLoggedIn(props){
    if(props.isLoggedIn){
        const ledger = props.ledger;
        return(
            <div id={styles.purchases} className={styles.card}>
            <Link href="addNewPurchase" id={styles.login}>
                Add new purchase
            </Link>
            {ledger.map(post => <div key={post.id} style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <h2>{post.ticker}</h2>
            <p>{post.quantity}</p></div>)}
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

// import fsPromises from 'fs/promises';
//https://advancedweb.hu/do-not-use-fs-sync-methods-in-javascript-use-fs-promises-instead/
const fsPromises = require('fs/promises');
import path from 'path';
export async function getStaticProps(){
    const filePath = path.join(process.cwd(), 'stockPurchaseData.json');
    const jsonData = await fsPromises.readFile(filePath)
    const objectData = JSON.parse(jsonData)

    return {
        props: objectData
    }
}

export default AddNewPurchaseLoggedIn;