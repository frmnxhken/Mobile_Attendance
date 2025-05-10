import Api from "./Api";

export const updatePhoto = async (uri) => {
    const formData = new FormData();
    formData.append("photo", {
        uri,
        name: "profile.jpg",
        type: "image/jpg",
    });

    const response = Api.post("/user/update-photo", formData);
    return response;
}