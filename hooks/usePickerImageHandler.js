import * as ImagePicker from "expo-image-picker";

const useImagePickerHandler = () => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets[0].uri;
    }

    return null;
  };

  return { pickImage };
};

export default useImagePickerHandler;
