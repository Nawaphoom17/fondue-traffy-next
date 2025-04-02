'use client'

import React from 'react'
import styles from '../../styles/StatCardStyle/AllReportStat.module.css'
import useCustom from "../../api/customHook";
import { LuCircleCheckBig } from "react-icons/lu";

function FinishReportStat({data}) {
  const [globalState, setGlobalState] = useCustom();

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <LuCircleCheckBig size={24} />
        <p>แก้ไขแล้ว</p>
      </div>
      <p className={styles.data}>{data}%</p>
    </div>
  )
}

export default FinishReportStat