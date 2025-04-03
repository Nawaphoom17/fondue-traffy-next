import React from 'react';
import styles from '@/styles/SkeletonStyle/Page/HomePageSkeleton.module.css'

// Skeleton สำหรับหน้าแรก (Home Page)
export default function HomePageSkeleton() {
    return (
        <div className={styles.skeleton} style={{ width: 200, height: 20 }}></div>
    );
}