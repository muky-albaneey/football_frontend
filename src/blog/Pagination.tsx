import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import Frame_blog_fix_1 from '../assets/Frame_blog_fix_1.jpg';
import Frame_blog_fix_2 from '../assets/Frame_blog_fix_2.jpg';
import OIP_1 from '../assets/OIP_1.jpg'
import opi_2 from '../assets/opi_2.jpg'


import './pagination.css'
// Mock API data

type DataType ={
    key: React.Key;
    name: string;
    price: string;
    address: string;
    imageUrl: string;
  }
  
const apiData : DataType[] = [
  {
    key: 1,
    name: 'ACM AWAY KIT',
    price: 'John ends the match with a late winner.',
    address: 'New Arrival',
    imageUrl: Frame_blog_fix_1,
  },
  {
    key: 2,
    name: 'ACM HOME KIT',
    price: 'Trip to Willbros Fc',
    address: 'New Arrival',
    imageUrl: Frame_blog_fix_2,
  },
  {
    key: 3,
    name: 'ACM HOME KIT',
    price: 'John ends the match with a late winner.',
    address: 'New Arrival',
    imageUrl: OIP_1,
  },
  {
    key: 4,
    name: 'ACM HOME KIT',
    price: 'Trip to Willbros Fc',
    address: 'New Arrival',
    imageUrl: opi_2,
  },
  // Add more data as needed
];

const ITEMS_PER_PAGE = 2;

function fetchDataFromApi(page) {
  // Assume a real API call here, fetching data based on the page number
  // You can replace this with your actual API call using axios, fetch, etc.
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  return Promise.resolve(apiData.slice(startIdx, endIdx));
}

function Paginations() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // Fetch data from API when the component mounts or when currentPage changes
    fetchDataFromApi(currentPage).then((data) => {
      setCardsData(data);
    });
  }, [currentPage]);
  
  // Create pagination items
  const paginationItems = [];
  for (let number = 1; number <= Math.ceil(apiData.length / ITEMS_PER_PAGE); number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div className='paginationWrapper'>
    <main className='paginationCon'>
    {cardsData.map((card) => (
        <Card key={card.key} className='cardPAgination'>
          <Card.Img variant="top" src={card.imageUrl} />
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>
              <h1> {card.price}</h1><br />
              Men
            </Card.Text>
            
          </Card.Body>
        </Card>
      ))}
    </main>
     

      {/* Pagination */}
      <Pagination className="mt-3">
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
        {paginationItems}
        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(apiData.length / ITEMS_PER_PAGE)} />
      </Pagination>
    </div>
  );
}

export default Paginations;
