import React from 'react'
import { Box, TextField, Button} from '@mui/material'

function Register() {
    return (
        <Box component="form">
            <h2>REGISTER</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" /><br /><br />
            <TextField id="outlined-basic" label="Email" variant="outlined" /><br /><br />
            <TextField id="outlined-basic" label="Password" variant="outlined" /><br /><br />
            <TextField id="outlined-basic" label="Place" variant="outlined" /><br /><br />
            <Button variant="contained" color="success" >Submit</Button><br/><br/>
            <Button variant="contained" color="error" >Clear</Button>
        </Box>
    )
}

export default Register