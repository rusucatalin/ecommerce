import React from "react";
import { Input, Space } from "antd";
import { ISearchInterface, StyledSearch } from "./Searchstyle";

const { Search } = Input;

const App: React.FC = () => (
  <Space direction="vertical">
    <Search placeholder="input search text" />
  </Space>
);

export { Search };

// interface SearchProps extends ISearchInterface {
//   children: ReactNode;
// }

// export function Search({ children, ...rest }: SearchProps) {
//   return <StyledSearch styles={rest}>{children}</StyledSearch>;
// }
