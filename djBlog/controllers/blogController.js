const blogModel = require("../models/blogModel");



exports.getAllBlogController = async (req , res) => {

    try {
const blogs = await blogModel.find();
if(!blogs){
    return res.status(200).send({
        success:false,
        message: "No blog found"

    })

   
}
return res.status(200).send({
        
    success:true,
    BlogCount:blogs.length,
    message:"all blog list",
    blogs
})
        
    } catch (error) {
        
        console.log(error);
        return res.status(500).send({
            success:true,
            message:"Error in getting blogs",
            error
        })
    }

}

exports.createBlogController = async (req , res) => {

try {
    
    const {title , description , image} = req.body;
    if(!title|| !description || !image ){

        return res.status(400).send({
          success:false,
          message:"Fill all fields"
        })
    }

const newBlog = new blogModel({title , description , image});
await newBlog.save();

return res.status(201).send({
    success:true,
    message:"Blog created successfully",
    newBlog
})

} catch (error) {
    console.log(error);
    return res.status(404).send({
        success: false,
        message:"Error while creating blog",
        error
    })


}

}

exports.updateBlogController = () => {}

exports.getBlogbyIdController = ()  => {};

exports.deleteBlogController = () => {
    
}