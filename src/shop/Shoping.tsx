import { GiJesterHat } from "react-icons/gi"; 
import { TbCurrencyNaira } from "react-icons/tb"; 
import React, { useState } from 'react';
import { Card, Button,  Pagination } from 'antd';

import home from '../assets/home.jpg';
import away from '../assets/away.jpg';


interface DataType {
  key: React.Key;
  name: string;
  price: string;
  address: string;
  imageUrl: string;
}


const data: DataType[] = [
  {
    key: 1,
    name: 'ACM AWAY KIT',
    price: '6,500.00',
    address: 'New Arrival',
    imageUrl: away,
  },
  {
    key: 2,
    name: 'ACM HOME KIT',
    price: '6,500.00',
    address: 'New Arrival',
    imageUrl: home,
  },
  {
    key: 3,
    name: 'ACM HOME KIT',
    price: '6,500.00',
    address: 'New Arrival',
    imageUrl: away,
  },
  
];

const handleViewDetails = (record: DataType) => {
  console.log('View details for:', record);
  
};

const CardComponent: React.FC<{ data: DataType; image: string }> = ({ data, image }) => (
  <Card
    className='custom-card' // Use a custom class for styling
    cover={<img alt="example" src={image} className='img_card' />}
    style={{ borderBottom: '1px solid #e8e8e8', paddingBottom: '16px' }}
    actions={[
      <Button style={{backgroundColor : 'rgb(149, 4, 4)', color: 'aliceblue'}} key="view" onClick={() => handleViewDetails(data)}>
       SHOP
      </Button>,
    ]}
  >
    <Card.Meta  
    title={data.name}
    description={
      <span>
          <TbCurrencyNaira />  {data.price},<br />
          <GiJesterHat />  {data.address}
      </span>
      }
      
    />
  </Card>
);

const Shoping: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 1;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const selectedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
    <div className="conShop">
      <div className="shoping-cards">
        {selectedData.map((item) => (
          <div key={item.key} className="shoping-card-container">
            <CardComponent data={item} image={away}  />
            <CardComponent data={item} image={home}  />
          </div>
        ))}
      </div>
    <div className="controls">
    <Pagination
        current={currentPage}
        total={data.length}
        pageSize={pageSize}
        onChange={onPageChange}
        className={`pagination_one`}
        // id='pagination_bottom'
        // style={{ marginTop: 16, textAlign: 'center' }}
      />
    </div>
    </div>
  );
};

export default Shoping;
