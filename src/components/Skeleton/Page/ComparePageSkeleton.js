import React from 'react';
import styles from '@/styles/SkeletonStyle/Page/ComparePageSkeleton.module.css'
import CompareColumnSkeleton from '@/components/Skeleton/Column/CompareColumnSkeleton'

// Skeleton สำหรับหน้าเปรียบเทียบ (Compare Page)
export default function ComparePageSkeleton() {
    return (
        <div className=''>
            {/* Section: ประสิทธิภาพ */}
            <CompareColumnSkeleton />
            <CompareColumnSkeleton />
        </div>
    );
}