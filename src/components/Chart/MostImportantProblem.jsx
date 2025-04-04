import React from 'react'
import ReactECharts from "echarts-for-react";
import styles from '../../styles/ChartStyle/TopProblemChart.module.css'
import { LuUserPlus } from "react-icons/lu";
import HBarChartSkeleton from "../Skeleton/Chart/HBarChartSkeleton";

function MostImportantProblem({ chartData, period }) {

    console.log("period:", period)
    if (!chartData || Object.keys(chartData).length === 0) {
        return (
            <div className={styles.container}>
                <div className={styles.title}>
                    <LuUserPlus size={32} />
                    <p>Top 3 ปัญหาโหวตให้ความสำคัญสูง</p>
                </div>
                <HBarChartSkeleton />
            </div>
        );
    }

    let mostChartDataEachPeriod;

    if (period.name === "รายเดือน") {
        mostChartDataEachPeriod = chartData.data_comparison_monthly[0].top_3_voted_problem_m
        console.log("mostChartDataEachPeriod รายเดือน:", mostChartDataEachPeriod)
    }
    else {
        mostChartDataEachPeriod = chartData.top_3_voted_problem
        console.log("mostChartDataEachPeriod รายปี:", mostChartDataEachPeriod)
    }

    const options = {
        textStyle: {
            fontFamily: "Noto Sans Thai, sans-serif",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            top: "3%",
            containLabel: true,
        },
        xAxis: {
            type: "value",
            boundaryGap: [0, 0.1],
        },
        yAxis: {
            type: "category",
            data: mostChartDataEachPeriod.map((item) => item.problem_type).reverse(),
        },
        series: [
            {
                name: period.name,
                type: "bar",
                data: mostChartDataEachPeriod.map((item) => item.count).reverse(),
                barMinWidth: 24, // แท่งจะมีความกว้างอย่างน้อย 20px
                barMaxWidth: 52, // แท่งจะมีความกว้างไม่เกิน 50px
                label: {
                    show: true,
                    formatter: ({ value }) => value.toLocaleString(), // ใส่เครื่องหมาย , ขั้นหลัก
                },
                itemStyle: {
                    color: "#60391F", // สีม่วงอ่อน
                },
            },
        ],
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <LuUserPlus size={32} />
                <p>Top 3 ปัญหาโหวตให้ความสำคัญสูง</p>
            </div>
            <ReactECharts option={options} className={styles.chart} />
        </div>
    )

}

export default MostImportantProblem