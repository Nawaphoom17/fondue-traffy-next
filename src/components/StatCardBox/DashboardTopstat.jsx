'use client'

import React, { useState, useRef, useEffect, forwardRef } from "react";
import AllReportStat from '@/components/StatCard/AllReportStat'
import FinishReportStat from '@/components/StatCard/FinishReportStat'
import FinishTimeStat from '@/components/StatCard/FinishTimeStat'
import InProgressTimeStat from '@/components/StatCard/InProgressTimeStat'
import styles from '@/styles/StatCardBoxStyle/DashboardTopStat.module.css'
import HomePageSkeleton from '@/components/Skeleton/Page/HomePageSkeleton';
import StatsSkeleton from "../Skeleton/Stats/StatsCardSkeleton";


function DashboardTopstat({ stats, period }) {
    // const renderCount = useRef(0);
    // renderCount.current += 1;
    // console.log(`✅ DashboardTopStat rendered: ${renderCount.current} ครั้ง`);

    // console.log("period:", period)
    // if (!stats || Object.keys(stats).length === 0) {
    //     return <HomePageSkeleton />;
    // }

    // let statsEachPeriod;

    // if (period.name === "รายเดือน") {
        // statsEachPeriod = stats.data_comparison_monthly[0]
        // console.log("statsEachPeriod:", statsEachPeriod)

        return (
            <div>
                <div className={styles.container}>
                    <AllReportStat data={stats} periodName={period.name} />
                    <FinishReportStat data={stats} periodName={period.name} />
                    <FinishTimeStat data={stats} periodName={period.name} />
                    <InProgressTimeStat data={stats} periodName={period.name} />
                    {/* {stats?.data_comparison_monthly?.[0]
                        ? <AllReportStat data={stats.data_comparison_monthly[0].post_count_all_m} />
                        : <StatsSkeleton />
                    }
                    {stats?.data_comparison_monthly?.[0]
                        ? <FinishReportStat data={stats.data_comparison_monthly[0].post_finish_percentage_m} />
                        : <StatsSkeleton />
                    }
                    {stats?.data_comparison_monthly?.[0]
                        ? <FinishTimeStat data={stats.data_comparison_monthly[0].avg_finish_day_m} />
                        : <StatsSkeleton />
                    }
                    {stats?.data_comparison_monthly?.[0]
                        ? <InProgressTimeStat data={stats.data_comparison_monthly[0].avg_start_hour_m} />
                        : <StatsSkeleton />
                    } */}
                    {/* <AllReportStat data={stats.data_comparison_monthly[0].post_count_all_m} />
                    <FinishReportStat data={stats.data_comparison_monthly[0].post_finish_percentage_m} />
                    <FinishTimeStat data={stats.data_comparison_monthly[0].avg_finish_day_m} />
                    <InProgressTimeStat data={stats.data_comparison_monthly[0].avg_start_hour_m} /> */}
                </div>
            </div>
        )

    // }
    // else {
    //     // statsEachPeriod = stats
    //     // console.log("statsEachPeriod:", statsEachPeriod)

    //     return (
    //         <div>
    //             <div className={styles.container}>
    //                 {/* <AllReportStat data={stats.post_count_all} />
    //                 <FinishReportStat data={stats.post_finish_percentage} />
    //                 <FinishTimeStat data={stats.avg_finish_day} />
    //                 <InProgressTimeStat data={stats.avg_start_hour} /> */}
    //             </div>
    //         </div>
    //     )
    // }

}

export default DashboardTopstat