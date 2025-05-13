import Api from "./Api";
import { errorHandler } from "@/utils/errorHandler";
import { ENDPOINTS } from "@/constants/Config";


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

  try {
    const response = await Api.post(ENDPOINTS.ATTENDANCE.CHECKIN, formData);
    return { success: true, data: response.data };
  } catch (error) {
    return errorHandler(error);
  }
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

  try {
    const response = await Api.post(ENDPOINTS.ATTENDANCE.CHECKOUT, formData);
    return { success: true, data: response.data };
  } catch (error) {
    return errorHandler(error);
  }
}

export const getCheckStatus = async () => {
  const response = await Api.get(ENDPOINTS.ATTENDANCE.STATUS);
  return response;
}