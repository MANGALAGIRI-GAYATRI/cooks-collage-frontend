
import React,{useState} from 'react'
import {Box,Typography,TextField,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/store';

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [inputs,setInputs] = useState({
    email:'',
    password:'',
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
      const { data } = await axios.post('https://cooks-collage.onrender.com/api/v1/user/login',{
        email:inputs.email,
        password:inputs.password
      })
      if(data.success){
        localStorage.setItem('userId', data.user._id);
        localStorage.setItem('username', data.user.username);
        //localStorage.setItem('userId',data?.user._id)
        dispatch(authActions.login());
        alert('user login successfully');
        navigate('/');
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
          Login
        </Typography>
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
        >
          Submit
        </Button>
        <Button onClick={() => navigate('/register')} 
          sx={{fontFamily: "Georgia, serif",color:"blue",borderRadius:3,marginTop:3}}>
          Not a user ? Please Register
        </Button>
      </Box>
      </form>
    </div>
  )
}
export default Login