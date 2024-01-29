import Paginations from './Pagination'
import Card from 'react-bootstrap/Card';
import './pagination.css';
import { NavLink, Outlet } from 'react-router-dom';
import Frame_blog_fix from '../assets/Frame_blog_fix.jpg'

const Blogging = () => {
    const active = {
        color: 'red',
        textDecoration: 'underline'
    }
  return (
    <section className='paginationWrapper'>
        <div className="brandPAge">NEWS</div>
        <div className="paginationNav">
        <NavLink id={`pageFN`} to=''>All News <span>|</span></NavLink>
        <NavLink to=''>Men’s News <span>|</span></NavLink>
        <NavLink to=''>Women’s News <span>|</span></NavLink>
        <NavLink to=''>Club News <span>|</span></NavLink>
        {/* <NavLink to=''>NEWS <span>|</span></NavLink> */}
        {/* <NavLink to=''>NEWS <span>|</span></NavLink> */}
        {/* <NavLink to=''>NEWS <span>|</span></NavLink> */}
        </div>
         <div className="topPageHeader">
        <h1 className='linkNews'><NavLink to=''>ALL NEWS</NavLink></h1>
        <h1 className='linkNews'><NavLink to=''>NEXT FIXTURES</NavLink></h1>
        </div>
      <main id="topPAgination">
       
        <div className="paginationLeft">
            
            <Card className='CardBlog'>
            <Card.Img variant="top" src={Frame_blog_fix} />
            <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text>
                <h1>Update on player injury</h1>
                Men
                </Card.Text>                
            </Card.Body>
            </Card>
        </div>
        <div className="paginationRight">
        <NavLink to={`.`} end style={({ isActive }) => isActive ? active : {color : 'black'}} className={`linkPagination_one`}>
          Men
        </NavLink>
        
            <NavLink to={`women`} style={({isActive}) => isActive ? active : {color : 'black'}} className={`linkPagination`}>Women </NavLink>
            <Outlet/>
        </div>
      </main>
      <div className="lineBlog"></div>
      <main id="bottomPAgination">
      <Paginations />
      </main>
      
    </section>
  )
}

export default Blogging
