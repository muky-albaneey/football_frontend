import { BiUpArrowAlt } from "react-icons/bi"; 
import { BiDownArrowAlt } from "react-icons/bi"; 

import React from 'react';
import { Card, Button, Pagination } from 'antd';
import { TbCurrencyNaira } from 'react-icons/tb';
import { GiJesterHat } from 'react-icons/gi';


import home from '../assets/home.jpg';
import away from '../assets/away.jpg';
import './Shoping.css';

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
    className='custom-card'
    cover={<img alt="example" src={image} className='img_card' />}
    style={{ borderBottom: '1px solid #e8e8e8', paddingBottom: '16px' }}
    actions={[
      <Button style={{ backgroundColor: 'rgb(149, 4, 4)', color: 'aliceblue' }} key="view" onClick={() => handleViewDetails(data)}>
        SHOP
      </Button>,
    ]}
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

const Shoping_two: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [nav, setNav] = React.useState(true);
  const [navs, setNavs] = React.useState(true);
  const pageSize = 1;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const selectedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className='conShop'>
      <div className="sided">
     
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={pageSize}
          onChange={onPageChange}
          className={`pagination_two`}
          style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}
        />
      </div>

      <div className="shoping-cards">
        {selectedData.map((item) => (
          <div key={item.key} className="shoping-card-container">
            <CardComponent data={item} image={away} />
            <CardComponent data={item} image={home} />
          </div>
        ))}
      </div>
      <div className="dropDown">
      <div className="rightShopping">
        <button onClick={()=>setNav(!nav)} className={nav === true ? `hideBtn normsBtn_second` : `normsBtn normsBtn_second`}>ALL DEPARTMENTS {nav === true ? <BiDownArrowAlt/>:<BiUpArrowAlt />}</button>
        <div className={nav === true ? `hide` : `drops`}>
            <ul>
                <li>one</li>
                <li>one</li>
                <li>onev</li>
                <li>onev</li>
                <li>onev</li>
                <li>onev</li>
            </ul>
        </div>
        
      </div>
      <div className="centerShopping">
        <button onClick={()=>setNavs(!navs)} className={navs === true ? `hideBtn` : `normsBtn`}>New Arrival  {navs === true ? <BiDownArrowAlt/>:<BiUpArrowAlt />}</button>
        <div className={navs === true ? `hide` : `drops`}>
            <ul>
                <li>one</li>
                <li>one</li>
                <li>onev</li>
                <li>onev</li>
                <li>onev</li>
                <li>onev</li>
            </ul>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default Shoping_two;
