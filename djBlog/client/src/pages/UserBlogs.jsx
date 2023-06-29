import React , {useState , useEffect} from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard';
import "../index"

const UserBlogs = () => {

const [blogs , setBlogs] = useState([]);

const getuserblogs = async () => {
try {

const id = localStorage.getItem('userId');

const {data} = await axios.get(`/api/v1/blog/userblog/${id}`)
console.log(data);
if(data?.success){
setBlogs(data?.userBlog.blogs)

}

    
} catch (error) {
    console.log(error);
}
}


useEffect(() => {
    getuserblogs()
} , [])

  return (
    <div>
  {blogs && blogs.length > 0 ?( blogs.map((blog) => (
      <BlogCard isUser={true} id={blog?._id} title={blog?.title} description={blog?.description} image={blog?.image} 
      username={blog?.user?.username} time={blog?.createdAt}/>

  ))):(<div className='hellohidiv'>

<h1 className='hellohi'>You have not created the blog</h1>
  </div>)
  }
   </div>
  )
}

export default UserBlogs