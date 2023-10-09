import bannerImg1 from "../../assets/game-charecters.png";
const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/r2CHB2Y/banner-bg.png')] bg-no-repeat bg-cover">
      <div className="container mx-auto p-3 sm:p-2 text-center -mt-[96px]">
        <div className="pt-48 pb-10 space-y-5">
          <h2 className="text-2xl sm:text-4xl font-bold font-chakraPetch text-[#00FADF]">
            PLAY UNLIMITED
          </h2>
          <h1 className="text-3xl md:text-7xl font-bold font-chakraPetch text-white">
            TOURNAMENTS
          </h1>
          <p className="text-lg text-white max-w-xl mx-auto">
            Compete in Free and Paid entry Tournaments. Transform your games to
            real money eSports
          </p>
        </div>
        <div data-aos="fade-up">
          <img className="mx-auto" src={bannerImg1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
