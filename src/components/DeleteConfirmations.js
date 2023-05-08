import  Button  from "react-bootstrap/Button";
import  Modal  from "react-bootstrap/Modal";

function DeleteConfirmation(props)
{
   return (
        <>
          <Modal  show={props.showModal} onHide={()=>{props.hideDeleteModalHandeler();}}>

         <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>   
         </Modal.Header>       

         <Modal.Footer>
          <Button variant="secandory" onClick={()=>{props.hideDeleteModalHandeler();}}>Close</Button>   
         
          <Button variant="danger" onClick={()=>{props.confirmationDeleteHandler();}}>Delete confirm</Button>   
         
         </Modal.Footer>
            
          </Modal>
                  
        </>

   );
}

export default DeleteConfirmation;