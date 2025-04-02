// app/api/data/mockaroo/route.js
import axios from "axios";

export async function GET(request) {
  try {
    // สร้าง URL object เพื่อดึง query parameters
    const { searchParams } = new URL(request.url);

    // รับค่า query parameters หรือใช้ค่า default หากไม่มีการส่งมา
    const province = searchParams.get("province") || "province_test";
    const year = searchParams.get("year") || "year_test";
    //const org = searchParams.get("org") || "org_test";

    // สร้าง URL ของ API ภายนอกโดยใช้ query parameters ที่ส่งมาจาก Client
    const url = `https://my.api.mockaroo.com/comparestats.json?key=86a51270&province=${province}&year=${year}`;

    // ดึงข้อมูลจาก API ภายนอก
    const response = await axios.get(url);
    const data = response.data;

    // ส่งกลับข้อมูลในรูปแบบ JSON
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching compare data:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
