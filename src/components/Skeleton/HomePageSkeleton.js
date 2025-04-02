import React from 'react';

// Skeleton สำหรับหน้าแรก (Home Page)
export default function HomePageSkeleton() {
  return (
    <div style={styles.container}>
      {/* Header Skeleton */}
      <div style={styles.headerSkeleton}>
        <div style={styles.skeletonLine(60, 40)} />
        <div style={styles.skeletonLine(80, 20, 10)} />
      </div>

      {/* Content Skeleton: สมมุติแสดง Card หรือ Column */}
      <div style={styles.cardContainer}>
        <div style={styles.cardSkeleton} />
        <div style={styles.cardSkeleton} />
        <div style={styles.cardSkeleton} />
      </div>
    </div>
  );
}