import { useState } from "react";
import { useRouter } from "expo-router";
import { postRequestExcuse } from "@/services/ExcuseService";
import { getDateTime } from "@/utils/dateHelpers";

const useExcuseForm = () => {
  const router = useRouter();
  const dateTime = getDateTime();
  const [reason, setReason] = useState("");
  const [proof, setProof] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    const payload = {
      reason,
      date: dateTime.today,
      uri: proof,
    }

    const response = await postRequestExcuse(payload);
    
    if (response.success) { 
      router.push({
        pathname: "/splash/SuccessSplash",
        params: { type: "leaveRequest" }
      });
    } else {
      setErrors(response.errors);
    }
  }

  return {
    reason,
    setReason,
    proof,
    setProof,
    errors,
    handleSubmit,
  }

}

export default useExcuseForm;
