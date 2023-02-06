import { Box } from "../Box/Box";
import { OnButton } from "../Buttons/Button";
import { StyledPhonenumber } from "../Phonenumber/Phonenumber";
import { Search } from "../Search/Search";

export function Sitemap() {
  return (
    <Box>
      <Box justifyContent="right">
        <div>
          <h3>Cauți ceva? Sună</h3>
        </div>
        <OnButton>
          <StyledPhonenumber href="tel:069603066">069603066</StyledPhonenumber>
        </OnButton>
      </Box>
      <Box display="flex" gap={6}>
        <Search width={500} enterButton></Search>
      </Box>
    </Box>
  );
}
