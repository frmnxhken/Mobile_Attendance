import { useState } from "react";
import { useRouter } from "expo-router";
import { updatePassword } from "@/services/UserService";

const useChangePassForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: ""
  });
  const [errors, setErrors] = useState({});

  const handleInput = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const response = await updatePassword(form);
    if (response.success) {
      setErrors({});
      router.push({
        pathname: "/splash/SuccessSplash",
        params: { type: "passwordChange" },
      });
    } else {
      setErrors(response.errors);
    }
  };

  return {
    form,
    errors,
    handleInput,
    handleSubmit
  };
};

export default useChangePassForm;
