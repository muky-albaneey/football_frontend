import Fixture from './Fixture';
import Paginations from './Pagination'
import Card from 'react-bootstrap/Card';
import './pagination.css';
// import { NavLink, Outlet } from 'react-router-dom';
import Frame_blog_fix from '../assets/Frame_blog_fix.jpg'

const Blogging = () => {
 
  return (
    <section className='bloggingOverallCon'>
       <main id="topPagination">
        <div className="topPaginationLeft">
        <Card className='cardPAgination cardPAgination_2'>
          <Card.Img variant="top" src={Frame_blog_fix} />
          <Card.Body>
            {/* <Card.Title>Update on player injury</Card.Title> */}
            <Card.Text>
              <h1> Update on player injury</h1><br />
              Men
            </Card.Text>
            
          </Card.Body>
        </Card>
        </div>
        <hr />
        <div className="topPaginationRight">
          <Fixture />
        </div>
       </main>
      <main id="bottomPAgination">
      <Paginations />
      </main>
      
    </section>
  )
}

export default Blogging
