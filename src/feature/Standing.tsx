import Table from 'react-bootstrap/Table';
import './standing.css'
import {  NavLink } from 'react-router-dom';
import OTTASOLO_FC from '../assets/OTTASOLO_FC.jpg';
import BEYOND_LIMIT_FA_1 from '../assets/BEYOND-LIMIT-FA-1.jpg';
import Frame from '../assets/Frame.jpg';
import willbro from '../assets/willbro.jpg'
const Standing = () => {

  const stand =  [
        {
            id : 1,
            name: 'AC MIDLANDS ',
            pts :12,
            p: 12,
            g: 18,
            logo : Frame
        },
        {
            id : 2,
            name: 'WILLBROS FC ',
            pts :22,
            p: 12,
            g: 18,
              logo : willbro
        },
        {
            id : 3,
            name: 'OTTA S FC ',
            pts :22,
            p: 12,
            g: 18,
              logo : OTTASOLO_FC
        },
        {
            id : 4,
            name: 'BEYOND FA ',
            pts :22,
            p: 12,
            g: 18,
              logo : BEYOND_LIMIT_FA_1
        },
      
    ]
    
  return (
    <section id='standingWrapper'>
        <div className="standingHeader">
    <h1>Table</h1>
    <h1>standings</h1>
        </div>
   
      <div className="standingCenter">
            

    <Table striped bordered hover>
      <thead>
        <tr>
          <th className='align'>Pos</th>
          <th style={{textTransform: 'uppercase'}}>Nlo League</th>
          <th className='align'>Pts</th>
          <th className='align'>P</th>
          <th className='align'>G</th>
        </tr>
      </thead>
      <tbody>
       {
        stand.map((item)=>(
            <tr>
            <td className='align'>{item.id++}</td>
            <td><img src={(item.logo && item.logo)} alt=""  className='standingLogo'/> {item.name}</td>
            <td className='align'>{item.pts}</td>
            <td className='align'>{item.p}</td>
            <td className='align'>{item.g}</td>
          
            
          </tr>
        ))
       }        
      </tbody>
    </Table>
    <div className="standingFooter">
        <NavLink to='club_fixtures/standing_page'>See all standing</NavLink>
      </div>
      </div>
     
     
    </section>
  )
}

export default Standing
