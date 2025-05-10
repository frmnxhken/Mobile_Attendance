import Api from "./Api";

export const postRequestExcuse = async ({reason, date, uri}) => {
    const formData = new FormData();
  
    formData.append("reason", reason);
    formData.append("date", date);
    formData.append("proof", {
      uri,
      name: "proof.jpg",
      type: "image/jpg",
    });

    const response = await Api.post("/excuse/request", formData);
    return response;
}