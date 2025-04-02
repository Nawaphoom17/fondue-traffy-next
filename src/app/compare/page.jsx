"use client";

import React, { useState, useRef, useEffect, forwardRef } from "react";
import styles from '../../styles/PageStyle/ComparePage.module.css'
import EfficiencyColumn from "../../components/Column/EfficiencyColumn";
import EffectivenessColumn from "../../components/Column/EffectivenessColumn";
import EngageColumn from "../../components/Column/EngageColumn";
import OtherColumn from "../../components/Column/OtherColumn";
import CompareProvinceDrop from "../../components/DropDown/CompareProvinceDrop";
import axios from "axios";

function ComparePage() {
    const [province1, setProvince1] = useState({ name: "กรุงเทพมหานคร", });
    const [province2, setProvince2] = useState({ name: "สมุทรปราการ", });
    const [periodOption, setPeriodOption] = useState({ name: "รายปี" });
    const [testData1, setTestData1] = useState({});
    const [testData2, setTestData2] = useState({});
    // แยก loading 2 ตัว
    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);

    const renderCount = useRef(0);
    renderCount.current += 1;
    console.log(`✅✅✅ ComparePage rendered: ${renderCount.current} ครั้ง`);

    useEffect(() => {
        setIsLoading1(true);

        console.log("Selected province1 changed:", province1.name);

        // สร้าง query string จากค่าที่เลือก
        const province = province1.name;
        const period = periodOption.name;
        //const org = selectedOrgOption.name;

        // สร้าง URL โดยแปลงค่าให้ปลอดภัย
        const queryString = `province=${encodeURIComponent(province)}&year=${encodeURIComponent(period)}`;

        // เรียก API Route ที่เราได้สร้างไว้แทนที่จะเรียก API ภายนอกโดยตรง
        axios.get(`/api/data/mockaroo/compare?${queryString}`)
            .then((response) => {
                console.log("/// Fetched data from API route Mockaroo!!! OK ///:", response.data);
                setTestData1(response.data);
                console.log("/// setTestData1 OK")
            })
            .catch((error) => console.error("Error fetching data:", error))
            .finally(() => setIsLoading1(false)); // data พร้อม
    }, [province1]);

    useEffect(() => {
        setIsLoading2(true);

        console.log("Selected province2 changed:", province2.name);

        // สร้าง query string จากค่าที่เลือก
        const province = province2.name;
        const period = periodOption.name;
        //const org = selectedOrgOption.name;

        // สร้าง URL โดยแปลงค่าให้ปลอดภัย
        const queryString = `province=${encodeURIComponent(province)}&year=${encodeURIComponent(period)}`;

        // เรียก API Route ที่เราได้สร้างไว้แทนที่จะเรียก API ภายนอกโดยตรง
        axios.get(`/api/data/mockaroo/compare?${queryString}`)
            .then((response) => {
                console.log("/// Fetched data from API route Mockaroo!!! OK ///:", response.data);
                setTestData2(response.data);
                console.log("/// setTestData2 OK")
            })
            .catch((error) => console.error("Error fetching data:", error))
            .finally(() => setIsLoading2(false));
    }, [province2]);

    useEffect(() => {
        console.log("--- testData1 มีการเปลี่ยนแปลง:", testData1);
    }, [testData1])

    useEffect(() => {
        console.log("--- testData2 มีการเปลี่ยนแปลง:", testData2);
    }, [testData2])

    // ถ้าอันไหนยังโหลด => บอกว่า Loading
    if (isLoading1 || isLoading2) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.container} >

            <h1 className={styles.page_header}>เปรียบเทียบระหว่างจังหวัด</h1>

            <div className={styles.dropdown_container}>
                <CompareProvinceDrop
                    province={province1}
                    onSelectProvince={setProvince1}
                />
                <CompareProvinceDrop
                    province={province2}
                    onSelectProvince={setProvince2}
                />
            </div>

            <div className={styles.compare_table_container}>

                <div className={styles.table_header}>
                    <p>ประสิทธิภาพ</p>
                </div>
                <div className={styles.table_content}>
                    <div className={styles.first_column}>
                        <EfficiencyColumn stats={testData1} />
                    </div>
                    <div className={styles.second_column}>
                        <EfficiencyColumn stats={testData2} />
                    </div>

                </div>
            </div>

            <div className={styles.compare_table_container}>
                <div className={styles.table_header}>
                    <p>คุณภาพ</p>
                </div>
                <div className={styles.table_content}>
                    <div className={styles.first_column}>
                        <EffectivenessColumn stats={testData1} />
                    </div>
                    <div className={styles.second_column}>
                        <EffectivenessColumn stats={testData2} />
                    </div>

                </div>
            </div>

            <div className={styles.compare_table_container}>
                <div className={styles.table_header}>
                    <p>มีส่วนร่วม</p>
                </div>
                <div className={styles.table_content}>
                    <div className={styles.first_column}>
                        <EngageColumn stats={testData1} />
                    </div>
                    <div className={styles.second_column}>
                        <EngageColumn stats={testData2} />
                    </div>
                </div>
            </div>

            <div className={styles.compare_table_container}>
                <div className={styles.table_header}>
                    <p>อื่นๆ</p>
                </div>
                <div className={styles.table_content}>
                    <div className={styles.first_column}>
                        <OtherColumn stats={testData1} />
                    </div>
                    <div className={styles.second_column}>
                        <OtherColumn stats={testData2} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ComparePage