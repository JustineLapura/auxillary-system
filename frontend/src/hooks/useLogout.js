import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useSnackbar } from "notistack";

export const useLogout = () => {
  const { dispatch } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("User");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });

    // Logout Alert
    enqueueSnackbar("You logged out successfuly", { variant: "success" });
  };

  return { logout };
};
