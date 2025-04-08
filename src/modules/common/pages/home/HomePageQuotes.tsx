const HomepageQuotes = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full my-20 px-4 md:px-0">
      {/* Ảnh */}
      <div className="flex-1 flex justify-center items-center mb-10 md:mb-0">
        <img
          src="https://ictv.1cdn.vn/2023/04/26/chu-tich-hdqt-fpt-truong-gia-binh.jpg"
          alt="Trương Gia Bình"
          className="rounded-full object-cover w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
        />
      </div>

      {/* Nội dung quote */}
      <div className="flex-1 text-xl md:text-2xl relative w-full md:max-w-[50%] mx-auto pt-20 pb-20">
        {/* Quote mở đầu */}
        <div className="absolute text-[60px] md:text-[90px] lg:text-[120px] top-0 left-[30px] md:left-[50px]">
          ❝
        </div>

        {/* Nội dung văn bản */}
        <p className="w-full md:w-2/3 mx-auto text-justify">
          Việt Nam đã thành lập các tập đoàn lớn, nhưng câu hỏi đặt ra là chúng ta có chung sức để làm những việc lớn hơn nữa không?
          <b>
            Bài học lịch sử trả lời rằng, chỉ khi nào đối diện thử thách lớn thì chúng ta mới có thể chung tay, chung sức đồng lòng.
          </b>
        </p>

        {/* Tên người phát biểu */}
        <div className="flex flex-col items-center w-full md:w-2/3 mx-auto">
          <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 w-full h-1 my-5"></div>
          <p className="text-base md:text-lg font-semibold text-center">
            Doanh nhân <b>TRƯƠNG GIA BÌNH</b>
            <br />
            <i>Chủ tịch FPT</i>
          </p>
        </div>

        {/* Quote đóng */}
        <div className="absolute text-[60px] md:text-[90px] lg:text-[120px] bottom-0 right-[30px] md:right-[75px]">
          ❞
        </div>
      </div>
    </div>
  );
};

export default HomepageQuotes;