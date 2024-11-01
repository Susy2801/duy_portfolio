import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/header/header";
import Main from "./Components/main page/main";
import Experience from "./Components/experience page/experience";
import Contact from "./Components/contact page/contact";
import { useEffect } from "react";
import axios from "axios";

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
      <div id="home">
        <Main />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
