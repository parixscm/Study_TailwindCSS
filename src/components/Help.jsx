import laptop from "../assets/laptop.jpeg";

function Help() {
  return (
    <div className="w-full bg-white px-4 py-8 text-black">
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
        <img src={laptop} alt="laptop" className="mx-auto my-4 w-4/5" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#00df9a]">체계적인 관리</p>
          <h1 className="py-2 text-xl font-bold sm:text-2xl md:text-3xl">
            태스크 매니저가 항시 대기중입니다
          </h1>
          <p>
            방향을 잃은 느낌이 드시나요? 겁 먹지 마세요. 태스크 매니저가 갈 길
            잃은 여러분들을 위해 항시 대기중입니다. 도움이 필요하면 언제든
            요청하세요!
          </p>
          <button className="mx-auto my-6 w-[170px] rounded-md bg-black py-3 font-medium text-[#00df9a] hover:opacity-80 md:mx-0">
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Help;
