import "./experience.css";

function Experience() {
  return (
    <div className="experience__container bg-dark">
      <div className="experience__box">
        <div className="experience__title--box">
          <div className="experience__title text-center mt-5 ">About Me</div>
          <div className="experience__line"></div>
        </div>

        {/* content */}
        <div className="experience__content">
          <div className="experience__content--left">
            <div>3+ </div>
            <div>Years Working Experience </div>
          </div>
          <div className="experience__content--right">
            <div className="content__right--text">
              Học hỏi và tập trung phát triển trong lĩnh vực Nghiên Cứu, Phân
              Tích và Xây Dựng Chiến Lược Truyền Thông, Marketing. Bên cạnh đó
              cũng là tiếp cận sâu hơn với nền tảng Digital để nắm bắt thị
              trường tiềm năng trong thời đại công nghệ số phát triển mạnh mẽ.
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
