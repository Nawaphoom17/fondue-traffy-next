import React from 'react'
import Image from 'next/image'
import styles from '../../styles/PostCardStyle/PostCard.module.css'

function PostCard({ postData, period }) {
    const categories = postData?.properties?.ai?.categories;
    const type = postData?.properties?.type;
    console.log("PostCard postData:", postData);

    return (
        <div className={styles.container}>
            <div className={styles.image_and_detail}>
                <div className={styles.image}>
                    <Image
                        src={postData.properties.photo_url}
                        alt="Picture of the post"
                        width={120}
                        height={120}
                    />
                </div>
                <div className={styles.detail}>
                    <div>
                        {postData.properties.ticket_id}
                    </div>
                    <div>
                        {postData.properties.last_activity}
                    </div>
                    <div>
                        {postData.properties.state}
                    </div>
                    <div>
                        {postData.properties.district} {postData.properties.subdistrict}
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                {postData.properties.description}
            </div>
            <div>
                ดำเนินการ: {postData.properties.note ? postData.properties.note : "ไม่มีข้อมูล"}
            </div>
            <div>
                โดย: {postData.properties.org_action[0]}
            </div>
            <div className={styles.category}>
                ประเภท:
                {categories?.length > 0 ? (
                    categories.map((item, index) => <div key={index}>{item.category}</div>)
                    
                ) : type ? (
                    <div>{type}</div>
                ) : (
                    <div>ไม่มีข้อมูล</div>
                )}
            </div>
        </div>
    )
}

export default PostCard