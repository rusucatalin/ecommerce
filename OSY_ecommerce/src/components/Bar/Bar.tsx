import {
  HomeOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Affix } from "antd";
import { ReactNode } from "react";
import { Box } from "../Box/Box";
import { OnButton } from "../Buttons/Button";
import { Search } from "../Search/Search";
import { IBarInterface } from "./Barstyle";

interface BarProps extends IBarInterface {
  children: ReactNode;
}

// export function Bar() {return <> <HomeOutlined></HomeOutlined> </>  }

export function Bar({}) {
  return (
    <Affix offsetTop={50} onChange={(affixed) => console.log(affixed)}>
      <>
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
          <Box display="flex" gap={6}>
            <Search width={500} enterButton></Search>
          </Box>
          <Box>
            <OnButton>
              <ShoppingCartOutlined />
            </OnButton>
          </Box>
          <Box>
            <OnButton>
              <UserOutlined />
            </OnButton>
          </Box>
          {/* <Box><Input></Input><Search></Search></Box> */}
        </Box>
      </>
    </Affix>
  );
}
