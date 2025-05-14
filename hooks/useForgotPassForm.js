import React, { useState } from "react";
import { useRouter } from "expo-router";
import { resetPassword } from "@/services/UserService";

const useForgotPassForm = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    nip: "",
    email: "",
  });

  const handleInput = (fieldName, value) => {
    setForm((prev) => ({ ...prev, [fieldName]: value }));
  }

  const handleSubmit = async () => {
    const response = await resetPassword(form);

    if (response.success) {
      return router.push({
        pathname: "/splash/SuccessSplash",
        params: { type: "resetPassword" }
      });
    } else {
      setErrors(response.errors);
    }
  }

  return {
    form,
    errors,
    handleInput,
    handleSubmit
  };
}

export default useForgotPassForm;
