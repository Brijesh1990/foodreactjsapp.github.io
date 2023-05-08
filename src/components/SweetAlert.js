import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
function onConfirm()
{
    
}
function onCancel()
{
    
}
function Sweet()
{
    return (
    <> 
   <SweetAlert success title="Good job!" onConfirm={onConfirm}  onCancel={onCancel}>
  You clicked the button!
  </SweetAlert>

    </>
    )
}

export default Sweet