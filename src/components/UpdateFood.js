import { useEffect, useRef } from 'react';
import axios from 'axios';
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Card  from 'react-bootstrap/Card';
import DynamicAddSidebarMenu from '../pages/DynamicAddSidebarMenu';
import SweetAlert from '../components/SweetAlert';
import  Button  from 'react-bootstrap/Button';
import {Form, useNavigate, useParams} from 'react-router-dom';
// update function
function UpdateFood()
{

//edit  food from user forms 
// const [food,setData]=us
const name=useRef("");
const price=useRef("");
const qty=useRef("");
const url=useRef("");
const {id}=useParams();
const navigate=useNavigate();
useEffect(()=>{

    axios.get(`http://apicalldbjson.byethost24.com/db.json/${id}`).then((response)=> {
        name.current.value=response.data.name;
        price.current.value=response.data.price;
        qty.current.value=response.data.qty;
        url.current.value=response.data.url;
        //navigate("/updatefood");
       
    });

},[]);

// form event handeler
const updateFoodHandeler=(e) =>
{
    e.preventDefault();
    var payload=
    {
        name:name.current.value,
        price:price.current.value,
        qty:qty.current.value,
        url:url.current.value,
    };
    //console.log(payload);
    // data add or post using axios 
    axios.put(`http://localhost:4000/foodsmenu/${id}`,payload).then(()=>{
        navigate("/");
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
     <form>    
        <h1>Edit Food here</h1>
        <hr className='border border-1' />
        <div className='input-group mt-3'>
            <input type="text" ref={name} placeholder='Enter foodmenu name *' className='form-control' required />
        </div>

        
        <div className='input-group mt-3'>
            <input type="text" ref={price} placeholder='Enter Price *' className='form-control' required />
        </div>

        <div className='input-group mt-3'>
            <input type="number" ref={qty} placeholder='Enter qty *' className='form-control' required />
        </div>


        <div className='input-group mt-3'>
            <input type="url" ref={url} placeholder='Enter Image url *' className='form-control' />
        </div>
        <div className='input-group mt-3'>
       <Button type="submit"  className='btn btn-warning w-25' onClick={updateFoodHandeler}>Update</Button> 
       <Button type="reset" className='btn btn-danger w-25 ms-3' name="addfood">Reset</Button> 
  

       </div>
       </form> 
       </div>  

      
      </Row>
      </Container>


    </>
)
}

export default UpdateFood;