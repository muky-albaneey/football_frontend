import Fixture from './Fixture';
import Paginations from './Pagination'
import Card from 'react-bootstrap/Card';
import './pagination.css';
// import { NavLink, Outlet } from 'react-router-dom';
import Frame_blog_fix from '../assets/Frame_blog_fix.jpg'
import { NavLink } from 'react-router-dom';

const Blogging = () => {
 
  return (
    <section className='bloggingOverallCon'>
      <div className="blogingNavigation">
        <h1>NEWS</h1>
      <nav>
      <NavLink to={`All News`} >All News </NavLink>
      <NavLink to={`MenNews`} >Men’s News </NavLink>
      <NavLink to={`womensNews`} >Women’s News </NavLink>
      <NavLink to={`ClubNews`} >Club News </NavLink>    
        </nav> 
      </div>
      <div className="nextFitures">NEXT FIXTURES</div>
       <main id="topPagination">
        
        <div className="topPaginationLeft">
        <Card className='cardPAgination cardPAgination_2'>
          <Card.Img variant="top" src={Frame_blog_fix} />
          <Card.Body>
            {/* <Card.Title>Update on player injury</Card.Title> */}
            <Card.Text>
            <div className="pageText">
            <h1> Update on player injury</h1> 
              <h6>Men</h6>
            </div>
             
              
            </Card.Text>
            
          </Card.Body>
        </Card>
        </div>
       
        <div className="topPaginationRight">
          <Fixture />
        </div>
       </main>
       <div className="lines">
        Yesterday
        </div>
      <main id="bottomPAgination">
      <Paginations />
      </main>
      
    </section>
  )
}

export default Blogging
