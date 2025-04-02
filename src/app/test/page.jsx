"use client";

import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/data"); // เช็คให้ตรงกับ API
        const data = await response.json();
        console.log("API Data:", data); // Debug ดูโครงสร้าง
        setChartData(data.top_post_count); // ใช้ key ที่ถูกต้อง
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const option = {
    title: { text: "Top 3 ปัญหาพบบ่อย (%)", left: "center" },
    xAxis: { type: "value" },
    yAxis: {
      type: "category",
      data: chartData.map((item) => item.category), // ใช้ category จาก API
    },
    series: [
      {
        type: "bar",
        data: chartData.map((item) => item.post_persentage), // ใช้ post_persentage จาก API
        itemStyle: { color: "#a682ff" },
        label: { show: true, position: "right", formatter: "{c}%" },
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default BarChart;
