import React from 'react';
import { Input, Space } from 'antd';
import { ISearchInterface, StyledSearch } from './Searchstyle';

const { Search } = Input;

const App: React.FC = () => (
  <Space direction="vertical">
    <Search placeholder="input search text"/>
  </Space>
);

export {Search};