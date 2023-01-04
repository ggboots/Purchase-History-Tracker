import React from 'react';
import Link from 'next/link'
import useSWR from 'swr';
import styles from "../styles/Dashboard.module.scss";

const fetcher = (url) => fetch(url).then((res) => res.json());



function AddNewPurchaseLoggedIn(props){
    const { data, error } = useSWR('/api/staticData', fetcher);
    if (!data) return <div>Loading...</div>;
    if (error) return <div>Failed to load</div>;
    console.log(data.ledger)
    if(props.isLoggedIn){

        return(
            <div id={styles.purchases} className={styles.card}>
            <Link href="addNewPurchase" id={styles.login}>
                Add new purchase
            </Link>
            <div>
            <h1>My Framework from file</h1>
                <ul>
                    <li>Name: {data.ledger}</li>
                    {/* <li>Language: {data.ledger.quantity}</li> */}
                </ul>
            </div>

            {/* {ledger.map(post => <div key={post.id} style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <h2>{post.ticker}</h2>
            <p>{post.quantity}</p></div>)} */}

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
//    const jsonData = jsonfile.readFile('./backend/stockPurchaseData.json')
//    console.dir(jsonData)
}

export default AddNewPurchaseLoggedIn;

