import React from "react";
import { useRouter } from "expo-router";
import Notification from "@/components/screens/Notification";
import Succes from "@/assets/Icons/Succes";

const SubmittedPass = () => {
  const router = useRouter();
  return (
    <Notification
      header="Change Password"
      title="Request Sent Successfully"
      description="Your reset request has been sent successfully. Please wait while the admin reviews your request"
      // buttonText="Request Password Reset"
      icon={<Succes />}
      onPress={() => router.navigate("/notification/message")}
    />
  );
};

export default SubmittedPass;
