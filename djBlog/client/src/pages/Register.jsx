import React , {useState} from 'react'
import {Box , Typography , TextField , Button} from "@mui/material"
import {useNavigate} from "react-router-dom"

const Register = () => {

const navigate = useNavigate();
const [inputs , setInputs] = useState({
  name:'',
  email:'',
  password:''
})

const handleChange = (e) => {
  setInputs((prevState) => ({
    ...prevState ,
    [e.target.name]:e.target.value}
  ))
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs);

}


  return (
 <>
 <form onSubmit={handleSubmit}>
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
  margin={"normal"} type={"text"} required value={inputs.name} onChange={handleChange}/>
  <TextField placeholder='Email' name='email'
  margin={"normal"} type={"email"} required value={inputs.email} onChange={handleChange}/>
  <TextField placeholder='Password' name='password'
  margin={"normal"} type={"password"} required value={inputs.password} onChange={handleChange}/>
 
 
  <Button type='submit' variant={'contained'} color='primary'
  sx={{borderRadius:3 , marginTop:3}} >Submit</Button>

  <Button
 color='primary'
  sx={{borderRadius:3 , marginTop:3}}
  onClick={() => navigate('/login')}
  >Already Register ? Please Login</Button>
 </Box>
 </form>
 </>
  )
}

export default Register