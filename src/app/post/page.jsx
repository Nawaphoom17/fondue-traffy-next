"use client"

import React, { useState, useRef, useEffect, forwardRef, useCallback } from "react";
// import DashboardMap from '@/components/Map/DashboardMap'
import styles from '../../styles/PageStyle/PostPage.module.css'
import PostCard from "@/components/PostCard/PostCard";
import axios from "axios";

function PostPage(props) {
    const [selectedProvinceOption, setSelectedProvinceOption] = useState({ name: "กรุงเทพมหานคร", });
    const [selectedOrgOption, setSelectedOrgOption] = useState({ name: "หน่วยงานทั้งหมด" });
    const [selectedPeriodOption, setSelectedPeriodOption] = useState({ name: "รายเดือน" });

    const [testData, setTestData] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    // ขนาดของ batch ที่จะแสดงครั้งละเท่าไหร่
    const BATCH_SIZE = 10;

    // จำนวนรายการที่จะแสดงในขณะนี้
    const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

    // Ref สำหรับ element ที่ใช้สังเกตการเลื่อนถึงด้านล่าง
    const loaderRef = useRef(null);

    // คำนวณชุดข้อมูลที่จะแสดง (slice จาก all data)
    const visibleData =
        !isLoading && testData.features
            ? testData.features.slice(0, visibleCount)
            : [];

    // Observer handler: เมื่อ loaderRef ปรากฏ ก็จะเพิ่มจำนวน visibleCount
    const handleObserver = useCallback(
        (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && visibleCount < (testData.features?.length || 0)) {
                // เพิ่ม count แต่ไม่เกินขนาดข้อมูลทั้งหมด
                setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, testData.features.length));
            }
        },
        [visibleCount, testData.features]
    );

    // ตั้ง IntersectionObserver เมื่อ component mount
    useEffect(() => {
        const option = { root: null, rootMargin: '0px', threshold: 1.0 };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, [handleObserver]);

    const renderCount = useRef(0);
    renderCount.current += 1;
    console.log(`✅✅✅ PostPage rendered: ${renderCount.current} ครั้ง`);

    // Fetch ข้อมูลครั้งแรกเมื่อ mount
    useEffect(() => {
        console.log("Selected province changed:", selectedProvinceOption);

        // สร้าง query string จากค่าที่เลือก
        const province = selectedProvinceOption.name;
        const org = selectedOrgOption.name;
        const period = selectedPeriodOption.name;

        // สร้าง URL โดยแปลงค่าให้ปลอดภัย
        //const queryString = `province=${encodeURIComponent(province)}&year=${encodeURIComponent(period)}&org=${encodeURIComponent(org)}`;

        const url = `https://publicapi.traffy.in.th/teamchadchart-stat-api/geojson/v1`;

        const fetchPost = async () => {
            try {
                const response = await axios.get(url);
                console.log("/// Fetched data from Bangkok API OK ///:", response.data);
                setTestData(response.data); // เก็บข้อมูลทั้งหมด
                console.log("/// setTestData OK")
            } catch (error) {
                console.log("Error fetching data:", error);
            }
            finally {
                setIsLoading(false); // data พร้อม loading จบ
            }
        };

        fetchPost();

    }, [selectedProvinceOption]);

    useEffect(() => {
        console.log("--- testData มีการเปลี่ยนแปลง:", testData);
    }, [testData])

    useEffect(() => {
        console.log("🟡 ใช้ข้อมูลของช่วง มีการเปลี่ยนแปลง:", selectedPeriodOption);
    }, [selectedPeriodOption])

    // ถ้าโหลดข้อมูลเสร็จและมีข้อมูล
    const hasData = !isLoading && visibleData.length > 0;

    return (
        <div className={styles.container}>
            {/* <DashboardTopFilter
                selectedProvince={selectedProvinceOption} onSelectProvince={setSelectedProvinceOption}
                selectedOrg={selectedOrgOption} onSelectOrg={setSelectedOrgOption}
                selectedPeriod={selectedPeriodOption} onSelectPeriod={setSelectedPeriodOption}
            /> */}
            {hasData ? (
                <div>
                    {console.log("visibleData:", visibleData)}
                    {visibleData.map((item, index) => (
                        <div key={index} className={styles.card}>
                            {/* Postcard {index} */}
                            <PostCard postData={item} period={selectedPeriodOption} />
                        </div>
                    ))}

                    {/* Div นี้จะถูก observer สังเกตเมื่อ user เลื่อนถึง */}
                    <div ref={loaderRef} className={styles.loading}>
                        {visibleCount < testData.features.length
                            ? 'Loading more...'
                            : '— End of list —'}
                    </div>
                </div>
            ) : (
                <div className={styles.loading}>Loading...</div>
            )}

        </div>
    )
}

export default PostPage