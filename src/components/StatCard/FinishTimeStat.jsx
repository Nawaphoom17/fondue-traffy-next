'use client'

import React from 'react'
import styles from '../../styles/StatCardStyle/AllReportStat.module.css'
import { FaRegCalendarCheck } from "react-icons/fa6";
import useCustom from "../../api/customHook";
import { convertMinutesToDayHourMinute } from "@/utils/timeUtils"
import DataSkeleton from '../Skeleton/Stats/DataSkeleton';

function FinishTimeStat({ data, periodName }) {
    // const [globalState, setGlobalState] = useCustom();

    if (periodName === 'รายเดือน') {
        return (
            <div className={styles.container}>
                <div className={styles.label}>
                    <FaRegCalendarCheck color="#FFCC00" size={24} />
                    <p>ปกติเสร็จสิ้นใน</p>
                </div>
                {data?.data_comparison_monthly?.[0] 
                    ? <p className={styles.data}>{data.data_comparison_monthly[0].avg_finish_day_m.toLocaleString()} วัน</p>
                    : <DataSkeleton />
                }
            </div>
        )
    }
    else if (periodName === 'รายปี') {
        return (
            <div className={styles.container}>
                <div className={styles.label}>
                    <FaRegCalendarCheck color="#FFCC00" size={24} />
                    <p>ปกติเสร็จสิ้นใน</p>
                </div>
                {data?.avg_finish_day //ถ้าเปลี่ยน default ของ period ก็ต้องเช็ค data. ด้วย
                    ? <p className={styles.data}>{data.avg_finish_day.toLocaleString()} วัน</p>
                    : <DataSkeleton />
                }
            </div>
        )
    }

    // return (
    //     <div className={styles.container}>
    //         <div className={styles.label}>
    //             <FaRegCalendarCheck size={24} />
    //             <p>ปกติเสร็จสิ้นใน</p>
    //         </div>
    //         <p className={styles.data}>{data} วัน</p>
    //     </div>
    // )
}

export default FinishTimeStat