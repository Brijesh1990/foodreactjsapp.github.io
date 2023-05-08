import {useState,useEffect} from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';
import  Form  from 'react-bootstrap/Form';
import  Table  from 'react-bootstrap/Table';
import  Button  from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import FoodMenu from './pages/FoodMenu';

function App()
{

  const [loading,setloading] = useState(true); // Pre-loader before page renders

   // Pre-loader
   useEffect(() => {
    setTimeout(() => {
        setloading(false);
    }, 2000);
}, [])


  return ( 
        
    <>

    {

     loading ?  
     
     <div className='text-center mt-5'>
     <div className="spinnerContainer">
     <div className="spinner-grow text-primary" role="status">
         <span className="visually-hidden">Loading...</span>
     </div>
     <div className="spinner-grow text-secondary" role="status">
         <span className="visually-hidden">Loading...</span>
     </div>
     <div className="spinner-grow text-success" role="status">
         <span className="visually-hidden">Loading...</span>
     </div>
     <div className="spinner-grow text-danger" role="status">
         <span className="visually-hidden">Loading...</span>
     </div>
     <div className="spinner-grow text-warning" role="status">
         <span className="visually-hidden">Loading...</span>
     </div>
 </div>
 </div>
  : 

 <>

 
        {/* card menu */}
        <FoodMenu />
    </>
  } 
       
    </>

  )
}
export default App;