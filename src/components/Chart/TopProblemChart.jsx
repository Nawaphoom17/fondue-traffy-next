import React, { useState, useRef, useEffect, forwardRef } from "react";
import ReactECharts from "echarts-for-react";
import styles from '../../styles/ChartStyle/TopProblemChart.module.css'
import { LuCircleArrowUp } from "react-icons/lu"
import thaiFontTheme from "@/utils/themeChart";

function TopProblemChart({ chartData, period }) {

    console.log("period:", period)
    if (!chartData || Object.keys(chartData).length === 0) {
        return <p>Loading...</p>;
    }

    let topChartDataEachPeriod;

    if (period.name === "รายเดือน") {
        topChartDataEachPeriod = chartData.data_comparison_monthly[0].top_3_posted_problem_m
        console.log("topChartDataEachPeriod รายเดือน:", topChartDataEachPeriod)
    }
    else {
        topChartDataEachPeriod = chartData.top_3_posted_problem
        console.log("topChartDataEachPeriod รายปี:", topChartDataEachPeriod)
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
            valueFormatter: (value) => `${value}%`,
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
            data: topChartDataEachPeriod.map((item) => item.problem_type).reverse(), // ใช้ category จาก API

        },
        series: [
            {
                name: period.name,
                type: "bar",
                data: topChartDataEachPeriod.map((item) => item.percentage).reverse(),
                barWidth: 50,
                label: {
                    show: true,
                    formatter: "{c}%", // {c} หมายถึงค่าของ data
                },
                itemStyle: {
                    color: "#60391F", // สีม่วงอ่อน
                },
            },
        ],
    };

    // const renderCount = useRef(0);
    // renderCount.current += 1;
    // console.log(`+++ TopProblem rendered: ${renderCount.current} ครั้ง`);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <LuCircleArrowUp size={32} />
                <p>Top 3 ปัญหาพบบ่อย (%)</p>
            </div>
            <ReactECharts option={options} className={styles.chart} />
        </div>
    )
}

export default TopProblemChart