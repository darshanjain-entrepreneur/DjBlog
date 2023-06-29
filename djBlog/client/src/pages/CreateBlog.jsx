import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'

const CreateBlog = () => {

const id = localStorage.getItem('userId');

const navigate = useNavigate();

    const [inputs , setInputs] = useState({
        title:'',
        description:'',
        image:''
    });

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
        toast.success("blog created successfully")
        navigate('/myblogs')
    }else{
        toast.error(data?.message);
    }
    
} catch (error) {
    toast.error(error.message);
}

}

  return (
 <form onSubmit={handleSubmit}>
    <Box border={3} padding={3}  borderRadius={10} margin="auto" boxShadow={'10px 10px 20px #ccc '} 
    display={'flex'} flexDirection={'column'} width={'60%'} marginTop={'30px'}>
        <Typography variant='h2' textAlign={'center'} fontWeight={'bold'}
        padding={3} color="gray">
                Create Blog
        </Typography>
        <InputLabel sx={{mb:1 ,mt:2,fontSize:'24px' , fontWeight:'bold' }}>Title</InputLabel>
        <TextField required name="title" onChange={handleChange} value={inputs.title} margin="normal" variant="outlined"  />

        <InputLabel sx={{mb:1 ,mt:2,fontSize:'24px' , fontWeight:'bold' }}>Description</InputLabel>
        <TextField required name="description" onChange={handleChange} value={inputs.description} margin="normal" variant="outlined"  />

        <InputLabel sx={{mb:1 ,mt:2,fontSize:'24px' , fontWeight:'bold' }}>Image URL</InputLabel>
        <TextField required name="image" onChange={handleChange} value={inputs.image} margin="normal" variant="outlined"  />
        <Button type='submit' color="primary" variant="contained">Submit</Button>
    </Box>
 </form>
  )
}

export default CreateBlog