import axios from "axios";

export const testApi = async () => {
    let url = `https://publicapi.traffy.in.th/teamchadchart-stat-api/reporter-comment-stat/v1`;
    let data = await axios.get(url).then((res) => {
        return res.data;
    }
    );
    return data;
};

export const testApi3 = async () => {
    try {
        let url = `https://my.api.mockaroo.com/stats.json?key=86a51270&province=province_test&year=year_test&org=org_test`;
        let response = await axios.get(url);
        return response.data; // คืนค่าข้อมูลที่ได้จาก API
    } catch (error) {
        console.error("Error fetching API:", error);
        return null; // คืนค่า null ถ้ามีข้อผิดพลาด
    }
}