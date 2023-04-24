import Typed from "react-typed";
// import ReactTyped from "react-typed";

function Hero() {
  return (
    <div className="pt-24 text-white">
      <div className="mx-auto mt-[-96px] flex h-screen w-full max-w-[800px] flex-col justify-center text-center">
        <p className="font-bold text-[#00df9a]">동료들과 함께 성장하세요</p>
        <h1 className="pb-3 pt-2 text-4xl font-bold sm:text-6xl md:py-6 md:text-7xl">
          끝없이 성장하세요.
        </h1>
        <div className="flex justify-center">
          <p className="text-lg font-bold sm:text-2xl md:text-3xl">
            기본기가 탄탄한
          </p>
          <Typed
            loop
            strings={["Developer", "Designer", "PM"]}
            typeSpeed={120}
            backSpeed={140}
            className="pl-2 text-lg font-bold text-purple-700 sm:text-2xl md:text-3xl"
          />
        </div>
        <p className="pt-3 text-lg font-bold text-gray-500 md:pt-6 md:text-2xl ">
          끊임없이 소통하며 느낌표를 만드세요
        </p>
        <button className="mx-auto my-6 w-[170px] rounded-md bg-[#00df9a] py-3 font-medium text-black hover:opacity-80">
          시작하기
        </button>
      </div>
    </div>
  );
}

export default Hero;
