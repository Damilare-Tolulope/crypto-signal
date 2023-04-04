import React from 'react'
import Button from '../Button'

const ViewGroupCard = ({ group }) => {
  return (
    <div className={styles.section}>
        <div className={styles.head}>
            <div className=''>
              <div className={styles.groupDetail}>
                  <img src={group.icon} alt={group.name} />
                  <p>{group.name}</p>
              </div>
              <p className={styles.groupType}>{group.type} Group</p>
            </div>
            <Button className="text-primary text-xs !px-0">Edit Signal Group</Button>
        </div>
        <div>
            <p className={styles.allocationHead}>Minimun Allocation</p>
            <p className={styles.allocationValue}>{group.minAllocation}</p>
        </div>
        <div>
            <p className={styles.allocationHead}>Maximun Allocation</p>
            <p className={styles.allocationValue}>{group.maxAllocation}</p>
        </div>
        <p className={styles.subscription}>Subscription <span className='text-primary'>{group.subscription}</span></p>
        <div>
            <p>Total Revenue Generated</p>
            <div className={styles.revenue}>
                <p className={styles.revenueMonth}>This Month</p>
                <p className={styles.revenueValue}>{group.monthlyRevenue}</p>
            </div>
        </div>
        <Button className={styles.btn}>View Signal Group</Button>
    </div>
  )
}

const styles = {
  section: "rounded-xl border border-light w-full p-5 text-white",
  head: "flex items-center justify-between",
  groupDetail: "flex gap-2 items-center",
  groupType: "text-xs text-white/80 mt-1",
  group: "cursor-pointer transition linear duration-300 hover:bg-white/5 flex gap-2 text-white font-bold items-center px-5 py-3 border-t border-light",
  btn: "text-xs text-primary border border-primary mt-5",
  allocationHead: " mt-5 text-white/60",
  allocationValue: "text-2xl font-bold",
  subscription: "my-5",
  revenueHead: "",
  revenue: "flex items-center justify-between my-5",
  revenueMonth: "text-sm text-white/80",
  revenueValue: "text-2xl font-bold",
}

export default ViewGroupCard