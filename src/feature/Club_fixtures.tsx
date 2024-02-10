
import { NavLink, Outlet } from 'react-router-dom'
import './feature.css'
const Club_fixtures = () => {
    const active = {
        backgroundColor: '#FFFFFF',
        color: '#26050d',
        textDecoration: 'underline'
    }
  return (
    <div id='club_fixtures'>
      <main className="club_fixtures_header">
        <NavLink style={({isActive}) => isActive ? active :  {color: '#FFFFFF'}} className='f_link' to='.' end >Fixtures</NavLink>
        <NavLink style={({isActive}) => isActive ? active : {color: '#FFFFFF'}} className='t_link' to='standing_page'>Table</NavLink>        
      </main>
      <Outlet />
    </div>
  )
}

export default Club_fixtures
