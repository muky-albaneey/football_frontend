// Searching.jsx

import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import './search.css';

const { Search } = Input;

const customSuffix = (
  <AudioOutlined
    style={{
      fontSize: 26,
      color: '#1677ff',
      height: '40px', // Adjust the height of the search icon
      lineHeight: '40px', // Align the icon vertically within the input
    }}
  />
);

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Searching: React.FC = () => (
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      className='searching'
      suffix={customSuffix}
    />
  </Space>
);

export default Searching;
