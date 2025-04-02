"use client";

import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลจาก API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/data/chart"); // เปลี่ยนเป็น URL API ของคุณ
        const data = await response.json();
        console.log(data);
        setChartData(data.top_post_count); // บันทึกข้อมูลลง state
        console.log(data.top_post_count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // 📌 แปลงข้อมูลให้เข้ากับ ECharts
  const option = {
    title: { text: "Top 3 ปัญหาพบบ่อย (%)", left: "center" },
    xAxis: { type: "value" },
    yAxis: {
      type: "category",
      data: chartData.map((item) => item.name), // ดึงชื่อปัญหา
    },
    series: [
      {
        type: "bar",
        data: chartData.map((item) => item.value), // ดึงค่าเปอร์เซ็นต์
        itemStyle: { color: "#a682ff" },
        label: { show: true, position: "right", formatter: "{c}%" },
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default BarChart;
