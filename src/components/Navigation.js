import  Navbar  from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';
import  Form  from 'react-bootstrap/Form';
import  Table  from 'react-bootstrap/Table';
import  Button  from 'react-bootstrap/Button';
import UpdateFood from '../components/UpdateFood';
import {Link} from 'react-router-dom';
function Navigation()
{
    return (

      <>    

<Navbar className='navbar nav navbar-expand-md bg-warning p-3'>
          <a className='navbar-brand'>Foody App</a>
           
           {/* add navbar navigation for routing */}

           <ul className='navbar-link'>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/'>Food Menu</Link> </li>
            <li> <Link to='/foodmenu'>Add Food</Link> </li>
            <li> <Link to='/managefood'>Manage Food</Link> </li>
            {/* <li> <Link to='/updatefood/:{id}' element={<UpdateFood />}>Edit Food</Link> </li>
            <li> <Link to=''>Remove Food</Link> </li> */}
           </ul>

        </Navbar>

        </>
    )
}

export default Navigation;
    
