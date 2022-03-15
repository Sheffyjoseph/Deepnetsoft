import React from 'react'
import {TextField,Button} from '@mui/material'

function Addproduct() {
  return (
    <div>
           <h2>Add Product</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" /><br /><br />
            <TextField id="outlined-basic" label="Price" variant="outlined" /><br /><br />
            <TextField id="outlined-basic" label="Quantity" variant="outlined" /><br /><br />
            <TextField id="outlined-basic" label="Category" variant="outlined" /><br /><br />
            <Button variant="contained" color="success" >Submit</Button>
            
    </div>
  )
}

export default Addproduct