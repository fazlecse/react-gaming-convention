import {
  FaCircleUser,
  FaPiggyBank,
  FaHospitalUser,
  FaBagShopping,
} from "react-icons/fa6";
const HowItWork = () => {
  return (
    <div className="py-20">
    <div className="container mx-auto p-3 sm:p-0 text-white bg-cover ">
      <div className="mb-20 text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold font-chakraPetch mb-5">
          HOW IT WORKS
        </h2>
        <p>It's easier than you think. Follow 4 simple easy steps</p>
      </div>
      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-4 gap-10" data-aos="fade-down">
        <div className="text-center">
          <div className="mx-auto w-[70px] h-[70px] bg-[#4609C3] rounded-lg text-3xl flex items-center justify-center relative">
            <FaCircleUser></FaCircleUser>
            <div className="absolute -top-2 -right-2 rounded text-lg  bg-gradient-to-r from-[#F029A0] to-[#F0B000] text-white w-6 h-6 flex items-center justify-center">
              1
            </div>
          </div>
          <h4 className="text-2xl font-semibold font-chakraPetch mt-4">
            SIGNUP
          </h4>
        </div>
        <div className="text-center">
          <div className="mx-auto w-[70px] h-[70px] bg-[#4609C3] rounded-lg text-3xl flex items-center justify-center relative">
            <FaPiggyBank></FaPiggyBank>
            <div className="absolute -top-2 -right-2 rounded text-lg  bg-gradient-to-r from-[#F029A0] to-[#F0B000] text-white w-6 h-6 flex items-center justify-center">
              2
            </div>
          </div>
          <h4 className="text-2xl font-semibold font-chakraPetch mt-4">
            DEPOSIT
          </h4>
        </div>
        <div className="text-center">
          <div className="mx-auto w-[70px] h-[70px] bg-[#4609C3] rounded-lg text-3xl flex items-center justify-center relative">
            <FaHospitalUser></FaHospitalUser>
            <div className="absolute -top-2 -right-2 rounded text-lg  bg-gradient-to-r from-[#F029A0] to-[#F0B000] text-white w-6 h-6 flex items-center justify-center">
              3
            </div>
          </div>
          <h4 className="text-2xl font-semibold font-chakraPetch mt-4">
            COMPETE
          </h4>
        </div>
        <div className="text-center">
          <div className="mx-auto w-[70px] h-[70px] bg-[#4609C3] rounded-lg text-3xl flex items-center justify-center relative">
            <FaBagShopping></FaBagShopping>
            <div className="absolute -top-2 -right-2 rounded text-lg  bg-gradient-to-r from-[#F029A0] to-[#F0B000] text-white w-6 h-6 flex items-center justify-center">
              4
            </div>
          </div>
          <h4 className="text-2xl font-semibold font-chakraPetch mt-4">
            GET PAID
          </h4>
        </div>
      </div>
      <div className="text-center ">
        <button className="mt-14 btn bg-gradient-to-r from-[#F029A0] to-[#F0B000] text-white">
          Join now
        </button>
      </div>
    </div>
  </div>
  );
};

export default HowItWork;
