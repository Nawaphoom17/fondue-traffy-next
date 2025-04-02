import React from 'react';

// Skeleton สำหรับหน้าเปรียบเทียบ (Compare Page)
export default function ComparePageSkeleton() {
    return (
      <div style={styles.container}>
        {/* Header Skeleton */}
        <div style={styles.headerSkeleton}>
          <div style={styles.skeletonLine(50, 40)} />
        </div>
  
        {/* Compare Table Skeleton: แสดงสองคอลัมน์ */}
        <div style={styles.compareContainer}>
          <div style={styles.compareColumnSkeleton} />
          <div style={styles.compareColumnSkeleton} />
        </div>
      </div>
    );
  }