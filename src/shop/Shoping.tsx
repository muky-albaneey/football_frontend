// Import necessary dependencies and assets
import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import { TbCurrencyNaira } from 'react-icons/tb';
import { GiJesterHat } from 'react-icons/gi';
import OIP_shop_1 from '../assets/OIP_shop_1.jpg';
import OIP_shop_2 from '../assets/OIP_shop_2.jpg';
import OIP_shop_3 from '../assets/OIP_shop_3.jpg';
import OIP_shop_4 from '../assets/OIP_shop_4.jpg';
import home from '../assets/home.jpg';
import away from '../assets/away.jpg';
import './Shoping.css'; // Import a CSS file for styling

// Define the data structure
interface DataType {
  key: React.Key;
  name: string;
  price: string;
  address: string;
  imageUrl: string;
}

// Define the data array
const data: DataType[] = [
  {
    key: 1,
    name: 'ACM AWAY KIT',
    price: '6,500.00',
    address: 'New Arrival',
    imageUrl: OIP_shop_3,
  },
  {
    key: 2,
    name: 'ACM HOME KIT',
    price: '6,500.00',
    address: 'New Arrival',
    imageUrl: OIP_shop_2,
  },
  {
    key: 3,
    name: 'ACM HOME KIT',
    price: '6,500.00',
    address: 'New Arrival',
    imageUrl: OIP_shop_4,
  },
  {
    key: 4,
    name: 'ACM HOME KIT',
    price: '6,500.00',
    address: 'New Arrival',
    imageUrl: home,
  },
  {
    key: 5,
    name: 'ACM HOME KIT',
    price: '6,500.00',
    address: 'New Arrival',
    imageUrl: away,
  },
  {
    key: 6,
    name: 'ACM HOME KIT',
    price: '6,500.00',
    address: 'New Arrival',
    imageUrl: OIP_shop_1,
  },
];

// Define a function to handle viewing details
// const handleViewDetails = (record: DataType) => {
//   console.log('View details for:', record);
// };

// Define the CardComponent
const CardComponent: React.FC<{ data: DataType; image: string }> = ({ data, image }) => (
  <Card
    className='custom-card'
    cover={<img alt="example" src={image} className='img_card' />}
    style={{ borderBottom: '1px solid #e8e8e8' }}
    // actions={[
    //   <Button style={{ backgroundColor: 'rgb(149, 4, 4)', color: 'aliceblue' }} key="view" onClick={() => handleViewDetails(data)}>
    //     SHOP
    //   </Button>,
    // ]}
  >
    <Card.Meta
      title={data.name}
      description={
        <span>
          <TbCurrencyNaira /> {data.price},<br />
          <GiJesterHat /> {data.address}
        </span>
      }
    />
  </Card>
);

// Define the Shoping component
const Shoping: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;

  // Handle page change
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Get the selected data based on the current page
  const selectedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="conShop">
      <div className="shoping-cards">
        {selectedData.map((item) => (
          <div key={item.key} className="shoping-card-container">
            <CardComponent data={item} image={item.imageUrl} />
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
        />
      </div>
    </div>
  );
};

export default Shoping;
