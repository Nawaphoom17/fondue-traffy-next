'use client'

import React from 'react'
import styles from '../../styles/StatCardStyle/AllReportStat.module.css'
import useCustom from "../../api/customHook";
import { FaRegMessage } from "react-icons/fa6";

function AllReportStat({data}) {
    const [globalState, setGlobalState] = useCustom();

    console.log('data1:', data)

    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <FaRegMessage size={24} />
                <p>เรื่องแจ้งทั้งหมด</p>
            </div>
            <p className={styles.data}>{data.toLocaleString()}</p>
        </div>
    )
}

export default AllReportStat