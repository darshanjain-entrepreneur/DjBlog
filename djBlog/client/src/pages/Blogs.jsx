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
  {blogs && blogs.map(blog => (
      <BlogCard  title={blog.title} description={blog.description} image={blog.image} 
      username={blog.user.username} time={blog.createdAt}/>
  ))}
   </div>
  )
}

export default Blogs