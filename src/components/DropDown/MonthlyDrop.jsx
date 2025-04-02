'use client'

import styles from '../../styles/DropDownStyle/ProvinceDrop.module.css'
import React, { useState, useRef, useEffect, forwardRef } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

function MonthlyDrop({ period, setPeriod }) {

    const [Show, setShow] = useState(false);

    const [List, setList] = useState([{ name: "รายสัปดาห์", }, { name: "รายเดือน", }, { name: "รายปี", }]);


    return (
        <div className={styles.container}>
            <div className={styles.drop_btn} onClick={() => setShow(!Show)}>
                <p>{period.name}</p>
                {!Show ? <FaChevronDown /> : <FaChevronUp />}
            </div>

            {Show && (
                <div className={styles.list}>
                    {List.map((item, index) => {
                        
                        // สมมติว่าเราต้องการ disable option "รายสัปดาห์" และ "รายเดือน"
                        const isDisabled = item.name === "รายสัปดาห์"; //|| item.name === "รายเดือน";

                        return (
                            <div key={index}>
                                <p
                                    className={`${item.name === period.name ? styles.selected : ""} ${isDisabled ? styles.disabledOption : ""}`}
                                    onClick={() => {
                                        setPeriod({ name: item.name })
                                        setShow(false)
                                    }}>
                                    {item.name}
                                </p>
                                <hr></hr>
                            </div>
                        )
                    }
                    )}
                </div>
            )}

        </div>
    )
}

export default MonthlyDrop