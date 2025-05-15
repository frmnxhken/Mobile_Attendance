import React, { useState } from 'react'
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updatePhoto } from "@/services/UserService";
import { useAuth } from "@/contexts/AuthContext";
import useImagePickerHandler from "@/hooks/usePickerImageHandler";

const useUpdatePhotoProfile = () => {
    const { user } = useAuth(); 
    const router = useRouter();
    const [photo, setPhoto] = useState(user?.photo);
    const { pickImage } = useImagePickerHandler();
    
    const handlePick = async () => {
        const uri = await pickImage();
        if (uri) setPhoto(uri);
    }

    const handleSubmit = async() => {
        const response = await updatePhoto(photo);
        if(response.success) {
            user.photo = response.data.photo;
            await AsyncStorage.setItem("user", JSON.stringify(user));
            return router.push({
                pathname: "/splash/SuccessSplash",
                params: {type: "profileUpdate"}
            });
        }
    }

    return { photo, handlePick, handleSubmit }
}

export default useUpdatePhotoProfile