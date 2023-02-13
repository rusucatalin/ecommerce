import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { Box } from "../Box/Box";
import { OnButton } from "../Buttons/Button";
import { Sitemap } from "../Sitemap/Sitemap";

export function Footer() {
  return (
    <>
      <Box padding={10}>
        <h2>Other Referencies</h2>
        <Box>
          <a href="https://www.orange.md/" target="_blank">
            <OnButton>Orange.MD</OnButton>
          </a>
        </Box>

        <Box padding={10}>
          <h2>Social Media</h2>
        </Box>
        <Box padding="10px" display="flex" textAlign="center" gap={10}>
          <a href="https://www.instagram.com/orange/" target="_blank">
            <OnButton width={40} height={40} borderRadius={10}>
              <InstagramOutlined />
            </OnButton>
          </a>
          <a href="https://www.facebook.com/Orange.Moldova" target="_blank">
            <OnButton width={40} height={40} borderRadius={10}>
              <FacebookOutlined />
            </OnButton>
          </a>
        </Box>
      </Box>
      <Sitemap></Sitemap>
    </>
  );
}
