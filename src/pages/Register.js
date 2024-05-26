import React,{useState} from 'react'
import {Box,Typography,TextField,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Register() {
  const navigate = useNavigate()
  const [inputs,setInputs] = useState({
    name:'',
    email:'',
    password:''
  });
  const handleChange=(e)=>{
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const {data} = await axios.post('https://cooks-collage.onrender.com/api/v1/user/register',{
        username:inputs.name,
        email:inputs.email,
        password:inputs.password,
      })
      if(data.success){
        toast.success('user register successfully');
        navigate('/login');
      }
    } catch(error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Box
        maxWidth={450}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        boxShadow="10px 10px 20px #ccc"
        padding={3}
        borderRadius={5}
        bgcolor="white"
      >
        <Typography sx={{fontFamily: "Georgia, serif", fontWeight: "bold"}} variant="h4" padding={3} textAlign="center">
          Register
        </Typography>
        <TextField
          placeholder="name"
          value={inputs.name}
          onChange={handleChange}
          name="name"
          margin="normal"
          type={"name"}
          required
        />
        <TextField
          placeholder="email"
          value={inputs.email}
          onChange={handleChange}
          name="email"
          margin="normal"
          type={"email"}
          required
        />
        <TextField
          placeholder="password"
          value={inputs.password}
          onChange={handleChange}
          name="password"
          margin="normal"
          type={"password"}
          required
        />
        <Button type="submit"
        sx={{
          fontWeight: "bold" ,
          borderRadius:3,marginTop:3,
          bgcolor: "LightCyan",
          color:"black" }}
        variant="contained"
        >Submit</Button>
        <Button onClick={() => navigate('/login')} 
          sx={{fontFamily: "Georgia, serif",color:"blue",borderRadius:3,marginTop:3}}>
          Already Registered?Please Login
        </Button>
      </Box>
      </form>
    </div>
  )
}

export default Register