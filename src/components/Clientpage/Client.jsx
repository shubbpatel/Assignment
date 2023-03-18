import { Avatar, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./client.css";
import { borderRadius, Box } from "@mui/system";
import InputIcon from "@mui/icons-material/Input";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import SendToMobileOutlinedIcon from "@mui/icons-material/SendToMobileOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DataTable from "../table/DataTable";
import { Input } from "antd";
import { LockOutlined, SearchOutlined } from "@ant-design/icons";
export default function Client() {
  const [buttons, setButtons] = useState([
    { id: 1, clicked: false, bName: "View Clients" },
    { id: 2, clicked: false, bName: "Add Clients" },
  ]);

  const handleButtonClick = (id) => {
    const updatedButtons = buttons.map((button) =>
      button.id === id
        ? { ...button, clicked: true }
        : { ...button, clicked: false }
    );
    setButtons(updatedButtons);
  };

  return (
    <div
      className="clientTable"
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <div
        className="leftMenu"
        style={{
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            padding: "12px 16px",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{
              fontFamily: "Nunito Sans",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "120%",
              mb: 1,
            }}
          >
            Company name
          </Typography>
          <Input  style={{
            padding: "12px 16px",
            gap: "8px",
            borderRadius: "24px",
            border: "1px solid #B8BABC",
            width: "272px",
            height:'40px'
            // height: '40px',
          }} placeholder="Search modules" prefix={<SearchOutlined style={{color:'#B8BABC'}}/>}/>

          
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontWeight: 800,
              fontSize: "14px",
              lineHeight: "19px",
              mt: 2,
              mb: 1,
              color: "#B8BABC",
            }}
          >
            CLIENT MASTER
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            {buttons.map((button) => (
              <Button
                key={button.id}
                style={{
                  backgroundColor: button.clicked ? "#153AC7" : "",
                  color: button.clicked ? "white" : "#686687",
                  //   padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  //   marginRight: "10px",
                  fontWeight: 700,
                  //   alignContent: "flex-start",
                  fontSize: "16px",
                  lineHeight: "22px",
                  width: "272px",
                  padding: "8px 16px",
                  textAlign: "left",
                  textTransform: "none",
                }}
                onClick={() => handleButtonClick(button.id)}
              >
                {button.bName}
                {/* {button.clicked ? `${button.bName}` : `${button.bName}`} */}
              </Button>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            padding: "12px 16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <Avatar sx={{ color: "black", background: "yellow" }} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "22px",
                  }}
                >
                  Shubham Patel
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontWeight: 400,
                    color: "#B8BABC",
                    cursor: "pointer",
                  }}
                >
                  Shubham@email.com
                </Typography>
              </Box>
            </Box>

            <SendToMobileOutlinedIcon sx={{ color: "#B8BABC" }} />
          </Box>
        </Box>
      </div>

      <div
        className="tableView"
        style={{
          background: "#F5F5F5",
          width: "83%",
          height: "100vh",
          padding: "0px 16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 0px",
            letterSpacing: "0.01em",
          }}
        >
          <Box>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                fontFamily: "Nunito Sans",
                fontWeight: 800,
                fontSize: "24px",
                lineHeight: "120%",
                //   mb: 1,
              }}
            >
              View Clients
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Client Master / View Clients
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "12px 16px",
            background: "white",
            padding: "16px 24px",
            borderRadius: "5px",
          }}
        >
            <Input  style={{
            padding: "12px 16px",
            gap: "8px",
            borderRadius: "24px",
            border: "1px solid #B8BABC",
            width: "300px",
            height:'40px'
            // height: '40px',
          }} placeholder="Search" prefix={<SearchOutlined style={{color:'#B8BABC'}}/>}/>
          
          <Box>
            <Button
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                border: "1px solid #B8BABC",
                borderRadius: "5px",
                color: "#B8BABC",
                textTransform: "none",
                mr: 1,

                // lineHeight: "20px",
                // width: "45px",
                // height: "20px",
              }}
            >
              Columns <ExpandMoreIcon />
            </Button>
            <Button
              sx={{
                color: "#153AC7",
                // background: '#153AC7',
                border: "1px solid #153AC7",
                borderRadius: "5px",
                fontWeight: 700,
                textTransform: "none",
                background:'#E8EBF9',
              }}
            >
              <FileDownloadOutlinedIcon /> Export
            </Button>
          </Box>
        </Box>
        <Box sx={{}}>
<DataTable/>
        </Box>
      </div>
    </div>
  );
}
