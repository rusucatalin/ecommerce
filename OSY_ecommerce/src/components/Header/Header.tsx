import { Box } from "../Box/Box";
import { Language } from "../Language/Language";
import { LoginRegister } from "../LoginRegister/LoginRegister";

export function Header() {
  return (
    <Box display="flex" justifyContent="space-between">
      {" "}
      <LoginRegister />
      <Language />
    </Box>
  );
}
