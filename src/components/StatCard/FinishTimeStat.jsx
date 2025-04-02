'use client'

import React from 'react'
import styles from '../../styles/StatCardStyle/AllReportStat.module.css'
import { FaRegCalendarCheck } from "react-icons/fa6";
import useCustom from "../../api/customHook";
import { convertMinutesToDayHourMinute } from "@/utils/timeUtils"

function FinishTimeStat({data}) {
    const [globalState, setGlobalState] = useCustom();

    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <FaRegCalendarCheck size={24} />
                <p>ปกติเสร็จสิ้นใน</p>
            </div>
            <p className={styles.data}>{data} วัน</p>
        </div>
    )
}

export default FinishTimeStat