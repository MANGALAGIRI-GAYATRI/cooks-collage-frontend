import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  // get blog details
  const getBlogDetail = useCallback(async () => {
    try {
      const { data } = await axios.get(`https://cooks-collage.onrender.com/api/v1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data?.blog.title,
          description: data?.blog.description,
          image: data?.blog.image,
          content: data?.blog.content,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getBlogDetail();
  }, [getBlogDetail]);

  // input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`https://cooks-collage.onrender.com/api/v1/blog/update-blog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        content: inputs.content,
        user: id,
      });
      if (data?.success) {
        alert("Blog Updated");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(blog);

  return (
    <form onSubmit={handleSubmit}>
      <Box
        width={"50%"}
        border={3}
        borderRadius={10}
        padding={3}
        margin="auto"
        boxShadow={"10px 10px 20px #ccc"}
        display="flex"
        flexDirection={"column"}
        marginTop="30px"
        bgcolor="white"
      >
        <Typography
          variant="h2"
          textAlign={"center"}
          fontWeight="bold"
          padding={3}
          color="gray"
        >
          Update A Post
        </Typography>
        <InputLabel
          sx={{ fontFamily: "Georgia, serif", mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
        >
          Title
        </InputLabel>
        <TextField
          name="title"
          value={inputs.title}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <InputLabel
          sx={{ fontFamily: "Georgia, serif", mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
        >
          Description
        </InputLabel>
        <TextField
          name="description"
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <InputLabel
          sx={{ fontFamily: "Georgia, serif", mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
        >
          Image URL
        </InputLabel>
        <TextField
          name="image"
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <InputLabel
          sx={{ fontFamily: "Georgia, serif", mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold", color: "black" }}
        >
          Content
        </InputLabel>
        <TextField
          name="content"
          value={inputs.content}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <Button type="submit" color="warning" variant="contained">
          UPDATE
        </Button>
      </Box>
    </form>
  );
};

export default BlogDetails;