import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/header/header";
import Main from "./Components/main page/main";
import Experience from "./Components/experience page/experience";
import Contact from "./Components/contact page/contact";
import Journey from "./Components/journey page/journey";
import Skill from "./Components/skill/skill";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FacebookIcon from "@mui/icons-material/Facebook";

// Các hành động cho SpeedDial
const actions = [
  { icon: <FileCopyIcon />, name: "Copy", event: () => console.log("Copy") },
  { icon: <SaveIcon />, name: "Save", event: () => console.log("Save") },
  {
    icon: <FacebookIcon />,
    name: "Facebook",
    event: checkFaceBook,
  },
  { icon: <AccountBoxIcon />, name: "My CV", event: checkCV },
];

// Hàm mở CV
function checkCV() {
  window.open(
    "https://www.topcv.vn/xem-cv/VlAAU1lbUQcBUAQHBgYBBA0DUwUFBgdVVlcMUAa5b2"
  );
}
function checkFaceBook() {
  window.open("https://www.facebook.com/nguyenvietduy.nguyen.965/");
}

function App() {
  useEffect(() => {
    // Kiểm tra xem mã định danh đã được lưu trong cookie chưa
    let userId = document.cookie.replace(
      /(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    // Nếu chưa có, tạo một mã định danh ngẫu nhiên và lưu vào cookie
    if (!userId) {
      userId =
        Math.random().toString(36).substring(2) + Date.now().toString(36);
      document.cookie = `userId=${userId}; path=/; max-age=31536000`; // Cookie hết hạn sau 1 năm
    }

    // Gửi userId lên server cùng với thông tin khác
    axios
      .post("https://express-server-roan.vercel.app/visit/tracking", {
        userId, // Bao gồm userId trong yêu cầu
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error tracking visit:", error);
      });
  }, []);
  return (
    <div className="App">
      <Header />

      <div className="noti">
        <Box
          sx={{
            height: 320,
            transform: "translateZ(0px)",
            flexGrow: 1,
          }}
        >
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{
              position: "absolute",
              bottom: 16,
              right: 16,
              bgcolor: "transparent", // Đổi màu nền của SpeedDial
              "& .MuiFab-primary": {
                // Đổi màu nền cho icon chính
                backgroundColor: "#fd853a",
                color: "white", // Đổi màu của icon
                "&:hover": {
                  backgroundColor: "#fd853a", // Màu nền khi hover
                },
              },
            }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                onClick={action.event} // Sử dụng action.event thay vì gọi hàm trực tiếp
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>
      </div>
      <div id="home">
        <Main />
      </div>
      <div id="journey">
        <Journey />
      </div>

      <div id="experience">
        <Experience />
      </div>
      {/* <div id="skill">
        <Skill />
      </div> */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
