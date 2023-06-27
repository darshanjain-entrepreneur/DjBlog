import React , {useState} from 'react'
import {Box , Button , Toolbar , AppBar, Typography, Tabs, Tab} from "@mui/material"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {


const isLogin = useSelector(state => state.isLogin)
console.log(isLogin);


const [value , setValue] = useState()

  return (
   <>
   <AppBar position='sticky'>
     <Toolbar>
        <Typography variant='h4'>
           DjBlog
        </Typography>
            {isLogin && (
                <Box display='flex' margin-left={'auto'} marginRight={'auto'}>
                <Tabs textColor='inherit'value={value} onChange={(e , val) => setValue(val)}>
                  <Tab label="Blogs" LinkComponent={Link} to="/blogs"/>
                  <Tab label="My Blogs" LinkComponent={Link} to="/myblogs"/>
                </Tabs>
   
               </Box>
            )}

        <Box display={'flex'} marginLeft='auto'>
                {!isLogin && (<>
                    <Button  sx={{margin:1 , color:"white"}}LinkComponent={Link}to="/login" >Login</Button>
              <Button  sx={{margin:1 , color:"white"}} LinkComponent={Link}to="/register">Register</Button>
                </>)}
        {isLogin && (<>
            <Button  sx={{margin:1 , color:"white"}}>Logout</Button>
        </>)}
        </Box>
     </Toolbar>

   </AppBar>
   
   </>
  )
}

export default Header