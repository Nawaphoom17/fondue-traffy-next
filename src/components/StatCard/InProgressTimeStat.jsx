'use client'

import React from 'react'
import styles from '../../styles/StatCardStyle/AllReportStat.module.css'
import { GrDocumentTime } from "react-icons/gr";
import useCustom from "../../api/customHook";
import { convertMinutesToDayHourMinute } from "@/utils/timeUtils"
import DataSkeleton from '../Skeleton/Stats/DataSkeleton';


function InprogressTimeStat({ data, periodName }) {
    // const [globalState, setGlobalState] = useCustom();

    if (periodName === 'รายเดือน') {
        return (
            <div className={styles.container}>
                <div className={styles.label}>
                    <GrDocumentTime color="#FF3B30" size={24} />
                    <p>ปกติรับเรื่องใน</p>
                </div>
                {data?.data_comparison_monthly?.[0] 
                    ? <p className={styles.data}>{data.data_comparison_monthly[0].avg_start_hour_m.toLocaleString()} ชั่วโมง</p>
                    : <DataSkeleton />
                }
            </div>
        )
    }
    else if (periodName === 'รายปี') {
        return (
            <div className={styles.container}>
                <div className={styles.label}>
                    <GrDocumentTime color="#FF3B30" size={24} />
                    <p>ปกติรับเรื่องใน</p>
                </div>
                {data?.avg_start_hour //ถ้าเปลี่ยน default ของ period ก็ต้องเช็ค data. ด้วย
                    ? <p className={styles.data}>{data.avg_start_hour.toLocaleString()} ชั่วโมง</p>
                    : <DataSkeleton />
                }
            </div>
        )
    }

    // return (
    //     <div className={styles.container}>
    //         <div className={styles.label}>
    //             <GrDocumentTime size={24} />
    //             <p>ปกติรับเรื่องใน</p>
    //         </div>
    //         <p className={styles.data}>{data} ชั่วโมง</p>
    //     </div>
    // )
}

export default InprogressTimeStat