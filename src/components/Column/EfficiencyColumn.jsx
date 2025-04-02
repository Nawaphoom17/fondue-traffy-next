import React, { useState, useRef, useEffect, forwardRef } from "react";
import styles from '../../styles/ColumnStyle/CompareColumn.module.css'
import { MdSchedule, MdAlarmOn, MdOutlineTaskAlt, MdOutlineUpdate } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { convertMinutesToDayHourMinute } from "@/utils/timeUtils";


function EfficiencyColumn({ stats }) {

    const renderCount = useRef(0);
    renderCount.current += 1;
    console.log(`✅ EfficiencyColumn rendered: ${renderCount.current} ครั้ง`);

    console.log("stats:", stats)
    console.log("stats.avg_minutes_start:", stats.avg_minutes_start)

    // อยากได้เวลารับเรื่องเฉลี่ยเป็น “ชั่วโมง”
    const startObj = convertMinutesToDayHourMinute(stats.avg_minutes_start);
    // startObj = { days: ..., hours: ..., mins: ... }

    // อยากได้เวลาเสร็จสิ้น (avg_minutes_finish) แสดงผลเป็น "วัน"
    const finishObj = convertMinutesToDayHourMinute(stats.avg_minutes_finish);

    // อยากได้เวลาอัปเดต (avg_minutes_update) เป็น “ชั่วโมง”
    const updateObj = convertMinutesToDayHourMinute(stats.avg_minutes_update);


    return (
        <div className={styles.column_container}>
            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <MdSchedule size={64} />
                    <p>{startObj.hours} ชม.</p>
                </div>
                <div className={styles.detail}>
                    <p>เวลารับเรื่องเฉลี่ย {startObj.hours} ชั่วโมง</p>
                </div>
            </div>

            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <MdOutlineTaskAlt size={64} />
                    <p>{stats.post_finish_percentage.toLocaleString('en-US', { maximumFractionDigits: 1 })}%</p>
                </div>
                <div className={styles.detail}>
                    <p>แก้ไขเรื่องแจ้งเสร็จสิ้นทั้งหมด {stats.post_count_finish.toLocaleString()} จาก {stats.post_count_all.toLocaleString()} เรื่อง</p>
                </div>
            </div>

            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <MdAlarmOn size={64} />
                    <p>{finishObj.days} วัน</p>
                </div>
                <div className={styles.detail}>
                    <p>เวลาแก้ไขเรื่องแจ้ง {stats.post_count_finish.toLocaleString()} เรื่อง โดยเฉลี่ย {finishObj.days} วัน</p>
                </div>
            </div>

            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <MdOutlineUpdate size={64} />
                    <p>{updateObj.hours} ชม.</p>
                </div>
                <div className={styles.detail}>
                    <p>เวลาในการอัปเดตสถานะความคืบหน้าเฉลี่ยทุก {updateObj.hours} ชั่วโมง</p>
                </div>
            </div>

        </div>
    )
}

export default EfficiencyColumn