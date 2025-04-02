import React from 'react'
import styles from '../../styles/ColumnStyle/CompareColumn.module.css'
import { MdOutlineStarOutline } from "react-icons/md";
import { GrRotateRight } from "react-icons/gr";

function EffectivenessColumn({stats}) {
  return (
    <div className={styles.column_container}>
        <div className={styles.content_container}>
            <div className={styles.big_number}>
                <MdOutlineStarOutline size={64} />
                <p>{stats.avg_star}</p>
            </div>
            <div className={styles.detail}>
                <p>คะแนนเฉลี่ย {stats.avg_star} จากทั้งหมด {stats.comment_count.toLocaleString()} ความคิดเห็น</p>
            </div>
        </div>

        <div className={styles.content_container}>
            <div className={styles.big_number}>
                <GrRotateRight size={64} />
                <p>{stats.post_reopen_percentage.toLocaleString('en-US', { maximumFractionDigits: 1 })}%</p>
            </div>
            <div className={styles.detail}>
                <p>ประชาชนเปิดเรื่องใหม่ {stats.post_count_reopen.toLocaleString()} จาก {stats.post_count_finish.toLocaleString()} เรื่องที่เสร็จสิ้น</p>
            </div>
        </div>

    </div>
  )
}

export default EffectivenessColumn