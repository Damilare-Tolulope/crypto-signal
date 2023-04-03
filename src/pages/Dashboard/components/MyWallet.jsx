import React from 'react'
import { Chart } from 'react-google-charts'

const MyWallet = () => {
  const data = [
    ["Wallet", "Rate"],
    ["BTC 36.77%", 15],
    ["USDT 36.77%", 14],
    ["Others 36.77%", 13],
    ["BNB 36.77%", 8],
  ];
  
  const options = {
    pieHole: 0.9,
    is3D: false,
    backgroundColor: "transparent",
    color: "white"
  };
  return (
    <div className={styles.container}>
        <h2 className={styles.heading}>My Wallet</h2>

        <div>
        <Chart
          chartType="PieChart"
          width="100%"
          height="150px"
          data={data}
          options={options}
        />
        </div>

    </div>
  )
}

const styles = {
  container: "w-1/2 bg-secondary/20 p-5 rounded-xl",
  heading: "text-white text-lg",
}

export default MyWallet