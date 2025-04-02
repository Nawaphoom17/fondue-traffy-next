'use client'

import React from 'react'
import styles from '../../styles/StatCardStyle/AllReportStat.module.css'
import { GrDocumentTime } from "react-icons/gr";
import useCustom from "../../api/customHook";
import { convertMinutesToDayHourMinute } from "@/utils/timeUtils"


function InprogressTimeStat({data}) {
    const [globalState, setGlobalState] = useCustom();

    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <GrDocumentTime size={24} />
                <p>ปกติรับเรื่องใน</p>
            </div>
            <p className={styles.data}>{data} ชั่วโมง</p>
        </div>
    )
}

export default InprogressTimeStat