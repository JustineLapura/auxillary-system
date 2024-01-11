import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useSnackbar } from "notistack";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyFields, setEmptyFields] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  const { dispatch } = useContext(AuthContext);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
      enqueueSnackbar("Login error. Please Try again", { variant: "error" });
    }

    if (response.ok) {
      // save the user to localStorage
      localStorage.setItem("User", JSON.stringify(json));

      // update the AuthContext
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
      setError(null);
      enqueueSnackbar("You logged in successfuly", { variant: "success" });
    }
  };

  return { login, isLoading, error, emptyFields };
};
