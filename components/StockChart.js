import React from 'react';
import { Chart } from "react-google-charts";


import Head from "next/head"
import Link from "next/link"

import styles from "../styles/Dashboard.module.scss";

function StockChart(){
    return(

        <div id={styles.chart} className={styles.gridChart}>
            <h2 className={styles.cardChart}>Chart</h2>
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
          </div>
    )
}

export default StockChart;