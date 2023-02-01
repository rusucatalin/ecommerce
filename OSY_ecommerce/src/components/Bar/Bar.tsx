import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Box } from "../Box/Box";
import { OnButton } from "../Buttons/Button";
import { Search } from "../Search/Search";

// export function Bar() {return <> <HomeOutlined></HomeOutlined> </>  }

export function Bar() {
  return (
    <Box display="flex" gap={4}>
      <Box>
        <OnButton>
          <HomeOutlined></HomeOutlined>
        </OnButton>
      </Box>
      <Box>
        <OnButton>
          <UnorderedListOutlined></UnorderedListOutlined>
        </OnButton>
      </Box>
      <Box>
        <Search width={300}></Search>
      </Box>
      {/* <Box><Input></Input><Search></Search></Box> */}
    </Box>
  );
}
