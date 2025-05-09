import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView, StyleSheet, TouchableOpacity, TextInput, Modal } from "react-native";
import HeaderBar from "@/components/ui/HeaderBar";
import Sizes from "@/constants/Sizes";
import UploadIcon from "@/assets/Icons/UploadIcon";

// Ikon untuk dropdown
const ChevronDownIcon = () => (
  <Text style={styles.iconText}>▼</Text>
);

const Leave = () => {
  const [category, setCategory] = useState("Leave Early");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const categories = ["Leave Early", "Sick Leave", "Vacation Leave"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Menghasilkan jumlah hari berdasarkan bulan dan tahun yang dipilih
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const days = Array.from({ length: getDaysInMonth(selectedMonth, selectedYear) }, (_, i) => i + 1);

  // Menghasilkan daftar tahun untuk pemilih tahun
  const years = Array.from({ length: 6 }, (_, i) => new Date().getFullYear() + i);

  const handleSubmit = () => {
    console.log({ category, date, description });
  };

  const confirmDateSelection = () => {
    setDate(`${selectedDay} ${months[selectedMonth]} ${selectedYear}`);
    setDatePickerVisible(false);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <HeaderBar name="Leave Request" />
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.formLabel}>Kategori</Text>
            <TouchableOpacity style={styles.dropdown} onPress={() => setDropdownVisible(true)}>
              <Text style={styles.dropdownText}>{category}</Text>
              <ChevronDownIcon />
            </TouchableOpacity>

            {/* Modal dropdown untuk kategori */}
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

            <Text style={styles.formLabel}>Tanggal</Text>
            <TouchableOpacity style={styles.dropdown} onPress={() => setDatePickerVisible(true)}>
              <Text style={styles.dropdownText}>{date || "Pilih Tanggal"}</Text>
              <ChevronDownIcon />
            </TouchableOpacity>

            {/* Modal Pemilih Tanggal */}
            <Modal visible={isDatePickerVisible} transparent animationType="fade">
              <TouchableOpacity
                style={styles.modalBackdrop}
                activeOpacity={1}
                onPress={() => setDatePickerVisible(false)}
              >
                <View style={styles.datePickerContent}>
                  <Text style={styles.datePickerTitle}>Pilih Tanggal</Text>

                  <View style={styles.datePickerRow}>
                    {/* Pemilih Bulan */}
                    <View style={styles.datePickerColumn}>
                      <Text style={styles.datePickerLabel}>Bulan</Text>
                      <ScrollView style={styles.datePickerScroll} showsVerticalScrollIndicator={false}>
                        {months.map((month, index) => (
                          <TouchableOpacity
                            key={month}
                            style={[styles.datePickerItem, selectedMonth === index && styles.selectedDatePickerItem]}
                            onPress={() => setSelectedMonth(index)}
                          >
                            <Text style={[styles.datePickerItemText, selectedMonth === index && styles.selectedDatePickerItemText]}>{month}</Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>

                    {/* Pemilih Hari */}
                    <View style={styles.datePickerColumn}>
                      <Text style={styles.datePickerLabel}>Hari</Text>
                      <ScrollView style={styles.datePickerScroll} showsVerticalScrollIndicator={false}>
                        {days.map((day) => (
                          <TouchableOpacity
                            key={day}
                            style={[styles.datePickerItem, selectedDay === day && styles.selectedDatePickerItem]}
                            onPress={() => setSelectedDay(day)}
                          >
                            <Text style={[styles.datePickerItemText, selectedDay === day && styles.selectedDatePickerItemText]}>{day}</Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>

                    {/* Pemilih Tahun */}
                    <View style={styles.datePickerColumn}>
                      <Text style={styles.datePickerLabel}>Tahun</Text>
                      <ScrollView style={styles.datePickerScroll} showsVerticalScrollIndicator={false}>
                        {years.map((year) => (
                          <TouchableOpacity
                            key={year}
                            style={[styles.datePickerItem, selectedYear === year && styles.selectedDatePickerItem]}
                            onPress={() => setSelectedYear(year)}
                          >
                            <Text style={[styles.datePickerItemText, selectedYear === year && styles.selectedDatePickerItemText]}>{year}</Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </View>

                  <View style={styles.datePickerActions}>
                    <TouchableOpacity style={styles.datePickerCancelButton} onPress={() => setDatePickerVisible(false)}>
                      <Text style={styles.datePickerCancelButtonText}>Batal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.datePickerConfirmButton} onPress={confirmDateSelection}>
                      <Text style={styles.datePickerConfirmButtonText}>Konfirmasi</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </Modal>

            <Text style={styles.formLabel}>Deskripsi</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Tuliskan deskripsi atau alasan di sini"
              multiline
              numberOfLines={4}
              value={description}
              onChangeText={setDescription}
            />

            {/* Bagian Unggah Berkas */}
            <Text style={styles.formLabel}>Dokumen</Text>
            <TouchableOpacity style={styles.uploadContainer}>
              <UploadIcon />
              <Text style={styles.uploadText}>Unggah Berkas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Kirim</Text>
            </TouchableOpacity>
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
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  formLabel: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Medium",
    color: "#000",
    marginBottom: 8,
    marginTop: 16,
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
  },
  submitButton: {
    backgroundColor: "#00C853",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 30,
  },
  submitButtonText: {
    fontSize: Sizes.body,
    fontFamily: "Inter-SemiBold",
    color: "#fff",
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
  // Gaya untuk pemilih tanggal
  datePickerContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    maxHeight: "80%",
  },
  datePickerTitle: {
    fontSize: Sizes.body * 1.2,
    fontFamily: "Inter-SemiBold",
    color: "#000",
    textAlign: "center",
    marginBottom: 16,
  },
  datePickerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datePickerColumn: {
    flex: 1,
    marginHorizontal: 4,
  },
  datePickerLabel: {
    fontSize: Sizes.body * 0.9,
    fontFamily: "Inter-Medium",
    color: "#000",
    textAlign: "center",
    marginBottom: 8,
  },
  datePickerScroll: {
    height: 200,
  },
  datePickerItem: {
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  selectedDatePickerItem: {
    backgroundColor: "#f0f9ff",
  },
  datePickerItemText: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Regular",
    color: "#000",
  },
  selectedDatePickerItemText: {
    fontFamily: "Inter-Medium",
    color: "#0077cc",
  },
  datePickerActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  datePickerCancelButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
  },
  datePickerConfirmButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginLeft: 8,
    backgroundColor: "#00C853",
    alignItems: "center",
  },
  datePickerCancelButtonText: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Medium",
    color: "#000",
  },
  datePickerConfirmButtonText: {
    fontSize: Sizes.body,
    fontFamily: "Inter-Medium",
    color: "#fff",
  },
  // Bagian Unggah File
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
  },
});

export default Leave;
