"use client"

import React from 'react'
import styles from '../../styles/NavbarStyle/Nav.module.css'
import Image from 'next/image'
import logo from '../../../public/images/logoTraffy.png'
// import { Link, useLocation  } from "react-router-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaArrowLeft, FaLine, FaYoutube, } from "react-icons/fa6";
import { SiGoogleforms } from "react-icons/si";


function Nav() {
    // const location = useLocation(); // ดึง path ปัจจุบัน
    const pathname = usePathname(); // ดึง path ปัจจุบัน
    // const currentPath = pathname.pathname; // "/", "/compare", "/dashboard", etc.

    function clicked(num) {
        console.log("ตัวเลือก", num)
        if (num == 1) {
            window.open("https://landing.traffy.in.th/?key=cdTKECqN", "_blank")
        }
        else if (num == 2) {
            window.open("https://google.com", "_blank")
        }
        else if (num == 3) {
            window.open("https://youtube.com", "_blank")
        }

    }

    return (
        <nav className={styles.container}>
            <div className={styles.left_menu}>
                {/* {pathname.startsWith("/dashboard") ? (
                    <Link href="/compare">
                        <FaBars size={40} />
                    </Link>
                ) : (
                    <Link href="/dashboard">
                        <FaArrowLeft size={40} />
                    </Link>
                )} */}

                <Image src={logo} alt="Traffyfondue logo" />

                <Link
                    href="/"
                    className={pathname === '/' ? styles.active : ''}
                >
                    หน้าแรก
                </Link>
                <Link
                    href="/dashboard"
                    className={pathname === '/dashboard' ? styles.active : ''}
                >
                    แดชบอร์ด
                </Link>
                <Link
                    href="/compare"
                    className={pathname === '/compare' ? styles.active : ''}
                >
                    เปรียบเทียบ
                </Link>
            </div>

            <div className={styles.right_menu}>
                <div className={styles.btn_nav} onClick={(event) => {
                    event.preventDefault();
                    clicked(1);
                }}>
                    <FaLine size={24} />
                    <a href="">แจ้งเรื่องผ่านไลน์</a>
                </div>
                <div className={styles.btn_nav} onClick={(event) => {
                    event.preventDefault();
                    clicked(2);
                }}>
                    <SiGoogleforms size={24} />
                    <a href="">แจ้งเรื่องผ่านGoogle</a>
                </div>
                <div className={styles.btn_nav} onClick={(event) => {
                    event.preventDefault();
                    clicked(3);
                }}>
                    <FaYoutube size={24} />
                    <a href="">Youtube</a>
                </div>

            </div>

        </nav>
    )
}

export default Nav