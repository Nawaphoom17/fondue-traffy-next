// app/api/dashboard/route.js
import axios from "axios";

export async function GET() {
  try {
    // ดึงข้อมูลจาก API ภายนอก
    const url = `https://publicapi.traffy.in.th/teamchadchart-stat-api/reporter-comment-stat/v1`;
    const response = await axios.get(url);
    const data = response.data;
    // ส่งกลับข้อมูลในรูปแบบ JSON
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
