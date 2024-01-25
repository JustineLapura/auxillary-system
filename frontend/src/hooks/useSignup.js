import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useSnackbar } from "notistack";

export const useSignup = () => {
  const [error, setError] = useState();
  const [emptyFields, setEmptyFields] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const { enqueueSnackbar } = useSnackbar();

  const { dispatch } = useContext(AuthContext);

  const signup = async (
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password,
    passwordConfirm
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://auxillary-services-api-rosy.vercel.app/api/auth/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          address,
          password,
          passwordConfirm,
        }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setEmptyFields(json.emptyFields);
      enqueueSnackbar("Sign up error. Please Try again", { variant: "error" });
    }

    if (response.ok) {
      // save the user to localStorage
      localStorage.setItem("User", JSON.stringify(json));

      //   Update the AuthContext state
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      setError(null);
      enqueueSnackbar("You signed up successfuly", { variant: "success" });
    }
  };

  return { signup, isLoading, error, emptyFields };
};
