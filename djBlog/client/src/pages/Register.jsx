import React from 'react'
import {Box , Typography , TextField , Button} from "@mui/material"
import {useNavigate} from "react-router-dom"

const Register = () => {

const navigate = useNavigate();

  return (
 <>
 <Box maxWidth={450} display='flex' flexDirection={'column'}
 alignItems="center"
 justifyContent="center"
 margin="auto"
 marginTop={5}
 boxShadow="10px 10px 20px #ccc"
 padding={3}
 borderRadius={5}
 >
  <Typography variant="h4" 
  padding={3} alignItems={'center'}>

  REGISTER
  </Typography>
  <TextField placeholder='Name' name='name'
  margin={"normal"} type={"text"} required/>
  <TextField placeholder='Email' name='email'
  margin={"normal"} type={"email"} required/>
  <TextField placeholder='Password' name='password'
  margin={"normal"} type={"password"} required/>
 
 
  <Button type='submit' variant={'contained'} color='primary'
  sx={{borderRadius:3 , marginTop:3}} >Submit</Button>

  <Button
 color='primary'
  sx={{borderRadius:3 , marginTop:3}}
  onClick={() => navigate('/login')}
  >Already Register ? Please Login</Button>
 </Box>
 </>
  )
}

export default Register