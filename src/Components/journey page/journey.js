import "./journey.css";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import { Button, Box, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules"; // Đảm bảo 'Navigation' được import từ 'swiper'
import "swiper/css";
import "swiper/css/navigation";
// Logo imports
import html_logo from "../Asset/html 5.png";
import js_logo from "../Asset/JS.png";
import css_logo from "../Asset/CSS.png";
import react_logo from "../Asset/reactjs.png";
import node_logo from "../Asset/nodejs_2.png";
import sql_logo from "../Asset/SQL.png";
import next_logo from "../Asset/nextjs.png";
import boostrap_logo from "../Asset/Boostrap.png";
import express_logo from "../Asset/express.png";
import mongo_logo from "../Asset/mongodb.png";
import bg from "../Asset/beautiful-constellations-planet.jpg";

function Journey() {
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const logoArray = [
    html_logo,
    js_logo,
    css_logo,
    react_logo,
    node_logo,
    sql_logo,
    next_logo,
    boostrap_logo,
    express_logo,
    mongo_logo,
  ];

  const [value, setValue] = useState(2);

  return (
    <div className="journey__container">
      <Marquee speed={80} loop={0} className="slider" gradient={true}>
        {logoArray.map((logo, index) => (
          <div className="slide" key={index}>
            <img src={logo} alt="technology logo" />
          </div>
        ))}
      </Marquee>
      <div className="journey__box">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image": `url(${bg})`,
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Slide 1
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Slide 2
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Slide 3
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Journey;

{
  /* <Box sx={{ "& > legend": { mt: 2 } }}>
<Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
</Box> */
}
