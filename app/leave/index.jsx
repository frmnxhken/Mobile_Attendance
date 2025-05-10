import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView, StyleSheet, TouchableOpacity, TextInput, Modal } from "react-native";
import { useRouter } from "expo-router";

import HeaderBar from "@/components/ui/HeaderBar";
import Button from "@/components/ui/Button";

import Sizes from "@/constants/Sizes";
import UploadIcon from "@/assets/Icons/UploadIcon";

const ChevronDownIcon = () => (
  <Text style={styles.iconText}>▼</Text>
);

const Leave = () => {
  const router = useRouter();
  const [category, setCategory] = useState("Leave Early");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const categories = ["Sick", "Vacation"];

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderBar name="Leave Request" />
          <View style={styles.form}>
            <View>
              <Text style={styles.formLabel}>Reason</Text>
              <TouchableOpacity style={styles.dropdown} onPress={() => setDropdownVisible(true)}>
                <Text style={styles.dropdownText}>{category}</Text>
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
                numberOfLines={4}
              />
            </View>

            <View>
              <Text style={styles.formLabel}>Proof</Text>
              <TouchableOpacity style={styles.uploadContainer}>
                <UploadIcon />
                <Text style={styles.uploadText}>Upload Image</Text>
              </TouchableOpacity>
            </View>

            <Button text="Submit" onPress={() => router.navigate("/splash/SuccessSplash")}/>
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
