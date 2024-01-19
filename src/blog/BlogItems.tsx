import React from 'react';
import { Avatar, List } from 'antd';

const data = [
  {
    title: 'This is just a place holder text.',
    image : '../../public/Ellipse_6.jpg',
    desc : 'Judit Agu'
  },
  {
    title: 'This is just a place holder text.',
    image : '../../public/Ellipse_7.jpg',
    desc : 'Brown Salami'
  },
  {
    title: 'This is just a place holder text.',
    image : '../../public/Ellipse_8.jpg',
    desc : 'Tunde Ololade'
  },
  {
    title: 'This is just a place holder text.',
    image : '../../public/Ellipse_9.jpg',
    desc : 'Kolada Da-silva'
  },
];

const BlogItems: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item className='blogTexts'>
        <List.Item.Meta
          avatar={<Avatar src={item.image} />}
          title={item.title}
          description={item.desc}
        
        />
      </List.Item>
    )}
  />
);

export default BlogItems;