import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { IconButton, Box, Typography, Card, CardContent, CardMedia, TextField, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from "react-redux";
const BlogContent = () => {
  const username = useSelector((state) => state.username) || localStorage.getItem('username');
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const currentDate = new Date();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const { data } = await axios.get(`https://cooks-collage.onrender.com/api/v1/blog/get-blog/${id}`);
        if (data?.success) {
          setBlog(data?.blog);
          setComments(data?.blog.comment || []); // Assuming your blog object has a 'comments' field
        }
      } catch (error) {
        console.log(error);
      }
    };

    getBlog();
  }, [id]);

  const handleGoBack = () => {
    navigate('/blogs');
  };

  const handleCommentInputChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleSubmitComment = async () => {
    try {
      const commentData = { username: username, comment: commentInput, Date: currentDate };
      console.log("Submitting comment:", commentData);

      const response = await axios.post(`https://cooks-collage.onrender.com/api/v1/blog/add-comment/${id}`, commentData);
      if (response.data?.success) {
        console.log("Comment added successfully:", response.data.comment);
        setComments([...comments, response.data.comment]); // Assuming the API returns the newly added comment
        setCommentInput('');
        window.location.reload();
      }
    } catch (error) {
      console.log("Error submitting comment:", error);
    }
  };

  return (
    <div>
      <Box
        width={"60%"}
        border={3}
        borderRadius={10}
        padding={2}
        margin="auto"
        boxShadow={"10px 10px 20px #ccc"}
        display="flex"
        flexDirection={"column"}
        marginTop="30px"
        bgcolor="white"
      >
        <IconButton onClick={handleGoBack} style={{ alignSelf: 'flex-start', marginBottom: '-30px' }}>
          <ArrowBackIcon />
        </IconButton>
        {blog && (
          <Card>
            <Typography variant="h3" textAlign={"center"} component="div" sx={{ fontWeight: 'bold' }}>
              {blog.title}
            </Typography>
            <CardMedia
              component="img"
              height="500"
              image={blog.image}
              alt="Blog related image"
            />
            <CardContent>
              <Typography component="div">
                <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', color: 'inherit' }}>
                  {blog.content}
                </pre>
              </Typography>
            </CardContent>
          </Card>
        )}
        <Typography variant="h5" padding={1} component="div" textAlign="center" sx={{ fontWeight: 'bold' }}>
          Comments
        </Typography>
        {comments && comments.map((comment, index) => (
          <Card key={index} sx={{ marginTop: '10px' }}>
            <CardContent>
              <Typography variant="body1" color="black">
                {comment?.username}
              </Typography>
              <Typography variant="body1" color="black">
                {comment?.comment}
              </Typography>
              <Typography variant="body1" color="black">
                {comment?.createdAt}
              </Typography>
            </CardContent>
          </Card>
        ))}
        <TextField
          label="Add a comment"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={commentInput}
          onChange={handleCommentInputChange}
          style={{ marginTop: '20px' }}
        />
        <Button variant="contained" onClick={handleSubmitComment} style={{ marginTop: '10px' }}>
          Post Comment
        </Button>
      </Box>
    </div>
  );
};

export default BlogContent;
