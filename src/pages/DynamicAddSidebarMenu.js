import React from 'react';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import  Container  from 'react-bootstrap/Container';
// import  Row  from 'react-bootstrap/Row';
import  Card  from 'react-bootstrap/Card';
// import  Button  from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function DynamicAddSidebarMenu()
{
    return (
        <>
          <Card className="m-1 p-3 foodmenu">
            <h5>Dynamic Food Navbar List</h5>
            <hr className='border border-1 border-dark w-75' />
            <ul className='sidebar-link'>
             <li className='dropdown'><Link to="" className='dropdown-toggle mt-2' data-bs-toggle="dropdown">Thai  <i className='bi bi-gear ms-5'></i></Link>
             {/* dropdown menu */}
             <ul className='dropdown-menu p-3'>
             <li><Link to="" className='text-primary' onClick="return confirm('Are you sure to edit menu items')">Edit   <i className='bi bi-pencil ms-5 mt-2'></i></Link></li>  
             <li><Link to="" className='text-danger' onClick="return confirm()=>{Are you sure to delete items}">Delete   <i className='bi bi-trash ms-5 mt-2'></i></Link></li>    

             </ul>

             </li>    

             <li><Link to="" className='dropdown-toggle'>Manchurains  <i className='bi bi-gear ms-5 mt-2'></i></Link></li>    

             <li><Link to="" className='dropdown-toggle mt-2'>Sejvan soup  <i className='bi bi-gear ms-5'></i></Link></li>    

             <li><Link to="" className='dropdown-toggle'>Punjabi  <i className='bi bi-gear ms-5'></i></Link></li>  

             <li><Link to="" className='btn btn-sm btn-warning mt-4 text-dark'>Add New Food menu Items  <i className='bi bi-plus ms-5'></i></Link></li>      
            </ul>  
               

        </Card>
       
        </>
    )
}
export default DynamicAddSidebarMenu;
