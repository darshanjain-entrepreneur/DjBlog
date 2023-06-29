import React , {useState , useEffect} from 'react'
import axios from "axios";
import {useParams , useNavigate} from "react-router-dom";
import { Button, InputLabel, TextField, Typography , Box } from '@mui/material';


const BlogDetails = () => {

const [blog , setBlog] = useState({});
const id = useParams().id;
const navigate = useNavigate();

const [inputs , setInputs] = useState({});

const getBlogDetail = async () => {

    try {
        const {data} = await axios.get(`/api/v1/blog/getblog/${id}`)

        if(data?.success){
            setBlog(data?.blog)
            setInputs({
                title:data?.blog.title,
                description:data?.blog.description,
                image:data?.blog.image
            })
            


        }





    } catch (error) {
        console.log(error);
    }

  }


  useEffect(() => {

    getBlogDetail()
   
        } , [id])
    console.log(blog);



    const handleChange = (e) => {
          setInputs((prevState) => ({
...prevState,
[e.target.name]:e.target.value
    }))

    }


const handleSubmit = async (e) => {

    e.preventDefault();
try {

    const {data} = await axios.post('/api/v1/blog/createblog', {
        title:inputs.title,
        description:inputs.description,
        image:inputs.image,
        user:id
    })

    if(data?.success){
        alert("blog created successfully")
        navigate('/myblogs')
    }
    
} catch (error) {
    console.log(error);
}

}










  return (
  <>
  <form onSubmit={handleSubmit}>
    <Box border={3} padding={3}  borderRadius={10} margin="auto" boxShadow={'10px 10px 20px #ccc '} 
    display={'flex'} flexDirection={'column'} width={'60%'} marginTop={'30px'}>
        <Typography variant='h2' textAlign={'center'} fontWeight={'bold'}
        padding={3} color="gray">
               Update Blog
        </Typography>
        <InputLabel sx={{mb:1 ,mt:2,fontSize:'24px' , fontWeight:'bold' }}>Title</InputLabel>
        <TextField required name="title" onChange={handleChange} value={inputs.title} margin="normal" variant="outlined"  />

        <InputLabel sx={{mb:1 ,mt:2,fontSize:'24px' , fontWeight:'bold' }}>Description</InputLabel>
        <TextField required name="description" onChange={handleChange} value={inputs.description} margin="normal" variant="outlined"  />

        <InputLabel sx={{mb:1 ,mt:2,fontSize:'24px' , fontWeight:'bold' }}>Image URL</InputLabel>
        <TextField required name="image" onChange={handleChange} value={inputs.image} margin="normal" variant="outlined"  />
        <Button type='submit' color="warning" variant="contained">Update</Button>
    </Box>
 </form>
  </>
  )
}

export default BlogDetails