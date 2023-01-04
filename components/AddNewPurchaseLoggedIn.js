import React from 'react';
import Link from 'next/link'
import useSWR from 'swr';
import styles from "../styles/Dashboard.module.scss";

// https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
// import fsPromises from 'fs/promises';
import path from 'path'

const fetcher = (url) => fetch(url).then((res) => res.json());


function AddNewPurchaseLoggedIn(props){
    const { data, error } = useSWR('/api/staticData', fetcher);
    if (!data) return <div>Loading...</div>;
    if (error) return <div>Failed to load</div>;
    console.log(data)

    if(props.isLoggedIn){

        return(
            <div id={styles.purchases} className={styles.card}>
            <Link href="addNewPurchase" id={styles.login}>
                Add new purchase
            </Link>
            <div>
                <ul>
                    {/* <li>Language: {data.ledger.quantity}</li> */}
                    <li>Name: {data}</li>
                </ul>
            </div>
{/* 
            {data.map(post => <div key={post.id} style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <h2>{post.ticker}</h2>
            <p>{post.quantity}</p></div>)} */}

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
//    const jsonData = jsonfile.readFile('./backend/stockPurchaseData.json')
//    console.dir(jsonData)
}

export default AddNewPurchaseLoggedIn;

