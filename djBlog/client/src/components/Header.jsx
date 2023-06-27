import React , {useState} from 'react'
import {Box , Button , Toolbar , AppBar, Typography, Tabs} from "@mui/material"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
   <>
   <AppBar position='sticky'>
     <Toolbar>
        <Typography variant='h4'>
           DjBlog
        </Typography>
            <Box display={'flex'} margin-left={'auto'} marginRight={'auto'}>
             <Tabs textColor='inherit'>

             </Tabs>

            </Box>


        <Box display={'flex'} marginLeft='auto'>
              <Button  sx={{margin:1 , color:"white"}}LinkComponent={Link}to="/login" >Login</Button>
              <Button  sx={{margin:1 , color:"white"}} LinkComponent={Link}to="/register">Register</Button>
              <Button  sx={{margin:1 , color:"white"}}>Logout</Button>
        </Box>
     </Toolbar>

   </AppBar>
   
   </>
  )
}

export default Header