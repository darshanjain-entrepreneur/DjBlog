import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,

  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast  from "react-hot-toast";
import Button from '@mui/material/Button';
const Header = () => {
  // global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem('userId');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state
 

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.Logout());
    toast.success('logged out');
     localStorage.removeItem("userId");
      navigate("/login");
  
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
        <Button
     
      sx={{ margin: 1, color: 'white' }}
      size="large"
      component={Link}
      to="/blogs"
    >
      DjBlog
    </Button>
          {isLogin && (
            <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
              {/* <Tabs
                textColor="inherit"
              
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab label="Blogs"    LinkComponent={Link} to="/blogs" />
                <Tab label="My Blogs" LinkComponent={Link} to="/myblogs" />
                <Tab label="Create Blog" LinkComponent={Link} to="/createblog" />
               
              </Tabs> */}

<Button
                  sx={{ margin: 1, color: "white" }}
                 
                  LinkComponent={Link}
                  to="/blogs"
                >
                  Blogs
                </Button>
<Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/myblogs"
                >
                  My Blogs
                </Button>
<Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/createblog"
                >
                 Create Blog
                </Button>




            </Box>
          )}
          <Box display={"flex"} marginLeft="auto">
            {!isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  variant="contained"
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  variant="contained" 
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
            {isLogin && (
              <Button    variant="contained"  onClick={handleLogout} sx={{ margin: 1, color: "white" }}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;