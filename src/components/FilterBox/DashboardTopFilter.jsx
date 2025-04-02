'use client'

import React, { useState, useRef, useEffect, forwardRef } from "react";
import styles from '../../styles/FilterBoxStyle/DashboardTopFilter.module.css'
import ProvinceDrop from '../DropDown/ProvinceDrop'
import OrgDrop from '../DropDown/OrgDrop'
import MonthlyDrop from "../DropDown/MonthlyDrop";

function DashboardTopFilter({selectedProvince, onSelectProvince, selectedOrg, onSelectOrg, selectedPeriod, onSelectPeriod}) {

    // const renderCount = useRef(0);
    //     renderCount.current += 1;
    //     console.log(`✅ DashboardTopFilter rendered: ${renderCount.current} ครั้ง`);

    return (
        <div className={styles.container}>
            <div className={styles.left_filter}>
                <ProvinceDrop province={selectedProvince} setProvince={onSelectProvince} />
                <OrgDrop org={selectedOrg} setOrg={onSelectOrg} />
            </div>

            <MonthlyDrop period={selectedPeriod} setPeriod={onSelectPeriod}/>
        </div>
    )
}

export default DashboardTopFilter