import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView, StyleSheet, TouchableOpacity, TextInput, Modal } from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

import HeaderBar from "@/components/ui/HeaderBar";
import Button from "@/components/ui/Button";

import { getDateTime } from "@/utils/dateHelpers";
import Sizes from "@/constants/Sizes";
import UploadIcon from "@/assets/Icons/UploadIcon";
import { postRequestExcuse } from "@/services/ExcuseService";

const ChevronDownIcon = () => (
  <Text style={styles.iconText}>▼</Text>
);

const Leave = () => {
  const router = useRouter();
  const dateTime = getDateTime();
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [proof, setProof] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const categories = ["Sick", "Vacation"];

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setProof(result.assets[0]);
    }
  };

  const handleSubmit = async () => {
    const payload = {
      reason: description,
      date: dateTime.today,
      uri: proof.uri
    }

    try {
      const response = await postRequestExcuse(payload);
      if(response.data.message === "Success create request excuse") {
        return router.navigate("/splash/SuccessSplash")
      }
    } catch (e) {

    }
  };



  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderBar name="Excuse Request" />
          <View style={styles.form}>
            <View>
              <Text style={styles.formLabel}>Reason</Text>
              <TouchableOpacity style={styles.dropdown} onPress={() => setDropdownVisible(true)}>
                <Text style={styles.dropdownText}>Select the reason</Text>
                <ChevronDownIcon />
              </TouchableOpacity>
            </View>

            <Modal visible={isDropdownVisible} transparent animationType="fade">
              <TouchableOpacity
                style={styles.modalBackdrop}
                activeOpacity={1}
                onPress={() => setDropdownVisible(false)}
              >
                <View style={styles.modalContent}>
                  {categories.map((item) => (
                    <TouchableOpacity
                      key={item}
                      style={[styles.modalItem, category === item && styles.selectedModalItem]}
                      onPress={() => {
                        setCategory(item);
                        setDropdownVisible(false);
                      }}
                    >
                      <Text style={[styles.modalText, category === item && styles.selectedModalText]}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </TouchableOpacity>
            </Modal>

            <View>
              <Text style={styles.formLabel}>Description</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Type here..."
                multiline
                value={description}
                onChangeText={(text) => setDescription(text)}
                numberOfLines={4}
              />
            </View>

            <View>
              <Text style={styles.formLabel}>Proof</Text>
              <TouchableOpacity onPress={pickImage} style={styles.uploadContainer}>
                <UploadIcon />
                <Text style={styles.uploadText}>Upload Image</Text>
              </TouchableOpacity>
            </View>

            <Button text="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  form: {
    marginTop: 50
  },
  formLabel: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Medium",
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 15
  },
  dropdownText: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Regular",
    color: "#000",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    textAlignVertical: "top",
    backgroundColor: "#fff",
    fontSize: Sizes.body,
    fontFamily: "Inter-Regular",
    color: "#000",
    marginBottom: 15
  },
  iconText: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Regular",
    color: "#000",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  modalItem: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  selectedModalItem: {
    backgroundColor: "#f0f9ff",
  },
  modalText: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Regular",
    color: "#000",
  },
  selectedModalText: {
    fontFamily: "Inter-Medium",
    color: "#0077cc",
  },
  uploadContainer: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  uploadText: {
    marginTop: 10,
    fontSize: Sizes.body,
    fontFamily: "Inter-Regular",
    color: "#6E6E6E",
  }
});

export default Leave;
