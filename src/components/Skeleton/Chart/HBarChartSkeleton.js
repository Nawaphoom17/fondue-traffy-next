import React from 'react'
import styles from '../../../styles/SkeletonStyle/Chart/HbarChartSkeleton.module.css'

function HBarChartSkeleton() {
  return (
    <div className={styles.skeleton_container}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
    </div>
  )
}

export default HBarChartSkeleton