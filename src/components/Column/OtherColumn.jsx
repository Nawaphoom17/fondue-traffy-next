import React from 'react'
import styles from '../../styles/ColumnStyle/CompareColumn.module.css'
import { MdOutlineEco } from "react-icons/md";

function OtherColumn({stats}) {
    return (
        <div className={styles.column_container}>
            <div className={styles.content_container}>
                <div className={styles.big_number}>
                    <MdOutlineEco size={64} />
                    <p>{stats.post_type_pollution_finish_percentage.toLocaleString('en-US', { maximumFractionDigits: 1 })}%</p>
                </div>
                <div className={styles.detail}>
                    <p>จัดการปัญหาประเภทมลพิษและขยะ {stats.post_type_pollution_finish.toLocaleString()} จาก {stats.post_count_type_pollution.toLocaleString()} เรื่อง</p>
                </div>
            </div>
        </div>
    )
}

export default OtherColumn