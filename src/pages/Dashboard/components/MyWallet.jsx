import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
import { wallet, data, options } from '../../../utils/helper';
Chart.register(ArcElement);

const MyWallet = () => {
  
  return (
    <div className={styles.container}>
        <h2 className={styles.heading}>My Wallet</h2>
        
        <div className={styles.chartContainer}>
          <div className={styles.details}>
            {wallet.map(({coin, color, percentage}) => (
              <div key={coin} className={styles.detail}>
                <div style={{backgroundColor: color}} className={`w-3 h-3 rounded-full`}></div>
                <p>{coin} <span className='text-white/60'>{percentage}</span></p>
              </div>
            ))}
            </div>

          <div className={styles.chart}>
            <div className={styles.text}>
              <p className='text-3xl'>$5000</p>
              <p className='text-xs'>Total balance</p>
            </div>
            <Doughnut data={data} options={options} />
          </div>
        </div>

    </div>
  )
}

const styles = {
  container: "w-1/2 bg-secondary/20 p-5 rounded-xl",
  heading: "text-white text-lg",
  chartContainer: "flex justify-between items-end",
  details: "text-white text-xs w-1/2",
  detail: "flex items-start gap-2 mb-2",
  chart: 'relative text-center w-1/2',
  text: "absolute text-white top-1/3 left-1/4",
}

export default MyWallet