import React from 'react';
import { Avatar, List } from 'antd';
import Ellipse_6 from '../assets/Ellipse_6.jpg'
import Ellipse_7 from '../assets/Ellipse_7.jpg'
import Ellipse_8 from '../assets/Ellipse_8.jpg'
import Ellipse_9 from '../assets/Ellipse_9.jpg'
const data = [
  {
    title: 'This is just a place holder text.',
    image : Ellipse_6,
    desc : 'Judit Agu'
  },
  {
    title: 'This is just a place holder text.',
    image : Ellipse_7,
    desc : 'Brown Salami'
  },
  {
    title: 'This is just a place holder text.',
    image : Ellipse_8,
    desc : 'Tunde Ololade'
  },
  {
    title: 'This is just a place holder text.',
    image : Ellipse_9,
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