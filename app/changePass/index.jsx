import React from "react";
import { useRouter } from "expo-router";
import Notification from "@/components/screens/Notification";
import LockIcon from "@/assets/Icons/LockIcon";

const ChangePass = () => {
  const router = useRouter();
  return (
    <Notification
      header="Change Password"
      title="Password Reset Request"
      description="Forgot your password? Submit a reset request and the admin will help you regain access"
      buttonText="Request Password Reset"
      icon={<LockIcon />}
      onPress={() => router.navigate("/changePass/SubmittedPass")}
    />
  );
};

export default ChangePass;
