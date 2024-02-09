import React from 'react';
import { Image } from 'antd';
import home from '../assets/home.jpg';
import away from '../assets/away.jpg';
import './Shoping.css'; 

const Kit_img: React.FC = () => (
  <Image.PreviewGroup
    items={[
        away,  
        home,
    //   'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    //   'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
    ]}
  >
    <Image
    //   width={200}
    id='kitImg'
      src={home}
    />
  </Image.PreviewGroup>
);

export default Kit_img;