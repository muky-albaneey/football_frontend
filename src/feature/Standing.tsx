import Table from 'react-bootstrap/Table';
import './standing.css'
import { Link } from 'react-router-dom';
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
          <th></th>
          <th style={{textTransform: 'uppercase'}}>Nlo League</th>
          <th>Pts</th>
          <th>P</th>
          <th>G</th>
        </tr>
      </thead>
      <tbody>
       {
        stand.map((item)=>(
            <tr>
            <td>{item.id++}</td>
            <td><img src={(item.logo && item.logo)} alt=""  className='standingLogo'/> {item.name}</td>
            <td>{item.pts}</td>
            <td>{item.p}</td>
            <td>{item.g}</td>
          
            
          </tr>
        ))
       }        
      </tbody>
    </Table>
      </div>
      <div className="standingFooter">
        <Link to=''>See all standing</Link>
      </div>
     
    </section>
  )
}

export default Standing
