import Home from './home_page/Home'
import { createBrowserRouter,Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import ErrorElement from './ErrorElement';
import Layout from './Layout';

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
