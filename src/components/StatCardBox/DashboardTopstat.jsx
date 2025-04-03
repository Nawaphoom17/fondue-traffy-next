'use client'

import React, { useState, useRef, useEffect, forwardRef } from "react";
import AllReportStat from '@/components/StatCard/AllReportStat'
import FinishReportStat from '@/components/StatCard/FinishReportStat'
import FinishTimeStat from '@/components/StatCard/FinishTimeStat'
import InProgressTimeStat from '@/components/StatCard/InProgressTimeStat'
import styles from '@/styles/StatCardBoxStyle/DashboardTopStat.module.css'
import HomePageSkeleton from '@/components/Skeleton/Page/HomePageSkeleton';


function DashboardTopstat({ stats, period }) {
    // const renderCount = useRef(0);
    // renderCount.current += 1;
    // console.log(`✅ DashboardTopStat rendered: ${renderCount.current} ครั้ง`);

    console.log("period:", period)
    if (!stats || Object.keys(stats).length === 0) {
        return <HomePageSkeleton />;
    }

    let statsEachPeriod;

    if (period.name === "รายเดือน") {
        statsEachPeriod = stats.data_comparison_monthly[0]
        console.log("statsEachPeriod:", statsEachPeriod)

        return (
            <div>
                <div className={styles.container}>
                    <AllReportStat data={statsEachPeriod.post_count_all_m} />
                    <FinishReportStat data={statsEachPeriod.post_finish_percentage_m} />
                    <FinishTimeStat data={statsEachPeriod.avg_finish_day_m} />
                    <InProgressTimeStat data={statsEachPeriod.avg_start_hour_m} />
                </div>
            </div>
        )

    }
    else {
        statsEachPeriod = stats
        console.log("statsEachPeriod:", statsEachPeriod)

        return (
            <div>
                <div className={styles.container}>
                    <AllReportStat data={statsEachPeriod.post_count_all} />
                    <FinishReportStat data={statsEachPeriod.post_finish_percentage} />
                    <FinishTimeStat data={statsEachPeriod.avg_finish_day} />
                    <InProgressTimeStat data={statsEachPeriod.avg_start_hour} />
                </div>
            </div>
        )
    }

}

export default DashboardTopstat