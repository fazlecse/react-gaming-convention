import {
  FaBagShopping,
  FaCircleUser,
  FaHospitalUser,
} from "react-icons/fa6";
import { RiLuggageDepositLine } from "react-icons/ri";
import { GiSpeedBoat } from "react-icons/gi";
import { SiLevelsdotfyi } from "react-icons/si";

const Feature = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto p-3 sm:p-0 text-white bg-cover ">
        <div className="mb-20 text-center" data-aos="fade-up">
          <h2 className="text-5xl font-bold font-chakraPetch mb-5">
            ALACTIC GAMES FEATURES
          </h2>
          <p>The biggest esports tournaments anytime, anywhere</p>
        </div>
        <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-8" data-aos="fade-down">
          <div className="text-center space-y-2">
            <div className="mx-auto w-[70px] h-[70px] bg-[#4609C3] rounded-lg text-3xl flex items-center mb-8 justify-center">
              <FaCircleUser></FaCircleUser>
            </div>
            <h4 className="text-2xl font-semibold font-chakraPetch">
              PREMIUM SUPPORT
            </h4>
            <p>
              Our dedicated admins are there to answer in no time, avg response
              time is 5mins.
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="mx-auto w-[70px] h-[70px] bg-[#4609C3] rounded-lg text-3xl flex items-center mb-8 justify-center">
              <RiLuggageDepositLine></RiLuggageDepositLine>
            </div>
            <h4 className="text-2xl font-semibold font-chakraPetch">
              INSTANT DEPOSITS
            </h4>
            <p>
              Make a deposit and receive your funds instantly to your account.
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="mx-auto w-[70px] h-[70px] bg-[#4609C3] rounded-lg text-3xl flex items-center mb-8 justify-center">
              <FaHospitalUser></FaHospitalUser>
            </div>
            <h4 className="text-2xl font-semibold font-chakraPetch">
              CLIMB THE LEADERBOARDS
            </h4>
            <p>
              Compete in monthly leaderboard challenges for real cash and
              prizes.
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="mx-auto w-[70px] h-[70px] bg-[#4609C3] rounded-lg text-3xl flex items-center mb-8 justify-center">
              <FaBagShopping></FaBagShopping>
            </div>
            <h4 className="text-2xl font-semibold font-chakraPetch">
              MAKE 2X YOUR $$
            </h4>
            <p>
              Our dedicated admins are there to answer in no time, avg response
              time is 5mins.
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="mx-auto w-[70px] h-[70px] bg-[#4609C3] rounded-lg text-3xl flex items-center mb-8 justify-center">
              <GiSpeedBoat></GiSpeedBoat>
            </div>
            <h4 className="text-2xl font-semibold font-chakraPetch">
              MAKE UP TO 10X YOUR $$
            </h4>
            <p>
              Make up to 10X your money on multiplayer tourneys. With paid and
              free entry.
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="mx-auto w-[70px] h-[70px] bg-[#4609C3] rounded-lg text-3xl flex items-center mb-8 justify-center">
              <SiLevelsdotfyi></SiLevelsdotfyi>
            </div>
            <h4 className="text-2xl font-semibold font-chakraPetch">
              PLAY AT YOUR LEVEL
            </h4>
            <p>
              With ranked divisions we help you find the right level to compete.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
