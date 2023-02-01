import { Box } from "../Box/Box";
import { OnButton } from "../Buttons/Button";
import { StyledPhonenumber } from "../Phonenumber/Phonenumber";

export function Language() {
  return (
    <Box display="flex" gap={5} justifyContent="right">
      <Box>
        <OnButton>Magazine</OnButton>{" "}
        <OnButton>
          <StyledPhonenumber href="tel:069603066">069603066</StyledPhonenumber>
        </OnButton>
      </Box>
      <Box>
        <OnButton>EN</OnButton> <OnButton>RU</OnButton>
      </Box>
    </Box>
  );
}
