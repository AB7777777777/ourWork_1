import React from 'react'
import { Button, TextField } from '@mui/material'

const Login = () => {
  return (
    <div>
        <br /><br /> <br />
        <form>  
      <TextField type="text" label="Phone Number, Username, or Email" variant="filled" sx={{width:"480px"}} /> <br /> <br />
      <TextField type="password" label="Password" variant='filled' sx={{width:"480px"}}/> <br /><br />
      <Button variant='contained' type="submit" sx={{width:"480px"}}>Log in</Button> <br />
      </form>
    </div>
  )
}
export default Login
  