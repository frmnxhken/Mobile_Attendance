import Api from "./Api";

export const postCheckIn = async ({ uri, time, date, lat, long }) => {
    const formData = new FormData();
  
    formData.append("checkin", time);
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

export const postCheckOut = async ({ uri, time, date, lat, long }) => {
    const formData = new FormData();
  
    formData.append("checkout", time);
    formData.append("date", date);
    formData.append("checkout_photo", {
      uri,
      name: "absen.jpg",
      type: "image/jpg",
    });
    formData.append("checkout_long", long); 
    formData.append("checkout_lat", lat);
    
    const response = await Api.post("/checkout", formData);
    return response;
} 

export const getCheckStatus = async () => {
    const response = await Api.get("/status");
    return response;
}