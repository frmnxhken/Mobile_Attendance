import Api from "./Api";
import { errorHandler } from "@/utils/errorHandler";
import { ENDPOINTS } from "@/constants/Config";

export const postRequestExcuse = async ({ reason, date, uri }) => {
  const formData = new FormData();

  formData.append("reason", reason);
  formData.append("date", date);
  formData.append("proof", {
    uri,
    name: "proof.jpg",
    type: "image/jpg",
  });

  try {
    const response = await Api.post(ENDPOINTS.EXCUSE.REQUEST, formData);
    return { success: true, data: response.data }
  } catch (error) {
    return errorHandler(error);
  }
}
