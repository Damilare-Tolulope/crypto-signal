import React from 'react'
import { walletData } from '../../../data'

const ExchangeWalletTable = () => {
  return (
    <table className={styles.table}>
        <thead className={styles.thead}>
            <tr>
                <td>Exchange Wallet</td>
                <td>Coin</td>
                <td>Balance</td>
            </tr>
        </thead>
        <tbody className={styles.tbody}>
            {walletData.map(({balance, coin, wallet}, index) => (
                <tr key={index}>
                    <td>{wallet}</td>
                    <td>{coin}</td>
                    <td>{balance}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

const styles = {
    table: "bg-secondary/20 p-5 rounded-xl wallet-table w-full",
    thead: "text-white/80 text-sm",
    tbody: "text-white",
}

export default ExchangeWalletTable