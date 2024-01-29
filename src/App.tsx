import Home from './home_page/Home'
import { createBrowserRouter,Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import ErrorElement from './ErrorElement';
import Layout from './Layout';
import About from './about/About';
import Fan from './fan/Fan';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import Shop from './shop/Shop';
import Blogging from './blog/Blogging';
import Fixture from './blog/Fixture';

function App() {
    
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'  errorElement={<ErrorElement />} 
      loader={async ()=>{
        return null
      }} element={<Layout />}>
         <Route index  errorElement={<ErrorElement />}  
        loader={async ()=>{
          return null
        }}element={<Home />} />

        <Route path='about' errorElement={<ErrorElement />} element={<About />} />
        <Route path='fan' errorElement={<ErrorElement />} element={<Fan />} />
        <Route path='blog' errorElement={<ErrorElement />} element={<Blogging />} >
          <Route index errorElement={<ErrorElement />} element={<Fixture />} />
        </Route>
        <Route path='contact' errorElement={<ErrorElement />} element={<Contact />} />
        <Route path='shop' errorElement={<ErrorElement />} element={<Shop />} />
        {/* <Route path='pagination' errorElement={<ErrorElement />} element={<Blogging />} /> */}
      </Route>
    ))

  return (
    <>
     <RouterProvider router={router} />      
      {/* <Home />       */}
    </>
  )
}

export default App
