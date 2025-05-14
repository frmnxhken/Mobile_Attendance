import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const useSignInForm = () => {
  const { signIn } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleInput = (fieldName, value) => {
    setForm((prev) => ({ ...prev, [fieldName]: value }));
  }

  const handleSignIn = async () => {
    const response = await signIn(form);

    if (response.errors) {
      setErrors(response.errors);
      setAlert(null);
    } else {
      setErrors([]);
      setAlert(response.message);
    }
  }
  return {
    form,
    errors,
    alert,
    handleInput,
    handleSignIn
  }
}

export default useSignInForm;
