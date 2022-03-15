import React from 'react'
import { TextField , Button } from '@mui/material'


function Login() {
    return (
        <div>
            <h2>LOGIN</h2>
            <TextField id="outlined-basic" label="Email" variant="outlined" /><br /><br />
            <TextField id="outlined-basic" label="Password" variant="outlined" /><br /><br />
            <Button variant="contained" color="success" >Submit</Button><br /><br />
            <Button variant="contained" color="success">Register</Button>
        </div>
    )
}

export default Login