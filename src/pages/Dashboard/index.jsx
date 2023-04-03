import React from 'react'
import ExchangeWalletTable from './components/ExchangeWalletTable'
import MyWallet from './components/MyWallet'
import SignalGroups from './components/SignalGroups'

const Dashboard = () => {
  return (
    <div>
      <div className='flex gap-5 mb-5'>
        <MyWallet />
        <ExchangeWalletTable />
      </div>
      <SignalGroups />
    </div>
  )
}

export default Dashboard