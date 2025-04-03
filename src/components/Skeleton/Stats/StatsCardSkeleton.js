import React from 'react'
import styles from '@/styles/SkeletonStyle/Stats/StatsSkeleton.module.css'

function StatsSkeleton() {
  return (
    <div className={styles.container}>
        <div className={styles.lebel}>
            <div className={styles.icon}></div>
            <div className={styles.lebel_text}></div>
        </div>
        <div className={styles.data}></div>
    </div>
  )
}

export default StatsSkeleton