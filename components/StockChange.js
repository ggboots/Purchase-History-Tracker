import React from "react";
import Image from "next/image";

import styles from "../styles/Dashboard.module.scss";

function StockChange(){
    return(

        <div id={styles.stockChange} className={styles.card}>
            <div id={styles.stockChangePrompt}>
                {/* DROP DOWN MENU of stocks in account */}
                <h2>Stock Change &rarr;</h2>
                <Image src='/TeslaLogo.png' alt='Company logo' width='40' height='40'/>
            </div>
        </div>
        
        )
}

export default StockChange