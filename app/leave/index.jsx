import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import HeaderBar from "@/components/ui/HeaderBar";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import Feedback from "@/components/ui/Feedback";

import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import UploadIcon from "@/assets/Icons/UploadIcon";

import useImagePickerHandler from "@/hooks/usePickerImageHandler";
import useExcuseForm from "@/hooks/useExcuseForm";

const Leave = () => {
  const { reason, setReason, proof, setProof, errors, handleSubmit } = useExcuseForm();
  const { pickImage } = useImagePickerHandler();

  const handlePick = async () => {
    const uri = await pickImage();
    if (uri) setProof(uri);
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <HeaderBar name="Excuse Request" />
        <View style={styles.form}>
          <InputField
            label="Reason"
            multiline={true}
            numberOfLines={1}
            style={{ height: 120 }}
            placeholder="Type your reason.."
            value={reason}
            onChangeText={(text) => setReason(text)}
            feedback={errors?.reason}
          />
          <View style={{marginBottom: 15}}>
            <Text style={styles.formLabel}>Proof</Text>
            <TouchableOpacity onPress={handlePick} style={styles.uploadContainer}>
              {proof && <Image style={styles.preview} source={{ uri: proof }} />}
              <UploadIcon />
              <Text style={styles.uploadText}>Upload Image</Text>
            </TouchableOpacity>
            { errors?.proof && <Feedback type="danger" message={errors?.proof}/> }
          </View>

          <Button text="Submit" onPress={handleSubmit} />
        </View>
      </View>

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
    marginBottom: 10
  },
  uploadContainer: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 13,
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  uploadText: {
    marginTop: 10,
    fontSize: Sizes.body,
    fontFamily: "Inter-Regular",
    color: "#6E6E6E",
  },
  preview: {
    width: "100%",
    height: 120,
    borderRadius: 5
  }
});

export default Leave;