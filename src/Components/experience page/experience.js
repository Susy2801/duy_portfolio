import "./experience.css";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

function Experience() {
  const name = [
    {
      name: "Techvify",
      startDate: "10/10/2024",
      endDate: "10/10/2024",
      img: "https://techvify-software.com/wp-content/uploads/2022/11/techvify-software.jpg",
    },
    {
      name: "Capidemy",
      startDate: "10/10/2024",
      endDate: "10/10/2024",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dF_K8IalG90CklyIvqeQQnIqaRmDHmTVevEizjORQHYmOXBWvtBADMCMIbdLhT-yfUU&usqp=CAU",
    },
    {
      name: "Moonlab",
      startDate: "10/10/2024",
      endDate: "10/10/2024",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0Yj58TxF8ieMPtWGpHvx3--1cnrs4bwJaw&s",
    },
  ];

  const intro = [
    {
      intro: `Phân tích và đánh giá khóa học, đưa ra đề xuất cải thiện cùng các thị trường và nền tảng tiềm năng, đồng thời học thiết kế UI/UX.`,
      title: "Marketing",
    },
    {
      intro:
        "Nghiên cứu thị trường, phân tích insight khách hàng, thực hiện SEO, hỗ trợ nội dung và Ads trên Facebook, LinkedIn, và xây dựng kịch bản video cho Facebook, YouTube.",
      title: "Marketing",
    },
    {
      intro:
        "Xây dựng kênh blockchain, tối ưu UI/UX, phát triển cộng đồng, phối hợp dev hoàn thiện sản phẩm, phân tích dữ liệu và tự động hóa Marketing.",
      title: "Marketing",
    },
  ];

  const { ref, inView, entry } = useInView({
    /* Cấu hình tùy chọn */
    threshold: 0.6, // 50% phần tử vào vùng hiển thị thì coi như đã inView
    triggerOnce: false, // Chỉ kích hoạt một lần khi phần tử vào view
  });

  return (
    <div className="experience__container">
      <div className="experience__box">
        <div className="experience__title">
          My <span>Work Experience</span>
        </div>
        <div
          className="experience__main"
          // style={{ justifyContent: inView ? "start" : "center" }}
        >
          {/* <div className="name__date animate__animated animate__fadeInLeft">
            {name.map((info) => {
              return (
                <div>
                  <div>{info.name}</div>
                  <div>{info.date}</div>
                </div>
              );
            })}
          </div>
          <img src={frame} className=" "></img>
          <div className="intro animate__animated animate__fadeInRight">
            {intro.map((info) => {
              return (
                <div>
                  <div className="intro__title">{info.title}</div>
                  <div className="intro__content">{info.intro}</div>
                </div>
              );
            })}
          </div> */}

          {name.map((info) => {
            return (
              <div
                className="job__box"
                ref={ref}
                style={{
                  opacity: inView ? "100%" : "0%",
                }}
              >
                <div className="job__img--box">
                  {" "}
                  <img src={info.img} alt="??" className="job__img" />
                </div>
                <div className="job__name">{info.name}</div>
                <div className="job__date">
                  {info.startDate} - {info.endDate}
                </div>
                <div className="job__btn--box">
                  <button className="job__btn">View more</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
