"use client"

import React, { useState, useRef, useEffect, forwardRef } from "react";
import DashboardTopFilter from '@/components/FilterBox/DashboardTopFilter'
import DashboardTopstat from '@/components/StatCardBox/DashboardTopstat'
// import DashboardMap from '@/components/Map/DashboardMap'
import TopProblemChart from '@/components/Chart/TopProblemChart'
import MostImportantProblem from '@/components/Chart/MostImportantProblem'
import styles from '../styles/PageStyle/DashboardPage.module.css'
import * as Api from "@/api/Api";
import useCustom from "@/api/customHook";
import axios from "axios";
import MapMain from "@/utils/MapMain";

function HomePage(props) {
    const [selectedProvinceOption, setSelectedProvinceOption] = useState({ name: "กรุงเทพมหานคร", });
    const [selectedOrgOption, setSelectedOrgOption] = useState({ name: "หน่วยงานทั้งหมด" });
    const [selectedPeriodOption, setSelectedPeriodOption] = useState({ name: "รายเดือน" });
    const [dataBKK, setDataBKK] = useState([]);
    const [globalState, setGlobalState] = useCustom();
    const [testData, setTestData] = useState({});

    const renderCount = useRef(0);
    renderCount.current += 1;
    console.log(`✅✅✅ HomePage rendered: ${renderCount.current} ครั้ง`);

    const data_bkk = [
        {
            "fonduegroup_id": 7315,
            "fonduegroup_name": "กรุงเทพมหานคร",
            "post_count_all": 25984,
            "post_count_finish": 11383,
            "post_finish_percentage": 43.81,
            "post_count_star": 4465,
            "star_percentage": 78.25,
            "period": "current month",
            "yyyy_mm": "2025-03",
            "duration_minutes_inprogress": 439,
            "duration_minutes_finished": 2812
        },
        {
            "fonduegroup_id": 7315,
            "fonduegroup_name": "กรุงเทพมหานคร",
            "post_count_all": 27438,
            "post_count_finish": 17451,
            "post_finish_percentage": 63.6,
            "post_count_star": 6639,
            "star_percentage": 75.7,
            "period": "1 month ago",
            "yyyy_mm": "2025-02",
            "duration_minutes_inprogress": 466,
            "duration_minutes_finished": 3129
        }
    ]

    // useEffect(() => {
    //     console.log("Dashboard ชื่อจังหวัดที่ฉันเลือก มีการเปลี่ยนแปลง:", selectedProvinceOption);
    //     Api.testApi().then((result) => {
    //         console.log("/// Fetch OK")
    //         console.log("result", result);
    //         setTestData(result.results[0].data_bkk.data_comparison_monthly);
    //         console.log("/// setTestData OK")
    //         // setGlobalState({
    //         //     post_count_all: result.results[0].data_bkk.post_count_all,
    //         //     post_finish_percentage: result.results[0].data_bkk.post_finish_percentage,
    //         //     duration_minutes_inprogress: result.results[0].data_bkk.data_comparison_monthly[0].duration_minutes_inprogress,
    //         //     duration_minutes_finished: result.results[0].data_bkk.data_comparison_monthly[0].duration_minutes_finished,
    //         // });
    //         // console.log("/// setGlobalState OK")
    //     });
    // }, [selectedProvinceOption]);

    useEffect(() => {
        console.log("Selected province changed:", selectedProvinceOption);

        // สร้าง query string จากค่าที่เลือก
        const province = selectedProvinceOption.name;
        const org = selectedOrgOption.name;
        const period = selectedPeriodOption.name;

        // สร้าง URL โดยแปลงค่าให้ปลอดภัย
        // const queryString = `province=${encodeURIComponent(province)}&year=${encodeURIComponent(period)}&org=${encodeURIComponent(org)}`;
        const queryString = `province=${province}&year=${period}&org=${org}`;
        console.log("queryString:", queryString);

        // เรียก API Route ที่เราได้สร้างไว้แทนที่จะเรียก API ภายนอกโดยตรง
        axios.get(`/api/data/mockaroo/dashboard?${queryString}`)
            .then((response) => {
                console.log("/// Fetched data from API route Mockaroo!!! OK ///:", response.data);
                setTestData(response.data);
                console.log("/// setTestData OK")
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [selectedProvinceOption]);

    useEffect(() => {
        console.log("--- testData มีการเปลี่ยนแปลง:", testData);
    }, [testData])

    useEffect(() => {
        console.log("🟡 ใช้ข้อมูลของช่วง มีการเปลี่ยนแปลง:", selectedPeriodOption);
    }, [selectedPeriodOption])

    return (
        <div className={styles.container}>
            <DashboardTopFilter
                selectedProvince={selectedProvinceOption} onSelectProvince={setSelectedProvinceOption}
                selectedOrg={selectedOrgOption} onSelectOrg={setSelectedOrgOption}
                selectedPeriod={selectedPeriodOption} onSelectPeriod={setSelectedPeriodOption}
            />
            <DashboardTopstat stats={testData} period={selectedPeriodOption} />
            <div className={styles.mid_container}>
                {/* <DashboardMap /> */}
                <div className={styles.chart_container}>
                    <MapMain />
                </div>
                <div className={styles.chart_container}>
                    <TopProblemChart chartData={testData} period={selectedPeriodOption} />
                    <MostImportantProblem chartData={testData} period={selectedPeriodOption} />
                </div>
            </div>
        </div>
    )
}

export default HomePage