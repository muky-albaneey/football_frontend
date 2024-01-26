import Table from 'react-bootstrap/Table';
import './standing.css'
import { Link } from 'react-router-dom';
import Frame from '../assets/Frame.jpg'
import willbro from '../assets/willbro.jpg'
import fcb from '../assets/fcb.png'
import bayern from '../assets/bayern.png'
const Standing = () => {

  const stand =  [
        {
            id : 1,
            name: 'acm ',
            pts :12,
            p: 12,
            g: 18,
            logo : Frame
        },
        {
            id : 2,
            name: 'fc club ',
            pts :22,
            p: 12,
            g: 18,
              logo : willbro
        },
        {
            id : 3,
            name: 'fc club ',
            pts :22,
            p: 12,
            g: 18,
              logo : fcb
        },
        {
            id : 4,
            name: 'fc club ',
            pts :22,
            p: 12,
            g: 18,
              logo : bayern
        },
        {
            id : 5,
            name: 'fc club ',
            pts :22,
            p: 12,
            g: 18,
              logo : Frame
        },
        {
            id : 6,
            name: 'fc club ',
            pts :22,
            p: 12,
            g: 18,
            logo : fcb
        }
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
