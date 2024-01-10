import React from 'react'
import Card from 'react-bootstrap/Card';
import './news.css'
import GridExample from './Cards';
import BasicExample from './Cards_2';
const News = () => {
  return (
   <section className="newsCon">
    <div className="leftCon">
      <BasicExample />
    </div>
    <div className="rightCon">
    <GridExample />
    </div>
   </section>
  )
}

export default News;