import React, { useState } from 'react'
import Button from '../../../components/Button'
import GroupMembershipCard from '../../../components/Groups/GroupMembershipCard';
import ViewGroupCard from '../../../components/Groups/ViewGroupCard';
import { groups } from '../../../data';
import { tabs } from '../../../utils/helper'

const SignalGroups = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [currentGroup, setCurrentGroup] = useState(0);

  return (
    <div className={styles.container}>
        <h2 className={styles.heading}>Signal Groups</h2>

        <div className={styles.btnGroup}>
            <div>
                {tabs.map(({key, label}) => (
                    <Button key={key} className={activeTab === key ? "bg-white/5 text-white/80" : "text-white/40 transition linear duration-300 hover:text-white/80"} handleOnClick={() => setActiveTab(key)}>{label}</Button>
                ))}
            </div>
            <Button className="!text-primary">Create New Signal Group</Button>
        </div>

        <div className={styles.groupDetails}>
            <div className={styles.section}>
                <p className={styles.head}>Signal Groups You Belong To</p>
                {groups.map(({name, icon}, index) => (
                    <div key={name} onClick={() => setCurrentGroup(index)} className={styles.group}>
                        <img src={icon} alt={name} />
                        <p>{name}</p>
                    </div>
                ))}
            </div>

            <ViewGroupCard group={groups[currentGroup]} />

            <GroupMembershipCard group={groups[currentGroup]} />

        </div>
    </div>
  )
}

const styles = {
    container: "bg-secondary/20 p-5 rounded-xl",
    heading: "text-white text-lg",
    btnGroup: "flex items-end justify-between my-5",
    groupDetails: "flex items-start justify-between gap-5",
    section: "rounded-xl border border-light w-full",
    head: "text-white px-5 py-5",
    group: "cursor-pointer transition linear duration-300 hover:bg-white/5 flex gap-2 text-white font-bold items-center px-5 py-4 border-t border-light",
    btn: "text-xs text-primary border-2 border-primary mt-5",
}

export default SignalGroups