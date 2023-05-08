import { useEffect, useState } from 'react';
import {useRef} from 'react';
import axios from 'axios';
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Card  from 'react-bootstrap/Card';
import DynamicAddSidebarMenu from './DynamicAddSidebarMenu';
import SweetAlert from '../components/SweetAlert';
import  Button  from 'react-bootstrap/Button';
import {Form, useNavigate} from 'react-router-dom';


function AddFood()
{
const[ad,setState]=useState(false);
function add()
{
    //console.log('hi');
    setState(true);
}
// store food from user forms 
const foodname=useRef("");
const foodprice=useRef("");
const foodqty=useRef("");
const foodimgurl=useRef("");
const navigate=useNavigate();
// form event handeler
const addFoodHandeler=(e) =>
{
    e.preventDefault();
    var payload=
    {
        nm:foodname.current.value,
        price:foodprice.current.value,
        qty:foodqty.current.value,
        url:foodimgurl.current.value,

    }

    //console.log(payload);

    // data add or post using axios 
    axios.post("http://localhost:4000/foodsmenu",payload).then(()=>{navigate("/");

    });

}


    return (
        <>

{/* Sweet alert messages */}


          <Container  className='w-100 mx-auto'>


          <Row>
       {/* dynamic add food menu list navbar*/} 
        <div className='col-md-4 mt-4'>
          {/* reuse components of add dynamic sidebar menu */}
          <DynamicAddSidebarMenu />   
         </div>        

        <div className='col-md-8 mt-4'>
            
         <form onSubmit={(e)=>addFoodHandeler(e)}>    
            <h1>Add Food here</h1>
            <hr className='border border-1' />
            <div className='input-group mt-3'>
                <input type="text" ref={foodname} placeholder='Enter foodmenu name *' className='form-control' required />
            </div>

            
            <div className='input-group mt-3'>
                <input type="text" ref={foodprice} placeholder='Enter Price *' className='form-control' required />
            </div>

            <div className='input-group mt-3'>
                <input type="number" ref={foodqty} placeholder='Enter qty *' className='form-control' required />
            </div>


            <div className='input-group mt-3'>
                <input type="url" ref={foodimgurl} placeholder='Enter Image url *' className='form-control' />
            </div>


            <div className='input-group mt-3'>

            {ad&&<SweetAlert />}
           <Button type="submit"  className='btn btn-warning w-25' name="addfood">AddFood</Button> 
        
           <Button type="reset" className='btn btn-danger w-25 ms-3' name="addfood">Reset</Button> 
      

           </div>
           </form> 
           </div>  

          
          </Row>
          </Container>


        </>
    )
}

export default AddFood;