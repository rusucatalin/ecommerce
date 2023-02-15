import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { logout } from "../../redux-toolkit/slices/usersSlice";
import { Box } from "../Box/Box";
import { OnButton } from "../Buttons/Button";

export function LoginRegister() {
  const dispatch = useAppDispatch();
  const handlelogout = () => {
    dispatch(logout());
  };

  return (
    <Box display="flex" gap={8} justifyContent="left">
      <Box>
        <OnButton>
          <Link to="/">Home</Link>
        </OnButton>
      </Box>
      <Box>
        <OnButton>
          <Link to="/login">Login</Link>
        </OnButton>
      </Box>
      <Box>
        <OnButton>
          <Link to="/register">Register</Link>
        </OnButton>
      </Box>
      <Box>
        <OnButton onClick={handlelogout}>Logout</OnButton>
      </Box>
    </Box>
  );
}
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
