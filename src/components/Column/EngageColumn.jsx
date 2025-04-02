import React, { useState, useRef, useEffect, forwardRef } from "react";
import styles from '../../styles/ColumnStyle/CompareColumn.module.css'
import { MdOutlinePeopleAlt, MdOutlineRemoveRedEye, MdOutlineIosShare, MdOutlineModeComment } from "react-icons/md";

function EngageColumn({stats}) {

    const renderCount = useRef(0);
    renderCount.current += 1;
    console.log(`✅ EngageColumn rendered: ${renderCount.current} ครั้ง`);

    console.log("EngageStats:", stats)

    const peoplePerAPost = Math.floor(stats.population / stats.post_count_all_time)
    console.log("peoplePerAPost:", peoplePerAPost)

    return (
        <div className={styles.column_container}>
            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <MdOutlinePeopleAlt size={64} />
                    <p>1 ใน {peoplePerAPost}</p>
                </div>
                <div className={styles.detail}>
                    <p>มีจำนวนเรื่องแจ้งทั้งหมด {stats.post_count_all_time.toLocaleString()} เรื่อง ต่อจำนวนประชากร {stats.population.toLocaleString()} คน</p>
                    <p>ประชาชน 1 ใน {peoplePerAPost} เคยแจ้งเรื่อง</p>
                </div>

            </div>

            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <MdOutlineRemoveRedEye size={64} />
                    <p>{stats.view_count.toLocaleString()}</p>
                </div>
                <div className={styles.detail}>
                    <p>ยอดเข้าชม จากทั้งหมด {stats.post_count_all.toLocaleString()} เรื่องแจ้ง</p>
                </div>
            </div>

            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <MdOutlineIosShare size={64} />
                    <p>{stats.share_count.toLocaleString()}</p>
                </div>
                <div className={styles.detail}>
                    <p>ยอดแชร์ จากทั้งหมด {stats.post_count_all.toLocaleString()} เรื่องแจ้ง</p>
                </div>
            </div>

            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <MdOutlineModeComment size={64} />
                    <p>{stats.comment_count_percentage.toLocaleString('en-US', { maximumFractionDigits: 1 })}%</p>
                </div>
                <div className={styles.detail}>
                    <p>ประชาชนแสดงความคิดเห็น {stats.comment_count.toLocaleString()} จาก {stats.post_count_finish.toLocaleString()} เรื่องที่เสร็จสิ้น</p>
                </div>
            </div>

        </div>
    )
}

export default EngageColumn