import React from 'react'
import styles from '@/styles/SkeletonStyle/Column/CompareColumnSkeleton.module.css'

function CompareColumnSkeleton() {
    return (
        <div className={styles.column_container}>
            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <div className={styles.icon}></div>
                    <div className={styles.number}></div>
                </div>
                <div className={styles.detail}></div>
            </div>
            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <div className={styles.icon}></div>
                    <div className={styles.number}></div>
                </div>
                <div className={styles.detail}></div>
            </div>
            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <div className={styles.icon}></div>
                    <div className={styles.number}></div>
                </div>
                <div className={styles.detail}></div>
            </div>
            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <div className={styles.icon}></div>
                    <div className={styles.number}></div>
                </div>
                <div className={styles.detail}></div>
            </div>
        </div>
    )
}

export default CompareColumnSkeleton