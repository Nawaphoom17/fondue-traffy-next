import React, { useState } from "react";
import styles from '../../styles/DropDownStyle/CompareProvinceDrop.module.css';
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

function CompareProvinceDrop({province, onSelectProvince}) { 
    const [Show, setShow] = useState(false);
    
    const [List, setList] = useState([
        { name: "กรุงเทพมหานคร" },
        { name: "สมุทรปราการ" },
        { name: "นนทบุรี" },
        { name: "ปทุมธานี" },
        { name: "พระนครศรีอยุธยา" },
        { name: "อ่างทอง" },
        { name: "ลพบุรี" },
        { name: "สิงห์บุรี" },
        { name: "ชัยนาท" },
        { name: "สระบุรี" },
        { name: "ชลบุรี" },
        { name: "ระยอง" },
        { name: "จันทบุรี" },
        { name: "ตราด" },
        { name: "ฉะเชิงเทรา" },
        { name: "ปราจีนบุรี" },
        { name: "นครนายก" },
        { name: "สระแก้ว" },
        { name: "นครราชสีมา" },
        { name: "บุรีรัมย์" },
        { name: "สุรินทร์" },
        { name: "ศรีสะเกษ" },
        { name: "อุบลราชธานี" },
        { name: "ยโสธร" },
        { name: "ชัยภูมิ" },
        { name: "อำนาจเจริญ" },
        { name: "บึงกาฬ" },
        { name: "หนองบัวลำภู" },
        { name: "ขอนแก่น" },
        { name: "อุดรธานี" },
        { name: "เลย" },
        { name: "หนองคาย" },
        { name: "มหาสารคาม" },
        { name: "ร้อยเอ็ด" },
        { name: "กาฬสินธุ์" },
        { name: "สกลนคร" },
        { name: "นครพนม" },
        { name: "มุกดาหาร" },
        { name: "เชียงใหม่" },
        { name: "ลำพูน" },
        { name: "ลำปาง" },
        { name: "อุตรดิตถ์" },
        { name: "แพร่" },
        { name: "น่าน" },
        { name: "พะเยา" },
        { name: "เชียงราย" },
        { name: "แม่ฮ่องสอน" },
        { name: "นครสวรรค์" },
        { name: "อุทัยธานี" },
        { name: "กำแพงเพชร" },
        { name: "ตาก" },
        { name: "สุโขทัย" },
        { name: "พิษณุโลก" },
        { name: "พิจิตร" },
        { name: "เพชรบูรณ์" },
        { name: "ราชบุรี" },
        { name: "กาญจนบุรี" },
        { name: "สุพรรณบุรี" },
        { name: "นครปฐม" },
        { name: "สมุทรสาคร" },
        { name: "สมุทรสงคราม" },
        { name: "เพชรบุรี" },
        { name: "ประจวบคีรีขันธ์" },
        { name: "นครศรีธรรมราช" },
        { name: "กระบี่" },
        { name: "พังงา" },
        { name: "ภูเก็ต" },
        { name: "สุราษฎร์ธานี" },
        { name: "ระนอง" },
        { name: "ชุมพร" },
        { name: "สงขลา" },
        { name: "สตูล" },
        { name: "ตรัง" },
        { name: "พัทลุง" },
        { name: "ปัตตานี" },
        { name: "ยะลา" },
        { name: "นราธิวาส" },
    ]);
    
    return (
        <div className={styles.dropdown_container}>
            <div className={styles.drop_btn} onClick={() => setShow(!Show)}>
                <p>{province.name}</p>
                {!Show ? <FaChevronDown /> : <FaChevronUp />}
            </div>

            {Show && (
                <div className={styles.list}>
                    {List.map((item, index) => (
                        <div key={index}>
                            <p
                                className={item.name === province.name ? styles.selected : ""}
                                onClick={() => {
                                    onSelectProvince({ name: item.name });
                                    setShow(false);
                                }}
                            >
                                {item.name}
                            </p>
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CompareProvinceDrop;