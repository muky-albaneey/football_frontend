import Home from './home_page/Home'
import { createBrowserRouter,Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import ErrorElement from './ErrorElement';
import Layout from './Layout';
import About from './about/About';
import Fan from './fan/Fan';

import Contact from './contact/Contact';
import Shop from './shop/Shop';
import Blogging from './blog/Blogging';
import Fixture from './blog/Fixture';
import Kit from './shop/Kit';
import Login from './auth/Login';
import Partners from './footer/Partners';
import Customize from './shop/Customize';
import ContinueCheckOut from './shop/ContinueCheckOut';
import Checkout from './shop/Checkout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/'
          errorElement={<ErrorElement />}
          loader={async () => {
            return null;
          }}
          element={<Layout />}
        >
          <Route
            index
            errorElement={<ErrorElement />}
            loader={async () => {
              return null;
            }}
            element={<Home />}
          />
  
          <Route
            path='about'
            errorElement={<ErrorElement />}
            element={<About />}
          />
          <Route
            path='fan'
            errorElement={<ErrorElement />}
            element={<Fan />}
          />
          <Route
            path='blog'
            errorElement={<ErrorElement />}
            element={<Blogging />}
          >
            <Route
              index
              errorElement={<ErrorElement />}
              element={<Fixture />}
            />
          </Route>
          <Route
            path='contact'
            errorElement={<ErrorElement />}
            element={<Contact />}
          />
          <Route
            path='kit'
            errorElement={<ErrorElement />}
            element={<Kit />}
          />
            <Route
            path='customize'
            errorElement={<ErrorElement />}
            element={<Customize />}
          />
             <Route
            path='continueCheckOut'
            errorElement={<ErrorElement />}
            element={<ContinueCheckOut />}
          />
            <Route
            path='partners'
            errorElement={<ErrorElement />}
            element={<Partners />}
          />
          <Route
            path='shop'
            errorElement={<ErrorElement />}
            element={<Shop />}
          />
               <Route
            path='checkout'
            errorElement={<ErrorElement />}
            element={<Checkout />}
          />
        </Route>
  
        {/* Separate route for the login page without the layout */}
        <Route
          path='login'
          errorElement={<ErrorElement />}
          element={<Login />}
        />
      </>
    )
  );
  
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/'  errorElement={<ErrorElement />} 
  //     loader={async ()=>{
  //       return null
  //     }} element={<Layout />}>
  //        <Route index  errorElement={<ErrorElement />}  
  //       loader={async ()=>{
  //         return null
  //       }}element={<Home />} />

  //       <Route path='about' errorElement={<ErrorElement />} element={<About />} />
  //       <Route path='fan' errorElement={<ErrorElement />} element={<Fan />} />
  //       <Route path='blog' errorElement={<ErrorElement />} element={<Blogging />} >
  //         <Route index errorElement={<ErrorElement />} element={<Fixture />} />
  //       </Route>
  //       <Route path='contact' errorElement={<ErrorElement />} element={<Contact />} />
  //       <Route path='kit' errorElement={<ErrorElement />} element={<Kit />} />
  //       <Route path='shop' errorElement={<ErrorElement />} element={<Shop />} />
  //       <Route path='login' errorElement={<ErrorElement />} element={<Login />} />        
  //     </Route>
  //   ))

  return (
    <>
     <RouterProvider router={router} />      
      {/* <Home />       */}
    </>
  )
}

export default App
