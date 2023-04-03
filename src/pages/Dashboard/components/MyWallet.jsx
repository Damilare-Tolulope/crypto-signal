import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const MyWallet = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 150, 200, 50, 150],
        backgroundColor: ['#FF8B00', '#0019F8', '#D00BF0', '#FFFFFF', '#00B6FF'],
        hoverBackgroundColor: ['#FF8B00', '#0019F8', '#D00BF0', '#FFFFFF', '#00B6FF'],
        borderWidth: 0,
        cutout: '90%',
      },
    ]
  }
  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
      position: "right"
    },
  }
  
  return (
    <div className={styles.container}>
        <h2 className={styles.heading}>My Wallet</h2>

        <div className='relative text-center'>
          <div className='absolute text-white top-1/3 left-1/3'>
            <p className='text-3xl'>$5000</p>
            <p className='text-xs'>Total balance</p>
          </div>
          <Doughnut data={data} options={options} />
        </div>

    </div>
  )
}

const styles = {
  container: "w-1/2 bg-secondary/20 p-5 rounded-xl",
  heading: "text-white text-lg",
}

export default MyWallet