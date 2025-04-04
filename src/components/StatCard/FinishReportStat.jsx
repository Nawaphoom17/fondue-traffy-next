'use client'

import React from 'react'
import styles from '../../styles/StatCardStyle/AllReportStat.module.css'
import useCustom from "../../api/customHook";
import { LuCircleCheckBig } from "react-icons/lu";
import DataSkeleton from '../Skeleton/Stats/DataSkeleton';

function FinishReportStat({ data, periodName }) {
    // const [globalState, setGlobalState] = useCustom();

    if (periodName === 'รายเดือน') {
        return (
            <div className={styles.container}>
                <div className={styles.label}>
                    <LuCircleCheckBig color="#34C759" size={24} />
                    <p>แก้ไขแล้ว</p>
                </div>
                {data?.data_comparison_monthly?.[0] 
                    ? <p className={styles.data}>{data.data_comparison_monthly[0].post_finish_percentage_m.toLocaleString()}%</p>
                    : <DataSkeleton />
                }
            </div>
        )
    }
    else if (periodName === 'รายปี') {
        return (
            <div className={styles.container}>
                <div className={styles.label}>
                    <LuCircleCheckBig color="#34C759" size={24} />
                    <p>แก้ไขแล้ว</p>
                </div>
                {data?.post_finish_percentage //ถ้าเปลี่ยน default ของ period ก็ต้องเช็ค data. ด้วย
                    ? <p className={styles.data}>{data.post_finish_percentage.toLocaleString()}%</p>
                    : <DataSkeleton />
                }
            </div>
        )
    }

    // return (
    //     <div className={styles.container}>
    //         <div className={styles.label}>
    //             <LuCircleCheckBig size={24} />
    //             <p>แก้ไขแล้ว</p>
    //         </div>
    //         <p className={styles.data}>{data}%</p>
    //     </div>
    // )
}

export default FinishReportStat