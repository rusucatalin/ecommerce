import { Box } from "../Box/Box";
import { OnButton } from "../Buttons/Button";
import { StyledPhonenumber } from "../Phonenumber/Phonenumber";

import { InstagramOutlined, FacebookOutlined } from "@ant-design/icons";
export function Sitemap() {
  return (
    <Box padding={10} flexDirection="row">
      <Box justifyContent="right">
        <Box font-family="Arial">
          <h2>Contacts Us</h2>{" "}
        </Box>
        <OnButton>
          <StyledPhonenumber href="tel:+373022844444">
            {" "}
            0228 444 44
          </StyledPhonenumber>
        </OnButton>
        <Box>
          <OnButton>
            {" "}
            <StyledPhonenumber href="tel:069603066">
              {" "}
              069 603 066
            </StyledPhonenumber>
          </OnButton>

          <p></p>
        </Box>
      </Box>
      <Box justifyContent="right" flexDirection="row">
        <h2> Email:</h2>
        <a href="https://mail.google.com" target="_blank">
          {" "}
          <OnButton>boreagolis@gmail.com</OnButton>
        </a>
        <a href="https://mail.google.com" target="_blank">
          {" "}
          <OnButton>cucudaniel@gmail.com</OnButton>
        </a>
        <a href="https://mail.google.com" target="_blank">
          {" "}
          <OnButton>rusucatalin@gmail.com</OnButton>
        </a>
      </Box>
    </Box>
  );
}
