import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import {Link,useNavigate,useParams} from 'react-router-dom';
import DynamicAddSidebarMenu from './DynamicAddSidebarMenu';
import DeleteConfirmation from '../components/DeleteConfirmations';
import UpdateFood from '../components/UpdateFood';
// axios this is an library that used to call api in react js
function FoodMenu()
{
    // destructured of hook 
    const[allFoods, setAllFoods]=useState([]);
    

// show modal 
  const[showModal,setshowModal]=useState(false);
  const[itemToDeleteId,setItemToDeleteId]=useState(0);
  
//display all foods menus
   useEffect(()=>{
           
    // axios.get("http://localhost:4000/foodsmenu").then((response) => {

    //        setAllFoods(response.data);
    // });


    axios.get("http://apicalldbjson.byethost24.com/db.json").then((response) => {

    setAllFoods(response.data);
});

   },[]);


//delete foods menues
const openConfirmDeleteModalHandeler=(id)=>
{
    setshowModal(true);
    setItemToDeleteId(id);
};
 
const hideDeleteModalHandeler=()=>
{

    setshowModal(false);
    setItemToDeleteId(0);
};


// const confirmationDeleteHandler=()=>
// {

//     axios.delete(`http://localhost:4000/foodsmenu/${itemToDeleteId}`).then((response)=>{

//     setAllFoods((previousState)=> {
//         console.log(previousState.id);
//         return previousState.filter((__)=>__.id!==itemToDeleteId);
        
//     });

//     setItemToDeleteId(0);
//     setshowModal(false);

//     });
// };



const confirmationDeleteHandler=()=>
{

    axios.delete(`http://apicalldbjson.byethost24.com/db.json/${itemToDeleteId}`);
    // setAllFoods((previousState)=> {
    //     // console.log(previousState.id);
    //     return previousState.filter((__)=>__.id!==itemToDeleteId);
        
    // });
     // console.log(previousState.id);

    setItemToDeleteId(0);
    setshowModal(false);

    // });
};
const navigate=useNavigate();

    return (
 
 <>

       
<DeleteConfirmation showModal={showModal} hideDeleteModalHandeler={hideDeleteModalHandeler} title='Delete Confirmation' body='Are you sure to Deleted Food Menus' confirmationDeleteHandler={confirmationDeleteHandler}></DeleteConfirmation>

 
         <Container fluid className='p-5'>
        
        
        <Row>
       {/* dynamic add food menu list navbar*/} 
        <div className='col-md-3'>
          {/* reuse components of add dynamic sidebar menu */}
          <DynamicAddSidebarMenu />   
         </div>        
        
        <div className='col-md-9'> 
            <Card className="m-1 p-3 foodmenu">
            <h4>Foods Menu list</h4>
            <Link to="/foodmenu"><Button type='button' className='btn btn-sm btn-warning float-end w-25'>Add Food here</Button></Link>

            <Row>

            {/* add food button */}

            {/* aply to fetch all data or listing of foods menu */}

            {allFoods.map((item)=>(
            <div className='col-md-4 mt-4'  key={item.id}>   
                <div className='card-header' key={item.uniqueId}>{item.name}</div>
                <div className='card-body shadow'>
                
                <p><img src={item.url} alt='foodimages' style={{width:"100%",height:"220px"}} /></p> 
                <p>Price : {item.price}</p>
                <p>Qty :{item.qty}</p>

                 
                <Button className='btn btn-dark text-white' onClick={()=>{navigate(`/updatefood/${item.id}`)}}>Edit</Button>
                
                 &nbsp;&nbsp;
                  
                <Button className='btn btn-danger text-white' onClick={()=>{openConfirmDeleteModalHandeler(item.id)}}>Delete</Button>


                </div>
                </div>

            ))}

                </Row>
            </Card>       
            </div>   
        
        </Row>
        </Container>
        
        
        </>
    )
};
export default FoodMenu