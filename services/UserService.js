import Api from "./Api";

export const updatePassword = async ({ current_password, new_password, new_password_confirmation }) => {
    const response = await Api.post("/user/update-password", {
        current_password,
        new_password,
        new_password_confirmation        
    });
    
    return response;
};


export const updatePhoto = async (uri) => {
    const formData = new FormData();
    formData.append("photo", {
        uri,
        name: "profile.jpg",
        type: "image/jpg",
    });
    
    const response = await Api.post("/user/update-photo", formData);
    return response;
}