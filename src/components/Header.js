import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from "@mui/material";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Header() {
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");

  const username = useSelector((state) => state.username) || localStorage.getItem("username");

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [value, setValue] = useState()

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AppBar position='sticky' sx={{ bgcolor: "LightCyan" }}>
        <Toolbar >
          <Typography variant='h3' sx={{ fontFamily: "cursive", color: "black" }}>CooksCollage</Typography>
          {isLogin && (
            <Box display={'flex'} marginLeft='auto' marginRight={'auto'}>
              <Tabs
                textColor='inherit'
                value={value}
                onChange={(e, val) => setValue(val)}>

                <Tab sx={{ fontFamily: "Georgia, serif", fontWeight: "bold", color: "black" }} label="Home" LinkComponent={Link} to='/home' />
                <Tab sx={{ fontFamily: "Georgia, serif", fontWeight: "bold", color: "black" }} label="Tips" LinkComponent={Link} to='/tips' />
                <Tab sx={{ fontFamily: "Georgia, serif", fontWeight: "bold", color: "black" }} label="Recipes" LinkComponent={Link} to='/blogs' />
                <Tab sx={{ fontFamily: "Georgia, serif", fontWeight: "bold", color: "black" }} label="My Recipes" LinkComponent={Link} to='/my-blogs' />
                <Tab sx={{ fontFamily: "Georgia, serif", fontWeight: "bold", color: "black" }} label="Create Recipe" LinkComponent={Link} to='/create-blog' />
              </Tabs>
            </Box>)}
          <Box display={"flex"} marginLeft="auto" >
            {!isLogin && (<>
              <Button sx={{ fontFamily: "Georgia, serif", fontWeight: "bold", margin: 1, color: "black" }} LinkComponent={Link} to='/home'>Home</Button>
              <Button sx={{ fontFamily: "Georgia, serif", fontWeight: "bold", margin: 1, color: "black" }} LinkComponent={Link} to='/tips'>Tips</Button>
              <Button sx={{ fontFamily: "Georgia, serif", fontWeight: "bold", margin: 1, color: "black" }} LinkComponent={Link} to='/login'>Login</Button>
              <Button sx={{ fontFamily: "Georgia, serif", fontWeight: "bold", margin: 1, color: "black" }} LinkComponent={Link} to='/register'>register</Button>
            </>)}
            {isLogin && (
              <>
                <Typography sx={{ fontFamily: "Georgia, serif", fontWeight: "bold", margin: 1, color: "black", padding: 1 }}>{username}</Typography>
                <Button onClick={handleLogout} sx={{ fontFamily: "Georgia, serif", fontWeight: "bold", margin: 1, color: "black" }}>Logout</Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header