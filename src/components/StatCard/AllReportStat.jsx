'use client'

import React from 'react'
import styles from '../../styles/StatCardStyle/AllReportStat.module.css'
import useCustom from "../../api/customHook";
import { FaRegMessage } from "react-icons/fa6";
import DataSkeleton from '../Skeleton/Stats/DataSkeleton';

function AllReportStat({ data, periodName }) {

    console.log('data1:', data)

    if (periodName === 'รายเดือน') {
        return (
            <div className={styles.container}>
                <div className={styles.label}>
                    <FaRegMessage color="#074EE8" size={24} />
                    <p>เรื่องแจ้งทั้งหมด</p>
                </div>
                {data?.data_comparison_monthly?.[0]
                    ? <p className={styles.data}>{data.data_comparison_monthly[0].post_count_all_m.toLocaleString()}</p>
                    : <DataSkeleton />
                }
            </div>
        )
    }
    else if (periodName === 'รายปี') {
        return (
            <div className={styles.container}>
                <div className={styles.label}>
                    <FaRegMessage color="#074EE8" size={24} />
                    <p>เรื่องแจ้งทั้งหมด</p>
                </div>
                {data?.post_count_all //ถ้าเปลี่ยน default ของ period ก็ต้องเช็ค data.post_count_all ด้วย
                    ? <p className={styles.data}>{data.post_count_all.toLocaleString()}</p>
                    : <DataSkeleton />
                }
            </div>
        )
    }

}

export default AllReportStat