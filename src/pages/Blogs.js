import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from "../components/BlogCard";
import './Blog.css';
import SearchIcon from "@mui/icons-material/Search";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get('https://cooks-collage.onrender.com/api/v1/blog/all-blogs');
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ display: 'flex',paddingTop: '5px',justifyContent: 'center',flexDirection: 'column', alignItems:'center'}}>
      <div style={{ marginBottom: '10px' }}>
        <SearchIcon style={{ marginRight: '5px', color: 'black',fontSize:"30px"}} />
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            width: '300px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            alignItems: 'center' ,
          }}
        />
      </div>
      {filteredBlogs.map((blog) => (
        <BlogCard
          key={blog?._id}
          id={blog?._id}
          isUser={localStorage.getItem("userId") === blog?.user?._id}
          title={blog?.title}
          description={blog?.description}
          image={blog?.image}
          username={blog?.user?.username}
          time={blog.createdAt}
        />
      ))}
    </div>
  );
}

export default Blogs;