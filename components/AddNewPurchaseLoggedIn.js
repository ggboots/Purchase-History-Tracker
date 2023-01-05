import React from 'react';
import Link from 'next/link'
// import useSWR from 'swr';
import styles from "../styles/Dashboard.module.scss";

import fsPromises from 'fs/promises';
import path from 'path'

// const fetcher = (url) => fetch(url).then((res) => res.json());


function AddNewPurchaseLoggedIn(props){
    // const { data, error } = useSWR('/api/staticData', fetcher);
    // if (!data) return <div>Loading...</div>;
    // if (error) return <div>Failed to load</div>;

    const ledger = props.ledger
    console.log(ledger)
    // if(props.isLoggedIn){
        
        return(
            <div id={styles.purchases} className={styles.card}>
            <Link href="addNewPurchase" id={styles.login}>
                Add new purchase
            </Link>
            {/* {ledger.map(ledg =>  */}
            {/* <div key={ledg.id}> */}
                {/* <ul> */}
                    {/* <li>Language: {data.ledger.quantity}</li> */}
                    {/* <li>Name: {data}</li> */}
                {/* </ul> */}
            {/* </div> */}
            {/* )} */}

            <form action="api/purchaseHistoryAPI" method="post">
                <button type="submit">History</button>
            </form>
        </div>
        
    )
    // } else if (!props.isLoggedIn){
    //     return(
    //         <div id={styles.purchases} className={styles.card}>
    //             Please Sign in
    //         </div>
    //     )
    // }
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data.json')
    const jsonData = await fsPromises.readFile(filePath)
    const objectData = JSON.parse(jsonData).stringify()

    return {
        props: objectData
    }
//    const jsonData = jsonfile.readFile('./backend/stockPurchaseData.json')
//    console.dir(jsonData)
}

export default AddNewPurchaseLoggedIn;

