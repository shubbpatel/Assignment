import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ForestRoundedIcon from "@mui/icons-material/ForestRounded";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="#233244"
      // align="center"
      {...props}
    >
      {`© Punctualiti 2022. All rights reserved ${new Date().getFullYear()}.`}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "} */}
      {/* {new Date().getFullYear()} */}
      {/* {"."} */}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh", width: "100vw" }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:"space-between",
        }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"space-around",
              padding: "4rem",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "green" }}>
              <ForestRoundedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                fontFamily: "Nunito Sans",
                fontWeight: 800,
                fontSize: "32px",
                lineHeight: "44px",
                color: "#030037",
              }}
            >
              Welcome
            </Typography>
            <Typography
              sx={{
                color: "#686687",
              }}
            >
              Enter your Username and Password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1,
              gap:'10px' }}
            >
                  <Input size="large" placeholder="Username" style={{
                    marginBottom:'10px'
                  }} prefix={<UserOutlined style={{color:'#B8BABC'}} />} />
                  <Input size="large" placeholder="Password" prefix={<LockOutlined style={{color:'#B8BABC'}}/>}/>

              
             
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background: "#1334B3",
                  fontFamily: "Nunito Sans",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
                onClick={()=>{
                  const user = document.getElementById('username')
                  const password = document.getElementById('password')
                  // if(user === true && password === true){

                    alert('logged in successfully')
                    window.location = '/clientmaster'
                  // }
                }}
              >
                Login
              </Button>
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      color: "#686687",
                      fontWeight: "700",
                      textDecoration: "none",
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
             
            </Box>
           

          </Box>
          <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width:"100%",
            // justifyContent: "center",
            mb:2,
          }}>
          <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  // alignItems: "center",
                  // justifyContent: "center",
                  gap: "1rem",
                  // mt:5,
                }}
              >
                <a href="" style={{ textDecoration: "none", color: "#233244" }}>
                  Terms of Use
                </a>
                <a href="" style={{ textDecoration: "none", color: "#233244" }}>
                  Privacy Policy
                </a>
              </Typography>
              <Copyright/>
                {/* <Typography>© Punctualiti 2022. All rights reserved</Typography> */}
              </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            background: "#1334B3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // position: 'absolute',
            top: "0px",
            left: "0px",
            padding: "0 8rem",
          }}
        >
          <Box
            sx={{
              // width: "506px",
              width: "450px",
              // height: "781px",
              height: "650px",
              position: "absolute",
              // borderTopRightRadius: '200px',
              clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
              transform: "rotate(-90deg)",

              // left: '243px',
              // top: '141px',
              boxShadow: "0px 12px 48px rgba(3, 0, 55, 0.15)",

              backgroundColor: "black",
              borderRadius: "10px",

              // padding:'2rem',
              opacity: "5%",
              zIndex: 2,
              // margin: '2rem',
            }}
          ></Box>
          <Box
            className="absolute"
            sx={{
              position: "absolute",
              zIndex: 3,
              // height: "644.22px",
              height: "550.22px",
              // width: "553.03px",
              width: "450.03px",
              borderRadius: "10px",
              // left: '243px',
              // top: '141px',
              boxShadow: "0px 12px 48px rgba(3, 0, 55, 0.15)",
              clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
              transform: "rotate(90deg)",

              background: "white",
              // display:'none',
            }}
          ></Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: '0 5rem',
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              style={{
                color: "white",
                fontFamily: "Nunito Sans",
                fontStyle: "normal",
                fontWeight: "800",
                textAlign: "center",

                fontSize: "32px",
                // position: "absolute",
                bottom: "80px",

                zIndex: 4,
              }}
            >
              360° Solution for Asset Management
            </Typography>
            <Typography
              component="p"
              variant="p"
              style={{
                color: "white",
                fontFamily: "Nunito Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "22px",
                textAlign: "center",
                // position: "absolute",
                bottom: "50px",
                zIndex: 4,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
