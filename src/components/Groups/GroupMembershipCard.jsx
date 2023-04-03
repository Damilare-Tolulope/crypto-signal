import React from 'react'
import Button from '../Button'

const GroupMembershipCard = ({ group }) => {
  return (
    <div className={styles.section}>
        <div className='p-5'>
            <h2 className={styles.head}>Memberships</h2>
            <Button className={styles.btn}>Invite Members</Button>

            <div className={styles.memConn}>
                <div>
                    <p className={styles.miniHead}>Members</p>
                    <p className={styles.value}>{group.members}</p>
                </div>
                <div>
                    <p className={styles.miniHead}>Connection Request</p>
                    <p className={styles.value}>{group.connRequest}</p>
                </div>
            </div>
        </div>

        <div>
            <h2 className={styles.emailHeading}>Active Member Emails</h2>
            {group.activeMemberEmails.map(email => <p key={email} className={styles.email}>{email}</p>)}
        </div>
    </div>
  )
}

const styles = {
    section: "text-white rounded-xl border border-light w-full",
    head: "text-white",
    btn: "text-xs text-primary border-2 border-primary mt-5",
    memConn: "flex items-center justify-between",
    miniHead: "text-white/80 text-sm mt-5",
    value: "font-bold text-2xl py-2",
    emailHeading: "px-5 pb-3",
    email: "px-5 py-4 border-t border-light text-white/80 text-sm",
}

export default GroupMembershipCard