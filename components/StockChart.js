import React from 'react';
import { Chart } from "react-google-charts";

import styles from "../styles/Dashboard.module.scss";


export const data = [
    ["Timeframe", "Sales"],
    ["20-02-2020", 1000],
    ["21-02-2020", 1170],
    ["22-02-2020", 660],
    ["23-02-2020", 1230],
    ["24-02-2020", 1830],
    ["25-02-2020", 730],
    ["26-02-2020", 830],
  ];
  
  export const options = {
    title: "tesla",
    // title: "Company Performance",
    hAxis: { title: "Weekly", titleTextStyle: { color: "#333" } },
    vAxis: { title: "price", minValue: 0 },
    chartArea: { width: "70%", height: "70%" },
  };


function StockChart(){
    return(

        <div id={styles.chart} className={styles.gridChart}>
            <h2 className={styles.cardChart}>Chart</h2>
            <div>
                {/* Annotation Chart - React element */}
              <Chart
                chartType="AreaChart"
                data={data}
                options={options}
                //     [
                //     ["StockPrice", "$TSLA"],
                //     [30, 42],
                //     [360, 360],
                // ]
                width="100%"
                height="500px"
                legendToggle
                />
            </div>
          </div>
    )
}

export default StockChart;