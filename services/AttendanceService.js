import Api from "./Api";

export const postCheckIn = async ({ uri, checkin, date, lat, long }) => {
    const formData = new FormData();
  
    formData.append("checkin", checkin);
    formData.append("date", date);
    formData.append("checkin_photo", {
      uri,
      name: "absen.jpg",
      type: "image/jpg",
    });
    formData.append("checkin_long", long); 
    formData.append("checkin_lat", lat);
    
    const response = await Api.post("/checkin", formData);
    return response;
}  