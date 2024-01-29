import Paginations from './Pagination'
// import Card from 'react-bootstrap/Card';
import './pagination.css';
// import { NavLink, Outlet } from 'react-router-dom';
// import Frame_blog_fix from '../assets/Frame_blog_fix.jpg'

const Blogging = () => {
    // const active = {
    //     color: 'red',
    //     textDecoration: 'underline'
    // }
  return (
    <section className='think'>
       
      <main id="bottomPAgination">
      <Paginations />
      </main>
      
    </section>
  )
}

export default Blogging
