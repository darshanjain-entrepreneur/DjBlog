import React, { useEffect , useState } from 'react'
import axios from "axios"
import  BlogCard  from '../components/BlogCard';

const Blogs = () => {

const [blogs , setBlogs] = useState([]);

const getallBlogs = async  () => {

try {
const {data} = await axios.get('/api/v1/blog/allblog')
console.log(data);
if(data?.success){
  setBlogs(data?.blogs)
}

  
} catch (error) {
  console.log(error);
}

}

useEffect(() => {
  getallBlogs()
} , [])



  return (
   
    <div>
    {blogs && blogs.length > 0 ?( blogs.map((blog) => (
        <BlogCard  isUser={localStorage.getItem('userId') === blog?.user?._id}id={blog?._id} title={blog?.title} description={blog?.description} image={blog?.image} 
        username={blog?.user?.username} time={blog?.createdAt}/>
  
    ))):(<h1>No Blogs Present</h1>)
    }
     </div>
  )
}

export default Blogs