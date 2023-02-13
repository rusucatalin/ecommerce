import { Link } from "react-router-dom";
import { Box } from "../Box/Box";
import { OnButton } from "../Buttons/Button";

export function LoginRegister() {
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
    </Box>
  );
}
